// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-11T22:30:00+01:00",
  stanNa_en: "Wednesday evening, 11 Nov 2026 (after the US close, before Asia)",
  stanNa: "środa wieczorem, 11 lis 2026 (po sesji w USA, przed Azją)",
  naglowek_en: "AI lifts Wall Street: Nasdaq 100 +2.3%, S&P 500 +1.3%, CoreWeave +15%. The dollar hits its highest since April 2025 on Fed hike bets: EUR/USD 1.109, USD/JPY 159.9. Gold falls below $4,000. The DAX sets another record.",
  naglowek: "AI podnosi Wall Street: Nasdaq 100 +2,3%, S&P 500 +1,3%, CoreWeave +15%. Dolar najmocniejszy od kwietnia 2025 na zakładach o podwyżki Fed: EUR/USD 1,109, USD/JPY 159,9. Złoto spada poniżej 4 000 USD. DAX na kolejnym rekordzie.",
  punkty: [
    "Wall Street rośnie dzięki AI: S&P 500 około 7 621 (+1,3%), Nasdaq 100 około 28 359 (+2,3%), Dow Jones około 52 520 (+0,5%). CoreWeave zyskał około 15% po mocnym wzroście sprzedaży i podniesionej prognozie; rosną Nvidia, Broadcom, AMD, Intel i Micron. Wspiera też popyt na planowany debiut Anthropic.",
    "Rynek obligacji w USA był zamknięty z powodu Dnia Weteranów, więc obroty były niskie. Rentowności obligacji firmowych rosną po wysokiej inflacji; rynek zakłada kilka podwyżek stóp Fed w przyszłym roku.",
    "Dolar najmocniejszy od kwietnia 2025: indeks około 102,9 (+0,7%). EUR/USD 1,1087 (−0,7%), poniżej dolnej granicy analizy neutralnej (1,1113); GBP/USD 1,3272, blisko celu szkicu spadkowego (1,3269); USD/JPY 159,86, powyżej celu szkicu wzrostowego (159,52).",
    "Złoto traci przez mocnego dolara: około 3 985 USD (−1,2%), poniżej unieważnienia szkicu wzrostowego (4 031). Srebro około 51,7 USD. Ropa odbija od 10-tygodniowych minimów: WTI około 86,5 USD, Brent około 92,6 USD. DAX trzecią sesję z rzędu na rekordzie, zamknięcie około 26 626 (+1,1%). Bitcoin około 74 670 USD.",
    "Rano rozliczenia po świecach: prawdopodobnie trafiony szkic USD/JPY, nietrafione złoto oraz analizy neutralne EUR/USD i Nasdaq 100; o DAX zdecyduje maksimum dnia (cel 26 693). W piątek o 14:30 ceny producentów PPI w USA."
  ],
  punkty_en: [
    "Wall Street rises on AI: S&P 500 around 7,621 (+1.3%), Nasdaq 100 around 28,359 (+2.3%), Dow Jones around 52,520 (+0.5%). CoreWeave gained about 15% after strong sales growth and higher guidance; Nvidia, Broadcom, AMD, Intel and Micron rise. Demand for Anthropic's planned listing also helps.",
    "The US bond market was closed for Veterans Day, so volumes were thin. Corporate bond yields rise after the hot inflation reading; markets expect several Fed hikes next year.",
    "The dollar is the strongest since April 2025: the index around 102.9 (+0.7%). EUR/USD 1.1087 (−0.7%), below the neutral analysis's lower bound (1.1113); GBP/USD 1.3272, close to the bearish draft's target (1.3269); USD/JPY 159.86, above the bullish draft's target (159.52).",
    "Gold falls on the strong dollar: around $3,985 (−1.2%), below the bullish draft's invalidation ($4,031). Silver around $51.7. Oil rebounds from 10-week lows: WTI around $86.5, Brent around $92.6. The DAX sets a record for a third straight session, closing around 26,626 (+1.1%). Bitcoin around $74,670.",
    "Settlements in the morning after the candles: the USD/JPY draft likely hit; gold and the neutral EUR/USD and Nasdaq 100 analyses likely missed; the day's high will decide the DAX (target 26,693). US producer prices (PPI) on Friday at 14:30."
  ],
  instrumenty: {
    sp500: { kurs: 7621.22, zmiana: 1.33, tydzien: -0.88, notka: "Zamknięcie (CFD). Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Close (CFD). Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 28358.96, zmiana: 2.23, tydzien: -0.28, notka: "Zamknięcie (CFD). Analiza neutralna: zakres 26 606–27 967; zamknięcie powyżej, rozliczenie rano.", notka_en: "Close (CFD). Neutral analysis: 26,606–27,967 range; closed above it, settlement in the morning.", zrodlo: 1 },
    xauusd: { kurs: 3985.13, zmiana: -1.17, tydzien: -1.84, notka: "Szkic wzrostowy: cel 4 206, unieważnienie 4 031; kurs poniżej, rozliczenie rano.", notka_en: "Bullish draft: target $4,206, invalidation $4,031; price below it, settlement in the morning.", zrodlo: 0 },
    eurusd: { kurs: 1.1087, zmiana: -0.68, tydzien: -1.25, notka: "Analiza neutralna: zakres 1,1113–1,1260; kurs poniżej, rozliczenie rano.", notka_en: "Neutral analysis: 1.1113–1.1260 range; price below it, settlement in the morning.", zrodlo: 2 },
    gbpusd: { kurs: 1.3272, zmiana: -0.52, tydzien: -1.48, notka: "Szkic spadkowy: cel 1,3269, unieważnienie 1,3463; kurs blisko celu.", notka_en: "Bearish draft: target 1.3269, invalidation 1.3463; price close to the target.", zrodlo: 2 },
    usdjpy: { kurs: 159.86, zmiana: 0.71, tydzien: 0.91, notka: "Szkic wzrostowy: cel 159,52; kurs powyżej, rozliczenie rano.", notka_en: "Bullish draft: target 159.52; price above it, settlement in the morning.", zrodlo: 2 },
    xagusd: { kurs: 51.73, zmiana: 0.44, tydzien: -1.0, notka: "Szkic wzrostowy: cel 54,73, unieważnienie 51,38.", notka_en: "Bullish draft: target $54.73, invalidation $51.38.", zrodlo: 0 },
    usdpln: { kurs: 3.9337, zmiana: 0.0, tydzien: 0.78, notka: "Zamknięcie z wtorku. Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Tuesday close. Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 3 },
    wti: { kurs: 86.46, zmiana: 0.49, tydzien: -1.88, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax: { kurs: 26626, zmiana: 1.06, tydzien: 0.71, notka: "Zamknięcie sesji. Szkic wzrostowy: cel 26 693, unieważnienie 25 793; rozliczenie rano po świecy.", notka_en: "Session close. Bullish draft: target 26,693, invalidation 25,793; settlement in the morning after the candle.", zrodlo: 4 },
    btcusd: { kurs: 74667, zmiana: 1.31, tydzien: -7.16, notka: "Gemini. Analiza neutralna: zakres 72 644–76 306.", notka_en: "Gemini. Neutral analysis: $72,644–76,306 range.", zrodlo: 5 }
  },
  kalendarz: [
    { dzien: "Pt 13 lis", wydarzenia: ["USA: ceny producentów PPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto traci przy najmocniejszym dolarze od kwietnia 2025; srebro, ropa (11 lis 2026)", nazwa_en: "Trading Economics: gold falls as the dollar hits its strongest since April 2025; silver, crude (11 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA, zamknięcie 11 lis 2026", nazwa_en: "Trading Economics: US stock market, 11 Nov 2026 close", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar at 2025-Highs (11 lis 2026)", nazwa_en: "Trading Economics: Dollar at 2025-Highs (11 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "CNBC: zamknięcie USD/PLN z 10 lis 2026 (świece dzienne)", nazwa_en: "CNBC: USD/PLN close on 10 Nov 2026 (daily candles)", url: "https://www.cnbc.com/quotes/PLN=" },
    { nazwa: "Trading Economics: DAX Index Closes 1.06% Higher (11 lis 2026)", nazwa_en: "Trading Economics: DAX Index Closes 1.06% Higher (11 Nov 2026)", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (11 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (11 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: ceny producentów PPI w USA, termin i prognoza", nazwa_en: "Trading Economics: US PPI, release date and forecast", url: "https://tradingeconomics.com/united-states/producer-prices-change" }
  ]
};
