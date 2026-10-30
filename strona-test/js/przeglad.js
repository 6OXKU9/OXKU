// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-30T07:50:00+01:00",
  stanNa_en: "Friday morning, 30 Oct 2026 (before the European session)",
  stanNa: "piątek rano, 30 paź 2026 (przed sesją europejską)",
  naglowek_en: "Amazon falls about 7% after hours and Nasdaq 100 futures drop below 29,000. The Nikkei loses 2.3% and the Kospi nearly 5%. The BoJ holds at 1.25% but keeps a December hike in play. Bitcoin is at a six-week low after a hack at Binance.",
  naglowek: "Amazon traci po sesji około 7%, a kontrakt na Nasdaq 100 spada poniżej 29 000 pkt. Nikkei traci 2,3%, Kospi blisko 5%. BoJ utrzymuje stopę 1,25%, ale zostawia otwartą drogę do podwyżki w grudniu. Bitcoin najniżej od sześciu tygodni po włamaniu na Binance.",
  punkty: [
    "Bank Japonii zostawił stopę na 1,25% (8 do 1; jeden członek chciał podwyżki do 1,5%) i podniósł prognozę inflacji. Bank uznał, że inflacja bazowa osiągnęła cel 2%, co otwiera drogę do podwyżki w grudniu. Jen umocnił się do 157,1 za dolara.",
    "Azja: Nikkei 225 zamknął się na 63 154 pkt (−2,3%), Kospi traci blisko 5%. Wyprzedaż spółek technologicznych trwa po wynikach Alphabetu i Amazona.",
    "Amazon po sesji około −7%: AWS +39%, ale zysk i przychody poniżej oczekiwań i wyższe nakłady na AI. Kontrakt na Nasdaq 100 około 28 862 pkt (−1,8% wobec zamknięcia), S&P 500 około 7 653 (−0,9%). Rentowność 10-latek USA spadła do około 4,90%, najniżej od ponad miesiąca.",
    "Krypto: włamanie na Binance (według KuCoin wypływ około 5,3–5,6 mld USD), giełda wstrzymała wpłaty i wypłaty. Bitcoin dotknął 77 000 USD, teraz około 78 450. Złoto spadło poniżej 4 000 USD (około 3 990), srebro około 50,9 USD (−2,4%).",
    "Rozliczenia: analiza bitcoina z 29 paź trafiona (spadek do 77 699 poniżej celu 78 000), analiza EUR/USD z 28 paź nietrafiona (zamknięcie 1,1178 nad oporem 1,1170). Skuteczność 6 z 19. Nowe szkice: BTC spadkowo (cel 76 500) i EUR/USD neutralnie (1,1113–1,1260). Dziś kończą się 10-sesyjne horyzonty analiz S&P 500 i GBP/USD z 18 paź."
  ],
  punkty_en: [
    "The Bank of Japan left its rate at 1.25% (8-1; one member wanted a hike to 1.5%) and raised its inflation forecast. The bank judged that underlying inflation has reached the 2% target, which opens the way to a December hike. The yen strengthened to 157.1 per dollar.",
    "Asia: the Nikkei 225 closed at 63,154 (−2.3%), and the Kospi is down nearly 5%. The tech selloff continues after Alphabet and Amazon results.",
    "Amazon about −7% after hours: AWS +39%, but earnings and revenue below expectations and higher AI spending. Nasdaq 100 futures around 28,862 (−1.8% versus the close), S&P 500 around 7,653 (−0.9%). The US 10-year yield fell to about 4.90%, its lowest in over a month.",
    "Crypto: a hack at Binance (outflows of about $5.3–5.6bn according to KuCoin); the exchange halted deposits and withdrawals. Bitcoin touched $77,000 and is now around $78,450. Gold fell below $4,000 (around $3,990), silver around $50.9 (−2.4%).",
    "Settlements: the 29 Oct bitcoin analysis hit (a drop to $77,699 below the $78,000 target), the 28 Oct EUR/USD analysis missed (a close of 1.1178 above the 1.1170 resistance). Score: 6 of 19. New drafts: bearish BTC (target $76,500) and neutral EUR/USD (1.1113–1.1260). The 10-session horizons of the 18 Oct S&P 500 and GBP/USD analyses end today."
  ],
  instrumenty: {
    sp500:  { kurs: 7652.60, zmiana: -0.88, tydzien: null, notka: "Notowanie CFD. Analiza spadkowa z 18 paź: cel 7 520, opór 7 790; horyzont kończy się dziś.", notka_en: "CFD quote. Bearish 18 Oct analysis: target 7,520, resistance 7,790; horizon ends today.", zrodlo: 1 },
    nasdaq: { kurs: 28862.22, zmiana: -1.84, tydzien: null, notka: "Notowanie CFD poniżej celu analizy (29 000); rozliczenie ze świecy dziennej indeksu po dzisiejszej sesji.", notka_en: "CFD quote below the analysis target (29,000); settlement from the index daily candle after today's session.", zrodlo: 1 },
    xauusd: { kurs: 3989.54, zmiana: -0.78, tydzien: null, notka: "Poniżej 4 000 USD. Analiza spadkowa: cel 3 950, unieważnienie 4 067.", notka_en: "Below $4,000. Bearish analysis: target $3,950, invalidation $4,067.", zrodlo: 0 },
    eurusd: { kurs: 1.1183, zmiana: 0.04, tydzien: null, notka: "Nowa analiza neutralna: zakres 1,1113–1,1260.", notka_en: "New neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3393, zmiana: 0.13, tydzien: null, notka: "Pod oporem z analizy (1,3435); horyzont kończy się dziś.", notka_en: "Below the analysis resistance (1.3435); horizon ends today.", zrodlo: 2 },
    usdjpy: { kurs: 157.56, zmiana: -0.08, tydzien: null, notka: "Po decyzji BoJ jen chwilowo 157,115. Analiza: zakres 156,75–159,05.", notka_en: "Briefly 157.115 after the BoJ. Analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 50.91, zmiana: -2.36, tydzien: null, notka: "Blisko celu analizy (50). Opór 55,50.", notka_en: "Close to the analysis target ($50). Resistance $55.50.", zrodlo: 0 },
    usdpln: { kurs: 3.9262, zmiana: -0.51, tydzien: null, notka: "Notowanie z 29 paź. Zamknięcie świecy 3,9220, tuż nad wsparciem z analizy (3,92). Cel 3,98.", notka_en: "29 Oct quote. Candle close 3.9220, just above the analysis support (3.92). Target 3.98.", zrodlo: 7 },
    wti:    { kurs: 102.70, zmiana: 0.69, tydzien: null, notka: "Wczoraj maksimum 104,99, tuż pod celem analizy (105). Brent 111,62 USD. Wsparcie 95.", notka_en: "Yesterday's high $104.99, just below the analysis target ($105). Brent at $111.62. Support $95.", zrodlo: 0 },
    dax:    { kurs: 26039.68, zmiana: 1.31, tydzien: null, notka: "Zamknięcie Xetra z 29 paź. Analiza wzrostowa: cel 26 164, unieważnienie 25 665.", notka_en: "Xetra close of 29 Oct. Bullish analysis: target 26,164, invalidation 25,665.", zrodlo: 3 },
    btcusd: { kurs: 78447, zmiana: 0.82, tydzien: null, notka: "Analiza z 29 paź trafiona. Nowa analiza spadkowa: cel 76 500, opór 80 000.", notka_en: "29 Oct analysis hit. New bearish analysis: target $76,500, resistance $80,000.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Pt 30 paź", wydarzenia: ["PKB Niemiec za III kwartał (8:00)", "PKB strefy euro za III kwartał (11:00)", "Inflacja w Niemczech (14:00)"] },
    { dzien: "Przyszły tydzień", wydarzenia: ["RBA: decyzja w sprawie stóp (wt 3 lis)", "BoE: decyzja w sprawie stóp (czw 5 lis, 14:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, bitcoin), 30 paź 2026", nazwa_en: "Trading Economics: gold (with silver, oil, bitcoin table), 30 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA (US100, US500), 30 paź 2026", nazwa_en: "Trading Economics: US stock market (US100, US500), 30 Oct 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: jen japoński (z tabelą walut), 30 paź 2026", nazwa_en: "Trading Economics: Japanese yen (with currency table), 30 Oct 2026", url: "https://tradingeconomics.com/japan/currency" },
    { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss, Dax über 26.000 Punkte (29 paź 2026)", nazwa_en: "ARIVA.DE / dpa-AFX: Frankfurt stocks close, DAX above 26,000 (29 Oct 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-ueber-26-000-punkte-12187543" },
    { nazwa: "Yahoo Finance / Reuters: Yen gains after BOJ, AI jitters drive Treasury rally (30 paź 2026)", nazwa_en: "Yahoo Finance / Reuters: Yen gains after BOJ, AI jitters drive Treasury rally (30 Oct 2026)", url: "https://finance.yahoo.com/markets/currencies/articles/yen-steady-boj-ai-jitters-015222078.html" },
    { nazwa: "KuCoin: Crypto Daily Market Report (30 paź 2026)", nazwa_en: "KuCoin: Crypto Daily Market Report (30 Oct 2026)", url: "https://www.kucoin.com/news/articles/crypto-daily-market-report-october-30-2026" },
    { nazwa: "Trading Economics: Nikkei 225 (z tabelą rynków Azji), 30 paź 2026", nazwa_en: "Trading Economics: Nikkei 225 (with Asian markets table), 30 Oct 2026", url: "https://tradingeconomics.com/japan/stock-market" },
    { nazwa: "Trading Economics: złoty (USD/PLN, EUR/PLN), 29 paź 2026", nazwa_en: "Trading Economics: Polish zloty (USD/PLN, EUR/PLN), 29 Oct 2026", url: "https://tradingeconomics.com/poland/currency" }
  ]
};
