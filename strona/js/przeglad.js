// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-13T08:00:00+01:00",
  stanNa_en: "Friday morning, 13 Nov 2026 (before the European and London open)",
  stanNa: "piątek rano, 13 lis 2026 (przed sesją w Europie i Londynie)",
  naglowek_en: "Nvidia CEO Jensen Huang resigns; US futures edge higher ahead of today's PPI (14:30). The dollar holds at a 19-month high above 103, USD/JPY above 160. Bitcoin falls to $67,555, the lowest since August.",
  naglowek: "Prezes Nvidii Jensen Huang rezygnuje; kontrakty w USA lekko w górę przed dzisiejszym PPI (14:30). Dolar na najwyższym od 19 miesięcy poziomie powyżej 103, USD/JPY powyżej 160. Bitcoin spada do 67 555 USD, najniżej od sierpnia.",
  punkty: [
    "Prezes Nvidii Jensen Huang zrezygnował; tymczasowo firmą pokieruje dyrektor finansowa Colette Kress. Akcje Nvidii rosły po sesji o ponad 1%, a kontrakty w USA zyskują 0,2–0,6% przed dzisiejszym odczytem PPI (14:30).",
    "Azja mieszana: Nikkei około 61 130 (+0,5%) i ponad 7% w skali tygodnia, najlepiej od czerwca; Hongkong −1,6%, Chiny −0,6%, Australia −0,9%, Indie −0,4%.",
    "Dolar utrzymuje się na najwyższym poziomie od kwietnia 2025: indeks około 103,2. EUR/USD 1,1059, GBP/USD 1,3226, USD/JPY 160,1. Popyt na dolara wzmocniły słowa Trumpa, że USA nie potrzebują już porozumienia z Iranem; ropa WTI około 88,8 USD, Brent około 96,3 USD.",
    "Złoto odbija do około 3 895 USD (+0,5%), ale zmierza do spadku o ponad 4% w tygodniu; srebro około 49,9 USD. Bitcoin spadł w nocy do 67 555 USD, najniżej od sierpnia, i jest przy 68 230.",
    "Rozliczenia: trafione szkice spadkowe złota (spadek do 3 853) i EUR/USD (do 1,1044); nietrafione srebro i zakres bitcoina. Skuteczność 27 z 59. Nowe szkice: złoto i EUR/USD w zakresie, srebro i bitcoin w dół."
  ],
  punkty_en: [
    "Nvidia CEO Jensen Huang has resigned; CFO Colette Kress will lead the company on an interim basis. Nvidia shares rose more than 1% after hours, and US futures gain 0.2–0.6% ahead of today's PPI (14:30).",
    "Asia is mixed: the Nikkei around 61,130 (+0.5%) and up more than 7% on the week, the best since June; Hong Kong −1.6%, China −0.6%, Australia −0.9%, India −0.4%.",
    "The dollar holds at its highest since April 2025: the index around 103.2. EUR/USD 1.1059, GBP/USD 1.3226, USD/JPY 160.1. Demand for the dollar rose after Trump said the US no longer needs a deal with Iran; WTI crude around $88.8, Brent around $96.3.",
    "Gold rebounds to around $3,895 (+0.5%) but is heading for a weekly loss of more than 4%; silver around $49.9. Bitcoin fell overnight to $67,555, the lowest since August, and is near $68,230.",
    "Settlements: the bearish gold (drop to $3,853) and EUR/USD (to 1.1044) drafts hit; silver and the bitcoin range missed. Hit rate 27 of 59. New drafts: gold and EUR/USD in ranges, silver and bitcoin down."
  ],
  instrumenty: {
    sp500: { kurs: 7592.4, zmiana: 0.0, tydzien: 2.92, notka: "Zamknięcie z czwartku. Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Thursday close. Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 28289.2, zmiana: 0.0, tydzien: 4.81, notka: "Zamknięcie z czwartku. Analiza neutralna: zakres 27 421–28 830.", notka_en: "Thursday close. Neutral analysis: 27,421–28,830 range.", zrodlo: 1 },
    xauusd: { kurs: 3895.34, zmiana: 0.47, tydzien: -4.2, notka: "Nowa analiza neutralna: zakres 3 853–3 999.", notka_en: "New neutral analysis: $3,853–3,999 range.", zrodlo: 0 },
    eurusd: { kurs: 1.1059, zmiana: 0.05, tydzien: -0.75, notka: "Nowa analiza neutralna: zakres 1,1044–1,1170.", notka_en: "New neutral analysis: 1.1044–1.1170 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3226, zmiana: -0.01, tydzien: -0.92, notka: "Szkic spadkowy: cel 1,3177, unieważnienie 1,3385.", notka_en: "Bearish draft: target 1.3177, invalidation 1.3385.", zrodlo: 2 },
    usdjpy: { kurs: 160.1, zmiana: 0.16, tydzien: 1.04, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64; kurs powyżej 160.", notka_en: "Bullish draft: target 160.39, invalidation 158.64; price above 160.", zrodlo: 2 },
    xagusd: { kurs: 49.92, zmiana: -0.19, tydzien: -3.78, notka: "Nowy szkic spadkowy: cel 48,53, unieważnienie 51,96.", notka_en: "New bearish draft: target $48.53, invalidation $51.96.", zrodlo: 0 },
    usdpln: { kurs: 3.9815, zmiana: 0.0, tydzien: 1.03, notka: "Zamknięcie z czwartku. Analiza neutralna: zakres 3,9308–3,9833; kurs blisko górnej granicy.", notka_en: "Thursday close. Neutral analysis: 3.9308–3.9833 range; price near the upper bound.", zrodlo: 3 },
    wti: { kurs: 88.8, zmiana: 0.07, tydzien: -2.23, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88, unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88, invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26771.9, zmiana: 0.0, tydzien: 3.69, notka: "Zamknięcie z czwartku. Szkic wzrostowy: cel 27 011, unieważnienie 26 492.", notka_en: "Thursday close. Bullish draft: target 27,011, invalidation 26,492.", zrodlo: 3 },
    btcusd: { kurs: 68233.4, zmiana: -4.39, tydzien: -9.9, notka: "Coinbase. Nowy szkic spadkowy: cel 64 112, unieważnienie 72 644.", notka_en: "Coinbase. New bearish draft: target $64,112, invalidation $72,644.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Pt 13 lis", wydarzenia: ["USA: ceny producentów PPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Set for Weekly Drop; srebro, ropa (13 lis 2026)", nazwa_en: "Trading Economics: Gold Set for Weekly Drop; silver, crude (13 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: kontrakty w USA po rezygnacji prezesa Nvidii (13 lis 2026)", nazwa_en: "Trading Economics: US futures after Nvidia CEO's resignation (13 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Holds at 19-Month High (13 lis 2026)", nazwa_en: "Trading Economics: Dollar Holds at 19-Month High (13 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "CNBC: świece dzienne (zamknięcia z 12 lis 2026: S&P 500, Nasdaq 100, DAX, USD/PLN)", nazwa_en: "CNBC: daily candles (12 Nov 2026 closes: S&P 500, Nasdaq 100, DAX, USD/PLN)", url: "https://www.cnbc.com/quotes/.GDAXI" },
    { nazwa: "Coinbase: świeca dzienna BTC/USD (13 lis 2026)", nazwa_en: "Coinbase: BTC/USD daily candle (13 Nov 2026)", url: "https://www.coinbase.com/price/bitcoin" },
    { nazwa: "Trading Economics: giełda w Japonii i Azji (13 lis 2026)", nazwa_en: "Trading Economics: Japan and Asian stock markets (13 Nov 2026)", url: "https://tradingeconomics.com/japan/stock-market" },
    { nazwa: "Trading Economics: ceny producentów PPI w USA, termin i prognoza", nazwa_en: "Trading Economics: US PPI, release date and forecast", url: "https://tradingeconomics.com/united-states/producer-prices-change" }
  ]
};
