// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-24T13:55:00+01:00",
  stanNa_en: "Tuesday, 24 Nov 2026 (before the US session)",
  stanNa: "wtorek, 24 lis 2026 (przed sesją w USA)",
  naglowek_en: "The AI rally fades: Nasdaq 100 futures lose about 1.5% and S&P 500 futures about 0.5%, Nvidia −4.5% before the open. The DAX gives back part of Monday's gains, the dollar slips below 104 and EUR/USD rebounds to 1.096.",
  naglowek: "Rajd spółek AI słabnie: kontrakty na Nasdaq 100 tracą około 1,5%, na S&P 500 około 0,5%, Nvidia przed sesją −4,5%. DAX oddaje część poniedziałkowych zysków, dolar cofa się poniżej 104, a EUR/USD odbija do 1,096.",
  punkty: [
    "Przed otwarciem kontrakty na Nasdaq 100 tracą około 1,5%, na S&P 500 około 0,5% (Trading Economics). Nvidia traci około 4,5% po poniedziałkowym wzroście o 31,5%; Micron, Intel i Marvell do 6% w dół, HPE około −12% po słabej prognozie przychodów. Akcje Anthropic spadły poniżej ceny z debiutu.",
    "Indeks dolara cofnął się poniżej 104 z poniedziałkowego szczytu 104,3. EUR/USD rośnie o około 0,5% do 1,0960, GBP/USD do 1,3095, USD/JPY 159,14. Rynek wycenia 95–97% szans na podwyżkę Fed w grudniu i około 59% na kolejną w styczniu.",
    "DAX traci około 0,4–0,9% (Trading Economics podaje dwa poziomy: 25 299 i 25 122); Infineon, Siemens i Siemens Energy w dół. Trading Economics nie podaje jeszcze odczytu Ifo (oczekiwano 90,5 po 90,2).",
    "Złoto 3 642 USD (+0,2%) utrzymuje się nad 3 600, srebro 42,60 (−1,2%). Ropa WTI około 80,2 USD, przy 16-tygodniowym minimum, Brent 89,5. Bitcoin około 60 400 USD.",
    "Żaden poziom nowych szkiców nie został wyraźnie przebity. O 16:00 zaufanie konsumentów Conference Board, po sesji wyniki Della; w środę PCE, PKB i wnioski o zasiłek (14:30)."
  ],
  punkty_en: [
    "Before the open Nasdaq 100 futures lose about 1.5% and S&P 500 futures about 0.5% (Trading Economics). Nvidia falls about 4.5% after Monday's 31.5% jump; Micron, Intel and Marvell are down up to 6%, HPE about −12% after a weak revenue forecast. Anthropic shares fell below their IPO price.",
    "The dollar index slipped below 104 from Monday's 104.3 high. EUR/USD rises about 0.5% to 1.0960, GBP/USD to 1.3095, USD/JPY 159.14. Markets price a 95–97% chance of a December Fed hike and about 59% for another in January.",
    "The DAX loses about 0.4–0.9% (Trading Economics gives two levels: 25,299 and 25,122); Infineon, Siemens and Siemens Energy are lower. Trading Economics does not show the Ifo reading yet (90.5 expected after 90.2).",
    "Gold $3,642 (+0.2%) holds above 3,600, silver 42.60 (−1.2%). WTI crude around $80.2, near a 16-week low, Brent 89.5. Bitcoin around $60,400.",
    "No level of the new drafts has been clearly breached. Conference Board consumer confidence at 16:00, Dell's results after the close; on Wednesday PCE, GDP and jobless claims (14:30)."
  ],
  instrumenty: {
    sp500: { kurs: 7173.86, zmiana: -0.87, tydzien: -2.27, notka: "CFD przed sesją (Trading Economics). Szkic wzrostowy: cel 7 416, unieważnienie 7 153.", notka_en: "Pre-market CFD (Trading Economics). Bullish draft: target 7,416, invalidation 7,153.", zrodlo: 1 },
    nasdaq: { kurs: 26296.71, zmiana: -1.68, tydzien: -2.61, notka: "CFD przed sesją (Trading Economics). Szkic wzrostowy: cel 27 749, unieważnienie 26 386.", notka_en: "Pre-market CFD (Trading Economics). Bullish draft: target 27,749, invalidation 26,386.", zrodlo: 1 },
    xauusd: { kurs: 3641.92, zmiana: 0.22, tydzien: -5.37, notka: "Szkic wzrostowy: cel 3 723 jeszcze nieosiągnięty, unieważnienie 3 500.", notka_en: "Bullish draft: 3,723 target not yet reached, invalidation 3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.096, zmiana: 0.54, tydzien: -0.34, notka: "Szkic spadkowy: cel 1,0762, unieważnienie 1,1023.", notka_en: "Bearish draft: target 1.0762, invalidation 1.1023.", zrodlo: 2 },
    gbpusd: { kurs: 1.3095, zmiana: 0.49, tydzien: -0.86, notka: "Szkic spadkowy: cel 1,2965, unieważnienie 1,3144.", notka_en: "Bearish draft: target 1.2965, invalidation 1.3144.", zrodlo: 2 },
    usdjpy: { kurs: 159.14, zmiana: 0.09, tydzien: -0.13, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 42.6, zmiana: -1.21, tydzien: -10.01, notka: "Szkic wzrostowy: cel 45 jeszcze nieosiągnięty, unieważnienie 40,77.", notka_en: "Bullish draft: $45 target not yet reached, invalidation $40.77.", zrodlo: 0 },
    usdpln: { kurs: 4.075, zmiana: 0.0, tydzien: 1.92, notka: "Zamknięcie z poniedziałku (CNBC), brak świeższego notowania. Szkic spadkowy: cel 4,0092, unieważnienie 4,0864.", notka_en: "Monday's close (CNBC), no fresher quote. Bearish draft: target 4.0092, invalidation 4.0864.", zrodlo: 5 },
    wti: { kurs: 80.22, zmiana: 0.06, tydzien: -6.73, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 77,78, unieważnienie 83,95.", notka_en: "Front-month contract. Bearish draft: target $77.78, invalidation $83.95.", zrodlo: 3 },
    dax: { kurs: 25121.9, zmiana: -0.85, tydzien: -3.55, notka: "Trading Economics, w trakcie sesji. Szkic wzrostowy: cel 25 946, unieważnienie 24 873.", notka_en: "Trading Economics, during the session. Bullish draft: target 25,946, invalidation 24,873.", zrodlo: 5 },
    btcusd: { kurs: 60426.9, zmiana: -1.25, tydzien: -6.85, notka: "Gemini. Szkic spadkowy: cel 57 655, unieważnienie 64 534.", notka_en: "Gemini. Bearish draft: target $57,655, invalidation $64,534.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Wt 24 lis", wydarzenia: ["Niemcy: Ifo (10:00)", "USA: zaufanie konsumentów (16:00)", "Dell: wyniki po sesji"] },
    { dzien: "Śr 25 lis", wydarzenia: ["Australia: CPI (1:30)", "USA: PCE, PKB, dobra trwałe, wnioski o zasiłek (14:30)", "Beżowa Księga Fed (20:00)"] },
    { dzien: "Czw 26 lis", wydarzenia: ["USA: Święto Dziękczynienia, giełdy zamknięte", "Protokół EBC (13:30)"] },
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto utrzymuje się nad 3 600 USD (24 lis 2026)", nazwa_en: "Trading Economics: gold holds above $3,600 (24 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: kontrakty w USA w dół po rajdzie Nvidii (24 lis 2026)", nazwa_en: "Trading Economics: US futures lower after the Nvidia rally (24 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar poniżej 104 (24 lis 2026)", nazwa_en: "Trading Economics: dollar below 104 (24 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: ropa przy 16-tygodniowym minimum (24 lis 2026)", nazwa_en: "Trading Economics: crude near a 16-week low (24 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "FOREX.com: Euro Short-term Outlook: EUR/USD Plunges to 19-Month Low (18 lis 2026)", nazwa_en: "FOREX.com: Euro Short-term Outlook: EUR/USD Plunges to 19-Month Low (18 Nov 2026)", url: "https://www.forex.com/en/news-and-analysis/euro-short-term-outlook-eur-usd-plunges-to-19-month-low-bears-face-critical-test-11-18-2026/?amp=true" },
    { nazwa: "Trading Economics: DAX oddaje zyski, Ifo (24 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: DAX gives back gains, Ifo (24 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (24 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (24 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
