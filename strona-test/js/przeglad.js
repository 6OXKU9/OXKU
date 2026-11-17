// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-17T07:50:00+01:00",
  stanNa_en: "Tuesday morning, 17 Nov 2026 (before the European open)",
  stanNa: "wtorek rano, 17 lis 2026 (przed sesją w Europie)",
  naglowek_en: "Asia falls 1–1.5% after Wall Street's chip selloff and new US chip curbs on China. Nvidia reports tonight after the close. The dollar above 4.00 zlotys for the first time since March 2025; gold rebounds slightly to $3,876.",
  naglowek: "Azja traci 1–1,5% po wyprzedaży chipów na Wall Street i nowych ograniczeniach USA dla Chin. Wieczorem po sesji wyniki Nvidii. Dolar powyżej 4,00 zł po raz pierwszy od marca 2025; złoto lekko odbija do 3 876 USD.",
  punkty: [
    "Azja spada za Wall Street: Nikkei −1,2% (SoftBank −6,2%, Advantest −4,3%), Kospi −1%, Hang Seng −1,2%, Shanghai −0,8%, ASX 200 −1,5%, Taiex −0,9%. Na nastroje działają nowe ograniczenia USA dla zdalnego dostępu Chin do zaawansowanych chipów.",
    "Poniedziałek w USA: S&P 500 7 417 (−1,9%), Nasdaq 100 27 197 (−2,7%), Dow −1,4%. Nvidia −4% przed dzisiejszymi wynikami po sesji (około 22:20); oczekiwany przychód około 109 mld USD. Rano kontrakty mieszane: Nasdaq 100 lekko w górę, S&P 500 w dół.",
    "Rozliczenia: trafione szkice USD/PLN (dolar powyżej 4,00 zł po raz pierwszy od marca 2025) i GBP/USD, nietrafione S&P 500 i Nasdaq 100 (zamknięcia poza poziomami); bilans 31 z 67. Złoto zamknęło się na 3 855, tuż nad dolną granicą zakresu.",
    "Dolar przy najwyższym od prawie 20 miesięcy poziomie (indeks około 103,5) po jastrzębich wypowiedziach członków Fed. EUR/USD 1,1003, GBP/USD 1,3194, USD/JPY 159,35.",
    "Złoto 3 876 USD (+0,5%), srebro 47,45 USD (+1,1%), WTI 85,0 USD, Brent 91,7 USD. Bitcoin około 64 400 USD. Dziś o 14:30 sprzedaż detaliczna w USA (prognoza 0,0% m/m), o 15:15 produkcja przemysłowa."
  ],
  punkty_en: [
    "Asia falls after Wall Street: Nikkei −1.2% (SoftBank −6.2%, Advantest −4.3%), Kospi −1%, Hang Seng −1.2%, Shanghai −0.8%, ASX 200 −1.5%, Taiex −0.9%. New US limits on China's remote access to advanced chips weigh on sentiment.",
    "Monday in the US: S&P 500 7,417 (−1.9%), Nasdaq 100 27,197 (−2.7%), Dow −1.4%. Nvidia −4% ahead of its results after today's close (around 22:20); expected revenue about $109B. Futures are mixed this morning: Nasdaq 100 slightly up, S&P 500 down.",
    "Settlements: hits for the USD/PLN draft (the dollar above 4.00 zlotys for the first time since March 2025) and GBP/USD, misses for the S&P 500 and Nasdaq 100 (closes beyond the levels); the tally is 31 of 67. Gold closed at $3,855, just above the range's lower bound.",
    "The dollar near its highest in almost 20 months (index around 103.5) after hawkish Fed remarks. EUR/USD 1.1003, GBP/USD 1.3194, USD/JPY 159.35.",
    "Gold $3,876 (+0.5%), silver $47.45 (+1.1%), WTI $85.0, Brent $91.7. Bitcoin around $64,400. Today at 14:30 US retail sales (forecast 0.0% m/m), at 15:15 industrial production."
  ],
  instrumenty: {
    sp500: { kurs: 7400.89, zmiana: -0.21, tydzien: -1.6, notka: "Kontrakt CFD rano. Nowy szkic spadkowy: cel 7 350, unieważnienie 7 502.", notka_en: "Morning CFD quote. New bearish draft: target 7,350, invalidation 7,502.", zrodlo: 1 },
    nasdaq: { kurs: 27183.67, zmiana: -0.05, tydzien: -2.01, notka: "Kontrakt CFD rano. Nowy szkic spadkowy: cel 26 888, unieważnienie 28 026.", notka_en: "Morning CFD quote. New bearish draft: target 26,888, invalidation 28,026.", zrodlo: 1 },
    xauusd: { kurs: 3875.61, zmiana: 0.53, tydzien: -3.89, notka: "Analiza neutralna: zakres 3 853–3 999; poniedziałek zamknął się na 3 855, tuż nad dolną granicą.", notka_en: "Neutral analysis: $3,853–3,999 range; Monday closed at $3,855, just above the lower bound.", zrodlo: 0 },
    eurusd: { kurs: 1.1003, zmiana: 0.06, tydzien: -1.43, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3194, zmiana: 0.09, tydzien: -1.1, notka: "Nowy szkic spadkowy: cel 1,3132, unieważnienie 1,3304.", notka_en: "New bearish draft: target 1.3132, invalidation 1.3304.", zrodlo: 2 },
    usdjpy: { kurs: 159.35, zmiana: -0.04, tydzien: 0.39, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 47.45, zmiana: 1.08, tydzien: -7.87, notka: "Szkic spadkowy: cel 45, unieważnienie 50,43.", notka_en: "Bearish draft: target $45, invalidation $50.43.", zrodlo: 0 },
    usdpln: { kurs: 4.0002, zmiana: 0.0, tydzien: 1.69, notka: "Zamknięcie z poniedziałku (CNBC), brak świeższego notowania. Nowy szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Monday close (CNBC), no fresher quote. New bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 3 },
    wti: { kurs: 85.01, zmiana: -0.83, tydzien: -1.2, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88, unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88, invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26598.6, zmiana: 0.0, tydzien: 0.95, notka: "Zamknięcie z poniedziałku (CNBC). Szkic wzrostowy: cel 27 011, unieważnienie 26 492.", notka_en: "Monday close (CNBC). Bullish draft: target 27,011, invalidation 26,492.", zrodlo: 3 },
    btcusd: { kurs: 64385, zmiana: -0.59, tydzien: -12.64, notka: "Gemini. Szkic spadkowy: cel 61 946, unieważnienie 68 380.", notka_en: "Gemini. Bearish draft: target $61,946, invalidation $68,380.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Wt 17 lis", wydarzenia: ["USA: sprzedaż detaliczna (14:30)", "USA: produkcja przemysłowa (15:15)", "Nvidia: wyniki po sesji (około 22:20)"] },
    { dzien: "Śr 18 lis", wydarzenia: ["USA: protokół z posiedzenia FOMC (20:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa (17 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude (17 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Stock Futures Mixed Ahead of Nvidia Earnings (17 lis 2026)", nazwa_en: "Trading Economics: US Stock Futures Mixed Ahead of Nvidia Earnings (17 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar i kursy walut (17 lis 2026)", nazwa_en: "Trading Economics: dollar and FX rates (17 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "CNBC: zamknięcia DAX i USD/PLN z 16 lis", nazwa_en: "CNBC: DAX and USD/PLN closes on 16 Nov", url: "https://www.cnbc.com/quotes/.GDAXI" },
    { nazwa: "Gemini: notowanie BTC/USD (17 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (17 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "News4JAX / AP: Asian shares decline following stocks tumbled on Wall Street (17 lis 2026)", nazwa_en: "News4JAX / AP: Asian shares decline following stocks tumbled on Wall Street (17 Nov 2026)", url: "https://www.news4jax.com/business/2026/11/17/asian-shares-decline-following-stocks-tumbled-on-wall-street/" },
    { nazwa: "Trading Economics: sprzedaż detaliczna w USA, termin i prognoza", nazwa_en: "Trading Economics: US retail sales, release date and forecast", url: "https://tradingeconomics.com/united-states/retail-sales" },
    { nazwa: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", nazwa_en: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262305825-week-ahead-nvidia-q3-earnings-us-october-retail-sales-fomc-minutes-walmart-tradingkey" }
  ]
};
