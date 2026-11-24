// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-24T07:55:00+01:00",
  stanNa_en: "Tuesday, 24 Nov 2026 (morning)",
  stanNa: "wtorek, 24 lis 2026 (rano)",
  naglowek_en: "After Monday's rally US futures are flat. The Nikkei closed more than 4% higher, the Hang Seng slightly lower. The dollar is at a 20-month high, and WTI crude is below $80 on hopes of a US-Iran deal.",
  naglowek: "Po poniedziałkowym rajdzie kontrakty w USA stoją w miejscu. Nikkei zamknął się ponad 4% wyżej, Hang Seng lekko w dół. Dolar na 20-miesięcznym szczycie, ropa WTI poniżej 80 USD na nadziejach na porozumienie USA z Iranem.",
  punkty: [
    "Kontrakty na indeksy w USA stoją w miejscu po poniedziałkowym rajdzie (S&P 500 +4,7%, Nasdaq 100 +6,9%, Nvidia +31,5%). S&P 500 około 7 250 według Trading Economics.",
    "W Azji Nikkei zamknął się o 4,15% wyżej, ASX 200 zyskał około 1,5%, a Hang Seng stracił około 0,5%. Rentowność japońskich obligacji 10-letnich spadła do około 2,71%, najniżej od dwóch tygodni.",
    "Indeks dolara utrzymuje się przy 104,3, najwyżej od 20 miesięcy. Rynek wycenia około 95% szans na podwyżkę Fed o 25 pb w grudniu i kolejną w styczniu. EUR/USD 1,0910, GBP/USD 1,3043, USD/JPY 159,23.",
    "Ropa WTI spadła poniżej 80 USD (79,8), najniżej od trzech miesięcy, po rozmowach USA z Iranem za pośrednictwem Kataru. Złoto utrzymuje się nad 3 600 USD (3 625), srebro 42,20 (−2,1%). Bitcoin około 60 350 USD.",
    "Rozliczyliśmy 8 analiz: trafione S&P 500, Nasdaq 100, bitcoin, ropa WTI, USD/PLN i EUR/USD, nietrafione DAX i GBP/USD. Dla każdego z tych instrumentów jest nowy szkic. Dziś Ifo (10:00), Conference Board (16:00) i wyniki Della po sesji."
  ],
  punkty_en: [
    "US index futures are flat after Monday's rally (S&P 500 +4.7%, Nasdaq 100 +6.9%, Nvidia +31.5%). The S&P 500 around 7,250 according to Trading Economics.",
    "In Asia the Nikkei closed 4.15% higher, the ASX 200 gained about 1.5% and the Hang Seng lost about 0.5%. Japan's 10-year yield fell to about 2.71%, a two-week low.",
    "The dollar index holds near 104.3, a 20-month high. Markets price about a 95% chance of a 25 bp Fed hike in December and another in January. EUR/USD 1.0910, GBP/USD 1.3043, USD/JPY 159.23.",
    "WTI crude fell below $80 (79.8), a three-month low, after US-Iran talks via Qatar. Gold holds above $3,600 (3,625), silver 42.20 (−2.1%). Bitcoin around $60,350.",
    "We settled 8 analyses: hits for the S&P 500, Nasdaq 100, bitcoin, WTI crude, USD/PLN and EUR/USD, misses for the DAX and GBP/USD. Each of these instruments has a new draft. Today: Ifo (10:00), Conference Board (16:00) and Dell's results after the close."
  ],
  instrumenty: {
    sp500: { kurs: 7250, zmiana: 0.18, tydzien: -1.23, notka: "CFD przed sesją (Trading Economics). Nowy szkic wzrostowy: cel 7 416, unieważnienie 7 153.", notka_en: "Pre-market CFD (Trading Economics). New bullish draft: target 7,416, invalidation 7,153.", zrodlo: 1 },
    nasdaq: { kurs: 26787, zmiana: 0.15, tydzien: -0.8, notka: "CFD przed sesją (Trading Economics). Nowy szkic wzrostowy: cel 27 749, unieważnienie 26 386.", notka_en: "Pre-market CFD (Trading Economics). New bullish draft: target 27,749, invalidation 26,386.", zrodlo: 1 },
    xauusd: { kurs: 3624.56, zmiana: -0.26, tydzien: -5.82, notka: "Szkic wzrostowy: cel 3 723 jeszcze nieosiągnięty, unieważnienie 3 500.", notka_en: "Bullish draft: 3,723 target not yet reached, invalidation 3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.091, zmiana: 0.08, tydzien: -0.79, notka: "Nowy szkic spadkowy: cel 1,0762, unieważnienie 1,1023.", notka_en: "New bearish draft: target 1.0762, invalidation 1.1023.", zrodlo: 2 },
    gbpusd: { kurs: 1.3043, zmiana: 0.09, tydzien: -1.25, notka: "Nowy szkic spadkowy: cel 1,2965, unieważnienie 1,3144.", notka_en: "New bearish draft: target 1.2965, invalidation 1.3144.", zrodlo: 2 },
    usdjpy: { kurs: 159.23, zmiana: 0.14, tydzien: -0.08, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 42.2, zmiana: -2.14, tydzien: -10.86, notka: "Szkic wzrostowy: cel 45 jeszcze nieosiągnięty, unieważnienie 40,77.", notka_en: "Bullish draft: $45 target not yet reached, invalidation $40.77.", zrodlo: 0 },
    usdpln: { kurs: 4.075, zmiana: 0.0, tydzien: 1.92, notka: "Zamknięcie z poniedziałku (CNBC). Nowy szkic spadkowy: cel 4,0092, unieważnienie 4,0864.", notka_en: "Monday's close (CNBC). New bearish draft: target 4.0092, invalidation 4.0864.", zrodlo: 5 },
    wti: { kurs: 79.82, zmiana: -0.44, tydzien: -7.2, notka: "Najbliższy kontrakt. Nowy szkic spadkowy: cel 77,78, unieważnienie 83,95.", notka_en: "Front-month contract. New bearish draft: target $77.78, invalidation $83.95.", zrodlo: 3 },
    dax: { kurs: 25380, zmiana: 0.17, tydzien: -2.55, notka: "Trading Economics, przed otwarciem. Nowy szkic wzrostowy: cel 25 946, unieważnienie 24 873.", notka_en: "Trading Economics, before the open. New bullish draft: target 25,946, invalidation 24,873.", zrodlo: 5 },
    btcusd: { kurs: 60350, zmiana: -1.37, tydzien: -6.97, notka: "Gemini. Nowy szkic spadkowy: cel 57 655, unieważnienie 64 534.", notka_en: "Gemini. New bearish draft: target $57,655, invalidation $64,534.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Wt 24 lis", wydarzenia: ["Niemcy: Ifo (10:00)", "USA: zaufanie konsumentów (16:00)", "Dell: wyniki po sesji"] },
    { dzien: "Śr 25 lis", wydarzenia: ["Australia: CPI (1:30)", "USA: PCE, PKB, dobra trwałe, wnioski o zasiłek (14:30)", "Beżowa Księga Fed (20:00)"] },
    { dzien: "Czw 26 lis", wydarzenia: ["USA: Święto Dziękczynienia, giełdy zamknięte", "Protokół EBC (13:30)"] },
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Holds Gains Amid Recovery in Equity Markets (24 lis 2026)", nazwa_en: "Trading Economics: Gold Holds Gains Amid Recovery in Equity Markets (24 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Futures Steady After Nvidia-Led Rally; indeksy Azji (24 lis 2026)", nazwa_en: "Trading Economics: US Futures Steady After Nvidia-Led Rally; Asian indices (24 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Hovers at 20-Month Highs (24 lis 2026)", nazwa_en: "Trading Economics: Dollar Hovers at 20-Month Highs (24 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: Oil Extends Decline on US-Iran Optimism (24 lis 2026)", nazwa_en: "Trading Economics: Oil Extends Decline on US-Iran Optimism (24 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "FOREX.com: Euro Short-term Outlook: EUR/USD Plunges to 19-Month Low (18 lis 2026)", nazwa_en: "FOREX.com: Euro Short-term Outlook: EUR/USD Plunges to 19-Month Low (18 Nov 2026)", url: "https://www.forex.com/en/news-and-analysis/euro-short-term-outlook-eur-usd-plunges-to-19-month-low-bears-face-critical-test-11-18-2026/?amp=true" },
    { nazwa: "Trading Economics: DAX (24 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: DAX (24 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (24 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (24 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
