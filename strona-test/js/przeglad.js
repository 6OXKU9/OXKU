// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-27T07:45:00+01:00",
  stanNa_en: "Tuesday morning, 27 Oct 2026 (before the European open)",
  stanNa: "wtorek rano, 27 paź 2026 (przed otwarciem sesji w Europie)",
  naglowek_en: "Asia follows Wall Street's AI rebound: Kospi +3.4%, Nikkei +1.7%. The dollar firms ahead of the Fed: USD/PLN near 3.94, an 18-month high. Silver −2%.",
  naglowek: "Azja podąża za odbiciem spółek AI na Wall Street: Kospi +3,4%, Nikkei +1,7%. Dolar mocniejszy przed Fed: USD/PLN przy 3,94, najwyżej od półtora roku. Srebro −2%.",
  punkty: [
    "Azja: Kospi +3,4% (giełda w Seulu wstrzymała na chwilę handel programowy), Kosdaq +2,8%, Nikkei +1,7% dzięki producentom chipów. Szanghaj −0,1%, Hang Seng −0,4%.",
    "PKB Korei Południowej w III kwartale +1,0% k/k wobec oczekiwanych 0,7%, dzięki eksportowi chipów do AI. Zyski chińskich firm przemysłowych we wrześniu +14,4% r/r.",
    "Dolar mocniejszy: USD/JPY 157,8, EUR/USD 1,1167, blisko kilkumiesięcznych minimów. USD/PLN około 3,944, najwyżej od półtora roku, EUR/PLN 4,40.",
    "Złoto około 4 005 USD (−0,3%), srebro 52,87 USD (−2,0%). Ropa WTI około 101,2 USD, Brent 115,2 USD; wymiana ataków między Arabią Saudyjską a Huti trwa.",
    "Rozliczenia: trafiona analiza USD/PLN z 26 paź (maksimum 3,9418), nietrafiona Nasdaq z 23 paź (zamknięcie 29 273 powyżej 29 240). Dla obu instrumentów są nowe analizy. Dziś w USA zamówienia na dobra trwałe (13:30) i zaufanie konsumentów (15:00)."
  ],
  punkty_en: [
    "Asia: Kospi +3.4% (the Seoul exchange briefly halted program trading), Kosdaq +2.8%, Nikkei +1.7% on chipmakers. Shanghai −0.1%, Hang Seng −0.4%.",
    "South Korea's Q3 GDP grew 1.0% q/q versus 0.7% expected, driven by AI chip exports. Chinese industrial profits rose 14.4% y/y in September.",
    "The dollar firms: USD/JPY 157.8, EUR/USD 1.1167, near multi-month lows. USD/PLN around 3.944, an 18-month high, EUR/PLN 4.40.",
    "Gold around $4,005 (−0.3%), silver $52.87 (−2.0%). WTI around $101.2, Brent $115.2; exchanges of attacks between Saudi Arabia and the Houthis continue.",
    "Settlements: the 26 Oct USD/PLN analysis hit (high of 3.9418), the 23 Oct Nasdaq analysis missed (close of 29,273 above 29,240). Both instruments have new analyses. Today the US releases durable goods (13:30) and consumer confidence (15:00)."
  ],
  instrumenty: {
    sp500:  { kurs: 7676.77, zmiana: 0.7, tydzien: null, notka: "Zamknięcie poniedziałku. Wsparcie z analizy 7 520.", notka_en: "Monday close. Analysis support at 7,520.", zrodlo: 3 },
    nasdaq: { kurs: 29273.4, zmiana: 1.09, tydzien: null, notka: "Zamknięcie poniedziałku. Nowa analiza: zakres 29 000–29 800.", notka_en: "Monday close. New analysis: 29,000–29,800 range.", zrodlo: 3 },
    xauusd: { kurs: 4004.82, zmiana: -0.3, tydzien: null, notka: "Analiza: opór 4 067, cel 3 950.", notka_en: "Analysis: resistance $4,067, target $3,950.", zrodlo: 0 },
    eurusd: { kurs: 1.1167, zmiana: -0.06, tydzien: null, notka: "Blisko dolnej granicy zakresu z analizy (1,116).", notka_en: "Near the bottom of the analysis range (1.116).", zrodlo: 2 },
    gbpusd: { kurs: 1.3333, zmiana: -0.07, tydzien: null, notka: "Pod oporem z analizy (1,3435).", notka_en: "Below the analysis resistance (1.3435).", zrodlo: 2 },
    usdjpy: { kurs: 157.79, zmiana: 0.18, tydzien: null, notka: "Powyżej oporu z analizy (157,60); liczy się zamknięcie dnia. BoJ w piątek.", notka_en: "Above the analysis resistance (157.60); the daily close is what counts. BoJ on Friday.", zrodlo: 2 },
    xagusd: { kurs: 52.87, zmiana: -2.02, tydzien: null, notka: "Nowe minimum roku. Analiza: opór 55,50, cel 50.", notka_en: "A new yearly low. Analysis: resistance $55.50, target $50.", zrodlo: 0 },
    usdpln: { kurs: 3.9437, zmiana: 0.16, tydzien: null, notka: "Wyliczony z kursów EUR/PLN (4,4039) i EUR/USD (1,1167). Nowa analiza: cel 3,98, wsparcie 3,92.", notka_en: "Derived from EUR/PLN (4.4039) and EUR/USD (1.1167). New analysis: target 3.98, support 3.92.", zrodlo: 2 },
    wti:    { kurs: 101.15, zmiana: -0.6, tydzien: null, notka: "Kontrakt grudniowy. Brent 115,22 USD. Analiza: cel 105, wsparcie 95.", notka_en: "December contract. Brent at $115.22. Analysis: target $105, support $95.", zrodlo: 0 },
    dax:    { kurs: 25372, zmiana: -0.15, tydzien: null, notka: "Kontrakt CFD rano. Analiza: opór 25 475, cel 24 800.", notka_en: "CFD quote this morning. Analysis: resistance 25,475, target 24,800.", zrodlo: 0 },
    btcusd: { kurs: 79663, zmiana: -0.43, tydzien: null, notka: "Tuż pod dolną granicą zakresu z analizy (79 676). Liczy się zamknięcie dnia o 1:00 czasu polskiego.", notka_en: "Just below the bottom of the analysis range (79,676). The daily close at 00:00 UTC is what counts.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Wt 27 paź", wydarzenia: ["USA: zamówienia na dobra trwałe (13:30) i zaufanie konsumentów Conference Board (15:00)"] },
    { dzien: "Śr 28 paź", wydarzenia: ["Fed: decyzja w sprawie stóp procentowych (19:00)", "Wyniki Alphabet i Microsoft po sesji"] },
    { dzien: "Czw 29 paź", wydarzenia: ["USA: PKB za III kwartał i inflacja PCE (13:30)", "EBC: decyzja w sprawie stóp (14:15)", "Wyniki Amazon po sesji"] },
    { dzien: "Pt 30 paź", wydarzenia: ["BoJ: decyzja w sprawie stóp", "PKB Niemiec (8:00) i strefy euro (11:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, DE40, bitcoin), 27 paź 2026 rano", nazwa_en: "Trading Economics: gold (with silver, oil, DE40, bitcoin table), 27 Oct 2026 morning", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "investingLive: Asia-Pacific market news, Regional stocks mostly rose (27 paź 2026)", nazwa_en: "investingLive: Asia-Pacific market news, Regional stocks mostly rose (27 Oct 2026)", url: "https://investinglive.com/news/investinglive-asia-pacific-market-news-regional-stocks-mostly-rose/" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 27 paź 2026 rano", nazwa_en: "Trading Economics: EUR/USD (with currency table), 27 Oct 2026 morning", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "CNBC: świece dzienne Nasdaq 100 i S&P 500, 26 paź 2026", nazwa_en: "CNBC: Nasdaq 100 and S&P 500 daily candles, 26 Oct 2026", url: "https://www.cnbc.com/quotes/.NDX" }
  ]
};
