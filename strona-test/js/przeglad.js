// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-26T07:45:00+01:00",
  stanNa_en: "Monday morning, 26 Oct 2026 (before the European open)",
  stanNa: "poniedziałek rano, 26 paź 2026 (przed otwarciem sesji w Europie)",
  naglowek_en: "Oil eases after a weekend without US escalation against Iran: WTI −2.1%, Brent near $114.6. Asia mostly lower (Kospi −1.6%), the Bovespa ETF in Tokyo −15% after Lula's win in Brazil. Fed week ahead.",
  naglowek: "Ropa tanieje po weekendzie bez eskalacji USA wobec Iranu: WTI −2,1%, Brent około 114,6 USD. Azja głównie na minusie (Kospi −1,6%), ETF na Bovespę w Tokio −15% po wygranej Luli w Brazylii. Przed nami tydzień Fed.",
  punkty: [
    "Azja: Nikkei −0,7%, Kospi −1,6%, Kosdaq −2,8%, Szanghaj −0,3%, Hang Seng +0,2%. Goldman obniżył 12-miesięczny cel dla Kospi do 9 000 z 12 000 pkt.",
    "Ropa otworzyła tydzień luką w dół: WTI około 101,1 USD (−2,1%), Brent 114,6 USD (−1,8%). W weekend nie było nowej eskalacji USA wobec Iranu, a przedstawiciele Arabii Saudyjskiej, Turcji i Pakistanu mają się dziś spotkać z władzami Iranu w Teheranie.",
    "Lula wygrał drugą turę wyborów w Brazylii (około 52% do 48%). Notowany w Tokio ETF na brazylijskie akcje spadł o prawie 15%.",
    "Złoto około 4 010 USD (+0,4%) po tygodniowym spadku o około 4%, srebro 54,09 USD. Chiński juan najmocniejszy od czerwca 2022 roku. USD/JPY około 157,1.",
    "Rozliczenie: analiza USD/PLN z 18 paź jest nietrafiona (piątkowe zamknięcie 3,9264 powyżej zakresu); jest nowa analiza wzrostowa. W tym tygodniu Fed (środa 19:00), EBC (czwartek 14:15) i BoJ (piątek)."
  ],
  punkty_en: [
    "Asia: Nikkei −0.7%, Kospi −1.6%, Kosdaq −2.8%, Shanghai −0.3%, Hang Seng +0.2%. Goldman cut its 12-month Kospi target to 9,000 from 12,000.",
    "Oil opened the week with a gap lower: WTI around $101.1 (−2.1%), Brent $114.6 (−1.8%). There was no fresh US escalation against Iran over the weekend, and Saudi, Turkish and Pakistani officials are due to meet Iranian officials in Tehran today.",
    "Lula won Brazil's presidential runoff (about 52% to 48%). A Tokyo-listed ETF on Brazilian stocks fell almost 15%.",
    "Gold around $4,010 (+0.4%) after a weekly drop of about 4%, silver $54.09. China's yuan at its strongest since June 2022. USD/JPY near 157.1.",
    "Settlement: the 18 Oct USD/PLN analysis missed (Friday's close of 3.9264 was above the range); a new bullish analysis is up. This week brings the Fed (Wednesday 19:00), ECB (Thursday 14:15) and BoJ (Friday)."
  ],
  instrumenty: {
    sp500:  { kurs: 7637.09, zmiana: 0.18, tydzien: null, notka: "Kontrakty CFD rano. Wsparcie z analizy 7 520.", notka_en: "CFD quote this morning. Analysis support at 7,520.", zrodlo: 0 },
    nasdaq: { kurs: 28957.5, zmiana: 0.0, tydzien: null, notka: "Zamknięcie piątku. Analiza: opór 29 240, cel 28 745 (piątkowe minimum 28 826).", notka_en: "Friday close. Analysis: resistance 29,240, target 28,745 (Friday low 28,826).", zrodlo: 3 },
    xauusd: { kurs: 4010.32, zmiana: 0.41, tydzien: null, notka: "Blisko minimum od trzech miesięcy. Analiza: opór 4 067, cel 3 950.", notka_en: "Near a three-month low. Analysis: resistance $4,067, target $3,950.", zrodlo: 0 },
    eurusd: { kurs: 1.1215, zmiana: 0.11, tydzien: null, notka: "W zakresie z analizy (1,116–1,130). EBC w czwartek.", notka_en: "Inside the analysis range (1.116–1.130). ECB on Thursday.", zrodlo: 2 },
    gbpusd: { kurs: 1.337, zmiana: -0.06, tydzien: null, notka: "Pod oporem z analizy (1,3435).", notka_en: "Below the analysis resistance (1.3435).", zrodlo: 2 },
    usdjpy: { kurs: 157.1, zmiana: 0.15, tydzien: null, notka: "Analiza: opór 157,60, cel 155,00. BoJ w piątek.", notka_en: "Analysis: resistance 157.60, target 155.00. BoJ on Friday.", zrodlo: 2 },
    xagusd: { kurs: 54.09, zmiana: 0.39, tydzien: null, notka: "Lekkie odbicie po minimum roku 53,01. Analiza: opór 55,50, cel 50.", notka_en: "A slight rebound after the 53.01 yearly low. Analysis: resistance $55.50, target $50.", zrodlo: 0 },
    usdpln: { kurs: 3.9266, zmiana: 0.01, tydzien: null, notka: "Najdrożej od prawie dwóch lat. Nowa analiza: cel 3,9345, wsparcie 3,9002.", notka_en: "Highest in almost two years. New analysis: target 3.9345, support 3.9002.", zrodlo: 4 },
    wti:    { kurs: 101.09, zmiana: -2.11, tydzien: null, notka: "Kontrakt grudniowy. Brent 114,57 USD. Analiza: cel 105, wsparcie 95.", notka_en: "December contract. Brent at $114.57. Analysis: target $105, support $95.", zrodlo: 0 },
    dax:    { kurs: 25229, zmiana: 0.19, tydzien: null, notka: "Kontrakt CFD rano. Analiza: opór 25 475, cel 24 800.", notka_en: "CFD quote this morning. Analysis: resistance 25,475, target 24,800.", zrodlo: 0 },
    btcusd: { kurs: 79949, zmiana: -0.08, tydzien: null, notka: "Blisko dolnej granicy zakresu z analizy (79 676–84 262). Liczy się zamknięcie dnia o 1:00 czasu polskiego.", notka_en: "Near the bottom of the analysis range (79,676–84,262). The daily close at 00:00 UTC is what counts.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Pn 26 paź", wydarzenia: ["USA: indeks aktywności Fed z Chicago (13:30), indeks Fed z Dallas (15:30), aukcja 2-latek (18:00)"] },
    { dzien: "Wt 27 paź", wydarzenia: ["USA: zamówienia na dobra trwałe (13:30) i zaufanie konsumentów Conference Board (15:00)"] },
    { dzien: "Śr 28 paź", wydarzenia: ["Fed: decyzja w sprawie stóp procentowych (19:00)", "Wyniki Alphabet i Microsoft po sesji"] },
    { dzien: "Czw 29 paź", wydarzenia: ["USA: PKB za III kwartał i inflacja PCE (13:30)", "EBC: decyzja w sprawie stóp (14:15)", "Wyniki Amazon po sesji"] },
    { dzien: "Pt 30 paź", wydarzenia: ["BoJ: decyzja w sprawie stóp", "PKB Niemiec (8:00) i strefy euro (11:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, DE40, bitcoin, waluty), 26 paź 2026 rano", nazwa_en: "Trading Economics: gold (with silver, oil, DE40, bitcoin, currency table), 26 Oct 2026 morning", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "investingLive: Asia-Pacific market news, Brazil ETF slumps on Lula win (26 paź 2026)", nazwa_en: "investingLive: Asia-Pacific market news, Brazil ETF slumps on Lula win (26 Oct 2026)", url: "https://investinglive.com/news/investinglive-asia-pacific-market-news-brazil-etf-slumps-on-lula-win/" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 26 paź 2026", nazwa_en: "Trading Economics: EUR/USD (with currency table), 26 Oct 2026", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "CNBC: Nasdaq 100, świeca dzienna 23 paź 2026", nazwa_en: "CNBC: Nasdaq 100, daily candle 23 Oct 2026", url: "https://www.cnbc.com/quotes/.NDX" },
    { nazwa: "money.pl: Kurs dolara do złotego 26.10.2026", nazwa_en: "money.pl: USD/PLN rate, 26 Oct 2026", url: "https://www.money.pl/pieniadze/ile-kosztuje-dolar-kurs-dolara-do-zlotego-pln-usd-26-10-2026-7344105680009312a.html" }
  ]
};
