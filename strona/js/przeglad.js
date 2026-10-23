// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-23T07:45:00+02:00",
  stanNa_en: "Friday morning, 23 Oct 2026 (before the European open)",
  stanNa: "piątek rano, 23 paź 2026 (przed otwarciem sesji w Europie)",
  naglowek_en: "The chip rout spreads to Asia: KOSDAQ −3.5%, Nikkei −1.4%. Gold falls below $4,000 for the first time since July, WTI holds above $100 after Trump invokes the Defense Production Act.",
  naglowek: "Wyprzedaż chipów przenosi się do Azji: KOSDAQ −3,5%, Nikkei −1,4%. Złoto pierwszy raz od lipca poniżej 4000 USD, WTI utrzymuje się nad 100 USD po użyciu przez Trumpa Defense Production Act.",
  punkty: [
    "Azja na minusie po czwartkowym spadku indeksu półprzewodników o 6,7%: KOSDAQ −3,5%, Kospi −2,2%, Nikkei −1,4%, Szanghaj −1,3%. Hang Seng zyskał 0,25%.",
    "Złoto spadło w nocy do 3986,74 USD, pierwszy raz od lipca poniżej 4000 USD; rano jest przy 4024 USD. Srebro zeszło poniżej 54 USD, najniżej od listopada 2025 roku.",
    "Ropa WTI około 100,40 USD (+0,9%), Brent około 114 USD. Trump sięgnął po ustawę Defense Production Act w sprawie paliw, co podtrzymuje obawy o podaż.",
    "Japonia: inflacja bazowa 2,1%, wskaźnik bez żywności i energii 2,4% (oczekiwano 2,3%), PMI 52,3. USD/JPY spadł w nocy do 156,25, a rano odbił do około 156,90.",
    "Dziś wstępne PMI z Europy (od 9:15) i USA (15:45) oraz nastroje Uniwersytetu Michigan (16:00). Rozliczone analizy: trafione srebro, ropa i Nasdaq (22 paź), nietrafione złoto i USD/JPY. Dla tych instrumentów są nowe analizy."
  ],
  punkty_en: [
    "Asia in the red after Thursday's 6.7% drop in the semiconductor index: KOSDAQ −3.5%, Kospi −2.2%, Nikkei −1.4%, Shanghai −1.3%. The Hang Seng gained 0.25%.",
    "Gold fell overnight to $3,986.74, below $4,000 for the first time since July; this morning it is near $4,024. Silver slipped below $54, its lowest since November 2025.",
    "WTI around $100.40 (+0.9%), Brent around $114. Trump invoked the Defense Production Act over fuel, which keeps supply worries alive.",
    "Japan: core inflation 2.1%, the measure excluding food and energy 2.4% (2.3% expected), PMI 52.3. USD/JPY fell overnight to 156.25 and rebounded to about 156.90 this morning.",
    "Today brings flash PMIs from Europe (from 9:15) and the US (15:45) plus University of Michigan sentiment (16:00). Settled analyses: silver, oil and Nasdaq (22 Oct) hit, gold and USD/JPY missed. Those instruments have new analyses."
  ],
  instrumenty: {
    sp500:  { kurs: 7653.68, zmiana: -0.13, tydzien: null, notka: "Kontrakty CFD rano. Wsparcie z analizy 7 520.", notka_en: "CFD quote this morning. Analysis support at 7,520.", zrodlo: 0 },
    nasdaq: { kurs: 28999, zmiana: 0.14, tydzien: null, notka: "Lekkie odbicie po czwartkowym spadku. Nowa analiza: opór 29 240, cel 28 745.", notka_en: "A slight rebound after Thursday's drop. New analysis: resistance 29,240, target 28,745.", zrodlo: 0 },
    xauusd: { kurs: 4024, zmiana: -0.02, tydzien: null, notka: "W nocy 3986,74, najniżej od trzech miesięcy. Nowa analiza: cel 3940–3960.", notka_en: "Overnight low of $3,986.74, a three-month low. New analysis: target $3,940–3,960.", zrodlo: 0 },
    eurusd: { kurs: 1.121, zmiana: -0.04, tydzien: null, notka: "W zakresie z analizy (1,116–1,130). Dziś PMI ze strefy euro.", notka_en: "Inside the analysis range (1.116–1.130). Eurozone PMIs today.", zrodlo: 0 },
    gbpusd: { kurs: 1.3389, zmiana: -0.08, tydzien: null, notka: "Pod oporem z analizy (1,3435). PMI z Wielkiej Brytanii o 10:30.", notka_en: "Below the analysis resistance (1.3435). UK PMIs at 10:30.", zrodlo: 0 },
    usdjpy: { kurs: 156.93, zmiana: 0.11, tydzien: null, notka: "Odbicie po nocnym minimum 156,25. Nowa analiza: opór 157,60, cel 155,00.", notka_en: "A rebound after the overnight low of 156.25. New analysis: resistance 157.60, target 155.00.", zrodlo: 0 },
    xagusd: { kurs: 54.42, zmiana: -0.31, tydzien: null, notka: "Najniżej od listopada 2025. Nowa analiza: opór 55,50, cel 50.", notka_en: "Lowest since November 2025. New analysis: resistance $55.50, target $50.", zrodlo: 0 },
    usdpln: { kurs: 3.9004, zmiana: 0.62, tydzien: null, notka: "Zamknięcie czwartku. Złoty słabszy przy ucieczce od ryzyka, w zakresie z analizy (3,8762–3,9211).", notka_en: "Thursday close. The zloty weakens as investors shun risk, inside the analysis range (3.8762–3.9211).", zrodlo: 2 },
    wti:    { kurs: 100.4, zmiana: 0.94, tydzien: null, notka: "Kontrakt grudniowy. Brent 114,07 USD. Nowa analiza: cel 105, wsparcie 95.", notka_en: "December contract. Brent at $114.07. New analysis: target $105, support $95.", zrodlo: 0 },
    dax:    { kurs: 25339, zmiana: -0.13, tydzien: null, notka: "Kontrakt CFD rano, nad wsparciem z analizy (25 325).", notka_en: "CFD quote this morning, above the analysis support (25,325).", zrodlo: 0 },
    btcusd: { kurs: 81638, zmiana: 0.41, tydzien: null, notka: "W zakresie z analizy (79 676–84 262).", notka_en: "Inside the analysis range (79,676–84,262).", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Pt 23 paź", wydarzenia: ["Wstępne indeksy PMI: Francja 9:15, Niemcy 9:30, strefa euro 10:00, Wielka Brytania 10:30, USA 15:45", "USA: nastroje konsumentów Uniwersytetu Michigan i oczekiwania inflacyjne (16:00)"] },
    { dzien: "Śr 28 paź", wydarzenia: ["Fed: decyzja w sprawie stóp procentowych (19:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, US500, US100, DE40, bitcoin, waluty), 23 paź 2026 rano", nazwa_en: "Trading Economics: gold (with silver, oil, US500, US100, DE40, bitcoin, currency table), 23 Oct 2026 morning", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "investingLive: Asia-Pacific market news, Asian stocks slide as chip rout spreads (23 paź 2026)", nazwa_en: "investingLive: Asia-Pacific market news, Asian stocks slide as chip rout spreads (23 Oct 2026)", url: "https://investinglive.com/news/investinglive-asia-pacific-market-news-asian-stocks-slide-as-chip-rout-spreads/" },
    { nazwa: "CNBC: USD/PLN, świeca dzienna 22 paź 2026", nazwa_en: "CNBC: USD/PLN, daily candle 22 Oct 2026", url: "https://www.cnbc.com/quotes/PLN=" },
    { nazwa: "FXStreet: Gold hits fresh three-month low below $4,000 (23 paź 2026)", nazwa_en: "FXStreet: Gold hits fresh three-month low below $4,000 (23 Oct 2026)", url: "https://www.fxstreet.com/analysis/gold-price-forecast-xau-usd-hits-fresh-three-month-low-below-4-000-amid-surging-energy-prices-202610230330" }
  ]
};
