// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-16T13:55:00+01:00",
  stanNa_en: "Monday afternoon, 16 Nov 2026 (before the US open)",
  stanNa: "poniedziałek po południu, 16 lis 2026 (przed sesją w USA)",
  naglowek_en: "US futures fall for a third session ahead of Nvidia's results: Nasdaq 100 −1%, Nvidia −4% pre-market. The DAX flat near its record. The dollar at its highest since April 2025; gold touched $3,852, the lowest since October 2025.",
  naglowek: "Kontrakty w USA w dół trzecią sesję przed wynikami Nvidii: Nasdaq 100 −1%, Nvidia −4% przed sesją. DAX bez zmian blisko rekordu. Dolar najmocniejszy od kwietnia 2025; złoto dotknęło 3 852 USD, najniżej od października 2025.",
  punkty: [
    "Europa bez kierunku przed wynikami Nvidii: DAX około 26 754 (bez zmian) blisko rekordu; Rheinmetall +2,2%, MTU +1,3%, Siemens −2,3%, Infineon −1,9%. Euro Stoxx 50 −0,1%, Londyn +0,35%.",
    "Kontrakty w USA w dół trzecią sesję z rzędu: S&P 500 około −0,7% (CFD 7 521), Nasdaq 100 ponad −1% (CFD 27 595). Nvidia traci przed sesją prawie 4% przed jutrzejszymi wynikami; Micron, AMD, Intel i Broadcom około −5%.",
    "Dziś o 14:30 indeks Empire State, jutro sprzedaż detaliczna w USA (prognoza 0,0% m/m) i wyniki Nvidii po sesji, w środę protokół Fed. Rynek wycenia około 92% szans na grudniową podwyżkę stóp o 25 pb.",
    "Dolar najmocniejszy od kwietnia 2025: indeks około 103,5. EUR/USD 1,1011, GBP/USD 1,3197, USD/JPY 159,5 po słabym PKB Japonii.",
    "Złoto około 3 869 USD (−0,3%) po porannym minimum 3 852, najniżej od października 2025; srebro 47,67 USD (−2,2%). Ropa tanieje: WTI 87,8 USD, Brent 94,8. Bitcoin około 64 100 USD. W ciągu dnia żaden poziom analiz nie został rozstrzygnięty."
  ],
  punkty_en: [
    "Europe lacks direction ahead of Nvidia's results: the DAX around 26,754 (flat) near its record; Rheinmetall +2.2%, MTU +1.3%, Siemens −2.3%, Infineon −1.9%. Euro Stoxx 50 −0.1%, London +0.35%.",
    "US futures fall for a third session: S&P 500 about −0.7% (CFD 7,521), Nasdaq 100 more than −1% (CFD 27,595). Nvidia is down almost 4% pre-market ahead of tomorrow's results; Micron, AMD, Intel and Broadcom around −5%.",
    "Today at 14:30 the Empire State index; tomorrow US retail sales (forecast 0.0% m/m) and Nvidia's results after the close; Wednesday the Fed minutes. Markets price about a 92% chance of a 25 bp December hike.",
    "The dollar is the strongest since April 2025: the index around 103.5. EUR/USD 1.1011, GBP/USD 1.3197, USD/JPY 159.5 after Japan's weak GDP.",
    "Gold around $3,869 (−0.3%) after a morning low of $3,852, the lowest since October 2025; silver $47.67 (−2.2%). Oil eases: WTI $87.8, Brent $94.8. Bitcoin around $64,100. No analysis level was decided intraday."
  ],
  instrumenty: {
    sp500: { kurs: 7520.92, zmiana: -0.54, tydzien: 1.95, notka: "Kontrakt CFD przed sesją. Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Pre-market CFD quote. Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 27594.83, zmiana: -1.25, tydzien: 2.24, notka: "Kontrakt CFD przed sesją. Analiza neutralna: zakres 27 421–28 830.", notka_en: "Pre-market CFD quote. Neutral analysis: 27,421–28,830 range.", zrodlo: 1 },
    xauusd: { kurs: 3869.3, zmiana: -0.28, tydzien: -4.84, notka: "Analiza neutralna: zakres 3 853–3 999; rano minimum 3 852, rozstrzyga zamknięcie dnia.", notka_en: "Neutral analysis: $3,853–3,999 range; morning low $3,852, the daily close decides.", zrodlo: 0 },
    eurusd: { kurs: 1.1011, zmiana: -0.09, tydzien: -1.18, notka: "Nowy szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "New bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3197, zmiana: -0.14, tydzien: -1.14, notka: "Szkic spadkowy: cel 1,3177, unieważnienie 1,3385.", notka_en: "Bearish draft: target 1.3177, invalidation 1.3385.", zrodlo: 2 },
    usdjpy: { kurs: 159.45, zmiana: -0.13, tydzien: 0.63, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 47.67, zmiana: -2.16, tydzien: -8.11, notka: "Nowy szkic spadkowy: cel 45, unieważnienie 50,43.", notka_en: "New bearish draft: target $45, invalidation $50.43.", zrodlo: 0 },
    usdpln: { kurs: 3.9931, zmiana: 0.0, tydzien: 1.32, notka: "Zamknięcie z piątku (CNBC), brak świeższego notowania. Nowy szkic wzrostowy: cel 4,00, unieważnienie 3,9621.", notka_en: "Friday close (CNBC), no fresher quote. New bullish draft: target 4.00, invalidation 3.9621.", zrodlo: 3 },
    wti: { kurs: 87.75, zmiana: -0.91, tydzien: -3.39, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88, unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88, invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26754.2, zmiana: 0.02, tydzien: 3.62, notka: "W trakcie sesji (CFD). Szkic wzrostowy: cel 27 011, unieważnienie 26 492.", notka_en: "During the session (CFD). Bullish draft: target 27,011, invalidation 26,492.", zrodlo: 3 },
    btcusd: { kurs: 64093, zmiana: -1.87, tydzien: -14.84, notka: "Gemini. Nowy szkic spadkowy: cel 61 946, unieważnienie 68 380.", notka_en: "Gemini. New bearish draft: target $61,946, invalidation $68,380.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Pon 16 lis", wydarzenia: ["USA: indeks Empire State (14:30)"] },
    { dzien: "Wt 17 lis", wydarzenia: ["USA: sprzedaż detaliczna (14:30)", "Nvidia: wyniki po sesji (około 22:20)"] },
    { dzien: "Śr 18 lis", wydarzenia: ["USA: protokół z posiedzenia FOMC (20:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa (16 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude (16 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Stock Futures Fall (16 lis 2026)", nazwa_en: "Trading Economics: US Stock Futures Fall (16 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar i kursy walut (16 lis 2026)", nazwa_en: "Trading Economics: dollar and FX rates (16 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: DAX (16 lis 2026); USD/PLN: zamknięcie CNBC z 13 lis", nazwa_en: "Trading Economics: DAX (16 Nov 2026); USD/PLN: CNBC close on 13 Nov", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (16 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (16 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: PKB Japonii za III kw. 2026", nazwa_en: "Trading Economics: Japan Q3 2026 GDP", url: "https://tradingeconomics.com/japan/gdp-growth" },
    { nazwa: "Trading Economics: sprzedaż detaliczna w Chinach (paź 2026)", nazwa_en: "Trading Economics: China retail sales (Oct 2026)", url: "https://tradingeconomics.com/china/retail-sales-annual" },
    { nazwa: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", nazwa_en: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262305825-week-ahead-nvidia-q3-earnings-us-october-retail-sales-fomc-minutes-walmart-tradingkey" }
  ]
};
