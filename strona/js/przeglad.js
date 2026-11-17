// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-17T22:35:00+01:00",
  stanNa_en: "Tuesday evening, 17 Nov 2026 (after the US close)",
  stanNa: "wtorek wieczorem, 17 lis 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "Nvidia beats: Q3 revenue $115.8B versus about $109B expected, Q4 outlook $130B. Before the results the S&P 500 fell about 0.9% and the DAX 2.1%. US retail sales +0.2% as expected; the Fed minutes are due tomorrow.",
  naglowek: "Nvidia powyżej oczekiwań: przychód 115,8 mld USD wobec około 109 mld, prognoza na IV kwartał 130 mld. Przed wynikami S&P 500 stracił około 0,9%, DAX 2,1%. Sprzedaż detaliczna w USA +0,2% zgodnie z prognozą; jutro protokół Fed.",
  punkty: [
    "Nvidia po sesji: przychód w III kwartale 115,8 mld USD (+103% r/r) wobec oczekiwanych około 109 mld; centra danych 107,6 mld USD. Prognoza na IV kwartał to 130 mld USD (±3%), bez sprzedaży układów do centrów danych w Chinach. To pierwsze wyniki po odejściu Jensena Huanga.",
    "Wall Street przed wynikami znowu w dół: S&P 500 około 7 349 (−0,9%), Nasdaq 100 około 27 086, Dow −1,8%. Nvidia −0,8% w trakcie sesji. S&P 500 zamknął się przy celu szkicu spadkowego (7 350); rozliczenie rano po świecy CNBC.",
    "DAX spadł o 2,1% do około 26 045, poniżej 26 492, poziomu unieważnienia szkicu wzrostowego. Deutsche Bank −5,9%, SAP −5,7%, Hochtief −2,9%, mimo najlepszego od lutego indeksu ZEW (35,6).",
    "Sprzedaż detaliczna w USA w październiku +0,2% m/m (prognoza 0,2%, poprzednio 0,8%), grupa kontrolna +0,6%, najmocniej od sierpnia. Musalem z Fed mówi nawet o czterech podwyżkach; rynek wycenia około 93% szans na podwyżkę w grudniu.",
    "Dolar przy szczycie od kwietnia 2025 (indeks 103,5): EUR/USD 1,1005, GBP/USD 1,3209, USD/JPY 159,4. Złoto 3 852 USD, tuż pod dolną granicą analizy (3 853); srebro 47,36 USD, WTI 85,6, Brent 93,0. Bitcoin około 64 300 USD. Jutro o 20:00 protokół Fed."
  ],
  punkty_en: [
    "Nvidia after the close: Q3 revenue $115.8B (+103% y/y) versus about $109B expected; data centre $107.6B. The Q4 outlook is $130B (±3%), with no data-centre chip sales in China. These are the first results since Jensen Huang's departure.",
    "Wall Street fell again before the results: S&P 500 around 7,349 (−0.9%), Nasdaq 100 around 27,086, Dow −1.8%. Nvidia −0.8% during the session. The S&P 500 closed at the bearish draft's target (7,350); settled in the morning from the CNBC candle.",
    "The DAX fell 2.1% to around 26,045, below 26,492, the bullish draft's invalidation level. Deutsche Bank −5.9%, SAP −5.7%, Hochtief −2.9%, despite the best German ZEW since February (35.6).",
    "US October retail sales +0.2% m/m (forecast 0.2%, previous 0.8%), control group +0.6%, the strongest since August. The Fed's Musalem talks of as many as four hikes; markets price about a 93% chance of a December hike.",
    "The dollar near its April 2025 high (index 103.5): EUR/USD 1.1005, GBP/USD 1.3209, USD/JPY 159.4. Gold $3,852, just below the analysis's lower bound ($3,853); silver $47.36, WTI $85.6, Brent $93.0. Bitcoin around $64,300. The Fed minutes are due tomorrow at 20:00."
  ],
  instrumenty: {
    sp500: { kurs: 7349.09, zmiana: -0.91, tydzien: -2.28, notka: "Zamknięcie (Trading Economics, CFD) przy celu szkicu spadkowego 7 350; rozliczenie rano po świecy CNBC.", notka_en: "Close (Trading Economics, CFD) at the bearish draft's 7,350 target; settled in the morning from the CNBC candle.", zrodlo: 1 },
    nasdaq: { kurs: 27085.53, zmiana: -0.41, tydzien: -2.36, notka: "Zamknięcie (Trading Economics, CFD). Szkic spadkowy: cel 26 888, unieważnienie 28 026.", notka_en: "Close (Trading Economics, CFD). Bearish draft: target 26,888, invalidation 28,026.", zrodlo: 1 },
    xauusd: { kurs: 3852.05, zmiana: -0.09, tydzien: -4.47, notka: "Analiza neutralna: zakres 3 853–3 999; kurs tuż pod dolną granicą, rozstrzygnie świeca dzienna CNBC.", notka_en: "Neutral analysis: $3,853–3,999 range; price just below the lower bound, the CNBC daily candle decides.", zrodlo: 0 },
    eurusd: { kurs: 1.1005, zmiana: 0.08, tydzien: -1.42, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3209, zmiana: 0.2, tydzien: -0.99, notka: "Szkic spadkowy: cel 1,3132, unieważnienie 1,3304.", notka_en: "Bearish draft: target 1.3132, invalidation 1.3304.", zrodlo: 2 },
    usdjpy: { kurs: 159.36, zmiana: -0.03, tydzien: 0.4, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 47.36, zmiana: 0.89, tydzien: -8.04, notka: "Szkic spadkowy: cel 45, unieważnienie 50,43.", notka_en: "Bearish draft: target $45, invalidation $50.43.", zrodlo: 0 },
    usdpln: { kurs: 4.0002, zmiana: 0.0, tydzien: 1.69, notka: "Zamknięcie z poniedziałku (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Monday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 3 },
    wti: { kurs: 85.62, zmiana: -0.12, tydzien: -0.49, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88, unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88, invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26045, zmiana: -2.08, tydzien: -1.15, notka: "Zamknięcie (Trading Economics) poniżej 26 492, poziomu unieważnienia szkicu wzrostowego; rozliczenie rano po świecy CNBC.", notka_en: "Close (Trading Economics) below 26,492, the bullish draft's invalidation level; settled in the morning from the CNBC candle.", zrodlo: 3 },
    btcusd: { kurs: 64260, zmiana: -0.78, tydzien: -12.81, notka: "Gemini. Szkic spadkowy: cel 61 946, unieważnienie 68 380.", notka_en: "Gemini. Bearish draft: target $61,946, invalidation $68,380.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Śr 18 lis", wydarzenia: ["USA: protokół z posiedzenia FOMC (20:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa (17 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude (17 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: zamknięcie Wall Street (17 lis 2026)", nazwa_en: "Trading Economics: Wall Street close (17 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar i kursy walut (17 lis 2026)", nazwa_en: "Trading Economics: dollar and FX rates (17 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: DAX (17 lis 2026); USD/PLN: zamknięcie CNBC z 16 lis", nazwa_en: "Trading Economics: DAX (17 Nov 2026); USD/PLN: CNBC close on 16 Nov", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (17 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (17 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "NVIDIA: Financial Results for Third Quarter Fiscal 2027 (17 lis 2026)", nazwa_en: "NVIDIA: Financial Results for Third Quarter Fiscal 2027 (17 Nov 2026)", url: "https://www.globenewswire.com/news-release/2026/11/17/3405200/0/en/nvidia-announces-financial-results-for-third-quarter-fiscal-2027.html" },
    { nazwa: "Trading Economics: sprzedaż detaliczna w USA (paź 2026)", nazwa_en: "Trading Economics: US retail sales (Oct 2026)", url: "https://tradingeconomics.com/united-states/retail-sales" },
    { nazwa: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", nazwa_en: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262305825-week-ahead-nvidia-q3-earnings-us-october-retail-sales-fomc-minutes-walmart-tradingkey" }
  ]
};
