// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-06T22:40:00+01:00",
  stanNa_en: "Friday evening, 6 Nov 2026 (after the US close, weekend)",
  stanNa: "piątek wieczorem, 6 lis 2026 (po sesji w USA, weekend)",
  naglowek_en: "A strong jobs report: 165k jobs versus 65k expected, unemployment 4.1%. The dollar jumps 0.7% on bets of a December Fed hike. Chip stocks rebound: Nasdaq 100 +1.3%, S&P 500 +0.4%, Dow −0.5%. The DAX loses 2.1%. Over the week the Nasdaq 100 lost about 5% and gold gained about 5%.",
  naglowek: "Mocny raport z rynku pracy: 165 tys. miejsc pracy wobec 65 tys. prognozy, bezrobocie 4,1%. Dolar zyskuje 0,7% na zakładach o grudniową podwyżkę Fed. Spółki chipowe odbijają: Nasdaq 100 +1,3%, S&P 500 +0,4%, Dow −0,5%. DAX traci 2,1%. W tygodniu Nasdaq 100 stracił około 5%, a złoto zyskało około 5%.",
  punkty: [
    "Rynek pracy w USA (październik): 165 tys. nowych miejsc pracy wobec prognozy 65 tys., wrzesień skorygowany w górę do 60 tys., bezrobocie spadło do 4,1%, płace +0,4% m/m. Rynek mocniej wycenia grudniową podwyżkę stóp Fed.",
    "Wall Street (notowania CFD): S&P 500 około 7 383 (+0,4%), Nasdaq 100 około 26 975 (+1,3%), Dow Jones około 51 309 (−0,5%). Odbijały spółki chipowe (Nvidia, Micron, AMD, Lam Research) po czwartkowej wyprzedaży. W tygodniu S&P 500 −3,2%, Nasdaq −5,5%.",
    "Dolar: indeks około 102,3 (+0,7%). EUR/USD 1,1141 (−0,7%), GBP/USD 1,3352 (−0,7%), czyli poniżej unieważnienia analizy wzrostowej funta (1,3376); USD/JPY 158,5. Kurs USD/PLN z rana (3,9319), po wzroście dolara blisko unieważnienia analizy spadkowej (3,9423).",
    "Europa: DAX zamknął się około 25 778 (−2,1%), w tygodniu około −0,5%; tracą ubezpieczyciele (Hannover Re, Munich Re) i Deutsche Post. Surowce: złoto około 4 066 USD (−0,5%) po danych, poniżej unieważnienia analizy wzrostowej (4 075); srebro około 51,9 USD; WTI około 90,5 USD, Brent około 97,9 USD.",
    "Bitcoin około 75 770 USD; według Gemini dzienne minimum 74 779 jest poniżej celu analizy spadkowej (74 888). Rozliczenia rano po świecach: możliwe trafienie bitcoina i nietrafione analizy funta i złota. W przyszłym tygodniu: bilans handlowy Chin (wt 4:00) i inflacja CPI w USA (wt 14:30)."
  ],
  punkty_en: [
    "US jobs (October): 165k new jobs versus a 65k forecast, September revised up to 60k, unemployment fell to 4.1%, wages +0.4% m/m. Markets price a December Fed hike more strongly.",
    "Wall Street (CFD quotes): S&P 500 around 7,383 (+0.4%), Nasdaq 100 around 26,975 (+1.3%), Dow Jones around 51,309 (−0.5%). Chipmakers (Nvidia, Micron, AMD, Lam Research) rebounded after Thursday's selloff. On the week the S&P 500 −3.2%, Nasdaq −5.5%.",
    "The dollar: the index around 102.3 (+0.7%). EUR/USD 1.1141 (−0.7%), GBP/USD 1.3352 (−0.7%), below the invalidation of the bullish sterling analysis (1.3376); USD/JPY 158.5. USD/PLN from the morning (3.9319); after the dollar's rise it is close to the bearish analysis's invalidation (3.9423).",
    "Europe: the DAX closed around 25,778 (−2.1%), about −0.5% on the week; insurers (Hannover Re, Munich Re) and Deutsche Post fell. Commodities: gold around $4,066 (−0.5%) after the data, below the bullish analysis's invalidation ($4,075); silver around $51.9; WTI around $90.5, Brent around $97.9.",
    "Bitcoin around $75,770; according to Gemini the daily low of $74,779 is below the bearish analysis's target ($74,888). Settlements in the morning with candles: a possible bitcoin hit and missed sterling and gold analyses. Next week: China's trade balance (Tue 4:00) and US CPI inflation (Tue 14:30)."
  ],
  instrumenty: {
    sp500:  { kurs: 7382.55, zmiana: 0.39, tydzien: -2.61, notka: "Notowanie CFD. Analiza spadkowa: cel 7 238, unieważnienie 7 545.", notka_en: "CFD quote. Bearish analysis: target 7,238, invalidation 7,545.", zrodlo: 1 },
    nasdaq: { kurs: 26975.22, zmiana: 1.30, tydzien: -4.97, notka: "Notowanie CFD. Analiza neutralna: zakres 26 606–27 967.", notka_en: "CFD quote. Neutral analysis: 26,606–27,967 range.", zrodlo: 1 },
    xauusd: { kurs: 4065.80, zmiana: -0.55, tydzien: 4.92, notka: "Analiza wzrostowa: unieważnienie 4 075; kurs poniżej, rozliczenie po świecy dziennej.", notka_en: "Bullish analysis: invalidation $4,075; price below it, settlement after the daily candle.", zrodlo: 0 },
    eurusd: { kurs: 1.1141, zmiana: -0.69, tydzien: -0.15, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3352, zmiana: -0.72, tydzien: -0.29, notka: "Analiza wzrostowa: unieważnienie 1,3376; kurs poniżej, rozliczenie po świecy dziennej.", notka_en: "Bullish analysis: invalidation 1.3376; price below it, settlement after the daily candle.", zrodlo: 2 },
    usdjpy: { kurs: 158.50, zmiana: 0.53, tydzien: 0.62, notka: "Analiza neutralna: zakres 156,75–159,05.", notka_en: "Neutral analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 51.94, zmiana: 0.31, tydzien: 6.21, notka: "Szkic spadkowy: cel 48,29, unieważnienie 52,50.", notka_en: "Bearish draft: target $48.29, invalidation $52.50.", zrodlo: 0 },
    usdpln: { kurs: 3.9319, zmiana: 0.31, tydzien: -0.30, notka: "Kurs z rana. Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Morning quote. Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 3 },
    wti:    { kurs: 90.52, zmiana: 0.00, tydzien: -13.06, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax:    { kurs: 25778, zmiana: -2.08, tydzien: -0.16, notka: "Zamknięcie sesji. Analiza spadkowa: cel 25 340, unieważnienie 26 223.", notka_en: "Session close. Bearish analysis: target 25,340, invalidation 26,223.", zrodlo: 4 },
    btcusd: { kurs: 75774, zmiana: -0.26, tydzien: -1.82, notka: "Gemini. Analiza spadkowa: cel 74 888; minimum dnia 74 779, rozliczenie rano.", notka_en: "Gemini. Bearish analysis: target $74,888; daily low $74,779, settlement in the morning.", zrodlo: 5 }
  },
  kalendarz: [
    { dzien: "Wt 10 lis", wydarzenia: ["Chiny: bilans handlowy (4:00)", "USA: inflacja CPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Retreats on Strong US Jobs Data; srebro, ropa, Brent (6 lis 2026)", nazwa_en: "Trading Economics: Gold Retreats on Strong US Jobs Data; silver, crude, Brent (6 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA, zamknięcie 6 lis 2026", nazwa_en: "Trading Economics: US stock market, 6 Nov 2026 close", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar po raporcie z rynku pracy (6 lis 2026)", nazwa_en: "Trading Economics: the dollar after the jobs report (6 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: waluty (poranna tabela, USD/PLN), 6 lis 2026", nazwa_en: "Trading Economics: currencies (morning table, USD/PLN), 6 Nov 2026", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "Trading Economics: DAX, zamknięcie 6 lis 2026", nazwa_en: "Trading Economics: DAX, 6 Nov 2026 close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (6 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (6 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: zatrudnienie poza rolnictwem w USA, październik 2026", nazwa_en: "Trading Economics: US nonfarm payrolls, October 2026", url: "https://tradingeconomics.com/united-states/non-farm-payrolls" },
    { nazwa: "Trading Economics: inflacja CPI w USA, termin i poprzedni odczyt", nazwa_en: "Trading Economics: US CPI inflation, release date and previous reading", url: "https://tradingeconomics.com/united-states/inflation-cpi" }
  ]
};
