// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-04T13:55:00+01:00",
  stanNa_en: "Wednesday, 4 Nov 2026, before the US open",
  stanNa: "środa, 4 lis 2026, przed sesją w USA",
  naglowek_en: "Democrats take the House and flip 7 Senate seats. The dollar falls to a five-week low, gold jumps 2.9% back above $4,000 and silver 4.6%. The DAX gains 1.6% and hit our 26,164 target. US futures recovered overnight losses. Euro area inflation rose to 4.0%.",
  naglowek: "Demokraci przejmują Izbę Reprezentantów i odbijają 7 miejsc w Senacie. Dolar spada do 5-tygodniowego minimum, złoto rośnie o 2,9% i wraca nad 4 000 USD, srebro o 4,6%. DAX zyskuje 1,6% i doszedł do naszego celu 26 164. Kontrakty w USA odrobiły nocne straty. Inflacja w strefie euro wzrosła do 4,0%.",
  punkty: [
    "Wybory w USA: według Euronews o 10:05 Demokraci mieli co najmniej 228 miejsc w Izbie Reprezentantów (większość to 218) i odbili Republikanom 7 miejsc w Senacie, m.in. w Teksasie, Ohio, Kansas i Maine. Rynek zakłada mniej nowych cięć podatków i wydatków oraz ostrzejsze regulacje AI.",
    "Dolar: indeks DXY około 101,3 (−0,6%), najniżej od pięciu tygodni, przy spadku rentowności obligacji USA. EUR/USD około 1,1247 (+0,5%). Kurs GBP/USD, USD/JPY i USD/PLN według porannej tabeli: 1,3455, 157,9 i 3,9306.",
    "Europa: DAX około 26 278 pkt (+1,6%), najwyżej od końca sierpnia; prowadzą banki, motoryzacja i handel, Heidelberg Materials i Continental po wynikach. Inflacja w strefie euro w październiku 4,0% r/r (wrz 3,8%), w tym energia +20,8%.",
    "Kontrakty w USA odrobiły nocne spadki (Nasdaq 100 tracił w nocy około 2%): S&P 500 około 7 637, Nasdaq 100 około 28 267. Nasdaq jest blisko poziomu unieważnienia naszej analizy spadkowej (28 300 na zamknięciu dnia).",
    "Surowce: złoto około 4 044 USD (+2,9%), czyli nad poziomem unieważnienia analizy spadkowej (4 000), rozstrzygnie zamknięcie dnia. Srebro około 52,10 USD (+4,6%), blisko unieważnienia nowego szkicu (52,50). WTI około 95,9 USD, Brent około 102,8 USD. Rozliczenie: analiza wzrostowa DAX trafiona, trafność 14 z 28. O 14:15 ADP, o 16:00 ISM usługi, o 16:30 zapasy ropy EIA."
  ],
  punkty_en: [
    "US elections: according to Euronews at 10:05, Democrats held at least 228 House seats (218 is a majority) and flipped 7 Senate seats from Republicans, including Texas, Ohio, Kansas and Maine. Markets expect fewer new tax cuts and less spending, and tighter AI regulation.",
    "The dollar: the DXY is around 101.3 (−0.6%), a five-week low, as US Treasury yields fall. EUR/USD around 1.1247 (+0.5%). GBP/USD, USD/JPY and USD/PLN from the morning table: 1.3455, 157.9 and 3.9306.",
    "Europe: the DAX is around 26,278 (+1.6%), the highest since late August, led by banks, carmakers and retailers, with Heidelberg Materials and Continental up after results. Euro area inflation was 4.0% y/y in October (Sep 3.8%), with energy +20.8%.",
    "US futures recovered overnight losses (the Nasdaq 100 was down about 2% overnight): S&P 500 around 7,637, Nasdaq 100 around 28,267. The Nasdaq is close to the invalidation level of our bearish analysis (28,300 on a daily close).",
    "Commodities: gold around $4,044 (+2.9%), above the invalidation level of the bearish analysis ($4,000); the daily close decides. Silver around $52.10 (+4.6%), close to the new draft's invalidation ($52.50). WTI around $95.9, Brent around $102.8. Settlement: the bullish DAX analysis hit, hit rate 14 of 28. ADP at 14:15, ISM services at 16:00, EIA crude stocks at 16:30."
  ],
  instrumenty: {
    sp500:  { kurs: 7637.06, zmiana: 0.90, tydzien: -1.38, notka: "Notowanie CFD. Analiza spadkowa: cel 7 500, unieważnienie 7 700.", notka_en: "CFD quote. Bearish analysis: target 7,500, invalidation 7,700.", zrodlo: 1 },
    nasdaq: { kurs: 28266.74, zmiana: 0.31, tydzien: -5.19, notka: "Notowanie CFD. Analiza spadkowa: cel 27 645, unieważnienie 28 300; kurs tuż pod unieważnieniem.", notka_en: "CFD quote. Bearish analysis: target 27,645, invalidation 28,300; price just below invalidation.", zrodlo: 1 },
    xauusd: { kurs: 4043.97, zmiana: 2.90, tydzien: -0.56, notka: "Analiza spadkowa: cel 3 800, unieważnienie 4 000; kurs nad unieważnieniem, rozstrzygnie zamknięcie dnia.", notka_en: "Bearish analysis: target $3,800, invalidation $4,000; price above invalidation, the daily close decides.", zrodlo: 0 },
    eurusd: { kurs: 1.1247, zmiana: 0.48, tydzien: 0.85, notka: "Analiza neutralna: zakres 1,1113–1,1260; kurs blisko górnej granicy.", notka_en: "Neutral analysis: 1.1113–1.1260 range; price near the upper bound.", zrodlo: 3 },
    gbpusd: { kurs: 1.3455, zmiana: 0.33, tydzien: 0.98, notka: "Kurs z porannej tabeli. Analiza wzrostowa: cel 1,3489, unieważnienie 1,3306. Jutro decyzja BoE.", notka_en: "Morning table quote. Bullish analysis: target 1.3489, invalidation 1.3306. BoE decides tomorrow.", zrodlo: 2 },
    usdjpy: { kurs: 157.88, zmiana: -0.49, tydzien: 0.04, notka: "Kurs z porannej tabeli. Analiza neutralna: zakres 156,75–159,05.", notka_en: "Morning table quote. Neutral analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 52.10, zmiana: 4.64, tydzien: -3.43, notka: "Szkic spadkowy: cel 48,29, unieważnienie 52,50; kurs blisko unieważnienia.", notka_en: "Bearish draft: target $48.29, invalidation $52.50; price near invalidation.", zrodlo: 0 },
    usdpln: { kurs: 3.9306, zmiana: -0.22, tydzien: -0.29, notka: "Kurs z porannej tabeli. Analiza wzrostowa: cel 3,98, wsparcie 3,92.", notka_en: "Morning table quote. Bullish analysis: target 3.98, support 3.92.", zrodlo: 2 },
    wti:    { kurs: 95.92, zmiana: -0.18, tydzien: -6.67, notka: "Kontrakt grudniowy. Analiza wzrostowa: cel 105, wsparcie 95; horyzont mija 6 lis.", notka_en: "December contract. Bullish analysis: target $105, support $95; the horizon ends on 6 Nov.", zrodlo: 0 },
    dax:    { kurs: 26278, zmiana: 1.60, tydzien: 2.23, notka: "Notowanie CFD. Analiza wzrostowa trafiona (cel 26 164). Nowa analiza po zebraniu poziomów od analityków.", notka_en: "CFD quote. Bullish analysis hit (target 26,164). A new analysis follows once analysts' levels are available.", zrodlo: 5 },
    btcusd: { kurs: 77582, zmiana: 0.32, tydzien: -4.51, notka: "Analiza neutralna: zakres 75 800–80 000.", notka_en: "Neutral analysis: $75,800–80,000 range.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Śr 4 lis", wydarzenia: ["USA: ADP (14:15), ISM usługi (16:00), zapasy ropy EIA (16:30)"] },
    { dzien: "Czw 5 lis", wydarzenia: ["BoE: decyzja w sprawie stóp (14:00), rynek oczekuje podwyżki"] },
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto i srebro, ropa, Brent, 4 lis 2026", nazwa_en: "Trading Economics: gold and silver, crude, Brent, 4 Nov 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA (US500, US100), 4 lis 2026", nazwa_en: "Trading Economics: US stock market (US500, US100), 4 Nov 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: waluty (poranna tabela), 4 lis 2026", nazwa_en: "Trading Economics: currencies (morning table), 4 Nov 2026", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "Euronews: US midterms, what Trump's defeat means for Europe and global markets (4 lis 2026)", nazwa_en: "Euronews: US midterms, what Trump's defeat means for Europe and global markets (4 Nov 2026)", url: "https://www.euronews.com/2026/11/04/us-midterms-what-trumps-defeat-means-for-europe-and-global-markets" },
    { nazwa: "Trading Economics: kryptowaluty (bitcoin), 4 lis 2026", nazwa_en: "Trading Economics: crypto (bitcoin), 4 Nov 2026", url: "https://tradingeconomics.com/crypto" },
    { nazwa: "Trading Economics: DAX Hits Over 2-Month High (4 lis 2026)", nazwa_en: "Trading Economics: DAX Hits Over 2-Month High (4 Nov 2026)", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Trading Economics: Dollar Falls to 5-Week Lows (4 lis 2026)", nazwa_en: "Trading Economics: Dollar Falls to 5-Week Lows (4 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Eurostat: Euro area annual inflation up to 4.0% (4 lis 2026)", nazwa_en: "Eurostat: Euro area annual inflation up to 4.0% (4 Nov 2026)", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-04112026-ap" },
    { nazwa: "MarketScreener / Reuters: Europe set to open lower as Democratic sweep fuels AI regulation fears (4 lis 2026)", nazwa_en: "MarketScreener / Reuters: Europe set to open lower as Democratic sweep fuels AI regulation fears (4 Nov 2026)", url: "https://www.marketscreener.com/news/europe-set-to-open-lower-as-democratic-sweep-fuels-ai-regulation-fears-ce785fded180f120" }
  ]
};
