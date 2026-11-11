// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-11T08:00:00+01:00",
  stanNa_en: "Wednesday morning, 11 Nov 2026 (before the European and London open)",
  stanNa: "środa rano, 11 lis 2026 (przed sesją w Europie i Londynie)",
  naglowek_en: "Asia rises despite Tuesday's US losses: Nikkei +1.4%. US futures gain after CoreWeave's results, Nasdaq 100 about +1%. Markets price 91% odds of a December Fed hike; the dollar holds gains. Gold rebounds to about $4,055.",
  naglowek: "Azja rośnie mimo wtorkowych spadków w USA: Nikkei +1,4%. Kontrakty w USA zyskują po wynikach CoreWeave, Nasdaq 100 około +1%. Rynek wycenia 91% szans na grudniową podwyżkę Fed, dolar utrzymuje zyski. Złoto odbija do około 4 055 USD.",
  punkty: [
    "Azja w większości rośnie mimo słabszej Wall Street: Nikkei około 61 300 (+1,4%), trzecia sesja wzrostów z rzędu; Indie +1,6%, Singapur +0,8%, Chiny +0,6%; Hongkong −0,8%. Zyskują Advantest i Tokyo Electron, SoftBank traci 4% po pierwszej od prawie dwóch lat stracie netto.",
    "Kontrakty w USA rosną po dobrych wynikach CoreWeave, który podniósł prognozę na cały rok: Nasdaq 100 około +1%, S&P 500 około +0,6% (CFD około 7 570). Według doniesień Anthropic może zadebiutować na giełdzie już w przyszłym tygodniu.",
    "Po wyższej od prognoz inflacji CPI rynek wycenia około 91% szans na grudniową podwyżkę stóp Fed, a także możliwe kolejne w styczniu i kwietniu. Dolar utrzymuje zyski: indeks około 102,3, EUR/USD 1,1158, GBP/USD 1,3340, USD/JPY 158,8.",
    "Złoto odbija do około 4 055 USD (+0,6%) po wtorkowym spadku o prawie 3%; srebro około 53,0 USD. Ropa WTI około 86,7 USD (+0,7%), Brent około 92,5 USD. Bitcoin około 73 740 USD.",
    "Rozliczenia: trafione analizy bitcoina (spadek do 72 644) i USD/JPY (10 sesji w zakresie). Skuteczność 21 z 47. Nowe szkice: USD/JPY w górę do 159,52 i bitcoin w zakresie 72 644–76 306. W piątek o 14:30 ceny producentów PPI w USA."
  ],
  punkty_en: [
    "Asia mostly rises despite a weaker Wall Street: the Nikkei around 61,300 (+1.4%), a third straight gain; India +1.6%, Singapore +0.8%, China +0.6%; Hong Kong −0.8%. Advantest and Tokyo Electron gain, SoftBank falls 4% after its first net loss in almost two years.",
    "US futures rise after strong CoreWeave results and a higher full-year outlook: Nasdaq 100 about +1%, S&P 500 about +0.6% (CFD around 7,570). Reports say Anthropic may list as soon as next week.",
    "After the hotter-than-expected CPI, markets price about 91% odds of a December Fed hike, with more possible in January and April. The dollar holds its gains: the index around 102.3, EUR/USD 1.1158, GBP/USD 1.3340, USD/JPY 158.8.",
    "Gold rebounds to around $4,055 (+0.6%) after Tuesday's drop of almost 3%; silver around $53.0. WTI crude around $86.7 (+0.7%), Brent around $92.5. Bitcoin around $73,740.",
    "Settlements: the bitcoin (drop to $72,644) and USD/JPY (10 sessions in range) analyses hit. Hit rate 21 of 47. New drafts: USD/JPY up to 159.52 and bitcoin in a $72,644–76,306 range. US producer prices (PPI) on Friday at 14:30."
  ],
  instrumenty: {
    sp500: { kurs: 7570.12, zmiana: 0.65, tydzien: -1.54, notka: "Kontrakt CFD przed sesją. Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Pre-market CFD quote. Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 28160.43, zmiana: 1.51, tydzien: -0.97, notka: "Kontrakt CFD przed sesją. Analiza neutralna: zakres 26 606–27 967; kontrakt powyżej górnej granicy, decyduje zamknięcie dnia.", notka_en: "Pre-market CFD quote. Neutral analysis: 26,606–27,967 range; the contract is above the upper bound, the daily close decides.", zrodlo: 1 },
    xauusd: { kurs: 4055.0, zmiana: 0.56, tydzien: -0.11, notka: "Szkic wzrostowy: cel 4 206, unieważnienie 4 031; wtorkowe zamknięcie 4 032 tuż nad progiem.", notka_en: "Bullish draft: target $4,206, invalidation $4,031; Tuesday's close of $4,032 was just above it.", zrodlo: 0 },
    eurusd: { kurs: 1.1158, zmiana: -0.04, tydzien: -0.61, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.334, zmiana: -0.01, tydzien: -0.97, notka: "Szkic spadkowy: cel 1,3269, unieważnienie 1,3463.", notka_en: "Bearish draft: target 1.3269, invalidation 1.3463.", zrodlo: 2 },
    usdjpy: { kurs: 158.82, zmiana: 0.06, tydzien: 0.25, notka: "Nowy szkic wzrostowy: cel 159,52, unieważnienie 157,85.", notka_en: "New bullish draft: target 159.52, invalidation 157.85.", zrodlo: 2 },
    xagusd: { kurs: 52.99, zmiana: 2.89, tydzien: 1.41, notka: "Szkic wzrostowy: cel 54,73, unieważnienie 51,38.", notka_en: "Bullish draft: target $54.73, invalidation $51.38.", zrodlo: 0 },
    usdpln: { kurs: 3.9337, zmiana: 0.0, tydzien: 0.78, notka: "Zamknięcie z wtorku. Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Tuesday close. Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 3 },
    wti: { kurs: 86.66, zmiana: 0.72, tydzien: -1.66, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax: { kurs: 26347.5, zmiana: 0.0, tydzien: -0.34, notka: "Zamknięcie z wtorku. Szkic wzrostowy: cel 26 693, unieważnienie 25 793.", notka_en: "Tuesday close. Bullish draft: target 26,693, invalidation 25,793.", zrodlo: 3 },
    btcusd: { kurs: 73742.9, zmiana: 0.06, tydzien: -8.31, notka: "Coinbase. Nowa analiza neutralna: zakres 72 644–76 306.", notka_en: "Coinbase. New neutral analysis: $72,644–76,306 range.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Pt 13 lis", wydarzenia: ["USA: ceny producentów PPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Pressured by Fed Rate Hike Bets; srebro, ropa (11 lis 2026)", nazwa_en: "Trading Economics: Gold Pressured by Fed Rate Hike Bets; silver, crude (11 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Futures Jump on Upbeat CoreWeave Results (11 lis 2026)", nazwa_en: "Trading Economics: US Futures Jump on Upbeat CoreWeave Results (11 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Holds Gains on Hawkish Fed Outlook (11 lis 2026)", nazwa_en: "Trading Economics: Dollar Holds Gains on Hawkish Fed Outlook (11 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "CNBC: świece dzienne (zamknięcia DAX i USD/PLN z 10 lis 2026)", nazwa_en: "CNBC: daily candles (DAX and USD/PLN closes on 10 Nov 2026)", url: "https://www.cnbc.com/quotes/.GDAXI" },
    { nazwa: "Coinbase: świeca dzienna BTC/USD (11 lis 2026)", nazwa_en: "Coinbase: BTC/USD daily candle (11 Nov 2026)", url: "https://www.coinbase.com/price/bitcoin" },
    { nazwa: "Trading Economics: giełda w Japonii i Azji (11 lis 2026)", nazwa_en: "Trading Economics: Japan and Asian stock markets (11 Nov 2026)", url: "https://tradingeconomics.com/japan/stock-market" },
    { nazwa: "Trading Economics: ceny producentów PPI w USA, termin i prognoza", nazwa_en: "Trading Economics: US PPI, release date and forecast", url: "https://tradingeconomics.com/united-states/producer-prices-change" }
  ]
};
