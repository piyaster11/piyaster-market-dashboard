#!/usr/bin/env python3
"""Fetch market prices -> data/prices.json (stdlib only). Yahoo Finance chart API with browser UA,
retry/backoff, query1/query2 hosts. A failed symbol keeps its last good value and timestamp
(never invents values). Run hourly by .github/workflows/news.yml."""
import json, os, sys, time, urllib.request
from datetime import datetime, timezone
SYMS = {"spx": "^GSPC", "dow": "^DJI", "ndq": "^IXIC", "y10": "^TNX", "wti": "CL=F", "brent": "BZ=F",
        "gold": "GC=F", "set": "^SET.BK", "thb": "THB=X"}
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data", "prices.json")

def get(sym):
    last = None
    for attempt in range(4):
        host = ("query1", "query2")[attempt % 2]
        url = f"https://{host}.finance.yahoo.com/v8/finance/chart/{urllib.parse.quote(sym)}?range=5d&interval=1d"
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
            m = json.load(urllib.request.urlopen(req, timeout=15))["chart"]["result"][0]["meta"]
            px, prev = m.get("regularMarketPrice"), m.get("chartPreviousClose") or m.get("previousClose")
            if px is None: raise ValueError("no price")
            return {"v": round(px, 4), "chg": round((px / prev - 1) * 100, 2) if prev else None,
                    "t": datetime.fromtimestamp(m["regularMarketTime"], timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
                    "src": "Yahoo Finance " + sym}
        except Exception as e:
            last = e; time.sleep(2 * (attempt + 1))
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
