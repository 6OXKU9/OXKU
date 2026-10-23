// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-23T22:30:00+02:00",
  stanNa_en: "Friday evening, 23 Oct 2026 (after the US close)",
  stanNa: "piątek wieczorem, 23 paź 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "Oil at a six-month high (Brent $116.7, WTI +4%) weighs on stocks: Dow −1.2%, S&P 500 −0.5%, DAX −0.8% after French PMI drops below 50. Gold ends below $4,000.",
  naglowek: "Ropa najdroższa od pół roku (Brent 116,7 USD, WTI +4%) ciąży akcjom: Dow −1,2%, S&P 500 −0,5%, DAX −0,8% po spadku PMI Francji poniżej 50. Złoto kończy dzień poniżej 4000 USD.",
  punkty: [
    "Zamknięcie w USA: S&P 500 7 623,68 (−0,52%), Nasdaq Composite 25 955,34 (−0,21%), Dow Jones 52 215,16 (−1,23%). S&P 500 i Nasdaq kończą drugi tydzień z rzędu na minusie. Linie lotnicze traciły ponad 4% przez koszty paliwa, zyskały spółki cyberbezpieczeństwa.",
    "Ropa: grudniowy kontrakt WTI 103,48 USD (+4,0%), Brent 116,72 USD, najdrożej od sześciu miesięcy, przy obawach o eskalację na Bliskim Wschodzie. Rentowność 10-latek USA blisko 4,99%.",
    "Wstępne PMI: strefa euro 51,9 (oczekiwano 52,7), Francja 48,4, poniżej progu 50, Niemcy 52,8. Wielka Brytania zaskoczyła w górę (53,1, najwyżej od lutego), USA 57,6. Nastroje Uniwersytetu Michigan 48,0 przy oczekiwaniach inflacyjnych 4,7% na rok.",
    "Złoto około 3 997 USD (−0,7%), srebro 53,92 USD (−1,2%, nowe minimum roku). DAX zamknął się na 25 182 pkt, poniżej wsparcia z analizy, więc analiza z 21 paź jest nietrafiona; jest nowa analiza spadkowa.",
    "USD/PLN około 3,929, powyżej górnej granicy zakresu z analizy (3,9211); rozliczenie w poniedziałek rano na podstawie świecy dziennej. W przyszłym tygodniu decyzje Fed (28 paź), EBC (29 paź) i BoJ (30 paź) oraz wyniki Microsoftu, Alphabetu i Amazona."
  ],
  punkty_en: [
    "US close: S&P 500 7,623.68 (−0.52%), Nasdaq Composite 25,955.34 (−0.21%), Dow Jones 52,215.16 (−1.23%). The S&P 500 and Nasdaq post a second straight weekly loss. Airlines fell more than 4% on fuel costs, cybersecurity stocks gained.",
    "Oil: December WTI $103.48 (+4.0%), Brent $116.72, a six-month high, on fears of Middle East escalation. The US 10-year yield is near 4.99%.",
    "Flash PMIs: euro area 51.9 (52.7 expected), France 48.4, below the 50 threshold, Germany 52.8. The UK surprised higher (53.1, highest since February), the US 57.6. University of Michigan sentiment 48.0 with 1-year inflation expectations at 4.7%.",
    "Gold around $3,997 (−0.7%), silver $53.92 (−1.2%, a new yearly low). The DAX closed at 25,182, below the analysis support, so the 21 Oct analysis missed; a new bearish analysis is up.",
    "USD/PLN around 3.929, above the top of the analysis range (3.9211); settlement on Monday morning from the daily candle. Next week brings the Fed (28 Oct), ECB (29 Oct) and BoJ (30 Oct) decisions plus Microsoft, Alphabet and Amazon earnings."
  ],
  instrumenty: {
    sp500:  { kurs: 7623.68, zmiana: -0.52, tydzien: null, notka: "Drugi tydzień spadków. Wsparcie z analizy 7 520.", notka_en: "A second losing week. Analysis support at 7,520.", zrodlo: 1 },
    nasdaq: { kurs: 28986.5, zmiana: 0.0, tydzien: null, notka: "Notowanie CFD, bez zmian. Analiza: opór 29 240, cel 28 745.", notka_en: "CFD quote, flat. Analysis: resistance 29,240, target 28,745.", zrodlo: 3 },
    xauusd: { kurs: 3996.93, zmiana: -0.69, tydzien: null, notka: "Poniżej 4000 USD. Analiza: opór 4 067, cel 3 950.", notka_en: "Below $4,000. Analysis: resistance $4,067, target $3,950.", zrodlo: 0 },
    eurusd: { kurs: 1.12, zmiana: -0.14, tydzien: null, notka: "Słabe PMI z Francji ciążą euro. W zakresie z analizy (1,116–1,130).", notka_en: "Weak French PMI weighs on the euro. Inside the analysis range (1.116–1.130).", zrodlo: 2 },
    gbpusd: { kurs: 1.3374, zmiana: -0.2, tydzien: null, notka: "Dzienne maksimum blisko 1,3420 po mocnym PMI. Opór z analizy 1,3435.", notka_en: "Daily high near 1.3420 after a strong PMI. Analysis resistance at 1.3435.", zrodlo: 2 },
    usdjpy: { kurs: 156.87, zmiana: 0.07, tydzien: null, notka: "Analiza: opór 157,60, cel 155,00. BoJ w przyszłym tygodniu.", notka_en: "Analysis: resistance 157.60, target 155.00. BoJ next week.", zrodlo: 2 },
    xagusd: { kurs: 53.92, zmiana: -1.22, tydzien: null, notka: "Nowe minimum roku w ciągu dnia (około 53,45). Cel analizy 50.", notka_en: "A new intraday yearly low (around 53.45). Analysis target $50.", zrodlo: 0 },
    usdpln: { kurs: 3.9289, zmiana: 0.68, tydzien: null, notka: "Wyliczony z kursów EUR/PLN (4,4002) i EUR/USD (1,11997). Powyżej górnej granicy zakresu z analizy (3,9211).", notka_en: "Derived from EUR/PLN (4.4002) and EUR/USD (1.11997). Above the top of the analysis range (3.9211).", zrodlo: 2 },
    wti:    { kurs: 103.48, zmiana: 4.03, tydzien: null, notka: "Kontrakt grudniowy. Brent 116,72 USD. Cel analizy 105.", notka_en: "December contract. Brent at $116.72. Analysis target $105.", zrodlo: 1 },
    dax:    { kurs: 25182, zmiana: -0.75, tydzien: null, notka: "Zamknięcie Xetra poniżej wsparcia 25 325. Nowa analiza: opór 25 475, cel 24 800.", notka_en: "Xetra close below 25,325 support. New analysis: resistance 25,475, target 24,800.", zrodlo: 4 },
    btcusd: { kurs: 81237, zmiana: -0.08, tydzien: null, notka: "W zakresie z analizy (79 676–84 262).", notka_en: "Inside the analysis range (79,676–84,262).", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Wt 27 paź", wydarzenia: ["USA: zamówienia na dobra trwałe (13:30) i zaufanie konsumentów Conference Board (15:00)"] },
    { dzien: "Śr 28 paź", wydarzenia: ["Fed: decyzja w sprawie stóp procentowych (19:00)", "Wyniki Alphabet i Microsoft po sesji"] },
    { dzien: "Czw 29 paź", wydarzenia: ["USA: PKB za III kwartał i inflacja PCE (13:30)", "EBC: decyzja w sprawie stóp (14:15)", "Wyniki Amazon po sesji"] },
    { dzien: "Pt 30 paź", wydarzenia: ["BoJ: decyzja w sprawie stóp", "PKB Niemiec (8:00) i strefy euro (11:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, DE40, bitcoin), 23 paź 2026", nazwa_en: "Trading Economics: gold (with silver, oil, DE40, bitcoin table), 23 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Yahoo Finance: Stock market today, piątek 23 paź 2026", nazwa_en: "Yahoo Finance: Stock market today, Friday 23 Oct 2026", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-23-dow-sp-500-nasdaq-tesla-meta-093000521.html" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 23 paź 2026", nazwa_en: "Trading Economics: EUR/USD (with currency table), 23 Oct 2026", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "Trading Economics: rynek akcji USA (US100), 23 paź 2026", nazwa_en: "Trading Economics: US stock market (US100), 23 Oct 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "ad-hoc-news / Dow Jones: DAX schließt nach Frankreichs PMI 190 Punkte tiefer (23 paź 2026)", nazwa_en: "ad-hoc-news / Dow Jones: DAX closes 190 points lower after French PMI (23 Oct 2026)", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-nach-frankreichs-pmi-190-punkte-tiefer/70400630" },
    { nazwa: "FXStreet: Eurozone HCOB Composite PMI declines to 51.9 in October", nazwa_en: "FXStreet: Eurozone HCOB Composite PMI declines to 51.9 in October", url: "https://www.fxstreet.com/news/eurozone-hcob-composite-pmi-declines-to-519-in-october-vs-527-expected-202610230806" }
  ]
};
