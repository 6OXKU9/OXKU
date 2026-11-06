// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-06T08:00:00+01:00",
  stanNa_en: "Friday morning, 6 Nov 2026 (before Europe and London open)",
  stanNa: "piątek rano, 6 lis 2026 (przed sesją w Europie i Londynie)",
  naglowek_en: "The AI selloff reaches Asia: the Nikkei falls almost 6% to its lowest since April. US futures rebound slightly after Wall Street's worst day since April 2025. Three analyses settled: S&P 500 hit, Nasdaq 100 and bitcoin missed; hit rate 17 of 38. The US jobs report is due at 14:30.",
  naglowek: "Wyprzedaż spółek AI dociera do Azji: Nikkei traci prawie 6%, najniżej od kwietnia. Kontrakty w USA lekko odbijają po najgorszym dniu Wall Street od kwietnia 2025. Rozliczyliśmy trzy analizy: S&P 500 trafiony, Nasdaq 100 i bitcoin nietrafione; trafność 17 z 38. O 14:30 raport z rynku pracy w USA.",
  punkty: [
    "Rozliczenia po świecach z 5 lis: analiza spadkowa S&P 500 trafiona (minimum 7 350 poniżej celu 7 500). Nietrafione: Nasdaq 100 (zamknięcie 26 630 pod 27 967) i bitcoin (75 969 pod 77 699). Dodaliśmy nowe szkice: S&P 500 spadkowy (cel 7 238), Nasdaq 100 neutralny (26 606–27 967) i bitcoin spadkowy (cel 74 888).",
    "Azja: Nikkei około 57 230 (−5,8%), najniżej od kwietnia i blisko 9% straty w tygodniu; mocno tracą Advantest i Ibiden. Mocne dane o płacach w Japonii wzmacniają oczekiwania grudniowej podwyżki BoJ. Szanghaj −1,2%, Hang Seng −1,1%, Australia −0,8%.",
    "Kontrakty w USA odbijają, prawdopodobnie technicznie: S&P 500 i Nasdaq 100 w górę, Dow lekko pod kreską. Notowania CFD: S&P 500 około 7 347, Nasdaq 100 około 26 797.",
    "Waluty: dolar odrabia część strat, indeks około 101,8 (+0,2%). EUR/USD 1,1197, GBP/USD 1,3426, USD/JPY 157,9, USD/PLN 3,9319 (+0,3%), blisko unieważnienia analizy spadkowej (3,9423 na zamknięciu dnia).",
    "Surowce: złoto około 4 043 USD (−1,1%), poniżej unieważnienia analizy wzrostowej (4 075 na zamknięciu dnia), choć w tygodniu zyskuje ponad 4%. Srebro około 51,4 USD, WTI około 91,6 USD (+1,2%), Brent około 99,8 USD. Bitcoin około 75 600 USD. Dziś o 14:30 raport z rynku pracy: prognoza 65 tys., bezrobocie 4,2%."
  ],
  punkty_en: [
    "Settlements on the 5 Nov candles: the bearish S&P 500 analysis hit (low 7,350, below the 7,500 target). Missed: the Nasdaq 100 (close 26,630 below 27,967) and bitcoin (75,969 below 77,699). We added new drafts: S&P 500 bearish (target 7,238), Nasdaq 100 neutral (26,606–27,967) and bitcoin bearish (target 74,888).",
    "Asia: the Nikkei is around 57,230 (−5.8%), the lowest since April and almost 9% down on the week; Advantest and Ibiden fall sharply. Strong Japanese wage data reinforce expectations of a December BoJ hike. Shanghai −1.2%, Hang Seng −1.1%, Australia −0.8%.",
    "US futures rebound, probably on technical buying: S&P 500 and Nasdaq 100 up, the Dow slightly lower. CFD quotes: S&P 500 around 7,347, Nasdaq 100 around 26,797.",
    "Currencies: the dollar recovers part of its losses, the index around 101.8 (+0.2%). EUR/USD 1.1197, GBP/USD 1.3426, USD/JPY 157.9, USD/PLN 3.9319 (+0.3%), close to the bearish analysis's invalidation (3.9423 on a daily close).",
    "Commodities: gold around $4,043 (−1.1%), below the bullish analysis's invalidation ($4,075 on a daily close), though up more than 4% on the week. Silver around $51.4, WTI around $91.6 (+1.2%), Brent around $99.8. Bitcoin around $75,600. The US jobs report is due today at 14:30: forecast 65k, unemployment 4.2%."
  ],
  instrumenty: {
    sp500:  { kurs: 7347.18, zmiana: -0.09, tydzien: -3.07, notka: "Notowanie CFD. Nowa analiza spadkowa: cel 7 238, unieważnienie 7 545.", notka_en: "CFD quote. New bearish analysis: target 7,238, invalidation 7,545.", zrodlo: 1 },
    nasdaq: { kurs: 26797.45, zmiana: 0.63, tydzien: -5.59, notka: "Notowanie CFD. Nowa analiza neutralna: zakres 26 606–27 967.", notka_en: "CFD quote. New neutral analysis: 26,606–27,967 range.", zrodlo: 1 },
    xauusd: { kurs: 4043.24, zmiana: -1.11, tydzien: 4.34, notka: "Analiza wzrostowa: cel 4 205, unieważnienie 4 075; kurs poniżej, rozstrzygnie zamknięcie dnia.", notka_en: "Bullish analysis: target $4,205, invalidation $4,075; price below it, the daily close decides.", zrodlo: 0 },
    eurusd: { kurs: 1.1197, zmiana: -0.19, tydzien: 0.35, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3426, zmiana: -0.17, tydzien: 0.26, notka: "Analiza wzrostowa: cel 1,3550, unieważnienie 1,3376.", notka_en: "Bullish analysis: target 1.3550, invalidation 1.3376.", zrodlo: 2 },
    usdjpy: { kurs: 157.93, zmiana: 0.17, tydzien: 0.25, notka: "Analiza neutralna: zakres 156,75–159,05.", notka_en: "Neutral analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 51.40, zmiana: -0.73, tydzien: 5.11, notka: "Szkic spadkowy: cel 48,29, unieważnienie 52,50.", notka_en: "Bearish draft: target $48.29, invalidation $52.50.", zrodlo: 0 },
    usdpln: { kurs: 3.9319, zmiana: 0.31, tydzien: -0.30, notka: "Analiza spadkowa: cel 3,8674, unieważnienie 3,9423; kurs blisko unieważnienia.", notka_en: "Bearish analysis: target 3.8674, invalidation 3.9423; price near invalidation.", zrodlo: 2 },
    wti:    { kurs: 91.60, zmiana: 1.19, tydzien: -12.03, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax:    { kurs: 26325, zmiana: -0.42, tydzien: 1.96, notka: "Zamknięcie czwartku (CNBC). Analiza spadkowa: cel 25 877, unieważnienie 26 693.", notka_en: "Thursday close (CNBC). Bearish analysis: target 25,877, invalidation 26,693.", zrodlo: 4 },
    btcusd: { kurs: 75617, zmiana: -0.46, tydzien: -2.03, notka: "Gemini. Nowa analiza spadkowa: cel 74 888, unieważnienie 77 699.", notka_en: "Gemini. New bearish analysis: target $74,888, invalidation $77,699.", zrodlo: 5 }
  },
  kalendarz: [
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30), prognoza 65 tys., bezrobocie 4,2%"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa, Brent (6 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude, Brent (6 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: kontrakty w USA po najgorszym dniu od kwietnia 2025 (6 lis 2026)", nazwa_en: "Trading Economics: US futures after the worst day since April 2025 (6 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: waluty (EUR/USD, GBP/USD, USD/JPY, USD/PLN, DXY), 6 lis 2026", nazwa_en: "Trading Economics: currencies (EUR/USD, GBP/USD, USD/JPY, USD/PLN, DXY), 6 Nov 2026", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "Trading Economics: Nikkei i giełdy w Azji (6 lis 2026)", nazwa_en: "Trading Economics: Nikkei and Asian markets (6 Nov 2026)", url: "https://tradingeconomics.com/japan/stock-market" },
    { nazwa: "CNBC: świece dzienne (dane wykresów na stronie), rozliczenia analiz", nazwa_en: "CNBC: daily candles (site chart data), analysis settlements", url: "https://www.cnbc.com/quotes/.SPX" },
    { nazwa: "Gemini: notowanie BTC/USD (6 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (6 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: zatrudnienie poza rolnictwem w USA, prognoza na październik 2026", nazwa_en: "Trading Economics: US nonfarm payrolls, October 2026 forecast", url: "https://tradingeconomics.com/united-states/non-farm-payrolls" }
  ]
};
