// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-30T22:30:00+01:00",
  stanNa_en: "Friday evening, 30 Oct 2026 (after the US close)",
  stanNa: "piątek wieczorem, 30 paź 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "October ends with a tech rout: the Nasdaq falls almost 3% (its worst day since June), Intel loses about 29%. Gold drops below $3,900 to a one-year low and silver below $50. Oil rises on talk of new US strikes on Iran.",
  naglowek: "Październik kończy się wyprzedażą technologii: Nasdaq traci blisko 3% (najgorszy dzień od czerwca), Intel około 29%. Złoto spada poniżej 3 900 USD, najniżej od roku, a srebro poniżej 50 USD. Ropa drożeje na doniesieniach o możliwych nowych atakach USA na Iran.",
  punkty: [
    "Zamknięcie w USA: S&P 500 7 580 (−1,8%), Nasdaq Composite 25 437 (−2,9%), Dow Jones 51 770 (−1,1%). Intel stracił około 29% po słabej prognozie (najgorszy dzień od 1974 roku), Reddit także około 29%, Amazon rozczarował wynikami. W październiku Nasdaq stracił ponad 5%, najwięcej od marca 2025.",
    "Złoto około 3 874 USD (−3,7%), najniżej od roku, srebro około 49,1 USD (−5,8%). Według Kitco droga ropa podsyca inflację i oczekiwania podwyżek Fed, a inwestorzy sprzedawali złoto, by pokryć depozyty po spadkach akcji.",
    "Ropa WTI około 103 USD, Brent około 112 USD, najwyżej od kwietnia 2023: Trump sygnalizuje możliwe wznowienie nalotów na Iran po wtorkowych wyborach. Brent zyskał w październiku około 12%.",
    "Europa: DAX zamknął się na 25 818 pkt (−0,85%), ale tydzień i październik kończy wzrostem o 2,5%. Inflacja w Niemczech spadła do 2,8% (prognoza 3,0%). PKB strefy euro w III kwartale +0,4% k/k, Niemiec +0,2%.",
    "Rozliczenia: trafione analizy złota (cel 3 950), srebra (cel 50) i Nasdaq (cel 29 000). Skuteczność 9 z 22. Nowe szkice spadkowe: złoto (cel 3 800), srebro (48,29) i Nasdaq (28 300). Analizy S&P 500 i GBP/USD z 18 paź kończą dziś horyzont; rozliczę je jutro rano ze świec dziennych, podobnie jak bitcoina (cel 76 500)."
  ],
  punkty_en: [
    "US close: S&P 500 7,580 (−1.8%), Nasdaq Composite 25,437 (−2.9%), Dow Jones 51,770 (−1.1%). Intel lost about 29% on a weak outlook (its worst day since 1974), Reddit also about 29%, and Amazon disappointed with its results. The Nasdaq lost more than 5% in October, the most since March 2025.",
    "Gold around $3,874 (−3.7%), a one-year low, silver around $49.1 (−5.8%). According to Kitco, expensive oil feeds inflation and Fed hike expectations, and investors sold gold to meet margin calls after the equity slide.",
    "WTI around $103, Brent around $112, the highest since April 2023: Trump signals airstrikes on Iran may resume after Tuesday's midterms. Brent gained about 12% in October.",
    "Europe: the DAX closed at 25,818 (−0.85%) but ends the week and October up 2.5%. German inflation fell to 2.8% (forecast 3.0%). Euro-area Q3 GDP +0.4% q/q, Germany +0.2%.",
    "Settlements: the gold (target $3,950), silver (target $50) and Nasdaq (target 29,000) analyses hit. Score: 9 of 22. New bearish drafts: gold (target $3,800), silver ($48.29) and Nasdaq (28,300). The 18 Oct S&P 500 and GBP/USD analyses end their horizon today; I will settle them tomorrow morning from the daily candles, as well as bitcoin (target $76,500)."
  ],
  instrumenty: {
    sp500:  { kurs: 7580.07, zmiana: -1.82, tydzien: null, notka: "Zamknięcie sesji. Analiza spadkowa z 18 paź (cel 7 520) kończy dziś horyzont; rozliczenie rano ze świecy dziennej.", notka_en: "Session close. The bearish 18 Oct analysis (target 7,520) ends its horizon today; settlement in the morning from the daily candle.", zrodlo: 4 },
    nasdaq: { kurs: 28412.27, zmiana: -3.46, tydzien: null, notka: "Notowanie CFD. Analiza z 29 paź trafiona. Nowa analiza spadkowa: cel 28 300, opór 28 745.", notka_en: "CFD quote. 29 Oct analysis hit. New bearish analysis: target 28,300, resistance 28,745.", zrodlo: 1 },
    xauusd: { kurs: 3874.08, zmiana: -3.66, tydzien: null, notka: "Najniżej od roku. Analiza z 23 paź trafiona. Nowa analiza spadkowa: cel 3 800, opór 4 000.", notka_en: "A one-year low. 23 Oct analysis hit. New bearish analysis: target $3,800, resistance $4,000.", zrodlo: 0 },
    eurusd: { kurs: 1.1149, zmiana: -0.26, tydzien: null, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3388, zmiana: 0.10, tydzien: null, notka: "Analiza wzrostowa z 18 paź (opór 1,3435) kończy dziś horyzont; rozliczenie rano ze świecy dziennej.", notka_en: "The bullish 18 Oct analysis (resistance 1.3435) ends its horizon today; settlement in the morning from the daily candle.", zrodlo: 2 },
    usdjpy: { kurs: 157.48, zmiana: -0.13, tydzien: null, notka: "Analiza: zakres 156,75–159,05.", notka_en: "Analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 49.12, zmiana: -5.80, tydzien: null, notka: "Poniżej 50 USD. Analiza z 23 paź trafiona. Nowa analiza spadkowa: cel 48,29, opór 50.", notka_en: "Below $50. 23 Oct analysis hit. New bearish analysis: target $48.29, resistance $50.", zrodlo: 0 },
    usdpln: { kurs: null, zmiana: null, tydzien: null, notka: "Brak potwierdzonego kursu z dzisiejszego wieczoru. Analiza: cel 3,98, wsparcie 3,92.", notka_en: "No confirmed rate for this evening. Analysis: target 3.98, support 3.92.", zrodlo: 0 },
    wti:    { kurs: 102.92, zmiana: 0.90, tydzien: null, notka: "Kontrakt grudniowy. Brent 112,32 USD. Analiza: cel 105, wsparcie 95.", notka_en: "December contract. Brent at $112.32. Analysis: target $105, support $95.", zrodlo: 0 },
    dax:    { kurs: 25818.21, zmiana: -0.85, tydzien: 2.5, notka: "Zamknięcie Xetra. Analiza wzrostowa: cel 26 164, unieważnienie 25 665.", notka_en: "Xetra close. Bullish analysis: target 26,164, invalidation 25,665.", zrodlo: 3 },
    btcusd: { kurs: 76655, zmiana: -1.48, tydzien: null, notka: "Blisko celu analizy (76 500); rozliczenie rano ze świecy dziennej.", notka_en: "Close to the analysis target ($76,500); settlement in the morning from the daily candle.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Wt 3 lis", wydarzenia: ["RBA: decyzja w sprawie stóp (4:30)", "Wybory w USA"] },
    { dzien: "Czw 5 lis", wydarzenia: ["BoE: decyzja w sprawie stóp (14:00)"] },
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, bitcoin), 30 paź 2026", nazwa_en: "Trading Economics: gold (with silver, oil, bitcoin table), 30 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA (US100, US500), 30 paź 2026", nazwa_en: "Trading Economics: US stock market (US100, US500), 30 Oct 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: jen japoński (z tabelą walut), 30 paź 2026", nazwa_en: "Trading Economics: Japanese yen (with currency table), 30 Oct 2026", url: "https://tradingeconomics.com/japan/currency" },
    { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss, schwächeres Ende einer starken Börsenwoche (30 paź 2026)", nazwa_en: "ARIVA.DE / dpa-AFX: Frankfurt stocks close, weaker end to a strong week (30 Oct 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-schwaecheres-ende-einer-12189224" },
    { nazwa: "Yahoo Finance: Stock market today, 30 paź 2026", nazwa_en: "Yahoo Finance: Stock market today, 30 Oct 2026", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-30-dow-sp-500-nasdaq-amazon-intel-ai-sell-off-191429143.html" },
    { nazwa: "Kitco: Gold prices plunge to one-year low below $3,900 (30 paź 2026)", nazwa_en: "Kitco: Gold prices plunge to one-year low below $3,900 (30 Oct 2026)", url: "https://www.kitco.com/news/article/2026-10-30/gold-prices-plunge-one-year-low-below-3900-higher-oil-prices-fuel-fears" },
    { nazwa: "Poland Insight: Euro area GDP grows 0.4% in Q3 2026 (30 paź 2026)", nazwa_en: "Poland Insight: Euro area GDP grows 0.4% in Q3 2026 (30 Oct 2026)", url: "https://polandinsight.com/euro-area-gdp-q3-2026-eurostat-eu-growth-54512/" },
    { nazwa: "TheStreet: Stock Market Today, 30 paź 2026", nazwa_en: "TheStreet: Stock Market Today, 30 Oct 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-30-2026" }
  ]
};
