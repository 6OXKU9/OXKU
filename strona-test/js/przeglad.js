// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-03T15:20:00+01:00",
  stanNa_en: "Tuesday afternoon, 3 Nov 2026 (before the US session)",
  stanNa: "wtorek po południu, 3 lis 2026 (przed sesją w USA)",
  naglowek_en: "Election day in the US. Oil climbs after the strike on Qeshm Island, silver loses about 2% and gold edges lower. Apple and Palantir drag on tech in pre-market trading, and the DAX gives back part of Monday's gain.",
  naglowek: "Dzień wyborów w USA. Ropa drożeje po ataku na wyspę Keszm, srebro traci około 2%, złoto lekko tanieje. Apple i Palantir ciążą technologii przed sesją, a DAX oddaje część poniedziałkowego wzrostu.",
  punkty: [
    "Wybory połówkowe w USA: pierwsze lokale (Floryda, Georgia, Wirginia) zamykają się o 1:00 w nocy czasu polskiego, więc reakcja rynku przyjdzie w środę rano. Rentowność 10-latek USA około 4,9%.",
    "Ropa: WTI około 97,3 USD (+0,9%), Brent około 105,2 USD po ataku USA na pozycję Gwardii Rewolucyjnej na wyspie Keszm. Obie strony mówią jednak o postępach rozmów z pośrednictwem Kataru.",
    "Metale: srebro około 49,7 USD (−1,9%, −8,7% w tydzień), złoto około 3 938 USD (−0,2%). Do celu spadkowej analizy srebra (48,85) brakuje niecałych 2%.",
    "Akcje: przed sesją Apple traci około 3,9% (prognoza marży), Palantir około 8,4% mimo lepszych wyników. Kontrakty: S&P 500 około 7 530 (−0,2%), Nasdaq 100 około 28 060 (+0,3%). DAX około 25 860 (−0,5%).",
    "Dziś o 16:00 dane JOLTS (wolne miejsca pracy) i zamówienia w przemyśle, po sesji wyniki AMD. W czwartek decyzja BoE, w piątek raport z rynku pracy w USA. Dolar bez wyraźnego kierunku: EUR/USD 1,1183, USD/JPY 158,2."
  ],
  punkty_en: [
    "US midterms: the first polls (Florida, Georgia, Virginia) close at 1:00 Warsaw time, so the market reaction comes on Wednesday morning. The US 10-year yield is around 4.9%.",
    "Oil: WTI around $97.3 (+0.9%), Brent around $105.2 after a US strike on a Revolutionary Guard position on Qeshm Island. Both sides, however, cite progress in Qatar-mediated talks.",
    "Metals: silver around $49.7 (−1.9%, −8.7% on the week), gold around $3,938 (−0.2%). Silver is less than 2% above the bearish analysis target (48.85).",
    "Stocks: pre-market, Apple loses about 3.9% (margin guidance) and Palantir about 8.4% despite beating estimates. Futures: S&P 500 around 7,530 (−0.2%), Nasdaq 100 around 28,060 (+0.3%). DAX around 25,860 (−0.5%).",
    "Today at 16:00 Warsaw: JOLTS job openings and factory orders; AMD reports after the close. BoE decides on Thursday, US payrolls on Friday. The dollar has no clear direction: EUR/USD 1.1183, USD/JPY 158.2."
  ],
  instrumenty: {
    sp500:  { kurs: 7530.42, zmiana: -0.15, tydzien: -2.49, notka: "Notowanie CFD. Analiza spadkowa: cel 7 500, unieważnienie 7 700.", notka_en: "CFD quote. Bearish analysis: target 7,500, invalidation 7,700.", zrodlo: 1 },
    nasdaq: { kurs: 28064, zmiana: 0.27, tydzien: -5.35, notka: "Notowanie CFD. Analiza spadkowa: cel 27 645, unieważnienie 28 300.", notka_en: "CFD quote. Bearish analysis: target 27,645, invalidation 28,300.", zrodlo: 1 },
    xauusd: { kurs: 3937.56, zmiana: -0.24, tydzien: -3.02, notka: "Analiza spadkowa: cel 3 800, unieważnienie 4 000.", notka_en: "Bearish analysis: target $3,800, invalidation $4,000.", zrodlo: 0 },
    eurusd: { kurs: 1.1183, zmiana: -0.03, tydzien: 0.53, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3417, zmiana: 0.08, tydzien: 0.84, notka: "Analiza wzrostowa: cel 1,3489, unieważnienie 1,3306. W czwartek decyzja BoE.", notka_en: "Bullish analysis: target 1.3489, invalidation 1.3306. BoE decides on Thursday.", zrodlo: 2 },
    usdjpy: { kurs: 158.24, zmiana: 0.19, tydzien: 0.18, notka: "Analiza neutralna: zakres 156,75–159,05.", notka_en: "Neutral analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 49.68, zmiana: -1.93, tydzien: -8.70, notka: "Analiza spadkowa: cel 48,85, unieważnienie 51,27.", notka_en: "Bearish analysis: target $48.85, invalidation $51.27.", zrodlo: 0 },
    usdpln: { kurs: 3.9524, zmiana: 0.12, tydzien: -0.04, notka: "Analiza wzrostowa: cel 3,98, wsparcie 3,92.", notka_en: "Bullish analysis: target 3.98, support 3.92.", zrodlo: 2 },
    wti:    { kurs: 97.31, zmiana: 0.88, tydzien: -2.59, notka: "Kontrakt grudniowy. Analiza wzrostowa: cel 105, wsparcie 95; horyzont mija 6 lis.", notka_en: "December contract. Bullish analysis: target $105, support $95; the horizon ends on 6 Nov.", zrodlo: 0 },
    dax:    { kurs: 25857, zmiana: -0.48, tydzien: 1.04, notka: "Notowanie CFD. Analiza wzrostowa: cel 26 164, unieważnienie 25 665.", notka_en: "CFD quote. Bullish analysis: target 26,164, invalidation 25,665.", zrodlo: 1 },
    btcusd: { kurs: 76480, zmiana: -0.25, tydzien: -5.36, notka: "Analiza neutralna: zakres 75 800–80 000.", notka_en: "Neutral analysis: $75,800–80,000 range.", zrodlo: 3 }
  },
  kalendarz: [
    { dzien: "Wt 3 lis", wydarzenia: ["USA: JOLTS i zamówienia w przemyśle (16:00)", "Wyniki AMD po sesji", "Wybory w USA: pierwsze lokale zamykają się o 1:00 w nocy"] },
    { dzien: "Czw 5 lis", wydarzenia: ["BoE: decyzja w sprawie stóp (14:00), rynek oczekuje podwyżki"] },
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: surowce (ropa WTI, Brent, złoto, srebro), 3 lis 2026", nazwa_en: "Trading Economics: commodities (WTI, Brent, gold, silver), 3 Nov 2026", url: "https://tradingeconomics.com/commodities" },
    { nazwa: "Trading Economics: indeksy giełdowe (US500, US100, DE40), 3 lis 2026", nazwa_en: "Trading Economics: stock indices (US500, US100, DE40), 3 Nov 2026", url: "https://tradingeconomics.com/stocks" },
    { nazwa: "Trading Economics: waluty (EUR/USD, GBP/USD, USD/JPY, USD/PLN), 3 lis 2026", nazwa_en: "Trading Economics: currencies (EUR/USD, GBP/USD, USD/JPY, USD/PLN), 3 Nov 2026", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "Trading Economics: kryptowaluty (bitcoin), 3 lis 2026", nazwa_en: "Trading Economics: crypto (bitcoin), 3 Nov 2026", url: "https://tradingeconomics.com/crypto" },
    { nazwa: "TheStreet: Stock Market Today, 3 lis 2026 (Apple, Palantir, Keszm)", nazwa_en: "TheStreet: Stock Market Today, 3 Nov 2026 (Apple, Palantir, Qeshm)", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-nov-03-2026" },
    { nazwa: "Saxo: Market Quick Take, 3 lis 2026 (wybory, rentowności, kalendarz)", nazwa_en: "Saxo: Market Quick Take, 3 Nov 2026 (elections, yields, calendar)", url: "https://www.home.saxo/en-mena/content/articles/macro/market-quick-take---us-mid-term-elections-today-the-focus---3-november-2026-03112026" }
  ]
};
