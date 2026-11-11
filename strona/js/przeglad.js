// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-11T13:50:00+01:00",
  stanNa_en: "Wednesday afternoon, 11 Nov 2026 (before the US open)",
  stanNa: "środa po południu, 11 lis 2026 (przed sesją w USA)",
  naglowek_en: "The DAX hits a record near 26,640, led by Siemens Energy. US futures rise after CoreWeave's results, Nasdaq 100 about +2%. The dollar keeps gaining on Fed hike bets; USD/JPY above 159. No major US data today.",
  naglowek: "DAX na rekordzie przy około 26 640, na czele Siemens Energy. Kontrakty w USA rosną po wynikach CoreWeave, Nasdaq 100 około +2%. Dolar dalej zyskuje na zakładach o podwyżkę Fed; USD/JPY powyżej 159. Dziś bez ważnych danych z USA.",
  punkty: [
    "DAX bije rekord: rano ponad 1% w górę, do około 26 640, teraz około 26 554 (+0,8%). Prowadzi Siemens Energy po rekordowych przychodach kwartalnych i podniesionej prognozie; rosną też Infineon, Siemens, Deutsche Bank, Hochtief, GEA i Deutsche Post. Brenntag traci 4,4% po słabszej rentowności.",
    "Euro Stoxx 50 +0,6%, giełda w Londynie +0,4%. Kontrakty w USA rosną po wynikach CoreWeave (akcje +13% po sesji): S&P 500 około 7 591 (+0,9% wobec wtorku), Nasdaq 100 około 28 301 (+2,0%). Według doniesień Anthropic może zadebiutować na giełdzie w przyszłym tygodniu.",
    "Dolar dalej zyskuje: indeks około 102,5 (+0,3%), EUR/USD 1,1137 (blisko dolnej granicy analizy neutralnej 1,1113), GBP/USD 1,3312, USD/JPY 159,16. Rynek wycenia około 91% szans na grudniową podwyżkę stóp Fed.",
    "Złoto około 4 042 USD (+0,2%) po wtorkowym spadku; srebro około 52,8 USD (+2,5%). Ropa drożeje: WTI około 87,4 USD (+1,6%), Brent około 93,4 USD (+2,1%). Bitcoin około 74 000 USD.",
    "Dziś w USA nie ma ważnych odczytów. W ciągu dnia żaden poziom analiz nie został rozstrzygnięty; o analizie neutralnej Nasdaq 100 zdecyduje zamknięcie dnia. W piątek o 14:30 ceny producentów PPI w USA."
  ],
  punkty_en: [
    "The DAX sets a record: up more than 1% in the morning to around 26,640, now around 26,554 (+0.8%). Siemens Energy leads after record quarterly revenue and higher guidance; Infineon, Siemens, Deutsche Bank, Hochtief, GEA and Deutsche Post also rise. Brenntag falls 4.4% on weaker profitability.",
    "Euro Stoxx 50 +0.6%, London +0.4%. US futures rise after CoreWeave's results (shares +13% after hours): S&P 500 around 7,591 (+0.9% versus Tuesday), Nasdaq 100 around 28,301 (+2.0%). Reports say Anthropic may list next week.",
    "The dollar keeps gaining: the index around 102.5 (+0.3%), EUR/USD 1.1137 (near the neutral analysis's lower bound of 1.1113), GBP/USD 1.3312, USD/JPY 159.16. Markets price about 91% odds of a December Fed hike.",
    "Gold around $4,042 (+0.2%) after Tuesday's drop; silver around $52.8 (+2.5%). Oil rises: WTI around $87.4 (+1.6%), Brent around $93.4 (+2.1%). Bitcoin around $74,000.",
    "No major US data today. No analysis level was decided intraday; the daily close will decide the neutral Nasdaq 100 analysis. US producer prices (PPI) on Friday at 14:30."
  ],
  instrumenty: {
    sp500: { kurs: 7590.81, zmiana: 0.93, tydzien: -1.27, notka: "Kontrakt CFD przed sesją. Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Pre-market CFD quote. Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 28300.55, zmiana: 2.02, tydzien: -0.48, notka: "Kontrakt CFD przed sesją. Analiza neutralna: zakres 26 606–27 967; kontrakt wyraźnie powyżej, decyduje zamknięcie dnia.", notka_en: "Pre-market CFD quote. Neutral analysis: 26,606–27,967 range; the contract is well above it, the daily close decides.", zrodlo: 1 },
    xauusd: { kurs: 4042.0, zmiana: 0.24, tydzien: -0.44, notka: "Szkic wzrostowy: cel 4 206, unieważnienie 4 031.", notka_en: "Bullish draft: target $4,206, invalidation $4,031.", zrodlo: 0 },
    eurusd: { kurs: 1.1137, zmiana: -0.23, tydzien: -0.8, notka: "Analiza neutralna: zakres 1,1113–1,1260; kurs blisko dolnej granicy.", notka_en: "Neutral analysis: 1.1113–1.1260 range; price near the lower bound.", zrodlo: 2 },
    gbpusd: { kurs: 1.3312, zmiana: -0.22, tydzien: -1.18, notka: "Szkic spadkowy: cel 1,3269, unieważnienie 1,3463.", notka_en: "Bearish draft: target 1.3269, invalidation 1.3463.", zrodlo: 2 },
    usdjpy: { kurs: 159.16, zmiana: 0.27, tydzien: 0.47, notka: "Szkic wzrostowy: cel 159,52, unieważnienie 157,85.", notka_en: "Bullish draft: target 159.52, invalidation 157.85.", zrodlo: 2 },
    xagusd: { kurs: 52.78, zmiana: 2.48, tydzien: 1.0, notka: "Szkic wzrostowy: cel 54,73, unieważnienie 51,38.", notka_en: "Bullish draft: target $54.73, invalidation $51.38.", zrodlo: 0 },
    usdpln: { kurs: 3.9337, zmiana: 0.0, tydzien: 0.78, notka: "Zamknięcie z wtorku. Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Tuesday close. Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 3 },
    wti: { kurs: 87.4, zmiana: 1.58, tydzien: -0.82, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax: { kurs: 26554.2, zmiana: 0.78, tydzien: 0.44, notka: "W trakcie sesji (CFD). Szkic wzrostowy: cel 26 693, unieważnienie 25 793; rano rekord około 26 640.", notka_en: "During the session (CFD). Bullish draft: target 26,693, invalidation 25,793; record near 26,640 in the morning.", zrodlo: 3 },
    btcusd: { kurs: 74006, zmiana: 0.42, tydzien: -7.99, notka: "Gemini. Analiza neutralna: zakres 72 644–76 306.", notka_en: "Gemini. Neutral analysis: $72,644–76,306 range.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Pt 13 lis", wydarzenia: ["USA: ceny producentów PPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Rises After Sharp Drop; srebro, ropa (11 lis 2026)", nazwa_en: "Trading Economics: Gold Rises After Sharp Drop; silver, crude (11 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Futures Jump on Upbeat CoreWeave Results (11 lis 2026)", nazwa_en: "Trading Economics: US Futures Jump on Upbeat CoreWeave Results (11 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Holds Gains on Hawkish Fed Outlook (11 lis 2026)", nazwa_en: "Trading Economics: Dollar Holds Gains on Hawkish Fed Outlook (11 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: DAX Rises to Hit Record Highs (11 lis 2026); USD/PLN: zamknięcie CNBC z 10 lis", nazwa_en: "Trading Economics: DAX Rises to Hit Record Highs (11 Nov 2026); USD/PLN: CNBC close on 10 Nov", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (11 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (11 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: ceny producentów PPI w USA, termin i prognoza", nazwa_en: "Trading Economics: US PPI, release date and forecast", url: "https://tradingeconomics.com/united-states/producer-prices-change" }
  ]
};
