// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-26T22:35:00+01:00",
  stanNa_en: "Thursday, 26 Nov 2026 (evening; Thanksgiving in the US)",
  stanNa: "czwartek, 26 lis 2026 (wieczór; w USA Święto Dziękczynienia)",
  naglowek_en: "The DAX closed about 2.1% higher at 25,220 after two days of losses; Volkswagen, Siemens Energy and Bayer gained more than 4%. US markets were closed. WTI crude rose for a fourth session to $84.9, gold $3,567 (−0.6%).",
  naglowek: "DAX zamknął się około 2,1% wyżej, na 25 220, po dwóch dniach spadków; Volkswagen, Siemens Energy i Bayer zyskały ponad 4%. W USA giełdy były zamknięte. Ropa WTI wzrosła czwartą sesję do 84,9 USD, złoto 3 567 USD (−0,6%).",
  punkty: [
    "DAX zamknął się około 2,1% wyżej, na 25 220 (Trading Economics podaje 25 216–25 231). Volkswagen +4,7%, Siemens Energy i Bayer około +4,4%, BMW i Rheinmetall około +4%, Infineon +3,5%; jedynie Commerzbank −2,7%. Rynek liczy, że cła USA na UE zostaną ograniczone do 15%.",
    "Giełdy w USA były zamknięte z powodu Święta Dziękczynienia; kontrakty na indeksy zyskiwały około 0,3%. W piątek krótsza sesja.",
    "Indeks dolara przy 103,8 (+0,1%). EUR/USD 1,0970, GBP/USD 1,3107, USD/JPY 159,28. Rynek wycenia niemal pewną podwyżkę Fed o 25 pb w grudniu.",
    "Złoto 3 567 USD (−0,6%). Dla srebra Trading Economics podaje sprzeczne notowania (41,57 i 43,38), więc nie podajemy dziennej zmiany jako pewnej. Ropa WTI 84,9 USD (+1,4%), Brent 95,9, po atakach na Bliskim Wschodzie; w niedzielę spotkanie OPEC+. Bitcoin około 60 800 USD.",
    "DAX zamknął się powyżej poziomu unieważnienia 25 151 nowego szkicu spadkowego, a ropa WTI powyżej unieważnienia 83,95; rozliczenie jutro rano według świec dziennych. W nocy CPI z Tokio (0:30), o 8:45 wstępny CPI Francji, w USA krótsza sesja."
  ],
  punkty_en: [
    "The DAX closed about 2.1% higher at 25,220 (Trading Economics gives 25,216–25,231). Volkswagen +4.7%, Siemens Energy and Bayer about +4.4%, BMW and Rheinmetall about +4%, Infineon +3.5%; only Commerzbank −2.7%. Markets hope US tariffs on the EU will be capped at 15%.",
    "US markets were closed for Thanksgiving; index futures gained about 0.3%. Friday has a shortened session.",
    "The dollar index near 103.8 (+0.1%). EUR/USD 1.0970, GBP/USD 1.3107, USD/JPY 159.28. Markets price an almost certain 25 bp Fed hike in December.",
    "Gold $3,567 (−0.6%). For silver Trading Economics shows conflicting quotes (41.57 and 43.38), so we do not treat the daily change as certain. WTI crude $84.9 (+1.4%), Brent 95.9, after attacks in the Middle East; OPEC+ meets on Sunday. Bitcoin around $60,800.",
    "The DAX closed above the new bearish draft's 25,151 invalidation level, and WTI crude above its 83.95 invalidation; settlement tomorrow morning from the daily candles. Overnight Tokyo CPI (0:30), at 8:45 French flash CPI, and a shortened US session."
  ],
  instrumenty: {
    sp500: { kurs: 7182.78, zmiana: 0.0, tydzien: 0.1, notka: "Zamknięcie ze środy (CNBC); dziś giełdy w USA zamknięte. Szkic wzrostowy: cel 7 416, unieważnienie 7 153.", notka_en: "Wednesday's close (CNBC); US markets closed today. Bullish draft: target 7,416, invalidation 7,153.", zrodlo: 1 },
    nasdaq: { kurs: 26046.9, zmiana: 0.0, tydzien: -1.77, notka: "Zamknięcie ze środy (CNBC). Szkic spadkowy: cel 24 911, unieważnienie 27 019.", notka_en: "Wednesday's close (CNBC). Bearish draft: target 24,911, invalidation 27,019.", zrodlo: 1 },
    xauusd: { kurs: 3567.16, zmiana: -0.59, tydzien: -1.57, notka: "Szkic wzrostowy: cel 3 723, unieważnienie przy zamknięciu poniżej 3 500.", notka_en: "Bullish draft: target 3,723, invalidation on a close below 3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.097, zmiana: -0.01, tydzien: 0.04, notka: "Szkic spadkowy: cel 1,0762, unieważnienie 1,1023.", notka_en: "Bearish draft: target 1.0762, invalidation 1.1023.", zrodlo: 2 },
    gbpusd: { kurs: 1.3107, zmiana: -0.04, tydzien: 0.16, notka: "Szkic spadkowy: cel 1,2965, unieważnienie 1,3144.", notka_en: "Bearish draft: target 1.2965, invalidation 1.3144.", zrodlo: 2 },
    usdjpy: { kurs: 159.28, zmiana: 0.07, tydzien: -0.24, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 41.57, zmiana: 0.42, tydzien: -2.98, notka: "Notowania w Trading Economics są sprzeczne (41,57 i 43,38); podajemy niższe. Szkic wzrostowy: cel 45, unieważnienie 40,77.", notka_en: "Trading Economics quotes conflict (41.57 and 43.38); we show the lower one. Bullish draft: target $45, invalidation $40.77.", zrodlo: 0 },
    usdpln: { kurs: 4.0695, zmiana: 0.0, tydzien: 0.64, notka: "Zamknięcie ze środy (CNBC). Szkic spadkowy: cel 4,0092, unieważnienie 4,0864.", notka_en: "Wednesday's close (CNBC). Bearish draft: target 4.0092, invalidation 4.0864.", zrodlo: 5 },
    wti: { kurs: 84.86, zmiana: 1.41, tydzien: 1.98, notka: "Najbliższy kontrakt. Powyżej poziomu unieważnienia 83,95 szkicu spadkowego; rozliczenie jutro rano.", notka_en: "Front-month contract. Above the bearish draft's 83.95 invalidation level; settlement tomorrow morning.", zrodlo: 3 },
    dax: { kurs: 25220, zmiana: 2.1, tydzien: -0.96, notka: "Trading Economics, zamknięcie. Powyżej poziomu unieważnienia 25 151 szkicu spadkowego; rozliczenie jutro rano.", notka_en: "Trading Economics, close. Above the bearish draft's 25,151 invalidation level; settlement tomorrow morning.", zrodlo: 5 },
    btcusd: { kurs: 60776, zmiana: 0.65, tydzien: -1.84, notka: "Gemini. Szkic spadkowy: cel 57 208, unieważnienie 62 562.", notka_en: "Gemini. Bearish draft: target $57,208, invalidation $62,562.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] },
    { dzien: "Nd 29 lis", wydarzenia: ["Spotkanie OPEC+"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto w dół, srebro (26 lis 2026)", nazwa_en: "Trading Economics: gold lower, silver (26 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: akcje w USA, kontrakty, Azja (26 lis 2026)", nazwa_en: "Trading Economics: US stocks, futures, Asia (26 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar, cła USA (26 lis 2026)", nazwa_en: "Trading Economics: the dollar, US tariffs (26 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: ropa czwartą sesję w górę, OPEC+ (26 lis 2026)", nazwa_en: "Trading Economics: crude up for a fourth session, OPEC+ (26 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: inflacja bazowa PCE w USA (październik 2026)", nazwa_en: "Trading Economics: US core PCE inflation (October 2026)", url: "https://tradingeconomics.com/united-states/core-pce-price-index-annual-change" },
    { nazwa: "Trading Economics: DAX zamyka się około 2% wyżej (26 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: DAX closes about 2% higher (26 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (24 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (24 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
