// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-09T08:00:00+01:00",
  stanNa_en: "Monday morning, 9 Nov 2026 (before the European and London open)",
  stanNa: "poniedziałek rano, 9 lis 2026 (przed sesją w Europie i Londynie)",
  naglowek_en: "Asia rebounds at the start of the week: Nikkei +2.4%, TAIEX +4.9%. US futures rise ahead of Tuesday's CPI. Oil falls 1.3% after Trump played down new strikes on Iran; gold gains 1%. Bitcoin dipped to $73,477 over the weekend.",
  naglowek: "Azja odbija na początek tygodnia: Nikkei +2,4%, TAIEX +4,9%. Kontrakty w USA rosną przed wtorkowym odczytem CPI. Ropa tanieje o 1,3% po tym, jak Trump osłabił obawy przed nowymi atakami na Iran; złoto zyskuje 1%. Bitcoin w weekend spadł do 73 477 USD.",
  punkty: [
    "Azja zaczyna tydzień odbiciem: Nikkei około 58 800 (+2,4%), tajwański TAIEX +4,9%, Chiny +0,4%, Hang Seng +0,2%. Po czwartkowej wyprzedaży spółek AI inwestorzy wracają do producentów chipów.",
    "Kontrakty na Wall Street rosną: S&P 500 około 7 406 (+0,4% wobec piątku), Nasdaq 100 około 26 944. Rada nadzorcza Nvidii wszczęła wewnętrzne dochodzenie w sprawie zarzutów wobec Jensena Huanga, co może ważyć na spółce.",
    "Ropa tanieje: WTI około 89,7 USD (−1,3%), Brent około 96,5 USD, po słowach Trumpa, że nowe ataki na Iran są „bardzo mało prawdopodobne”, jeśli rozmowy będą postępować. Złoto około 4 111 USD (+1,0%), srebro około 52,5 USD (+1,3%).",
    "Dolar lekko słabnie po piątkowym skoku: indeks około 102,1 (−0,2%). EUR/USD 1,1158, GBP/USD 1,3379, USD/JPY 158,3, USD/PLN 3,9340. Bitcoin około 74 250 USD, w weekend spadł do 73 477.",
    "Rozliczenia: trafiona analiza spadkowa bitcoina (minimum 74 722), nietrafione analizy wzrostowe złota i funta. Skuteczność 19 z 42. Nowe szkice: złoto w górę, funt i bitcoin w dół. We wtorek bilans handlowy Chin (4:00) i inflacja CPI w USA (14:30), w piątek PPI."
  ],
  punkty_en: [
    "Asia opens the week with a rebound: the Nikkei around 58,800 (+2.4%), Taiwan's TAIEX +4.9%, China +0.4%, Hang Seng +0.2%. After Thursday's AI selloff, investors return to chipmakers.",
    "Wall Street futures are higher: S&P 500 around 7,406 (+0.4% versus Friday), Nasdaq 100 around 26,944. Nvidia's board opened an internal investigation into allegations involving Jensen Huang, which may weigh on the stock.",
    "Oil falls: WTI around $89.7 (−1.3%), Brent around $96.5, after Trump said new strikes on Iran are \"highly unlikely\" if talks progress. Gold around $4,111 (+1.0%), silver around $52.5 (+1.3%).",
    "The dollar eases after Friday's jump: the index around 102.1 (−0.2%). EUR/USD 1.1158, GBP/USD 1.3379, USD/JPY 158.3, USD/PLN 3.9340. Bitcoin around $74,250, down to $73,477 over the weekend.",
    "Settlements: the bearish bitcoin analysis hit (low $74,722); the bullish gold and pound analyses missed. Hit rate 19 of 42. New drafts: gold up, the pound and bitcoin down. On Tuesday China's trade balance (4:00) and US CPI inflation (14:30), PPI on Friday."
  ],
  instrumenty: {
    sp500: { kurs: 7406.47, zmiana: 0.4, tydzien: -1.79, notka: "Kontrakt CFD przed sesją. Analiza spadkowa: cel 7 238, unieważnienie 7 545.", notka_en: "Pre-market CFD quote. Bearish analysis: target 7,238, invalidation 7,545.", zrodlo: 1 },
    nasdaq: { kurs: 26943.52, zmiana: -0.17, tydzien: -3.74, notka: "Kontrakt CFD przed sesją. Analiza neutralna: zakres 26 606–27 967.", notka_en: "Pre-market CFD quote. Neutral analysis: 26,606–27,967 range.", zrodlo: 1 },
    xauusd: { kurs: 4110.93, zmiana: 1.1, tydzien: 4.18, notka: "Nowy szkic wzrostowy: cel 4 206, unieważnienie 4 031.", notka_en: "New bullish draft: target $4,206, invalidation $4,031.", zrodlo: 0 },
    eurusd: { kurs: 1.1158, zmiana: 0.13, tydzien: -0.24, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3379, zmiana: 0.22, tydzien: -0.19, notka: "Nowy szkic spadkowy: cel 1,3269, unieważnienie 1,3463.", notka_en: "New bearish draft: target 1.3269, invalidation 1.3463.", zrodlo: 2 },
    usdjpy: { kurs: 158.26, zmiana: -0.12, tydzien: 0.2, notka: "Analiza neutralna: zakres 156,75–159,05, termin około 11 lis.", notka_en: "Neutral analysis: 156.75–159.05 range, horizon around 11 Nov.", zrodlo: 2 },
    xagusd: { kurs: 52.53, zmiana: 1.25, tydzien: 3.71, notka: "Szkic spadkowy: cel 48,29, unieważnienie 52,50; kurs tuż powyżej, decyduje zamknięcie dnia.", notka_en: "Bearish draft: target $48.29, invalidation $52.50; price just above it, the daily close decides.", zrodlo: 0 },
    usdpln: { kurs: 3.934, zmiana: -0.18, tydzien: -0.31, notka: "Analiza spadkowa: cel 3,8674, unieważnienie 3,9423; piątkowe zamknięcie 3,9409 było tuż pod nim.", notka_en: "Bearish analysis: target 3.8674, invalidation 3.9423; Friday's close of 3.9409 was just below it.", zrodlo: 2 },
    wti: { kurs: 89.66, zmiana: -1.29, tydzien: -7.05, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax: { kurs: 25820.4, zmiana: 0.0, tydzien: -0.62, notka: "Zamknięcie z piątku, przed otwarciem. Analiza spadkowa: cel 25 340, unieważnienie 26 223.", notka_en: "Friday close, before the open. Bearish analysis: target 25,340, invalidation 26,223.", zrodlo: 3 },
    btcusd: { kurs: 74249.8, zmiana: -0.67, tydzien: -3.16, notka: "Coinbase. Nowy szkic spadkowy: cel 73 005, unieważnienie 76 306; w weekend minimum 73 477.", notka_en: "Coinbase. New bearish draft: target $73,005, invalidation $76,306; weekend low $73,477.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Wt 10 lis", wydarzenia: ["Chiny: bilans handlowy (4:00)", "USA: inflacja CPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa WTI i Brent (9 lis 2026)", nazwa_en: "Trading Economics: gold, silver, WTI and Brent crude (9 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA, kontrakty przed sesją 9 lis 2026", nazwa_en: "Trading Economics: US stock market, pre-market 9 Nov 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: waluty i indeks dolara (9 lis 2026)", nazwa_en: "Trading Economics: currencies and the dollar index (9 Nov 2026)", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "Trading Economics: DAX, zamknięcie 6 lis 2026", nazwa_en: "Trading Economics: DAX, 6 Nov 2026 close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Coinbase: świeca dzienna BTC/USD (9 lis 2026)", nazwa_en: "Coinbase: BTC/USD daily candle (9 Nov 2026)", url: "https://www.coinbase.com/price/bitcoin" },
    { nazwa: "Trading Economics: giełda w Japonii i Azji (9 lis 2026)", nazwa_en: "Trading Economics: Japan and Asian stock markets (9 Nov 2026)", url: "https://tradingeconomics.com/japan/stock-market" },
    { nazwa: "Trading Economics: inflacja CPI w USA, termin i poprzedni odczyt", nazwa_en: "Trading Economics: US CPI inflation, release date and previous reading", url: "https://tradingeconomics.com/united-states/inflation-cpi" }
  ]
};
