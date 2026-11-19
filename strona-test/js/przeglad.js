// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-19T07:55:00+01:00",
  stanNa_en: "Thursday morning, 19 Nov 2026 (before the European session)",
  stanNa: "czwartek rano, 19 lis 2026 (przed sesją w Europie)",
  naglowek_en: "The dollar heads toward 104 after hawkish Fed minutes. Gold at a 14-month low (around $3,735), WTI crude near $83. Nasdaq 100 futures rise almost 1% ahead of Anthropic's market debut. Five analyses settled: four hits, one miss.",
  naglowek: "Dolar zmierza ku 104 po jastrzębim protokole Fed. Złoto na 14-miesięcznym dnie (około 3 735 USD), ropa WTI przy 83. Kontrakty na Nasdaq 100 rosną o blisko 1% przed debiutem giełdowym Anthropic. Rozliczono pięć analiz: cztery trafione, jedna nietrafiona.",
  punkty: [
    "Po protokole Fed dolar umacnia się dalej: indeks zbliża się do 104, najwyżej od kwietnia 2025. Waller nie wyklucza podwyżki o 50 pb w grudniu, a rynek wycenia około 90% szans na 25 pb. EUR/USD 1,0968, GBP/USD 1,3144, USD/JPY 159,5.",
    "Azja mieszana: Nikkei +1,0%, Hang Seng −2,1%, Szanghaj −0,8%, ASX 200 −1,2% (najniżej od miesiąca). Kontrakty w USA rosną: Nasdaq 100 o blisko 1%, S&P 500 o 0,4%, Dow o 0,3%. Anthropic wycenił ofertę publiczną powyżej przedziału i pozyskał 81,3 mld USD; dziś debiut akcji.",
    "Złoto około 3 735 USD (+0,3%) po środowym spadku do 3 720, najniżej od września 2025; srebro 45,39 USD (+0,8%). Ropa WTI trzyma się przy 83,3 USD, najniżej od prawie trzech miesięcy. Bitcoin około 63 500 USD; w nocy spadał na Gemini do 61 224.",
    "Rozliczenia z wczoraj: trafione analizy spadkowe złota (cel 3 730), srebra (45), GBP/USD (1,3132) i ropy WTI (83,88); nietrafiona analiza neutralna DAX, który zamknął się na 25 736, pod zakresem. Wynik AI: 37 z 76. Nowe szkice: spadkowe dla złota, srebra, ropy i DAX oraz wzrostowy dla GBP/USD.",
    "Dziś wyniki Walmartu przed sesją (13:00) i wnioski o zasiłek w USA (14:30), w piątek ostateczny odczyt nastrojów Uniwersytetu Michigan (16:00)."
  ],
  punkty_en: [
    "After the Fed minutes the dollar keeps strengthening: the index approaches 104, the highest since April 2025. Waller does not rule out a 50 bp hike in December, and markets price about a 90% chance of 25 bp. EUR/USD 1.0968, GBP/USD 1.3144, USD/JPY 159.5.",
    "Asia mixed: Nikkei +1.0%, Hang Seng −2.1%, Shanghai −0.8%, ASX 200 −1.2% (a one-month low). US futures rise: Nasdaq 100 almost 1%, S&P 500 0.4%, Dow 0.3%. Anthropic priced its IPO above the range and raised $81.3B; the shares debut today.",
    "Gold around $3,735 (+0.3%) after Wednesday's drop to $3,720, the lowest since September 2025; silver $45.39 (+0.8%). WTI crude holds near $83.3, the lowest in almost three months. Bitcoin around $63,500; overnight it fell to $61,224 on Gemini.",
    "Yesterday's settlements: bearish analyses on gold (target $3,730), silver ($45), GBP/USD (1.3132) and WTI crude ($83.88) were hits; the neutral DAX analysis missed as the index closed at 25,736, below the range. AI score: 37 of 76. New drafts: bearish on gold, silver, crude and the DAX, bullish on GBP/USD.",
    "Today Walmart reports before the open (13:00) and US jobless claims are due (14:30); on Friday the final University of Michigan sentiment reading (16:00)."
  ],
  instrumenty: {
    sp500: { kurs: 7323.63, zmiana: 0.0, tydzien: -3.54, notka: "Zamknięcie ze środy (CNBC); kontrakty rano +0,4%. Szkic wzrostowy: cel 7 502, unieważnienie 7 288.", notka_en: "Wednesday close (CNBC); futures +0.4% this morning. Bullish draft: target 7,502, invalidation 7,288.", zrodlo: 1 },
    nasdaq: { kurs: 27116.3, zmiana: 0.0, tydzien: -4.15, notka: "Zamknięcie ze środy (CNBC); kontrakty rano blisko +1%. Szkic wzrostowy: cel 27 622, unieważnienie 26 581.", notka_en: "Wednesday close (CNBC); futures almost +1% this morning. Bullish draft: target 27,622, invalidation 26,581.", zrodlo: 1 },
    xauusd: { kurs: 3734.91, zmiana: 0.3, tydzien: -3.67, notka: "Nowy szkic spadkowy: cel 3 700, unieważnienie 3 855.", notka_en: "New bearish draft: target $3,700, invalidation $3,855.", zrodlo: 0 },
    eurusd: { kurs: 1.0968, zmiana: -0.05, tydzien: -0.77, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3144, zmiana: -0.02, tydzien: -0.63, notka: "Nowy szkic wzrostowy: cel 1,3227, unieważnienie 1,3132.", notka_en: "New bullish draft: target 1.3227, invalidation 1.3132.", zrodlo: 4 },
    usdjpy: { kurs: 159.5, zmiana: 0.11, tydzien: -0.22, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 45.39, zmiana: 0.8, tydzien: -9.25, notka: "Nowy szkic spadkowy: cel 44,74, unieważnienie 47,69.", notka_en: "New bearish draft: target $44.74, invalidation $47.69.", zrodlo: 0 },
    usdpln: { kurs: 4.0162, zmiana: 0.0, tydzien: 0.87, notka: "Zamknięcie ze środy (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Wednesday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 5 },
    wti: { kurs: 83.33, zmiana: 0.08, tydzien: -6.1, notka: "Najbliższy kontrakt. Nowy szkic spadkowy: cel 81,97, unieważnienie 85,95.", notka_en: "Front-month contract. New bearish draft: target $81.97, invalidation $85.95.", zrodlo: 3 },
    dax: { kurs: 25736.2, zmiana: 0.0, tydzien: -3.87, notka: "Zamknięcie ze środy (CNBC), przed otwarciem. Nowy szkic spadkowy: cel 25 618, unieważnienie 26 139.", notka_en: "Wednesday close (CNBC), before the open. New bearish draft: target 25,618, invalidation 26,139.", zrodlo: 5 },
    btcusd: { kurs: 63465, zmiana: 0.77, tydzien: -11.08, notka: "Gemini. Szkic spadkowy: cel 61 946 (rozliczenie według świec Coinbase), unieważnienie 68 380.", notka_en: "Gemini. Bearish draft: target $61,946 (settled from Coinbase candles), invalidation $68,380.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Czw 19 lis", wydarzenia: ["Walmart: wyniki przed sesją (13:00)", "USA: wnioski o zasiłek (14:30)"] },
    { dzien: "Pt 20 lis", wydarzenia: ["USA: nastroje Uniwersytetu Michigan, odczyt ostateczny (16:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto i srebro (19 lis 2026)", nazwa_en: "Trading Economics: gold and silver (19 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Futures Climb Ahead of Anthropic's Debut; giełdy w Azji (19 lis 2026)", nazwa_en: "Trading Economics: US Futures Climb Ahead of Anthropic's Debut; Asian markets (19 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Extends Gains on Hawkish Fed Outlook (19 lis 2026)", nazwa_en: "Trading Economics: Dollar Extends Gains on Hawkish Fed Outlook (19 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: Oil Holds at Near Three-Month Low (19 lis 2026)", nazwa_en: "Trading Economics: Oil Holds at Near Three-Month Low (19 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: funt i BoE (18 lis 2026)", nazwa_en: "Trading Economics: sterling and the BoE (18 Nov 2026)", url: "https://tradingeconomics.com/united-kingdom/currency" },
    { nazwa: "Trading Economics: DAX (18 lis 2026); zamknięcia: świece dzienne CNBC", nazwa_en: "Trading Economics: DAX (18 Nov 2026); closes: CNBC daily candles", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (19 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (19 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Letters to a Young Investor: Weekly Economic Calendar 16–20 lis 2026", nazwa_en: "Letters to a Young Investor: Weekly Economic Calendar 16–20 Nov 2026", url: "https://letterstoayounginvestor.substack.com/p/weekly-economic-calendar-november-cf0" }
  ]
};
