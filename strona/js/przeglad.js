// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-29T22:30:00+01:00",
  stanNa_en: "Thursday evening, 29 Oct 2026 (after the US close)",
  stanNa: "czwartek wieczorem, 29 paź 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "Alphabet sinks 12% and drags the Nasdaq down 1.4%, while the DAX jumps above 26,000 after the ECB holds rates. US GDP beats forecasts at 3.4%, but PCE inflation rises to 3.6%. Amazon falls about 6% after hours.",
  naglowek: "Alphabet traci 12% i ciągnie Nasdaq w dół o 1,4%, a DAX po decyzji EBC wybija się ponad 26 000 pkt. PKB USA rośnie szybciej od prognoz (3,4%), ale inflacja PCE przyspiesza do 3,6%. Amazon traci po sesji około 6%.",
  punkty: [
    "USA: PKB w III kwartale +3,4% w ujęciu rocznym (prognoza 3,2%, poprzednio 2,2%). Inflacja PCE we wrześniu 3,6% r/r (sierpień 3,4%), bazowa 3,1% r/r. Mocny wzrost i uporczywa inflacja podtrzymują oczekiwania kolejnej podwyżki stóp Fed.",
    "Zamknięcie w USA: S&P 500 7 720 (−0,3%), Nasdaq −1,4%, Dow Jones −0,3%. Alphabet stracił 12,3% po słabych wynikach, co podsyciło obawy o opłacalność wydatków na AI.",
    "Amazon po sesji około −6%: przychody 201,9 mld USD (+12%), AWS +39% (najszybciej od prawie pięciu lat), ale zysk na akcję poniżej oczekiwań, a przepływ gotówki za 12 miesięcy jest ujemny (−42,4 mld USD) przy planie nakładów około 220 mld USD.",
    "EBC zostawił stopę depozytową na 2,50%. Inflacja w strefie euro wynosi 3,8%, a ekonomiści spodziewają się podwyżki w grudniu. Christine Lagarde odejdzie wcześniej, 7 lutego 2027. DAX zamknął się na 26 040 pkt (+1,3%), najwyżej od siedmiu tygodni; Adidas +5,8%.",
    "Złoto spadło poniżej 4 030 USD (−1,1%), srebro −3,3%, bitcoin około 79 600 USD (−2,1%). Analiza DAX z 27 paź nietrafiona (zamknięcie nad 25 800), nowy szkic DAX wzrostowy z celem 26 164. Nasdaq i bitcoin zbliżyły się do celów swoich analiz (29 000 i 78 000); rozliczenia jutro rano na podstawie świec dziennych."
  ],
  punkty_en: [
    "US: Q3 GDP +3.4% annualised (forecast 3.2%, previously 2.2%). September PCE inflation 3.6% y/y (August 3.4%), core 3.1% y/y. Strong growth and sticky inflation keep expectations of another Fed hike alive.",
    "US close: S&P 500 7,720 (−0.3%), Nasdaq −1.4%, Dow Jones −0.3%. Alphabet fell 12.3% after weak results, fuelling worries about the payoff from AI spending.",
    "Amazon about −6% after hours: revenue $201.9bn (+12%), AWS +39% (fastest in nearly five years), but EPS below expectations and trailing 12-month free cash flow negative (−$42.4bn) with a capex plan of about $220bn.",
    "The ECB kept the deposit rate at 2.50%. Euro-area inflation is 3.8%, and economists expect a hike in December. Christine Lagarde will leave early, on 7 February 2027. The DAX closed at 26,040 (+1.3%), a seven-week high; Adidas +5.8%.",
    "Gold fell below $4,030 (−1.1%), silver −3.3%, bitcoin around $79,600 (−2.1%). The 27 Oct DAX analysis missed (close above 25,800); new DAX draft bullish with a 26,164 target. Nasdaq and bitcoin moved closer to their analysis targets (29,000 and 78,000); settlements tomorrow morning from the daily candles."
  ],
  instrumenty: {
    sp500:  { kurs: 7720.39, zmiana: -0.30, tydzien: null, notka: "Zamknięcie sesji. Analiza spadkowa z 18 paź: cel 7 520, opór 7 790; horyzont kończy się jutro.", notka_en: "Session close. Bearish 18 Oct analysis: target 7,520, resistance 7,790; horizon ends tomorrow.", zrodlo: 5 },
    nasdaq: { kurs: 29075.97, zmiana: -1.38, tydzien: null, notka: "Notowanie CFD. Analiza spadkowa: cel 29 000, opór 29 800; rozliczenie rano ze świecy dziennej.", notka_en: "CFD quote. Bearish analysis: target 29,000, resistance 29,800; settlement in the morning from the daily candle.", zrodlo: 1 },
    xauusd: { kurs: 4021.31, zmiana: -1.14, tydzien: null, notka: "Analiza spadkowa: cel 3 950, unieważnienie 4 067.", notka_en: "Bearish analysis: target $3,950, invalidation $4,067.", zrodlo: 0 },
    eurusd: { kurs: 1.1180, zmiana: 0.23, tydzien: null, notka: "Po decyzji EBC. Analiza: opór 1,1170, cel 1,1080; rozliczenie rano ze świecy dziennej.", notka_en: "After the ECB decision. Analysis: resistance 1.1170, target 1.1080; settlement in the morning from the daily candle.", zrodlo: 2 },
    gbpusd: { kurs: 1.3377, zmiana: 0.37, tydzien: null, notka: "Pod oporem z analizy (1,3435); horyzont kończy się jutro.", notka_en: "Below the analysis resistance (1.3435); horizon ends tomorrow.", zrodlo: 2 },
    usdjpy: { kurs: 157.70, zmiana: -0.09, tydzien: null, notka: "Przed decyzją BoJ. Analiza: zakres 156,75–159,05.", notka_en: "Ahead of the BoJ decision. Analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 52.15, zmiana: -3.33, tydzien: null, notka: "Analiza: opór 55,50, cel 50.", notka_en: "Analysis: resistance $55.50, target $50.", zrodlo: 0 },
    usdpln: { kurs: null, zmiana: null, tydzien: null, notka: "Brak potwierdzonego kursu wieczornego (źródła pokazują dane z 28 paź). Rano 3,9496. Analiza: cel 3,98, wsparcie 3,92.", notka_en: "No confirmed evening rate (sources show 28 Oct data). Morning 3.9496. Analysis: target 3.98, support 3.92.", zrodlo: 2 },
    wti:    { kurs: 102.86, zmiana: 0.08, tydzien: null, notka: "Kontrakt grudniowy. Brent 115,64 USD. Analiza: cel 105, wsparcie 95.", notka_en: "December contract. Brent at $115.64. Analysis: target $105, support $95.", zrodlo: 0 },
    dax:    { kurs: 26039.68, zmiana: 1.31, tydzien: null, notka: "Zamknięcie Xetra, najwyżej od siedmiu tygodni. Nowa analiza wzrostowa: cel 26 164, unieważnienie 25 665.", notka_en: "Xetra close, a seven-week high. New bullish analysis: target 26,164, invalidation 25,665.", zrodlo: 3 },
    btcusd: { kurs: 79594, zmiana: -2.07, tydzien: null, notka: "Analiza spadkowa: cel 78 000, opór 81 950.", notka_en: "Bearish analysis: target 78,000, resistance 81,950.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Pt 30 paź", wydarzenia: ["BoJ: decyzja w sprawie stóp (rano)", "PKB Niemiec (8:00) i strefy euro (11:00)", "Inflacja w Niemczech (14:00)"] },
    { dzien: "Przyszły tydzień", wydarzenia: ["RBA: decyzja w sprawie stóp (wt 3 lis)", "BoE: decyzja w sprawie stóp (czw 5 lis, 14:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, bitcoin), 29 paź 2026", nazwa_en: "Trading Economics: gold (with silver, oil, bitcoin table), 29 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA (US100, US500), 29 paź 2026", nazwa_en: "Trading Economics: US stock market (US100, US500), 29 Oct 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: jen japoński (z tabelą walut), 29 paź 2026", nazwa_en: "Trading Economics: Japanese yen (with currency table), 29 Oct 2026", url: "https://tradingeconomics.com/japan/currency" },
    { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss, Dax über 26.000 Punkte (29 paź 2026)", nazwa_en: "ARIVA.DE / dpa-AFX: Frankfurt stocks close, DAX above 26,000 (29 Oct 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-ueber-26-000-punkte-12187543" },
    { nazwa: "Investing.com: U.S. GDP grows 3.4% in the third quarter (29 paź 2026)", nazwa_en: "Investing.com: U.S. GDP grows 3.4% in the third quarter (29 Oct 2026)", url: "https://www.investing.com/news/economic-indicators/us-inflation-accelerates-in-september-thirdquarter-gdp-rises-34-4983644" },
    { nazwa: "The Motley Fool: Stock Market Today, Oct. 29 (29 paź 2026)", nazwa_en: "The Motley Fool: Stock Market Today, Oct. 29 (29 Oct 2026)", url: "https://www.fool.com/coverage/stock-market-today/2026/10/29/stock-market-today-oct-29-amazon-falls-on-q3-earnings-report-and-capex-concerns/" },
    { nazwa: "The Motley Fool: AWS jumps 39% as Amazon's cash flow sinks (29 paź 2026)", nazwa_en: "The Motley Fool: AWS jumps 39% as Amazon's cash flow sinks (29 Oct 2026)", url: "https://www.fool.com/investing/2026/10/29/aws-jumps-39-as-amazons-cash-flow-sinks-rapid-earn/" },
    { nazwa: "XTB: ECB holds rates unchanged (29 paź 2026)", nazwa_en: "XTB: ECB holds rates unchanged (29 Oct 2026)", url: "https://www.xtb.com/cy/market-analysis/news-and-research/ecb-holds-rates-unchanged-eurusd-down" }
  ]
};
