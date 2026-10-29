// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-29T07:45:00+01:00",
  stanNa_en: "Thursday morning, 29 Oct 2026 (before the European session)",
  stanNa: "czwartek rano, 29 paź 2026 (przed sesją europejską)",
  naglowek_en: "Alphabet falls over 9% after hours and drags Nasdaq futures down about 1%. Korean stocks lose almost 3% as Samsung delays its shareholder-return plan. Oil eases after a US outreach to Iran. Today: US GDP and PCE, the ECB and Amazon.",
  naglowek: "Alphabet traci po sesji ponad 9% i ciągnie kontrakty na Nasdaq w dół o około 1%. Giełda w Korei traci blisko 3%, bo Samsung odkłada plan zwrotu kapitału dla akcjonariuszy. Ropa tanieje po próbie wznowienia rozmów USA z Iranem. Dziś PKB i PCE w USA, EBC i Amazon.",
  punkty: [
    "Azja: Kospi −2,8%, Kosdaq −2,9%. Samsung tracił do 6,6% po przesunięciu planu zwrotu kapitału, mimo rekordowego zysku operacyjnego za III kwartał (około 107 bln wonów). Szanghaj −0,8%, Nikkei i Hang Seng bez większych zmian.",
    "Po wynikach: Alphabet ponad −9% w handlu posesyjnym, Microsoft na plusie (Azure +48%), Oracle +11%. Kontrakt na Nasdaq 100 około 29 447 pkt (−1,2% wobec zamknięcia), S&P 500 około 7 722 (−0,3%).",
    "Ropa tanieje (WTI około 101 USD, Brent około 114 USD) po liście wiceprezydenta Vance’a do Irańczyka Rezaeiego w sprawie wznowienia rozmów. Złoto około 4 025 USD (−1%), ale nadal powyżej 4 000. Srebro −2,3%.",
    "Dolar stabilny: EUR/USD 1,1141, USD/JPY 157,88, USD/PLN około 3,950. Prezes RBNZ uważa grudniową podwyżkę za prawdopodobną; HKMA utrzymał stopę 4,25%.",
    "Rozliczenia: analiza bitcoina z 18 paź trafiona (przez 10 sesji kurs zamykał się w zakresie), analiza Nasdaq z 27 paź nietrafiona (zamknięcie 29 813 nad 29 800). Złoto zamknęło się na 4 066,77, tuż pod unieważnieniem (4 067), więc analiza nadal trwa. Nowe szkice: BTC i Nasdaq spadkowe."
  ],
  punkty_en: [
    "Asia: Kospi −2.8%, Kosdaq −2.9%. Samsung fell as much as 6.6% after delaying its shareholder-return plan, despite a record Q3 operating profit (about 107 trillion won). Shanghai −0.8%, Nikkei and Hang Seng little changed.",
    "After earnings: Alphabet down over 9% after hours, Microsoft higher (Azure +48%), Oracle +11%. Nasdaq 100 futures around 29,447 (−1.2% versus the close), S&P 500 around 7,722 (−0.3%).",
    "Oil eases (WTI around $101, Brent around $114) after Vice President Vance wrote to Iran's Rezaei about reviving talks. Gold around $4,025 (−1%) but still above $4,000. Silver −2.3%.",
    "The dollar is steady: EUR/USD 1.1141, USD/JPY 157.88, USD/PLN around 3.950. The RBNZ governor sees a December hike as likely; the HKMA held at 4.25%.",
    "Settlements: the 18 Oct bitcoin analysis hit (closes stayed inside the range for 10 sessions), the 27 Oct Nasdaq analysis missed (close of 29,813 above 29,800). Gold closed at $4,066.77, just under the $4,067 invalidation, so that analysis stays open. New drafts: bearish BTC and Nasdaq."
  ],
  instrumenty: {
    sp500:  { kurs: 7721.66, zmiana: -0.29, tydzien: null, notka: "Notowanie CFD. Analiza spadkowa z 18 paź: cel 7 520, opór 7 790; horyzont do 30 paź.", notka_en: "CFD quote. Bearish 18 Oct analysis: target 7,520, resistance 7,790; horizon to 30 Oct.", zrodlo: 1 },
    nasdaq: { kurs: 29446.67, zmiana: -1.23, tydzien: null, notka: "Notowanie CFD po spadku Alphabetu. Nowa analiza spadkowa: cel 29 000, opór 29 800.", notka_en: "CFD quote after Alphabet's drop. New bearish analysis: target 29,000, resistance 29,800.", zrodlo: 1 },
    xauusd: { kurs: 4025, zmiana: -1.03, tydzien: null, notka: "Zamknięcie 28 paź 4 066,77, tuż pod unieważnieniem (4 067). Analiza spadkowa: cel 3 950.", notka_en: "28 Oct close $4,066.77, just under the invalidation ($4,067). Bearish analysis: target $3,950.", zrodlo: 0 },
    eurusd: { kurs: 1.1141, zmiana: -0.10, tydzien: null, notka: "Analiza: opór 1,1170, cel 1,1080. EBC dziś o 14:15.", notka_en: "Analysis: resistance 1.1170, target 1.1080. ECB today at 14:15.", zrodlo: 2 },
    gbpusd: { kurs: 1.3317, zmiana: -0.06, tydzien: null, notka: "Pod oporem z analizy (1,3435); horyzont do 30 paź.", notka_en: "Below the analysis resistance (1.3435); horizon to 30 Oct.", zrodlo: 2 },
    usdjpy: { kurs: 157.88, zmiana: 0.04, tydzien: null, notka: "Analiza: zakres 156,75–159,05. BoJ jutro.", notka_en: "Analysis: 156.75–159.05 range. BoJ tomorrow.", zrodlo: 2 },
    xagusd: { kurs: 52.72, zmiana: -2.28, tydzien: null, notka: "Analiza: opór 55,50, cel 50.", notka_en: "Analysis: resistance $55.50, target $50.", zrodlo: 0 },
    usdpln: { kurs: 3.9496, zmiana: 0.20, tydzien: null, notka: "Wyliczony z kursów EUR/PLN (4,4000) i EUR/USD (1,11405). Analiza: cel 3,98, wsparcie 3,92.", notka_en: "Derived from EUR/PLN (4.4000) and EUR/USD (1.11405). Analysis: target 3.98, support 3.92.", zrodlo: 2 },
    wti:    { kurs: 101, zmiana: -1.73, tydzien: null, notka: "Kontrakt grudniowy. Brent około 114 USD. Analiza: cel 105, wsparcie 95.", notka_en: "December contract. Brent around $114. Analysis: target $105, support $95.", zrodlo: 0 },
    dax:    { kurs: 25704.02, zmiana: 0.44, tydzien: null, notka: "Zamknięcie Xetra z 28 paź. Analiza: zakres 25 317–25 800.", notka_en: "Xetra close of 28 Oct. Analysis: 25,317–25,800 range.", zrodlo: 3 },
    btcusd: { kurs: 79988, zmiana: -1.55, tydzien: null, notka: "Analiza z 18 paź trafiona. Nowa analiza spadkowa: cel 78 000, opór 81 950.", notka_en: "18 Oct analysis hit. New bearish analysis: target 78,000, resistance 81,950.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Czw 29 paź", wydarzenia: ["USA: PKB za III kwartał i inflacja PCE (13:30)", "EBC: decyzja w sprawie stóp (14:15)", "Wyniki Amazon po sesji"] },
    { dzien: "Pt 30 paź", wydarzenia: ["BoJ: decyzja w sprawie stóp", "PKB Niemiec (8:00) i strefy euro (11:00), inflacja w Niemczech (14:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, bitcoin), 29 paź 2026", nazwa_en: "Trading Economics: gold (with silver, oil, bitcoin table), 29 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA (US100, US500), 29 paź 2026", nazwa_en: "Trading Economics: US stock market (US100, US500), 29 Oct 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 29 paź 2026", nazwa_en: "Trading Economics: EUR/USD (with currency table), 29 Oct 2026", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss (28 paź 2026)", nazwa_en: "ARIVA.DE / dpa-AFX: Frankfurt stocks close (28 Oct 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-auf-erholungskurs-12185579" },
    { nazwa: "investingLive: Asia-Pacific market news, oil eases on Vance's Iran outreach (29 paź 2026)", nazwa_en: "investingLive: Asia-Pacific market news, oil eases on Vance's Iran outreach (29 Oct 2026)", url: "https://investinglive.com/news/investinglive-asia-pacific-market-news-oil-eases-on-vance-s-iran-outreach/" }
  ]
};
