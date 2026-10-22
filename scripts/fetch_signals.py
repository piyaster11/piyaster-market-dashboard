#!/usr/bin/env python3
"""Early Warning Signals -> data/signals.json. Standard library only, free, no API keys.
Sources: US State Dept travel advisories RSS, UK FCDO travel advice atom, Google News RSS
keyword searches (48h), adsb.lol public military-aircraft feed (Gulf box vs rolling baseline).
Each source is optional: a failing source is recorded in "sources" and scored as 0.
Signals are reported, never invented; the level is a transparent rule-based score, not a prediction."""
import json, re, os, html, urllib.request, urllib.parse, xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta
from email.utils import parsedate_to_datetime

OUT = os.path.join(os.path.dirname(__file__), '..', 'data', 'signals.json')
NOW = datetime.now(timezone.utc)
UA = {'User-Agent': 'Mozilla/5.0 (piyaster-market-dashboard signals)'}
iso = lambda d: d.astimezone(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')

def get(url, t=25):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=t) as r:
        return r.read()

def strip(s): return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', s or ''))).strip()

try: prev = json.load(open(OUT))
except Exception: prev = {}
sources = {}

# ---- a. Official advisories ----
adv = []
try:
    root = ET.fromstring(get('https://travel.state.gov/_res/rss/TAsTWs.xml'))
    seen = set()
    for it in root.iter('item'):
        title = it.findtext('title') or ''; link = it.findtext('link') or ''
        if link in seen: continue
        seen.add(link)
        desc = strip(it.findtext('description'))
        m = re.search(r'Level (\d)', title); lvl = int(m.group(1)) if m else 0
        od = bool(re.search(r'ordered (the )?departure', desc, re.I))
        ad = bool(re.search(r'authorized (the )?departure', desc, re.I))
        pd = (it.findtext('pubDate') or '').strip()
        try: d = parsedate_to_datetime(pd)
        except Exception:
            try: d = datetime.strptime(pd, '%a, %d %b %Y').replace(tzinfo=timezone.utc)
            except Exception: continue
        if d.tzinfo is None: d = d.replace(tzinfo=timezone.utc)
        if lvl >= 4 or od or ad:
            adv.append({'src': 'US State', 'country': title.split(' - ')[0].strip(), 'level': lvl,
                        'ordered': od, 'authorized': ad, 'date': iso(d), 'link': link})
    sources['US State Dept advisories'] = 'ok'
except Exception as e:
    sources['US State Dept advisories'] = 'failed: %s' % e

try:
    A = '{http://www.w3.org/2005/Atom}'
    root = ET.fromstring(get('https://www.gov.uk/foreign-travel-advice.atom'))
    for en in root.iter(A + 'entry'):
        d = datetime.fromisoformat(en.findtext(A + 'updated'))
        if NOW - d > timedelta(hours=72): continue
        summ = strip(ET.tostring(en.find(A + 'summary'), encoding='unicode')) if en.find(A + 'summary') is not None else ''
        link = next((l.get('href') for l in en.findall(A + 'link') if l.get('rel') == 'alternate'), '')
        severe = bool(re.search(r'against all (but essential )?travel|leave (the country|now|immediately)|evacuat', summ, re.I))
        if severe:
            adv.append({'src': 'UK FCDO', 'country': en.findtext(A + 'title'), 'level': 4 if re.search('against all travel', summ, re.I) else 3,
                        'ordered': bool(re.search(r'leave (the country|now|immediately)', summ, re.I)), 'authorized': False,
                        'date': iso(d), 'link': link, 'note': summ[:160]})
    sources['UK FCDO travel advice'] = 'ok'
except Exception as e:
    sources['UK FCDO travel advice'] = 'failed: %s' % e

recent = lambda a, h: NOW - datetime.fromisoformat(a['date'].replace('Z', '+00:00')) <= timedelta(hours=h)
adv.sort(key=lambda a: (a['ordered'] or a['authorized'], a['date']), reverse=True)

# ---- b. Google News keyword signals (48h) ----
TERMS = [('embassy evacuation', 'EVAC', 3), ('"ordered departure" OR "authorized departure"', 'EVAC', 3),
         ('"airspace closed" OR NOTAM airspace', 'AIRSPACE', 3), ('"flights suspended"', 'AIRSPACE', 2),
         ('"private jets" leaving OR departures surge', 'JETS', 2), ('"military aircraft" surge OR "tanker aircraft" deployment', 'MIL', 2),
         ('"carrier strike group"', 'MIL', 2), ('DEFCON', 'NUKE', 2), ('"nuclear alert"', 'NUKE', 3), ('Hormuz closure OR "close the Strait of Hormuz"', 'HORMUZ', 2)]
STRONG = re.compile(r'evacuat|ordered departure|authori[sz]ed departure|airspace (is )?clos|closes airspace|NOTAM|flights? (suspended|cancel)|'
                    r'private jet|carrier strike|tanker|DEFCON|nuclear alert|Hormuz', re.I)
AIRSPACE = re.compile(r'airspace|NOTAM|flights? (are )?(suspended|halted|cancel)', re.I)
heads, gn_ok = {}, 0
for q, tag, w in TERMS:
    try:
        url = 'https://news.google.com/rss/search?' + urllib.parse.urlencode({'q': q + ' when:2d', 'hl': 'en-US', 'gl': 'US', 'ceid': 'US:en'})
        root = ET.fromstring(get(url)); gn_ok += 1
        for it in root.iter('item'):
            t = strip(it.findtext('title')); src = it.findtext('source') or ''
            if src and t.endswith(' - ' + src): t = t[:-len(src) - 3]
            try: d = parsedate_to_datetime(it.findtext('pubDate'))
            except Exception: continue
            if NOW - d > timedelta(hours=48): continue
            if not STRONG.search(t): continue  # headline itself must carry the signal
            key = re.sub(r'[^a-z0-9]', '', t.lower())[:60]
            h = heads.get(key)
            if h: h['tags'] = sorted(set(h['tags'] + [tag])); h['score'] += w; continue
            age = (NOW - d).total_seconds() / 3600
            heads[key] = {'title': t, 'source': src, 'link': it.findtext('link'), 'utc': iso(d), 'tags': [tag],
                          'score': w + len(STRONG.findall(t)) + max(0, 2 - age / 24), 'airspace': bool(AIRSPACE.search(t))}
    except Exception as e:
        sources.setdefault('Google News errors', []).append('%s: %s' % (q, e))
sources['Google News RSS'] = 'ok (%d/%d searches)' % (gn_ok, len(TERMS)) if gn_ok else 'failed'
H = sorted(heads.values(), key=lambda h: (-h['score'], h['utc']))
hits = len(H); air = sum(h['airspace'] for h in H)
top = sorted(H[:10], key=lambda h: h['utc'], reverse=True)
for h in top: h['score'] = round(h['score'], 1)

# ---- c. adsb.lol military aircraft over the Gulf (rolling baseline) ----
BOX = (12.0, 32.0, 34.0, 60.0)  # lat min/max, lon min/max: Red Sea -> Gulf -> Gulf of Oman
mil = None; hist = (prev.get('mil') or {}).get('hist', [])
try:
    ac = json.loads(get('https://api.adsb.lol/v2/mil', 40)).get('ac', [])
    n = sum(1 for a in ac if isinstance(a.get('lat'), (int, float)) and BOX[0] <= a['lat'] <= BOX[1] and BOX[2] <= a['lon'] <= BOX[3])
    base_vals = [x[1] for x in hist if NOW - datetime.fromisoformat(x[0].replace('Z', '+00:00')) <= timedelta(days=7)]
    base = round(sum(base_vals) / len(base_vals), 1) if len(base_vals) >= 6 else None
    hist = (hist + [[iso(NOW), n]])[-168:]
    mil = {'count': n, 'global': len(ac), 'baseline': base, 'samples': len(base_vals), 'hist': hist, 'box': BOX}
    sources['adsb.lol military aircraft'] = 'ok'
except Exception as e:
    sources['adsb.lol military aircraft'] = 'failed: %s' % e
    if prev.get('mil'): mil = dict(prev['mil'], stale=True)

# ---- d. Early Warning Level (0-100, transparent rules) ----
off72 = [a for a in adv if recent(a, 72) and (a['level'] >= 4 or a['ordered'] or a['authorized'])]
c_off = min(40, sum(20 if (a['ordered'] or a['authorized']) else 12 for a in off72))
c_hit = min(35, round(hits * 1.5))
c_air = min(15, air * 3)
c_mil = 0
if mil and mil.get('baseline'):
    c_mil = max(0, min(10, round((mil['count'] / max(mil['baseline'], 1) - 1) * 10)))
comp = [['Official Level-4 / departure advisories, last 72h', len(off72), c_off, 40, '20 per ordered/authorized departure, 12 per other Level 4'],
        ['Signal headlines, last 48h (deduped)', hits, c_hit, 35, '1.5 pts per headline'],
        ['Airspace-closure / flight-suspension headlines', air, c_air, 15, '3 pts each'],
        ['Military aircraft over Gulf vs 7-day baseline', (mil or {}).get('count', '—'), c_mil, 10,
         '10 pts per +100% above baseline' if (mil and mil.get('baseline')) else 'baseline still building (needs 6+ hourly samples)']]
level = sum(c[2] for c in comp)
band = 'Calm' if level < 25 else 'Watch' if level < 50 else 'Alert' if level < 75 else 'Critical'

os.makedirs(os.path.dirname(OUT), exist_ok=True)
json.dump({'updated': iso(NOW), 'level': level, 'band': band, 'components': comp,
           'advisories': [a for a in adv if a['ordered'] or a['authorized'] or recent(a, 24 * 45)][:15],
           'headlines': top, 'mil': mil, 'sources': sources}, open(OUT, 'w'), ensure_ascii=False, indent=1)
print('level', level, band, '| adv', len(adv), 'off72', len(off72), '| hits', hits, 'air', air, '| mil', mil and mil['count'], '|', sources)
