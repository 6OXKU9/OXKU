// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-09T22:30:00+01:00",
  stanNa_en: "Monday evening, 9 Nov 2026 (after the US close, before Asia)",
  stanNa: "poniedziałek wieczorem, 9 lis 2026 (po sesji w USA, przed Azją)",
  naglowek_en: "A strong rebound: S&P 500 +2.4% and Nasdaq 100 +3.4%, the best day since April, led by chipmakers; Nvidia −5%. DAX +1.7%. Oil falls 4–5%, gold rises to a two-week high around $4,139, the dollar weakens 0.6%. Tuesday: US CPI.",
  naglowek: "Mocne odbicie: S&P 500 +2,4% i Nasdaq 100 +3,4%, najlepszy dzień od kwietnia, na czele producenci chipów; Nvidia −5%. DAX +1,7%. Ropa tanieje o 4–5%, złoto najwyżej od dwóch tygodni, około 4 139 USD, dolar słabnie o 0,6%. We wtorek inflacja CPI w USA.",
  punkty: [
    "Wall Street ma najlepszy dzień od kwietnia: S&P 500 około 7 553 (+2,4% wobec piątku), Nasdaq 100 około 27 907 (+3,4%), Dow Jones około 52 409 (+2,2%). Inwestorzy odkupują spadki po wyprzedaży z zeszłego tygodnia.",
    "Prowadzą producenci chipów: AMD +13% po podwyższeniu rekomendacji przez Oppenheimer, Applied Materials +11,5% przed wynikami, Broadcom i Lam Research blisko +9%, Micron +6%. Nvidia traci około 5% po doniesieniach dotyczących prezesa Jensena Huanga, które mogą skłonić Kongres do ostrzejszych kontroli eksportu chipów.",
    "Europa: DAX zamknął się około 26 266 (+1,7%), Infineon +6,3%, Siemens Energy +5,1%; tracą Siemens Healthineers i Fresenius Medical Care. Ropa mocno tanieje: WTI około 87,1 USD (−4,1%), Brent około 92,9 USD (−5,5%).",
    "Złoto około 4 139 USD (+1,8%), najwyżej od 21 października; bank centralny Chin kupił w październiku 25,8 t złota, najwięcej od trzech lat. Srebro około 53,3 USD (+2,7%). Dolar słabnie: indeks około 101,7 (−0,6%), EUR/USD 1,1223, GBP/USD 1,3443, USD/JPY 157,9. Bitcoin około 74 780 USD.",
    "Zamknięcia powyżej unieważnienia mają analizy spadkowe S&P 500 (7 545) i DAX (26 223) oraz szkic spadkowy srebra (52,50); rozliczenia rano po świecach. W nocy bilans handlowy Chin (4:00), we wtorek o 14:30 inflacja CPI w USA. Rynek wycenia około 80% szans na grudniową podwyżkę stóp Fed."
  ],
  punkty_en: [
    "Wall Street has its best day since April: S&P 500 around 7,553 (+2.4% versus Friday), Nasdaq 100 around 27,907 (+3.4%), Dow Jones around 52,409 (+2.2%). Investors buy the dip after last week's selloff.",
    "Chipmakers lead: AMD +13% after an Oppenheimer upgrade, Applied Materials +11.5% ahead of earnings, Broadcom and Lam Research near +9%, Micron +6%. Nvidia falls about 5% on reports about CEO Jensen Huang that could prompt Congress to tighten chip export controls.",
    "Europe: the DAX closed around 26,266 (+1.7%), Infineon +6.3%, Siemens Energy +5.1%; Siemens Healthineers and Fresenius Medical Care fall. Oil drops sharply: WTI around $87.1 (−4.1%), Brent around $92.9 (−5.5%).",
    "Gold around $4,139 (+1.8%), the highest since 21 October; China's central bank bought 25.8 t of gold in October, the most in three years. Silver around $53.3 (+2.7%). The dollar weakens: the index around 101.7 (−0.6%), EUR/USD 1.1223, GBP/USD 1.3443, USD/JPY 157.9. Bitcoin around $74,780.",
    "The bearish S&P 500 (7,545) and DAX (26,223) analyses and the bearish silver draft ($52.50) closed above invalidation; settlements in the morning after the candles. Overnight China's trade balance (4:00), on Tuesday at 14:30 US CPI inflation. Markets price about 80% odds of a December Fed hike."
  ],
  instrumenty: {
    sp500: { kurs: 7553.16, zmiana: 2.39, tydzien: 0.16, notka: "Zamknięcie (CFD). Analiza spadkowa: cel 7 238, unieważnienie 7 545; zamknięcie powyżej, rozliczenie rano.", notka_en: "Close (CFD). Bearish analysis: target 7,238, invalidation 7,545; closed above it, settlement in the morning.", zrodlo: 1 },
    nasdaq: { kurs: 27906.5, zmiana: 3.4, tydzien: -0.3, notka: "Zamknięcie (CFD). Analiza neutralna: zakres 26 606–27 967; kurs blisko górnej granicy.", notka_en: "Close (CFD). Neutral analysis: 26,606–27,967 range; price near the upper bound.", zrodlo: 1 },
    xauusd: { kurs: 4139.11, zmiana: 1.79, tydzien: 4.89, notka: "Szkic wzrostowy: cel 4 206, unieważnienie 4 031.", notka_en: "Bullish draft: target $4,206, invalidation $4,031.", zrodlo: 0 },
    eurusd: { kurs: 1.1223, zmiana: 0.72, tydzien: 0.34, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3443, zmiana: 0.7, tydzien: 0.28, notka: "Szkic spadkowy: cel 1,3269, unieważnienie 1,3463; kurs blisko unieważnienia.", notka_en: "Bearish draft: target 1.3269, invalidation 1.3463; price close to invalidation.", zrodlo: 2 },
    usdjpy: { kurs: 157.9, zmiana: -0.35, tydzien: -0.03, notka: "Analiza neutralna: zakres 156,75–159,05, termin około 11 lis.", notka_en: "Neutral analysis: 156.75–159.05 range, horizon around 11 Nov.", zrodlo: 2 },
    xagusd: { kurs: 53.29, zmiana: 2.72, tydzien: 5.21, notka: "Szkic spadkowy: cel 48,29, unieważnienie 52,50; kurs wyraźnie powyżej, rozliczenie rano.", notka_en: "Bearish draft: target $48.29, invalidation $52.50; price well above it, settlement in the morning.", zrodlo: 0 },
    usdpln: { kurs: 3.934, zmiana: -0.18, tydzien: -0.31, notka: "Kurs z popołudnia. Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Afternoon quote. Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 3 },
    wti: { kurs: 87.09, zmiana: -4.12, tydzien: -9.71, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax: { kurs: 26266, zmiana: 1.73, tydzien: 1.1, notka: "Zamknięcie sesji. Analiza spadkowa: cel 25 340, unieważnienie 26 223; zamknięcie powyżej, rozliczenie rano.", notka_en: "Session close. Bearish analysis: target 25,340, invalidation 26,223; closed above it, settlement in the morning.", zrodlo: 4 },
    btcusd: { kurs: 74776, zmiana: 0.03, tydzien: -2.48, notka: "Gemini. Szkic spadkowy: cel 73 005, unieważnienie 76 306; minimum doby 73 415.", notka_en: "Gemini. Bearish draft: target $73,005, invalidation $76,306; 24-hour low $73,415.", zrodlo: 5 }
  },
  kalendarz: [
    { dzien: "Wt 10 lis", wydarzenia: ["Chiny: bilans handlowy (4:00)", "USA: inflacja CPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Rises to Over Two-Week High; srebro, ropa WTI i Brent (9 lis 2026)", nazwa_en: "Trading Economics: Gold Rises to Over Two-Week High; silver, WTI and Brent crude (9 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA, zamknięcie 9 lis 2026", nazwa_en: "Trading Economics: US stock market, 9 Nov 2026 close", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: indeks dolara i główne pary walutowe (9 lis 2026)", nazwa_en: "Trading Economics: the dollar index and major currency pairs (9 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: waluty (tabela popołudniowa, USD/PLN), 9 lis 2026", nazwa_en: "Trading Economics: currencies (afternoon table, USD/PLN), 9 Nov 2026", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "Trading Economics: DAX, zamknięcie 9 lis 2026", nazwa_en: "Trading Economics: DAX, 9 Nov 2026 close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (9 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (9 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: inflacja CPI w USA, termin i poprzedni odczyt", nazwa_en: "Trading Economics: US CPI inflation, release date and previous reading", url: "https://tradingeconomics.com/united-states/inflation-cpi" }
  ]
};
