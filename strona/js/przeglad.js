// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-26T13:55:00+01:00",
  stanNa_en: "Thursday, 26 Nov 2026 (midday; Thanksgiving in the US)",
  stanNa: "czwartek, 26 lis 2026 (południe; w USA Święto Dziękczynienia)",
  naglowek_en: "The DAX rebounds about 1.8% to 25,150 after two days of losses, led by AI stocks and hopes that US tariffs on the EU will be capped at 15%. US markets are closed today. WTI crude rises for a fourth session to $84.7, gold $3,570 (−0.5%).",
  naglowek: "DAX odbija o około 1,8% do 25 150 po dwóch dniach spadków, ciągnięty przez spółki AI i nadzieje na ograniczenie ceł USA na UE do 15%. W USA giełdy są dziś zamknięte. Ropa WTI rośnie czwartą sesję do 84,7 USD, złoto 3 570 USD (−0,5%).",
  punkty: [
    "DAX zyskuje około 1,8% do 25 154 (Trading Economics podaje też wzrost ponad 2%). Siemens Energy i Infineon rosną o ponad 4%, Airbus i Siemens o 2–2,5%. Rynek liczy, że cła USA na towary z UE zostaną ograniczone do 15%.",
    "Giełdy w USA są zamknięte z powodu Święta Dziękczynienia; kontrakty na indeksy rosną o około 0,3%. W piątek krótsza sesja.",
    "Indeks dolara stoi przy 103,8. EUR/USD 1,0972, GBP/USD 1,3105, USD/JPY 159,28. Rynek wycenia niemal pewną podwyżkę Fed o 25 pb w grudniu.",
    "Złoto 3 570 USD (−0,5%), srebro 41,70 (+0,7%). Ropa WTI 84,7 USD (+1,3%), Brent 95,2, po atakach Huti na cele w Arabii Saudyjskiej i incydentach z minami w cieśninie Ormuz; w niedzielę spotkanie OPEC+. Bitcoin około 60 800 USD.",
    "W ciągu dnia DAX jest przy poziomie unieważnienia 25 151 nowego szkicu spadkowego, a ropa WTI powyżej unieważnienia 83,95; o rozliczeniu zdecyduje zamknięcie dnia. W nocy CPI z Tokio (0:30), w piątek o 8:45 wstępny CPI Francji."
  ],
  punkty_en: [
    "The DAX gains about 1.8% to 25,154 (Trading Economics also reports a rise of more than 2%). Siemens Energy and Infineon rise more than 4%, Airbus and Siemens 2–2.5%. Markets hope US tariffs on EU goods will be capped at 15%.",
    "US markets are closed for Thanksgiving; index futures rise about 0.3%. Friday has a shortened session.",
    "The dollar index stands near 103.8. EUR/USD 1.0972, GBP/USD 1.3105, USD/JPY 159.28. Markets price an almost certain 25 bp Fed hike in December.",
    "Gold $3,570 (−0.5%), silver 41.70 (+0.7%). WTI crude $84.7 (+1.3%), Brent 95.2, after Houthi attacks on Saudi targets and mine incidents in the Strait of Hormuz; OPEC+ meets on Sunday. Bitcoin around $60,800.",
    "Intraday the DAX is at the new bearish draft's 25,151 invalidation level, and WTI crude is above its 83.95 invalidation; the daily close will decide settlement. Overnight Tokyo CPI (0:30), on Friday at 8:45 French flash CPI."
  ],
  instrumenty: {
    sp500: { kurs: 7182.78, zmiana: 0.0, tydzien: 0.1, notka: "Zamknięcie ze środy (CNBC); dziś giełdy w USA zamknięte. Szkic wzrostowy: cel 7 416, unieważnienie 7 153.", notka_en: "Wednesday's close (CNBC); US markets closed today. Bullish draft: target 7,416, invalidation 7,153.", zrodlo: 1 },
    nasdaq: { kurs: 26046.9, zmiana: 0.0, tydzien: -1.77, notka: "Zamknięcie ze środy (CNBC). Szkic spadkowy: cel 24 911, unieważnienie 27 019.", notka_en: "Wednesday's close (CNBC). Bearish draft: target 24,911, invalidation 27,019.", zrodlo: 1 },
    xauusd: { kurs: 3570.36, zmiana: -0.5, tydzien: -1.48, notka: "Szkic wzrostowy: cel 3 723, unieważnienie przy zamknięciu poniżej 3 500.", notka_en: "Bullish draft: target 3,723, invalidation on a close below 3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.0972, zmiana: 0.01, tydzien: 0.05, notka: "Szkic spadkowy: cel 1,0762, unieważnienie 1,1023.", notka_en: "Bearish draft: target 1.0762, invalidation 1.1023.", zrodlo: 2 },
    gbpusd: { kurs: 1.3105, zmiana: -0.05, tydzien: 0.15, notka: "Szkic spadkowy: cel 1,2965, unieważnienie 1,3144.", notka_en: "Bearish draft: target 1.2965, invalidation 1.3144.", zrodlo: 2 },
    usdjpy: { kurs: 159.28, zmiana: 0.07, tydzien: -0.24, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 41.7, zmiana: 0.74, tydzien: -2.68, notka: "Szkic wzrostowy: cel 45, unieważnienie 40,77.", notka_en: "Bullish draft: target $45, invalidation $40.77.", zrodlo: 0 },
    usdpln: { kurs: 4.0695, zmiana: 0.0, tydzien: 0.64, notka: "Zamknięcie ze środy (CNBC). Szkic spadkowy: cel 4,0092, unieważnienie 4,0864.", notka_en: "Wednesday's close (CNBC). Bearish draft: target 4.0092, invalidation 4.0864.", zrodlo: 5 },
    wti: { kurs: 84.74, zmiana: 1.27, tydzien: 1.84, notka: "Najbliższy kontrakt. Powyżej poziomu unieważnienia 83,95 szkicu spadkowego; decyduje zamknięcie dnia.", notka_en: "Front-month contract. Above the bearish draft's 83.95 invalidation level; the daily close decides.", zrodlo: 3 },
    dax: { kurs: 25154.3, zmiana: 1.83, tydzien: -1.22, notka: "Trading Economics, w trakcie sesji. Przy poziomie unieważnienia 25 151 szkicu spadkowego; decyduje zamknięcie dnia.", notka_en: "Trading Economics, during the session. At the bearish draft's 25,151 invalidation level; the daily close decides.", zrodlo: 5 },
    btcusd: { kurs: 60796, zmiana: 0.68, tydzien: -1.8, notka: "Gemini. Szkic spadkowy: cel 57 208, unieważnienie 62 562.", notka_en: "Gemini. Bearish draft: target $57,208, invalidation $62,562.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Czw 26 lis", wydarzenia: ["USA: Święto Dziękczynienia, giełdy zamknięte", "Protokół EBC (13:30)"] },
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto lekko w dół (26 lis 2026)", nazwa_en: "Trading Economics: gold slightly lower (26 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: akcje w USA, kontrakty, Azja (26 lis 2026)", nazwa_en: "Trading Economics: US stocks, futures, Asia (26 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar, cła USA (26 lis 2026)", nazwa_en: "Trading Economics: the dollar, US tariffs (26 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: ropa trzecią sesję w górę, OPEC+ (26 lis 2026)", nazwa_en: "Trading Economics: crude up for a third session, OPEC+ (26 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: inflacja bazowa PCE w USA (październik 2026)", nazwa_en: "Trading Economics: US core PCE inflation (October 2026)", url: "https://tradingeconomics.com/united-states/core-pce-price-index-annual-change" },
    { nazwa: "Trading Economics: DAX odbija (26 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: DAX rebounds (26 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (24 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (24 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
