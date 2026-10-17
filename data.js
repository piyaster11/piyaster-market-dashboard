window.DASH={ver:"VER_20261017070730",asOf:"Sat 17 Oct 2026, 07:30 ICT",
bottom:"Risk-off into the weekend. AI and chip stocks had their worst week since June on AI-debt fears (CoreWeave −12%), oil jumped to ~$110 Brent as Iran stepped up Hormuz attacks, and CNN's mood gauge fell to Extreme Fear (18). Markets now expect the Fed to hold on 28 Oct but hike in December.",
ticker:[["S&P 500","~7,659","−1.1%",0],["DOW","~52,002","−0.3%",0],["NASDAQ","~26,140","−2.1%",0],["US10Y","~5.09%","+3bp",0],["WTI","~$101.4","+3.5%",1],["BRENT","~$109.9","+3.7%",1],["GOLD","~$4,187","+0.4%",1],["BTC","~$81,600","−0.5%",0],["US DIESEL","~$6.32/gal","near record",1]],
assets:[
{n:"US Stocks",s:"BEARISH",l:["S&P ~7,659 <span class=dn>−1.1%</span>","Dow ~52,002 <span class=dn>−0.3%</span>","Nasdaq ~26,140 <span class=dn>−2.1%</span>","Chip stocks down 8 days in a row, longest since 2008"]},
{n:"Bonds",s:"NEUTRAL",l:["10Y ~5.09%, up 3bp as oil rose","2Y ~4.72%; Dec hike still priced ~89%"]},
{n:"Oil",s:"BULLISH",l:["WTI ~$101.4 <span class=up>+3.5%</span>, first close above $100 since Sep","Brent ~$109.9 <span class=up>+3.7%</span>, highest since May","US diesel ~$6.32/gal, just below the 22 Sep record ($6.53)"]},
{n:"Gold",s:"BULLISH",l:["~$4,187 <span class=up>+0.4%</span> (futures)","Holding near highs as a hedge"]},
{n:"Bitcoin",s:"NEUTRAL",l:["~$81,600 <span class=dn>−0.5%</span>","Support ~$78k","Needs >$83.3k to turn bullish"]}],
sections:[
["Macro",["Sep CPI 3.7% YoY, core 2.6%","PPI +1.3% m/m and +6.3% YoY, biggest since 2022","Retail sales +0.8% vs 0.3% expected","Fed funds 3.75-4.00%; Warsh gave no signal (16 Oct)","Hike odds: ~15% for 28 Oct (85% hold), ~89% by 9 Dec"]],
["War & Geopolitics",["Iran stepping up Hormuz attacks after the US blockade of its ports; Gulf crude flows sharply lower","Missile aimed at Saudi Yanbu port intercepted; unconfirmed reports of a hit on the East-West pipeline","US lawmakers file a bill to block Trump's Russia diesel deal; Russia's Ryazan refinery unit halted after a drone strike","Russia strikes Ukraine's power grid; IAEA brokers a local ceasefire to repair Zaporizhzhia nuclear plant power lines"]],
["Trending in Money",["AI-debt scare: CoreWeave −12%, −23% on the week; tech lost over $1 trillion Friday","Nasdaq 100 worst week since April 2025; Yardeni cut his S&P target to 7,900","Oil majors flag soaring refining profits (Exxon)","MSCI rule change could push Strategy (MSTR) out of its indexes"]],
["Watch This Week",["Mon 19 Oct: China Q3 GDP + Sep activity data","Tue 20 Oct: US housing starts; NFLX, GE, RTX, 3M, GM earnings","Wed 21 Oct: TSLA, IBM, SAP, TXN earnings; Nvidia GTC Berlin keynote","Thu 22 Oct: Japan Sep CPI · Fri 23 Oct: Apple foldable iPhone release","Fed in blackout; Fed and BoT decisions 28 Oct · US midterms 3 Nov"]],
["Actionable",["Expect more tech swings; let the AI-debt dust settle before buying dips","Oil above $100 keeps inflation and rate risk alive","Watch $78k on BTC and $110 on Brent"]]],
nuke:[
["Active wars: US-Israel vs Iran","Iran escalating Hormuz attacks vs US blockade; unverified reports of a possible pre-emptive strike. Iran is not a confirmed nuclear state",50,.25],
["Russia-Ukraine","Nuclear power at war; grid and refinery strikes continue; IAEA-brokered local ceasefire at Zaporizhzhia is a small positive",40,.30],
["Middle East spillover","Missile at Saudi Yanbu port intercepted; Houthi-Saudi fighting; Iran offers Yemen mediation",45,.15],
["Great-power diplomacy channels","US-Russia diesel deal now challenged in Congress; channels still open",30,.15],
["Arms-control / nuclear rhetoric","No specific new nuclear threats in our sources; baseline",20,.15]]};
DASH.fg={src:"CNN Business Fear & Greed Index (real value, CNN dataviz feed, updated 17 Oct 2026 06:16 ICT)",url:"https://www.cnn.com/markets/fear-and-greed",score:17.9,prev:31.5,week:46.5,month:27.3,
comp:[["Market momentum (S&P vs 125d avg)",23.6,"Extreme Fear"],["Stock price strength (52w highs vs lows)",12.0,"Extreme Fear"],["Stock price breadth",12.0,"Extreme Fear"],["Put/Call options",16.4,"Extreme Fear"],["Market volatility (VIX)",4.0,"Extreme Fear"],["Safe-haven demand (stocks vs bonds)",15.0,"Extreme Fear"],["Junk bond demand",42.6,"Fear"]]};
DASH.todo={title:"What to do as a normal investor",note:"General info, not personal financial advice.",
l:["<b>Keep investing on schedule (DCA).</b> The mood gauge is at Extreme Fear (18); panic-selling into fear usually locks in losses.",
"<b>Don't rush to buy the AI/chip dip.</b> Chips fell 8 days straight on AI-debt worries; wait for CoreWeave-style credit stress to calm and for big-tech earnings (META, TSLA) next week.",
"<b>Keep some cash in short-term bonds/deposits.</b> The 10Y is ~5.09% and a December Fed hike is ~89% priced, so safe yield pays you to wait.",
"<b>Keep a small gold slice as a hedge.</b> Gold is holding ~$4,190 while oil and war risk rise; a small share, not a bet.",
"<b>Expect higher fuel and living costs.</b> Brent near $110 and diesel near record feed inflation; budget for it.",
"<b>Keep crypto small and know your line.</b> BTC ~$81.6k; below ~$78k support, expect more downside.",
"<b>Thai investors: brace for a soft Monday open.</b> The SET was shut Friday for a Bangkok holiday, so it hasn't priced the US tech drop yet; foreigners have sold ~฿10B this month."]};
// Glossary: m = regex matched against an element's text (li/td/h2); d = plain explanation + what it means now.
DASH.glossary={
fg:{m:"Fear & Greed",d:"CNN's 0-100 mood gauge for US stocks, built from 7 signals. 17.9 = Extreme Fear, down from 31.5 a day earlier: investors are very nervous."},
fgbands:{d:"0-25 Extreme Fear, 26-45 Fear, 46-55 Neutral, 56-75 Greed, 76-100 Extreme Greed. Fear often comes before rebounds, but not always."},
nk:{m:"Nuclear Escalation",d:"Our editorial 0-100 tension score from weighted news factors. Not a probability. ~39 = Guarded, near Elevated: the Iran/Hormuz fight is heating up, but no new nuclear threats."},
nkbands:{d:"0-20 Low, 21-40 Guarded, 41-60 Elevated, 61-80 High, 81-100 Severe. Each factor's score × weight adds up to the total."},
mom:{m:"Market momentum",d:"S&P 500 vs its 125-day average. 23.6 = the index is sliding toward its trend line, extreme fear."},
str:{m:"price strength",d:"Stocks at 52-week highs vs lows. 12 = far more lows than highs, extreme fear."},
brd:{m:"breadth",d:"Volume in rising vs falling stocks. 12 = selling is broad, extreme fear."},
pc:{m:"Put/Call",d:"Compares bets on stocks falling vs rising. 16 = lots of people buying protection, a fearful sign."},
vix:{m:"VIX",d:"The market's 'fear gauge' of expected S&P swings. Reading 4 = volatility jumped well above normal (VIX ~20, up from ~16.5)."},
sh:{m:"Safe-haven",d:"Stock returns vs bonds lately. 15 = money clearly favouring bonds over stocks, extreme fear."},
jb:{m:"Junk bond",d:"Extra yield on risky company debt. 42.6 = mild fear: credit worries (like CoreWeave) are creeping in."},
f1:{m:"Active wars",d:"Wars that could pull in nuclear powers. Scored 50 (up from 45): Iran is escalating Hormuz attacks, but Iran isn't a confirmed nuclear state."},
f2:{m:"Russia-Ukraine",d:"A nuclear power at war. Scored 40, the biggest weight; the Zaporizhzhia repair ceasefire is a small positive."},
f3:{m:"spillover",d:"Risk the Mideast war widens. Scored 45 (up from 35) after a missile was fired at Saudi Arabia's Yanbu oil port."},
f4:{m:"diplomacy channels",d:"Are big powers talking? Scored 30 (up from 25): US-Russia talks continue, but Congress is moving to block the diesel deal."},
f5:{m:"Arms-control",d:"Nuclear threats and treaty news. Scored 20, a baseline: no new threats in our sources."},
sp:{m:"S&P",d:"500 big US companies, the main US stock benchmark. ~7,659, −1.1%: worst week since June, led by tech."},
dow:{m:"Dow",d:"30 large 'blue-chip' US stocks, more old-economy. −0.3% Friday but up for the week: value is holding up better."},
ndq:{m:"Nasdaq",d:"Tech-heavy US index. −2.1%: AI-debt fears are hitting chips and cloud stocks hardest."},
y10:{m:"10Y",d:"Yield on 10-year US government bonds, which drives loan rates. ~5.09%, up 3bp: higher oil is keeping rates high."},
wti:{m:"WTI",d:"US crude oil price. ~$101 is the first close above $100 since September, driven by Iran's Hormuz attacks."},
brent:{m:"Brent",d:"Global benchmark crude. ~$110, highest since May: Gulf supply is tight."},
dsl:{m:"diesel",d:"US average diesel price. ~$6.32/gal, just under the 22 Sep record of $6.53: the shortage keeps transport costs high."},
gold:{m:"^Gold$|Gold and|gold slice",d:"Classic safe haven. ~$4,187: holding near highs as investors buy protection."},
btc:{m:"Bitcoin|BTC",d:"The largest crypto. ~$81,600 is neutral: ~$78k is support, and above $83.3k turns bullish."},
bull:{d:"BULLISH = we expect it to rise or hold strong. MILDLY = a leaning, not a strong view."},
neu:{d:"NEUTRAL = no clear direction; it could go either way."},
bear:{d:"BEARISH = we expect it to fall or stay weak."},
ff:{m:"Fed funds",d:"The Fed's key short-term interest rate. 3.75-4.00% now; a hike would make borrowing dearer."},
cpi:{m:"CPI",d:"Consumer price inflation. 3.7% YoY is well above the Fed's 2% goal."},
ppi:{m:"PPI",d:"Prices businesses pay, an early inflation signal. +1.3% in a month and +6.3% in a year, the biggest since 2022."},
odds:{m:"Hike odds",d:"Market-implied chance of a Fed hike (CME FedWatch). ~15% for 28 Oct, ~89% by the 9 Dec meeting."},
dxy:{m:"Dollar index",d:"DXY: the dollar against 6 major currencies. ~101.8, easing: the dollar is cooling slightly."},
jpy:{m:"USD/JPY",d:"Yen per dollar. ~158 = a weak yen; a BOJ hike would strengthen it."},
cds:{m:"CDS",d:"Credit default swap: insurance against a company defaulting. ~1,040bp for CoreWeave (15 Oct) = the market sees real default risk."},
bot:{m:"BOT policy|BoT meeting|BOT MPC",d:"Bank of Thailand's key rate. 1.00%, with a hold expected at the 28 Oct meeting."},
set:{m:"SET",d:"SET = Thai stock index; SET50 = its 50 biggest stocks. SET 1,573 (15 Oct close) is neutral; it reopens Monday after Friday's holiday."},
flow:{m:"Foreign flows|foreigners",d:"Net buying minus selling by foreign investors. −฿10.1B so far in October: foreigners are selling, which weighs on the SET."},
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
"reutchip": "https://www.reuters.com/world/china/us-takes-step-halt-nvidia-ai-chip-shipments-chinese-firms-outside-china-2026-05-31/",
"bbw": "https://www.swissinfo.ch/eng/stocks-fall-as-coreweave-selloff-fuels-ai-jitters%3a-markets-wrap/92225060",
"bbhuang": "https://www.bloomberg.com/news/articles/2026-10-15/nvidia-ceo-huang-says-coreweave-improving-no-backstop-needed",
"cbs": "https://www.cbsnews.com/news/tech-stocks-slide-ai-debt-concerns/",
"fxc": "https://blog.forexcommand.com/en/daily-roundup-2026-10-16-dollar-falls-against-six-majors-despite-hot-us-ppi/",
"hoon": "https://www.hooninside.com/news-feed/419803/view/",
"bothol": "https://www.bot.or.th/en/news-and-media/news/news-20260713.html",
"botimf": "https://www.bot.or.th/en/news-and-media/activities/activities-20261016.html",
"ythb": "https://finance.yahoo.com/quote/THB=X/",
"dey": "https://deyronlabs.com/en/news/ai-weekly-recap-2026-10-16/",
"step": "https://finance.eastmoney.com/a/202610153896667391.html",
"ainf": "https://ainativefoundation.org/china-ai-native-industry-insights-20261014-openbmb-alibaba-z-ai-more/"
};
(U=>{
DASH.radar=[
{t:"<b>Chip stocks</b> fell for an 8th straight day, the longest slide since 2008; Nasdaq 100 had its worst week since April 2025 — 16 Oct",src:[["Bloomberg (via Swissinfo)",U.bbw]]},
{t:"<b>CoreWeave</b> sank 12% as its distressed bonds fuel AI-funding fears; Nvidia's Huang says it's improving and needs no backstop",src:[["Bloomberg",U.bbhuang],["Bloomberg (via Swissinfo)",U.bbw],["CNBC",U.cnbc]]},
{t:"<b>MSCI</b> adopted rules that could push Strategy (MSTR) out of its global indexes, a risk to its Bitcoin-buying model — 16 Oct",src:[["Bloomberg (via Swissinfo)",U.bbw]]},
{t:"<b>Oil majors:</b> Exxon signals soaring Q3 refining profits as wars cripple fuel plants — 16 Oct",src:[["Bloomberg (via Swissinfo)",U.bbw]]},
{t:"<b>Apple's</b> $1,999 folding iPhone: shipping estimates slipped to January within minutes of preorders — 16 Oct",src:[["Bloomberg (via Swissinfo)",U.bbw]]},
{t:"<b>FX:</b> USD/JPY ~158; dollar index ~101.8, softer after hot PPI — 16 Oct",src:[["Bloomberg (via Swissinfo)",U.bbw],["ForexCommand",U.fxc]]},
{t:"<b>Europe:</b> euro weakest since May 2025 on French debt worries; France-Bund 10Y spread widest since 2012",src:[["CNNBC",U.eur],["Ameriprise 15 Oct",U.amp]]},
{t:"<b>Watch:</b> Japan Sep CPI on 22 Oct",src:[["Octa",U.octa]]}];
DASH.thai={badge:"NEUTRAL",l:[
{t:"<b>SET</b> 1,573.01 <span class=dn>−2.87 (−0.18%)</span> on 15 Oct; SET50 1,053.01 +1.00. No trading Fri 16 Oct (Bangkok special holiday for the IMF-World Bank meetings)",src:[["SET",U.set],["BOT holiday notice",U.bothol]]},
{t:"<b>Foreign flows:</b> net SELL ฿2,111.5M on 15 Oct; October to date −฿10,072M; year to date still +฿15,038M",src:[["HoonInside",U.hoon],["SET",U.set]]},
{t:"<b>USD/THB</b> ~33.42 (16 Oct), a strong baht",src:[["Yahoo Finance",U.ythb],["BOT FX rates",U.fx]]},
{t:"<b>BOT policy rate</b> 1.00%; next MPC <b>Wed 28 Oct</b> (hold expected); governor: 'no rush to raise' (8 Oct)",src:[["BOT MPC schedule",U.mpc],["Reuters",U.reut]]},
{t:"<b>IMF-World Bank Annual Meetings</b> opened in Bangkok on 16 Oct (PM Anutin, BOT Governor Vitai)",src:[["BOT",U.botimf]]},
{t:"<b>Inflation:</b> Sep headline 2.82% YoY, core 1.5%; Jan-Sep avg 1.54%",src:[["TradingEconomics",U.te],["Reuters",U.reut]]},
{t:"<b>GDP:</b> BOT sees 2026 growth ~2.3% (IMF 2.1%)",src:[["Bangkok Post",U.bkp],["Nation",U.nat]]},
{t:"<b>Exports:</b> Aug +24.3% YoY; BOT sees 2026 +17-18% on AI demand",src:[["TradingEconomics",U.te],["Nation",U.nat]]},
{t:"<b>Tourism:</b> foreign arrivals −3% YoY Jan-Aug; ฿20B domestic travel subsidy to early 2027; strong baht and costs pressuring the sector",src:[["Thai Times",U.tt1],["subsidy",U.tt2],["baht",U.tt3]]},
"<b>Energy:</b> Brent near $110 is a cost risk for Thailand as a net oil importer (our view)"],
watch:["Mon 19 Oct: SET reopens after the US tech sell-off and oil spike (DELTA and AI-chip names most exposed)","Mon 19 Oct: China Q3 GDP (Thailand's top trade partner)","Tue 27 Oct: Thai Sep exports/trade balance","Wed 28 Oct: BOT MPC decision (1.00%)","Thu 5 Nov: Thai Oct CPI","Foreign flows; oil above $100 = energy-cost risk"]};
DASH.ai={note:"Upcoming dates marked 'est.' are estimates from a public tracker (LLM Countdowns, updated 16 Oct), not official announcements.",
us:{trend:[
{t:"AI-debt worries hit stocks: tech lost over $1 trillion Friday; CoreWeave −12%; chips down 8 days straight",src:[["Bloomberg (via Swissinfo)",U.bbw],["CBS News",U.cbs]]},
{t:"Meta released open weights for <b>Muse Spark Open</b> (816B params, 1M context) on 15 Oct, after the closed <b>Muse Wonder</b> on 12 Oct",src:[["Meta",U.meta],["Deyron Labs",U.dey]]},
{t:"Google's <b>Gemini 4 Argon</b> is generally available; API price doubles to $4/$20 per M tokens from 1 Dec",src:[["Google",U.gem],["Deyron Labs",U.dey]]},
{t:"xAI shipped <b>Grok Voice 3.0</b> (14 Oct); Anthropic says new defenses cut model distillation by 90-99% (its own claim)",src:[["Deyron Labs",U.dey]]}],
next:[{t:"xAI Grok 4.8 — ~20 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"Meta Muse Spark 1.4 — ~22 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"OpenAI GPT-6.1 Luna — ~29 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"Anthropic Claude Fable 5.5 — ~5 Nov (est.)",src:[["LLM Countdowns",U.cd]]},{t:"Google Gemini 4 Flash — ~12 Nov (est.)",src:[["LLM Countdowns",U.cd]]}],
check:[{t:"Nvidia GTC Berlin keynote 21 Oct",src:[["Deyron Labs",U.dey]]},"Earnings: META / TSLA / IBM Wed 21 Oct (AI capex & funding)",{t:"Export controls: H200 sales to China case-by-case; Blackwell still barred",src:[["BIS",U.bis],["Reuters",U.reutchip]]},{t:"AI debt: CoreWeave bonds/CDS as a stress gauge",src:[["CNBC",U.cnbc]]}]},
cn:{trend:[
{t:"StepFun open-sourced its <b>Step 5</b> flagship preview (600B MoE, 1M context) — 15 Oct",src:[["East Money",U.step]]},
{t:"Moonshot made <b>Kimi K3</b> its flagship; DeepSeek-flash now routes to <b>V4.1-Flash</b> at $0.15/M input (10 Oct)",src:[["GeekPark",U.gp]]},
{t:"Alibaba released open-weight <b>Qwen-Image-2.1-Turbo</b>; OpenBMB and Z.ai updates",src:[["AI Native Foundation",U.ainf]]},
{t:"Anthropic accuses Zhipu and Moonshot of distilling its models (unconfirmed; no response yet)",src:[["Deyron Labs",U.dey]]}],
next:[{t:"Zhipu GLM-5.4 — ~20 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"MiniMax M3.1 — ~28 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"Moonshot Kimi K3.1 — ~29 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"Alibaba Qwen 4 Max — ~30 Oct (est.)",src:[["LLM Countdowns",U.cd]]},{t:"DeepSeek V4.1 Pro — ~12 Nov (est.)",src:[["LLM Countdowns",U.cd]]},"ByteDance Doubao / Baidu ERNIE: no dated launch found in Oct 2026 sources"],
check:[{t:"CNCC2026 in Chengdu from 21 Oct (Tencent, Alibaba, Baidu, Xiaomi, JD speakers)",src:[["GeekPark",U.gp]]},"China Q3 GDP Mon 19 Oct",{t:"Chip access: H200 licences vs Huawei alternatives",src:[["BIS",U.bis]]},{t:"Tencent/Alibaba AI capex funding (bonds)",src:[["Bloomberg",U.tencent]]}]}};
})(DASH.U);
DASH.summary={l:[
"🤖 AI/chip sell-off: Nasdaq −2.1% Friday, worst week since June; chips down 8 days straight",
"🛢️ Oil spiked: Brent ~$110, WTI back above $100 as Iran escalates Hormuz attacks",
"😨 CNN Fear & Greed at 17.9, Extreme Fear (from 31.5); VIX ~20",
"🏦 Fed: ~85% hold on 28 Oct, but a December hike ~89% priced; 10Y ~5.09%",
"₿ BTC ~$81.6k, under $83.3k resistance; $78k is support",
"🇹🇭 SET closed Friday (Bangkok holiday); last 1,573, foreigners −฿10B in October"],
nums:[["S&P","7,659","−1.1%",-1],["10Y","5.09%","+3bp",-1],["WTI","$101.4","+3.5%",1],["Gold","$4,187","+0.4%",1],["BTC","$81.6k","−0.5%",-1],["SET","1,573","closed Fri",0],["USD/THB","33.42","strong ฿",0],["Fear&Greed","17.9","Ext. Fear",-1]]};
// US source links: [match substring, [[label,url],...]] applied to asset/section items
DASH.U2={ap:"https://apnews.com/article/stocks-markets-us-ai-oil-tech-warsh-d2655f64db7ec8ae450525d58f97b628",st:"https://www.straitstimes.com/business/companies-markets/us-stocks-close-sharply-lower-worries-about-ai-trade-and-high-oil-prices-weigh",
bbw:"https://www.swissinfo.ch/eng/stocks-fall-as-coreweave-selloff-fuels-ai-jitters%3a-markets-wrap/92225060",nbc:"https://www.nbcnews.com/business/energy/oil-prices-hormuz-iran-ukraine-rcna603919",
cnbcY:"https://www.cnbc.com/2026/10/16/us-treasury-yields-investors-hot-inflation-data-.html",warsh:"https://www.cnbc.com/2026/10/16/feds-warsh-says-ai-development-path-will-be-very-bumpy-.html",invz:"https://invezz.com/news/2026/10/16/fed-rate-hold-odds-jump-to-85-even-as-warsh-offers-no-clues-on-policy-path/",
oilR:"https://www.investing.com/news/commodities-news/oil-edges-down-as-investors-weigh-possible-us-sanctions-on-shadow-fleet-4952926",cnbcOil:"https://www.cnbc.com/2026/10/16/oil-price-today-iran-strait-hormuz-ukraine-russia.html",nsq:"https://www.newsquawk.com/headlines/crude-wrap-wti-x6-settles-usd-344-higher-at-usd-10141bbl-brent-z6-settles-usd-394-higher-at-usd-10986bbl",
aaa:"https://gasprices.aaa.com/",iea:"https://www.cnbc.com/2026/10/15/iea-diesel-price-ukraine-iran-oil.html",tindex:"https://tindex.app/en/indicators/Cryptocurrency/btc/",cd:"https://www.coindesk.com/daybook-us/2026/10/15/bitcoin-copper-stocks-yields-all-fall-gold-rises",nw:"https://newisty.com/blog/bitcoin-holds-above-81000-after-us-wholesale-prices-jump-to-highest-level-since-2022",
iaea:"https://www.iaea.org/newscenter/pressreleases/update-371-iaea-director-general-statement-on-situation-in-ukraine",apUA:"https://apnews.com/article/russia-ukraine-war-trump-zelenskyy-power-grid-025bdb5cebc0be727a6197ce37f2c365",
gt:"https://globalterminal.org/news/global-markets-week-ahead-china-q3-gdp-earnings/",ew:"https://www.earningswhispers.com/calweek/20261019",dey:"https://deyronlabs.com/en/news/ai-weekly-recap-2026-10-16/",octa:"https://www.octabroker.com/markets/news/view/1275281/",
row:"https://www.regardsofwallstreet.com/week-ahead",cbs:"https://www.cbsnews.com/news/tech-stocks-slide-ai-debt-concerns/"};
(U=>{const M=[
["S&P ~7,659",[["AP",U.ap],["Reuters via Straits Times",U.st]]],["Dow ~52,002",[["Reuters via Straits Times",U.st]]],["Nasdaq ~26,140",[["Reuters via Straits Times",U.st]]],["Chip stocks down 8",[["Bloomberg (via Swissinfo)",U.bbw],["NBC",U.nbc]]],
["10Y ~5.09%",[["Bloomberg (via Swissinfo)",U.bbw],["CNBC",U.cnbcY]]],["2Y ~4.72%",[["CNBC",U.cnbcY],["Invezz",U.invz]]],
["WTI ~$101.4",[["Reuters",U.oilR],["Newsquawk",U.nsq]]],["Brent ~$109.9",[["Reuters",U.oilR],["NBC",U.nbc]]],["US diesel ~$6.32",[["AAA",U.aaa],["CNBC",U.iea]]],
["~$4,187",[["Bloomberg (via Swissinfo)",U.bbw]]],["Holding near highs",[["Bloomberg (via Swissinfo)",U.bbw]]],
["~$81,600",[["Bloomberg (via Swissinfo)",U.bbw],["Tindex",U.tindex]]],["Support ~$78k",[["CoinDesk",U.cd]]],["Needs >$83.3k",[["Newisty",U.nw]]],
["Sep CPI",[["Invezz",U.invz]]],["PPI +1.3%",[["Invezz",U.invz]]],["Retail sales",[["Invezz",U.invz]]],["Fed funds",[["CNBC",U.warsh],["Invezz",U.invz]]],["Hike odds",[["Invezz",U.invz],["CNBC",U.cnbcY]]],
["Iran stepping up",[["Reuters",U.oilR],["CNBC",U.cnbcOil]]],["Yanbu",[["Reuters",U.oilR],["Newsquawk",U.nsq]]],["Russia diesel deal",[["Newsquawk",U.nsq]]],["IAEA brokers",[["IAEA",U.iaea],["AP",U.apUA]]],
["AI-debt scare",[["Bloomberg (via Swissinfo)",U.bbw],["NBC",U.nbc]]],["Nasdaq 100 worst week",[["Bloomberg (via Swissinfo)",U.bbw],["NBC",U.nbc]]],["Exxon",[["Bloomberg (via Swissinfo)",U.bbw]]],["MSCI rule",[["Bloomberg (via Swissinfo)",U.bbw]]],
["China Q3 GDP",[["Global Terminal",U.gt]]],["US housing starts",[["Global Terminal",U.gt],["Earnings Whispers",U.ew]]],["TSLA, IBM",[["Earnings Whispers",U.ew],["Deyron Labs",U.dey]]],["Japan Sep CPI",[["Octa",U.octa],["Bloomberg (via Swissinfo)",U.bbw]]],["Fed in blackout",[["Regards of Wall St",U.row]]],
["Oil above $100",[["Reuters",U.oilR]]]];
const wrap=x=>{if(typeof x!='string')return x;const m=M.find(e=>x.includes(e[0]));return m?{t:x,src:m[1]}:x};
DASH.assets.forEach(a=>a.l=a.l.map(wrap));DASH.sections.forEach(s=>s[1]=s[1].map(wrap));})(DASH.U2);
DASH.glossary.hl={m:"Breadth",d:"New highs = NYSE stocks at a 52-week high; new lows = at a 52-week low. Index down while lows outnumber highs = weak internals. Latest (16 Oct): 63 highs vs 102 lows as the S&P fell 1.1%: lows still win, though fewer than the 330 on 14 Oct."};
DASH.thDiv={years:"2021-2025",peSrc:"P/E (trailing 12m) from StockAnalysis, 16 Oct 2026",peUrl:"https://stockanalysis.com/list/stock-exchange-of-thailand/",asOf:"Prices: SET close 15 Oct 2026 (no trading 16 Oct, Bangkok holiday)",basis:"5-yr avg yield = simple average of each year's yield, where yield = total dividends per share with ex-dates in that calendar year ÷ that year's last close. 5-yr avg DPS = simple average of the 5 annual DPS totals. Current yield = dividends paid in the last 12 months ÷ the 15 Oct 2026 close. Universe: about 55 large/liquid SET names priced ≥ ฿5, with a dividend in every year 2021-2025 (otherwise skipped).",
src:[["Yahoo Finance (dividends & prices)","https://finance.yahoo.com/quote/PTT.BK/history/"],["StockAnalysis (dividend history, sector)","https://stockanalysis.com/list/stock-exchange-of-thailand/"]],
rows:[{"t": "TASCO", "n": "Tipco Asphalt", "s": "Materials", "y5": 8.07, "d5": 1.31, "px": 17.8, "cy": 5.62, "ys": [8.56, 6.21, 7.62, 5.52, 12.41], "url": "https://stockanalysis.com/quote/bkk/TASCO/dividend/", "ttm": 1.0, "bz": 12.39, "vs": -30.4, "pe": 24.03}, {"t": "TISCO", "n": "TISCO Financial Group", "s": "Financials", "y5": 7.68, "d5": 7.74, "px": 125.0, "cy": 6.2, "ys": [6.56, 7.2, 9.77, 7.87, 7.01], "url": "https://stockanalysis.com/quote/bkk/TISCO/dividend/", "ttm": 7.75, "bz": 100.91, "vs": -19.3, "pe": 14.57}, {"t": "SPALI", "n": "Supalai", "s": "Real Estate", "y5": 6.76, "d5": 1.33, "px": 15.8, "cy": 7.91, "ys": [4.41, 5.97, 7.8, 7.42, 8.24], "url": "https://stockanalysis.com/quote/bkk/SPALI/dividend/", "ttm": 1.25, "bz": 18.49, "vs": 17.0, "pe": 6.55}, {"t": "TCAP", "n": "Thanachart Capital", "s": "Financials", "y5": 6.69, "d5": 3.14, "px": 82.5, "cy": 4.48, "ys": [7.95, 7.06, 6.26, 6.44, 5.75], "url": "https://stockanalysis.com/quote/bkk/TCAP/dividend/", "ttm": 3.7, "bz": 55.31, "vs": -33.0, "pe": 9.9}, {"t": "TOP", "n": "Thai Oil", "s": "Energy", "y5": 6.45, "d5": 2.617, "px": 72.75, "cy": 3.3, "ys": [2.63, 7.09, 4.37, 13.98, 4.17], "url": "https://stockanalysis.com/quote/bkk/TOP/dividend/", "ttm": 2.4, "bz": 37.21, "vs": -48.9, "pe": 5.02}, {"t": "ICHI", "n": "Ichitan Group", "s": "Consumer Staples", "y5": 6.35, "d5": 0.85, "px": 13.4, "cy": 7.46, "ys": [5.0, 4.42, 7.01, 7.48, 7.84], "url": "https://stockanalysis.com/quote/bkk/ICHI/dividend/", "ttm": 1.0, "bz": 15.75, "vs": 17.5, "pe": 13.65}, {"t": "PTTEP", "n": "PTT Exploration & Production", "s": "Energy", "y5": 6.14, "d5": 8.045, "px": 155.0, "cy": 5.9, "ys": [4.03, 4.11, 6.19, 8.19, 8.16], "url": "https://stockanalysis.com/quote/bkk/PTTEP/dividend/", "ttm": 9.15, "bz": 149.02, "vs": -3.9, "pe": 8.63}, {"t": "AP", "n": "AP (Thailand)", "s": "Real Estate", "y5": 6.08, "d5": 0.58, "px": 7.9, "cy": 6.58, "ys": [4.71, 4.31, 5.75, 8.64, 6.98], "url": "https://stockanalysis.com/quote/bkk/AP/dividend/", "ttm": 0.52, "bz": 8.55, "vs": 8.2, "pe": 5.63}, {"t": "TVO", "n": "Thai Vegetable Oil", "s": "Consumer Staples", "y5": 5.82, "d5": 1.423, "px": 28.5, "cy": 7.26, "ys": [6.77, 3.57, 4.72, 6.3, 7.72], "url": "https://stockanalysis.com/quote/bkk/TVO/dividend/", "ttm": 2.07, "bz": 35.57, "vs": 24.8, "pe": 9.77}, {"t": "PTT", "n": "PTT", "s": "Energy", "y5": 5.8, "d5": 1.964, "px": 41.0, "cy": 6.83, "ys": [5.32, 6.32, 4.2, 6.3, 6.88], "url": "https://stockanalysis.com/quote/bkk/PTT/dividend/", "ttm": 2.8, "bz": 48.28, "vs": 17.8, "pe": 9.44}]};
DASH.glossary.dy={d:"Dividend yield = yearly dividends ÷ share price. A very high yield can be a warning: the price may have fallen, or the payout may not be sustainable. Not a recommendation."};
DASH.glossary.bz={d:"P/E = price ÷ yearly earnings per share: how many years of profit you pay for. Lower is cheaper, but it can mean falling profits. Buy zone = trailing 12m dividend ÷ the stock's own 5-yr avg yield: the price where today's dividend gives its usual yield. It ignores earnings risk, so check P/E and payout sustainability. Not a recommendation."};
// LIVE overlay map (index.html): live values from data/prices.json (hourly, GitHub Action) and
// client APIs (CoinGecko BTC/ETH, gold-api.com XAU, open.er-api.com USD/THB) replace these base
// values in place. The daily refresh only needs to keep `text` strings equal to the base strings it writes.
DASH.live={ticker:{"S&P 500":"spx","DOW":"dow","NASDAQ":"ndq","US10Y":"y10","WTI":"wti","BRENT":"brent","GOLD":"gold","BTC":"btc"},
nums:{"S&P":"spx","10Y":"y10","WTI":"wti","Gold":"gold","BTC":"btc","SET":"set","USD/THB":"thb"},
text:{spx:"~7,659",dow:"~52,002",ndq:"~26,140",y10:"~5.09%",wti:"~$101.4",brent:"~$109.9",gold:"~$4,187",btc:"~$81,600",set:"1,573.01",thb:"~33.42"}};
