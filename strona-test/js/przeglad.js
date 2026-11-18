// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-18T22:35:00+01:00",
  stanNa_en: "Wednesday evening, 18 Nov 2026 (after the US close)",
  stanNa: "środa wieczorem, 18 lis 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "Fed minutes: a majority of members favour further rate hikes. Gold loses 3.2% to $3,727, WTI crude 3.4% to $83.1. Nvidia gives back its post-results gains (−2.9%), S&P 500 −0.1%, DAX −1.2% to around 25,750.",
  naglowek: "Protokół Fed: większość członków za dalszymi podwyżkami stóp. Złoto traci 3,2% do 3 727 USD, ropa WTI 3,4% do 83,1. Nvidia oddaje zyski po wynikach (−2,9%), S&P 500 −0,1%, DAX −1,2% do około 25 750.",
  punkty: [
    "Protokół z październikowego posiedzenia Fed: wyraźna większość członków uważa dalsze podwyżki stóp za uzasadnione, a decyzja o utrzymaniu stóp zapadła przy dwóch głosach za podwyżką. Waller opowiada się nawet za podwyżką o 50 pb; rynek wycenia około 95% szans na 25 pb w grudniu i kolejny ruch w styczniu.",
    "Wall Street mieszana: S&P 500 około 7 329 (−0,1%), Nasdaq 100 około 27 158 (+0,4%), Dow −1,1%. Nvidia −2,9% mimo mocnych wyników, po zapowiedzi ostrożniejszych inwestycji w inne firmy AI; AMD +5,3%, Broadcom +3,6%.",
    "DAX spadł o 1,2% do około 25 750, poniżej dolnej granicy zakresu analizy (25 793); SAP −3,5%, Commerzbank −3,4%, Deutsche Bank −3,2%. Rozliczenie rano po świecy CNBC.",
    "Dolar najmocniejszy od wiosny 2025: indeks 103,9. EUR/USD 1,0965, GBP/USD 1,3141 (blisko celu szkicu 1,3132), USD/JPY 159,4.",
    "Złoto 3 727 USD (−3,2%), poniżej celu szkicu spadkowego (3 730); srebro 45,13 USD (−4,7%); WTI 83,1 USD (−3,4%), poniżej celu szkicu (83,88); Brent 91,8. Bitcoin około 62 400 USD. Rozliczenia rano po świecach dziennych. Jutro wyniki Walmartu (13:00) i wnioski o zasiłek w USA (14:30)."
  ],
  punkty_en: [
    "Minutes of the Fed's October meeting: a clear majority sees further hikes as warranted, and the hold was decided with two votes for a hike. Waller even favours a 50 bp hike; markets price about a 95% chance of 25 bp in December and another move in January.",
    "Wall Street mixed: S&P 500 around 7,329 (−0.1%), Nasdaq 100 around 27,158 (+0.4%), Dow −1.1%. Nvidia −2.9% despite strong results, after signalling more cautious investment in other AI firms; AMD +5.3%, Broadcom +3.6%.",
    "The DAX fell 1.2% to around 25,750, below the analysis range's lower bound (25,793); SAP −3.5%, Commerzbank −3.4%, Deutsche Bank −3.2%. Settled in the morning from the CNBC candle.",
    "The dollar is the strongest since spring 2025: index 103.9. EUR/USD 1.0965, GBP/USD 1.3141 (close to the draft's 1.3132 target), USD/JPY 159.4.",
    "Gold $3,727 (−3.2%), below the bearish draft's target ($3,730); silver $45.13 (−4.7%); WTI $83.1 (−3.4%), below the draft's target ($83.88); Brent $91.8. Bitcoin around $62,400. Settlements in the morning from the daily candles. Tomorrow Walmart's results (13:00) and US jobless claims (14:30)."
  ],
  instrumenty: {
    sp500: { kurs: 7329.35, zmiana: -0.15, tydzien: -3.81, notka: "Zamknięcie (Trading Economics, CFD). Szkic wzrostowy: cel 7 502, unieważnienie 7 288.", notka_en: "Close (Trading Economics, CFD). Bullish draft: target 7,502, invalidation 7,288.", zrodlo: 1 },
    nasdaq: { kurs: 27158.37, zmiana: 0.58, tydzien: -4.29, notka: "Zamknięcie (Trading Economics, CFD). Szkic wzrostowy: cel 27 622, unieważnienie 26 581.", notka_en: "Close (Trading Economics, CFD). Bullish draft: target 27,622, invalidation 26,581.", zrodlo: 1 },
    xauusd: { kurs: 3726.82, zmiana: -3.16, tydzien: -6.53, notka: "Kurs poniżej celu szkicu spadkowego (3 730); rozliczenie rano po świecy CNBC.", notka_en: "Price below the bearish draft's target ($3,730); settled in the morning from the CNBC candle.", zrodlo: 0 },
    eurusd: { kurs: 1.0965, zmiana: -0.29, tydzien: -1.12, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3141, zmiana: -0.51, tydzien: -1.05, notka: "Szkic spadkowy: cel 1,3132 (blisko), unieważnienie 1,3304.", notka_en: "Bearish draft: target 1.3132 (close), invalidation 1.3304.", zrodlo: 2 },
    usdjpy: { kurs: 159.37, zmiana: 0.01, tydzien: -0.25, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 45.13, zmiana: -4.67, tydzien: -12.65, notka: "Szkic spadkowy: cel 45 (tuż pod ceną), unieważnienie 50,43.", notka_en: "Bearish draft: target $45 (just below the price), invalidation $50.43.", zrodlo: 0 },
    usdpln: { kurs: 3.9981, zmiana: -0.05, tydzien: 0.54, notka: "Zamknięcie z wtorku (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Tuesday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 3 },
    wti: { kurs: 83.07, zmiana: -3.42, tydzien: -4.0, notka: "Najbliższy kontrakt; kurs poniżej celu szkicu spadkowego (83,88), rozliczenie rano po świecy CNBC.", notka_en: "Front-month contract; price below the bearish draft's target ($83.88), settled in the morning from the CNBC candle.", zrodlo: 0 },
    dax: { kurs: 25750, zmiana: -1.13, tydzien: -3.42, notka: "Zamknięcie (Trading Economics, źródła podają 25 742–25 823) poniżej dolnej granicy zakresu 25 793; rozliczenie rano po świecy CNBC.", notka_en: "Close (Trading Economics, sources give 25,742–25,823) below the 25,793 lower bound; settled in the morning from the CNBC candle.", zrodlo: 3 },
    btcusd: { kurs: 62425, zmiana: -3.77, tydzien: -15.56, notka: "Gemini. Szkic spadkowy: cel 61 946, unieważnienie 68 380.", notka_en: "Gemini. Bearish draft: target $61,946, invalidation $68,380.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Czw 19 lis", wydarzenia: ["Walmart: wyniki przed sesją (13:00)", "USA: wnioski o zasiłek (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa (18 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude (18 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: zamknięcie Wall Street i protokół Fed (18 lis 2026)", nazwa_en: "Trading Economics: Wall Street close and Fed minutes (18 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar po protokole Fed (18 lis 2026)", nazwa_en: "Trading Economics: the dollar after the Fed minutes (18 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: DAX (18 lis 2026); USD/PLN: zamknięcie CNBC z 17 lis", nazwa_en: "Trading Economics: DAX (18 Nov 2026); USD/PLN: CNBC close on 17 Nov", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (18 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (18 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "NVIDIA: Financial Results for Third Quarter Fiscal 2027 (17 lis 2026)", nazwa_en: "NVIDIA: Financial Results for Third Quarter Fiscal 2027 (17 Nov 2026)", url: "https://www.globenewswire.com/news-release/2026/11/17/3405200/0/en/nvidia-announces-financial-results-for-third-quarter-fiscal-2027.html" },
    { nazwa: "Letters to a Young Investor: Weekly Economic Calendar 16–20 lis 2026", nazwa_en: "Letters to a Young Investor: Weekly Economic Calendar 16–20 Nov 2026", url: "https://letterstoayounginvestor.substack.com/p/weekly-economic-calendar-november-cf0" },
    { nazwa: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", nazwa_en: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262305825-week-ahead-nvidia-q3-earnings-us-october-retail-sales-fomc-minutes-walmart-tradingkey" }
  ]
};
