// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-10T13:50:00+01:00",
  stanNa_en: "Tuesday afternoon, 10 Nov 2026 (before the US open and CPI)",
  stanNa: "wtorek po południu, 10 lis 2026 (przed sesją w USA i odczytem CPI)",
  naglowek_en: "The DAX gains 1.2% and nears its record, led by Infineon after record results. US futures are flat ahead of the 14:30 CPI. Gold and silver fall about 1.5–2%, WTI drops to around $85.",
  naglowek: "DAX zyskuje 1,2% i zbliża się do rekordu, na czele Infineon po rekordowych wynikach. Kontrakty w USA bez zmian przed odczytem CPI o 14:30. Złoto i srebro tracą około 1,5–2%, WTI spada do około 85 USD.",
  punkty: [
    "DAX rośnie o około 1,2% do około 26 580, blisko rekordu z 5 listopada (26 693). Infineon zyskuje do 7% po rekordowych wynikach za czwarty kwartał i rok obrotowy 2026 oraz mocnej prognozie. Rosną Rheinmetall, MTU, Continental, Daimler Truck i Siemens Energy (2–4,5%), banki około 2%, Lufthansa 1,7% dzięki tańszej ropie.",
    "Euro Stoxx 50 +0,9%, giełda w Londynie +0,5%. Kontrakty w USA stoją w miejscu po poniedziałkowym odbiciu: S&P 500 około 7 552, Nasdaq 100 około 27 800 (lekko w dół), Dow około +0,4%; banki JPMorgan i Citigroup około +1% przed sesją.",
    "Dziś o 14:30 inflacja CPI w USA za październik: prognoza +0,3% m/m i bazowa +0,2% m/m. BLS może nie podać zmian rocznych. Rynek wycenia około 84% szans na grudniową podwyżkę stóp Fed, wobec około 74% tydzień temu.",
    "Metale tracą przed danymi: złoto około 4 078 USD (−1,5%), srebro około 52,2 USD (−2,2%). Ropa dalej tanieje na nadziejach na porozumienie USA z Iranem: WTI około 84,9 USD (−2,2%), blisko celu analizy spadkowej (84,11), Brent około 90,1 USD.",
    "Dolar stabilny: indeks około 101,7, EUR/USD 1,1218, GBP/USD 1,3429, USD/JPY 158,2. Bitcoin około 74 200 USD. W ciągu dnia żaden poziom analiz nie został rozstrzygnięty; rozliczenia rano po świecach."
  ],
  punkty_en: [
    "The DAX rises about 1.2% to around 26,580, close to the 5 November record (26,693). Infineon gains up to 7% after record fourth-quarter and fiscal 2026 results and a strong outlook. Rheinmetall, MTU, Continental, Daimler Truck and Siemens Energy rise (2–4.5%), banks about 2%, Lufthansa 1.7% on cheaper oil.",
    "Euro Stoxx 50 +0.9%, London +0.5%. US futures hold steady after Monday's rebound: S&P 500 around 7,552, Nasdaq 100 around 27,800 (slightly lower), Dow about +0.4%; JPMorgan and Citigroup about +1% pre-market.",
    "US October CPI inflation is due today at 14:30: the forecast is +0.3% m/m and core +0.2% m/m. The BLS may not publish annual changes. Markets price about 84% odds of a December Fed hike, up from about 74% a week ago.",
    "Metals fall ahead of the data: gold around $4,078 (−1.5%), silver around $52.2 (−2.2%). Oil keeps falling on hopes of a US-Iran deal: WTI around $84.9 (−2.2%), close to the bearish analysis target ($84.11), Brent around $90.1.",
    "The dollar is steady: the index around 101.7, EUR/USD 1.1218, GBP/USD 1.3429, USD/JPY 158.2. Bitcoin around $74,200. No analysis level was decided intraday; settlements in the morning after the candles."
  ],
  instrumenty: {
    sp500: { kurs: 7551.67, zmiana: 0.02, tydzien: -0.23, notka: "Kontrakt CFD przed sesją. Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Pre-market CFD quote. Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 27799.52, zmiana: -0.39, tydzien: -1.35, notka: "Kontrakt CFD przed sesją. Analiza neutralna: zakres 26 606–27 967.", notka_en: "Pre-market CFD quote. Neutral analysis: 26,606–27,967 range.", zrodlo: 1 },
    xauusd: { kurs: 4077.54, zmiana: -1.53, tydzien: 3.76, notka: "Szkic wzrostowy: cel 4 206, unieważnienie 4 031.", notka_en: "Bullish draft: target $4,206, invalidation $4,031.", zrodlo: 0 },
    eurusd: { kurs: 1.1218, zmiana: -0.04, tydzien: 0.22, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3429, zmiana: -0.08, tydzien: 0.13, notka: "Szkic spadkowy: cel 1,3269, unieważnienie 1,3463.", notka_en: "Bearish draft: target 1.3269, invalidation 1.3463.", zrodlo: 2 },
    usdjpy: { kurs: 158.2, zmiana: 0.19, tydzien: -0.29, notka: "Analiza neutralna: zakres 156,75–159,05, termin około 11 lis.", notka_en: "Neutral analysis: 156.75–159.05 range, horizon around 11 Nov.", zrodlo: 2 },
    xagusd: { kurs: 52.22, zmiana: -2.2, tydzien: 4.88, notka: "Szkic wzrostowy: cel 54,73, unieważnienie 51,38.", notka_en: "Bullish draft: target $54.73, invalidation $51.38.", zrodlo: 0 },
    usdpln: { kurs: 3.9064, zmiana: 0.0, tydzien: -0.84, notka: "Zamknięcie z poniedziałku. Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Monday close. Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 3 },
    wti: { kurs: 84.95, zmiana: -2.19, tydzien: -11.59, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59; kurs blisko celu.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59; price close to the target.", zrodlo: 0 },
    dax: { kurs: 26579, zmiana: 1.19, tydzien: 2.76, notka: "W trakcie sesji (CFD). Szkic wzrostowy: cel 26 693, unieważnienie 25 793.", notka_en: "During the session (CFD). Bullish draft: target 26,693, invalidation 25,793.", zrodlo: 3 },
    btcusd: { kurs: 74204, zmiana: -1.4, tydzien: -4.05, notka: "Gemini. Szkic spadkowy: cel 73 005, unieważnienie 76 306.", notka_en: "Gemini. Bearish draft: target $73,005, invalidation $76,306.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Wt 10 lis", wydarzenia: ["USA: inflacja CPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Eases Ahead of US Inflation Data; srebro, ropa WTI i Brent (10 lis 2026)", nazwa_en: "Trading Economics: Gold Eases Ahead of US Inflation Data; silver, WTI and Brent crude (10 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Futures Hold Steady (10 lis 2026)", nazwa_en: "Trading Economics: US Futures Hold Steady (10 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: indeks dolara i główne pary walutowe (10 lis 2026)", nazwa_en: "Trading Economics: the dollar index and major currency pairs (10 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: DAX Hovers Near Record Highs (10 lis 2026); USD/PLN: zamknięcie CNBC z 9 lis", nazwa_en: "Trading Economics: DAX Hovers Near Record Highs (10 Nov 2026); USD/PLN: CNBC close on 9 Nov", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (10 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (10 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: inflacja CPI w USA, prognoza na październik", nazwa_en: "Trading Economics: US CPI inflation, October forecast", url: "https://tradingeconomics.com/united-states/inflation-cpi" }
  ]
};
