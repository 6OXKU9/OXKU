// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-02T07:50:00+01:00",
  stanNa_en: "Monday morning, 2 Nov 2026 (before the European session)",
  stanNa: "poniedziałek rano, 2 lis 2026 (przed sesją europejską)",
  naglowek_en: "Oil falls about 3% as Qatar and Iran hold talks and Trump pledges no new strikes before the US midterms. Gold rebounds above $3,900 and US futures rise about 0.4%, but Asian stocks open lower. A busy week: RBA, US elections, BoE and the jobs report.",
  naglowek: "Ropa tanieje o około 3%, bo Katar i Iran prowadzą rozmowy, a Trump obiecał brak nowych ataków przed wyborami w USA. Złoto odbija powyżej 3 900 USD, kontrakty w USA rosną o około 0,4%, ale giełdy w Azji otwierają się na minusie. Pracowity tydzień: RBA, wybory w USA, BoE i raport z rynku pracy.",
  punkty: [
    "Weekend: trzeci dzień rozmów Kataru z Iranem o zakończeniu wojny. Iran ostrzega przed odwetem za nowe ataki, a Trump zapowiedział, że nie będzie ich przed wtorkowymi wyborami. OPEC+ utrzymał limity wydobycia na grudzień. WTI około 100,7 USD (−3,3%), Brent około 110 USD.",
    "Azja: Kospi −1,6% (prowadzą spółki półprzewodnikowe), Topix −0,7%, ASX −0,3%. Chiński PMI przemysłu za październik spadł do 49,3, poniżej granicy 50.",
    "Kontrakty w USA rosną o około 0,4% po piątkowej wyprzedaży; S&P 500 około 7 616, Nasdaq 100 około 28 628. Dziś po sesji wyniki Apple i Palantira. S&P obniżył perspektywę ratingu Meta do negatywnej.",
    "Złoto odbija do około 3 912 USD (+0,9%), srebro około 50,2 USD (+2,7%), bo tańsza ropa łagodzi obawy inflacyjne. Rynek wycenia około 75% szans na podwyżkę stóp Fed w grudniu. Bitcoin około 78 100 USD; Binance wznawia wypłaty.",
    "Rozliczenia: bitcoin z 30 paź trafiony (spadek do 76 141, cel 76 500). Analizy S&P 500 i GBP/USD z 18 paź minęły bez rozstrzygnięcia: do celów zabrakło 8 punktów i 2 pipsów. Nowe szkice: S&P 500 spadkowo (cel 7 500), GBP/USD wzrostowo (1,3428) i bitcoin neutralnie (75 800–80 000)."
  ],
  punkty_en: [
    "Weekend: a third day of talks between Qatar and Iran on ending the war. Iran warns of retaliation for new attacks, and Trump pledged none before Tuesday's midterms. OPEC+ kept December output targets unchanged. WTI around $100.7 (−3.3%), Brent around $110.",
    "Asia: Kospi −1.6% (led by chipmakers), Topix −0.7%, ASX −0.3%. China's October manufacturing PMI fell to 49.3, below the 50 mark.",
    "US futures are up about 0.4% after Friday's selloff; S&P 500 around 7,616, Nasdaq 100 around 28,628. Apple and Palantir report after today's close. S&P cut Meta's rating outlook to negative.",
    "Gold rebounds to around $3,912 (+0.9%), silver around $50.2 (+2.7%), as cheaper oil eases inflation worries. Markets price about a 75% chance of a December Fed hike. Bitcoin around $78,100; Binance is resuming withdrawals.",
    "Settlements: the 30 Oct bitcoin analysis hit (a drop to $76,141, target $76,500). The 18 Oct S&P 500 and GBP/USD analyses ended without a result: they missed their targets by 8 points and 2 pips. New drafts: bearish S&P 500 (target 7,500), bullish GBP/USD (1.3428) and neutral bitcoin ($75,800–80,000)."
  ],
  instrumenty: {
    sp500:  { kurs: 7615.86, zmiana: 0.47, tydzien: null, notka: "Notowanie CFD. Nowa analiza spadkowa: cel 7 500, unieważnienie 7 700.", notka_en: "CFD quote. New bearish analysis: target 7,500, invalidation 7,700.", zrodlo: 1 },
    nasdaq: { kurs: 28628.26, zmiana: 0.86, tydzien: null, notka: "Notowanie CFD. Analiza spadkowa: cel 28 300, unieważnienie 28 745.", notka_en: "CFD quote. Bearish analysis: target 28,300, invalidation 28,745.", zrodlo: 1 },
    xauusd: { kurs: 3911.90, zmiana: 0.95, tydzien: null, notka: "Odbicie od rocznego minimum. Analiza spadkowa: cel 3 800, unieważnienie 4 000.", notka_en: "A rebound from the one-year low. Bearish analysis: target $3,800, invalidation $4,000.", zrodlo: 0 },
    eurusd: { kurs: 1.1181, zmiana: 0.21, tydzien: null, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3396, zmiana: 0.04, tydzien: null, notka: "Nowa analiza wzrostowa przed BoE: cel 1,3428, unieważnienie 1,3306.", notka_en: "New bullish analysis ahead of the BoE: target 1.3428, invalidation 1.3306.", zrodlo: 2 },
    usdjpy: { kurs: 157.89, zmiana: 0.23, tydzien: null, notka: "Jen słabnie mimo ostrzeżeń słownych. Analiza: zakres 156,75–159,05.", notka_en: "The yen weakens despite verbal warnings. Analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 50.24, zmiana: 2.73, tydzien: null, notka: "Nad poziomem unieważnienia analizy (50); liczy się zamknięcie dnia. Cel 48,29.", notka_en: "Above the analysis invalidation level ($50); the daily close counts. Target $48.29.", zrodlo: 0 },
    usdpln: { kurs: 3.9436, zmiana: 0.55, tydzien: null, notka: "Zamknięcie z 30 paź (świeca dzienna). Analiza wzrostowa: cel 3,98, wsparcie 3,92.", notka_en: "30 Oct close (daily candle). Bullish analysis: target 3.98, support 3.92.", zrodlo: 5 },
    wti:    { kurs: 100.68, zmiana: -3.30, tydzien: null, notka: "Kontrakt grudniowy, spadek po rozmowach z Iranem. Brent około 110 USD. Analiza: cel 105, wsparcie 95.", notka_en: "December contract, down after the Iran talks. Brent around $110. Analysis: target $105, support $95.", zrodlo: 0 },
    dax:    { kurs: 25818.21, zmiana: -0.85, tydzien: 2.5, notka: "Zamknięcie Xetra z 30 paź. Analiza wzrostowa: cel 26 164, unieważnienie 25 665.", notka_en: "Xetra close of 30 Oct. Bullish analysis: target 26,164, invalidation 25,665.", zrodlo: 3 },
    btcusd: { kurs: 78117, zmiana: 0.40, tydzien: null, notka: "Analiza z 30 paź trafiona. Nowa analiza neutralna: zakres 75 800–80 000.", notka_en: "30 Oct analysis hit. New neutral analysis: $75,800–80,000 range.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Pn 2 lis", wydarzenia: ["USA: ISM przemysł (16:00)", "Wyniki Apple po sesji"] },
    { dzien: "Wt 3 lis", wydarzenia: ["RBA: decyzja w sprawie stóp (4:30)", "Wybory połówkowe w USA"] },
    { dzien: "Czw 5 lis", wydarzenia: ["BoE: decyzja w sprawie stóp (14:00)"] },
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, bitcoin), 2 lis 2026", nazwa_en: "Trading Economics: gold (with silver, oil, bitcoin table), 2 Nov 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA (US100, US500), 2 lis 2026", nazwa_en: "Trading Economics: US stock market (US100, US500), 2 Nov 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: jen japoński (z tabelą walut), 2 lis 2026", nazwa_en: "Trading Economics: Japanese yen (with currency table), 2 Nov 2026", url: "https://tradingeconomics.com/japan/currency" },
    { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss (30 paź 2026)", nazwa_en: "ARIVA.DE / dpa-AFX: Frankfurt stocks close (30 Oct 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-schwaecheres-ende-einer-12189224" },
    { nazwa: "Saxo: Asia Market Quick Take (2 lis 2026)", nazwa_en: "Saxo: Asia Market Quick Take (2 Nov 2026)", url: "https://www.home.saxo/en-mena/content/articles/macro/asia-market-quick-take-02-november-2026-02112026" },
    { nazwa: "CNBC: świece dzienne USD/PLN (dane wykresów na stronie)", nazwa_en: "CNBC: USD/PLN daily candles (site chart data)", url: "https://www.cnbc.com/quotes/PLN=" },
    { nazwa: "Analytics Insight: Bitcoin climbs near USD 78,500 as Binance restores withdrawals (2 lis 2026)", nazwa_en: "Analytics Insight: Bitcoin climbs near USD 78,500 as Binance restores withdrawals (2 Nov 2026)", url: "https://www.analyticsinsight.net/price-analysis/crypto-prices-today-bitcoin-climbs-near-usd-78500-as-binance-restores-withdrawals" }
  ]
};
