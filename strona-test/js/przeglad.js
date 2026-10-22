// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-22T07:45:00+02:00",
  stanNa_en: "Thursday morning, 22 Oct 2026 (before the European open)",
  stanNa: "czwartek rano, 22 paź 2026 (przed sesją w Europie)",
  naglowek_en: "Risk-off overnight: Nasdaq futures −1.3% after Tesla's capex cut, Asia lower, Brent at $111 on Gulf tensions; gold back below $4,100.",
  naglowek: "Noc w trybie ryzyka: kontrakty na Nasdaq −1,3% po cięciu inwestycji Tesli, Azja w dół, Brent 111 USD przez napięcia w Zatoce; złoto znów poniżej 4 100 USD.",
  punkty: [
    "Kontrakty na Nasdaq 100 tracą około 1,3%, na S&P 500 około 0,7%. Tesla po sesji −3,3% po obniżeniu prognozy nakładów inwestycyjnych, Meta +2,2% po podniesieniu swojej, Lam Research −7,4%.",
    "Azja na minusie: Kospi −3,3% (najniżej od kwietnia), Hang Seng −2,9%, Nikkei około −1%. Bank Korei bez zmian stóp (3,00%), inflacja w Nowej Zelandii 3,7% r/r (prognoza 3,8%).",
    "Bliski Wschód: Departament Stanu wycofuje część personelu z Arabii Saudyjskiej, a według New York Timesa USA i Izrael mają plany kolejnych uderzeń na Iran. Brent +2% do około 111 USD, WTI około 99 USD.",
    "Złoto spada o około 1,4% do 4 080 USD mimo napięć, bo drożejąca ropa wzmacnia obawy o inflację i podwyżki stóp; srebro −3,3%. Popyt na bezpieczne aktywa trafia do obligacji USA (10-latki 5,09%) i jena (157,70).",
    "Wczoraj Nasdaq 100 zamknął się na 29 822 pkt, powyżej poziomu unieważnienia (29 750), więc analiza spadkowa z 18 paź jest nietrafiona. Dziś nowa analiza: cel 29 000, unieważnienie przy zamknięciu powyżej 30 000."
  ],
  punkty_en: [
    "Nasdaq 100 futures are down about 1.3%, S&P 500 futures about 0.7%. Tesla −3.3% after hours on a capex cut, Meta +2.2% after raising its own, Lam Research −7.4%.",
    "Asia is lower: Kospi −3.3% (lowest since April), Hang Seng −2.9%, Nikkei about −1%. The Bank of Korea held at 3.00%, New Zealand inflation 3.7% y/y (forecast 3.8%).",
    "Middle East: the State Department is pulling some staff out of Saudi Arabia, and the New York Times reports the US and Israel have plans for further strikes on Iran. Brent +2% to about $111, WTI around $99.",
    "Gold falls about 1.4% to $4,080 despite the tensions, as pricier oil feeds inflation and rate-hike worries; silver −3.3%. Haven demand goes to Treasuries (10-year 5.09%) and the yen (157.70).",
    "Yesterday the Nasdaq 100 closed at 29,822, above the invalidation level (29,750), so the bearish analysis of 18 Oct is a miss. New analysis today: target 29,000, invalidated by a close above 30,000."
  ],
  instrumenty: {
    sp500:  { kurs: 7697.38, zmiana: -0.77, tydzien: null, notka: "Notowania CFD rano. Wczoraj zamknięcie 7 757 (+0,6%). Wsparcie z analizy 7 520, opór 7 790.", notka_en: "Morning CFD quote. Yesterday's close 7,757 (+0.6%). Analysis support 7,520, resistance 7,790.", zrodlo: 0 },
    nasdaq: { kurs: 29359, zmiana: -1.56, tydzien: null, notka: "Notowania CFD rano. Analiza z 18 paź nietrafiona (zamknięcie 29 822 powyżej 29 750). Nowa: cel 29 000, unieważnienie powyżej 30 000.", notka_en: "Morning CFD quote. The 18 Oct analysis missed (close 29,822 above 29,750). New one: target 29,000, invalidated above 30,000.", zrodlo: 0 },
    xauusd: { kurs: 4080.51, zmiana: -1.46, tydzien: null, notka: "Poniżej 4 100 przez obawy o inflację i podwyżki stóp. Wsparcie z analizy 4 096: liczy się zamknięcie dnia.", notka_en: "Below $4,100 on inflation and rate-hike worries. Analysis support at 4,096: the daily close is what counts.", zrodlo: 0 },
    eurusd: { kurs: 1.1245, zmiana: 0.1, tydzien: null, notka: "Lekko w górę przy słabszym dolarze.", notka_en: "Slightly higher on a softer dollar.", zrodlo: 1 },
    gbpusd: { kurs: 1.3395, zmiana: 0.01, tydzien: null, notka: "Blisko miesięcznego maksimum po inflacji 3,5%. Opór z analizy 1,3435.", notka_en: "Near a one-month high after 3.5% inflation. Analysis resistance at 1.3435.", zrodlo: 4 },
    usdjpy: { kurs: 157.7, zmiana: -0.3, tydzien: null, notka: "Jen zyskuje jako bezpieczna przystań. Dolna granica zakresu z analizy 157,50.", notka_en: "The yen gains as a safe haven. Bottom of the analysis range at 157.50.", zrodlo: 1 },
    xagusd: { kurs: 56.05, zmiana: -3.29, tydzien: null, notka: "Mocny spadek razem ze złotem. Cel analizy spadkowej 55,40.", notka_en: "Sharp drop along with gold. Bearish analysis target at 55.40.", zrodlo: 0 },
    usdpln: { kurs: 3.8764, zmiana: -0.21, tydzien: null, notka: "Zamknięcie z 21 paź, tuż nad dolną granicą zakresu z analizy (3,8762).", notka_en: "Close of 21 Oct, just above the bottom of the analysis range (3.8762).", zrodlo: 3 },
    wti:    { kurs: 99.04, zmiana: 1.95, tydzien: null, notka: "Kontrakt grudniowy. W górę przez napięcia w Zatoce; Brent 111,11 USD. Opór z analizy (po korekcie) 99,32.", notka_en: "December contract. Higher on Gulf tensions; Brent at $111.11. Analysis resistance (adjusted) at 99.32.", zrodlo: 0 },
    dax:    { kurs: 25508, zmiana: -0.53, tydzien: null, notka: "Notowania przed sesją. Wczoraj zamknięcie 25 645 (+1,35%). Wsparcie z analizy 25 325.", notka_en: "Pre-market quote. Yesterday's close 25,645 (+1.35%). Analysis support at 25,325.", zrodlo: 0 },
    btcusd: { kurs: 82765, zmiana: -1.48, tydzien: null, notka: "Wczorajsze zamknięcie dnia (84 025) w zakresie z analizy, więc analiza nadal w toku. Zakres 79 676–84 262.", notka_en: "Yesterday's daily close (84,025) was inside the analysis range, so the analysis is still open. Range 79,676–84,262.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Czw 22 paź", wydarzenia: ["USA: cotygodniowe wnioski o zasiłek dla bezrobotnych (14:30)", "USA: indeks wskaźników wyprzedzających (16:00)"] },
    { dzien: "Pt 23 paź", wydarzenia: ["Wstępne indeksy PMI (strefa euro, Wielka Brytania, USA)", "USA: nastroje konsumentów Uniwersytetu Michigan i oczekiwania inflacyjne"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, US500, US100, DE40, bitcoin), 22 paź 2026", nazwa_en: "Trading Economics: gold (with silver, oil, US500, US100, DE40, bitcoin table), 22 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Bloomberg via swissinfo: US Stock Futures Drop After Earnings, Oil Gains (22 paź 2026)", url: "https://www.swissinfo.ch/eng/us-stock-futures-drop-after-earnings,-oil-gains:-markets-wrap/92254614" },
    { nazwa: "investingLive: Asia-Pacific market news, 22 paź 2026", nazwa_en: "investingLive: Asia-Pacific market news, 22 Oct 2026", url: "https://investinglive.com/news/investinglive-asia-pacific-market-news-asian-stocks-slide-dollar-slips/" },
    { nazwa: "CNBC: świece dzienne (zamknięcia 21 paź 2026)", nazwa_en: "CNBC: daily candles (21 Oct 2026 closes)", url: "https://www.cnbc.com/quotes/PLN=" },
    { nazwa: "Trading Economics: GBP/USD (z tabelą walut), 22 paź 2026", nazwa_en: "Trading Economics: GBP/USD (with currency table), 22 Oct 2026", url: "https://tradingeconomics.com/united-kingdom/currency" }
  ]
};
