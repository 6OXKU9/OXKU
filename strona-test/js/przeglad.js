// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-04T22:40:00+01:00",
  stanNa_en: "Wednesday evening, 4 Nov 2026 (after the US close, before Asia)",
  stanNa: "środa wieczorem, 4 lis 2026 (po sesji w USA, przed Azją)",
  naglowek_en: "A post-election rally: the Dow +3%, S&P 500 +1.8%, DAX +2.2% near its record. WTI crashes 7.8% to $88.6 on hopes of de-escalation with Iran. Gold +3.4% to $4,065, silver +5%. The dollar is at a five-week low. Several of our analyses are near or past their levels; settlements follow in the morning.",
  naglowek: "Rajd po wyborach: Dow Jones +3%, S&P 500 +1,8%, DAX +2,2% blisko rekordu. WTI traci 7,8% do 88,6 USD na nadziejach na deeskalację z Iranem. Złoto +3,4% do 4 065 USD, srebro +5%. Dolar najsłabszy od pięciu tygodni. Kilka naszych analiz jest przy lub za swoimi poziomami; rozliczenia rano.",
  punkty: [
    "Wall Street na koniec dnia: Dow Jones około 53 440 (+3,1%), S&P 500 około 7 703 (+1,8%), Nasdaq 100 około 28 478 (+1,1%). Prowadziły banki (JPMorgan +4,2%), Microsoft +6,7% po wynikach; spółki chipowe traciły na obawach przed regulacją AI. Rynek uznał wygraną Demokratów w obu izbach Kongresu za mniejsze ryzyko fiskalne.",
    "Dane z USA: ADP 86 tys. nowych miejsc pracy (prognoza 67 tys.), ISM usługi 54,5 (prognoza 54,8, najniżej od 3 miesięcy), zapasy ropy −0,87 mln baryłek. Rynek wycenia 77% szans na grudniową podwyżkę stóp Fed wobec 84% tydzień temu.",
    "Ropa: WTI około 88,6 USD (−7,8%), Brent około 95,1 USD (−8,2%). Trump zapowiedział brak natychmiastowych nowych uderzeń na Iran, a eksport z Zatoki rośnie. Waluty: EUR/USD 1,1230, GBP/USD 1,3472, USD/JPY 158,4, USD/PLN 3,9076 (−0,8%), indeks dolara około 101,5.",
    "Metale: złoto około 4 065 USD (+3,4%), najmocniejszy dzień od połowy sierpnia; srebro około 52,3 USD (+5,1%), tuż pod unieważnieniem porannego szkicu (52,50). DAX zamknął się na 26 438 (+2,2%); dodaliśmy nową analizę wzrostową z celem w rekordzie 26 628.",
    "Do rozliczenia rano po świecach dziennych: zamknięcia złota nad 4 000, Nasdaq 100 nad 28 300, WTI pod 95 i USD/PLN pod 3,92 oznaczałyby nietrafione analizy; S&P 500 jest przy granicy 7 700. W nocy z Azji: bilans handlowy Australii i PMI usług Japonii (1:30). Jutro BoE (13:00), wnioski o zasiłek w USA (14:30)."
  ],
  punkty_en: [
    "Wall Street at the close: Dow Jones around 53,440 (+3.1%), S&P 500 around 7,703 (+1.8%), Nasdaq 100 around 28,478 (+1.1%). Banks led (JPMorgan +4.2%), Microsoft +6.7% after results; chipmakers fell on fears of AI regulation. Markets read the Democrats' win in both chambers of Congress as lower fiscal risk.",
    "US data: ADP 86k new jobs (forecast 67k), ISM services 54.5 (forecast 54.8, a 3-month low), crude stocks −0.87m barrels. Markets price a 77% chance of a December Fed hike versus 84% a week ago.",
    "Oil: WTI around $88.6 (−7.8%), Brent around $95.1 (−8.2%). Trump said there are no immediate plans for new strikes on Iran, and Gulf exports are rising. Currencies: EUR/USD 1.1230, GBP/USD 1.3472, USD/JPY 158.4, USD/PLN 3.9076 (−0.8%), dollar index around 101.5.",
    "Metals: gold around $4,065 (+3.4%), the strongest day since mid-August; silver around $52.3 (+5.1%), just below the morning draft's invalidation ($52.50). The DAX closed at 26,438 (+2.2%); we added a new bullish analysis targeting the 26,628 record.",
    "To settle in the morning with daily candles: closes of gold above 4,000, the Nasdaq 100 above 28,300, WTI below 95 and USD/PLN below 3.92 would mean missed analyses; the S&P 500 is right at the 7,700 line. Overnight in Asia: Australia's trade balance and Japan's services PMI (1:30). Tomorrow the BoE (13:00) and US jobless claims (14:30)."
  ],
  instrumenty: {
    sp500:  { kurs: 7702.76, zmiana: 1.77, tydzien: -0.53, notka: "Notowanie CFD. Analiza spadkowa: cel 7 500, unieważnienie 7 700; kurs na granicy unieważnienia.", notka_en: "CFD quote. Bearish analysis: target 7,500, invalidation 7,700; price right at invalidation.", zrodlo: 1 },
    nasdaq: { kurs: 28478.27, zmiana: 1.06, tydzien: -4.48, notka: "Notowanie CFD. Analiza spadkowa: unieważnienie 28 300; kurs nad tym poziomem, rozliczenie rano.", notka_en: "CFD quote. Bearish analysis: invalidation 28,300; price above it, settlement in the morning.", zrodlo: 1 },
    xauusd: { kurs: 4064.93, zmiana: 3.43, tydzien: -0.05, notka: "Analiza spadkowa: unieważnienie 4 000; kurs nad tym poziomem, rozliczenie rano.", notka_en: "Bearish analysis: invalidation $4,000; price above it, settlement in the morning.", zrodlo: 0 },
    eurusd: { kurs: 1.1230, zmiana: 0.33, tydzien: 0.70, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3472, zmiana: 0.45, tydzien: 1.10, notka: "Analiza wzrostowa: cel 1,3489, unieważnienie 1,3306. Jutro decyzja BoE.", notka_en: "Bullish analysis: target 1.3489, invalidation 1.3306. BoE decides tomorrow.", zrodlo: 2 },
    usdjpy: { kurs: 158.44, zmiana: -0.14, tydzien: 0.39, notka: "Analiza neutralna: zakres 156,75–159,05.", notka_en: "Neutral analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 52.32, zmiana: 5.07, tydzien: -3.03, notka: "Szkic spadkowy: cel 48,29, unieważnienie 52,50; kurs tuż pod unieważnieniem.", notka_en: "Bearish draft: target $48.29, invalidation $52.50; price just below invalidation.", zrodlo: 0 },
    usdpln: { kurs: 3.9076, zmiana: -0.81, tydzien: -0.87, notka: "Analiza wzrostowa: wsparcie 3,92; kurs poniżej, rozliczenie rano.", notka_en: "Bullish analysis: support 3.92; price below it, settlement in the morning.", zrodlo: 3 },
    wti:    { kurs: 88.57, zmiana: -7.83, tydzien: -13.83, notka: "Kontrakt grudniowy. Analiza wzrostowa: wsparcie 95; kurs daleko poniżej, rozliczenie rano.", notka_en: "December contract. Bullish analysis: support $95; price far below it, settlement in the morning.", zrodlo: 4 },
    dax:    { kurs: 26438, zmiana: 2.22, tydzien: 2.86, notka: "Zamknięcie sesji. Nowa analiza wzrostowa: cel 26 628, unieważnienie 26 164.", notka_en: "Session close. New bullish analysis: target 26,628, invalidation 26,164.", zrodlo: 5 },
    btcusd: { kurs: 77870, zmiana: 0.69, tydzien: -4.16, notka: "Bieżąca świeca dzienna (Coinbase). Analiza neutralna: zakres 75 800–80 000.", notka_en: "Current daily candle (Coinbase). Neutral analysis: $75,800–80,000 range.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Czw 5 lis", wydarzenia: ["Azja w nocy: bilans handlowy Australii, PMI usług Japonii (1:30)", "BoE: decyzja w sprawie stóp (13:00)", "USA: wnioski o zasiłek (14:30)"] },
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa, 4 lis 2026", nazwa_en: "Trading Economics: gold, silver, crude, 4 Nov 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA, zamknięcie 4 lis 2026", nazwa_en: "Trading Economics: US stock market, 4 Nov 2026 close", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar i główne pary walutowe, 4 lis 2026", nazwa_en: "Trading Economics: dollar and major currency pairs, 4 Nov 2026", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: złoty (USD/PLN), 4 lis 2026", nazwa_en: "Trading Economics: zloty (USD/PLN), 4 Nov 2026", url: "https://tradingeconomics.com/poland/currency" },
    { nazwa: "Trading Economics: ropa WTI, 4 lis 2026", nazwa_en: "Trading Economics: WTI crude, 4 Nov 2026", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: DAX Joins Global Rally (4 lis 2026)", nazwa_en: "Trading Economics: DAX Joins Global Rally (4 Nov 2026)", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Coinbase: świece dzienne BTC/USD (dane wykresów na stronie)", nazwa_en: "Coinbase: BTC/USD daily candles (site chart data)", url: "https://www.coinbase.com/price/bitcoin" },
    { nazwa: "Investing.com / Reuters: ADP, 86 000 miejsc pracy w październiku (4 lis 2026)", nazwa_en: "Investing.com / Reuters: ADP, 86,000 jobs in October (4 Nov 2026)", url: "https://www.investing.com/news/economic-indicators/us-private-payrolls-rise-by-86000-in-october-adp-says-4999417" },
    { nazwa: "Trading Economics: ISM usługi (paź 2026)", nazwa_en: "Trading Economics: ISM services (Oct 2026)", url: "https://tradingeconomics.com/united-states/non-manufacturing-pmi" },
    { nazwa: "Trading Economics: kalendarz ekonomiczny 5 lis 2026", nazwa_en: "Trading Economics: economic calendar, 5 Nov 2026", url: "https://tradingeconomics.com/calendar" }
  ]
};
