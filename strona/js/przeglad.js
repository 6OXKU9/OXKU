// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-05T13:55:00+01:00",
  stanNa_en: "Thursday, 5 Nov 2026, before the US open",
  stanNa: "czwartek, 5 lis 2026, przed sesją w USA",
  naglowek_en: "The BoE raised rates to 4.00%, the first hike since 2023 (8–1 vote, Mann wanted 50 bp). The DAX set a record high and hit our 26,628 target. Rheinmetall fell more than 16%. US futures are mixed: Dow up, Nasdaq 100 −0.6% on AI rules fears; Qualcomm −10% premarket. Gold holds near $4,120.",
  naglowek: "BoE podniósł stopy do 4,00%, pierwszy raz od 2023 roku (głosowanie 8 do 1, Mann chciała 50 pb). DAX ustanowił rekord i doszedł do naszego celu 26 628. Rheinmetall stracił ponad 16%. Kontrakty w USA mieszane: Dow w górę, Nasdaq 100 −0,6% na obawach przed regulacją AI; Qualcomm −10% przed sesją. Złoto trzyma się przy 4 120 USD.",
  punkty: [
    "BoE: stopa w górę o 25 pb do 4,00%, głosowanie 8 do 1 (Catherine Mann za 50 pb). Bank widzi szczyt inflacji około 5% w połowie 2027 i nie ma z góry ustalonej ścieżki; Bailey mówi, że dalsze podwyżki mogą być potrzebne, jeśli wojna z Iranem się nie skończy. GBP/USD około 1,348.",
    "Europa: DAX około 26 561 (+0,5%), w ciągu dnia rekord wszech czasów przy około 26 650–26 682, więc analiza wzrostowa z celem 26 628 jest trafiona; trafność 16 z 35. Rheinmetall −16% po drugim obniżeniu prognozy. Zamówienia w niemieckim przemyśle we wrześniu +4,4% m/m (prognoza 4,8%, sierpień −10,1%).",
    "USA przed sesją: kontrakty na S&P 500 około +0,2%, Dow około +330 pkt, Nasdaq 100 −0,6%. Inwestorzy wychodzą ze spółek AI i chipów (Nvidia, Broadcom, Micron słabiej), Qualcomm około −10% po słabej prognozie. O 14:30 wnioski o zasiłek dla bezrobotnych.",
    "Waluty: indeks dolara około 101,2 (−0,2%). EUR/USD 1,1262, tuż nad górną granicą analizy neutralnej (1,1260), rozstrzygnie zamknięcie dnia. USD/JPY 157,8, USD/PLN 3,8942 (−0,3%).",
    "Surowce: złoto około 4 121 USD (+1,5%), srebro około 52,50 USD (dokładnie na poziomie unieważnienia szkicu). Ropa odbija: WTI około 89,5 USD (+1,6%), Brent około 96,8 USD. Jutro o 14:30 raport z rynku pracy w USA."
  ],
  punkty_en: [
    "BoE: rates up 25 bp to 4.00%, an 8–1 vote (Catherine Mann for 50 bp). The bank sees inflation peaking near 5% in mid-2027 and has no pre-set path; Bailey says further hikes may be needed unless the Iran war ends. GBP/USD around 1.348.",
    "Europe: the DAX is around 26,561 (+0.5%) and set an all-time high near 26,650–26,682 intraday, so the bullish analysis with a 26,628 target is a hit; hit rate 16 of 35. Rheinmetall −16% after a second guidance cut. German factory orders rose 4.4% m/m in September (forecast 4.8%, August −10.1%).",
    "US before the open: S&P 500 futures around +0.2%, the Dow around +330 points, the Nasdaq 100 −0.6%. Investors rotate out of AI and chip stocks (Nvidia, Broadcom, Micron weaker), and Qualcomm is down about 10% after a weak outlook. Jobless claims at 14:30.",
    "Currencies: the dollar index around 101.2 (−0.2%). EUR/USD 1.1262, just above the upper bound of the neutral analysis (1.1260); the daily close decides. USD/JPY 157.8, USD/PLN 3.8942 (−0.3%).",
    "Commodities: gold around $4,121 (+1.5%), silver around $52.50 (exactly at the draft's invalidation level). Oil rebounds: WTI around $89.5 (+1.6%), Brent around $96.8. The US jobs report is due tomorrow at 14:30."
  ],
  instrumenty: {
    sp500:  { kurs: 7690.81, zmiana: 0.03, tydzien: -0.38, notka: "Notowanie CFD. Analiza spadkowa: cel 7 500, unieważnienie 7 700; kurs tuż pod unieważnieniem.", notka_en: "CFD quote. Bearish analysis: target 7,500, invalidation 7,700; price just below invalidation.", zrodlo: 1 },
    nasdaq: { kurs: 28185.51, zmiana: -0.89, tydzien: -4.14, notka: "Notowanie CFD. Analiza wzrostowa: cel 28 830, unieważnienie 27 967.", notka_en: "CFD quote. Bullish analysis: target 28,830, invalidation 27,967.", zrodlo: 1 },
    xauusd: { kurs: 4121.42, zmiana: 1.52, tydzien: 2.50, notka: "Analiza wzrostowa: cel 4 205, unieważnienie 4 075.", notka_en: "Bullish analysis: target $4,205, invalidation $4,075.", zrodlo: 0 },
    eurusd: { kurs: 1.1262, zmiana: 0.31, tydzien: 0.75, notka: "Analiza neutralna: zakres 1,1113–1,1260; kurs na górnej granicy, rozstrzygnie zamknięcie dnia.", notka_en: "Neutral analysis: 1.1113–1.1260 range; price at the upper bound, the daily close decides.", zrodlo: 3 },
    gbpusd: { kurs: 1.3481, zmiana: 0.07, tydzien: 0.79, notka: "Po podwyżce BoE. Analiza wzrostowa: cel 1,3550, unieważnienie 1,3376.", notka_en: "After the BoE hike. Bullish analysis: target 1.3550, invalidation 1.3376.", zrodlo: 2 },
    usdjpy: { kurs: 157.85, zmiana: -0.36, tydzien: 0.10, notka: "Analiza neutralna: zakres 156,75–159,05.", notka_en: "Neutral analysis: 156.75–159.05 range.", zrodlo: 3 },
    xagusd: { kurs: 52.50, zmiana: 0.47, tydzien: 0.68, notka: "Szkic spadkowy: cel 48,29, unieważnienie 52,50; kurs dokładnie na unieważnieniu.", notka_en: "Bearish draft: target $48.29, invalidation $52.50; price right at invalidation.", zrodlo: 0 },
    usdpln: { kurs: 3.8942, zmiana: -0.23, tydzien: -0.71, notka: "Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 3 },
    wti:    { kurs: 89.52, zmiana: 1.59, tydzien: -12.24, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax:    { kurs: 26561, zmiana: 0.47, tydzien: 2.00, notka: "Notowanie CFD. Analiza wzrostowa trafiona (rekord powyżej 26 628). Nowa analiza po zebraniu poziomów.", notka_en: "CFD quote. Bullish analysis hit (record above 26,628). A new analysis follows once levels are available.", zrodlo: 4 },
    btcusd: { kurs: 80356.5, zmiana: -0.09, tydzien: 3.31, notka: "Poranna świeca dzienna (Coinbase). Analiza wzrostowa: cel 84 856, unieważnienie 77 699.", notka_en: "Morning daily candle (Coinbase). Bullish analysis: target $84,856, invalidation $77,699.", zrodlo: 5 }
  },
  kalendarz: [
    { dzien: "Czw 5 lis", wydarzenia: ["USA: wnioski o zasiłek (14:30)"] },
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa, Brent (5 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude, Brent (5 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: S&P and Dow Set to Extend Gains, Nasdaq Down (5 lis 2026)", nazwa_en: "Trading Economics: S&P and Dow Set to Extend Gains, Nasdaq Down (5 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: funt i decyzja BoE (5 lis 2026)", nazwa_en: "Trading Economics: sterling and the BoE decision (5 Nov 2026)", url: "https://tradingeconomics.com/united-kingdom/currency" },
    { nazwa: "Trading Economics: waluty (EUR/USD, USD/JPY, USD/PLN, DXY), 5 lis 2026", nazwa_en: "Trading Economics: currencies (EUR/USD, USD/JPY, USD/PLN, DXY), 5 Nov 2026", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "Trading Economics: DAX Hits Record High (5 lis 2026)", nazwa_en: "Trading Economics: DAX Hits Record High (5 Nov 2026)", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Coinbase: świece dzienne BTC/USD (dane wykresów na stronie)", nazwa_en: "Coinbase: BTC/USD daily candles (site chart data)", url: "https://www.coinbase.com/price/bitcoin" },
    { nazwa: "Trading Economics: BoE Raises Rates for 1st Time Since 2023 (5 lis 2026)", nazwa_en: "Trading Economics: BoE Raises Rates for 1st Time Since 2023 (5 Nov 2026)", url: "https://tradingeconomics.com/united-kingdom/interest-rate" },
    { nazwa: "Trading Economics: zamówienia w niemieckim przemyśle (wrz 2026)", nazwa_en: "Trading Economics: German factory orders (Sep 2026)", url: "https://tradingeconomics.com/germany/factory-orders" }
  ]
};
