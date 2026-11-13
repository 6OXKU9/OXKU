// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-13T22:30:00+01:00",
  stanNa_en: "Friday evening, 13 Nov 2026 (after the US close)",
  stanNa: "piątek wieczorem, 13 lis 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "Tech drags Wall Street at week's end: Nasdaq 100 −1.2%, S&P 500 −0.4% as Nvidia slides further. US PPI 6.5% y/y, the highest since 2022, keeps a December Fed hike in play. The DAX closes its best week since June (+3.6%).",
  naglowek: "Spółki technologiczne ciągną Wall Street w dół na koniec tygodnia: Nasdaq 100 −1,2%, S&P 500 −0,4%, Nvidia dalej traci. PPI w USA 6,5% r/r, najwyżej od 2022 roku, podtrzymuje grudniową podwyżkę Fed. DAX kończy najlepszy tydzień od czerwca (+3,6%).",
  punkty: [
    "Wall Street kończy tydzień spadkiem spółek technologicznych: S&P 500 7 535 (−0,4%), Nasdaq 100 27 776 (−1,2%), Dow bez zmian. Nvidia traci kolejne 2–3% po rezygnacji prezesa Jensena Huanga; AMD i Intel ponad −3%. W skali tygodnia S&P 500 i Nasdaq zyskały około 2%.",
    "PPI w USA za październik: +0,3% m/m wobec prognozy 0,4%, ale 6,5% r/r to najwyższy odczyt od listopada 2022. Rynek nadal wycenia grudniową podwyżkę stóp Fed (około 89% według Trading Economics).",
    "DAX zamknął się około 26 745 (−0,1%), ale tydzień przyniósł +3,6%, najlepszy wynik od czerwca. Infineon −4%, E.ON i RWE w górę po doniesieniach o zakupie udziałów w Urenco przez rząd.",
    "Dolar mocniejszy: indeks około 103,4. EUR/USD 1,1024 spadł poniżej dolnej granicy analizy neutralnej (1,1044), co rano sprawdzimy na świecy dziennej. GBP/USD 1,3216, USD/JPY 159,7.",
    "Złoto około 3 878 USD bez zmian, srebro 48,78 USD (−2,5%) blisko celu szkicu spadkowego (48,53), WTI 89,1 USD, Brent 96,3 USD. Bitcoin około 68 300 USD (−4%). W nocy: PKB Japonii za III kwartał (pon 0:50) i sprzedaż detaliczna w Chinach (pon 3:00)."
  ],
  punkty_en: [
    "Wall Street ends the week with tech under pressure: S&P 500 7,535 (−0.4%), Nasdaq 100 27,776 (−1.2%), the Dow flat. Nvidia loses another 2–3% after CEO Jensen Huang's resignation; AMD and Intel down more than 3%. On the week the S&P 500 and Nasdaq gained about 2%.",
    "US October PPI: +0.3% m/m versus a 0.4% forecast, but 6.5% y/y is the highest since November 2022. Markets still price a December Fed hike (about 89% according to Trading Economics).",
    "The DAX closed around 26,745 (−0.1%), but the week brought +3.6%, its best since June. Infineon −4%; E.ON and RWE rose on reports the government will buy their Urenco stakes.",
    "A firmer dollar: the index around 103.4. EUR/USD 1.1024 fell below the neutral analysis's lower bound (1.1044), to be checked on the daily candle in the morning. GBP/USD 1.3216, USD/JPY 159.7.",
    "Gold flat around $3,878, silver $48.78 (−2.5%) close to the bearish draft's target ($48.53), WTI $89.1, Brent $96.3. Bitcoin around $68,300 (−4%). Overnight: Japan Q3 GDP (Mon 0:50) and China retail sales (Mon 3:00)."
  ],
  instrumenty: {
    sp500: { kurs: 7535.38, zmiana: -0.4, tydzien: 2.15, notka: "Zamknięcie (Trading Economics; zmiana dzienna według TE). Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Close (Trading Economics; daily change per TE). Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 27776.12, zmiana: -1.22, tydzien: 2.91, notka: "Zamknięcie (Trading Economics; zmiana dzienna według TE). Analiza neutralna: zakres 27 421–28 830.", notka_en: "Close (Trading Economics; daily change per TE). Neutral analysis: 27,421–28,830 range.", zrodlo: 1 },
    xauusd: { kurs: 3878.19, zmiana: 0.03, tydzien: -4.63, notka: "Analiza neutralna: zakres 3 853–3 999.", notka_en: "Neutral analysis: $3,853–3,999 range.", zrodlo: 0 },
    eurusd: { kurs: 1.1024, zmiana: -0.26, tydzien: -1.07, notka: "Kurs poniżej dolnej granicy analizy neutralnej (1,1044); rozliczenie rano po świecy dziennej.", notka_en: "Price below the neutral analysis's lower bound (1.1044); settled in the morning from the daily candle.", zrodlo: 2 },
    gbpusd: { kurs: 1.3216, zmiana: -0.08, tydzien: -1.0, notka: "Szkic spadkowy: cel 1,3177, unieważnienie 1,3385.", notka_en: "Bearish draft: target 1.3177, invalidation 1.3385.", zrodlo: 2 },
    usdjpy: { kurs: 159.73, zmiana: -0.08, tydzien: 0.81, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 48.78, zmiana: -2.47, tydzien: -5.98, notka: "Szkic spadkowy: cel 48,53, unieważnienie 51,96; kurs blisko celu.", notka_en: "Bearish draft: target $48.53, invalidation $51.96; price close to the target.", zrodlo: 0 },
    usdpln: { kurs: 3.9815, zmiana: 0.0, tydzien: 1.03, notka: "Zamknięcie z 12 lis (CNBC), brak świeższego notowania. Analiza neutralna: zakres 3,9308–3,9833.", notka_en: "Close from 12 Nov (CNBC), no fresher quote. Neutral analysis: 3.9308–3.9833 range.", zrodlo: 3 },
    wti: { kurs: 89.11, zmiana: 0.42, tydzien: -1.89, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88, unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88, invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26745, zmiana: -0.1, tydzien: 3.58, notka: "Zamknięcie piątkowej sesji. Szkic wzrostowy: cel 27 011, unieważnienie 26 492.", notka_en: "Friday close. Bullish draft: target 27,011, invalidation 26,492.", zrodlo: 3 },
    btcusd: { kurs: 68345, zmiana: -4.24, tydzien: -9.75, notka: "Gemini. Szkic spadkowy: cel 64 112, unieważnienie 72 644.", notka_en: "Gemini. Bearish draft: target $64,112, invalidation $72,644.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Pon 16 lis", wydarzenia: ["Japonia: PKB za III kw., wstępny (0:50)", "Chiny: sprzedaż detaliczna (paź) (3:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa (13 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude (13 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: zamknięcie Wall Street (13 lis 2026); TipRanks: U.S. Stocks Finish in the Red as the AI Trade Falters", nazwa_en: "Trading Economics: Wall Street close (13 Nov 2026); TipRanks: U.S. Stocks Finish in the Red as the AI Trade Falters", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar i kursy walut (13 lis 2026)", nazwa_en: "Trading Economics: dollar and FX rates (13 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: DAX (13 lis 2026); USD/PLN: zamknięcie CNBC z 12 lis", nazwa_en: "Trading Economics: DAX (13 Nov 2026); USD/PLN: CNBC close on 12 Nov", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (13 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (13 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "TipRanks: U.S. Stocks Finish in the Red as the AI Trade Falters (PPI, 13 lis 2026)", nazwa_en: "TipRanks: U.S. Stocks Finish in the Red as the AI Trade Falters (PPI, 13 Nov 2026)", url: "https://www.tipranks.com/news/u-s-stocks-finish-in-the-red-as-the-ai-trade-falters" },
    { nazwa: "Trading Economics: PKB Japonii, termin i prognoza", nazwa_en: "Trading Economics: Japan GDP, release date and forecast", url: "https://tradingeconomics.com/japan/gdp-growth" },
    { nazwa: "Trading Economics: sprzedaż detaliczna w Chinach, termin i prognoza", nazwa_en: "Trading Economics: China retail sales, release date and forecast", url: "https://tradingeconomics.com/china/retail-sales-annual" }
  ]
};
