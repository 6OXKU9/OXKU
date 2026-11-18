// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-18T07:50:00+01:00",
  stanNa_en: "Wednesday morning, 18 Nov 2026 (before the European open)",
  stanNa: "środa rano, 18 lis 2026 (przed sesją w Europie)",
  naglowek_en: "Nvidia beats and US futures rise: Nasdaq 100 more than +1%, S&P 500 +0.7%. The Kospi and Nikkei gain, Hong Kong falls on US curbs on China. Gold drops 1.8% to $3,779, the lowest in over a year. The Fed minutes are due tonight.",
  naglowek: "Nvidia powyżej oczekiwań, kontrakty w USA w górę: Nasdaq 100 ponad +1%, S&P 500 +0,7%. Kospi i Nikkei rosną, Hongkong traci przez ograniczenia USA dla Chin. Złoto spada o 1,8% do 3 779 USD, najniżej od ponad roku. Wieczorem protokół Fed.",
  punkty: [
    "Nvidia po wtorkowej sesji: przychód 115,8 mld USD wobec oczekiwanych około 109 mld, prognoza na kolejny kwartał 130 mld; akcje zyskiwały po sesji ponad 4%. Rano kontrakty na Nasdaq 100 rosną o ponad 1%, na S&P 500 o 0,7%, na Dow o 0,3%.",
    "W Azji Kospi i Nikkei w górę po wynikach Nvidii, a Hongkong w dół przez rozszerzone ograniczenia USA dla eksportu chipów AI i zdalnego dostępu do mocy obliczeniowej; tracą m.in. Alibaba i Baidu.",
    "Rozliczenia: trafione szkice spadkowe S&P 500 (minimum 7 288) i Nasdaq 100 (26 581), nietrafione złoto (zamknięcie 3 849 pod zakresem) i DAX (26 045 pod 26 492); bilans 33 z 71. Nowe szkice: wzrostowe S&P 500 i Nasdaq 100, spadkowe złoto, neutralny DAX.",
    "Złoto 3 779 USD (−1,8%), najniżej od ponad roku; srebro 45,96 USD (−2,9%). Fed: Musalem popiera kilka podwyżek, Williams dalsze zacieśnianie; rynek wycenia około 96% szans na podwyżkę w grudniu. Dolar 103,6: EUR/USD 1,0989, GBP/USD 1,3197, USD/JPY 159,2.",
    "Ropa tanieje: WTI 84,5 USD (−1,8%), blisko celu szkicu (83,88), Brent 92,2. Bitcoin około 64 300 USD. Dziś o 20:00 protokół z październikowego posiedzenia Fed."
  ],
  punkty_en: [
    "Nvidia after Tuesday's session: revenue $115.8B versus about $109B expected, next-quarter outlook $130B; shares rose more than 4% after hours. This morning Nasdaq 100 futures rise more than 1%, S&P 500 futures 0.7%, Dow futures 0.3%.",
    "In Asia the Kospi and Nikkei rise after Nvidia's results, while Hong Kong falls on expanded US curbs on AI chip exports and remote computing access; Alibaba and Baidu are among the losers.",
    "Settlements: hits for the bearish S&P 500 (low 7,288) and Nasdaq 100 (26,581) drafts, misses for gold (close $3,849 below the range) and the DAX (26,045 below 26,492); the tally is 33 of 71. New drafts: bullish S&P 500 and Nasdaq 100, bearish gold, neutral DAX.",
    "Gold $3,779 (−1.8%), the lowest in over a year; silver $45.96 (−2.9%). Fed: Musalem backs several hikes, Williams further tightening; markets price about a 96% chance of a December hike. The dollar at 103.6: EUR/USD 1.0989, GBP/USD 1.3197, USD/JPY 159.2.",
    "Oil eases: WTI $84.5 (−1.8%), close to the draft's target ($83.88), Brent $92.2. Bitcoin around $64,300. The minutes of the Fed's October meeting are due today at 20:00."
  ],
  instrumenty: {
    sp500: { kurs: 7340.53, zmiana: -1.03, tydzien: -3.66, notka: "Zamknięcie z wtorku (CNBC); kontrakty rano około +0,7%. Nowy szkic wzrostowy: cel 7 502, unieważnienie 7 288.", notka_en: "Tuesday close (CNBC); futures about +0.7% this morning. New bullish draft: target 7,502, invalidation 7,288.", zrodlo: 1 },
    nasdaq: { kurs: 27001.8, zmiana: -0.72, tydzien: -4.84, notka: "Zamknięcie z wtorku (CNBC); kontrakty rano ponad +1%. Nowy szkic wzrostowy: cel 27 622, unieważnienie 26 581.", notka_en: "Tuesday close (CNBC); futures more than +1% this morning. New bullish draft: target 27,622, invalidation 26,581.", zrodlo: 1 },
    xauusd: { kurs: 3778.98, zmiana: -1.81, tydzien: -5.22, notka: "Nowy szkic spadkowy: cel 3 730, unieważnienie 3 881.", notka_en: "New bearish draft: target $3,730, invalidation $3,881.", zrodlo: 0 },
    eurusd: { kurs: 1.0989, zmiana: -0.07, tydzien: -0.9, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3197, zmiana: -0.08, tydzien: -0.62, notka: "Szkic spadkowy: cel 1,3132, unieważnienie 1,3304.", notka_en: "Bearish draft: target 1.3132, invalidation 1.3304.", zrodlo: 2 },
    usdjpy: { kurs: 159.23, zmiana: -0.08, tydzien: -0.34, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 45.96, zmiana: -2.92, tydzien: -11.04, notka: "Szkic spadkowy: cel 45, unieważnienie 50,43; kurs blisko celu.", notka_en: "Bearish draft: target $45, invalidation $50.43; price close to the target.", zrodlo: 0 },
    usdpln: { kurs: 3.9981, zmiana: -0.05, tydzien: 0.54, notka: "Zamknięcie z wtorku (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Tuesday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 3 },
    wti: { kurs: 84.46, zmiana: -1.8, tydzien: -2.39, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88 (blisko), unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88 (close), invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26045.4, zmiana: -2.08, tydzien: -2.32, notka: "Zamknięcie z wtorku (CNBC). Nowa analiza neutralna: zakres 25 793–26 600.", notka_en: "Tuesday close (CNBC). New neutral analysis: 25,793–26,600 range.", zrodlo: 3 },
    btcusd: { kurs: 64321, zmiana: -0.85, tydzien: -12.99, notka: "Gemini. Szkic spadkowy: cel 61 946, unieważnienie 68 380.", notka_en: "Gemini. Bearish draft: target $61,946, invalidation $68,380.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Śr 18 lis", wydarzenia: ["USA: protokół z posiedzenia FOMC (20:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa (18 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude (18 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "CNBC: zamknięcia z 17 lis; Trading Economics: kontrakty w USA po wynikach Nvidii (18 lis 2026)", nazwa_en: "CNBC: 17 Nov closes; Trading Economics: US futures after Nvidia's results (18 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar i kursy walut (18 lis 2026)", nazwa_en: "Trading Economics: dollar and FX rates (18 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "CNBC: zamknięcia DAX i USD/PLN z 17 lis", nazwa_en: "CNBC: DAX and USD/PLN closes on 17 Nov", url: "https://www.cnbc.com/quotes/.GDAXI" },
    { nazwa: "Gemini: notowanie BTC/USD (18 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (18 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "NVIDIA: Financial Results for Third Quarter Fiscal 2027 (17 lis 2026)", nazwa_en: "NVIDIA: Financial Results for Third Quarter Fiscal 2027 (17 Nov 2026)", url: "https://www.globenewswire.com/news-release/2026/11/17/3405200/0/en/nvidia-announces-financial-results-for-third-quarter-fiscal-2027.html" },
    { nazwa: "TokenPost: Nvidia Earnings Support Nikkei and Kospi as Hong Kong Shares Fall (18 lis 2026)", nazwa_en: "TokenPost: Nvidia Earnings Support Nikkei and Kospi as Hong Kong Shares Fall (18 Nov 2026)", url: "https://www.tokenpost.com/news/investing/60182" },
    { nazwa: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", nazwa_en: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262305825-week-ahead-nvidia-q3-earnings-us-october-retail-sales-fomc-minutes-walmart-tradingkey" }
  ]
};
