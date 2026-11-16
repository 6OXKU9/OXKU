// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-16T07:50:00+01:00",
  stanNa_en: "Monday morning, 16 Nov 2026 (before the European open)",
  stanNa: "poniedziałek rano, 16 lis 2026 (przed sesją w Europie)",
  naglowek_en: "Weak Asian data overnight: Japan's GDP stalls, China's retail sales miss. Silver hits a yearly low ($47.6), gold the lowest since October 2025. US futures slip ahead of Nvidia's Tuesday results; the dollar holds near a 19-month high.",
  naglowek: "Słabe dane z Azji w nocy: PKB Japonii stoi w miejscu, sprzedaż w Chinach poniżej prognoz. Srebro na minimum roku (47,6 USD), złoto najniżej od października 2025. Kontrakty w USA w dół przed wtorkowymi wynikami Nvidii; dolar przy szczycie od 19 miesięcy.",
  punkty: [
    "W nocy słabe dane z Azji: PKB Japonii za III kwartał 0,0% k/k wobec prognozy 0,1% (rocznie −0,1%), konsumpcja −0,3%; jen i japońskie akcje pod presją. Sprzedaż detaliczna w Chinach w październiku +0,4% r/r wobec prognozy 0,8%.",
    "Kontrakty w USA od −0,1% do −0,6% po piątkowym spadku (S&P 500 7 562, −0,4%; Nasdaq 100 27 944, −1,2%). Nvidia ma za sobą sześć tygodni spadków po rezygnacji prezesa Jensena Huanga; jej wyniki we wtorek po sesji to główne wydarzenie tygodnia.",
    "Dolar przy najwyższym od kwietnia 2025 poziomie (indeks około 103,4). Rynek wycenia około 92% szans na grudniową podwyżkę stóp Fed o 25 pb i 8% na 50 pb. EUR/USD 1,1018, GBP/USD 1,3207, USD/JPY 159,4.",
    "Złoto 3 857 USD (−0,6%), najniżej od października 2025 i tuż nad dolną granicą analizy (3 853). Srebro 47,57 USD (−2,4%), najniżej w tym roku. WTI 89,0 USD, Brent 96,0. Bitcoin około 64 600 USD po spadku w weekend do 61 946.",
    "Rozliczenia: trafione analizy srebra i bitcoina, nietrafione EUR/USD i USD/PLN (piątkowe zamknięcia poza zakresami); bilans 29 z 63. Dziś o 14:30 indeks Empire State, jutro sprzedaż detaliczna w USA, w środę protokół Fed."
  ],
  punkty_en: [
    "Weak data from Asia overnight: Japan's Q3 GDP 0.0% q/q versus a 0.1% forecast (−0.1% annualised), consumption −0.3%; the yen and Japanese stocks under pressure. China's October retail sales +0.4% y/y versus a 0.8% forecast.",
    "US futures −0.1% to −0.6% after Friday's drop (S&P 500 7,562, −0.4%; Nasdaq 100 27,944, −1.2%). Nvidia has fallen for six weeks after CEO Jensen Huang's resignation; its results on Tuesday after the close are the week's main event.",
    "The dollar near its highest since April 2025 (index around 103.4). Markets price about a 92% chance of a 25 bp Fed hike in December and 8% for 50 bp. EUR/USD 1.1018, GBP/USD 1.3207, USD/JPY 159.4.",
    "Gold $3,857 (−0.6%), the lowest since October 2025 and just above the analysis's lower bound ($3,853). Silver $47.57 (−2.4%), the lowest this year. WTI $89.0, Brent $96.0. Bitcoin around $64,600 after a weekend drop to $61,946.",
    "Settlements: hits for silver and bitcoin, misses for EUR/USD and USD/PLN (Friday closes outside the ranges); the tally is 29 of 63. Today at 14:30 the Empire State index, tomorrow US retail sales, Wednesday the Fed minutes."
  ],
  instrumenty: {
    sp500: { kurs: 7561.67, zmiana: -0.4, tydzien: 2.51, notka: "Zamknięcie z piątku (CNBC); kontrakty w poniedziałek rano od −0,1% do −0,6%. Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Friday close (CNBC); futures −0.1% to −0.6% on Monday morning. Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 27943.7, zmiana: -1.22, tydzien: 3.53, notka: "Zamknięcie z piątku (CNBC). Analiza neutralna: zakres 27 421–28 830.", notka_en: "Friday close (CNBC). Neutral analysis: 27,421–28,830 range.", zrodlo: 1 },
    xauusd: { kurs: 3857.25, zmiana: -0.59, tydzien: -5.14, notka: "Analiza neutralna: zakres 3 853–3 999; kurs tuż nad dolną granicą.", notka_en: "Neutral analysis: $3,853–3,999 range; price just above the lower bound.", zrodlo: 0 },
    eurusd: { kurs: 1.1018, zmiana: -0.03, tydzien: -1.12, notka: "Nowy szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "New bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3207, zmiana: -0.06, tydzien: -1.06, notka: "Szkic spadkowy: cel 1,3177, unieważnienie 1,3385.", notka_en: "Bearish draft: target 1.3177, invalidation 1.3385.", zrodlo: 2 },
    usdjpy: { kurs: 159.39, zmiana: -0.17, tydzien: 0.59, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 47.57, zmiana: -2.36, tydzien: -8.31, notka: "Nowy szkic spadkowy: cel 45, unieważnienie 50,43.", notka_en: "New bearish draft: target $45, invalidation $50.43.", zrodlo: 0 },
    usdpln: { kurs: 3.9931, zmiana: 0.29, tydzien: 1.32, notka: "Zamknięcie z piątku (CNBC), brak świeższego notowania. Nowy szkic wzrostowy: cel 4,00, unieważnienie 3,9621.", notka_en: "Friday close (CNBC), no fresher quote. New bullish draft: target 4.00, invalidation 3.9621.", zrodlo: 3 },
    wti: { kurs: 89.0, zmiana: 0.5, tydzien: -2.01, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88, unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88, invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26750, zmiana: -0.08, tydzien: 3.6, notka: "Zamknięcie z piątku (CNBC). Szkic wzrostowy: cel 27 011, unieważnienie 26 492.", notka_en: "Friday close (CNBC). Bullish draft: target 27,011, invalidation 26,492.", zrodlo: 3 },
    btcusd: { kurs: 64580, zmiana: -1.13, tydzien: -14.19, notka: "Gemini. Nowy szkic spadkowy: cel 61 946, unieważnienie 68 380.", notka_en: "Gemini. New bearish draft: target $61,946, invalidation $68,380.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Pon 16 lis", wydarzenia: ["USA: indeks Empire State (14:30)"] },
    { dzien: "Wt 17 lis", wydarzenia: ["USA: sprzedaż detaliczna (14:30)", "Nvidia: wyniki po sesji (około 22:20)"] },
    { dzien: "Śr 18 lis", wydarzenia: ["USA: protokół z posiedzenia FOMC (20:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa (16 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude (16 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "CNBC: zamknięcia z 13 lis; Trading Economics: kontrakty w USA (16 lis 2026)", nazwa_en: "CNBC: 13 Nov closes; Trading Economics: US futures (16 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar i kursy walut (16 lis 2026)", nazwa_en: "Trading Economics: dollar and FX rates (16 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "CNBC: zamknięcia DAX i USD/PLN z 13 lis", nazwa_en: "CNBC: DAX and USD/PLN closes on 13 Nov", url: "https://www.cnbc.com/quotes/.GDAXI" },
    { nazwa: "Gemini: notowanie BTC/USD (16 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (16 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: PKB Japonii za III kw. 2026", nazwa_en: "Trading Economics: Japan Q3 2026 GDP", url: "https://tradingeconomics.com/japan/gdp-growth" },
    { nazwa: "Trading Economics: sprzedaż detaliczna w Chinach (paź 2026)", nazwa_en: "Trading Economics: China retail sales (Oct 2026)", url: "https://tradingeconomics.com/china/retail-sales-annual" },
    { nazwa: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", nazwa_en: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262305825-week-ahead-nvidia-q3-earnings-us-october-retail-sales-fomc-minutes-walmart-tradingkey" }
  ]
};
