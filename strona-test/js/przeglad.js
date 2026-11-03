// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-03T22:40:00+01:00",
  stanNa_en: "Tuesday evening, 3 Nov 2026 (after the US close, before Asia)",
  stanNa: "wtorek wieczorem, 3 lis 2026 (po sesji w USA, przed Azją)",
  naglowek_en: "Chip stocks lift the Nasdaq 100 by 0.6%, while Apple weighs on the Dow. US job openings jump to 7.52 million. Silver loses almost 2% and gold 0.6%. Americans are voting: the first polls close at 1:00 Warsaw time.",
  naglowek: "Spółki chipowe podnoszą Nasdaq 100 o 0,6%, a Apple ciąży Dow Jones. Wolnych miejsc pracy w USA przybyło do 7,52 mln. Srebro traci prawie 2%, złoto 0,6%. Amerykanie głosują: pierwsze lokale zamykają się o 1:00 czasu polskiego.",
  punkty: [
    "Wall Street na koniec dnia: S&P 500 około 7 569 (+0,4%), Nasdaq 100 około 28 165 (+0,6%), Dow Jones około 51 717 (−0,5%) przez spadek Apple po prognozie marży. Po sesji wyniki AMD; rynek opcji wycenia ruch rzędu 8%.",
    "JOLTS: 7,52 mln wolnych miejsc pracy we wrześniu wobec 7,19 mln miesiąc wcześniej i o 420 tys. powyżej prognoz. Rynek pracy jest mocniejszy, niż zakładano, przed piątkowym raportem.",
    "Dolar lekko zyskuje do jena: USD/JPY 158,7 (+0,5%), blisko górnej granicy analizy (159,05). EUR/USD 1,1191, GBP/USD 1,3413, USD/PLN 3,9435.",
    "Surowce: srebro około 49,7 USD (−1,9%), złoto około 3 922 USD (−0,6%), WTI około 96,8 USD, Brent około 104,4 USD. Bitcoin około 77 800 USD.",
    "W nocy: wyniki wyborów w USA (pierwsze lokale zamykają się o 1:00), o 22:45 dane z rynku pracy Nowej Zelandii. Jutro ADP (14:15), ISM usługi (16:00) i zapasy ropy EIA (16:30). Dzisiejsze świece dzienne źródło opublikuje w nocy, więc rozliczenia sprawdzimy rano."
  ],
  punkty_en: [
    "Wall Street at the close: S&P 500 around 7,569 (+0.4%), Nasdaq 100 around 28,165 (+0.6%), Dow Jones around 51,717 (−0.5%) on Apple's drop after its margin guidance. AMD reports after the close; options price a move of about 8%.",
    "JOLTS: 7.52 million job openings in September versus 7.19 million a month earlier and 420k above forecasts. The labour market is stronger than expected ahead of Friday's report.",
    "The dollar edges up against the yen: USD/JPY 158.7 (+0.5%), close to the top of the analysis range (159.05). EUR/USD 1.1191, GBP/USD 1.3413, USD/PLN 3.9435.",
    "Commodities: silver around $49.7 (−1.9%), gold around $3,922 (−0.6%), WTI around $96.8, Brent around $104.4. Bitcoin around $77,800.",
    "Overnight: US election results (the first polls close at 1:00 Warsaw time) and New Zealand jobs data at 22:45. Tomorrow ADP (14:15), ISM services (16:00) and EIA crude stocks (16:30). The source publishes today's daily candles overnight, so settlements are checked in the morning."
  ],
  instrumenty: {
    sp500:  { kurs: 7569.25, zmiana: 0.37, tydzien: -1.99, notka: "Notowanie CFD. Analiza spadkowa: cel 7 500, unieważnienie 7 700.", notka_en: "CFD quote. Bearish analysis: target 7,500, invalidation 7,700.", zrodlo: 1 },
    nasdaq: { kurs: 28165, zmiana: 0.63, tydzien: -5.01, notka: "Notowanie CFD. Analiza spadkowa: cel 27 645, unieważnienie 28 300.", notka_en: "CFD quote. Bearish analysis: target 27,645, invalidation 28,300.", zrodlo: 1 },
    xauusd: { kurs: 3922.34, zmiana: -0.63, tydzien: -3.40, notka: "Analiza spadkowa: cel 3 800, unieważnienie 4 000.", notka_en: "Bearish analysis: target $3,800, invalidation $4,000.", zrodlo: 0 },
    eurusd: { kurs: 1.1191, zmiana: 0.04, tydzien: 0.60, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3413, zmiana: 0.05, tydzien: 0.80, notka: "Analiza wzrostowa: cel 1,3489, unieważnienie 1,3306. W czwartek decyzja BoE.", notka_en: "Bullish analysis: target 1.3489, invalidation 1.3306. BoE decides on Thursday.", zrodlo: 2 },
    usdjpy: { kurs: 158.72, zmiana: 0.49, tydzien: 0.48, notka: "Analiza neutralna: zakres 156,75–159,05; kurs blisko górnej granicy.", notka_en: "Neutral analysis: 156.75–159.05 range; price near the upper bound.", zrodlo: 2 },
    xagusd: { kurs: 49.68, zmiana: -1.92, tydzien: -8.69, notka: "Analiza spadkowa: cel 48,85, unieważnienie 51,27.", notka_en: "Bearish analysis: target $48.85, invalidation $51.27.", zrodlo: 0 },
    usdpln: { kurs: 3.9435, zmiana: -0.10, tydzien: -0.26, notka: "Analiza wzrostowa: cel 3,98, wsparcie 3,92.", notka_en: "Bullish analysis: target 3.98, support 3.92.", zrodlo: 2 },
    wti:    { kurs: 96.76, zmiana: 0.31, tydzien: -3.14, notka: "Kontrakt grudniowy. Analiza wzrostowa: cel 105, wsparcie 95; horyzont mija 6 lis.", notka_en: "December contract. Bullish analysis: target $105, support $95; the horizon ends on 6 Nov.", zrodlo: 0 },
    dax:    { kurs: 25821, zmiana: -0.62, tydzien: 0.90, notka: "Notowanie CFD. Analiza wzrostowa: cel 26 164, unieważnienie 25 665.", notka_en: "CFD quote. Bullish analysis: target 26,164, invalidation 25,665.", zrodlo: 1 },
    btcusd: { kurs: 77808, zmiana: 1.48, tydzien: null, notka: "Ostatnia świeca dzienna (Coinbase). Analiza neutralna: zakres 75 800–80 000.", notka_en: "Latest daily candle (Coinbase). Neutral analysis: $75,800–80,000 range.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Wt 3 lis", wydarzenia: ["Wybory w USA: pierwsze lokale zamykają się o 1:00 w nocy", "Nowa Zelandia: rynek pracy (22:45)"] },
    { dzien: "Śr 4 lis", wydarzenia: ["USA: ADP (14:15), ISM usługi (16:00), zapasy ropy EIA (16:30)"] },
    { dzien: "Czw 5 lis", wydarzenia: ["BoE: decyzja w sprawie stóp (14:00), rynek oczekuje podwyżki"] },
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: surowce (ropa WTI, Brent, złoto, srebro), 3 lis 2026", nazwa_en: "Trading Economics: commodities (WTI, Brent, gold, silver), 3 Nov 2026", url: "https://tradingeconomics.com/commodities" },
    { nazwa: "Trading Economics: indeksy giełdowe (US500, US100, US30, DE40), 3 lis 2026", nazwa_en: "Trading Economics: stock indices (US500, US100, US30, DE40), 3 Nov 2026", url: "https://tradingeconomics.com/stocks" },
    { nazwa: "Trading Economics: waluty (EUR/USD, GBP/USD, USD/JPY, USD/PLN), 3 lis 2026", nazwa_en: "Trading Economics: currencies (EUR/USD, GBP/USD, USD/JPY, USD/PLN), 3 Nov 2026", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "The Tribune / Reuters: US job openings rise to 7.52 million in September (3 lis 2026)", nazwa_en: "The Tribune / Reuters: US job openings rise to 7.52 million in September (3 Nov 2026)", url: "https://www.tribuneindia.com/news/business/us-job-openings-rise-to-7-52-million-in-september-quits-increase-to-3-4-million" },
    { nazwa: "Coinbase: świece dzienne BTC/USD (dane wykresów na stronie)", nazwa_en: "Coinbase: BTC/USD daily candles (site chart data)", url: "https://www.coinbase.com/price/bitcoin" },
    { nazwa: "StockTitan: Stock Market Today, 3 lis 2026 (chipy, Apple, AMD po sesji)", nazwa_en: "StockTitan: Stock Market Today, 3 Nov 2026 (chips, Apple, AMD after the close)", url: "https://www.stocktitan.net/articles/stock-market-today-live-november-3-2026" },
    { nazwa: "Earnings Watcher: AMD, wycena ruchu po wynikach (2 lis 2026)", nazwa_en: "Earnings Watcher: AMD implied earnings move (2 Nov 2026)", url: "https://earnings-watcher.com/wiki/amd-earnings-november-2026" },
    { nazwa: "247 Wall St: September JOLTS 7.52M, topping forecasts by 420,000", nazwa_en: "247 Wall St: September JOLTS 7.52M, topping forecasts by 420,000", url: "https://247wallst.com/cards/xpost-01m6gywdtkdn919dm0m5zp8eb0" }
  ]
};
