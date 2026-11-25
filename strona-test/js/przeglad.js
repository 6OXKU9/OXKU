// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-25T13:55:00+01:00",
  stanNa_en: "Wednesday, 25 Nov 2026 (before the US session)",
  stanNa: "środa, 25 lis 2026 (przed sesją w USA)",
  naglowek_en: "The AI sell-off deepens: Nasdaq 100 futures lose more than 2%, S&P 500 futures about 1.5%, Nvidia −5% before the open. On top of that, reports of higher US tariffs on China and the EU. The DAX −0.4%, gold near $3,510 ahead of PCE data (14:30).",
  naglowek: "Wyprzedaż spółek AI przybiera na sile: kontrakty na Nasdaq 100 tracą ponad 2%, na S&P 500 około 1,5%, Nvidia przed sesją −5%. Do tego doniesienia o wyższych cłach USA na Chiny i UE. DAX −0,4%, złoto przy 3 510 USD przed danymi o PCE (14:30).",
  punkty: [
    "Według Trading Economics kontrakty na S&P 500 tracą około 1,5%, na Nasdaq 100 ponad 2%. Nvidia traci przed sesją około 5% po wtorkowym spadku o 6%; Broadcom, AMD, Micron i Intel do 7% w dół, Alphabet, Amazon i Microsoft do 4%. Akcje Anthropic są około 8% poniżej ceny z debiutu. VIX wzrósł do 30,6.",
    "Według doniesień USA podniosą cła na Chiny, UE i 14 innych gospodarek. Indeks dolara przy 104,0 przed danymi o PCE. EUR/USD około 1,0950, GBP/USD 1,3080, USD/JPY 159,2. Rynek wycenia około 96% szans na grudniową podwyżkę Fed.",
    "DAX traci około 0,4% do 24 910 po nieudanej próbie powrotu nad 25 000. Infineon i Bayer do 4,4% w dół; Volkswagen +6%, BMW +4,7%, Mercedes-Benz +2,6% po pozytywnej prognozie JPMorgan dla branży na 2027 rok. Nikkei zamknął się około 4% niżej.",
    "Złoto około 3 520 USD (−1%), blisko poziomu 3 500, srebro 40,1 (−1,9%). Ropa WTI około 82,3 USD, Brent 92,1; Iran podaje, że w cieśninie Ormuz cztery tankowce zapaliły się po wejściu na miny, a OPEC+ spotyka się 29 listopada. Bitcoin około 58 650 USD.",
    "W ciągu dnia S&P 500 jest pod poziomem unieważnienia 7 153, srebro pod 40,77, a DAX i złoto blisko swoich poziomów; o rozliczeniu zdecyduje zamknięcie dnia. O 14:30 PCE, PKB, dobra trwałe i wnioski o zasiłek, o 20:00 Beżowa Księga; w czwartek Święto Dziękczynienia."
  ],
  punkty_en: [
    "According to Trading Economics S&P 500 futures lose about 1.5% and Nasdaq 100 futures more than 2%. Nvidia falls about 5% before the open after Tuesday's 6% drop; Broadcom, AMD, Micron and Intel are down up to 7%, Alphabet, Amazon and Microsoft up to 4%. Anthropic shares are about 8% below their IPO price. The VIX rose to 30.6.",
    "The US will reportedly raise tariffs on China, the EU and 14 other economies. The dollar index is near 104.0 ahead of the PCE data. EUR/USD around 1.0950, GBP/USD 1.3080, USD/JPY 159.2. Markets price about a 96% chance of a December Fed hike.",
    "The DAX loses about 0.4% to 24,910 after failing to climb back above 25,000. Infineon and Bayer are down up to 4.4%; Volkswagen +6%, BMW +4.7%, Mercedes-Benz +2.6% after a positive JPMorgan outlook for the sector in 2027. The Nikkei closed about 4% lower.",
    "Gold around $3,520 (−1%), close to the 3,500 level, silver 40.1 (−1.9%). WTI crude around $82.3, Brent 92.1; Iran says four tankers caught fire after hitting mines in the Strait of Hormuz, and OPEC+ meets on 29 November. Bitcoin around $58,650.",
    "Intraday the S&P 500 is below its 7,153 invalidation level, silver below 40.77, and the DAX and gold are close to their levels; the daily close will decide settlement. At 14:30 PCE, GDP, durable goods and jobless claims, at 20:00 the Beige Book; on Thursday Thanksgiving."
  ],
  instrumenty: {
    sp500: { kurs: 7093, zmiana: -1.5, tydzien: -3.15, notka: "Wtorkowe zamknięcie (CNBC) skorygowane o ruch kontraktów (−1,5%, Trading Economics). Poniżej poziomu unieważnienia 7 153 szkicu wzrostowego; decyduje zamknięcie dnia.", notka_en: "Tuesday's close (CNBC) adjusted for the futures move (−1.5%, Trading Economics). Below the bullish draft's 7,153 invalidation level; the daily close decides.", zrodlo: 1 },
    nasdaq: { kurs: 25690, zmiana: -2.0, tydzien: -5.26, notka: "Wtorkowe zamknięcie (CNBC) skorygowane o ruch kontraktów (−2%). Szkic spadkowy: cel 24 911, unieważnienie 27 019.", notka_en: "Tuesday's close (CNBC) adjusted for the futures move (−2%). Bearish draft: target 24,911, invalidation 27,019.", zrodlo: 1 },
    xauusd: { kurs: 3519.24, zmiana: -1.02, tydzien: -5.49, notka: "Szkic wzrostowy: cel 3 723, unieważnienie 3 500 tuż pod ceną.", notka_en: "Bullish draft: target 3,723, invalidation 3,500 just below the price.", zrodlo: 0 },
    eurusd: { kurs: 1.095, zmiana: -0.13, tydzien: -0.21, notka: "Szkic spadkowy: cel 1,0762, unieważnienie 1,1023.", notka_en: "Bearish draft: target 1.0762, invalidation 1.1023.", zrodlo: 2 },
    gbpusd: { kurs: 1.308, zmiana: -0.25, tydzien: -0.51, notka: "Szkic spadkowy: cel 1,2965, unieważnienie 1,3144.", notka_en: "Bearish draft: target 1.2965, invalidation 1.3144.", zrodlo: 2 },
    usdjpy: { kurs: 159.23, zmiana: -0.01, tydzien: -0.06, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 40.14, zmiana: -1.88, tydzien: -10.86, notka: "Cena poniżej poziomu unieważnienia 40,77 szkicu wzrostowego; rozliczenie po zamknięciu dnia.", notka_en: "The price is below the bullish draft's 40.77 invalidation level; settlement after the daily close.", zrodlo: 0 },
    usdpln: { kurs: 4.0625, zmiana: 0.0, tydzien: 1.15, notka: "Wtorkowe zamknięcie (CNBC). Szkic spadkowy: cel 4,0092, unieważnienie 4,0864.", notka_en: "Tuesday's close (CNBC). Bearish draft: target 4.0092, invalidation 4.0864.", zrodlo: 5 },
    wti: { kurs: 82.3, zmiana: 0.3, tydzien: -1.15, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 77,78, unieważnienie 83,95.", notka_en: "Front-month contract. Bearish draft: target $77.78, invalidation $83.95.", zrodlo: 3 },
    dax: { kurs: 24907.7, zmiana: -0.44, tydzien: -3.22, notka: "Trading Economics, w trakcie sesji. Szkic wzrostowy: cel 25 946, unieważnienie 24 873 tuż pod ceną.", notka_en: "Trading Economics, during the session. Bullish draft: target 25,946, invalidation 24,873 just below the price.", zrodlo: 5 },
    btcusd: { kurs: 58661, zmiana: -1.81, tydzien: -6.86, notka: "Gemini. Szkic spadkowy: cel 57 655, unieważnienie 64 534.", notka_en: "Gemini. Bearish draft: target $57,655, invalidation $64,534.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Śr 25 lis", wydarzenia: ["USA: PCE, PKB, dobra trwałe, wnioski o zasiłek (14:30)", "Beżowa Księga Fed (20:00)"] },
    { dzien: "Czw 26 lis", wydarzenia: ["USA: Święto Dziękczynienia, giełdy zamknięte", "Protokół EBC (13:30)"] },
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto przy 3 510 USD przed PCE (25 lis 2026)", nazwa_en: "Trading Economics: gold near $3,510 ahead of PCE (25 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: Tech Selloff Weighs on US Futures (25 lis 2026)", nazwa_en: "Trading Economics: Tech Selloff Weighs on US Futures (25 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Strengthens (25 lis 2026)", nazwa_en: "Trading Economics: Dollar Strengthens (25 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: ropa, Ormuz i OPEC+ (25 lis 2026)", nazwa_en: "Trading Economics: crude, Hormuz and OPEC+ (25 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: inflacja CPI w Australii (październik 2026)", nazwa_en: "Trading Economics: Australia CPI inflation (October 2026)", url: "https://tradingeconomics.com/australia/inflation-cpi" },
    { nazwa: "Trading Economics: DAX Fails to Recover (25 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: DAX Fails to Recover (25 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (24 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (24 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
