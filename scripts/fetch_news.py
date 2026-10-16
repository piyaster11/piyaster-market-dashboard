#!/usr/bin/env python3
"""Fetch market headlines from free public RSS feeds -> data/news.json (stdlib only).
Keeps the latest ~20 deduped items with title, source, link, UTC time, tag, breaking flag (<60 min)."""
import json, re, os, sys, urllib.request, xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

FEEDS = [
 ("CNBC", "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100003114"),
 ("CNBC Markets", "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000664"),
 ("Reuters", "https://news.google.com/rss/search?q=site:reuters.com+markets+when:1d&hl=en-US&gl=US&ceid=US:en"),
 ("Bloomberg", "https://feeds.bloomberg.com/markets/news.rss"),
 ("MarketWatch", "https://feeds.content.dowjones.io/public/rss/mw_topstories"),
 ("CoinDesk", "https://www.coindesk.com/arc/outboundfeeds/rss/"),
 ("OilPrice", "https://oilprice.com/rss/main"),
 ("Bangkok Post", "https://www.bangkokpost.com/rss/data/business.xml"),
 # Nikkei's own RSS (asia.nikkei.com/rss/feed/nar) has no dates, so use Google News; Yahoo Finance RSS returned 404/429.
 ("Nikkei Asia", "https://news.google.com/rss/search?q=site:asia.nikkei.com+when:1d&hl=en-US&gl=US&ceid=US:en"),
]
TAGS = [("FED", r"\bfed\b|federal reserve|powell|warsh|rate (hike|cut)|fomc|treasur|yield"),
        ("OIL", r"\boil\b|crude|brent|wti|opec|diesel|gasoline|hormuz"),
        ("GOLD", r"\bgold\b|bullion"), ("BTC", r"bitcoin|\bbtc\b|crypto|ether|stablecoin"),
        ("WAR", r"\bwar\b|missile|strike|iran|israel|ukrain|russia|houthi|military|attack"),
        ("AI", r"\bai\b|artificial intelligence|nvidia|openai|chip|semiconductor|data cent"),
        ("THAI", r"thai|baht|bangkok|\bset index"), ("CHINA", r"china|chinese|beijing|yuan|xi jinping"),
        ("STOCKS", r"stock|s&p|nasdaq|dow|shares|equit|earnings|wall street")]
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data", "news.json")

def tag(t):
    t = t.lower()
    for k, rx in TAGS:
        if re.search(rx, t): return k
    return "MARKETS"

def parse_time(s):
    if not s: return None
    try: d = parsedate_to_datetime(s.strip())
    except Exception:
        try: d = datetime.fromisoformat(s.strip().replace("Z", "+00:00"))
        except Exception: return None
    return (d if d.tzinfo else d.replace(tzinfo=timezone.utc)).astimezone(timezone.utc)

def fetch(name, url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/rss+xml,application/xml,text/xml,*/*"})
    root = ET.fromstring(urllib.request.urlopen(req, timeout=20).read())
    items = []
    for it in root.iter():
        tagn = it.tag.split("}")[-1]
        if tagn not in ("item", "entry"): continue
        g = lambda n: next((c for c in it if c.tag.split("}")[-1] == n), None)
        title = (g("title").text or "").strip() if g("title") is not None else ""
        ln = g("link"); link = (ln.text or ln.get("href") or "").strip() if ln is not None else ""
        tm = next((g(n).text for n in ("pubDate", "published", "updated", "date") if g(n) is not None), None)
        src = name
        if "news.google.com" in url and " - " in title: title = title.rsplit(" - ", 1)[0]
        d = parse_time(tm)
        if title and link and d: items.append({"title": re.sub(r"\s+", " ", title), "source": src, "link": link, "utc": d.strftime("%Y-%m-%dT%H:%M:%SZ"), "_d": d})
    return items

def main():
    now = datetime.now(timezone.utc); allit, status = [], {}
    for name, url in FEEDS:
        try:
            its = fetch(name, url); allit += its; status[name] = f"ok ({len(its)})"
        except Exception as e:
            status[name] = "fail: " + str(e)[:80]
        print(f"{name:14} {status[name]}", file=sys.stderr)
    seen, out = set(), []
    for it in sorted(allit, key=lambda x: x["_d"], reverse=True):
        if it["_d"] > now: continue
        key = re.sub(r"[^a-z0-9]", "", it["title"].lower())[:60]
        if key in seen: continue
        seen.add(key)
        it["tag"] = tag(it["title"]); it["breaking"] = (now - it["_d"]).total_seconds() < 3600
        it.pop("_d"); out.append(it)
        if len(out) >= 20: break
    data = {"updated": now.strftime("%Y-%m-%dT%H:%M:%SZ"), "feeds": status, "items": out}
    old = None
    if os.path.exists(OUT):
        try: old = json.load(open(OUT))
        except Exception: pass
    if old and old.get("items") == out:
        print("no change", file=sys.stderr); return
    json.dump(data, open(OUT, "w"), ensure_ascii=False, indent=1)
    print(f"wrote {len(out)} items", file=sys.stderr)

if __name__ == "__main__": main()
