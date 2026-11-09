// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-09T13:50:00+01:00",
  stanNa_en: "Monday afternoon, 9 Nov 2026 (before the US open)",
  stanNa: "poniedziałek po południu, 9 lis 2026 (przed sesją w USA)",
  naglowek_en: "Europe rebounds: DAX +1.0%, Euro Stoxx 50 +1.2%. US futures recover after Friday, but Nvidia falls more than 5% on reports about its CEO. Oil drops almost 3%, gold rises above $4,100. No major US data today; CPI on Tuesday.",
  naglowek: "Europa odbija: DAX +1,0%, Euro Stoxx 50 +1,2%. Kontrakty w USA odrabiają piątek, ale Nvidia traci ponad 5% po doniesieniach dotyczących prezesa. Ropa tanieje o prawie 3%, złoto powyżej 4 100 USD. Dziś bez ważnych danych z USA; CPI we wtorek.",
  punkty: [
    "Europa odrabia straty z zeszłego tygodnia: DAX około 26 077 (+1,0%), Euro Stoxx 50 +1,2%, banki strefy euro +2,5%. SAP zyskuje prawie 2% po podwyższeniu rekomendacji przez JPMorgan, Commerzbank ponad 3%, Rheinmetall 2%; Hochtief traci 4%.",
    "Nvidia traci we Frankfurcie około 6%, a przed sesją w USA ponad 5,5%, po doniesieniach o śledztwie w sprawie domniemanego spisku wymierzonego w prezesa Jensena Huanga i o możliwych ostrzejszych kontrolach eksportu.",
    "Kontrakty na Wall Street odbijają po piątku: S&P 500 około 7 429 (+0,7% wobec piątkowego zamknięcia), Nasdaq 100 około 27 110 (+0,4%), Dow mocniej. Zyskują Broadcom i AMD. Dziś w USA nie ma ważnych odczytów; uwaga rynku jest na wtorkowej inflacji CPI.",
    "Ropa tanieje dalej: WTI około 88,3 USD (−2,8%), Brent około 94,9 USD, bo Trump osłabił obawy przed nowymi atakami na Iran. Tańsza ropa zmniejsza obawy o inflację i wspiera złoto: około 4 115 USD (+1,2%). Srebro około 52,7 USD, powyżej unieważnienia szkicu spadkowego (52,50); decyduje zamknięcie dnia.",
    "Dolar lekko słabszy: indeks około 102,1 (−0,2%), EUR/USD 1,1158, GBP/USD 1,3379, USD/JPY 158,3, USD/PLN 3,9340. Bitcoin około 74 900 USD, minimum z doby 73 415 nad celem szkicu (73 005). W ciągu dnia żaden poziom analiz nie został rozstrzygnięty; rozliczenia wieczorem."
  ],
  punkty_en: [
    "Europe recovers last week's losses: DAX around 26,077 (+1.0%), Euro Stoxx 50 +1.2%, eurozone banks +2.5%. SAP gains almost 2% after a JPMorgan upgrade, Commerzbank over 3%, Rheinmetall 2%; Hochtief falls 4%.",
    "Nvidia falls about 6% in Frankfurt and more than 5.5% before the US open, on reports of an investigation into an alleged plot targeting CEO Jensen Huang and possible tighter export controls.",
    "Wall Street futures rebound after Friday: S&P 500 around 7,429 (+0.7% versus Friday's close), Nasdaq 100 around 27,110 (+0.4%), the Dow stronger. Broadcom and AMD gain. No major US data today; attention is on Tuesday's CPI inflation.",
    "Oil keeps falling: WTI around $88.3 (−2.8%), Brent around $94.9, as Trump played down fears of new strikes on Iran. Cheaper oil eases inflation worries and supports gold: around $4,115 (+1.2%). Silver around $52.7, above the bearish draft's invalidation ($52.50); the daily close decides.",
    "The dollar is slightly weaker: the index around 102.1 (−0.2%), EUR/USD 1.1158, GBP/USD 1.3379, USD/JPY 158.3, USD/PLN 3.9340. Bitcoin around $74,900; the 24-hour low of $73,415 stayed above the draft's target ($73,005). No analysis level was decided intraday; settlements in the evening."
  ],
  instrumenty: {
    sp500: { kurs: 7428.9, zmiana: 0.71, tydzien: -1.49, notka: "Kontrakt CFD przed sesją. Analiza spadkowa: cel 7 238, unieważnienie 7 545.", notka_en: "Pre-market CFD quote. Bearish analysis: target 7,238, invalidation 7,545.", zrodlo: 1 },
    nasdaq: { kurs: 27110.44, zmiana: 0.45, tydzien: -3.14, notka: "Kontrakt CFD przed sesją. Analiza neutralna: zakres 26 606–27 967.", notka_en: "Pre-market CFD quote. Neutral analysis: 26,606–27,967 range.", zrodlo: 1 },
    xauusd: { kurs: 4114.96, zmiana: 1.2, tydzien: 4.28, notka: "Szkic wzrostowy: cel 4 206, unieważnienie 4 031.", notka_en: "Bullish draft: target $4,206, invalidation $4,031.", zrodlo: 0 },
    eurusd: { kurs: 1.1158, zmiana: 0.13, tydzien: -0.24, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3379, zmiana: 0.22, tydzien: -0.19, notka: "Szkic spadkowy: cel 1,3269, unieważnienie 1,3463.", notka_en: "Bearish draft: target 1.3269, invalidation 1.3463.", zrodlo: 2 },
    usdjpy: { kurs: 158.26, zmiana: -0.12, tydzien: 0.2, notka: "Analiza neutralna: zakres 156,75–159,05, termin około 11 lis.", notka_en: "Neutral analysis: 156.75–159.05 range, horizon around 11 Nov.", zrodlo: 2 },
    xagusd: { kurs: 52.69, zmiana: 1.56, tydzien: 4.02, notka: "Szkic spadkowy: cel 48,29, unieważnienie 52,50; kurs powyżej, decyduje zamknięcie dnia.", notka_en: "Bearish draft: target $48.29, invalidation $52.50; price above it, the daily close decides.", zrodlo: 0 },
    usdpln: { kurs: 3.934, zmiana: -0.18, tydzien: -0.31, notka: "Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 2 },
    wti: { kurs: 88.29, zmiana: -2.8, tydzien: -8.47, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax: { kurs: 26076.6, zmiana: 0.99, tydzien: 0.37, notka: "W trakcie sesji. Analiza spadkowa: cel 25 340, unieważnienie 26 223.", notka_en: "During the session. Bearish analysis: target 25,340, invalidation 26,223.", zrodlo: 3 },
    btcusd: { kurs: 74906, zmiana: 0.2, tydzien: -2.31, notka: "Gemini. Szkic spadkowy: cel 73 005, unieważnienie 76 306; minimum z 24 godzin 73 415.", notka_en: "Gemini. Bearish draft: target $73,005, invalidation $76,306; 24-hour low $73,415.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Wt 10 lis", wydarzenia: ["Chiny: bilans handlowy (4:00)", "USA: inflacja CPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Advances on Softer Oil Prices; srebro, ropa WTI i Brent (9 lis 2026)", nazwa_en: "Trading Economics: Gold Advances on Softer Oil Prices; silver, WTI and Brent crude (9 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Futures Rebound from Friday Plunge (9 lis 2026)", nazwa_en: "Trading Economics: US Futures Rebound from Friday Plunge (9 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: waluty i indeks dolara (9 lis 2026)", nazwa_en: "Trading Economics: currencies and the dollar index (9 Nov 2026)", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "Trading Economics: DAX Edges Higher as Market Sentiment Stabilizes (9 lis 2026)", nazwa_en: "Trading Economics: DAX Edges Higher as Market Sentiment Stabilizes (9 Nov 2026)", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (9 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (9 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: inflacja CPI w USA, termin i poprzedni odczyt", nazwa_en: "Trading Economics: US CPI inflation, release date and previous reading", url: "https://tradingeconomics.com/united-states/inflation-cpi" }
  ]
};
