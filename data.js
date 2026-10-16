window.DASH={ver:"VER_20261016115908",asOf:"Fri 16 Oct 2026, 09:45 ICT",
bottom:"Markets are nervous. Hot inflation means the Fed will likely hike again; money is rotating from AI stocks into bonds and gold; oil is high on the Iran war and the diesel shortage.",
ticker:[["S&P 500","~7,745","+0.3%",1],["DOW","~52,178","+1.1%",1],["NASDAQ","~26,713","+0.1%",1],["US10Y","~5.09%","off 5.36% peak",0],["WTI","$96-98","",1],["BRENT","$103-106","",1],["GOLD","~$4,170","+1.6%",1],["BTC","~$82,200","",0],["US DIESEL","$6.32/gal","record",1]],
assets:[
{n:"US Stocks",s:"NEUTRAL",l:["S&P ~7,745 <span class=up>+0.3%</span>","Dow ~52,178 <span class=up>+1.1%</span>","Nasdaq ~26,713 <span class=up>+0.1%</span>","Tech weak, value holding"]},
{n:"Bonds",s:"MILDLY BULLISH",l:["10Y ~5.09%, down from 5.36% peak","Biggest 1-day drop in over a year"]},
{n:"Oil",s:"BULLISH",l:["WTI ~$96-98","Brent ~$103-106","US diesel ~$6.32/gal (record)"]},
{n:"Gold",s:"BULLISH",l:["~$4,170 <span class=up>+1.6%</span>","Safe-haven buying"]},
{n:"Bitcoin",s:"NEUTRAL",l:["~$82,200","Support ~$78k","Needs >$83.3k to turn bullish"]}],
sections:[
["Macro",["Sep CPI 3.7% YoY","PPI +1.3% m/m, biggest since 2022, energy-led (gasoline +20%)","Fed funds 3.75-4.00%","Hike odds ~27% for 28 Oct, ~67% by Dec","Narrative: stagflation"]],
["War & Geopolitics",["Iran war disrupting Strait of Hormuz flows","Houthi-Saudi fighting escalating","Trump-Putin diesel deal pauses US sanctions on Russian diesel to Apr 2027, seen as doing little while Ukraine hits Russian refineries","IEA releasing 20M+ barrels of diesel; expects shortage into 2027"]],
["Trending in Money",["AI stock sell-off on fears about funding AI spending at higher rates","Rotation into the Dow, Treasuries and gold","TSMC record quarter"]],
["Watch This Week",["TODAY ~10:30 AM BKK: Fed Chair Warsh speaks, last comment before blackout from 17 Oct","Mon 19 Oct: China Q3 GDP","Earnings: NFLX Tue; TSLA / META / IBM Wed","Oil & Hormuz headlines (risk of WTI >$100)","Fed decision 28 Oct · US midterms 3 Nov"]],
["Actionable",["Expect tech volatility; don't chase dips until rates settle","Gold and energy are working as hedges","Watch $78k on BTC"]]],
nuke:[
["Active wars: US-Israel vs Iran","Iran is not a confirmed nuclear state; Hormuz conflict ongoing",45,.25],
["Russia-Ukraine","Nuclear power at war; refinery strikes; diesel-deal diplomacy is a slight de-escalation",40,.30],
["Middle East spillover","Houthi-Saudi escalation",35,.15],
["Great-power diplomacy channels","Trump-Putin talking lowers risk",25,.15],
["Arms-control / nuclear rhetoric","No specific new threats in sources; baseline",20,.15]]};
DASH.fg={src:"CNN Business Fear & Greed Index (real value, CNN dataviz feed, updated 16 Oct 2026 06:59 ICT)",url:"https://www.cnn.com/markets/fear-and-greed",score:31.5,prev:32.3,week:39.8,month:28.0,
comp:[["Market momentum (S&P vs 125d avg)",42.6,"Fear"],["Stock price strength (52w highs vs lows)",10.4,"Extreme Fear"],["Stock price breadth",10.4,"Extreme Fear"],["Put/Call options",23.4,"Extreme Fear"],["Market volatility (VIX)",50,"Neutral"],["Safe-haven demand (stocks vs bonds)",33.4,"Fear"],["Junk bond demand",50.6,"Neutral"]]};
DASH.todo={title:"What to do as a normal investor",note:"General info, not personal financial advice.",
l:["<b>Keep investing on schedule (DCA).</b> Sentiment is in Fear (31.5); don't panic-sell into it.",
"<b>Don't chase AI/tech dips yet.</b> AI stocks and AI debt (e.g. CoreWeave) are under stress; wait until rates settle after the Fed (28 Oct).",
"<b>Park some cash in short-term bonds/deposits.</b> With the 10Y ~5.09% and hike risk still alive, safe yield pays you to wait.",
"<b>A small gold slice is a hedge.</b> Gold and energy are working while stocks wobble — keep it a small share, not a bet.",
"<b>Keep crypto small and know your line.</b> BTC support is ~$78k; below it, expect more downside.",
"<b>Thai investors: be patient with the SET.</b> It's neutral with foreigners selling; watch foreign flows and the BoT meeting on 28 Oct."]};
// Glossary: m = regex matched against an element's text (li/td/h2); d = plain explanation + what it means now.
DASH.glossary={
fg:{m:"Fear & Greed",d:"CNN's 0-100 mood gauge for US stocks, built from 7 signals. 31.5 = Fear: investors are nervous."},
fgbands:{d:"0-25 Extreme Fear, 26-45 Fear, 46-55 Neutral, 56-75 Greed, 76-100 Extreme Greed. Fear often comes before rebounds, but not always."},
nk:{m:"Nuclear Escalation",d:"Our editorial 0-100 tension score from weighted news factors. Not a probability. 35 = Guarded: tense, but channels are open."},
nkbands:{d:"0-20 Low, 21-40 Guarded, 41-60 Elevated, 61-80 High, 81-100 Severe. Each factor's score × weight adds up to the total."},
mom:{m:"Market momentum",d:"S&P 500 vs its 125-day average. 42.6 = a bit below trend, mild fear."},
str:{m:"price strength",d:"Stocks at 52-week highs vs lows. 10.4 = far more lows than highs, extreme fear."},
brd:{m:"breadth",d:"Volume in rising vs falling stocks. 10.4 = selling is broad, extreme fear."},
pc:{m:"Put/Call",d:"Compares bets on stocks falling vs rising. 23 = lots of people buying protection, a fearful sign."},
vix:{m:"VIX",d:"The market's 'fear gauge' of expected S&P swings. Reading 50 = volatility around normal (VIX ~16.5)."},
sh:{m:"Safe-haven",d:"Stock returns vs bonds lately. 33 = money favouring bonds, a fearful sign."},
jb:{m:"Junk bond",d:"Extra yield on risky company debt. 50.6 = neutral, credit isn't panicking (yet)."},
f1:{m:"Active wars",d:"Wars that could pull in nuclear powers. Scored 45: Iran/Hormuz conflict ongoing, but Iran isn't a confirmed nuclear state."},
f2:{m:"Russia-Ukraine",d:"A nuclear power at war. Scored 40, the biggest weight; diesel-deal talks slightly calm it."},
f3:{m:"spillover",d:"Risk the Mideast war widens. Scored 35 on Houthi-Saudi escalation."},
f4:{m:"diplomacy channels",d:"Are big powers talking? Scored 25 (low risk) because Trump and Putin are in contact."},
f5:{m:"Arms-control",d:"Nuclear threats and treaty news. Scored 20, a baseline: no new threats in our sources."},
sp:{m:"S&P",d:"500 big US companies, the main US stock benchmark. ~7,745, +0.3%: flat-ish, tech dragging."},
dow:{m:"Dow",d:"30 large 'blue-chip' US stocks, more old-economy. +1.1%: value stocks are holding up."},
ndq:{m:"Nasdaq",d:"Tech-heavy US index. +0.1%: the AI sell-off is keeping it weak."},
y10:{m:"10Y",d:"Yield on 10-year US government bonds, which drives loan rates. ~5.09%, down from 5.36%: bonds are rallying."},
wti:{m:"WTI",d:"US crude oil price. ~$96-98 is high, driven by the Iran war; above $100 is the risk."},
brent:{m:"Brent",d:"Global benchmark crude. ~$103-106: tight supply around Hormuz."},
dsl:{m:"diesel",d:"US average diesel price. ~$6.32/gal is a record: there's a shortage, which raises transport costs."},
gold:{m:"^Gold$|Gold and|gold slice",d:"Classic safe haven. ~$4,170, +1.6%: investors are buying protection."},
btc:{m:"Bitcoin|BTC",d:"The largest crypto. ~$82,200 is neutral: ~$78k is support, and above $83.3k turns bullish."},
bull:{d:"BULLISH = we expect it to rise or hold strong. MILDLY = a leaning, not a strong view."},
neu:{d:"NEUTRAL = no clear direction; it could go either way."},
bear:{d:"BEARISH = we expect it to fall or stay weak."},
ff:{m:"Fed funds",d:"The Fed's key short-term interest rate. 3.75-4.00% now; a hike would make borrowing dearer."},
cpi:{m:"CPI",d:"Consumer price inflation. 3.7% YoY is well above the Fed's 2% goal."},
ppi:{m:"PPI",d:"Prices businesses pay, an early inflation signal. +1.3% in a month is the biggest since 2022, energy-led."},
odds:{m:"Hike odds",d:"Market-implied chance of a Fed hike (CME FedWatch). ~27% for 28 Oct, ~67% by Dec."},
dxy:{m:"Dollar index",d:"DXY: the dollar against 6 major currencies. 102.00, off an 18-month high: the dollar is cooling slightly."},
jpy:{m:"USD/JPY",d:"Yen per dollar. ~158 = a weak yen; a BOJ hike would strengthen it."},
cds:{m:"CDS",d:"Credit default swap: insurance against a company defaulting. ~1,040bp for CoreWeave = the market sees real default risk."},
bot:{m:"BOT policy|BoT meeting|BOT MPC",d:"Bank of Thailand's key rate. 1.00%, with a hold expected at the 28 Oct meeting."},
set:{m:"SET",d:"SET = Thai stock index; SET50 = its 50 biggest stocks. SET 1,573 is flat-ish and neutral."},
flow:{m:"Foreign flows|foreigners",d:"Net buying minus selling by foreign investors. −฿2.1B on 15 Oct: foreigners are selling, which weighs on the SET."},
dca:{m:"DCA",d:"Dollar-cost averaging: invest a fixed amount on a schedule regardless of price, which smooths out bad timing."}};
// Sources: each item = {t: text, src: [[label, url], ...]}
DASH.U={
"cnbc": "https://www.cnbc.com/2026/10/15/coreweave-credit-default-swaps-hit-distress-levels-as-investors-sour-on-ai-debt.html",
"bblaw": "https://news.bloomberglaw.com/bankruptcy-law/coreweaves-brazen-dream-crashes-into-reality-as-yields-top-15",
"stack": "https://www.bloomberg.com/news/articles/2026-10-15/blue-owl-s-stack-eyes-6-billion-loan-as-selloff-hits-ai-sector",
"tencent": "https://www.bloomberg.com/news/articles/2026-10-13/tencent-kicks-off-5-billion-bond-sale-to-finance-ai-spending",
"octa": "https://www.octabroker.com/markets/news/view/1275281/",
"brec": "https://www.brecorder.com/news/40444466",
"eur": "https://cnnbc.com/euro-falls-to-17-month-low-as-french-debt-concerns-hit-regional-bond-markets",
"amp": "https://cdn.ameriprisecontent.com/cds/alwp/marketperspectives/btb.pdf",
"set": "https://www.set.or.th/en/home",
"ryt": "https://www.ryt9.com/s/iq/12850432",
"fx": "https://www.thaifxrates.net/ER_PDF_EN.pdf",
"mpc": "https://www.bot.or.th/en/our-roles/monetary-policy/mpc-meeting.html",
"reut": "https://money.usnews.com/investing/news/articles/2026-10-08/thai-central-bank-in-no-rush-to-raise-rates-governor-says",
"te": "https://tradingeconomics.com/thailand/calendar",
"bkp": "https://www.bangkokpost.com/business/general/3336303/bot-chief-envisions-23-growth",
"nat": "https://www.nationthailand.com/business/economy/40072198",
"tt1": "https://thaitimes.com/thailand-maintains-full-year-tourism-outlook-despite-3-drop-in-early-arrivals",
"tt2": "https://thaitimes.com/thai-government-to-launch-16-billion-domestic-tourism-stimulus-package",
"tt3": "https://thaitimes.com/thailand-s-tourism-sector-faces-new-pressures-from-strong-baht-and-rising-costs",
"meta": "https://research.meta.ai/blog/muse-spark-open",
"gem": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/",
"haiku": "https://www.anthropic.com/claude-haiku-5-5",
"cd": "https://waifuai.github.io/llm-countdowns/",
"gp": "https://about.geekpark.net/overnight/2026-10-11/",
"nik": "https://asia.nikkei.com/business/technology/artificial-intelligence/china-s-deepseek-peers-launch-16-ai-models-in-month-despite-anthropic-warning",
"llm": "https://www.llmreference.com/changelog/2026-10",
"bis": "https://media.bis.gov/press-release/department-commerce-revises-license-review-policy-semiconductors-exported-china",
"reutchip": "https://www.reuters.com/world/china/us-takes-step-halt-nvidia-ai-chip-shipments-chinese-firms-outside-china-2026-05-31/"
};
(U=>{
DASH.radar=[
{t:"<b>AI debt stress:</b> CoreWeave 2031 bond yield ~15.8%, 5Y CDS ~1,040bp (distressed) — 15 Oct",src:[["CNBC",U.cnbc],["Bloomberg Law",U.bblaw]]},
{t:"<b>Blue Owl's Stack Infrastructure</b> seeks $6B loan as AI-sector sell-off hits debt — 15 Oct",src:[["Bloomberg",U.stack]]},
{t:"<b>Tencent</b> $5B bond sale to fund AI capex & chips — 12-13 Oct",src:[["Bloomberg",U.tencent]]},
{t:"<b>Japan:</b> Nikkei 225 −4.9% (3rd-largest point drop on record) as AI selling hit chipmakers; BOJ's Koeda: don't be overly cautious on hikes from 1.25% — 15-16 Oct",src:[["Octa/FXStreet",U.octa]]},
{t:"<b>FX:</b> USD/JPY ~157.8-158.2; Dollar index −0.44% to 102.00 after an 18-month high — 16 Oct",src:[["Reuters via Business Recorder",U.brec]]},
{t:"<b>Europe:</b> euro weakest since May 2025 on French debt worries; France-Bund 10Y spread widest since 2012; 2027 budget targets 5.0% deficit",src:[["CNNBC",U.eur],["Ameriprise 15 Oct",U.amp]]},
{t:"<b>Watch:</b> Japan Sep CPI on 22 Oct",src:[["Octa",U.octa]]}];
DASH.thai={badge:"NEUTRAL",l:[
{t:"<b>SET</b> 1,573.01 <span class=dn>−2.87 (−0.18%)</span> on 15 Oct; SET50 1,053.01 +1.00",src:[["SET",U.set]]},
{t:"<b>Foreign flows:</b> net SELL ฿2,111.5M on 15 Oct; institutions +฿1,399M, retail +฿894M",src:[["SET",U.set],["RYT9",U.ryt]]},
{t:"<b>USD/THB</b> ~33.54 (BOT weighted avg 33.541, 15 Oct), a strong baht",src:[["BOT FX rates",U.fx]]},
{t:"<b>BOT policy rate</b> 1.00%; next MPC <b>Wed 28 Oct</b> (hold expected); governor: 'no rush to raise' (8 Oct)",src:[["BOT MPC schedule",U.mpc],["Reuters",U.reut]]},
{t:"<b>Inflation:</b> Sep headline 2.82% YoY, core 1.5%; Jan-Sep avg 1.54%",src:[["TradingEconomics",U.te],["Reuters",U.reut]]},
{t:"<b>GDP:</b> BOT sees 2026 growth ~2.3% (IMF 2.1%)",src:[["Bangkok Post",U.bkp],["Nation",U.nat]]},
{t:"<b>Exports:</b> Aug +24.3% YoY; BOT sees 2026 +17-18% on AI demand",src:[["TradingEconomics",U.te],["Nation",U.nat]]},
{t:"<b>Tourism:</b> foreign arrivals −3% YoY Jan-Aug; ฿20B domestic travel subsidy to early 2027; strong baht and costs pressuring the sector (16 Oct)",src:[["Thai Times",U.tt1],["subsidy",U.tt2],["baht",U.tt3]]},
"<b>Energy:</b> high oil/diesel prices are a cost risk for Thailand as a net oil importer (our view)"],
watch:["Tue 27 Oct: Thai Sep exports/trade balance","Wed 28 Oct: BOT MPC decision (1.00%)","Thu 5 Nov: Thai Oct CPI","Foreign flows on SET + DELTA (AI-chip selling)","Baht vs a softer USD; oil above $100 = energy-cost risk"]};
DASH.ai={note:"Upcoming dates marked 'est.' are estimates from a public tracker (LLM Countdowns), not official announcements.",
us:{trend:[
{t:"Meta released open weights for <b>Muse Spark Open</b> (816B params, 1M context) — 15 Oct",src:[["Meta",U.meta]]},
{t:"Google launched <b>Gemini 4 Argon</b> to all; intro price $2/$10 per M tokens until 30 Nov — 13 Oct",src:[["Google",U.gem]]},
{t:"Anthropic released <b>Claude Haiku 5.5</b> and cut Sonnet 5.5 cache-read prices — 7 Oct",src:[["Anthropic",U.haiku]]},
{t:"Market mood: AI stocks and AI debt under pressure (CoreWeave distress, Stack's $6B loan)",src:[["CNBC",U.cnbc],["Bloomberg",U.stack]]}],
next:[{t:"xAI Grok 4.8 — ~20 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"Meta Muse Spark 1.4 — ~22 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"OpenAI GPT-6.1 Luna — ~29 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"Anthropic Claude Fable 5.5 — ~5 Nov (est.)",src:[["LLM Countdowns",U.cd]]},{t:"Google Gemini 4 Flash — ~12 Nov (est.); Google says more Gemini 4 models are coming",src:[["LLM Countdowns",U.cd],["Google",U.gem]]}],
check:["META earnings Wed 21 Oct (AI capex & funding); TSLA/IBM same day","Nvidia/TSMC: TSMC record quarter vs AI-chip selling",{t:"Export controls: H200 sales to China case-by-case; Blackwell still barred; loophole via overseas subsidiaries closed",src:[["BIS",U.bis],["Reuters",U.reutchip]]},"AI debt: CoreWeave CDS/bond yields as a stress gauge"]},
cn:{trend:[
{t:"Chinese labs launched <b>16 AI models</b> in September (DeepSeek, Xiaomi and others)",src:[["Nikkei Asia",U.nik]]},
{t:"Moonshot made <b>Kimi K3</b> its flagship on the Kimi platform; DeepSeek-flash now routes to <b>V4.1-Flash</b> at $0.15/M input (10 Oct)",src:[["GeekPark",U.gp]]},
{t:"Alibaba shipped Qwen-Image-2.1 models; Zhipu released GLM-Legal (Oct)",src:[["LLM Reference",U.llm]]},
{t:"Tencent's $5B bond sale to fund AI capex & chips",src:[["Bloomberg",U.tencent]]}],
next:[{t:"Zhipu GLM-5.4 — ~20 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"MiniMax M3.1 — ~28 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"Moonshot Kimi K3.1 — ~29 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"Alibaba Qwen 4 Max — ~30 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"DeepSeek V4.1 Pro — ~12 Nov (est.)",src:[["LLM Countdowns",U.cd]]},"ByteDance Doubao / Baidu ERNIE: no dated launch found in Oct 2026 sources"],
check:[{t:"CNCC2026 in Chengdu from 21 Oct (Tencent, Alibaba, Baidu, Xiaomi, JD speakers)",src:[["GeekPark",U.gp]]},"China Q3 GDP Mon 19 Oct",{t:"Chip access: H200 licences vs Huawei alternatives",src:[["BIS",U.bis]]},"Tencent/Alibaba AI capex funding (bonds)"]}};
})(DASH.U);
DASH.summary={l:[
"🔥 Inflation hot (CPI 3.7%, PPI +1.3% m/m), so Fed hike risk is back (~67% by Dec)",
"🤖 AI/tech sell-off plus AI debt stress (CoreWeave CDS ~1,040bp)",
"🛡️ Bonds and gold acting as safe havens (10Y down to ~5.09%, gold +1.6%)",
"🛢️ Oil high on the Iran war/Hormuz and a record diesel shortage",
"₿ BTC stuck around ~$82k: $78k support, $83.3k to turn bullish",
"🇹🇭 SET flat (−0.18%) with foreigners net selling ฿2.1B; BoT on 28 Oct"],
nums:[["S&P","7,745","+0.3%",1],["10Y","5.09%","from 5.36%",-1],["WTI","$96-98","high",1],["Gold","$4,170","+1.6%",1],["BTC","$82.2k","range",0],["SET","1,573","−0.18%",-1],["USD/THB","33.54","strong ฿",0],["Fear&Greed","31.5","Fear",-1]]};
// US source links: [match substring, [[label,url],...]] applied to asset/section items
DASH.U2={cnbcY:"https://www.cnbc.com/2026/10/15/us-treasury-yields-investors-economic-data-.html",wsj:"https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-10-15-2026",
invPPI:"https://www.investing.com/news/stock-market-news/us-stock-futures-fall-as-hot-inflation-revives-fed-hike-concerns-4950317",invAI:"https://www.investing.com/news/stock-market-news/nasdaq-futures-dive-1-as-ai-rout-deepens-on-debt-concerns-4950779",
cd:"https://www.coindesk.com/daybook-us/2026/10/15/bitcoin-copper-stocks-yields-all-fall-gold-rises",nw:"https://newisty.com/blog/bitcoin-holds-above-81000-after-us-wholesale-prices-jump-to-highest-level-since-2022",
mpp:"https://marketplayerpro.com/newsletter/2026-10-16",bbc:"https://www.bbc.com/news/articles/cr0qk1j7q0eno",ieaSq:"https://www.cnbc.com/2026/10/14/diesel-deal-oil-price-iea-report.html",
iea:"https://www.cnbc.com/2026/10/15/iea-diesel-price-ukraine-iran-oil.html",carn:"https://carnegieendowment.org/russia-eurasia/politika/2026/10/russia-usa-diesel-agreement",
enx:"https://live.euronext.com/en/financial-news/oil-prices-mixed-us-russia-diesel-deal-hopes-offset-saudi-yemen-attacks",ew:"https://www.earningswhispers.com/calweek/20261019",
row:"https://www.regardsofwallstreet.com/week-ahead",te:"https://tradingeconomics.com/calendar"};
(U=>{const M=[
["S&P ~7,745",[["WSJ",U.wsj]]],["Dow ~52,178",[["WSJ",U.wsj]]],["Nasdaq ~26,713",[["WSJ",U.wsj]]],["Tech weak",[["WSJ",U.wsj],["Investing.com",U.invAI]]],
["10Y ~5.09%",[["CNBC",U.cnbcY]]],["Biggest 1-day drop",[["CNBC",U.cnbcY]]],
["WTI ~$96",[["MarketPlayerPro",U.mpp]]],["Brent ~$103",[["MarketPlayerPro",U.mpp]]],["US diesel ~$6.32",[["CNBC",U.iea]]],
["~$4,170",[["MarketPlayerPro",U.mpp],["CoinDesk",U.cd]]],["Safe-haven buying",[["CoinDesk",U.cd]]],
["~$82,200",[["CoinDesk",U.cd],["Newisty",U.nw]]],["Support ~$78k",[["CoinDesk",U.cd]]],["Needs >$83.3k",[["Newisty",U.nw]]],
["Sep CPI",[["CNBC",U.cnbcY]]],["PPI +1.3%",[["Investing.com",U.invPPI],["Newisty",U.nw]]],["Fed funds",[["CNBC",U.cnbcY]]],["Hike odds",[["CNBC",U.cnbcY],["Investing.com",U.invPPI]]],["stagflation",[["CoinDesk",U.cd]]],
["Iran war disrupting",[["BBC",U.bbc]]],["Houthi-Saudi",[["Euronext",U.enx]]],["Trump-Putin diesel",[["Carnegie",U.carn],["BBC",U.bbc]]],["IEA releasing",[["CNBC",U.iea],["CNBC",U.ieaSq]]],
["AI stock sell-off",[["Investing.com",U.invAI]]],["Rotation into",[["WSJ",U.wsj]]],
["Fed Chair Warsh",[["Regards of Wall St",U.row]]],["China Q3 GDP",[["TradingEconomics",U.te]]],["Earnings: NFLX",[["Earnings Whispers",U.ew]]],["Hormuz headlines",[["MarketPlayerPro",U.mpp]]],["Fed decision 28 Oct",[["Regards of Wall St",U.row]]]];
const wrap=x=>{if(typeof x!='string')return x;const m=M.find(e=>x.includes(e[0]));return m?{t:x,src:m[1]}:x};
DASH.assets.forEach(a=>a.l=a.l.map(wrap));DASH.sections.forEach(s=>s[1]=s[1].map(wrap));})(DASH.U2);
DASH.glossary.hl={m:"Breadth",d:"New highs = NYSE stocks at a 52-week high; new lows = at a 52-week low. Index up while lows pile up = weak internals. Latest 68 highs vs 142 lows: lows still win, but it's better than 330 the day before."};
DASH.thDiv={years:"2021-2025",peSrc:"P/E (trailing 12m) from StockAnalysis, 16 Oct 2026",peUrl:"https://stockanalysis.com/list/stock-exchange-of-thailand/",asOf:"Prices: SET close 15 Oct 2026",basis:"5-yr avg yield = simple average of each year's yield, where yield = total dividends per share with ex-dates in that calendar year ÷ that year's last close. 5-yr avg DPS = simple average of the 5 annual DPS totals. Current yield = dividends paid in the last 12 months ÷ the 15 Oct 2026 close. Universe: about 55 large/liquid SET names priced ≥ ฿5, with a dividend in every year 2021-2025 (otherwise skipped).",
src:[["Yahoo Finance (dividends & prices)","https://finance.yahoo.com/quote/PTT.BK/history/"],["StockAnalysis (dividend history, sector)","https://stockanalysis.com/list/stock-exchange-of-thailand/"]],
rows:[{"t": "TASCO", "n": "Tipco Asphalt", "s": "Materials", "y5": 8.07, "d5": 1.31, "px": 17.8, "cy": 5.62, "ys": [8.56, 6.21, 7.62, 5.52, 12.41], "url": "https://stockanalysis.com/quote/bkk/TASCO/dividend/", "ttm": 1.0, "bz": 12.39, "vs": -30.4, "pe": 24.03}, {"t": "TISCO", "n": "TISCO Financial Group", "s": "Financials", "y5": 7.68, "d5": 7.74, "px": 125.0, "cy": 6.2, "ys": [6.56, 7.2, 9.77, 7.87, 7.01], "url": "https://stockanalysis.com/quote/bkk/TISCO/dividend/", "ttm": 7.75, "bz": 100.91, "vs": -19.3, "pe": 14.57}, {"t": "SPALI", "n": "Supalai", "s": "Real Estate", "y5": 6.76, "d5": 1.33, "px": 15.8, "cy": 7.91, "ys": [4.41, 5.97, 7.8, 7.42, 8.24], "url": "https://stockanalysis.com/quote/bkk/SPALI/dividend/", "ttm": 1.25, "bz": 18.49, "vs": 17.0, "pe": 6.55}, {"t": "TCAP", "n": "Thanachart Capital", "s": "Financials", "y5": 6.69, "d5": 3.14, "px": 82.5, "cy": 4.48, "ys": [7.95, 7.06, 6.26, 6.44, 5.75], "url": "https://stockanalysis.com/quote/bkk/TCAP/dividend/", "ttm": 3.7, "bz": 55.31, "vs": -33.0, "pe": 9.9}, {"t": "TOP", "n": "Thai Oil", "s": "Energy", "y5": 6.45, "d5": 2.617, "px": 72.75, "cy": 3.3, "ys": [2.63, 7.09, 4.37, 13.98, 4.17], "url": "https://stockanalysis.com/quote/bkk/TOP/dividend/", "ttm": 2.4, "bz": 37.21, "vs": -48.9, "pe": 5.02}, {"t": "ICHI", "n": "Ichitan Group", "s": "Consumer Staples", "y5": 6.35, "d5": 0.85, "px": 13.4, "cy": 7.46, "ys": [5.0, 4.42, 7.01, 7.48, 7.84], "url": "https://stockanalysis.com/quote/bkk/ICHI/dividend/", "ttm": 1.0, "bz": 15.75, "vs": 17.5, "pe": 13.65}, {"t": "PTTEP", "n": "PTT Exploration & Production", "s": "Energy", "y5": 6.14, "d5": 8.045, "px": 155.0, "cy": 5.9, "ys": [4.03, 4.11, 6.19, 8.19, 8.16], "url": "https://stockanalysis.com/quote/bkk/PTTEP/dividend/", "ttm": 9.15, "bz": 149.02, "vs": -3.9, "pe": 8.63}, {"t": "AP", "n": "AP (Thailand)", "s": "Real Estate", "y5": 6.08, "d5": 0.58, "px": 7.9, "cy": 6.58, "ys": [4.71, 4.31, 5.75, 8.64, 6.98], "url": "https://stockanalysis.com/quote/bkk/AP/dividend/", "ttm": 0.52, "bz": 8.55, "vs": 8.2, "pe": 5.63}, {"t": "TVO", "n": "Thai Vegetable Oil", "s": "Consumer Staples", "y5": 5.82, "d5": 1.423, "px": 28.5, "cy": 7.26, "ys": [6.77, 3.57, 4.72, 6.3, 7.72], "url": "https://stockanalysis.com/quote/bkk/TVO/dividend/", "ttm": 2.07, "bz": 35.57, "vs": 24.8, "pe": 9.77}, {"t": "PTT", "n": "PTT", "s": "Energy", "y5": 5.8, "d5": 1.964, "px": 41.0, "cy": 6.83, "ys": [5.32, 6.32, 4.2, 6.3, 6.88], "url": "https://stockanalysis.com/quote/bkk/PTT/dividend/", "ttm": 2.8, "bz": 48.28, "vs": 17.8, "pe": 9.44}]};
DASH.glossary.dy={d:"Dividend yield = yearly dividends ÷ share price. A very high yield can be a warning: the price may have fallen, or the payout may not be sustainable. Not a recommendation."};
DASH.glossary.bz={d:"P/E = price ÷ yearly earnings per share: how many years of profit you pay for. Lower is cheaper, but it can mean falling profits. Buy zone = trailing 12m dividend ÷ the stock's own 5-yr avg yield: the price where today's dividend gives its usual yield. It ignores earnings risk, so check P/E and payout sustainability. Not a recommendation."};
