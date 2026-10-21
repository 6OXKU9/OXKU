// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-21T07:50:00+02:00",
  stanNa_en: "Wednesday morning, 21 Oct 2026 (Asian session)",
  stanNa: "środa rano, 21 paź 2026 (sesja azjatycka)",
  naglowek_en: "Dow up 1%, Netflix slides after hours. Crude rebounds toward $99, gold falls for a fourth day. UK CPI, then Tesla, Meta and SAP tonight.",
  naglowek: "Dow +1%, Netflix tanieje po sesji. Ropa odbija w stronę 99 USD, złoto traci czwarty dzień. Dziś inflacja w Wielkiej Brytanii, wieczorem Tesla, Meta i SAP.",
  punkty: [
    "Wtorek na Wall Street: Dow Jones +1,02% (52 495,88), S&P 500 +0,28% (7 712,57), Nasdaq Composite bez zmian. Liderem była ochrona zdrowia, technologia lekko w dół.",
    "Po sesji: Netflix −5,7% przez słabszą prognozę przychodów, Super Micro +12,7% po podniesieniu prognozy. Dziś po sesji wyniki Tesli i Meta, a w Europie SAP (22:05).",
    "Ropa odbija: WTI około 99,2 USD (+1,4%), Brent około 110,4 USD po większym od oczekiwań spadku zapasów w prywatnym raporcie. Dyplomaci studzą nadzieje na szybkie porozumienie USA–Iran.",
    "RBA otwiera drogę do podwyżki stóp 3 listopada; Goldman Sachs spodziewa się ruchu do 4,85%. W ankiecie Reutersa 69% ekonomistów oczekuje podwyżki BoJ do 1,50% w tym kwartale, większość w grudniu.",
    "W Azji Kospi +5% po wtorkowym spadku, Nikkei +1,1%. Rentowności francuskich obligacji blisko najwyższych od 24 lat. Dziś o 8:00 inflacja CPI w Wielkiej Brytanii (prognoza 3,4% r/r)."
  ],
  punkty_en: [
    "Tuesday on Wall Street: Dow Jones +1.02% (52,495.88), S&P 500 +0.28% (7,712.57), Nasdaq Composite flat. Health care led, technology slightly lower.",
    "After hours: Netflix −5.7% on a light revenue outlook, Super Micro +12.7% after raising guidance. Tesla and Meta report after today's close, and SAP in Europe (22:05 Warsaw time).",
    "Crude rebounds: WTI around $99.2 (+1.4%), Brent around $110.4 after a larger-than-expected draw in a private inventory survey. Diplomats play down hopes of a quick US-Iran deal.",
    "The RBA opens the door to a hike on 3 November; Goldman Sachs expects a move to 4.85%. In a Reuters poll, 69% of economists expect a BoJ hike to 1.50% this quarter, most in December.",
    "In Asia the Kospi rose 5% after Tuesday's drop, the Nikkei +1.1%. French bond yields are near 24-year highs. UK CPI inflation is due at 8:00 Warsaw time (forecast 3.4% y/y)."
  ],
  instrumenty: {
    sp500:  { kurs: 7732.56, zmiana: 0.26, tydzien: null, notka: "Notowania CFD rano. Zamknięcie indeksu kasowego we wtorek: 7 712,57 (+0,28%).", notka_en: "CFD quote this morning. Tuesday's cash index close: 7,712.57 (+0.28%).", zrodlo: 0 },
    nasdaq: { kurs: 29647, zmiana: 0.53, tydzien: null, notka: "Wzrost mimo spadku Netflixa po sesji. Opór z analizy 29 750. Dziś po sesji Tesla i Meta.", notka_en: "Higher despite Netflix's after-hours drop. Analysis resistance at 29,750. Tesla and Meta report after today's close.", zrodlo: 0 },
    xauusd: { kurs: 4122, zmiana: -0.07, tydzien: null, notka: "Czwarta spadkowa sesja z rzędu. Wsparcie z analizy 4 096.", notka_en: "A fourth straight losing session. Analysis support at 4,096.", zrodlo: 0 },
    eurusd: { kurs: 1.1224, zmiana: -0.12, tydzien: null, notka: "Euro blisko kilkumiesięcznych minimów przez niepokoje we Francji i Włoszech oraz rosnące rentowności francuskich obligacji.", notka_en: "The euro is near multi-month lows on unrest in France and Italy and rising French bond yields.", zrodlo: 1 },
    gbpusd: { kurs: 1.3375, zmiana: -0.04, tydzien: null, notka: "Przed inflacją CPI o 8:00 (prognoza 3,4% r/r, poprzednio 3,1%). Opór z analizy 1,3435.", notka_en: "Ahead of CPI at 8:00 Warsaw time (forecast 3.4% y/y, previous 3.1%). Analysis resistance at 1.3435.", zrodlo: 1 },
    usdjpy: { kurs: 158.15, zmiana: -0.01, tydzien: null, notka: "Eksport Japonii we wrześniu +16,7% r/r (prognoza 20,1%). Rynek oczekuje podwyżki BoJ raczej w grudniu niż 30 paź.", notka_en: "Japan's September exports +16.7% y/y (forecast 20.1%). Markets expect a BoJ hike in December rather than on 30 Oct.", zrodlo: 1 },
    xagusd: { kurs: 57.35, zmiana: -1.06, tydzien: null, notka: "Oddaje część wtorkowych wzrostów.", notka_en: "Giving back part of Tuesday's gains.", zrodlo: 0 },
    usdpln: { kurs: 3.8893, zmiana: null, tydzien: null, notka: "Wyliczony z kursów EUR/PLN (4,3654) i EUR/USD (1,1224) z tego samego źródła.", notka_en: "Derived from EUR/PLN (4.3654) and EUR/USD (1.1224) from the same source.", zrodlo: 1 },
    wti:    { kurs: 99.23, zmiana: 1.44, tydzien: null, notka: "Kontrakt grudniowy; wtorkowe rozliczenie 98,28 USD. Brent 110,39 USD. Dziś o 16:30 oficjalne dane o zapasach.", notka_en: "December contract; Tuesday's settlement $98.28. Brent at $110.39. Official inventory data today at 16:30 Warsaw time.", zrodlo: 2 },
    dax:    { kurs: 25430, zmiana: 0.49, tydzien: null, notka: "Notowania CFD rano. Zamknięcie Xetra we wtorek: 25 304. Wyniki SAP dziś o 22:05.", notka_en: "CFD quote this morning. Tuesday's Xetra close: 25,304. SAP reports today at 22:05 Warsaw time.", zrodlo: 0 },
    btcusd: { kurs: 82761, zmiana: -0.23, tydzien: null, notka: "Stabilnie w okolicach 82 800 USD.", notka_en: "Steady around $82,800.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Śr 21 paź", wydarzenia: ["Wielka Brytania: inflacja CPI", "USA: zapasy ropy", "Wyniki Tesli, Meta i SAP po sesji"] },
    { dzien: "Czw 22 paź", wydarzenia: ["USA: cotygodniowe wnioski o zasiłek dla bezrobotnych"] },
    { dzien: "Pt 23 paź", wydarzenia: ["Wstępne indeksy PMI (strefa euro, Wielka Brytania, USA)", "USA: nastroje konsumentów Uniwersytetu Michigan i oczekiwania inflacyjne"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą US500, US100, DE40, srebro, bitcoin), 21 paź 2026", nazwa_en: "Trading Economics: gold (with US500, US100, DE40, silver, bitcoin table), 21 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 21 paź 2026", nazwa_en: "Trading Economics: EUR/USD (with currency table), 21 Oct 2026", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "Trading Economics: ropa WTI i Brent, 21 paź 2026", nazwa_en: "Trading Economics: WTI and Brent crude, 21 Oct 2026", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "CappNotes: Closing Look, wtorek 20 paź 2026", nazwa_en: "CappNotes: Closing Look, Tuesday 20 Oct 2026", url: "https://cappnotes.substack.com/p/closing-look-tuesday-october-20-2026" },
    { nazwa: "investingLive: Asia-Pacific market news, RBA's Hauser puts November hike in play", url: "https://investinglive.com/news/investinglive-asia-pacific-market-news-rba-s-hauser-puts-november-hike-in-play/" },
    { nazwa: "investingLive: UK inflation set to climb (zapowiedź CPI)", nazwa_en: "investingLive: UK inflation set to climb (CPI preview)", url: "https://investinglive.com/news/economic-data-spotlight-uk-inflation-set-to-climb-as-boe-rate-hike-and-autumn-budget-collide/" }
  ]
};
