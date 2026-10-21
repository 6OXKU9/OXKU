// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-21T18:30:00+02:00",
  stanNa_en: "Wednesday afternoon, 21 Oct 2026 (US session in progress)",
  stanNa: "środa po południu, 21 paź 2026 (trwa sesja w USA)",
  naglowek_en: "Tech leads Wall Street higher, the DAX gains about 1.4%. UK inflation tops forecasts at 3.5%; Tesla, Meta and SAP report tonight.",
  naglowek: "Technologia ciągnie Wall Street w górę, DAX zyskuje około 1,4%. Inflacja w Wielkiej Brytanii powyżej prognoz (3,5%); wieczorem wyniki Tesli, Meta i SAP.",
  punkty: [
    "W połowie sesji w USA: S&P 500 +0,5%, Nasdaq Composite +1,05%, Dow Jones +0,25%. SpaceX +10% po wynikach, Tesla +3,5% (Musk mówi o badaniu możliwego połączenia z SpaceX), Netflix −4–5%.",
    "DAX zyskuje około 1,4%, do 25 660 pkt, dzięki spółkom związanym z AI. Wieczorem wyniki SAP (22:05), a w USA po sesji Tesla i Meta.",
    "Inflacja CPI w Wielkiej Brytanii wzrosła we wrześniu do 3,5% r/r (prognoza 3,4%, poprzednio 3,1%), bazowa do 2,8%. Funt mimo to bez większej reakcji (GBP/USD około 1,339).",
    "Ropa oddaje poranne wzrosty: WTI około 96,9 USD (−1%), Brent około 108,4 USD. Zapasy w USA spadły o 3,06 mln baryłek (EIA); przepływy przez cieśninę Ormuz zbliżają się do poziomów sprzed wojny.",
    "Złoto około 4 131 USD, najniżej od 15 paź, bo droga ropa podsyca obawy inflacyjne przed posiedzeniem Fed. Euro pod presją przy rentownościach francuskich 10-latek powyżej 5%."
  ],
  punkty_en: [
    "Mid-session in the US: S&P 500 +0.5%, Nasdaq Composite +1.05%, Dow Jones +0.25%. SpaceX +10% after earnings, Tesla +3.5% (Musk says a possible merger with SpaceX is being studied), Netflix −4–5%.",
    "The DAX gains about 1.4% to 25,660 on AI-related stocks. SAP reports tonight (22:05 Warsaw time), with Tesla and Meta after the US close.",
    "UK CPI inflation rose to 3.5% y/y in September (forecast 3.4%, previous 3.1%), core to 2.8%. Sterling barely reacted (GBP/USD around 1.339).",
    "Crude gives back its morning gains: WTI around $96.9 (−1%), Brent around $108.4. US inventories fell 3.06M barrels (EIA); flows through the Strait of Hormuz are nearing pre-war levels.",
    "Gold around $4,131, its lowest since 15 Oct, as pricey oil feeds inflation worries ahead of the Fed meeting. The euro is under pressure with French 10-year yields above 5%."
  ],
  instrumenty: {
    sp500:  { kurs: 7751.57, zmiana: 0.51, tydzien: null, notka: "Notowania CFD w trakcie sesji. Opór z analizy 7 790.", notka_en: "CFD quote during the session. Analysis resistance at 7,790.", zrodlo: 0 },
    nasdaq: { kurs: 29853, zmiana: 1.23, tydzien: null, notka: "W trakcie sesji powyżej oporu z analizy (29 750). Liczy się zamknięcie dnia. Po sesji wyniki Tesli i Meta.", notka_en: "Above the analysis resistance (29,750) during the session. The daily close is what counts. Tesla and Meta report after the close.", zrodlo: 0 },
    xauusd: { kurs: 4131, zmiana: 0.16, tydzien: null, notka: "Najniżej od 15 paź; droga ropa i oczekiwania podwyżek stóp ciążą złotu. Wsparcie z analizy 4 096.", notka_en: "Lowest since 15 Oct; pricey oil and rate-hike expectations weigh on gold. Analysis support at 4,096.", zrodlo: 0 },
    eurusd: { kurs: 1.1227, zmiana: -0.09, tydzien: null, notka: "Presja przez rosnące koszty zadłużenia Francji (rentowność 10-latek powyżej 5%).", notka_en: "Pressure from France's rising borrowing costs (10-year yield above 5%).", zrodlo: 1 },
    gbpusd: { kurs: 1.3392, zmiana: 0.09, tydzien: null, notka: "Inflacja 3,5% (powyżej prognozy) wspiera oczekiwania podwyżki BoE 5 lis. Opór z analizy 1,3435.", notka_en: "Inflation at 3.5% (above forecast) supports expectations of a BoE hike on 5 Nov. Analysis resistance at 1.3435.", zrodlo: 1 },
    usdjpy: { kurs: 158.07, zmiana: -0.07, tydzien: null, notka: "Spokojnie w zakresie 157,50–159,00. Posiedzenie BoJ 29–30 paź.", notka_en: "Calm within the 157.50–159.00 range. BoJ meets 29–30 Oct.", zrodlo: 1 },
    xagusd: { kurs: 57.54, zmiana: -0.74, tydzien: null, notka: "Lekko w dół razem ze złotem.", notka_en: "Slightly lower along with gold.", zrodlo: 0 },
    usdpln: { kurs: 3.8882, zmiana: null, tydzien: null, notka: "Wyliczony z kursów EUR/PLN (4,3653) i EUR/USD (1,1227) z tego samego źródła.", notka_en: "Derived from EUR/PLN (4.3653) and EUR/USD (1.1227) from the same source.", zrodlo: 1 },
    wti:    { kurs: 96.85, zmiana: -0.99, tydzien: null, notka: "Kontrakt grudniowy. Spadek mimo mniejszych zapasów (−3,06 mln baryłek), bo przepływy przez Ormuz się poprawiają. Brent 108,43 USD.", notka_en: "December contract. Lower despite a stock draw (−3.06M barrels) as Hormuz flows improve. Brent at $108.43.", zrodlo: 2 },
    dax:    { kurs: 25662, zmiana: 1.41, tydzien: null, notka: "Wzrost dzięki spółkom AI przed wynikami SAP (22:05). Opór z analizy 25 915.", notka_en: "Higher on AI stocks ahead of SAP earnings (22:05 Warsaw time). Analysis resistance at 25,915.", zrodlo: 0 },
    btcusd: { kurs: 84474, zmiana: 1.83, tydzien: null, notka: "Powyżej górnej granicy zakresu z analizy (84 262). Liczy się zamknięcie dnia.", notka_en: "Above the top of the analysis range (84,262). The daily close is what counts.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Śr 21 paź", wydarzenia: ["Wyniki Tesli, Meta i SAP po sesji"] },
    { dzien: "Czw 22 paź", wydarzenia: ["USA: cotygodniowe wnioski o zasiłek dla bezrobotnych"] },
    { dzien: "Pt 23 paź", wydarzenia: ["Wstępne indeksy PMI (strefa euro, Wielka Brytania, USA)", "USA: nastroje konsumentów Uniwersytetu Michigan i oczekiwania inflacyjne"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą US500, US100, DE40, srebro, bitcoin), 21 paź 2026", nazwa_en: "Trading Economics: gold (with US500, US100, DE40, silver, bitcoin table), 21 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 21 paź 2026", nazwa_en: "Trading Economics: EUR/USD (with currency table), 21 Oct 2026", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "Trading Economics: ropa WTI i Brent, zapasy EIA, 21 paź 2026", nazwa_en: "Trading Economics: WTI and Brent crude, EIA inventories, 21 Oct 2026", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Yahoo Finance: Stock market today, 21 paź 2026", nazwa_en: "Yahoo Finance: Stock market today, 21 Oct 2026", url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-october-21-dow-sp-500-nasdaq-100000105.html" },
    { nazwa: "FXStreet: UK CPI inflation climbs to 3.5% YoY in September", url: "https://www.fxstreet.com/news/uk-cpi-set-to-accelerate-paving-the-way-for-a-boe-interest-rate-hike-in-november-202610210200" }
  ]
};
