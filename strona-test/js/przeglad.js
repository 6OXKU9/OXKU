// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-18T13:55:00+01:00",
  stanNa_en: "Wednesday afternoon, 18 Nov 2026 (before the US open)",
  stanNa: "środa po południu, 18 lis 2026 (przed sesją w USA)",
  naglowek_en: "US futures rise after Nvidia's results: Nasdaq 100 more than +1%, S&P 500 +0.7%. The DAX lacks direction at 26,030–26,100. Gold loses 2.5% to $3,754 and silver 4% to $45.35 as the dollar rises (103.8). The Fed minutes are due tonight.",
  naglowek: "Kontrakty w USA w górę po wynikach Nvidii: Nasdaq 100 ponad +1%, S&P 500 +0,7%. DAX bez wyraźnego kierunku przy 26 030–26 100. Złoto traci 2,5% do 3 754 USD, srebro 4% do 45,35 przy rosnącym dolarze (103,8). Wieczorem protokół Fed.",
  punkty: [
    "Europa bez kierunku po wtorkowym spadku: DAX między 26 030 a 26 100; Siemens Energy +3,2%, Infineon +1,8%, a Deutsche Bank traci do 2% po kolejnych doniesieniach z wycieku. Przewodniczący rady nadzorczej Nvidii odrzucił powrót Jensena Huanga. Euro Stoxx 50 bez zmian, Londyn −0,5%.",
    "Kontrakty w USA rosną po lepszych od oczekiwań wynikach Nvidii: Nasdaq 100 ponad +1%, S&P 500 około +0,7%, Dow +0,3%. Akcje Nvidii zyskiwały po wtorkowej sesji ponad 4%, CoreWeave ponad 7%, Nebius ponad 10%. Wieczorem wycena debiutu Anthropic, notowania od czwartku.",
    "Dolar mocniejszy: indeks około 103,8, najwyżej od kwietnia 2025. EUR/USD 1,0967 (cel szkicu 1,0950), GBP/USD 1,3166 (cel 1,3132), USD/JPY 159,4.",
    "Złoto 3 754 USD (−2,5%), blisko celu szkicu (3 730); srebro 45,35 USD (−4%), tuż nad celem 45. Ropa: WTI 85,4 USD, Brent 93,0. Bitcoin około 64 000 USD.",
    "Dziś o 20:00 protokół z październikowego posiedzenia Fed; rynek wycenia około 96% szans na grudniową podwyżkę stóp o 25 pb. W ciągu dnia żaden poziom analiz nie został rozstrzygnięty."
  ],
  punkty_en: [
    "Europe lacks direction after Tuesday's drop: the DAX between 26,030 and 26,100; Siemens Energy +3.2%, Infineon +1.8%, while Deutsche Bank loses up to 2% on further leak reports. Nvidia's board chairman rejected a return of Jensen Huang. Euro Stoxx 50 flat, London −0.5%.",
    "US futures rise after Nvidia's better-than-expected results: Nasdaq 100 more than +1%, S&P 500 about +0.7%, Dow +0.3%. Nvidia shares rose more than 4% after Tuesday's session, CoreWeave more than 7%, Nebius more than 10%. Anthropic's IPO pricing is due tonight, with trading from Thursday.",
    "A firmer dollar: the index around 103.8, the highest since April 2025. EUR/USD 1.0967 (draft target 1.0950), GBP/USD 1.3166 (target 1.3132), USD/JPY 159.4.",
    "Gold $3,754 (−2.5%), close to the draft's target ($3,730); silver $45.35 (−4%), just above the $45 target. Oil: WTI $85.4, Brent $93.0. Bitcoin around $64,000.",
    "The minutes of the Fed's October meeting are due today at 20:00; markets price about a 96% chance of a 25 bp December hike. No analysis level was decided intraday."
  ],
  instrumenty: {
    sp500: { kurs: 7340.53, zmiana: -1.03, tydzien: -3.66, notka: "Zamknięcie z wtorku (CNBC); kontrakty przed sesją około +0,7%. Szkic wzrostowy: cel 7 502, unieważnienie 7 288.", notka_en: "Tuesday close (CNBC); futures about +0.7% pre-market. Bullish draft: target 7,502, invalidation 7,288.", zrodlo: 1 },
    nasdaq: { kurs: 27001.8, zmiana: -0.72, tydzien: -4.84, notka: "Zamknięcie z wtorku (CNBC); kontrakty przed sesją ponad +1%. Szkic wzrostowy: cel 27 622, unieważnienie 26 581.", notka_en: "Tuesday close (CNBC); futures more than +1% pre-market. Bullish draft: target 27,622, invalidation 26,581.", zrodlo: 1 },
    xauusd: { kurs: 3753.53, zmiana: -2.47, tydzien: -5.86, notka: "Szkic spadkowy: cel 3 730 (blisko), unieważnienie 3 881.", notka_en: "Bearish draft: target $3,730 (close), invalidation $3,881.", zrodlo: 0 },
    eurusd: { kurs: 1.0967, zmiana: -0.27, tydzien: -1.1, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3166, zmiana: -0.32, tydzien: -0.86, notka: "Szkic spadkowy: cel 1,3132, unieważnienie 1,3304.", notka_en: "Bearish draft: target 1.3132, invalidation 1.3304.", zrodlo: 2 },
    usdjpy: { kurs: 159.37, zmiana: 0.01, tydzien: -0.25, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 45.35, zmiana: -4.2, tydzien: -12.22, notka: "Szkic spadkowy: cel 45 (tuż pod ceną), unieważnienie 50,43.", notka_en: "Bearish draft: target $45 (just below the price), invalidation $50.43.", zrodlo: 0 },
    usdpln: { kurs: 3.9981, zmiana: -0.05, tydzien: 0.54, notka: "Zamknięcie z wtorku (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Tuesday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 3 },
    wti: { kurs: 85.42, zmiana: -0.69, tydzien: -1.28, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88 (blisko), unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88 (close), invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26065, zmiana: 0.08, tydzien: -2.24, notka: "W trakcie sesji (Trading Economics). Analiza neutralna: zakres 25 793–26 600.", notka_en: "During the session (Trading Economics). Neutral analysis: 25,793–26,600 range.", zrodlo: 3 },
    btcusd: { kurs: 63980, zmiana: -1.38, tydzien: -13.46, notka: "Gemini. Szkic spadkowy: cel 61 946, unieważnienie 68 380.", notka_en: "Gemini. Bearish draft: target $61,946, invalidation $68,380.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Śr 18 lis", wydarzenia: ["USA: protokół z posiedzenia FOMC (20:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa (18 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude (18 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "CNBC: zamknięcia z 17 lis; Trading Economics: kontrakty w USA po wynikach Nvidii (18 lis 2026)", nazwa_en: "CNBC: 17 Nov closes; Trading Economics: US futures after Nvidia's results (18 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar i kursy walut (18 lis 2026)", nazwa_en: "Trading Economics: dollar and FX rates (18 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: DAX i Europa (18 lis 2026); USD/PLN: zamknięcie CNBC z 17 lis", nazwa_en: "Trading Economics: DAX and Europe (18 Nov 2026); USD/PLN: CNBC close on 17 Nov", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (18 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (18 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "NVIDIA: Financial Results for Third Quarter Fiscal 2027 (17 lis 2026)", nazwa_en: "NVIDIA: Financial Results for Third Quarter Fiscal 2027 (17 Nov 2026)", url: "https://www.globenewswire.com/news-release/2026/11/17/3405200/0/en/nvidia-announces-financial-results-for-third-quarter-fiscal-2027.html" },
    { nazwa: "TokenPost: Nvidia Earnings Support Nikkei and Kospi as Hong Kong Shares Fall (18 lis 2026)", nazwa_en: "TokenPost: Nvidia Earnings Support Nikkei and Kospi as Hong Kong Shares Fall (18 Nov 2026)", url: "https://www.tokenpost.com/news/investing/60182" },
    { nazwa: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", nazwa_en: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262305825-week-ahead-nvidia-q3-earnings-us-october-retail-sales-fomc-minutes-walmart-tradingkey" }
  ]
};
