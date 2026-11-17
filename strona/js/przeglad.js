// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-17T13:55:00+01:00",
  stanNa_en: "Tuesday afternoon, 17 Nov 2026 (before the US open)",
  stanNa: "wtorek po południu, 17 lis 2026 (przed sesją w USA)",
  naglowek_en: "Europe falls for a third session: DAX −0.7%, Deutsche Bank −5%, despite the best German ZEW since February (35.6). US futures flat ahead of retail sales at 14:30 and Nvidia's results tonight. Gold holds just above $3,853.",
  naglowek: "Europa traci trzecią sesję: DAX −0,7%, Deutsche Bank −5%, mimo najlepszego od lutego ZEW (35,6). Kontrakty w USA bez zmian przed sprzedażą detaliczną o 14:30 i wieczornymi wynikami Nvidii. Złoto trzyma się tuż nad 3 853 USD.",
  punkty: [
    "Europa traci trzecią sesję: DAX około 26 406 (−0,7%), poniżej poziomu unieważnienia szkicu (26 492), o którym rozstrzygnie zamknięcie. Deutsche Bank −5% po doniesieniach o dawnych relacjach z klientami, SAP −2,8%, Rheinmetall −2,7%. Euro Stoxx 50 −0,8%, Londyn −0,8%.",
    "Indeks ZEW w Niemczech wzrósł w listopadzie do 35,6 pkt wobec prognozy 29,0 i 28,1 w październiku, najwyżej od lutego; ocena bieżącej sytuacji −33,2. Komisja Europejska podniosła prognozę wzrostu strefy euro na 2026 rok.",
    "Kontrakty w USA bez wyraźnego kierunku przed wynikami Nvidii po sesji (około 22:20): S&P 500 w okolicy zera, Nasdaq 100 lekko w górę. Disney zyskuje przed sesją po lepszej sprzedaży, Home Depot traci.",
    "Dziś o 14:30 sprzedaż detaliczna w USA (prognoza 0,0% m/m po 0,8%), o 15:15 produkcja przemysłowa. Dolar przy najwyższym od kwietnia 2025 poziomie (indeks 103,6): EUR/USD 1,0993, GBP/USD 1,3197, USD/JPY 159,3.",
    "Złoto około 3 856 USD, tuż nad dolną granicą analizy (3 853); srebro 47,68 USD (+1,6%), WTI 86,3 USD, Brent 93,0. Bitcoin około 64 900 USD. W ciągu dnia żaden poziom analiz nie został rozstrzygnięty."
  ],
  punkty_en: [
    "Europe falls for a third session: the DAX around 26,406 (−0.7%), below the draft's invalidation level (26,492), which the close will decide. Deutsche Bank −5% on reports about past client dealings, SAP −2.8%, Rheinmetall −2.7%. Euro Stoxx 50 −0.8%, London −0.8%.",
    "Germany's ZEW index rose to 35.6 in November versus a 29.0 forecast and 28.1 in October, the highest since February; current conditions −33.2. The European Commission raised its 2026 euro-area growth forecast.",
    "US futures lack direction ahead of Nvidia's results after the close (around 22:20): the S&P 500 near flat, the Nasdaq 100 slightly higher. Disney gains pre-market on better sales, Home Depot falls.",
    "US retail sales are due today at 14:30 (forecast 0.0% m/m after 0.8%), industrial production at 15:15. The dollar near its highest since April 2025 (index 103.6): EUR/USD 1.0993, GBP/USD 1.3197, USD/JPY 159.3.",
    "Gold around $3,856, just above the analysis's lower bound ($3,853); silver $47.68 (+1.6%), WTI $86.3, Brent $93.0. Bitcoin around $64,900. No analysis level was decided intraday."
  ],
  instrumenty: {
    sp500: { kurs: 7413.86, zmiana: -0.04, tydzien: -1.42, notka: "Kontrakt CFD przed sesją. Szkic spadkowy: cel 7 350, unieważnienie 7 502.", notka_en: "Pre-market CFD quote. Bearish draft: target 7,350, invalidation 7,502.", zrodlo: 1 },
    nasdaq: { kurs: 27289.99, zmiana: 0.34, tydzien: -1.63, notka: "Kontrakt CFD przed sesją. Szkic spadkowy: cel 26 888, unieważnienie 28 026.", notka_en: "Pre-market CFD quote. Bearish draft: target 26,888, invalidation 28,026.", zrodlo: 1 },
    xauusd: { kurs: 3856.09, zmiana: 0.02, tydzien: -4.37, notka: "Analiza neutralna: zakres 3 853–3 999; kurs tuż nad dolną granicą, rozstrzyga zamknięcie dnia.", notka_en: "Neutral analysis: $3,853–3,999 range; price just above the lower bound, the daily close decides.", zrodlo: 0 },
    eurusd: { kurs: 1.0993, zmiana: -0.03, tydzien: -1.52, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3197, zmiana: 0.11, tydzien: -1.08, notka: "Szkic spadkowy: cel 1,3132, unieważnienie 1,3304.", notka_en: "Bearish draft: target 1.3132, invalidation 1.3304.", zrodlo: 2 },
    usdjpy: { kurs: 159.29, zmiana: -0.08, tydzien: 0.35, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 47.68, zmiana: 1.57, tydzien: -7.42, notka: "Szkic spadkowy: cel 45, unieważnienie 50,43.", notka_en: "Bearish draft: target $45, invalidation $50.43.", zrodlo: 0 },
    usdpln: { kurs: 4.0002, zmiana: 0.0, tydzien: 1.69, notka: "Zamknięcie z poniedziałku (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Monday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 3 },
    wti: { kurs: 86.34, zmiana: 0.72, tydzien: 0.35, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88, unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88, invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26406, zmiana: -0.72, tydzien: 0.22, notka: "W trakcie sesji (CFD), poniżej 26 492; rozstrzyga zamknięcie dnia. Szkic wzrostowy: cel 27 011.", notka_en: "During the session (CFD), below 26,492; the daily close decides. Bullish draft: target 27,011.", zrodlo: 3 },
    btcusd: { kurs: 64865, zmiana: 0.15, tydzien: -11.99, notka: "Gemini. Szkic spadkowy: cel 61 946, unieważnienie 68 380.", notka_en: "Gemini. Bearish draft: target $61,946, invalidation $68,380.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Wt 17 lis", wydarzenia: ["USA: sprzedaż detaliczna (14:30)", "USA: produkcja przemysłowa (15:15)", "Nvidia: wyniki po sesji (około 22:20)"] },
    { dzien: "Śr 18 lis", wydarzenia: ["USA: protokół z posiedzenia FOMC (20:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa (17 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude (17 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Stock Futures Mixed Ahead of Nvidia Earnings (17 lis 2026)", nazwa_en: "Trading Economics: US Stock Futures Mixed Ahead of Nvidia Earnings (17 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar i kursy walut (17 lis 2026)", nazwa_en: "Trading Economics: dollar and FX rates (17 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: DAX i Europa (17 lis 2026); USD/PLN: zamknięcie CNBC z 16 lis", nazwa_en: "Trading Economics: DAX and Europe (17 Nov 2026); USD/PLN: CNBC close on 16 Nov", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (17 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (17 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: indeks ZEW w Niemczech (lis 2026)", nazwa_en: "Trading Economics: German ZEW index (Nov 2026)", url: "https://tradingeconomics.com/germany/zew-economic-sentiment-index" },
    { nazwa: "Trading Economics: sprzedaż detaliczna w USA, termin i prognoza", nazwa_en: "Trading Economics: US retail sales, release date and forecast", url: "https://tradingeconomics.com/united-states/retail-sales" },
    { nazwa: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", nazwa_en: "TradingKey: The Week Ahead: Nvidia Q3 Earnings, US October Retail Sales, FOMC Minutes", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262305825-week-ahead-nvidia-q3-earnings-us-october-retail-sales-fomc-minutes-walmart-tradingkey" }
  ]
};
