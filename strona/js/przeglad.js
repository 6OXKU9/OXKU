// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-12T22:30:00+01:00",
  stanNa_en: "Thursday evening, 12 Nov 2026 (after the US close, before Asia)",
  stanNa: "czwartek wieczorem, 12 lis 2026 (po sesji w USA, przed Azją)",
  naglowek_en: "Gold falls almost 3% to around $3,873 as the dollar hits 103.2 and oil jumps about 3%. US stocks dip 0.3% after Nvidia's leadership change (−4.3%). EUR/USD 1.105, bitcoin around $71,500. PPI on Friday.",
  naglowek: "Złoto traci prawie 3%, do około 3 873 USD, przy dolarze na 103,2 i ropie droższej o około 3%. Akcje w USA tracą 0,3% po zmianie na szczycie Nvidii (−4,3%). EUR/USD 1,105, bitcoin około 71 500 USD. W piątek PPI.",
  punkty: [
    "Wall Street lekko w dół po zmianie na szczycie Nvidii: S&P 500 około 7 595 (−0,3%), Nasdaq 100 około 28 307 (−0,3%), Dow Jones około 52 312 (−0,3%). Nvidia −4,3%, Intel −2,1%, Micron −1,6%; Broadcom +5,5%, AMD +5,9%, Alphabet +1,6% po inwestycji w produkcję układów TPU.",
    "Ropa drożeje po niejasnych sygnałach Trumpa w sprawie porozumienia z Iranem: WTI około 89,0 USD (+2,8%), Brent około 96,0 USD (+3,5%). To podnosi rentowności obligacji i oczekiwania kolejnych podwyżek stóp Fed.",
    "Dolar najmocniejszy od kwietnia 2025: indeks około 103,2 (+0,3%). EUR/USD 1,1054, poniżej celu szkicu spadkowego (1,1065); GBP/USD 1,3237; USD/JPY 159,9.",
    "Złoto traci prawie 3%, do około 3 873 USD, poniżej celu szkicu spadkowego (3 886). Srebro około 50,0 USD (−3,3%), wyraźnie poniżej unieważnienia szkicu wzrostowego (51,38). Bitcoin spadł do 71 000 USD i jest przy 71 500, poniżej dolnej granicy zakresu (72 644).",
    "Europa: DAX zamknął się około 26 772 (+0,4%) po rekordzie w ciągu dnia powyżej 26 900; Munich Re na czele po wynikach, GEA najsłabsza po zmianie zarządu. Rano rozliczenia: prawdopodobnie trafione szkice złota i EUR/USD, nietrafione srebro i zakres bitcoina. W piątek o 14:30 ceny producentów PPI w USA."
  ],
  punkty_en: [
    "Wall Street dips after the leadership change at Nvidia: S&P 500 around 7,595 (−0.3%), Nasdaq 100 around 28,307 (−0.3%), Dow Jones around 52,312 (−0.3%). Nvidia −4.3%, Intel −2.1%, Micron −1.6%; Broadcom +5.5%, AMD +5.9%, Alphabet +1.6% on its TPU production investment.",
    "Oil rises on mixed signals from Trump about a deal with Iran: WTI around $89.0 (+2.8%), Brent around $96.0 (+3.5%). That lifts bond yields and expectations of further Fed hikes.",
    "The dollar is the strongest since April 2025: the index around 103.2 (+0.3%). EUR/USD 1.1054, below the bearish draft's target (1.1065); GBP/USD 1.3237; USD/JPY 159.9.",
    "Gold falls almost 3% to around $3,873, below the bearish draft's target ($3,886). Silver around $50.0 (−3.3%), well below the bullish draft's invalidation ($51.38). Bitcoin fell to $71,000 and is near $71,500, below the range's lower bound ($72,644).",
    "Europe: the DAX closed around 26,772 (+0.4%) after an intraday record above 26,900; Munich Re led after results, GEA was weakest after a management change. Settlements in the morning: the gold and EUR/USD drafts likely hit, silver and the bitcoin range likely missed. US producer prices (PPI) on Friday at 14:30."
  ],
  instrumenty: {
    sp500: { kurs: 7594.79, zmiana: -0.32, tydzien: 3.28, notka: "Zamknięcie (CFD). Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Close (CFD). Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 28307.49, zmiana: -0.24, tydzien: 6.3, notka: "Zamknięcie (CFD). Analiza neutralna: zakres 27 421–28 830.", notka_en: "Close (CFD). Neutral analysis: 27,421–28,830 range.", zrodlo: 1 },
    xauusd: { kurs: 3873.12, zmiana: -2.86, tydzien: -5.27, notka: "Szkic spadkowy: cel 3 886; kurs poniżej, rozliczenie rano.", notka_en: "Bearish draft: target $3,886; price below it, settlement in the morning.", zrodlo: 0 },
    eurusd: { kurs: 1.1054, zmiana: -0.32, tydzien: -1.46, notka: "Szkic spadkowy: cel 1,1065; kurs poniżej, rozliczenie rano.", notka_en: "Bearish draft: target 1.1065; price below it, settlement in the morning.", zrodlo: 2 },
    gbpusd: { kurs: 1.3237, zmiana: -0.32, tydzien: -1.58, notka: "Szkic spadkowy: cel 1,3177, unieważnienie 1,3385.", notka_en: "Bearish draft: target 1.3177, invalidation 1.3385.", zrodlo: 2 },
    usdjpy: { kurs: 159.86, zmiana: 0.06, tydzien: 1.4, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 49.97, zmiana: -3.28, tydzien: -3.5, notka: "Szkic wzrostowy: unieważnienie 51,38; kurs wyraźnie poniżej, rozliczenie rano.", notka_en: "Bullish draft: invalidation $51.38; price well below it, settlement in the morning.", zrodlo: 0 },
    usdpln: { kurs: 3.9768, zmiana: 0.0, tydzien: 1.46, notka: "Zamknięcie ze środy. Analiza neutralna: zakres 3,9308–3,9833.", notka_en: "Wednesday close. Neutral analysis: 3.9308–3.9833 range.", zrodlo: 3 },
    wti: { kurs: 88.95, zmiana: 2.8, tydzien: -1.73, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88, unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88, invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26772, zmiana: 0.41, tydzien: 1.7, notka: "Zamknięcie sesji. Szkic wzrostowy: cel 27 011, unieważnienie 26 492.", notka_en: "Session close. Bullish draft: target 27,011, invalidation 26,492.", zrodlo: 4 },
    btcusd: { kurs: 71496, zmiana: -3.29, tydzien: -5.89, notka: "Gemini. Analiza neutralna: zakres 72 644–76 306; kurs poniżej, rozliczenie rano.", notka_en: "Gemini. Neutral analysis: $72,644–76,306 range; price below it, settlement in the morning.", zrodlo: 5 }
  },
  kalendarz: [
    { dzien: "Pt 13 lis", wydarzenia: ["USA: ceny producentów PPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Slides as Dollar Strength and Fed Rate Bets Weigh; srebro, ropa (12 lis 2026)", nazwa_en: "Trading Economics: Gold Slides as Dollar Strength and Fed Rate Bets Weigh; silver, crude (12 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA, zamknięcie 12 lis 2026", nazwa_en: "Trading Economics: US stock market, 12 Nov 2026 close", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: indeks dolara i główne pary walutowe (12 lis 2026)", nazwa_en: "Trading Economics: the dollar index and major currency pairs (12 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "CNBC: zamknięcie USD/PLN z 11 lis 2026 (świece dzienne)", nazwa_en: "CNBC: USD/PLN close on 11 Nov 2026 (daily candles)", url: "https://www.cnbc.com/quotes/PLN=" },
    { nazwa: "Trading Economics: The DAX Index Closes 0.41% Higher (12 lis 2026)", nazwa_en: "Trading Economics: The DAX Index Closes 0.41% Higher (12 Nov 2026)", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (12 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (12 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: ceny producentów PPI w USA, termin i prognoza", nazwa_en: "Trading Economics: US PPI, release date and forecast", url: "https://tradingeconomics.com/united-states/producer-prices-change" }
  ]
};
