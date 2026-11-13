// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-13T13:50:00+01:00",
  stanNa_en: "Friday afternoon, 13 Nov 2026 (before the US open and PPI)",
  stanNa: "piątek po południu, 13 lis 2026 (przed sesją w USA i odczytem PPI)",
  naglowek_en: "Markets wait for US PPI at 14:30 (forecast 6.6% y/y). The DAX dips 0.2% after a brief record. US futures edge higher, Nvidia +2% pre-market. The dollar holds at a 19-month high, USD/JPY at 160.",
  naglowek: "Rynki czekają na PPI w USA o 14:30 (prognoza 6,6% r/r). DAX traci 0,2% po chwilowym rekordzie. Kontrakty w USA lekko w górę, Nvidia +2% przed sesją. Dolar na najwyższym od 19 miesięcy poziomie, USD/JPY przy 160.",
  punkty: [
    "Europa bez wyraźnego kierunku: DAX około 26 718 (−0,2%) po chwilowym rekordzie powyżej 26 800; Brenntag +2%, E.ON +1,5% i RWE +0,8% po doniesieniach, że rząd Niemiec chce kupić ich udziały w Urenco; Rheinmetall −2,1%. Euro Stoxx 50 −0,4%, Londyn bez zmian.",
    "Kontrakty w USA lekko w górę przed odczytem PPI: S&P 500 około 7 609, Nasdaq 100 około 28 287. Nvidia zyskuje około 2% przed sesją po czwartkowym spadku związanym z odejściem prezesa Jensena Huanga.",
    "Dziś o 14:30 ceny producentów PPI w USA za październik: prognoza 6,6% r/r wobec 6,3% we wrześniu. Według Trading Economics ceny bazowe mogły rosnąć w historycznie szybkim tempie, co wspierałoby grudniową podwyżkę stóp Fed (rynek wycenia około 85%).",
    "Dolar na najwyższym od kwietnia 2025 poziomie: indeks około 103,3. EUR/USD 1,1048, tuż nad dolną granicą analizy neutralnej (1,1044); GBP/USD 1,3223; USD/JPY 160,0.",
    "Złoto około 3 890 USD (+0,3%), srebro około 50,0 USD, ropa WTI około 88,9 USD, Brent około 96,4 USD. Bitcoin około 69 200 USD po nocnym spadku do 67 555. W ciągu dnia żaden poziom analiz nie został rozstrzygnięty."
  ],
  punkty_en: [
    "Europe lacks direction: the DAX around 26,718 (−0.2%) after a brief record above 26,800; Brenntag +2%, E.ON +1.5% and RWE +0.8% on reports the German government wants to buy their Urenco stakes; Rheinmetall −2.1%. Euro Stoxx 50 −0.4%, London flat.",
    "US futures edge higher ahead of PPI: S&P 500 around 7,609, Nasdaq 100 around 28,287. Nvidia gains about 2% pre-market after Thursday's drop tied to CEO Jensen Huang's departure.",
    "US October producer prices (PPI) are due today at 14:30: the forecast is 6.6% y/y versus 6.3% in September. According to Trading Economics core prices may have risen at a historically fast pace, which would support a December Fed hike (markets price about 85%).",
    "The dollar is at its highest since April 2025: the index around 103.3. EUR/USD 1.1048, just above the neutral analysis's lower bound (1.1044); GBP/USD 1.3223; USD/JPY 160.0.",
    "Gold around $3,890 (+0.3%), silver around $50.0, WTI crude around $88.9, Brent around $96.4. Bitcoin around $69,200 after an overnight drop to $67,555. No analysis level was decided intraday."
  ],
  instrumenty: {
    sp500: { kurs: 7609.0, zmiana: 0.22, tydzien: 3.15, notka: "Kontrakt CFD przed sesją. Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Pre-market CFD quote. Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 28286.83, zmiana: -0.01, tydzien: 4.8, notka: "Kontrakt CFD przed sesją. Analiza neutralna: zakres 27 421–28 830.", notka_en: "Pre-market CFD quote. Neutral analysis: 27,421–28,830 range.", zrodlo: 1 },
    xauusd: { kurs: 3889.6, zmiana: 0.32, tydzien: -4.35, notka: "Analiza neutralna: zakres 3 853–3 999.", notka_en: "Neutral analysis: $3,853–3,999 range.", zrodlo: 0 },
    eurusd: { kurs: 1.1048, zmiana: -0.05, tydzien: -0.85, notka: "Analiza neutralna: zakres 1,1044–1,1170; kurs tuż nad dolną granicą.", notka_en: "Neutral analysis: 1.1044–1.1170 range; price just above the lower bound.", zrodlo: 2 },
    gbpusd: { kurs: 1.3223, zmiana: -0.03, tydzien: -0.94, notka: "Szkic spadkowy: cel 1,3177, unieważnienie 1,3385.", notka_en: "Bearish draft: target 1.3177, invalidation 1.3385.", zrodlo: 2 },
    usdjpy: { kurs: 160.03, zmiana: 0.11, tydzien: 1.0, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 49.98, zmiana: -0.07, tydzien: -3.66, notka: "Szkic spadkowy: cel 48,53, unieważnienie 51,96.", notka_en: "Bearish draft: target $48.53, invalidation $51.96.", zrodlo: 0 },
    usdpln: { kurs: 3.9815, zmiana: 0.0, tydzien: 1.03, notka: "Zamknięcie z czwartku. Analiza neutralna: zakres 3,9308–3,9833.", notka_en: "Thursday close. Neutral analysis: 3.9308–3.9833 range.", zrodlo: 3 },
    wti: { kurs: 88.86, zmiana: 0.14, tydzien: -2.17, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88, unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88, invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26717.7, zmiana: -0.2, tydzien: 3.48, notka: "W trakcie sesji (CFD). Szkic wzrostowy: cel 27 011, unieważnienie 26 492.", notka_en: "During the session (CFD). Bullish draft: target 27,011, invalidation 26,492.", zrodlo: 3 },
    btcusd: { kurs: 69196, zmiana: -3.05, tydzien: -8.63, notka: "Gemini. Szkic spadkowy: cel 64 112, unieważnienie 72 644.", notka_en: "Gemini. Bearish draft: target $64,112, invalidation $72,644.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Pt 13 lis", wydarzenia: ["USA: ceny producentów PPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa (13 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude (13 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Stock Futures Inch Higher (13 lis 2026)", nazwa_en: "Trading Economics: US Stock Futures Inch Higher (13 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Holds at 19-Month High (13 lis 2026)", nazwa_en: "Trading Economics: Dollar Holds at 19-Month High (13 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: DAX (13 lis 2026); USD/PLN: zamknięcie CNBC z 12 lis", nazwa_en: "Trading Economics: DAX (13 Nov 2026); USD/PLN: CNBC close on 12 Nov", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (13 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (13 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: ceny producentów PPI w USA, termin i prognoza", nazwa_en: "Trading Economics: US PPI, release date and forecast", url: "https://tradingeconomics.com/united-states/producer-prices-change" }
  ]
};
