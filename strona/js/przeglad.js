// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-10-21T22:30:00+02:00",
  stanNa_en: "Wednesday evening, 21 Oct 2026 (after the US close)",
  stanNa: "środa wieczorem, 21 paź 2026 (po zamknięciu sesji w USA)",
  naglowek_en: "Tech lifts Wall Street for a fourth day: S&P 500 +0.6%, Nasdaq +1.05%. After the bell Tesla beat on profit, SAP raised its cloud outlook; Brent near $110.",
  naglowek: "Technologia czwarty dzień ciągnie Wall Street: S&P 500 +0,6%, Nasdaq +1,05%. Po sesji Tesla z zyskiem powyżej prognoz, SAP podnosi prognozę chmury; Brent blisko 110 USD.",
  punkty: [
    "Zamknięcie w USA: S&P 500 7 757,72 (+0,59%), Nasdaq Composite 26 702 (+1,05%), Dow Jones 52 857 (+0,69%). Rentowność 10-letnich obligacji około 5,15%.",
    "Tesla po sesji: zysk 0,48 USD na akcję wobec prognozowanych 0,45, przychody 28,05 mld USD, nieco poniżej oczekiwań (28,34 mld). Wyniki Meta też po sesji.",
    "SAP po sesji w Europie: przychody 10,27 mld EUR (+13%), zaległe zamówienia w chmurze +28%; spółka spodziewa się przychodów z chmury przy górnej granicy prognozy. DAX zamknął dzień na 25 647 (+1,35%).",
    "Ropa: WTI (grudzień) 97,15 USD (−0,7%), Brent około 109–110 USD po doniesieniach o ataku na pole naftowe Aramco.",
    "Złoto około 4 134 USD (+0,2%) i srebro 57,87 USD (−0,2%) bez większych zmian; bitcoin około 84 500 USD (+1,8%), powyżej zakresu z analizy."
  ],
  punkty_en: [
    "US close: S&P 500 7,757.72 (+0.59%), Nasdaq Composite 26,702 (+1.05%), Dow Jones 52,857 (+0.69%). The 10-year Treasury yield is around 5.15%.",
    "Tesla after the bell: EPS $0.48 vs $0.45 expected, revenue $28.05bn, slightly below expectations ($28.34bn). Meta also reports after the close.",
    "SAP after the European close: revenue €10.27bn (+13%), current cloud backlog +28%; it now sees cloud revenue at the upper end of guidance. The DAX closed at 25,647 (+1.35%).",
    "Oil: WTI (December) $97.15 (−0.7%), Brent around $109–110 after reports of an attack on an Aramco oil field.",
    "Gold around $4,134 (+0.2%) and silver $57.87 (−0.2%) little changed; bitcoin around $84,500 (+1.8%), above its analysis range."
  ],
  instrumenty: {
    sp500:  { kurs: 7757.72, zmiana: 0.59, tydzien: null, notka: "Czwarta wzrostowa sesja z rzędu. Opór z analizy 7 790.", notka_en: "Fourth straight gain. Analysis resistance at 7,790.", zrodlo: 3 },
    nasdaq: { kurs: 29801, zmiana: 1.05, tydzien: null, notka: "Notowanie z końca sesji, w okolicy oporu z analizy (29 750). Dokładne zamknięcie Nasdaq 100 i rozliczenie analizy przy porannej aktualizacji.", notka_en: "Late-session quote, near the analysis resistance (29,750). The exact Nasdaq 100 close and the settlement come with the morning update.", zrodlo: 0 },
    xauusd: { kurs: 4134, zmiana: 0.23, tydzien: null, notka: "Stabilnie po spadku do najniższego poziomu od 15 paź. Wsparcie z analizy 4 096.", notka_en: "Steady after dipping to its lowest since 15 Oct. Analysis support at 4,096.", zrodlo: 0 },
    eurusd: { kurs: 1.1235, zmiana: null, tydzien: null, notka: "Euro pod presją rosnących rentowności francuskich obligacji.", notka_en: "The euro is weighed by rising French bond yields.", zrodlo: 3 },
    gbpusd: { kurs: 1.3392, zmiana: 0.09, tydzien: null, notka: "Inflacja 3,5% (powyżej prognozy) wspiera oczekiwania podwyżki BoE 5 lis. Opór z analizy 1,3435.", notka_en: "Inflation at 3.5% (above forecast) supports expectations of a BoE hike on 5 Nov. Analysis resistance at 1.3435.", zrodlo: 1 },
    usdjpy: { kurs: 158.18, zmiana: null, tydzien: null, notka: "W zakresie 157,50–159,00. Posiedzenie BoJ 29–30 paź.", notka_en: "Within the 157.50–159.00 range. BoJ meets 29–30 Oct.", zrodlo: 3 },
    xagusd: { kurs: 57.87, zmiana: -0.16, tydzien: null, notka: "Bez większych zmian razem ze złotem.", notka_en: "Little changed along with gold.", zrodlo: 0 },
    usdpln: { kurs: 3.8854, zmiana: null, tydzien: null, notka: "Wyliczony z kursów EUR/PLN (4,3653) i EUR/USD (1,1235).", notka_en: "Derived from EUR/PLN (4.3653) and EUR/USD (1.1235).", zrodlo: 1 },
    wti:    { kurs: 97.15, zmiana: -0.68, tydzien: null, notka: "Kontrakt grudniowy. Brent drożeje po doniesieniach o ataku na pole Aramco, WTI lekko w dół.", notka_en: "December contract. Brent rises on reports of an attack on an Aramco field, WTI slightly lower.", zrodlo: 3 },
    dax:    { kurs: 25647, zmiana: 1.35, tydzien: null, notka: "Najwyżej od miesiąca. SAP po sesji: przychody +13%, prognoza chmury przy górnej granicy. Analiza: cel 25 800, wsparcie 25 325.", notka_en: "Highest in a month. SAP after the close: revenue +13%, cloud outlook at the upper end. Analysis: target 25,800, support 25,325.", zrodlo: 5 },
    btcusd: { kurs: 84481, zmiana: 1.84, tydzien: null, notka: "Powyżej górnej granicy zakresu z analizy (84 262). Liczy się zamknięcie dnia o 2:00 czasu polskiego.", notka_en: "Above the top of the analysis range (84,262). The daily close at 00:00 UTC is what counts.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Czw 22 paź", wydarzenia: ["USA: cotygodniowe wnioski o zasiłek dla bezrobotnych", "USA: indeks wskaźników wyprzedzających"] },
    { dzien: "Pt 23 paź", wydarzenia: ["Wstępne indeksy PMI (strefa euro, Wielka Brytania, USA)", "USA: nastroje konsumentów Uniwersytetu Michigan i oczekiwania inflacyjne"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą US500, US100, DE40, srebro, bitcoin), 21 paź 2026", nazwa_en: "Trading Economics: gold (with US500, US100, DE40, silver, bitcoin table), 21 Oct 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: EUR/USD (z tabelą walut), 21 paź 2026", nazwa_en: "Trading Economics: EUR/USD (with currency table), 21 Oct 2026", url: "https://tradingeconomics.com/euro-area/currency" },
    { nazwa: "Yahoo Finance: Stock market today, 21 paź 2026 (Brent, atak na pole Aramco)", nazwa_en: "Yahoo Finance: Stock market today, 21 Oct 2026 (Brent, Aramco field attack)", url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-october-21-dow-sp-500-nasdaq-100000105.html" },
    { nazwa: "Investrade: Market Review, 21 paź 2026 (zamknięcie)", nazwa_en: "Investrade: Market Review, 21 Oct 2026 (close)", url: "https://investrade.com/market-review-october-21-2026/" },
    { nazwa: "Teslarati: Tesla Q3 2026 earnings results", url: "https://www.teslarati.com/tesla-tsla-q3-2026-earnings-results/" },
    { nazwa: "MS Aktuell: DAX auf Vierwochenhoch (zamknięcie Xetra), 21 paź 2026", nazwa_en: "MS Aktuell: DAX at a four-week high (Xetra close), 21 Oct 2026", url: "https://ms-aktuell.de/welt/dax-vierwochenhoch-21-10-2026/" },
    { nazwa: "Stock Titan: SAP Quarterly Statement Q3 2026", url: "https://www.stocktitan.net/news/SAP/sap-quarterly-statement-q3-lfpmuutnzhal.html" }
  ]
};
