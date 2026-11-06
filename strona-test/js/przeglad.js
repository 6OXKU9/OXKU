// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-06T13:55:00+01:00",
  stanNa_en: "Friday, 6 Nov 2026, before the US open",
  stanNa: "piątek, 6 lis 2026, przed sesją w USA",
  naglowek_en: "The DAX falls more than 2% for a second day as the tech selloff spreads to other sectors; our bearish DAX analysis hit its 25,877 target. US futures rebound ahead of the jobs report: Nasdaq 100 +1.5%, S&P 500 +0.2%, Dow −500 points. Gold near $4,066, on track for a weekly gain of more than 4%.",
  naglowek: "DAX traci ponad 2% drugi dzień z rzędu, bo wyprzedaż spółek technologicznych rozlewa się na inne sektory; nasza analiza spadkowa DAX doszła do celu 25 877. Kontrakty w USA odbijają przed raportem z rynku pracy: Nasdaq 100 +1,5%, S&P 500 +0,2%, Dow −500 pkt. Złoto przy 4 066 USD, w tygodniu ponad +4%.",
  punkty: [
    "Europa: DAX około 25 690–25 750 (−2,2%), drugi dzień spadków; tracą m.in. Deutsche Post, Rheinmetall i Bayer. Analiza spadkowa DAX z celem 25 877 trafiona, trafność 18 z 39. Nowy szkic spadkowy: cel 25 340, unieważnienie 26 223.",
    "USA przed sesją: kontrakty na Nasdaq 100 +1,5%, na S&P 500 +0,2%, Dow około −500 pkt. Notowania CFD: S&P 500 około 7 371, Nasdaq 100 około 27 001 (w zakresie analizy neutralnej 26 606–27 967).",
    "O 14:30 raport z rynku pracy za październik: prognoza 65 tys. miejsc pracy (wrzesień 29 tys.), stopa bezrobocia 4,2%. Rynek wycenia 79% szans na grudniową podwyżkę stóp Fed.",
    "Waluty (poranna tabela): EUR/USD 1,1197, GBP/USD 1,3426, USD/JPY 157,9, USD/PLN 3,9319, indeks dolara 101,8.",
    "Surowce i krypto: złoto około 4 066 USD (−0,6%), tuż pod unieważnieniem analizy wzrostowej (4 075 na zamknięciu dnia); srebro około 52,1 USD, blisko unieważnienia szkicu (52,50). WTI około 90,3 USD, Brent około 97,8 USD. Bitcoin około 76 000 USD."
  ],
  punkty_en: [
    "Europe: the DAX is around 25,690–25,750 (−2.2%), a second day of losses; Deutsche Post, Rheinmetall and Bayer are among the decliners. The bearish DAX analysis with a 25,877 target hit, hit rate 18 of 39. New bearish draft: target 25,340, invalidation 26,223.",
    "US before the open: Nasdaq 100 futures +1.5%, S&P 500 futures +0.2%, the Dow around −500 points. CFD quotes: S&P 500 around 7,371, Nasdaq 100 around 27,001 (within the 26,606–27,967 neutral range).",
    "The October jobs report is due at 14:30: forecast 65k jobs (September 29k), unemployment rate 4.2%. Markets price a 79% chance of a December Fed hike.",
    "Currencies (morning table): EUR/USD 1.1197, GBP/USD 1.3426, USD/JPY 157.9, USD/PLN 3.9319, dollar index 101.8.",
    "Commodities and crypto: gold around $4,066 (−0.6%), just below the bullish analysis's invalidation ($4,075 on a daily close); silver around $52.1, close to the draft's invalidation ($52.50). WTI around $90.3, Brent around $97.8. Bitcoin around $76,000."
  ],
  instrumenty: {
    sp500:  { kurs: 7371.09, zmiana: 0.24, tydzien: -2.76, notka: "Notowanie CFD. Analiza spadkowa: cel 7 238, unieważnienie 7 545.", notka_en: "CFD quote. Bearish analysis: target 7,238, invalidation 7,545.", zrodlo: 1 },
    nasdaq: { kurs: 27000.57, zmiana: 1.39, tydzien: -4.88, notka: "Notowanie CFD. Analiza neutralna: zakres 26 606–27 967.", notka_en: "CFD quote. Neutral analysis: 26,606–27,967 range.", zrodlo: 1 },
    xauusd: { kurs: 4065.63, zmiana: -0.56, tydzien: 4.92, notka: "Analiza wzrostowa: cel 4 205, unieważnienie 4 075; kurs tuż poniżej, rozstrzygnie zamknięcie dnia.", notka_en: "Bullish analysis: target $4,205, invalidation $4,075; price just below, the daily close decides.", zrodlo: 0 },
    eurusd: { kurs: 1.1197, zmiana: -0.19, tydzien: 0.35, notka: "Kurs z porannej tabeli. Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Morning table quote. Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3426, zmiana: -0.17, tydzien: 0.26, notka: "Kurs z porannej tabeli. Analiza wzrostowa: cel 1,3550, unieważnienie 1,3376.", notka_en: "Morning table quote. Bullish analysis: target 1.3550, invalidation 1.3376.", zrodlo: 2 },
    usdjpy: { kurs: 157.93, zmiana: 0.17, tydzien: 0.25, notka: "Kurs z porannej tabeli. Analiza neutralna: zakres 156,75–159,05.", notka_en: "Morning table quote. Neutral analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 52.08, zmiana: 0.58, tydzien: 6.49, notka: "Szkic spadkowy: cel 48,29, unieważnienie 52,50; kurs blisko unieważnienia.", notka_en: "Bearish draft: target $48.29, invalidation $52.50; price near invalidation.", zrodlo: 0 },
    usdpln: { kurs: 3.9319, zmiana: 0.31, tydzien: -0.30, notka: "Kurs z porannej tabeli. Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Morning table quote. Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 2 },
    wti:    { kurs: 90.30, zmiana: -0.24, tydzien: -13.27, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax:    { kurs: 25720, zmiana: -2.30, tydzien: -0.38, notka: "Notowanie CFD. Analiza spadkowa trafiona (cel 25 877). Nowy szkic spadkowy: cel 25 340, unieważnienie 26 223.", notka_en: "CFD quote. Bearish analysis hit (target 25,877). New bearish draft: target 25,340, invalidation 26,223.", zrodlo: 3 },
    btcusd: { kurs: 76007, zmiana: 0.05, tydzien: -1.52, notka: "Gemini. Analiza spadkowa: cel 74 888, unieważnienie 77 699.", notka_en: "Gemini. Bearish analysis: target $74,888, invalidation $77,699.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30), prognoza 65 tys., bezrobocie 4,2%"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Heads for Strong Weekly Gain; srebro, ropa, Brent (6 lis 2026)", nazwa_en: "Trading Economics: Gold Heads for Strong Weekly Gain; silver, crude, Brent (6 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: S&P and Nasdaq Set to Rebound (6 lis 2026)", nazwa_en: "Trading Economics: S&P and Nasdaq Set to Rebound (6 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: waluty (poranna tabela), 6 lis 2026", nazwa_en: "Trading Economics: currencies (morning table), 6 Nov 2026", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "Trading Economics: DAX Slips for 2nd Day (6 lis 2026)", nazwa_en: "Trading Economics: DAX Slips for 2nd Day (6 Nov 2026)", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (6 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (6 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: zatrudnienie poza rolnictwem w USA, prognoza na październik 2026", nazwa_en: "Trading Economics: US nonfarm payrolls, October 2026 forecast", url: "https://tradingeconomics.com/united-states/non-farm-payrolls" }
  ]
};
