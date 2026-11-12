// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-12T08:00:00+01:00",
  stanNa_en: "Thursday morning, 12 Nov 2026 (before the European and London open)",
  stanNa: "czwartek rano, 12 lis 2026 (przed sesją w Europie i Londynie)",
  naglowek_en: "Nvidia falls up to 10% after hours on reports its board may remove CEO Jensen Huang; Nasdaq 100 futures −0.9%. The dollar is near 103, its highest since April 2025; EUR/USD 1.108. Gold stays below $4,000.",
  naglowek: "Nvidia traci po sesji nawet 10% po doniesieniach, że rada może odwołać prezesa Jensena Huanga; kontrakty na Nasdaq 100 −0,9%. Dolar blisko 103, najwyżej od kwietnia 2025; EUR/USD 1,108. Złoto pozostaje poniżej 4 000 USD.",
  punkty: [
    "Nvidia ciąży rynkom: po sesji akcje traciły nawet 10% po doniesieniach New York Times o prezesie Jensenie Huangu i Wall Street Journal, że rada nadzorcza przygotowuje jego odwołanie. Kontrakty: Nasdaq 100 −0,9% (CFD około 28 086), S&P 500 −0,4% (około 7 581).",
    "Azja mieszana: Nikkei według Trading Economics czwartą sesję z rzędu w górę dzięki Kioxii, SoftBankowi i Tokyo Electron, choć notowania CFD pokazują spadek; Hongkong −1,1%, Chiny −0,6%, Australia −0,2%, Indie +0,1%.",
    "Dolar tuż pod 103 punktami, najwyżej od kwietnia 2025, po wzroście o ponad 1% w dwa dni. EUR/USD 1,1078, najniżej w danych wykresu od maja; GBP/USD 1,3258; USD/JPY 159,8; USD/PLN zamknął środę na 3,9768 (+1,1%). Rynek wycenia około 91% szans na grudniową podwyżkę stóp Fed.",
    "Złoto poniżej 4 000 USD po dwóch dniach spadków: około 3 974 (−0,3%); srebro około 51,5 USD, tuż nad unieważnieniem szkicu wzrostowego (51,38). Ropa WTI około 86,3 USD, Brent około 92,5 USD. Bitcoin około 73 550 USD.",
    "Rozliczenia: trafione USD/JPY, GBP/USD i ropa WTI (spadek do 83,88 we wtorek); nietrafione złoto, USD/PLN oraz analizy neutralne Nasdaq 100 i EUR/USD. Skuteczność 24 z 54. Siedem nowych szkiców. W piątek o 14:30 ceny producentów PPI w USA."
  ],
  punkty_en: [
    "Nvidia weighs on markets: shares fell as much as 10% after hours on a New York Times report about CEO Jensen Huang and a Wall Street Journal report that the board is preparing to remove him. Futures: Nasdaq 100 −0.9% (CFD around 28,086), S&P 500 −0.4% (around 7,581).",
    "Asia is mixed: according to Trading Economics the Nikkei rose for a fourth session on Kioxia, SoftBank and Tokyo Electron, though CFD quotes show a drop; Hong Kong −1.1%, China −0.6%, Australia −0.2%, India +0.1%.",
    "The dollar is just below 103, the highest since April 2025, after rising more than 1% in two days. EUR/USD 1.1078, the lowest in the chart data since May; GBP/USD 1.3258; USD/JPY 159.8; USD/PLN closed Wednesday at 3.9768 (+1.1%). Markets price about 91% odds of a December Fed hike.",
    "Gold is below $4,000 after two days of losses: around $3,974 (−0.3%); silver around $51.5, just above the bullish draft's invalidation ($51.38). WTI crude around $86.3, Brent around $92.5. Bitcoin around $73,550.",
    "Settlements: USD/JPY, GBP/USD and WTI crude (drop to $83.88 on Tuesday) hit; gold, USD/PLN and the neutral Nasdaq 100 and EUR/USD analyses missed. Hit rate 24 of 54. Seven new drafts. US producer prices (PPI) on Friday at 14:30."
  ],
  instrumenty: {
    sp500: { kurs: 7580.6, zmiana: -0.51, tydzien: 3.09, notka: "Kontrakt CFD przed sesją. Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Pre-market CFD quote. Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 28085.83, zmiana: -1.02, tydzien: 5.47, notka: "Kontrakt CFD przed sesją. Nowa analiza neutralna: zakres 27 421–28 830.", notka_en: "Pre-market CFD quote. New neutral analysis: 27,421–28,830 range.", zrodlo: 1 },
    xauusd: { kurs: 3974.14, zmiana: -0.33, tydzien: -2.8, notka: "Nowy szkic spadkowy: cel 3 886, unieważnienie 4 066.", notka_en: "New bearish draft: target $3,886, invalidation $4,066.", zrodlo: 0 },
    eurusd: { kurs: 1.1078, zmiana: -0.1, tydzien: -1.25, notka: "Nowy szkic spadkowy: cel 1,1065, unieważnienie 1,1170.", notka_en: "New bearish draft: target 1.1065, invalidation 1.1170.", zrodlo: 2 },
    gbpusd: { kurs: 1.3258, zmiana: -0.17, tydzien: -1.42, notka: "Nowy szkic spadkowy: cel 1,3177, unieważnienie 1,3385.", notka_en: "New bearish draft: target 1.3177, invalidation 1.3385.", zrodlo: 2 },
    usdjpy: { kurs: 159.77, zmiana: 0.0, tydzien: 1.34, notka: "Nowy szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "New bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 51.46, zmiana: -0.39, tydzien: -0.62, notka: "Szkic wzrostowy: cel 54,73, unieważnienie 51,38; kurs tuż nad unieważnieniem.", notka_en: "Bullish draft: target $54.73, invalidation $51.38; price just above invalidation.", zrodlo: 0 },
    usdpln: { kurs: 3.9768, zmiana: 0.0, tydzien: 1.46, notka: "Zamknięcie ze środy. Nowa analiza neutralna: zakres 3,9308–3,9833.", notka_en: "Wednesday close. New neutral analysis: 3.9308–3.9833 range.", zrodlo: 3 },
    wti: { kurs: 86.27, zmiana: -0.3, tydzien: -4.7, notka: "Najbliższy kontrakt. Nowy szkic spadkowy: cel 83,88, unieważnienie 92,53.", notka_en: "Front-month contract. New bearish draft: target $83.88, invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26662.8, zmiana: 0.0, tydzien: 1.28, notka: "Zamknięcie ze środy, rekordowe. Szkic wzrostowy: cel 26 693, unieważnienie 25 793.", notka_en: "Wednesday's record close. Bullish draft: target 26,693, invalidation 25,793.", zrodlo: 3 },
    btcusd: { kurs: 73547.4, zmiana: -0.51, tydzien: -3.19, notka: "Coinbase. Analiza neutralna: zakres 72 644–76 306.", notka_en: "Coinbase. Neutral analysis: $72,644–76,306 range.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Pt 13 lis", wydarzenia: ["USA: ceny producentów PPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Holds Decline on Hawkish Fed View; srebro, ropa (12 lis 2026)", nazwa_en: "Trading Economics: Gold Holds Decline on Hawkish Fed View; silver, crude (12 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Stock Futures Slide as Nvidia Drags (12 lis 2026)", nazwa_en: "Trading Economics: US Stock Futures Slide as Nvidia Drags (12 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Holds Gains on Hawkish Fed Bets (12 lis 2026)", nazwa_en: "Trading Economics: Dollar Holds Gains on Hawkish Fed Bets (12 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "CNBC: świece dzienne (zamknięcia DAX i USD/PLN z 11 lis 2026)", nazwa_en: "CNBC: daily candles (DAX and USD/PLN closes on 11 Nov 2026)", url: "https://www.cnbc.com/quotes/.GDAXI" },
    { nazwa: "Coinbase: świeca dzienna BTC/USD (12 lis 2026)", nazwa_en: "Coinbase: BTC/USD daily candle (12 Nov 2026)", url: "https://www.coinbase.com/price/bitcoin" },
    { nazwa: "Trading Economics: giełda w Japonii i Azji (12 lis 2026)", nazwa_en: "Trading Economics: Japan and Asian stock markets (12 Nov 2026)", url: "https://tradingeconomics.com/japan/stock-market" },
    { nazwa: "Trading Economics: ceny producentów PPI w USA, termin i prognoza", nazwa_en: "Trading Economics: US PPI, release date and forecast", url: "https://tradingeconomics.com/united-states/producer-prices-change" }
  ]
};
