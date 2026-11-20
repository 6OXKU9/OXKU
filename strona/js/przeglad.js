// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-20T08:00:00+01:00",
  stanNa_en: "Friday morning, 20 Nov 2026 (before the European session)",
  stanNa: "piątek rano, 20 lis 2026 (przed sesją w Europie)",
  naglowek_en: "The AI sell-off spreads to Asia: Nikkei −4.9%, Taiwan's TAIEX −6.2%. Gold loses 2% to around $3,552 and heads for its worst week in months, silver 41.90. Seven analyses settled: five hits, two misses.",
  naglowek: "Wyprzedaż spółek AI przenosi się do Azji: Nikkei −4,9%, tajwański TAIEX −6,2%. Złoto traci 2% do około 3 552 USD i zmierza po najgorszy tydzień od miesięcy, srebro 41,90. Rozliczono siedem analiz: pięć trafionych, dwie nietrafione.",
  punkty: [
    "Wall Street zamknęła czwartek mocno w dół: S&P 500 −2% (najdłuższa seria spadków od kwietnia 2024), Nasdaq 100 −2,2%, Dow −1 101 pkt. Indeksy otworzyły się wysoko po debiucie Anthropic i odwróciły; rynek wątpi, czy boom AI zarobi na wysokie zadłużenie. Akcje Anthropic traciły po sesji blisko 4%, a kontrakty w USA rano lekko spadają.",
    "W Azji wyprzedaż: Nikkei −4,9%, TAIEX −6,2%, Hang Seng −2,2%, Szanghaj −1,6%, ASX 200 −1,7% (najniżej od pięciu miesięcy). DAX przed otwarciem około 25 140 (−1,3%) po piątej spadkowej sesji.",
    "Dolar zmierza po czwarty tydzień wzrostów (indeks 103,8). EUR/USD 1,0987, GBP/USD 1,3112, USD/JPY 159,1. Rynek wycenia podwyżkę Fed o 25 pb w grudniu.",
    "Złoto 3 552 USD (−2,1%), najniżej od września 2025; na tydzień traci blisko 9%, bo inwestorzy sprzedają je także, by pokryć straty na akcjach. Srebro 41,90 (−2,2%), miesięcznie −27,7%. WTI 82,9 USD, zmierza po trzeci tydzień spadków. Bitcoin około 61 800 USD.",
    "Rozliczenia: trafione analizy spadkowe złota (cel 3 700), srebra (44,74), DAX (25 618) i bitcoina (61 946) oraz wzrostowa Nasdaq 100 (cel 27 622 padł na otwarciu w czwartek, przed zamknięciem poniżej unieważnienia). Nietrafione wzrostowe S&P 500 i GBP/USD. Wynik AI: 42 z 83. Nowe szkice są spadkowe dla wszystkich siedmiu instrumentów. Dziś o 16:00 nastroje Uniwersytetu Michigan."
  ],
  punkty_en: [
    "Wall Street closed Thursday sharply lower: S&P 500 −2% (the longest losing streak since April 2024), Nasdaq 100 −2.2%, Dow −1,101 points. Indices opened high after Anthropic's debut and reversed; markets doubt the AI boom will earn enough to cover heavy borrowing. Anthropic shares fell nearly 4% after hours, and US futures edge lower this morning.",
    "A sell-off in Asia: Nikkei −4.9%, TAIEX −6.2%, Hang Seng −2.2%, Shanghai −1.6%, ASX 200 −1.7% (a five-month low). The DAX trades around 25,140 before the open (−1.3%) after a fifth losing session.",
    "The dollar heads for a fourth weekly gain (index 103.8). EUR/USD 1.0987, GBP/USD 1.3112, USD/JPY 159.1. Markets price a 25 bp Fed hike in December.",
    "Gold $3,552 (−2.1%), the lowest since September 2025; it is down nearly 9% on the week as investors also sell it to cover stock losses. Silver 41.90 (−2.2%), −27.7% on the month. WTI $82.9, heading for a third weekly decline. Bitcoin around $61,800.",
    "Settlements: bearish analyses on gold (target $3,700), silver (44.74), the DAX (25,618) and bitcoin (61,946) were hits, as was the bullish Nasdaq 100 one (the 27,622 target was hit at Thursday's open, before the close below invalidation). The bullish S&P 500 and GBP/USD analyses missed. AI score: 42 of 83. All seven new drafts are bearish. Today at 16:00 University of Michigan sentiment."
  ],
  instrumenty: {
    sp500: { kurs: 7134.61, zmiana: -0.57, tydzien: -5.65, notka: "CFD przed sesją (Trading Economics). Nowy szkic spadkowy: cel 7 081, unieważnienie 7 238.", notka_en: "Pre-market CFD (Trading Economics). New bearish draft: target 7,081, invalidation 7,238.", zrodlo: 1 },
    nasdaq: { kurs: 26191.96, zmiana: -1.23, tydzien: -6.27, notka: "CFD przed sesją (Trading Economics). Nowy szkic spadkowy: cel 26 140, unieważnienie 26 849.", notka_en: "Pre-market CFD (Trading Economics). New bearish draft: target 26,140, invalidation 26,849.", zrodlo: 1 },
    xauusd: { kurs: 3551.71, zmiana: -2.0, tydzien: -8.46, notka: "Nowy szkic spadkowy: cel 3 518, unieważnienie 3 597.", notka_en: "New bearish draft: target $3,518, invalidation $3,597.", zrodlo: 0 },
    eurusd: { kurs: 1.0987, zmiana: 0.19, tydzien: -0.31, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3112, zmiana: 0.2, tydzien: -0.78, notka: "Nowy szkic spadkowy: cel 1,3078, unieważnienie 1,3174.", notka_en: "New bearish draft: target 1.3078, invalidation 1.3174.", zrodlo: 4 },
    usdjpy: { kurs: 159.12, zmiana: -0.34, tydzien: -0.34, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 41.9, zmiana: -2.21, tydzien: -14.0, notka: "Nowy szkic spadkowy: cel 41,01, unieważnienie 42,06.", notka_en: "New bearish draft: target $41.01, invalidation $42.06.", zrodlo: 0 },
    usdpln: { kurs: 4.0436, zmiana: 0.0, tydzien: 1.26, notka: "Zamknięcie z czwartku (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Thursday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 5 },
    wti: { kurs: 82.86, zmiana: -0.42, tydzien: -6.44, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 81,97, unieważnienie 85,95.", notka_en: "Front-month contract. Bearish draft: target $81.97, invalidation $85.95.", zrodlo: 3 },
    dax: { kurs: 25139.4, zmiana: -1.27, tydzien: -6.02, notka: "CFD przed otwarciem (Trading Economics). Nowy szkic spadkowy: cel 25 050, unieważnienie 25 464.", notka_en: "Pre-open CFD (Trading Economics). New bearish draft: target 25,050, invalidation 25,464.", zrodlo: 5 },
    btcusd: { kurs: 61783, zmiana: -0.21, tydzien: -9.46, notka: "Gemini. Nowy szkic spadkowy: cel 61 250, unieważnienie 62 562.", notka_en: "Gemini. New bearish draft: target $61,250, invalidation $62,562.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Pt 20 lis", wydarzenia: ["USA: nastroje Uniwersytetu Michigan, odczyt ostateczny (16:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Set for Steepest Weekly Decline in Months (20 lis 2026)", nazwa_en: "Trading Economics: Gold Set for Steepest Weekly Decline in Months (20 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Stocks Slide as Anthropic's IPO Enthusiasm Fades; giełdy w Azji (19–20 lis 2026)", nazwa_en: "Trading Economics: US Stocks Slide as Anthropic's IPO Enthusiasm Fades; Asian markets (19–20 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Set for Fourth Consecutive Weekly Gain (20 lis 2026)", nazwa_en: "Trading Economics: Dollar Set for Fourth Consecutive Weekly Gain (20 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: Oil Set for Third Consecutive Weekly Decline (20 lis 2026)", nazwa_en: "Trading Economics: Oil Set for Third Consecutive Weekly Decline (20 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: funt na rocznym minimum (19–20 lis 2026)", nazwa_en: "Trading Economics: sterling at a one-year low (19–20 Nov 2026)", url: "https://tradingeconomics.com/united-kingdom/currency" },
    { nazwa: "Trading Economics: DAX (20 lis 2026); zamknięcia: świece dzienne CNBC", nazwa_en: "Trading Economics: DAX (20 Nov 2026); closes: CNBC daily candles", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (20 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (20 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Letters to a Young Investor: Weekly Economic Calendar 16–20 lis 2026", nazwa_en: "Letters to a Young Investor: Weekly Economic Calendar 16–20 Nov 2026", url: "https://letterstoayounginvestor.substack.com/p/weekly-economic-calendar-november-cf0" }
  ]
};
