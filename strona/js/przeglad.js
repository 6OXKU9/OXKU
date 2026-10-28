// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-28T07:45:00+01:00",
  stanNa_en: "Wednesday morning, 28 Oct 2026 (before the European open)",
  stanNa: "środa rano, 28 paź 2026 (przed otwarciem sesji w Europie)",
  naglowek_en: "Kospi +6% on SK Hynix results. Oil rises again after the Houthis claim a strike on Saudi Arabia's biggest refinery. Australian inflation above forecasts, RBNZ surprises with a hold. The Fed decides tonight.",
  naglowek: "Kospi +6% po wynikach SK Hynix. Ropa znów drożeje po ataku Huti na największą rafinerię Arabii Saudyjskiej. Inflacja w Australii powyżej prognoz, RBNZ zaskakuje utrzymaniem stóp. Wieczorem decyzja Fed.",
  punkty: [
    "Azja: Kospi około +6% i Kosdaq +3% dzięki SK Hynix (zysk operacyjny w III kw. około 83 bln wonów, siedem razy więcej niż rok wcześniej). Nikkei +1,4%, Szanghaj +0,5%, Hang Seng +0,2%; HSBC −7% mimo wzrostu zysku.",
    "Ropa: Brent około 116 USD (+1,8%), WTI 101,5 USD (+1,6%) po tym, jak Huti ogłosili atak rakietowy na największą rafinerię Arabii Saudyjskiej (bez potwierdzenia Rijadu). WSJ: USA ostrzegły sojuszników o możliwej kampanii przeciw Iranowi po wyborach 3 listopada.",
    "Australia: inflacja bazowa (średnia obcięta) 3,7% r/r wobec oczekiwanych 3,6%, miesięczna 4,3%; rośnie szansa na podwyżkę RBA 3 listopada. RBNZ utrzymał stopę 2,75% (4 do 3), choć rynek liczył na podwyżkę.",
    "Złoto około 4 030 USD (−0,8%), srebro 53,80 USD. Dolar mocny przed Fed: EUR/USD 1,1122, USD/JPY 157,95, USD/PLN około 3,956.",
    "Rozliczenia: nietrafione analizy EUR/USD z 18 paź (zamknięcie 1,1122 pod zakresem) i USD/JPY z 23 paź (zamknięcie 157,94 nad 157,60). Są nowe analizy. Dziś Bank Kanady (14:45), Fed (19:00, konferencja 19:30) oraz wyniki Alphabetu i Microsoftu po sesji."
  ],
  punkty_en: [
    "Asia: Kospi about +6% and Kosdaq +3% on SK Hynix (Q3 operating profit of about 83 trillion won, roughly seven times a year earlier). Nikkei +1.4%, Shanghai +0.5%, Hang Seng +0.2%; HSBC −7% despite higher profit.",
    "Oil: Brent around $116 (+1.8%), WTI $101.5 (+1.6%) after the Houthis claimed a missile strike on Saudi Arabia's biggest refinery (unconfirmed by Riyadh). WSJ: the US warned allies of a possible campaign against Iran after the 3 November elections.",
    "Australia: core inflation (trimmed mean) 3.7% y/y versus 3.6% expected, monthly 4.3%; odds of an RBA hike on 3 November rise. The RBNZ held at 2.75% (4-3) although markets expected a hike.",
    "Gold around $4,030 (−0.8%), silver $53.80. The dollar is strong ahead of the Fed: EUR/USD 1.1122, USD/JPY 157.95, USD/PLN around 3.956.",
    "Settlements: the 18 Oct EUR/USD analysis (close of 1.1122 below the range) and the 23 Oct USD/JPY analysis (close of 157.94 above 157.60) missed. New analyses are up. Today: Bank of Canada (14:45), the Fed (19:00, press conference 19:30) and Alphabet and Microsoft results after the close."
  ],
  instrumenty: {
    sp500:  { kurs: 7722.6, zmiana: 0.6, tydzien: null, notka: "Zamknięcie wtorku. Analiza spadkowa z 18 paź: opór 7 790.", notka_en: "Tuesday close. Bearish 18 Oct analysis: resistance 7,790.", zrodlo: 3 },
    nasdaq: { kurs: 29651.4, zmiana: 1.29, tydzien: null, notka: "Zamknięcie wtorku, blisko górnej granicy zakresu z analizy (29 800).", notka_en: "Tuesday close, near the top of the analysis range (29,800).", zrodlo: 3 },
    xauusd: { kurs: 4029.53, zmiana: -0.76, tydzien: null, notka: "We wtorek zamknięcie 4 060, tuż pod oporem z analizy (4 067).", notka_en: "Tuesday close of $4,060, just below the analysis resistance ($4,067).", zrodlo: 0 },
    eurusd: { kurs: 1.1122, zmiana: -0.02, tydzien: null, notka: "Najniżej od kwietnia 2025. Nowa analiza: opór 1,1170, cel 1,1080.", notka_en: "Lowest since April 2025. New analysis: resistance 1.1170, target 1.1080.", zrodlo: 2 },
    gbpusd: { kurs: 1.33, zmiana: -0.05, tydzien: null, notka: "Pod oporem z analizy (1,3435).", notka_en: "Below the analysis resistance (1.3435).", zrodlo: 2 },
    usdjpy: { kurs: 157.95, zmiana: 0.0, tydzien: null, notka: "Nowa analiza: zakres 156,75–159,05.", notka_en: "New analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 53.8, zmiana: -1.12, tydzien: null, notka: "Analiza: opór 55,50, cel 50.", notka_en: "Analysis: resistance $55.50, target $50.", zrodlo: 0 },
    usdpln: { kurs: 3.9564, zmiana: 0.1, tydzien: null, notka: "Wyliczony z kursów EUR/PLN (4,4004) i EUR/USD (1,11221). Analiza: cel 3,98, wsparcie 3,92.", notka_en: "Derived from EUR/PLN (4.4004) and EUR/USD (1.11221). Analysis: target 3.98, support 3.92.", zrodlo: 2 },
    wti:    { kurs: 101.54, zmiana: 1.64, tydzien: null, notka: "Kontrakt grudniowy. Brent 115,95 USD. Analiza: cel 105, wsparcie 95.", notka_en: "December contract. Brent at $115.95. Analysis: target $105, support $95.", zrodlo: 0 },
    dax:    { kurs: 25545, zmiana: -0.18, tydzien: null, notka: "Kontrakt CFD rano. Analiza: zakres 25 317–25 800.", notka_en: "CFD quote this morning. Analysis: 25,317–25,800 range.", zrodlo: 0 },
    btcusd: { kurs: 80799, zmiana: -0.01, tydzien: null, notka: "W zakresie z analizy (79 676–84 262); dziś ostatni dzień jej horyzontu.", notka_en: "Inside the analysis range (79,676–84,262); today is the last day of its horizon.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Śr 28 paź", wydarzenia: ["Bank Kanady (14:45) i Fed (19:00): decyzje w sprawie stóp", "Wyniki Alphabet i Microsoft po sesji"] },
    { dzien: "Czw 29 paź", wydarzenia: ["USA: PKB za III kwartał i inflacja PCE (13:30)", "EBC: decyzja w sprawie stóp (14:15)", "Wyniki Amazon po sesji"] },
    { dzien: "Pt 30 paź", wydarzenia: ["BoJ: decyzja w sprawie stóp", "PKB Niemiec (8:00) i strefy euro (11:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, DE40, bitcoin), 28 paź 2026 rano", nazwa_en: "Trading Economics: gold (with silver, oil, DE40, bitcoin table), 28 Oct 2026 morning", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "investingLive: Asia-Pacific market news, Hawkish RBA, surprise RBNZ hold (28 paź 2026)", nazwa_en: "investingLive: Asia-Pacific market news, Hawkish RBA, surprise RBNZ hold (28 Oct 2026)", url: "https://www.louisvelazquez.com/investinglive-asia-pacific-market-news-hawkish-rba-surprise-rbnz-hold-lift-aud-nzd/" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 28 paź 2026 rano", nazwa_en: "Trading Economics: EUR/USD (with currency table), 28 Oct 2026 morning", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "CNBC: świece dzienne Nasdaq 100 i S&P 500, 27 paź 2026", nazwa_en: "CNBC: Nasdaq 100 and S&P 500 daily candles, 27 Oct 2026", url: "https://www.cnbc.com/quotes/.NDX" }
  ]
};
