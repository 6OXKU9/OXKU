// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-28T22:30:00+01:00",
  stanNa_en: "Wednesday evening, 28 Oct 2026 (after the US close)",
  stanNa: "środa wieczorem, 28 paź 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "The Fed holds at 3.75–4.00%, but two officials vote for a hike. Stocks edge higher; after the close Microsoft gains about 5% on strong results while Alphabet drops over 8% on an earnings miss. DAX at a five-week high.",
  naglowek: "Fed utrzymuje stopy 3,75–4,00%, ale dwoje członków głosuje za podwyżką. Akcje lekko w górę; po sesji Microsoft zyskuje około 5% po mocnych wynikach, a Alphabet traci ponad 8% po rozczarowującym zysku. DAX najwyżej od pięciu tygodni.",
  punkty: [
    "Fed zostawił stopy w przedziale 3,75–4,00% (10 do 2; Lisa Cook i Beth Hammack chciały podwyżki). W komunikacie gospodarka jest już „silna”, a nie „solidna”. Prezes Warsh ocenił, że oczekiwania inflacyjne są dobrze zakotwiczone. Rentowność 2-latek wzrosła do 4,75%.",
    "Zamknięcie w USA: S&P 500 około 7 726 (+0,3%), Nasdaq +0,2%, Dow Jones +0,2%. Rosły banki i producenci chipów po rekordowych wynikach SK Hynix.",
    "Po sesji: Microsoft +5% (zysk 4,89 USD na akcję wobec oczekiwanych 4,73, przychody 92,3 mld USD), Alphabet ponad −8% (zysk 2,12 USD wobec 3,02 przez stratę na inwestycjach, przychody Google Cloud +103%, ujemny przepływ gotówki).",
    "DAX zamknął się na 25 704 pkt (+0,4%), najwyżej od pięciu tygodni: Deutsche Bank +4% po rekordowym zysku, Symrise ponad −10%. Ropa WTI około 102 USD (+2%), złoto około 4 068 USD.",
    "Złoto jest na poziomie unieważnienia analizy z 23 paź (4 067), a bitcoin kończy dziś 10-dniowy horyzont swojej analizy wewnątrz zakresu; rozliczenia jutro rano. Jutro PKB USA i inflacja PCE (13:30), decyzja EBC (14:15) i wyniki Amazona."
  ],
  punkty_en: [
    "The Fed left rates at 3.75–4.00% (10-2; Lisa Cook and Beth Hammack wanted a hike). The statement now calls the economy \"strong\" rather than \"solid\". Chair Warsh said inflation expectations are well anchored. The 2-year yield rose to 4.75%.",
    "US close: S&P 500 around 7,726 (+0.3%), Nasdaq +0.2%, Dow Jones +0.2%. Banks and chipmakers rose after SK Hynix's record results.",
    "After the close: Microsoft +5% (EPS $4.89 versus $4.73 expected, revenue $92.3bn), Alphabet down over 8% (EPS $2.12 versus $3.02 due to an investment loss, Google Cloud revenue +103%, negative free cash flow).",
    "The DAX closed at 25,704 (+0.4%), a five-week high: Deutsche Bank +4% after a record profit, Symrise down over 10%. WTI around $102 (+2%), gold around $4,068.",
    "Gold sits at the invalidation level of the 23 Oct analysis ($4,067), and bitcoin ends the 10-day horizon of its analysis inside the range today; settlements tomorrow morning. Tomorrow: US GDP and PCE inflation (13:30), the ECB decision (14:15) and Amazon results."
  ],
  instrumenty: {
    sp500:  { kurs: 7725.64, zmiana: 0.28, tydzien: null, notka: "Notowanie CFD. Analiza spadkowa z 18 paź: opór 7 790.", notka_en: "CFD quote. Bearish 18 Oct analysis: resistance 7,790.", zrodlo: 1 },
    nasdaq: { kurs: 29602.33, zmiana: 0.55, tydzien: null, notka: "Notowanie CFD przed reakcją na wyniki Alphabetu i Microsoftu. Analiza: zakres 29 000–29 800.", notka_en: "CFD quote before the reaction to Alphabet and Microsoft results. Analysis: 29,000–29,800 range.", zrodlo: 1 },
    xauusd: { kurs: 4067.78, zmiana: 0.19, tydzien: null, notka: "Na poziomie unieważnienia analizy (4 067); rozliczenie rano na podstawie zamknięcia dnia.", notka_en: "At the analysis invalidation level ($4,067); settlement in the morning from the daily close.", zrodlo: 0 },
    eurusd: { kurs: 1.1121, zmiana: -0.04, tydzien: null, notka: "Analiza: opór 1,1170, cel 1,1080. EBC jutro.", notka_en: "Analysis: resistance 1.1170, target 1.1080. ECB tomorrow.", zrodlo: 2 },
    gbpusd: { kurs: 1.3284, zmiana: -0.16, tydzien: null, notka: "Pod oporem z analizy (1,3435).", notka_en: "Below the analysis resistance (1.3435).", zrodlo: 2 },
    usdjpy: { kurs: 157.89, zmiana: -0.04, tydzien: null, notka: "Po decyzji Fed chwilowo 158,23. Analiza: zakres 156,75–159,05.", notka_en: "Briefly 158.23 after the Fed. Analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 53.97, zmiana: -0.82, tydzien: null, notka: "Analiza: opór 55,50, cel 50.", notka_en: "Analysis: resistance $55.50, target $50.", zrodlo: 0 },
    usdpln: { kurs: 3.9596, zmiana: 0.18, tydzien: null, notka: "Wyliczony z kursów EUR/PLN (4,4033) i EUR/USD (1,11206). Analiza: cel 3,98, wsparcie 3,92.", notka_en: "Derived from EUR/PLN (4.4033) and EUR/USD (1.11206). Analysis: target 3.98, support 3.92.", zrodlo: 2 },
    wti:    { kurs: 101.94, zmiana: 2.04, tydzien: null, notka: "Kontrakt grudniowy. Brent 114,10 USD. Analiza: cel 105, wsparcie 95.", notka_en: "December contract. Brent at $114.10. Analysis: target $105, support $95.", zrodlo: 0 },
    dax:    { kurs: 25704.02, zmiana: 0.44, tydzien: null, notka: "Zamknięcie Xetra, najwyżej od pięciu tygodni. Analiza: zakres 25 317–25 800.", notka_en: "Xetra close, a five-week high. Analysis: 25,317–25,800 range.", zrodlo: 3 },
    btcusd: { kurs: 81364, zmiana: 0.68, tydzien: null, notka: "W zakresie z analizy (79 676–84 262) w ostatnim dniu horyzontu.", notka_en: "Inside the analysis range (79,676–84,262) on the last day of the horizon.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Czw 29 paź", wydarzenia: ["USA: PKB za III kwartał i inflacja PCE (13:30)", "EBC: decyzja w sprawie stóp (14:15)", "Wyniki Amazon po sesji"] },
    { dzien: "Pt 30 paź", wydarzenia: ["BoJ: decyzja w sprawie stóp", "PKB Niemiec (8:00) i strefy euro (11:00), inflacja w Niemczech (14:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, bitcoin), 28 paź 2026", nazwa_en: "Trading Economics: gold (with silver, oil, bitcoin table), 28 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA (US100, US500), 28 paź 2026", nazwa_en: "Trading Economics: US stock market (US100, US500), 28 Oct 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 28 paź 2026", nazwa_en: "Trading Economics: EUR/USD (with currency table), 28 Oct 2026", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss (28 paź 2026)", nazwa_en: "ARIVA.DE / dpa-AFX: Frankfurt stocks close (28 Oct 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-auf-erholungskurs-12185579" },
    { nazwa: "investingLive: FOMC decision Oct 28", nazwa_en: "investingLive: FOMC decision Oct 28", url: "https://investinglive.com/central-banks/fomc-decision-oct-28/" },
    { nazwa: "TradingKey: Alphabet Q3 2026 earnings", nazwa_en: "TradingKey: Alphabet Q3 2026 earnings", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262248965-google-earnings-report-q3-services-cloud-search-capital-expenditures-cash-tradingkey" },
    { nazwa: "TipRanks: Microsoft results top Wall Street estimates (28 paź 2026)", nazwa_en: "TipRanks: Microsoft results top Wall Street estimates (28 Oct 2026)", url: "https://www.tipranks.com/news/microsoft-stock-msft-rises-as-financial-results-top-wall-street-estimates" }
  ]
};
