// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-10T22:30:00+01:00",
  stanNa_en: "Tuesday evening, 10 Nov 2026 (after the US close, before Asia)",
  stanNa: "wtorek wieczorem, 10 lis 2026 (po sesji w USA, przed Azją)",
  naglowek_en: "US inflation above forecasts: CPI +0.4% m/m, core +0.3%. The Fed's Waller sounds hawkish and a bigger December hike enters the debate. The dollar gains 0.6%, gold falls 2.6% to around $4,032. S&P 500 −0.3%, Nasdaq 100 −0.6%, Nvidia −5.5%.",
  naglowek: "Inflacja w USA powyżej prognoz: CPI +0,4% m/m, bazowa +0,3%. Waller z Fed mówi jastrzębio, a rynek bierze pod uwagę większą podwyżkę w grudniu. Dolar zyskuje 0,6%, złoto traci 2,6%, do około 4 032 USD. S&P 500 −0,3%, Nasdaq 100 −0,6%, Nvidia −5,5%.",
  punkty: [
    "Inflacja CPI w USA za październik wyższa od prognoz: +0,4% m/m wobec 0,3%, bazowa +0,3% m/m wobec 0,2%. BLS nie podał zmian rocznych, bo dane z października 2025 nie zostały zebrane w czasie zamknięcia rządu. Członek zarządu Fed Christopher Waller mówił jastrzębio; rynek bierze pod uwagę nawet podwyżkę o 0,5 pkt proc. w grudniu.",
    "Wall Street traci: S&P 500 około 7 530 (−0,3%), Nasdaq 100 około 27 750 (−0,6%), Dow Jones około 52 284 (−0,2%). Nvidia spada o kolejne 5,5%, Microsoft o 2,2%, Oracle o 1,5%; inwestorzy pytają, czy wydatki na AI są do utrzymania. Tanieją też obligacje.",
    "Europa przed danymi: DAX zamknął się około 26 409 (+0,5%) po rekordzie w ciągu dnia (26 634); Henkel +3,7%, Zalando +3,3%, Daimler Truck +2,8%; Siemens Energy −3,8%, Porsche SE −3,6%, Volkswagen −2,5%.",
    "Dolar zyskuje po danych: indeks około 102,3 (+0,6%), EUR/USD 1,1163, GBP/USD 1,3342, USD/JPY 158,8. Złoto mocno tanieje: około 4 032 USD (−2,6%), tuż nad unieważnieniem szkicu wzrostowego (4 031); srebro około 51,5 USD (−3,5%), tuż nad 51,38. Ropa WTI około 86,4 USD, Brent około 92,0 USD.",
    "Bitcoin spadł w ciągu doby do 72 680 USD, poniżej celu szkicu spadkowego (73 005), i jest przy 73 850. Rozliczenia rano po świecach; o złocie i srebrze zdecydują zamknięcia dnia. W tym tygodniu jeszcze ceny producentów PPI w USA."
  ],
  punkty_en: [
    "US October CPI inflation came in above forecasts: +0.4% m/m versus 0.3%, core +0.3% m/m versus 0.2%. The BLS did not publish annual changes, because October 2025 data were not collected during the government shutdown. Fed Governor Christopher Waller sounded hawkish; markets now consider even a 0.5-point hike in December.",
    "Wall Street falls: S&P 500 around 7,530 (−0.3%), Nasdaq 100 around 27,750 (−0.6%), Dow Jones around 52,284 (−0.2%). Nvidia drops another 5.5%, Microsoft 2.2%, Oracle 1.5%; investors question whether AI spending is sustainable. Bonds also sell off.",
    "Europe before the data: the DAX closed around 26,409 (+0.5%) after an intraday record (26,634); Henkel +3.7%, Zalando +3.3%, Daimler Truck +2.8%; Siemens Energy −3.8%, Porsche SE −3.6%, Volkswagen −2.5%.",
    "The dollar gains after the data: the index around 102.3 (+0.6%), EUR/USD 1.1163, GBP/USD 1.3342, USD/JPY 158.8. Gold falls sharply: around $4,032 (−2.6%), just above the bullish draft's invalidation ($4,031); silver around $51.5 (−3.5%), just above $51.38. WTI crude around $86.4, Brent around $92.0.",
    "Bitcoin fell to $72,680 within the day, below the bearish draft's target ($73,005), and is near $73,850. Settlements in the morning after the candles; daily closes will decide gold and silver. US producer prices (PPI) are still due this week."
  ],
  instrumenty: {
    sp500: { kurs: 7529.5, zmiana: -0.27, tydzien: -0.52, notka: "Zamknięcie (CFD). Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Close (CFD). Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 27749.81, zmiana: -0.57, tydzien: -1.53, notka: "Zamknięcie (CFD). Analiza neutralna: zakres 26 606–27 967.", notka_en: "Close (CFD). Neutral analysis: 26,606–27,967 range.", zrodlo: 1 },
    xauusd: { kurs: 4031.87, zmiana: -2.63, tydzien: 2.59, notka: "Szkic wzrostowy: cel 4 206, unieważnienie 4 031; kurs tuż nad unieważnieniem, rozliczenie rano.", notka_en: "Bullish draft: target $4,206, invalidation $4,031; price just above invalidation, settlement in the morning.", zrodlo: 0 },
    eurusd: { kurs: 1.1163, zmiana: -0.53, tydzien: -0.27, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3342, zmiana: -0.73, tydzien: -0.51, notka: "Szkic spadkowy: cel 1,3269, unieważnienie 1,3463.", notka_en: "Bearish draft: target 1.3269, invalidation 1.3463.", zrodlo: 2 },
    usdjpy: { kurs: 158.78, zmiana: 0.56, tydzien: 0.08, notka: "Analiza neutralna: zakres 156,75–159,05, termin około 11 lis.", notka_en: "Neutral analysis: 156.75–159.05 range, horizon around 11 Nov.", zrodlo: 2 },
    xagusd: { kurs: 51.53, zmiana: -3.49, tydzien: 3.49, notka: "Szkic wzrostowy: cel 54,73, unieważnienie 51,38; kurs tuż nad unieważnieniem.", notka_en: "Bullish draft: target $54.73, invalidation $51.38; price just above invalidation.", zrodlo: 0 },
    usdpln: { kurs: 3.9064, zmiana: 0.0, tydzien: -0.84, notka: "Zamknięcie z poniedziałku. Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Monday close. Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 3 },
    wti: { kurs: 86.38, zmiana: -0.54, tydzien: -10.11, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax: { kurs: 26409, zmiana: 0.54, tydzien: 2.1, notka: "Zamknięcie sesji. Szkic wzrostowy: cel 26 693, unieważnienie 25 793; w ciągu dnia rekord 26 634.", notka_en: "Session close. Bullish draft: target 26,693, invalidation 25,793; intraday record 26,634.", zrodlo: 4 },
    btcusd: { kurs: 73852, zmiana: -1.87, tydzien: -4.51, notka: "Gemini. Szkic spadkowy: cel 73 005; minimum doby 72 680, rozliczenie rano.", notka_en: "Gemini. Bearish draft: target $73,005; 24-hour low $72,680, settlement in the morning.", zrodlo: 5 }
  },
  kalendarz: [
    { dzien: "Ten tydzień", wydarzenia: ["USA: ceny producentów PPI"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Slumps on Hotter Inflation and Hawkish Fed Comments; srebro, ropa (10 lis 2026)", nazwa_en: "Trading Economics: Gold Slumps on Hotter Inflation and Hawkish Fed Comments; silver, crude (10 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA, zamknięcie 10 lis 2026", nazwa_en: "Trading Economics: US stock market, 10 Nov 2026 close", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Extends Gains on Hotter CPI, Hawkish Fed Comments (10 lis 2026)", nazwa_en: "Trading Economics: Dollar Extends Gains on Hotter CPI, Hawkish Fed Comments (10 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "CNBC: zamknięcie USD/PLN z 9 lis 2026 (świece dzienne)", nazwa_en: "CNBC: USD/PLN close on 9 Nov 2026 (daily candles)", url: "https://www.cnbc.com/quotes/PLN=" },
    { nazwa: "Trading Economics: DAX, zamknięcie 10 lis 2026", nazwa_en: "Trading Economics: DAX, 10 Nov 2026 close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (10 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (10 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: inflacja CPI w USA, październik 2026", nazwa_en: "Trading Economics: US CPI inflation, October 2026", url: "https://tradingeconomics.com/united-states/inflation-cpi" }
  ]
};
