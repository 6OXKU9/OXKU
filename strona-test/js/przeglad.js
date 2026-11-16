// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-16T22:30:00+01:00",
  stanNa_en: "Monday evening, 16 Nov 2026 (after the US close)",
  stanNa: "poniedziałek wieczorem, 16 lis 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "Chips drag Wall Street lower for a third session: S&P 500 −1.9%, Nasdaq 100 −2.6% the day before Nvidia's results. The S&P 500 and Nasdaq close below their analysis levels. The dollar at a near-20-month high, EUR/USD below 1.10; oil −3.5%.",
  naglowek: "Producenci chipów ciągną Wall Street w dół trzecią sesję: S&P 500 −1,9%, Nasdaq 100 −2,6% dzień przed wynikami Nvidii. S&P 500 i Nasdaq zamykają się poza poziomami analiz. Dolar najwyżej od prawie 20 miesięcy, EUR/USD poniżej 1,10; ropa −3,5%.",
  punkty: [
    "Wall Street traci trzecią sesję z rzędu, najmocniej od tygodni: S&P 500 około 7 420 (−1,9%), Nasdaq 100 około 27 225 (−2,6%), Dow ponad −700 pkt. Nvidia −4,2% przed jutrzejszymi wynikami; Micron −7%, Intel −6,5%, AMD −5%, Broadcom −4%.",
    "S&P 500 zamknął się poniżej 7 422, poziomu unieważnienia szkicu wzrostowego, a Nasdaq 100 poniżej dolnej granicy zakresu 27 421. Obie analizy rozliczymy jutro rano po świecach CNBC.",
    "Indeks Empire State w listopadzie 7,8 pkt wobec prognozy 18 i 25,5 w październiku; zatrudnienie rośnie najszybciej od ponad 4 lat, ceny płacone 45,9. DAX zamknął się około 26 633 (−0,4%); Siemens −2,4%, Deutsche Telekom +1,6%.",
    "Dolar najmocniejszy od prawie 20 miesięcy: indeks około 103,6. EUR/USD 1,0995 spadł poniżej 1,10 m.in. przez obawy o finanse Francji; GBP/USD 1,3179, USD/JPY 159,5.",
    "Złoto 3 853 USD (−0,7%), na dolnej granicy analizy; srebro 46,97 USD (−3,6%). Ropa tanieje o ponad 3,5%: WTI 85,4 USD, blisko celu szkicu (83,88), Brent 92,1. Bitcoin około 65 150 USD. Jutro sprzedaż detaliczna w USA (14:30) i wyniki Nvidii po sesji."
  ],
  punkty_en: [
    "Wall Street falls for a third session, the most in weeks: S&P 500 around 7,420 (−1.9%), Nasdaq 100 around 27,225 (−2.6%), the Dow down more than 700 points. Nvidia −4.2% ahead of tomorrow's results; Micron −7%, Intel −6.5%, AMD −5%, Broadcom −4%.",
    "The S&P 500 closed below 7,422, the bullish draft's invalidation level, and the Nasdaq 100 below the 27,421 lower bound of its range. Both analyses will be settled tomorrow morning from the CNBC candles.",
    "The Empire State index was 7.8 in November versus a forecast of 18 and 25.5 in October; employment grows at the fastest pace in over 4 years, prices paid 45.9. The DAX closed around 26,633 (−0.4%); Siemens −2.4%, Deutsche Telekom +1.6%.",
    "The dollar is the strongest in almost 20 months: the index around 103.6. EUR/USD 1.0995 fell below 1.10, partly on worries about French public finances; GBP/USD 1.3179, USD/JPY 159.5.",
    "Gold $3,853 (−0.7%), at the analysis's lower bound; silver $46.97 (−3.6%). Oil drops more than 3.5%: WTI $85.4, close to the draft's target ($83.88), Brent $92.1. Bitcoin around $65,150. Tomorrow US retail sales (14:30) and Nvidia's results after the close."
  ],
  instrumenty: {
    sp500: { kurs: 7419.84, zmiana: -1.88, tydzien: -1.72, notka: "Zamknięcie (Trading Economics, CFD) poniżej poziomu unieważnienia 7 422; rozliczenie rano po świecy CNBC.", notka_en: "Close (Trading Economics, CFD) below the 7,422 invalidation level; settled in the morning from the CNBC candle.", zrodlo: 1 },
    nasdaq: { kurs: 27224.7, zmiana: -2.57, tydzien: -2.45, notka: "Zamknięcie (Trading Economics, CFD) poniżej dolnej granicy zakresu 27 421; rozliczenie rano po świecy CNBC.", notka_en: "Close (Trading Economics, CFD) below the 27,421 lower bound; settled in the morning from the CNBC candle.", zrodlo: 1 },
    xauusd: { kurs: 3852.64, zmiana: -0.71, tydzien: -6.96, notka: "Analiza neutralna: zakres 3 853–3 999; kurs na dolnej granicy, rozstrzygnie świeca dzienna CNBC.", notka_en: "Neutral analysis: $3,853–3,999 range; price at the lower bound, the CNBC daily candle decides.", zrodlo: 0 },
    eurusd: { kurs: 1.0995, zmiana: -0.24, tydzien: -2.03, notka: "Nowy szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "New bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3179, zmiana: -0.27, tydzien: -1.94, notka: "Szkic spadkowy: cel 1,3177, unieważnienie 1,3385.", notka_en: "Bearish draft: target 1.3177, invalidation 1.3385.", zrodlo: 2 },
    usdjpy: { kurs: 159.46, zmiana: -0.13, tydzien: 0.99, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 46.97, zmiana: -3.59, tydzien: -12.03, notka: "Nowy szkic spadkowy: cel 45, unieważnienie 50,43.", notka_en: "New bearish draft: target $45, invalidation $50.43.", zrodlo: 0 },
    usdpln: { kurs: 3.9931, zmiana: 0.0, tydzien: 2.22, notka: "Zamknięcie z piątku (CNBC), brak świeższego notowania. Nowy szkic wzrostowy: cel 4,00, unieważnienie 3,9621.", notka_en: "Friday close (CNBC), no fresher quote. New bullish draft: target 4.00, invalidation 3.9621.", zrodlo: 3 },
    wti: { kurs: 85.39, zmiana: -3.58, tydzien: -1.68, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88 (blisko), unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88 (close), invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26633, zmiana: -0.44, tydzien: 1.39, notka: "Zamknięcie (Trading Economics). Szkic wzrostowy: cel 27 011, unieważnienie 26 492.", notka_en: "Close (Trading Economics). Bullish draft: target 27,011, invalidation 26,492.", zrodlo: 3 },
    btcusd: { kurs: 65150, zmiana: -0.25, tydzien: -13.43, notka: "Gemini. Nowy szkic spadkowy: cel 61 946, unieważnienie 68 380.", notka_en: "Gemini. New bearish draft: target $61,946, invalidation $68,380.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Wt 17 lis", wydarzenia: ["USA: sprzedaż detaliczna (14:30)", "USA: produkcja przemysłowa (15:15)", "Nvidia: wyniki po sesji (około 22:20)"] },
    { dzien: "Śr 18 lis", wydarzenia: ["USA: protokół z posiedzenia FOMC (20:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa (16 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude (16 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: zamknięcie Wall Street (16 lis 2026)", nazwa_en: "Trading Economics: Wall Street close (16 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar i kursy walut (16 lis 2026)", nazwa_en: "Trading Economics: dollar and FX rates (16 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: DAX (16 lis 2026); USD/PLN: zamknięcie CNBC z 13 lis", nazwa_en: "Trading Economics: DAX (16 Nov 2026); USD/PLN: CNBC close on 13 Nov", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (16 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (16 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: indeks Empire State NY Fed (lis 2026)", nazwa_en: "Trading Economics: NY Fed Empire State index (Nov 2026)", url: "https://tradingeconomics.com/united-states/ny-empire-state-manufacturing-index" },
    { nazwa: "Trading Economics: sprzedaż detaliczna w Chinach (paź 2026)", nazwa_en: "Trading Economics: China retail sales (Oct 2026)", url: "https://tradingeconomics.com/china/retail-sales-annual" },
    { nazwa: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", nazwa_en: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262305825-week-ahead-nvidia-q3-earnings-us-october-retail-sales-fomc-minutes-walmart-tradingkey" }
  ]
};
