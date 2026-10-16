#!/usr/bin/env python3
"""Fetch market prices -> data/prices.json. Tries stdlib urllib first; Yahoo usually answers 429 to
non-browser clients (also from GitHub runners), so it falls back to headless Chrome via Playwright
(pip install playwright; uses system Chrome at /usr/bin/google-chrome or $CHROME). Yahoo Finance chart API with browser UA,
retry/backoff, query1/query2 hosts. A failed symbol keeps its last good value and timestamp
(never invents values). Run hourly by .github/workflows/news.yml."""
import json, os, sys, time, urllib.request
from datetime import datetime, timezone
SYMS = {"spx": "^GSPC", "dow": "^DJI", "ndq": "^IXIC", "y10": "^TNX", "wti": "CL=F", "brent": "BZ=F",
        "gold": "GC=F", "set": "^SET.BK", "thb": "THB=X"}
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data", "prices.json")

PG = None
def browser_json(url):
    global PG
    if PG is None:
        from playwright.sync_api import sync_playwright
        pw = sync_playwright().start()
        b = pw.chromium.launch(executable_path=os.environ.get("CHROME", "/usr/bin/google-chrome"), args=["--no-sandbox"])
        PG = b.new_context(user_agent=UA).new_page()
    PG.goto(url, timeout=30000)
    return json.loads(PG.inner_text("body"))

def get(sym):
    last = None
    for attempt in range(4):
        host = ("query1", "query2")[attempt % 2]
        url = f"https://{host}.finance.yahoo.com/v8/finance/chart/{urllib.parse.quote(sym)}?range=5d&interval=1d"
        try:
            if attempt == 0:
                req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
                j = json.load(urllib.request.urlopen(req, timeout=15))
            else:
                j = browser_json(url)
            r = j["chart"]["result"][0]; m = r["meta"]
            closes = [c for c in (r.get("indicators", {}).get("quote", [{}])[0].get("close") or []) if c is not None]
            px = m.get("regularMarketPrice")
            # daily change vs the previous session's close (last close before today's bar)
            prev = closes[-2] if len(closes) >= 2 else m.get("chartPreviousClose")
            if px is None: raise ValueError("no price")
            return {"v": round(px, 4), "chg": round((px / prev - 1) * 100, 2) if prev else None,
                    "t": datetime.fromtimestamp(m["regularMarketTime"], timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
                    "prev": round(prev, 4) if prev else None, "src": "Yahoo Finance " + sym}
        except Exception as e:
            last = e; time.sleep(1.5 * attempt)
    raise last

def main():
    import urllib.parse  # noqa
    old = {}
    if os.path.exists(OUT):
        try: old = json.load(open(OUT)).get("q", {})
        except Exception: pass
    q, ok = dict(old), 0
    for k, s in SYMS.items():
        try: q[k] = get(s); q[k]["stale"] = False; ok += 1
        except Exception as e:
            if k in q: q[k]["stale"] = True
            print(f"{k} {s} FAIL {str(e)[:80]}", file=sys.stderr); continue
        print(f"{k:5} {q[k]['v']} {q[k]['chg']}% {q[k]['t']}", file=sys.stderr)
        time.sleep(0.5)
    data = {"updated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "ok": ok, "q": q}
    if old == q and os.path.exists(OUT): print("no change", file=sys.stderr); return
    json.dump(data, open(OUT, "w"), indent=1)
    print(f"wrote prices.json ({ok}/{len(SYMS)} fresh)", file=sys.stderr)

import urllib.parse
if __name__ == "__main__": main()
