// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-22T22:30:00+02:00",
  stanNa_en: "Thursday evening, 22 Oct 2026 (after the US close)",
  stanNa: "czwartek wieczorem, 22 paź 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "Tech selloff: Nasdaq −2.7%, its worst day since June, as AI spending worries hit Meta and chipmakers. Brent at a five-month high near $113; gold at its lowest since August.",
  naglowek: "Wyprzedaż technologii: Nasdaq −2,7%, najgorszy dzień od czerwca, bo obawy o wydatki na AI uderzają w Meta i producentów chipów. Brent najwyżej od 5 miesięcy, blisko 113 USD; złoto najniżej od sierpnia.",
  punkty: [
    "Zamknięcie w USA: S&P 500 7 647,74 (−1,41%), Nasdaq Composite 25 988,10 (−2,68%, najmocniejszy spadek od czerwca), Dow Jones 52 749,70 (−0,20%). Indeks półprzewodników −6,3%.",
    "Meta −7,5% mimo lepszych wyników: pierwszy od ponad dekady ujemny przepływ gotówki przez wydatki na AI. Tesla −2,1%. Zyskały Spotify (+10,7%), Procter & Gamble i Lockheed Martin.",
    "Ropa najdroższa od maja: Brent około 112,9 USD (+3,8%), WTI około 99,2 USD (+2,1%) po atakach na cele w Arabii Saudyjskiej i doniesieniach o planach uderzeń na Iran.",
    "Złoto spadło do około 4 024 USD (−2,8%), najniżej od początku sierpnia, srebro do 54,58 USD (−5,8%): droga ropa podsyca obawy o inflację i podwyżkę stóp Fed przed końcem roku. Wnioski o zasiłek spadły do 194 tys., najmniej od 3 miesięcy.",
    "DAX zamknął dzień na 25 371,75 (−1,07%), SAP +3,2% po wynikach. Bitcoin około 81 300 USD (−3,3%). Rozliczenia analiz (m.in. Nasdaq, złoto, srebro, USD/JPY) jutro rano na podstawie świec dziennych."
  ],
  punkty_en: [
    "US close: S&P 500 7,647.74 (−1.41%), Nasdaq Composite 25,988.10 (−2.68%, steepest drop since June), Dow Jones 52,749.70 (−0.20%). The semiconductor index fell 6.3%.",
    "Meta −7.5% despite beating forecasts: its first cash outflow in over a decade on AI spending. Tesla −2.1%. Spotify (+10.7%), Procter & Gamble and Lockheed Martin gained.",
    "Oil at its highest since May: Brent around $112.9 (+3.8%), WTI around $99.2 (+2.1%) after attacks on Saudi targets and reports of planned strikes on Iran.",
    "Gold fell to around $4,024 (−2.8%), its lowest since early August, and silver to $54.58 (−5.8%): pricey oil feeds inflation worries and the odds of a Fed hike before year-end. Jobless claims fell to 194K, a three-month low.",
    "The DAX closed at 25,371.75 (−1.07%), SAP +3.2% after earnings. Bitcoin around $81,300 (−3.3%). Analysis settlements (incl. Nasdaq, gold, silver, USD/JPY) follow tomorrow morning from daily candles."
  ],
  instrumenty: {
    sp500:  { kurs: 7647.74, zmiana: -1.41, tydzien: null, notka: "Najmocniejszy spadek od tygodni. Wsparcie z analizy 7 520.", notka_en: "Sharpest drop in weeks. Analysis support at 7,520.", zrodlo: 1 },
    nasdaq: { kurs: 28964, zmiana: -2.88, tydzien: null, notka: "Notowania CFD po sesji, poniżej celu analizy (29 000). Rozliczenie rano na podstawie świecy dziennej.", notka_en: "After-hours CFD quote, below the analysis target (29,000). Settlement in the morning from the daily candle.", zrodlo: 0 },
    xauusd: { kurs: 4023.52, zmiana: -2.84, tydzien: null, notka: "Najniżej od sierpnia, wyraźnie poniżej dolnej granicy zakresu z analizy (4 096).", notka_en: "Lowest since August, well below the bottom of the analysis range (4,096).", zrodlo: 0 },
    eurusd: { kurs: 1.1225, zmiana: -0.06, tydzien: null, notka: "Bez większych zmian w zakresie z analizy (1,116–1,130).", notka_en: "Little changed within the analysis range (1.116–1.130).", zrodlo: 2 },
    gbpusd: { kurs: 1.34, zmiana: 0.05, tydzien: null, notka: "Blisko miesięcznego maksimum. Opór z analizy 1,3435.", notka_en: "Near a one-month high. Analysis resistance at 1.3435.", zrodlo: 2 },
    usdjpy: { kurs: 156.91, zmiana: -0.78, tydzien: null, notka: "Jen mocno zyskuje jako bezpieczna przystań, poniżej zakresu z analizy (157,50–159,00).", notka_en: "The yen gains strongly as a safe haven, below the analysis range (157.50–159.00).", zrodlo: 2 },
    xagusd: { kurs: 54.58, zmiana: -5.83, tydzien: null, notka: "Poniżej celu analizy spadkowej (55,40).", notka_en: "Below the bearish analysis target (55.40).", zrodlo: 0 },
    usdpln: { kurs: 3.8985, zmiana: 0.57, tydzien: null, notka: "Wyliczony z kursów EUR/PLN (4,3761) i EUR/USD (1,1225). Złoty słabszy przy ucieczce od ryzyka.", notka_en: "Derived from EUR/PLN (4.3761) and EUR/USD (1.1225). The zloty weakens as investors shun risk.", zrodlo: 2 },
    wti:    { kurs: 99.2, zmiana: 2.11, tydzien: null, notka: "Kontrakt grudniowy, najdrożej od maja. Brent 112,92 USD. Opór z analizy (po korekcie) 99,32.", notka_en: "December contract, highest since May. Brent at $112.92. Analysis resistance (adjusted) at 99.32.", zrodlo: 0 },
    dax:    { kurs: 25371.75, zmiana: -1.07, tydzien: null, notka: "Zamknięcie Xetra. Spadek pod linie trendu, ale nad wsparciem z analizy (25 325).", notka_en: "Xetra close. Below trend lines but above the analysis support (25,325).", zrodlo: 3 },
    btcusd: { kurs: 81256, zmiana: -3.28, tydzien: null, notka: "W zakresie z analizy (79 676–84 262). Liczy się zamknięcie dnia o 2:00 czasu polskiego.", notka_en: "Inside the analysis range (79,676–84,262). The daily close at 00:00 UTC is what counts.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Pt 23 paź", wydarzenia: ["Wstępne indeksy PMI: Francja 9:15, Niemcy 9:30, strefa euro 10:00, Wielka Brytania 10:30, USA 15:45", "USA: nastroje konsumentów Uniwersytetu Michigan i oczekiwania inflacyjne (16:00)"] },
    { dzien: "Śr 28 paź", wydarzenia: ["Fed: decyzja w sprawie stóp procentowych (19:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, US500, US100, DE40, bitcoin), 22 paź 2026", nazwa_en: "Trading Economics: gold (with silver, oil, US500, US100, DE40, bitcoin table), 22 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Reuters via Yahoo Finance: Wall Street sinks as Nasdaq falls over 2% on AI cost worries (22 paź 2026)", nazwa_en: "Reuters via Yahoo Finance: Wall Street sinks as Nasdaq falls over 2% on AI cost worries (22 Oct 2026)", url: "https://finance.yahoo.com/markets/stocks/articles/nasdaq-futures-drop-over-1-093849296.html" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 22 paź 2026", nazwa_en: "Trading Economics: EUR/USD (with currency table), 22 Oct 2026", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss (22 paź 2026)", nazwa_en: "ARIVA.DE / dpa-AFX: Frankfurt stocks close (22 Oct 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-us-tech-branche-versetzt-12178825" }
  ]
};
