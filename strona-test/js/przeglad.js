// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-27T22:35:00+01:00",
  stanNa_en: "Friday, 27 Nov 2026 (after the close)",
  stanNa: "piątek, 27 lis 2026 (po zamknięciu)",
  naglowek_en: "The shortened US session ended higher: Nasdaq 100 +2.6%, S&P 500 +1.6% as AI stocks rebounded. The DAX closed +0.9% at 25,434. The dollar gained (DXY 104), gold +2.2% to $3,644, WTI crude -1.9% to $83.3 ahead of Sunday's OPEC+ meeting.",
  naglowek: "Krótsza sesja w USA na plusie: Nasdaq 100 +2,6%, S&P 500 +1,6% po odbiciu spółek od AI. DAX zamknął +0,9% na 25 434. Dolar zyskał (DXY 104), złoto +2,2% do 3 644 USD, ropa WTI -1,9% do 83,3 USD przed niedzielnym OPEC+.",
  punkty: [
    "Według Trading Economics kontrakty na Nasdaq 100 rosną o 2,4%, na S&P 500 o 1,7%, na Dow o 1%, przy odbiciu spółek AI. Sesja w USA kończy się dziś wcześniej.",
    "DAX zyskuje około 0,6% do 25 360 i zmierza do wzrostu o ponad 2% w tygodniu. Rheinmetall +5% przed nowymi celami średnioterminowymi, Infineon +3,6%, Siemens Energy +2,7%; SAP lekko w dół po doniesieniach o zwolnieniach.",
    "Wstępna inflacja CPI we Francji spadła w listopadzie do 2,9% r/r (oczekiwano 3,2%, poprzednio 3,4%), HICP 3,2%. Niższa od oczekiwań inflacja we Francji i Hiszpanii sugeruje łagodniejszy odczyt dla strefy euro.",
    "Indeks dolara przy 103,8, blisko 20-miesięcznego szczytu. EUR/USD 1,0965, GBP/USD 1,3130, USD/JPY 159,45. Złoto zyskuje 2,9% do 3 669 USD, srebro 43,9. Ropa WTI około 85,0 USD, Brent 96,5, przed niedzielnym spotkaniem OPEC+. Bitcoin około 61 400 USD.",
    "Żaden poziom otwartych szkiców nie został wyraźnie przebity. Szkic spadkowy dla ropy WTI czeka na dzisiejsze zamknięcie (kurs nad poziomem unieważnienia 83,95). W przyszłym tygodniu ISM (wtorek i czwartek, 16:00) i raport z rynku pracy USA (piątek, 14:30)."
  ],
  punkty_en: [
    "According to Trading Economics Nasdaq 100 futures rise 2.4%, S&P 500 futures 1.7% and Dow futures 1%, as AI stocks rebound. The US session ends early today.",
    "The DAX gains about 0.6% to 25,360 and heads for a weekly gain of more than 2%. Rheinmetall +5% ahead of new medium-term targets, Infineon +3.6%, Siemens Energy +2.7%; SAP slightly lower after reports of job cuts.",
    "French flash CPI inflation fell to 2.9% y/y in November (3.2% expected, 3.4% previously), HICP 3.2%. Lower-than-expected inflation in France and Spain points to a softer euro area reading.",
    "The dollar index near 103.8, close to a 20-month high. EUR/USD 1.0965, GBP/USD 1.3130, USD/JPY 159.45. Gold gains 2.9% to $3,669, silver 43.9. WTI crude around $85.0, Brent 96.5, ahead of Sunday's OPEC+ meeting. Bitcoin around $61,400.",
    "No level of the open drafts has been clearly breached. The WTI bearish draft waits for today's close (price above the 83.95 invalidation level). Next week ISM (Tuesday and Thursday, 16:00) and the US jobs report (Friday, 14:30)."
  ],
  instrumenty: {
    sp500: { kurs: 7297, zmiana: 1.59, tydzien: 5.59, notka: "CFD po zamknięciu (Trading Economics). Szkic wzrostowy: cel 7 416, unieważnienie 7 153.", notka_en: "CFD after the close (Trading Economics). Bullish draft: target 7,416, invalidation 7,153.", zrodlo: 1 },
    nasdaq: { kurs: 26689, zmiana: 2.47, tydzien: 6.63, notka: "Nasdaq 100, CFD po zamknięciu (Trading Economics). Szkic spadkowy: cel 24 911, unieważnienie 27 019.", notka_en: "Nasdaq 100, CFD after the close (Trading Economics). Bearish draft: target 24,911, invalidation 27,019.", zrodlo: 1 },
    xauusd: { kurs: 3644.05, zmiana: 2.16, tydzien: 3.16, notka: "Szkic wzrostowy: cel 3 723, unieważnienie 3 500.", notka_en: "Bullish draft: target 3,723, invalidation 3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.0934, zmiana: -0.3, tydzien: -0.3, notka: "Szkic spadkowy: cel 1,0762, unieważnienie 1,1023.", notka_en: "Bearish draft: target 1.0762, invalidation 1.1023.", zrodlo: 2 },
    gbpusd: { kurs: 1.3094, zmiana: -0.12, tydzien: 0.1, notka: "Szkic spadkowy: cel 1,2965, unieważnienie 1,3144.", notka_en: "Bearish draft: target 1.2965, invalidation 1.3144.", zrodlo: 2 },
    usdjpy: { kurs: 159.58, zmiana: 0.21, tydzien: 0.66, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 43.91, zmiana: 1.22, tydzien: 6.6, notka: "Szkic wzrostowy: cel 45 coraz bliżej, unieważnienie 40,77.", notka_en: "Bullish draft: $45 target getting closer, invalidation $40.77.", zrodlo: 0 },
    usdpln: { kurs: 4.0818, zmiana: 0.0, tydzien: 0.52, notka: "Czwartkowe zamknięcie (CNBC). Szkic spadkowy: cel 4,0092, unieważnienie 4,0864.", notka_en: "Thursday's close (CNBC). Bearish draft: target 4.0092, invalidation 4.0864.", zrodlo: 5 },
    wti: { kurs: 83.33, zmiana: -0.42, tydzien: -0.77, notka: "Najbliższy kontrakt. Wrócił poniżej 83,95, poziomu unieważnienia szkicu spadkowego; rozliczenie po piątkowej świecy.", notka_en: "Front-month contract. Back below the bearish draft's 83.95 invalidation level; settlement after Friday's candle.", zrodlo: 3 },
    dax: { kurs: 25434, zmiana: 0.87, tydzien: 2.54, notka: "Zamknięcie (Trading Economics). Szkic wzrostowy: cel 25 946, unieważnienie 24 698.", notka_en: "Close (Trading Economics). Bullish draft: target 25,946, invalidation 24,698.", zrodlo: 5 },
    btcusd: { kurs: 59792, zmiana: -1.16, tydzien: 1.66, notka: "Gemini. Szkic spadkowy: cel 57 208, unieważnienie 62 562.", notka_en: "Gemini. Bearish draft: target $57,208, invalidation $62,562.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Nd 29 lis", wydarzenia: ["Spotkanie OPEC+"] },
    { dzien: "Pon 30 lis", wydarzenia: ["Polska: wstępny CPI (10:00)"] },
    { dzien: "Wt 1 gru", wydarzenia: ["USA: ISM przemysł (16:00)"] },
    { dzien: "Czw 3 gru", wydarzenia: ["USA: ISM usługi (16:00)"] },
    { dzien: "Pt 4 gru", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Recovers From 15-Month Lows (27 lis 2026)", nazwa_en: "Trading Economics: Gold Recovers From 15-Month Lows (27 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Futures Climb in Post-Holiday Trade (27 lis 2026)", nazwa_en: "Trading Economics: US Futures Climb in Post-Holiday Trade (27 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Hovers Near 20-Month Highs (27 lis 2026)", nazwa_en: "Trading Economics: Dollar Hovers Near 20-Month Highs (27 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: Oil Set for First Weekly Gain in Four (27 lis 2026)", nazwa_en: "Trading Economics: Oil Set for First Weekly Gain in Four (27 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: wstępna inflacja CPI we Francji (listopad 2026)", nazwa_en: "Trading Economics: French flash CPI inflation (November 2026)", url: "https://tradingeconomics.com/france/inflation-cpi" },
    { nazwa: "Trading Economics: DAX 40 Extends Rally (27 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: DAX 40 Extends Rally (27 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (24 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (24 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" },
    { nazwa: "Wells Fargo (ActionForex): Economics Week Ahead (26 lis 2026)", nazwa_en: "Wells Fargo (ActionForex): Economics Week Ahead (26 Nov 2026)", url: "https://www.actionforex.com/contributors/fundamental-analysis/662125-economics-week-ahead-35/" }
  ]
};
