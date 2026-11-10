// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-10T08:00:00+01:00",
  stanNa_en: "Tuesday morning, 10 Nov 2026 (before the European and London open)",
  stanNa: "wtorek rano, 10 lis 2026 (przed sesją w Europie i Londynie)",
  naglowek_en: "Asia follows Wall Street's rally: Kospi +5%, Nikkei +3%. China's trade surplus falls to $105bn as imports jump. US futures are steady ahead of today's CPI (14:30). Oil keeps falling, WTI around $85.",
  naglowek: "Azja podąża za wzrostami na Wall Street: Kospi +5%, Nikkei +3%. Nadwyżka handlowa Chin spada do 105 mld USD przy mocnym imporcie. Kontrakty w USA stabilne przed dzisiejszym CPI (14:30). Ropa dalej tanieje, WTI około 85 USD.",
  punkty: [
    "Azja idzie za Wall Street: Kospi rośnie o ponad 5%, Nikkei o około 3% (około 60 250), Australia +1,2%, Hongkong +0,5%, Chiny +0,2%. Spółki technologiczne odbijają po wyprzedaży z zeszłego tygodnia.",
    "Chiny: nadwyżka handlowa w październiku spadła do 105,28 mld USD wobec prognozy 125,8 mld i 133,53 mld we wrześniu. Eksport wzrósł o 35,2% r/r, a import aż o 41,6% r/r, więcej niż oczekiwano.",
    "Dziś o 14:30 inflacja CPI w USA za październik: prognoza +0,3% m/m i bazowa +0,2% m/m (wrzesień 3,7% r/r). BLS może nie podać zmian rocznych, bo dane z października 2025 nie zostały zebrane w czasie zamknięcia rządu. Rynek wycenia około 84% szans na grudniową podwyżkę stóp Fed.",
    "Kontrakty w USA stabilne po poniedziałkowym wzroście: S&P 500 około 7 568, Nasdaq 100 około 27 899. Ropa dalej tanieje: WTI około 85,4 USD (−1,7%), Brent około 91,1 USD. Złoto około 4 126 USD (−0,4%), srebro około 53,2 USD. Dolar: indeks 101,6, EUR/USD 1,1229, GBP/USD 1,3452, USD/JPY 158,0. Bitcoin około 74 640 USD.",
    "Rozliczenia: nietrafione analizy spadkowe S&P 500, DAX i srebra, bo zamknęły poniedziałek powyżej unieważnienia. Skuteczność 19 z 45. Nowe szkice wzrostowe: S&P 500 do 7 716, DAX do 26 693 i srebro do 54,73."
  ],
  punkty_en: [
    "Asia follows Wall Street: the Kospi rises more than 5%, the Nikkei about 3% (around 60,250), Australia +1.2%, Hong Kong +0.5%, China +0.2%. Tech stocks rebound after last week's selloff.",
    "China: the October trade surplus fell to $105.28bn versus a $125.8bn forecast and $133.53bn in September. Exports rose 35.2% y/y, and imports jumped 41.6% y/y, more than expected.",
    "US October CPI inflation is due today at 14:30: the forecast is +0.3% m/m and core +0.2% m/m (September 3.7% y/y). The BLS may not publish annual changes, because October 2025 data were not collected during the government shutdown. Markets price about 84% odds of a December Fed hike.",
    "US futures are steady after Monday's rally: S&P 500 around 7,568, Nasdaq 100 around 27,899. Oil keeps falling: WTI around $85.4 (−1.7%), Brent around $91.1. Gold around $4,126 (−0.4%), silver around $53.2. The dollar: the index 101.6, EUR/USD 1.1229, GBP/USD 1.3452, USD/JPY 158.0. Bitcoin around $74,640.",
    "Settlements: the bearish S&P 500, DAX and silver analyses missed, as they closed Monday above invalidation. Hit rate 19 of 45. New bullish drafts: S&P 500 to 7,716, DAX to 26,693 and silver to $54.73."
  ],
  instrumenty: {
    sp500: { kurs: 7568.12, zmiana: 0.24, tydzien: -0.01, notka: "Kontrakt CFD przed sesją. Nowy szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Pre-market CFD quote. New bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 27899.27, zmiana: -0.03, tydzien: -1.0, notka: "Kontrakt CFD przed sesją. Analiza neutralna: zakres 26 606–27 967; kurs blisko górnej granicy.", notka_en: "Pre-market CFD quote. Neutral analysis: 26,606–27,967 range; price near the upper bound.", zrodlo: 1 },
    xauusd: { kurs: 4125.76, zmiana: -0.37, tydzien: 4.98, notka: "Szkic wzrostowy: cel 4 206, unieważnienie 4 031.", notka_en: "Bullish draft: target $4,206, invalidation $4,031.", zrodlo: 0 },
    eurusd: { kurs: 1.1229, zmiana: 0.05, tydzien: 0.32, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3452, zmiana: 0.09, tydzien: 0.31, notka: "Szkic spadkowy: cel 1,3269, unieważnienie 1,3463; kurs tuż pod unieważnieniem.", notka_en: "Bearish draft: target 1.3269, invalidation 1.3463; price just below invalidation.", zrodlo: 2 },
    usdjpy: { kurs: 157.96, zmiana: 0.04, tydzien: -0.44, notka: "Analiza neutralna: zakres 156,75–159,05, termin około 11 lis.", notka_en: "Neutral analysis: 156.75–159.05 range, horizon around 11 Nov.", zrodlo: 2 },
    xagusd: { kurs: 53.22, zmiana: -0.33, tydzien: 6.88, notka: "Nowy szkic wzrostowy: cel 54,73, unieważnienie 51,38.", notka_en: "New bullish draft: target $54.73, invalidation $51.38.", zrodlo: 0 },
    usdpln: { kurs: 3.9064, zmiana: 0.0, tydzien: -0.84, notka: "Zamknięcie z poniedziałku. Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Monday close. Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 3 },
    wti: { kurs: 85.36, zmiana: -1.72, tydzien: -11.17, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59; kurs blisko celu.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59; price close to the target.", zrodlo: 0 },
    dax: { kurs: 26267.2, zmiana: 0.0, tydzien: 1.56, notka: "Zamknięcie z poniedziałku. Nowy szkic wzrostowy: cel 26 693, unieważnienie 25 793.", notka_en: "Monday close. New bullish draft: target 26,693, invalidation 25,793.", zrodlo: 3 },
    btcusd: { kurs: 74638, zmiana: -0.83, tydzien: -3.49, notka: "Coinbase. Szkic spadkowy: cel 73 005, unieważnienie 76 306.", notka_en: "Coinbase. Bearish draft: target $73,005, invalidation $76,306.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Wt 10 lis", wydarzenia: ["USA: inflacja CPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto przed odczytem CPI; srebro, ropa WTI i Brent (10 lis 2026)", nazwa_en: "Trading Economics: gold ahead of CPI; silver, WTI and Brent crude (10 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Futures Steady Ahead of CPI Report (10 lis 2026)", nazwa_en: "Trading Economics: US Futures Steady Ahead of CPI Report (10 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Holds Decline Ahead of CPI Report (10 lis 2026)", nazwa_en: "Trading Economics: Dollar Holds Decline Ahead of CPI Report (10 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "CNBC: świece dzienne (zamknięcia DAX i USD/PLN z 9 lis 2026)", nazwa_en: "CNBC: daily candles (DAX and USD/PLN closes on 9 Nov 2026)", url: "https://www.cnbc.com/quotes/.GDAXI" },
    { nazwa: "Coinbase: świeca dzienna BTC/USD (10 lis 2026)", nazwa_en: "Coinbase: BTC/USD daily candle (10 Nov 2026)", url: "https://www.coinbase.com/price/bitcoin" },
    { nazwa: "Trading Economics: Asian Stocks Rally on Tech Boost (10 lis 2026)", nazwa_en: "Trading Economics: Asian Stocks Rally on Tech Boost (10 Nov 2026)", url: "https://tradingeconomics.com/japan/stock-market" },
    { nazwa: "Trading Economics: bilans handlowy Chin, październik 2026", nazwa_en: "Trading Economics: China trade balance, October 2026", url: "https://tradingeconomics.com/china/balance-of-trade" },
    { nazwa: "Trading Economics: inflacja CPI w USA, prognoza na październik", nazwa_en: "Trading Economics: US CPI inflation, October forecast", url: "https://tradingeconomics.com/united-states/inflation-cpi" }
  ]
};
