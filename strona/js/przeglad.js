// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-02T22:30:00+01:00",
  stanNa_en: "Monday evening, 2 Nov 2026 (after the US close)",
  stanNa: "poniedziałek wieczorem, 2 lis 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "Oil plunges almost 8% on hopes for a US-Iran deal: WTI below $97, Brent around $104. Gold rebounds towards $3,950. Tech keeps falling: the Nasdaq −1.1%, while the Dow rises 0.4%. Apple reports after the close; the US votes tomorrow.",
  naglowek: "Ropa tanieje o blisko 8% na nadziejach na porozumienie USA z Iranem: WTI poniżej 97 USD, Brent około 104 USD. Złoto odbija w stronę 3 950 USD. Technologie dalej tracą: Nasdaq −1,1%, a Dow Jones +0,4%. Po sesji wyniki Apple, jutro wybory w USA.",
  punkty: [
    "Ropa: WTI około 96,2 USD (−7,6%), Brent około 104,5 USD (−7,9%). Prezydent Iranu Pezeszkian powiedział, że najwyższy przywódca dał rządowi pełnomocnictwa do rozmów, krąży szkic porozumienia, a Trump chce dać dyplomacji więcej czasu. Analitycy ostrzegają, że ryzyko ataków po wtorkowych wyborach nie zniknęło.",
    "Zamknięcie w USA: S&P 500 7 541 (−0,5%), Nasdaq Composite 25 164 (−1,1%), Dow Jones 51 984 (+0,4%). Sektor technologiczny −2,4%, Oracle około −5% po zapowiedzi pozyskania 20 mld USD. Palantir po sesji z przychodami 2,31 mld USD (+96%) i wyższą prognozą.",
    "ISM przemysł w październiku 55,5 (prognoza 54,6, wrzesień 54,5), a wskaźnik cen spadł do 75,2 z 77,9. Rynek wycenia 76% szans na grudniową podwyżkę stóp Fed. Rentowność 10-latek 4,89%.",
    "Złoto około 3 946 USD (+1,8%), srebro około 50,5 USD (+3,3%), bo tańsza ropa łagodzi obawy inflacyjne. DAX zamknął się na 25 981 pkt (+0,6%), chwilowo dotykając 26 000. Bitcoin około 76 800 USD (−1,3%).",
    "Rozliczenia: analiza Nasdaq z 30 paź trafiona (spadek poniżej 28 300), nowy szkic spadkowy z celem 27 645. Skuteczność 11 z 24. Srebro jest nad poziomem unieważnienia analizy (50), a ropa blisko wsparcia (95); obie rozliczę rano ze świec dziennych."
  ],
  punkty_en: [
    "Oil: WTI around $96.2 (−7.6%), Brent around $104.5 (−7.9%). Iran's President Pezeshkian said the supreme leader gave the government authority for talks, a draft deal is circulating, and Trump wants more time for diplomacy. Analysts warn that the risk of strikes after Tuesday's midterms has not gone away.",
    "US close: S&P 500 7,541 (−0.5%), Nasdaq Composite 25,164 (−1.1%), Dow Jones 51,984 (+0.4%). Tech sector −2.4%, Oracle about −5% after announcing a $20bn capital raise. Palantir after the close with revenue of $2.31bn (+96%) and a higher outlook.",
    "October ISM manufacturing 55.5 (forecast 54.6, September 54.5), and the prices index fell to 75.2 from 77.9. Markets price a 76% chance of a December Fed hike. The 10-year yield is 4.89%.",
    "Gold around $3,946 (+1.8%), silver around $50.5 (+3.3%), as cheaper oil eases inflation worries. The DAX closed at 25,981 (+0.6%), briefly touching 26,000. Bitcoin around $76,800 (−1.3%).",
    "Settlements: the 30 Oct Nasdaq analysis hit (a drop below 28,300); new bearish draft with a 27,645 target. Score: 11 of 24. Silver is above its analysis invalidation level ($50) and oil is near support ($95); I will settle both in the morning from the daily candles."
  ],
  instrumenty: {
    sp500:  { kurs: 7541.40, zmiana: -0.51, tydzien: null, notka: "Zamknięcie sesji. Analiza spadkowa: cel 7 500, unieważnienie 7 700.", notka_en: "Session close. Bearish analysis: target 7,500, invalidation 7,700.", zrodlo: 4 },
    nasdaq: { kurs: 28094.94, zmiana: -1.39, tydzien: null, notka: "Notowanie CFD. Analiza z 30 paź trafiona. Nowa analiza spadkowa: cel 27 645, unieważnienie 28 300.", notka_en: "CFD quote. 30 Oct analysis hit. New bearish analysis: target 27,645, invalidation 28,300.", zrodlo: 1 },
    xauusd: { kurs: 3945.81, zmiana: 1.83, tydzien: null, notka: "Analiza spadkowa: cel 3 800, unieważnienie 4 000.", notka_en: "Bearish analysis: target $3,800, invalidation $4,000.", zrodlo: 0 },
    eurusd: { kurs: 1.1195, zmiana: 0.33, tydzien: null, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3411, zmiana: 0.15, tydzien: null, notka: "Analiza wzrostowa: cel 1,3428, unieważnienie 1,3306. BoE w czwartek.", notka_en: "Bullish analysis: target 1.3428, invalidation 1.3306. BoE on Thursday.", zrodlo: 2 },
    usdjpy: { kurs: 157.89, zmiana: 0.23, tydzien: null, notka: "Minister finansów Katayama ostrzega przed nadmiernymi ruchami. Analiza: zakres 156,75–159,05.", notka_en: "Finance Minister Katayama warns against excessive moves. Analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 50.52, zmiana: 3.30, tydzien: null, notka: "Nad poziomem unieważnienia analizy (50); rozliczenie rano ze świecy dziennej.", notka_en: "Above the analysis invalidation level ($50); settlement in the morning from the daily candle.", zrodlo: 0 },
    usdpln: { kurs: null, zmiana: null, tydzien: null, notka: "Brak potwierdzonego kursu z dzisiejszego wieczoru. Analiza wzrostowa: cel 3,98, wsparcie 3,92.", notka_en: "No confirmed rate for this evening. Bullish analysis: target 3.98, support 3.92.", zrodlo: 0 },
    wti:    { kurs: 96.18, zmiana: -7.63, tydzien: null, notka: "Kontrakt grudniowy. Blisko wsparcia z analizy (95); rozliczenie rano ze świecy dziennej. Brent około 104,5 USD.", notka_en: "December contract. Near the analysis support ($95); settlement in the morning from the daily candle. Brent around $104.5.", zrodlo: 4 },
    dax:    { kurs: 25981.09, zmiana: 0.63, tydzien: null, notka: "Zamknięcie Xetra. Analiza wzrostowa: cel 26 164, unieważnienie 25 665.", notka_en: "Xetra close. Bullish analysis: target 26,164, invalidation 25,665.", zrodlo: 3 },
    btcusd: { kurs: 76772, zmiana: -1.29, tydzien: null, notka: "Analiza neutralna: zakres 75 800–80 000.", notka_en: "Neutral analysis: $75,800–80,000 range.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Wt 3 lis", wydarzenia: ["RBA: decyzja w sprawie stóp (4:30), rynek oczekuje podwyżki", "Wybory połówkowe w USA", "Wyniki AMD po sesji"] },
    { dzien: "Czw 5 lis", wydarzenia: ["BoE: decyzja w sprawie stóp (14:00)"] },
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, bitcoin), 2 lis 2026", nazwa_en: "Trading Economics: gold (with silver, oil, bitcoin table), 2 Nov 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA (US100, US500), 2 lis 2026", nazwa_en: "Trading Economics: US stock market (US100, US500), 2 Nov 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: jen japoński (z tabelą walut), 2 lis 2026", nazwa_en: "Trading Economics: Japanese yen (with currency table), 2 Nov 2026", url: "https://tradingeconomics.com/japan/currency" },
    { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss, Dax legt zu vor Apple und Zwischenwahlen (2 lis 2026)", nazwa_en: "ARIVA.DE / dpa-AFX: Frankfurt stocks close, DAX gains ahead of Apple and the midterms (2 Nov 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-legt-zu-vor-apple-und-12191436" },
    { nazwa: "Yahoo Finance: Stock market today, 2 lis 2026", nazwa_en: "Yahoo Finance: Stock market today, 2 Nov 2026", url: "https://finance.yahoo.com/markets/live/stock-market-today-monday-november-2-dow-sp-500-nasdaq-091835095.html" },
    { nazwa: "Clash Report: Oil falls nearly 8% as Iran diplomacy hopes push Brent below $105 (2 lis 2026)", nazwa_en: "Clash Report: Oil falls nearly 8% as Iran diplomacy hopes push Brent below $105 (2 Nov 2026)", url: "https://clashreport.com/world/articles/oil-falls-nearly-8-as-iran-diplomacy-hopes-push-brent-below-105-3mbqcgeofyi" }
  ]
};
