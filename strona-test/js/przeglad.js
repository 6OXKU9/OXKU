// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-23T08:10:00+01:00",
  stanNa_en: "Monday morning, 23 Nov 2026 (before the European session)",
  stanNa: "poniedziałek rano, 23 lis 2026 (przed sesją w Europie)",
  naglowek_en: "A rebound after a week of selling: Nasdaq 100 futures rise almost 3%, S&P 500 futures 1.9%. Gold +2.5% to $3,624, silver +3.6%. Nine analyses settled: eight hits, one miss. This week PCE (Wednesday) and Thanksgiving.",
  naglowek: "Odbicie po tygodniu wyprzedaży: kontrakty na Nasdaq 100 rosną o blisko 3%, na S&P 500 o 1,9%. Złoto +2,5% do 3 624 USD, srebro +3,6%. Rozliczono dziewięć analiz: osiem trafionych, jedna nietrafiona. W tym tygodniu PCE (środa) i Święto Dziękczynienia.",
  punkty: [
    "W zeszłym tygodniu S&P 500 stracił 8,6%, Nasdaq Composite 10%, a Nvidia 22,9%, bo rynek wycofywał się z zakładów na spółki AI mimo rekordowego debiutu Anthropic. W poniedziałek kontrakty odbijają: Nasdaq 100 o blisko 3%, S&P 500 o 1,9%, Dow o 1,3%.",
    "Sekretarz skarbu Bessent ostrzegł, że Fed może zacieśniać politykę zbyt agresywnie. Rynek wycenia około 93% szans na podwyżkę o 25 pb w grudniu, a zakłady na 50 pb niemal zniknęły. Indeks dolara cofa się do 103,7: EUR/USD 1,0995, GBP/USD 1,3122, USD/JPY 158,95. W Japonii dziś święto.",
    "DAX rano około 24 871 (+0,3%) po najgorszym tygodniu od marca (−7,1%). Dziś wstępne PMI Niemiec (9:30), strefy euro (10:00), Wielkiej Brytanii (10:30) i USA (15:45). W Wielkiej Brytanii sprzedaż detaliczna wzrosła w październiku o 0,7% wobec oczekiwanego 0%.",
    "Złoto 3 624 USD (+2,5%) po piątkowym spadku do 3 503; srebro 42,67 (+3,6%). Ropa WTI 83,3 USD po trzech tygodniach spadków; w weekend Iran zaatakował Bahrajn, ale dostawy przez Zatokę trwają. Bitcoin po sobotnim spadku do 55 106 odbija do około 61 400 USD.",
    "Rozliczenia: trafione analizy spadkowe złota, srebra, S&P 500, Nasdaq 100, DAX, GBP/USD, bitcoina i ropy WTI; nietrafiona wzrostowa USD/JPY. Wynik AI: 50 z 92. Nowe szkice: wzrostowe dla złota, srebra, S&P 500, Nasdaq 100, GBP/USD i bitcoina, spadkowe dla DAX i ropy, neutralny dla USD/JPY."
  ],
  punkty_en: [
    "Last week the S&P 500 lost 8.6%, the Nasdaq Composite 10% and Nvidia 22.9% as markets unwound AI bets despite Anthropic's record debut. On Monday futures rebound: Nasdaq 100 almost 3%, S&P 500 1.9%, Dow 1.3%.",
    "Treasury Secretary Bessent warned the Fed could tighten too aggressively. Markets price about a 93% chance of a 25 bp hike in December, and bets on 50 bp have almost vanished. The dollar index retreats to 103.7: EUR/USD 1.0995, GBP/USD 1.3122, USD/JPY 158.95. Japan has a holiday today.",
    "The DAX trades around 24,871 this morning (+0.3%) after its worst week since March (−7.1%). Today flash PMIs for Germany (9:30), the euro area (10:00), the UK (10:30) and the US (15:45). UK retail sales rose 0.7% in October versus 0% expected.",
    "Gold $3,624 (+2.5%) after Friday's drop to 3,503; silver 42.67 (+3.6%). WTI crude 83.3 after three weekly declines; over the weekend Iran attacked Bahrain, but Gulf shipments continue. Bitcoin rebounds to around $61,400 after Saturday's drop to 55,106.",
    "Settlements: bearish analyses on gold, silver, the S&P 500, Nasdaq 100, DAX, GBP/USD, bitcoin and WTI crude were hits; the bullish USD/JPY one missed. AI score: 50 of 92. New drafts: bullish on gold, silver, the S&P 500, Nasdaq 100, GBP/USD and bitcoin, bearish on the DAX and crude, neutral on USD/JPY."
  ],
  instrumenty: {
    sp500: { kurs: 7064, zmiana: 2.22, tydzien: -4.75, notka: "CFD przed sesją (Trading Economics), kontrakty +1,9%. Nowy szkic wzrostowy: cel 7 238, unieważnienie 6 883.", notka_en: "Pre-market CFD (Trading Economics), futures +1.9%. New bullish draft: target 7,238, invalidation 6,883.", zrodlo: 1 },
    nasdaq: { kurs: 25762.26, zmiana: 2.93, tydzien: -5.28, notka: "CFD przed sesją (Trading Economics), kontrakty blisko +3%. Nowy szkic wzrostowy: cel 26 140, unieważnienie 24 911.", notka_en: "Pre-market CFD (Trading Economics), futures almost +3%. New bullish draft: target 26,140, invalidation 24,911.", zrodlo: 1 },
    xauusd: { kurs: 3623.54, zmiana: 2.58, tydzien: -6.01, notka: "Nowy szkic wzrostowy: cel 3 723, unieważnienie 3 500.", notka_en: "New bullish draft: target $3,723, invalidation $3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.0995, zmiana: 0.26, tydzien: -0.01, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3122, zmiana: 0.31, tydzien: -0.46, notka: "Nowy szkic wzrostowy: cel 1,3174, unieważnienie 1,3072.", notka_en: "New bullish draft: target 1.3174, invalidation 1.3072.", zrodlo: 4 },
    usdjpy: { kurs: 158.95, zmiana: 0.26, tydzien: -0.29, notka: "Nowy szkic neutralny: zakres 157,21–160.", notka_en: "New neutral draft: range 157.21–160.", zrodlo: 2 },
    xagusd: { kurs: 42.67, zmiana: 3.59, tydzien: -9.1, notka: "Nowy szkic wzrostowy: cel 45, unieważnienie 40,77.", notka_en: "New bullish draft: target $45, invalidation $40.77.", zrodlo: 0 },
    usdpln: { kurs: 4.0608, zmiana: 0.0, tydzien: 1.51, notka: "Zamknięcie z piątku (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Friday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 5 },
    wti: { kurs: 83.27, zmiana: -0.85, tydzien: -2.86, notka: "Najbliższy kontrakt. Nowy szkic spadkowy: cel 81,55, unieważnienie 84,35.", notka_en: "Front-month contract. New bearish draft: target $81.55, invalidation $84.35.", zrodlo: 3 },
    dax: { kurs: 24871, zmiana: 0.27, tydzien: -6.5, notka: "Trading Economics, przed otwarciem. Nowy szkic spadkowy: cel 24 500, unieważnienie 25 195.", notka_en: "Trading Economics, before the open. New bearish draft: target 24,500, invalidation 25,195.", zrodlo: 5 },
    btcusd: { kurs: 61396.5, zmiana: 1.39, tydzien: -6.0, notka: "Gemini. Nowy szkic wzrostowy: cel 62 500, unieważnienie 58 636.", notka_en: "Gemini. New bullish draft: target $62,500, invalidation $58,636.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Pon 23 lis", wydarzenia: ["Wstępne PMI: Niemcy 9:30, strefa euro 10:00, Wielka Brytania 10:30, USA 15:45"] },
    { dzien: "Wt 24 lis", wydarzenia: ["Niemcy: Ifo (10:00)", "USA: zaufanie konsumentów (16:00)", "Dell: wyniki po sesji"] },
    { dzien: "Śr 25 lis", wydarzenia: ["USA: PCE, PKB, dobra trwałe, wnioski o zasiłek (14:30)", "Beżowa Księga Fed (20:00)"] },
    { dzien: "Czw 26 lis", wydarzenia: ["USA: Święto Dziękczynienia, giełdy zamknięte", "Protokół EBC (13:30)"] },
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto odbija (23 lis 2026)", nazwa_en: "Trading Economics: gold rebounds (23 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: kontrakty w USA odbijają, giełdy w Azji (23 lis 2026)", nazwa_en: "Trading Economics: US futures rebound, Asian markets (23 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar cofa się z 19-miesięcznego szczytu (23 lis 2026)", nazwa_en: "Trading Economics: the dollar retreats from a 19-month high (23 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: ropa po trzech tygodniach spadków (22–23 lis 2026)", nazwa_en: "Trading Economics: crude after three weekly declines (22–23 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: funt i sprzedaż detaliczna w Wielkiej Brytanii (23 lis 2026)", nazwa_en: "Trading Economics: sterling and UK retail sales (23 Nov 2026)", url: "https://tradingeconomics.com/united-kingdom/currency" },
    { nazwa: "Trading Economics: DAX (23 lis 2026); zamknięcia: świece dzienne CNBC", nazwa_en: "Trading Economics: DAX (23 Nov 2026); closes: CNBC daily candles", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (23 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (23 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
