#!/usr/bin/env python3
"""Update data/chart.json: S&P 500 daily OHLC (Yahoo Finance chart API, ~6 months) and
NYSE new 52-week highs/lows (WSJ Markets Diary). WSJ only shows Latest/Previous/Week-ago,
so the highs/lows history is built up by appending each run (no values are invented).
Requires: pip install playwright (uses system Chrome at /usr/bin/google-chrome)."""
import json, datetime as dt, os, re
from playwright.sync_api import sync_playwright
OUT = os.path.join(os.path.dirname(__file__), "..", "data", "chart.json")
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36"

def prev_bday(d, n=1):
    while n:
        d -= dt.timedelta(days=1)
        if d.weekday() < 5: n -= 1
    return d

def main():
    old = json.load(open(OUT)) if os.path.exists(OUT) else {}
    hl = {r["d"]: r for r in old.get("hl", [])}
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        pg = b.new_context(user_agent=UA).new_page()
        pg.goto("https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?range=6mo&interval=1d", timeout=60000)
        j = json.loads(pg.inner_text("body"))["chart"]["result"][0]
        q = j["indicators"]["quote"][0]
        spx = [[dt.datetime.fromtimestamp(t, dt.UTC).strftime("%Y-%m-%d"), round(o, 2), round(h, 2), round(l, 2), round(c, 2)]
               for t, o, h, l, c in zip(j["timestamp"], q["open"], q["high"], q["low"], q["close"]) if None not in (o, h, l, c)]
        pg.goto("https://www.wsj.com/market-data/stocks/marketsdiary", timeout=60000); pg.wait_for_timeout(8000)
        t = pg.inner_text("body"); nyse = t[t.find("NYSE\tLatest Close"):]
        nyse = nyse[:nyse.find("NASDAQ")]
        hi = re.search(r"New highs\t([\d,]+)\t([\d,]+)\t([\d,]+)", nyse).groups()
        lo = re.search(r"New lows\t([\d,]+)\t([\d,]+)\t([\d,]+)", nyse).groups()
        b.close()
    last = dt.date.fromisoformat(spx[-1][0])  # latest close date
    for d, h, l in zip([last, prev_bday(last), last - dt.timedelta(days=7)], hi, lo):
        hl[d.isoformat()] = {"d": d.isoformat(), "h": int(h.replace(",", "")), "l": -int(l.replace(",", "")), "src": "WSJ"}
    out = {"updated": dt.datetime.now().strftime("%Y-%m-%d %H:%M ICT"), "spx": spx,
           "hl": sorted(hl.values(), key=lambda r: r["d"]),
           "src": [["Yahoo Finance ^GSPC", "https://finance.yahoo.com/quote/%5EGSPC/history/"],
                   ["WSJ Markets Diary", "https://www.wsj.com/market-data/stocks/marketsdiary"]]}
    json.dump(out, open(OUT, "w"), separators=(",", ":"))
    print("spx", len(spx), spx[-1], "hl", out["hl"][-3:])

if __name__ == "__main__": main()
