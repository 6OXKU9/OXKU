// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-26T07:55:00+01:00",
  stanNa_en: "Thursday, 26 Nov 2026 (morning)",
  stanNa: "czwartek, 26 lis 2026 (rano)",
  naglowek_en: "A calmer Thanksgiving morning: US markets are closed today, and futures rise about 0.3%. In Asia the Hang Seng +1.5% and the Nikkei higher. Gold $3,566 (−0.6%), WTI crude $84 after three sessions of gains.",
  naglowek: "Spokojniejszy poranek w Święto Dziękczynienia: giełdy w USA są dziś zamknięte, a kontrakty rosną o około 0,3%. W Azji Hang Seng +1,5%, Nikkei w górę. Złoto 3 566 USD (−0,6%), ropa WTI 84 USD po trzech sesjach wzrostów.",
  punkty: [
    "W środę S&P 500 stracił 0,25%, Nasdaq 100 0,6%, a Dow zyskał około 0,4%, po odrobieniu spadków z ciągu dnia sięgających 3–4,6%. Nvidia −3,9%. Dziś giełdy w USA są zamknięte, a kontrakty na indeksy rosną o około 0,3%.",
    "W Azji Hang Seng zyskał około 1,5%, Nikkei i ASX 200 rosną (Trading Economics podaje różne skale wzrostu), a indeks Chin traci około 0,4%. Bank Korei podniósł stopy procentowe.",
    "Indeks dolara przy 103,8. EUR/USD 1,0963, GBP/USD 1,3100, USD/JPY 159,15. Po inflacji bazowej PCE 3,3% grudniowa podwyżka Fed jest niemal w pełni wyceniona. USA zaproponowały nowe cła na 13–14 partnerów, w tym 15–20% na UE.",
    "Złoto 3 566 USD (−0,6%), srebro 41,40. Ropa WTI 84,0 USD (+0,4%), trzecią sesję w górę po atakach na Bliskim Wschodzie, Brent 94,8; w niedzielę spotkanie OPEC+. Bitcoin około 60 450 USD.",
    "Rozliczyliśmy 2 analizy: bitcoin trafiony (spadek do 57 208), DAX nietrafiony (zamknięcie poniżej 24 873); dla obu są nowe szkice spadkowe. Ropa WTI zamknęła się według CNBC na 83,68, tuż pod poziomem unieważnienia 83,95, więc szkic pozostaje w toku. Dziś o 13:30 protokół EBC, w nocy CPI z Tokio (0:30)."
  ],
  punkty_en: [
    "On Wednesday the S&P 500 lost 0.25% and the Nasdaq 100 0.6%, while the Dow gained about 0.4%, after recovering intraday losses of 3–4.6%. Nvidia −3.9%. US markets are closed today, and index futures rise about 0.3%.",
    "In Asia the Hang Seng gained about 1.5%, the Nikkei and ASX 200 are higher (Trading Economics gives different sizes of the gain), and China's index loses about 0.4%. The Bank of Korea raised interest rates.",
    "The dollar index near 103.8. EUR/USD 1.0963, GBP/USD 1.3100, USD/JPY 159.15. After core PCE of 3.3%, a December Fed hike is almost fully priced. The US proposed new tariffs on 13–14 partners, including 15–20% on the EU.",
    "Gold $3,566 (−0.6%), silver 41.40. WTI crude $84.0 (+0.4%), up for a third session after attacks in the Middle East, Brent 94.8; OPEC+ meets on Sunday. Bitcoin around $60,450.",
    "We settled 2 analyses: bitcoin a hit (fall to 57,208), the DAX a miss (close below 24,873); both have new bearish drafts. WTI crude closed at 83.68 according to CNBC, just below the 83.95 invalidation level, so that draft stays open. Today ECB minutes at 13:30, overnight Tokyo CPI (0:30)."
  ],
  instrumenty: {
    sp500: { kurs: 7182.78, zmiana: 0.0, tydzien: 0.1, notka: "Zamknięcie ze środy (CNBC); dziś giełdy w USA zamknięte. Szkic wzrostowy: cel 7 416, unieważnienie 7 153.", notka_en: "Wednesday's close (CNBC); US markets closed today. Bullish draft: target 7,416, invalidation 7,153.", zrodlo: 1 },
    nasdaq: { kurs: 26046.9, zmiana: 0.0, tydzien: -1.77, notka: "Zamknięcie ze środy (CNBC). Szkic spadkowy: cel 24 911, unieważnienie 27 019.", notka_en: "Wednesday's close (CNBC). Bearish draft: target 24,911, invalidation 27,019.", zrodlo: 1 },
    xauusd: { kurs: 3566.33, zmiana: -0.61, tydzien: -1.59, notka: "Szkic wzrostowy: cel 3 723, unieważnienie przy zamknięciu poniżej 3 500.", notka_en: "Bullish draft: target 3,723, invalidation on a close below 3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.0963, zmiana: -0.07, tydzien: -0.03, notka: "Szkic spadkowy: cel 1,0762, unieważnienie 1,1023.", notka_en: "Bearish draft: target 1.0762, invalidation 1.1023.", zrodlo: 2 },
    gbpusd: { kurs: 1.31, zmiana: -0.09, tydzien: 0.11, notka: "Szkic spadkowy: cel 1,2965, unieważnienie 1,3144.", notka_en: "Bearish draft: target 1.2965, invalidation 1.3144.", zrodlo: 2 },
    usdjpy: { kurs: 159.15, zmiana: -0.01, tydzien: -0.33, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 41.4, zmiana: 0.01, tydzien: -3.38, notka: "Szkic wzrostowy: cel 45, unieważnienie 40,77.", notka_en: "Bullish draft: target $45, invalidation $40.77.", zrodlo: 0 },
    usdpln: { kurs: 4.0695, zmiana: 0.0, tydzien: 0.64, notka: "Zamknięcie ze środy (CNBC). Szkic spadkowy: cel 4,0092, unieważnienie 4,0864.", notka_en: "Wednesday's close (CNBC). Bearish draft: target 4.0092, invalidation 4.0864.", zrodlo: 5 },
    wti: { kurs: 84.01, zmiana: 0.39, tydzien: 0.96, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 77,78, unieważnienie 83,95 tuż pod ceną.", notka_en: "Front-month contract. Bearish draft: target $77.78, invalidation $83.95 just below the price.", zrodlo: 3 },
    dax: { kurs: 24702.1, zmiana: 0.0, tydzien: -2.99, notka: "Zamknięcie ze środy (CNBC). Nowy szkic spadkowy: cel 24 422, unieważnienie 25 151.", notka_en: "Wednesday's close (CNBC). New bearish draft: target 24,422, invalidation 25,151.", zrodlo: 5 },
    btcusd: { kurs: 60454, zmiana: 0.12, tydzien: -2.36, notka: "Gemini. Nowy szkic spadkowy: cel 57 208, unieważnienie 62 562.", notka_en: "Gemini. New bearish draft: target $57,208, invalidation $62,562.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Czw 26 lis", wydarzenia: ["USA: Święto Dziękczynienia, giełdy zamknięte", "Protokół EBC (13:30)"] },
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto w stronę 3 550 USD (26 lis 2026)", nazwa_en: "Trading Economics: gold toward $3,550 (26 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: akcje w USA, kontrakty, Azja (26 lis 2026)", nazwa_en: "Trading Economics: US stocks, futures, Asia (26 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar, cła USA (26 lis 2026)", nazwa_en: "Trading Economics: the dollar, US tariffs (26 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: ropa trzecią sesję w górę, OPEC+ (26 lis 2026)", nazwa_en: "Trading Economics: crude up for a third session, OPEC+ (26 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: inflacja bazowa PCE w USA (październik 2026)", nazwa_en: "Trading Economics: US core PCE inflation (October 2026)", url: "https://tradingeconomics.com/united-states/core-pce-price-index-annual-change" },
    { nazwa: "Trading Economics: DAX i cła USA (25 lis 2026); DAX i USD/PLN: zamknięcia CNBC", nazwa_en: "Trading Economics: DAX and US tariffs (25 Nov 2026); DAX and USD/PLN: CNBC closes", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (24 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (24 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
