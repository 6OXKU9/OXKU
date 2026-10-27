// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-27T22:30:00+01:00",
  stanNa_en: "Tuesday evening, 27 Oct 2026 (after the US close)",
  stanNa: "wtorek wieczorem, 27 paź 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "Tech rebound continues for a second day: Nasdaq +1.2%, S&P 500 +0.6%, DAX +0.7%. US consumer confidence jumps to 91.7. Oil slips below $100, gold back above $4,050. The euro near its lowest since April 2025.",
  naglowek: "Drugi dzień odbicia technologii: Nasdaq +1,2%, S&P 500 +0,6%, DAX +0,7%. Zaufanie konsumentów w USA skacze do 91,7. Ropa poniżej 100 USD, złoto znów nad 4 050 USD. Euro najsłabiej od kwietnia 2025.",
  punkty: [
    "Zamknięcie w USA: S&P 500 7 722 (+0,60%), Nasdaq 26 477 (+1,18%), Dow Jones 52 378 (+0,03%). Rosły chipy i spółki chmurowe, Broadcom +4%. Boeing −10,7% po większej od oczekiwań stracie, sektor energii −2%.",
    "Dane z USA lepsze od prognoz: zaufanie konsumentów Conference Board 91,7 pkt (oczekiwano 80,4, poprzednio 84,2), zamówienia na dobra trwałe +1,8% m/m (oczekiwano +1,7%).",
    "DAX zamknął się na 25 590,77 pkt (+0,7%): Porsche blisko +4% po wynikach, Mercedes-Benz blisko −4% po obniżeniu prognozy. Analiza spadkowa z 23 paź jest nietrafiona; jest nowa analiza z zakresem 25 317–25 800.",
    "Ropa WTI 99,90 USD (−1,8%), Brent 113,88 USD. Złoto około 4 060 USD (+1,1%), bo tańsza ropa łagodzi obawy inflacyjne. Rentowność 10-latek USA 4,99%.",
    "Dolar mocny: EUR/USD 1,1149, USD/JPY 157,7, USD/PLN około 3,951. Euro, jen i złoto są blisko poziomów rozstrzygających analizy z 18 i 23 paź; rozliczenie jutro rano na podstawie świec dziennych. Jutro decyzja Fed (19:00) oraz wyniki Microsoftu i Alphabetu."
  ],
  punkty_en: [
    "US close: S&P 500 7,722 (+0.60%), Nasdaq 26,477 (+1.18%), Dow Jones 52,378 (+0.03%). Chips and cloud stocks rose, Broadcom +4%. Boeing −10.7% after a bigger-than-expected loss, energy −2%.",
    "US data beat forecasts: Conference Board consumer confidence 91.7 (80.4 expected, 84.2 prior), durable goods orders +1.8% m/m (+1.7% expected).",
    "The DAX closed at 25,590.77 (+0.7%): Porsche nearly +4% after results, Mercedes-Benz nearly −4% after a profit warning. The bearish 23 Oct analysis missed; a new analysis has a 25,317–25,800 range.",
    "WTI $99.90 (−1.8%), Brent $113.88. Gold around $4,060 (+1.1%) as cheaper oil eases inflation worries. The US 10-year yield is at 4.99%.",
    "The dollar is strong: EUR/USD 1.1149, USD/JPY 157.7, USD/PLN around 3.951. The euro, yen and gold are near levels that decide the 18 and 23 Oct analyses; settlement tomorrow morning from daily candles. Tomorrow brings the Fed decision (19:00) and results from Microsoft and Alphabet."
  ],
  instrumenty: {
    sp500:  { kurs: 7722, zmiana: 0.6, tydzien: null, notka: "Drugi dzień wzrostów. Analiza spadkowa z 18 paź: opór 7 790.", notka_en: "A second day of gains. Bearish 18 Oct analysis: resistance 7,790.", zrodlo: 1 },
    nasdaq: { kurs: 29647.68, zmiana: 1.29, tydzien: null, notka: "Notowanie CFD, blisko górnej granicy zakresu z analizy (29 800).", notka_en: "CFD quote, near the top of the analysis range (29,800).", zrodlo: 3 },
    xauusd: { kurs: 4060.2, zmiana: 1.08, tydzien: null, notka: "Blisko oporu z analizy (4 067); liczy się zamknięcie dnia.", notka_en: "Near the analysis resistance ($4,067); the daily close is what counts.", zrodlo: 0 },
    eurusd: { kurs: 1.1149, zmiana: -0.22, tydzien: null, notka: "Poniżej dolnej granicy zakresu z analizy (1,116); rozliczenie rano.", notka_en: "Below the bottom of the analysis range (1.116); settlement in the morning.", zrodlo: 2 },
    gbpusd: { kurs: 1.3319, zmiana: -0.18, tydzien: null, notka: "Pod oporem z analizy (1,3435).", notka_en: "Below the analysis resistance (1.3435).", zrodlo: 2 },
    usdjpy: { kurs: 157.68, zmiana: 0.11, tydzien: null, notka: "Powyżej oporu z analizy (157,60); rozliczenie rano na podstawie zamknięcia dnia.", notka_en: "Above the analysis resistance (157.60); settlement in the morning from the daily close.", zrodlo: 2 },
    xagusd: { kurs: 54.41, zmiana: 0.84, tydzien: null, notka: "Analiza: opór 55,50, cel 50.", notka_en: "Analysis: resistance $55.50, target $50.", zrodlo: 0 },
    usdpln: { kurs: 3.951, zmiana: 0.35, tydzien: null, notka: "Wyliczony z kursów EUR/PLN (4,4049) i EUR/USD (1,11489). Analiza: cel 3,98, wsparcie 3,92.", notka_en: "Derived from EUR/PLN (4.4049) and EUR/USD (1.11489). Analysis: target 3.98, support 3.92.", zrodlo: 2 },
    wti:    { kurs: 99.9, zmiana: -1.83, tydzien: null, notka: "Rozliczenie kontraktu grudniowego. Brent 113,88 USD. Analiza: cel 105, wsparcie 95.", notka_en: "December contract settlement. Brent at $113.88. Analysis: target $105, support $95.", zrodlo: 1 },
    dax:    { kurs: 25590.77, zmiana: 0.71, tydzien: null, notka: "Zamknięcie Xetra. Nowa analiza: zakres 25 317–25 800.", notka_en: "Xetra close. New analysis: 25,317–25,800 range.", zrodlo: 4 },
    btcusd: { kurs: 80578, zmiana: 0.73, tydzien: null, notka: "W zakresie z analizy (79 676–84 262).", notka_en: "Inside the analysis range (79,676–84,262).", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Śr 28 paź", wydarzenia: ["Australia: inflacja CPI (1:30)", "Bank Kanady (14:45) i Fed (19:00): decyzje w sprawie stóp", "Wyniki Alphabet i Microsoft po sesji"] },
    { dzien: "Czw 29 paź", wydarzenia: ["USA: PKB za III kwartał i inflacja PCE (13:30)", "EBC: decyzja w sprawie stóp (14:15)", "Wyniki Amazon po sesji"] },
    { dzien: "Pt 30 paź", wydarzenia: ["BoJ: decyzja w sprawie stóp", "PKB Niemiec (8:00) i strefy euro (11:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, DE40, bitcoin), 27 paź 2026", nazwa_en: "Trading Economics: gold (with silver, oil, DE40, bitcoin table), 27 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Investrade: Market Review, 27 paź 2026", nazwa_en: "Investrade: Market Review, 27 Oct 2026", url: "https://investrade.com/market-review-october-27-2026/" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 27 paź 2026", nazwa_en: "Trading Economics: EUR/USD (with currency table), 27 Oct 2026", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "Trading Economics: rynek akcji USA (US100), 27 paź 2026", nazwa_en: "Trading Economics: US stock market (US100), 27 Oct 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss (27 paź 2026)", nazwa_en: "ARIVA.DE / dpa-AFX: Frankfurt stocks close (27 Oct 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-steigt-vor-tech-zahlen-12183820" }
  ]
};
