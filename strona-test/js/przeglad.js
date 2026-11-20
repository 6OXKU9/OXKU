// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-20T22:35:00+01:00",
  stanNa_en: "Friday evening, 20 Nov 2026 (after the US close)",
  stanNa: "piątek wieczorem, 20 lis 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "An AI stock crash: the Nasdaq 100 loses 5.6%, Nvidia 12–14%, the S&P 500 −3.3% to around 6,936. The DAX −2.5% to 24,841, bitcoin falls below $59,000, gold to $3,518. On the week the Nasdaq loses about 10%, the DAX 7%.",
  naglowek: "Krach spółek AI: Nasdaq 100 traci 5,6%, Nvidia 12–14%, S&P 500 −3,3% do około 6 936. DAX −2,5% do 24 841, bitcoin spada poniżej 59 000 USD, złoto do 3 518. Na tydzień Nasdaq traci około 10%, DAX 7%.",
  punkty: [
    "Wyprzedaż spółek AI rozlała się na cały rynek: Nasdaq 100 około 25 157 (−5,6%), S&P 500 około 6 936 (−3,3%), Dow −2,2%. Nvidia straciła 12–14%, Broadcom 12%, AMD, Marvell i Applied Materials ponad 10%. Akcje Anthropic spadły o około 10% do 88,9 USD, prawie oddając zysk z debiutu. SpaceX −7% po emisji długu za 32 mld USD przy wysokich rentownościach.",
    "Nastroje konsumentów Uniwersytetu Michigan w ostatecznym odczycie za listopad: 51,5, zgodnie z oczekiwaniami i powyżej wstępnych 51,0. Oczekiwana inflacja na rok spadła do 3,7% z 4,7%, długoterminowa do 3,3%.",
    "DAX spadł szósty dzień z rzędu, o 2,5% do 24 841, najniżej od 8 października; na tydzień −7,1%, najgorzej od marca. Najmocniej traciły Infineon (−7,6%), Scout24 i Siemens Energy (ponad −6%).",
    "Dolar przy 103,9, czwarty tydzień wzrostów. EUR/USD 1,0963, GBP/USD 1,3077, USD/JPY 158,56 (poniżej poziomu unieważnienia szkicu wzrostowego, 158,64). Rynek wycenia niemal pewną podwyżkę Fed o 25 pb w grudniu.",
    "Złoto 3 518 USD (−3%), najniżej od września 2025, na tydzień blisko −9%; srebro 40,94 (−4,5%). WTI odbija do 83,7 USD (+1,6%). Bitcoin spadał na Gemini do 57 659 USD, teraz około 58 600. Prawie wszystkie szkice spadkowe przekroczyły cele; rozliczenie w poniedziałek rano po świecach dziennych."
  ],
  punkty_en: [
    "The AI sell-off spread to the whole market: Nasdaq 100 around 25,157 (−5.6%), S&P 500 around 6,936 (−3.3%), Dow −2.2%. Nvidia lost 12–14%, Broadcom 12%, AMD, Marvell and Applied Materials more than 10%. Anthropic shares fell about 10% to $88.9, nearly giving back their debut gain. SpaceX −7% after a $32B debt issue at steep yields.",
    "The University of Michigan's final November consumer sentiment: 51.5, in line with expectations and above the preliminary 51.0. Year-ahead inflation expectations fell to 3.7% from 4.7%, long-term to 3.3%.",
    "The DAX fell for a sixth day, 2.5% to 24,841, the lowest since 8 October; −7.1% on the week, the worst since March. Infineon (−7.6%), Scout24 and Siemens Energy (more than −6%) lost the most.",
    "The dollar near 103.9, a fourth weekly gain. EUR/USD 1.0963, GBP/USD 1.3077, USD/JPY 158.56 (below the bullish draft's invalidation level, 158.64). Markets price an almost certain 25 bp Fed hike in December.",
    "Gold $3,518 (−3%), the lowest since September 2025, almost −9% on the week; silver 40.94 (−4.5%). WTI rebounds to $83.7 (+1.6%). Bitcoin fell to $57,659 on Gemini, now around 58,600. Almost all bearish drafts crossed their targets; settlement on Monday morning from the daily candles."
  ],
  instrumenty: {
    sp500: { kurs: 6936.11, zmiana: -3.34, tydzien: -8.27, notka: "Zamknięcie (Trading Economics, CFD) poniżej celu szkicu spadkowego (7 081). Rozliczenie w poniedziałek rano po świecy dziennej.", notka_en: "Close (Trading Economics, CFD) below the bearish draft's target (7,081). Settled on Monday morning from the daily candle.", zrodlo: 1 },
    nasdaq: { kurs: 25157.37, zmiana: -5.13, tydzien: -9.97, notka: "Zamknięcie (Trading Economics, CFD) poniżej celu szkicu spadkowego (26 140). Rozliczenie w poniedziałek rano po świecy dziennej.", notka_en: "Close (Trading Economics, CFD) below the bearish draft's target (26,140). Settled on Monday morning from the daily candle.", zrodlo: 1 },
    xauusd: { kurs: 3518.52, zmiana: -2.91, tydzien: -9.32, notka: "Kurs przy celu szkicu spadkowego (3 518). Rozliczenie w poniedziałek rano po świecy dziennej.", notka_en: "Price at the bearish draft's target ($3,518). Settled on Monday morning from the daily candle.", zrodlo: 0 },
    eurusd: { kurs: 1.0963, zmiana: -0.03, tydzien: -0.53, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3077, zmiana: -0.07, tydzien: -1.04, notka: "Kurs przy celu szkicu spadkowego (1,3078). Rozliczenie w poniedziałek rano po świecy dziennej.", notka_en: "Price at the bearish draft's target (1.3078). Settled on Monday morning from the daily candle.", zrodlo: 4 },
    usdjpy: { kurs: 158.56, zmiana: -0.7, tydzien: -0.69, notka: "Kurs poniżej poziomu unieważnienia szkicu wzrostowego (158,64). Rozliczenie w poniedziałek rano po świecy dziennej.", notka_en: "Price below the bullish draft's invalidation level (158.64). Settled on Monday morning from the daily candle.", zrodlo: 2 },
    xagusd: { kurs: 40.94, zmiana: -4.45, tydzien: -15.97, notka: "Kurs poniżej celu szkicu spadkowego (41,01). Rozliczenie w poniedziałek rano po świecy dziennej.", notka_en: "Price below the bearish draft's target ($41.01). Settled on Monday morning from the daily candle.", zrodlo: 0 },
    usdpln: { kurs: 4.0436, zmiana: 0.0, tydzien: 1.26, notka: "Zamknięcie z czwartku (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Thursday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 5 },
    wti: { kurs: 83.69, zmiana: 0.58, tydzien: -5.5, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 81,97, unieważnienie 85,95.", notka_en: "Front-month contract. Bearish draft: target 81.97, invalidation 85.95.", zrodlo: 3 },
    dax: { kurs: 24841, zmiana: -2.45, tydzien: -7.14, notka: "Zamknięcie (Trading Economics) poniżej celu szkicu spadkowego (25 050). Rozliczenie w poniedziałek rano po świecy dziennej.", notka_en: "Close (Trading Economics) below the bearish draft's target (25,050). Settled on Monday morning from the daily candle.", zrodlo: 5 },
    btcusd: { kurs: 58631, zmiana: -5.3, tydzien: -14.08, notka: "Gemini; kurs poniżej celu szkicu spadkowego (61 250). Rozliczenie w poniedziałek rano po świecy dziennej.", notka_en: "Gemini; price below the bearish draft's target ($61,250). Settled on Monday morning from the daily candle.", zrodlo: 6 }
  },
  kalendarz: [

  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Slide Deepens (20 lis 2026)", nazwa_en: "Trading Economics: Gold Slide Deepens (20 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: zamknięcie Wall Street, Anthropic i Nvidia (20 lis 2026)", nazwa_en: "Trading Economics: Wall Street close, Anthropic and Nvidia (20 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Gains for 4th Week (20 lis 2026)", nazwa_en: "Trading Economics: Dollar Gains for 4th Week (20 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: Oil Set for Third Consecutive Weekly Decline (20 lis 2026)", nazwa_en: "Trading Economics: Oil Set for Third Consecutive Weekly Decline (20 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: funt na rocznym minimum (19–20 lis 2026)", nazwa_en: "Trading Economics: sterling at a one-year low (19–20 Nov 2026)", url: "https://tradingeconomics.com/united-kingdom/currency" },
    { nazwa: "Trading Economics: The DAX Index Closes 2.45% Lower (20 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: The DAX Index Closes 2.45% Lower (20 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (20 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (20 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: nastroje konsumentów Uniwersytetu Michigan (20 lis 2026)", nazwa_en: "Trading Economics: University of Michigan consumer sentiment (20 Nov 2026)", url: "https://tradingeconomics.com/united-states/consumer-confidence" }
  ]
};
