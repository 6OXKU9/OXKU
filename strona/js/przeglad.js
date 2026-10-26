// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-26T22:30:00+01:00",
  stanNa_en: "Monday evening, 26 Oct 2026 (after the US close)",
  stanNa: "poniedziałek wieczorem, 26 paź 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "Anthropic's IPO filing revives the AI trade: Nasdaq +0.8%, S&P 500 +0.7%. The DAX gains 0.9% on a stronger Ifo and Bayer. Oil eases, the dollar firms ahead of the Fed.",
  naglowek: "Wniosek Anthropic o debiut giełdowy ożywia handel spółkami AI: Nasdaq +0,8%, S&P 500 +0,7%. DAX +0,9% dzięki lepszemu Ifo i Bayerowi. Ropa tanieje, dolar zyskuje przed Fed.",
  punkty: [
    "Zamknięcie w USA: S&P 500 7 676,80 (+0,70%), Nasdaq Composite 26 169,38 (+0,82%), Dow Jones 52 361,52 (+0,28%). Anthropic złożył prospekt przed debiutem na Nasdaq (ticker ANT), co podbiło spółki AI i producentów chipów.",
    "Tesla zyskała około 6% po podniesieniu rekomendacji przez Barclays. Meta traciła po zapowiedzi pozyskania 95 mld USD z emisji akcji na infrastrukturę AI.",
    "DAX zamknął się na 25 411 pkt (+0,9%). Indeks Ifo wzrósł do 90,2 pkt, szósty raz z rzędu i najwyżej od maja 2023; Bayer +3,6% po danych z badań i zgodzie w Chinach.",
    "Ropa tańsza po spokojnym weekendzie: WTI około 101,3 USD (−2%), Brent 115,2 USD. Złoto około 4 017 USD (+0,6%), dolar mocniejszy: EUR/USD 1,1177, USD/JPY 157,5.",
    "Nasdaq 100 w notowaniach CFD przy 29 268 pkt, powyżej poziomu unieważnienia analizy z 23 paź (29 240); rozliczenie jutro rano na podstawie świecy dziennej. Jutro w USA zamówienia na dobra trwałe (13:30) i zaufanie konsumentów (15:00), a w środę decyzja Fed."
  ],
  punkty_en: [
    "US close: S&P 500 7,676.80 (+0.70%), Nasdaq Composite 26,169.38 (+0.82%), Dow Jones 52,361.52 (+0.28%). Anthropic filed a prospectus to list on Nasdaq (ticker ANT), lifting AI stocks and chipmakers.",
    "Tesla gained about 6% after a Barclays upgrade. Meta fell after announcing plans to raise $95bn in equity for AI infrastructure.",
    "The DAX closed at 25,411 (+0.9%). The Ifo index rose to 90.2, its sixth straight gain and the highest since May 2023; Bayer +3.6% on trial data and a China approval.",
    "Oil eased after a quiet weekend: WTI around $101.3 (−2%), Brent $115.2. Gold around $4,017 (+0.6%), the dollar firmer: EUR/USD 1.1177, USD/JPY 157.5.",
    "The Nasdaq 100 CFD trades near 29,268, above the invalidation level of the 23 Oct analysis (29,240); settlement tomorrow morning from the daily candle. Tomorrow brings US durable goods (13:30) and consumer confidence (15:00), with the Fed decision on Wednesday."
  ],
  instrumenty: {
    sp500:  { kurs: 7676.8, zmiana: 0.7, tydzien: null, notka: "Odbicie po dwóch tygodniach spadków. Wsparcie z analizy 7 520.", notka_en: "A rebound after two losing weeks. Analysis support at 7,520.", zrodlo: 1 },
    nasdaq: { kurs: 29267.7, zmiana: 1.09, tydzien: null, notka: "Notowanie CFD powyżej poziomu unieważnienia analizy (29 240). Rozliczenie rano.", notka_en: "CFD quote above the analysis invalidation level (29,240). Settlement in the morning.", zrodlo: 3 },
    xauusd: { kurs: 4016.72, zmiana: 0.57, tydzien: null, notka: "Rynek czeka na Fed. Analiza: opór 4 067, cel 3 950.", notka_en: "Markets await the Fed. Analysis: resistance $4,067, target $3,950.", zrodlo: 0 },
    eurusd: { kurs: 1.1177, zmiana: -0.22, tydzien: null, notka: "Euro blisko kilkumiesięcznych minimów. Dolna granica zakresu z analizy 1,116.", notka_en: "The euro near multi-month lows. Bottom of the analysis range at 1.116.", zrodlo: 2 },
    gbpusd: { kurs: 1.3345, zmiana: -0.24, tydzien: null, notka: "Pod oporem z analizy (1,3435).", notka_en: "Below the analysis resistance (1.3435).", zrodlo: 2 },
    usdjpy: { kurs: 157.51, zmiana: 0.41, tydzien: null, notka: "Blisko oporu z analizy (157,60). BoJ w piątek.", notka_en: "Near the analysis resistance (157.60). BoJ on Friday.", zrodlo: 2 },
    xagusd: { kurs: 53.97, zmiana: 0.17, tydzien: null, notka: "Analiza: opór 55,50, cel 50.", notka_en: "Analysis: resistance $55.50, target $50.", zrodlo: 0 },
    usdpln: { kurs: 3.9401, zmiana: 0.35, tydzien: null, notka: "Wyliczony z kursów EUR/PLN (4,4039) i EUR/USD (1,11773). Powyżej celu analizy (3,9345); rozliczenie rano.", notka_en: "Derived from EUR/PLN (4.4039) and EUR/USD (1.11773). Above the analysis target (3.9345); settlement in the morning.", zrodlo: 2 },
    wti:    { kurs: 101.25, zmiana: -1.96, tydzien: null, notka: "Kontrakt grudniowy. Brent 115,22 USD. Analiza: cel 105, wsparcie 95.", notka_en: "December contract. Brent at $115.22. Analysis: target $105, support $95.", zrodlo: 0 },
    dax:    { kurs: 25411, zmiana: 0.91, tydzien: null, notka: "Zamknięcie Xetra, pod oporem z analizy (25 475).", notka_en: "Xetra close, below the analysis resistance (25,475).", zrodlo: 4 },
    btcusd: { kurs: 79898, zmiana: -0.15, tydzien: null, notka: "Blisko dolnej granicy zakresu z analizy (79 676). Liczy się zamknięcie dnia o 1:00 czasu polskiego.", notka_en: "Near the bottom of the analysis range (79,676). The daily close at 00:00 UTC is what counts.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Wt 27 paź", wydarzenia: ["USA: zamówienia na dobra trwałe (13:30) i zaufanie konsumentów Conference Board (15:00)"] },
    { dzien: "Śr 28 paź", wydarzenia: ["Fed: decyzja w sprawie stóp procentowych (19:00)", "Wyniki Alphabet i Microsoft po sesji"] },
    { dzien: "Czw 29 paź", wydarzenia: ["USA: PKB za III kwartał i inflacja PCE (13:30)", "EBC: decyzja w sprawie stóp (14:15)", "Wyniki Amazon po sesji"] },
    { dzien: "Pt 30 paź", wydarzenia: ["BoJ: decyzja w sprawie stóp", "PKB Niemiec (8:00) i strefy euro (11:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, DE40, bitcoin, waluty), 26 paź 2026", nazwa_en: "Trading Economics: gold (with silver, oil, DE40, bitcoin, currency table), 26 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "TheStreet: Stock Market Today, 26 paź 2026", nazwa_en: "TheStreet: Stock Market Today, 26 Oct 2026", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-26-2026" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 26 paź 2026", nazwa_en: "Trading Economics: EUR/USD (with currency table), 26 Oct 2026", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "Trading Economics: rynek akcji USA (US100), 26 paź 2026", nazwa_en: "Trading Economics: US stock market (US100), 26 Oct 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "ad-hoc-news / Dow Jones: DAX schließt dank Bayer am Montag 0,9 Prozent höher (26 paź 2026)", nazwa_en: "ad-hoc-news / Dow Jones: DAX closes 0.9% higher on Bayer (26 Oct 2026)", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-dank-bayer-am-montag-0-9-prozent-hoeher/70416342" }
  ]
};
