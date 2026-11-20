// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-20T13:55:00+01:00",
  stanNa_en: "Friday, 20 Nov 2026 (before the US session)",
  stanNa: "piątek, 20 lis 2026 (przed sesją w USA)",
  naglowek_en: "The sell-off continues: the DAX loses about 2% and drops below 25,000, the lowest since 8 October. Nasdaq 100 futures −2%, S&P 500 futures −1%; Anthropic shares more than −10% pre-market. Gold $3,570, WTI crude 82.2.",
  naglowek: "Wyprzedaż trwa: DAX traci około 2% i spada poniżej 25 000, najniżej od 8 października. Kontrakty na Nasdaq 100 −2%, na S&P 500 −1%; akcje Anthropic przed sesją ponad −10%. Złoto 3 570 USD, ropa WTI 82,2.",
  punkty: [
    "Kontrakty w USA pogłębiają spadki: Nasdaq 100 blisko −2% (najniżej od kwietnia), S&P 500 blisko −1%, Dow bez zmian. Akcje Anthropic tracą przed sesją ponad 10%. Słabną Nvidia, Broadcom, Applied Materials i Intel (do −5%), AMD traci około 14% w dwa dni po raporcie krótkiego sprzedawcy. S&P 500 i Nasdaq 100 zmierzają po tygodniowy spadek około 6%. VIX 31.",
    "DAX spada szósty dzień z rzędu, o około 2% do 24 940, najniżej od 8 października, i zmierza po najgorszy tydzień od marca (około −6%). Najmocniej tracą Infineon (−5,2%), Siemens Energy (−5,3%) i Hochtief (−3,9%). Indeks jest już wyraźnie pod celem szkicu spadkowego (25 050); rozliczenie po świecy CNBC.",
    "Dolar zmierza po czwarty tydzień wzrostów (indeks 103,75), ale traci do jena: USD/JPY 158,74, blisko poziomu unieważnienia szkicu wzrostowego (158,64). EUR/USD 1,0979, GBP/USD 1,3104.",
    "Złoto 3 570 USD (−1,6%), na tydzień blisko −9%; srebro 42,26 (−1,4%), nad poziomem unieważnienia szkicu spadkowego (42,06), który liczy się dopiero na zamknięciu dnia. WTI 82,2 USD (−0,2%), trzeci tydzień spadków. Bitcoin około 61 550 USD.",
    "O 16:00 ostateczny odczyt nastrojów Uniwersytetu Michigan. W Europie dziś bez ważnych odczytów. Przebite poziomy (DAX, możliwie Nasdaq 100) rozliczymy po świecach dziennych."
  ],
  punkty_en: [
    "US futures deepen losses: Nasdaq 100 almost −2% (the lowest since April), S&P 500 almost −1%, Dow flat. Anthropic shares lose more than 10% pre-market. Nvidia, Broadcom, Applied Materials and Intel weaken (up to −5%), AMD is down about 14% over two days after a short-seller report. The S&P 500 and Nasdaq 100 head for a weekly drop of about 6%. VIX 31.",
    "The DAX falls for a sixth day, about 2% to 24,940, the lowest since 8 October, and heads for its worst week since March (about −6%). Infineon (−5.2%), Siemens Energy (−5.3%) and Hochtief (−3.9%) lose the most. The index is now clearly below the bearish draft's target (25,050); settled from the CNBC candle.",
    "The dollar heads for a fourth weekly gain (index 103.75) but loses against the yen: USD/JPY 158.74, close to the bullish draft's invalidation level (158.64). EUR/USD 1.0979, GBP/USD 1.3104.",
    "Gold $3,570 (−1.6%), almost −9% on the week; silver 42.26 (−1.4%), above the bearish draft's invalidation level (42.06), which only counts on the daily close. WTI $82.2 (−0.2%), a third weekly decline. Bitcoin around $61,550.",
    "At 16:00 the final University of Michigan sentiment reading. No major European data today. Breached levels (DAX, possibly the Nasdaq 100) will be settled from the daily candles."
  ],
  instrumenty: {
    sp500: { kurs: 7106.94, zmiana: -0.96, tydzien: -6.01, notka: "CFD przed sesją (Trading Economics). Nowy szkic spadkowy: cel 7 081, unieważnienie 7 238.", notka_en: "Pre-market CFD (Trading Economics). New bearish draft: target 7,081, invalidation 7,238.", zrodlo: 1 },
    nasdaq: { kurs: 26022.15, zmiana: -1.87, tydzien: -6.88, notka: "CFD przed sesją (Trading Economics), poniżej celu szkicu spadkowego (26 140). Rozliczenie po świecy CNBC.", notka_en: "Pre-market CFD (Trading Economics), below the bearish draft's target (26,140). Settled from the CNBC candle.", zrodlo: 1 },
    xauusd: { kurs: 3569.8, zmiana: -1.5, tydzien: -8.0, notka: "Nowy szkic spadkowy: cel 3 518, unieważnienie 3 597.", notka_en: "New bearish draft: target $3,518, invalidation $3,597.", zrodlo: 0 },
    eurusd: { kurs: 1.0979, zmiana: 0.12, tydzien: -0.38, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3104, zmiana: 0.14, tydzien: -0.84, notka: "Nowy szkic spadkowy: cel 1,3078, unieważnienie 1,3174.", notka_en: "New bearish draft: target 1.3078, invalidation 1.3174.", zrodlo: 4 },
    usdjpy: { kurs: 158.74, zmiana: -0.58, tydzien: -0.58, notka: "Blisko poziomu unieważnienia szkicu wzrostowego (158,64); cel 160,39.", notka_en: "Close to the bullish draft's invalidation level (158.64); target 160.39.", zrodlo: 2 },
    xagusd: { kurs: 42.26, zmiana: -1.37, tydzien: -13.26, notka: "Nad poziomem unieważnienia szkicu spadkowego (42,06), liczy się zamknięcie dnia. Cel 41,01.", notka_en: "Above the bearish draft's invalidation level (42.06); the daily close counts. Target 41.01.", zrodlo: 0 },
    usdpln: { kurs: 4.0436, zmiana: 0.0, tydzien: 1.26, notka: "Zamknięcie z czwartku (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Thursday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 5 },
    wti: { kurs: 82.24, zmiana: -1.17, tydzien: -7.14, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 81,97 (blisko), unieważnienie 85,95.", notka_en: "Front-month contract. Bearish draft: target 81.97 (close), invalidation 85.95.", zrodlo: 3 },
    dax: { kurs: 24940.4, zmiana: -2.06, tydzien: -6.76, notka: "Trading Economics; poniżej celu szkicu spadkowego (25 050). Rozliczenie po świecy CNBC.", notka_en: "Trading Economics; below the bearish draft's target (25,050). Settled from the CNBC candle.", zrodlo: 5 },
    btcusd: { kurs: 61550, zmiana: -0.59, tydzien: -9.8, notka: "Gemini. Nowy szkic spadkowy: cel 61 250, unieważnienie 62 562.", notka_en: "Gemini. New bearish draft: target $61,250, invalidation $62,562.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Pt 20 lis", wydarzenia: ["USA: nastroje Uniwersytetu Michigan, odczyt ostateczny (16:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Set for Steepest Weekly Decline in Months (20 lis 2026)", nazwa_en: "Trading Economics: Gold Set for Steepest Weekly Decline in Months (20 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Futures Extend Selloff (20 lis 2026)", nazwa_en: "Trading Economics: US Futures Extend Selloff (20 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Gains for 4th Week (20 lis 2026)", nazwa_en: "Trading Economics: Dollar Gains for 4th Week (20 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: Oil Set for Third Consecutive Weekly Decline (20 lis 2026)", nazwa_en: "Trading Economics: Oil Set for Third Consecutive Weekly Decline (20 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: funt na rocznym minimum (19–20 lis 2026)", nazwa_en: "Trading Economics: sterling at a one-year low (19–20 Nov 2026)", url: "https://tradingeconomics.com/united-kingdom/currency" },
    { nazwa: "Trading Economics: DAX Sinks to Over 1-Month Low (20 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: DAX Sinks to Over 1-Month Low (20 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (20 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (20 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Letters to a Young Investor: Weekly Economic Calendar 16–20 lis 2026", nazwa_en: "Letters to a Young Investor: Weekly Economic Calendar 16–20 Nov 2026", url: "https://letterstoayounginvestor.substack.com/p/weekly-economic-calendar-november-cf0" }
  ]
};
