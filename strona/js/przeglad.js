// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-19T22:35:00+01:00",
  stanNa_en: "Thursday evening, 19 Nov 2026 (after the US close)",
  stanNa: "czwartek wieczorem, 19 lis 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "A Wall Street sell-off despite Anthropic's successful debut: S&P 500 −2%, Nasdaq 100 −2.2%, Dow −2.1%. Gold falls to $3,660, silver to $43.8, the DAX −1.1% to 25,464. Five analyses crossed their levels; settled in the morning from CNBC candles.",
  naglowek: "Wyprzedaż na Wall Street mimo udanego debiutu Anthropic: S&P 500 −2%, Nasdaq 100 −2,2%, Dow −2,1%. Złoto spada do 3 660 USD, srebro do 43,8, DAX −1,1% do 25 464. Pięć analiz przekroczyło poziomy; rozliczenie rano po świecach CNBC.",
  punkty: [
    "Akcje Anthropic otworzyły się 34% nad ceną z oferty (83 USD), ale zysk zmalał do około 17%. Reszta rynku traciła: S&P 500 około 7 166 (−2%), Nasdaq 100 około 26 437 (−2,2%), Dow −2,1%. Nvidia −3,3%, AMD −7,7% po raporcie krótkiego sprzedawcy; JPMorgan, Visa i Mastercard w dół po cyberataku na dostawcę. VIX wzrósł do 28,5, rentowność 10-letnich obligacji USA 5,05%.",
    "Wnioski o zasiłek w USA wyniosły 203 tys. wobec oczekiwanych 197 tys. (poprzednio 202 tys.). Walmart stracił 1,5% mimo podniesienia rocznych prognoz.",
    "DAX spadł piąty dzień z rzędu, o 1,1% do 25 464, poniżej celu szkicu spadkowego (25 618); SAP −3,3%, Fresenius Medical Care −4,6%, Rheinmetall −2,6%. Poranne odbicie do 25 900 nie utrzymało się po wzroście cen ropy.",
    "Dolar przy 103,9. EUR/USD 1,0973, GBP/USD 1,3096 (poniżej poziomu unieważnienia szkicu, 1,3132), USD/JPY 159,7. Rynek wycenia około 90% szans na podwyżkę Fed o 25 pb w grudniu.",
    "Złoto 3 660 USD (−1,8%), najniżej od września 2025 i poniżej celu szkicu (3 700); srebro 43,84 (−2,6%), poniżej celu 44,74. WTI 83,8 USD (+0,8%), Brent 92,6, przy doniesieniach o możliwych uderzeniach USA na Iran. Bitcoin spadał na Gemini do 61 000, teraz około 61 500. Rozliczenia rano; w piątek o 16:00 nastroje Uniwersytetu Michigan."
  ],
  punkty_en: [
    "Anthropic shares opened 34% above the offer price ($83), but the gain narrowed to about 17%. The rest of the market fell: S&P 500 around 7,166 (−2%), Nasdaq 100 around 26,437 (−2.2%), Dow −2.1%. Nvidia −3.3%, AMD −7.7% after a short-seller report; JPMorgan, Visa and Mastercard down after a cyberattack on a vendor. The VIX rose to 28.5, the US 10-year yield 5.05%.",
    "US jobless claims came in at 203K versus 197K expected (previous 202K). Walmart lost 1.5% despite raising its full-year outlook.",
    "The DAX fell for a fifth day, 1.1% to 25,464, below the bearish draft's target (25,618); SAP −3.3%, Fresenius Medical Care −4.6%, Rheinmetall −2.6%. The morning rebound to 25,900 did not hold after oil prices rose.",
    "The dollar near 103.9. EUR/USD 1.0973, GBP/USD 1.3096 (below the draft's invalidation level, 1.3132), USD/JPY 159.7. Markets price about a 90% chance of a 25 bp Fed hike in December.",
    "Gold $3,660 (−1.8%), the lowest since September 2025 and below the draft's target ($3,700); silver 43.84 (−2.6%), below the 44.74 target. WTI $83.8 (+0.8%), Brent 92.6, on reports of possible US strikes on Iran. Bitcoin fell to 61,000 on Gemini, now around 61,500. Settlements in the morning; on Friday at 16:00 University of Michigan sentiment."
  ],
  instrumenty: {
    sp500: { kurs: 7166.28, zmiana: -2.15, tydzien: -5.61, notka: "Zamknięcie (Trading Economics, CFD) poniżej poziomu unieważnienia szkicu wzrostowego (7 288); rozliczenie rano po świecy CNBC.", notka_en: "Close (Trading Economics, CFD) below the bullish draft's invalidation level (7,288); settled in the morning from the CNBC candle.", zrodlo: 1 },
    nasdaq: { kurs: 26436.9, zmiana: -2.51, tydzien: -6.55, notka: "Zamknięcie (Trading Economics, CFD) poniżej poziomu unieważnienia szkicu wzrostowego (26 581); rozliczenie rano po świecy CNBC.", notka_en: "Close (Trading Economics, CFD) below the bullish draft's invalidation level (26,581); settled in the morning from the CNBC candle.", zrodlo: 1 },
    xauusd: { kurs: 3660.24, zmiana: -1.7, tydzien: -5.6, notka: "Kurs poniżej celu szkicu spadkowego (3 700); rozliczenie rano po świecy CNBC.", notka_en: "Price below the bearish draft's target ($3,700); settled in the morning from the CNBC candle.", zrodlo: 0 },
    eurusd: { kurs: 1.0973, zmiana: 0.0, tydzien: -0.72, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3096, zmiana: -0.39, tydzien: -0.99, notka: "Kurs poniżej poziomu unieważnienia szkicu wzrostowego (1,3132); rozliczenie rano po świecy CNBC.", notka_en: "Price below the bullish draft's invalidation level (1.3132); settled in the morning from the CNBC candle.", zrodlo: 4 },
    usdjpy: { kurs: 159.67, zmiana: 0.21, tydzien: -0.11, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 43.84, zmiana: -2.64, tydzien: -12.35, notka: "Kurs poniżej celu szkicu spadkowego (44,74); rozliczenie rano po świecy CNBC.", notka_en: "Price below the bearish draft's target ($44.74); settled in the morning from the CNBC candle.", zrodlo: 0 },
    usdpln: { kurs: 4.0162, zmiana: 0.0, tydzien: 0.87, notka: "Zamknięcie ze środy (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Wednesday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 5 },
    wti: { kurs: 83.83, zmiana: 0.68, tydzien: -5.53, notka: "Najbliższy kontrakt. Nowy szkic spadkowy: cel 81,97, unieważnienie 85,95.", notka_en: "Front-month contract. New bearish draft: target $81.97, invalidation $85.95.", zrodlo: 3 },
    dax: { kurs: 25464, zmiana: -1.06, tydzien: -4.89, notka: "Zamknięcie (Trading Economics) poniżej celu szkicu spadkowego (25 618); rozliczenie rano po świecy CNBC.", notka_en: "Close (Trading Economics) below the bearish draft's target (25,618); settled in the morning from the CNBC candle.", zrodlo: 5 },
    btcusd: { kurs: 61547, zmiana: -2.28, tydzien: -13.76, notka: "Gemini; minimum dnia 61 000, poniżej celu szkicu 61 946. Rozliczenie rano po świecy Coinbase.", notka_en: "Gemini; day's low 61,000, below the draft's 61,946 target. Settled in the morning from the Coinbase candle.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Pt 20 lis", wydarzenia: ["USA: nastroje Uniwersytetu Michigan, odczyt ostateczny (16:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto i srebro na 14-miesięcznym dnie (19 lis 2026)", nazwa_en: "Trading Economics: gold and silver at 14-month lows (19 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: zamknięcie Wall Street, debiut Anthropic, Walmart (19 lis 2026)", nazwa_en: "Trading Economics: Wall Street close, Anthropic's debut, Walmart (19 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar (19 lis 2026)", nazwa_en: "Trading Economics: the dollar (19 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: Crude Oil Edges Up (19 lis 2026)", nazwa_en: "Trading Economics: Crude Oil Edges Up (19 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: funt i BoE (18 lis 2026)", nazwa_en: "Trading Economics: sterling and the BoE (18 Nov 2026)", url: "https://tradingeconomics.com/united-kingdom/currency" },
    { nazwa: "Trading Economics: The DAX Index Closes 1.06% Lower (19 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: The DAX Index Closes 1.06% Lower (19 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (19 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (19 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Letters to a Young Investor: Weekly Economic Calendar 16–20 lis 2026", nazwa_en: "Letters to a Young Investor: Weekly Economic Calendar 16–20 Nov 2026", url: "https://letterstoayounginvestor.substack.com/p/weekly-economic-calendar-november-cf0" },
    { nazwa: "Trading Economics: wnioski o zasiłek w USA (19 lis 2026)", nazwa_en: "Trading Economics: US initial jobless claims (19 Nov 2026)", url: "https://tradingeconomics.com/united-states/jobless-claims" }
  ]
};
