// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-25T22:35:00+01:00",
  stanNa_en: "Wednesday, 25 Nov 2026 (evening)",
  stanNa: "środa, 25 lis 2026 (wieczór)",
  naglowek_en: "Wall Street recovered most of its losses: Nasdaq 100 −0.6% after falling more than 4% intraday, S&P 500 −0.2%. Core PCE inflation rose to 3.3%, and Q3 GDP was revised up to 4.3%. The DAX −1.2% to 24,710, WTI crude +2.6% to $84.1.",
  naglowek: "Wall Street odrobiła większość strat: Nasdaq 100 −0,6% po spadku o ponad 4% w ciągu dnia, S&P 500 −0,2%. Inflacja bazowa PCE wzrosła do 3,3%, a PKB za III kwartał podniesiono do 4,3%. DAX −1,2% do 24 710, ropa WTI +2,6% do 84,1 USD.",
  punkty: [
    "Według Trading Economics S&P 500 stracił około 0,2% (7 182), Nasdaq 100 0,6% (26 025), a Dow zyskał 0,5%. W ciągu dnia Nasdaq 100 spadał o ponad 4%, blisko granicy rynku niedźwiedzia. Nvidia −3,9%. USA zaproponowały nowe cła na kilkunastu partnerów, w tym Chiny, UE, Japonię i Indie.",
    "Inflacja bazowa PCE wzrosła w październiku do 3,3% r/r (oczekiwano 3,2%), najwyżej od 2023 roku; m/m 0,3%. PKB za III kwartał podniesiono do 4,3% (oczekiwano 3,5%). Zamówienia na dobra trwałe +0,2% (oczekiwano 0,6%). Danych o wnioskach o zasiłek nie potwierdziliśmy w źródle.",
    "Indeks dolara oddał poranny wzrost i spadł do 103,7 (−0,1%). EUR/USD 1,0975, GBP/USD 1,3118, USD/JPY 159,21. Grudniowa podwyżka Fed jest niemal pewna, styczniowa ma około 60% szans.",
    "DAX zamknął się 1,2% niżej, około 24 710, blisko pięciomiesięcznego minimum; Infineon −6,6%. Złoto około 3 570 USD (+0,4%) po spadku w ciągu dnia poniżej 3 500, srebro 41,13. Ropa WTI +2,6% do 84,1 USD, Brent 94,7, po atakach dronów na rafinerię Ras Tanura i incydentach w cieśninie Ormuz. Bitcoin około 60 250 USD po spadku do 57 220.",
    "Kilka poziomów zostało przebitych: DAX zamknął się poniżej unieważnienia 24 873 szkicu wzrostowego, ropa WTI powyżej unieważnienia 83,95 szkicu spadkowego, a bitcoin dotknął celu 57 655. Rozliczenie jutro rano według świec dziennych. W czwartek giełdy w USA są zamknięte (Święto Dziękczynienia), o 13:30 protokół EBC; w piątek o 0:30 CPI z Tokio."
  ],
  punkty_en: [
    "According to Trading Economics the S&P 500 lost about 0.2% (7,182) and the Nasdaq 100 0.6% (26,025), while the Dow gained 0.5%. Intraday the Nasdaq 100 fell more than 4%, close to bear-market territory. Nvidia −3.9%. The US proposed new tariffs on more than a dozen partners, including China, the EU, Japan and India.",
    "Core PCE inflation rose to 3.3% y/y in October (3.2% expected), the highest since 2023; 0.3% m/m. Q3 GDP was revised up to 4.3% (3.5% expected). Durable goods orders +0.2% (0.6% expected). We could not confirm the jobless claims data in our source.",
    "The dollar index gave back its morning gain and fell to 103.7 (−0.1%). EUR/USD 1.0975, GBP/USD 1.3118, USD/JPY 159.21. A December Fed hike is nearly certain, and January has about a 60% chance.",
    "The DAX closed 1.2% lower, around 24,710, near a five-month low; Infineon −6.6%. Gold around $3,570 (+0.4%) after dipping below 3,500 intraday, silver 41.13. WTI crude +2.6% to $84.1, Brent 94.7, after drone attacks on the Ras Tanura refinery and incidents in the Strait of Hormuz. Bitcoin around $60,250 after a drop to 57,220.",
    "Several levels were breached: the DAX closed below the bullish draft's 24,873 invalidation, WTI crude above the bearish draft's 83.95 invalidation, and bitcoin touched the 57,655 target. Settlement tomorrow morning from the daily candles. On Thursday US markets are closed (Thanksgiving), ECB minutes at 13:30; on Friday Tokyo CPI at 0:30."
  ],
  instrumenty: {
    sp500: { kurs: 7182.42, zmiana: -0.26, tydzien: -1.93, notka: "Trading Economics, koniec sesji. Szkic wzrostowy: cel 7 416, unieważnienie 7 153.", notka_en: "Trading Economics, end of session. Bullish draft: target 7,416, invalidation 7,153.", zrodlo: 1 },
    nasdaq: { kurs: 26025.26, zmiana: -0.72, tydzien: -4.02, notka: "Trading Economics, koniec sesji. Szkic spadkowy: cel 24 911, unieważnienie 27 019.", notka_en: "Trading Economics, end of session. Bearish draft: target 24,911, invalidation 27,019.", zrodlo: 1 },
    xauusd: { kurs: 3569.82, zmiana: 0.4, tydzien: -4.13, notka: "W ciągu dnia poniżej 3 500, zamknięcie wyżej. Szkic wzrostowy: cel 3 723, unieważnienie przy zamknięciu poniżej 3 500.", notka_en: "Below 3,500 intraday, closing higher. Bullish draft: target 3,723, invalidation on a close below 3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.0975, zmiana: 0.1, tydzien: 0.02, notka: "Szkic spadkowy: cel 1,0762, unieważnienie 1,1023.", notka_en: "Bearish draft: target 1.0762, invalidation 1.1023.", zrodlo: 2 },
    gbpusd: { kurs: 1.3118, zmiana: 0.04, tydzien: -0.22, notka: "Szkic spadkowy: cel 1,2965, unieważnienie 1,3144.", notka_en: "Bearish draft: target 1.2965, invalidation 1.3144.", zrodlo: 2 },
    usdjpy: { kurs: 159.21, zmiana: -0.03, tydzien: -0.08, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 41.13, zmiana: 0.54, tydzien: -8.66, notka: "Szkic wzrostowy: cel 45, unieważnienie 40,77.", notka_en: "Bullish draft: target $45, invalidation $40.77.", zrodlo: 0 },
    usdpln: { kurs: 4.0625, zmiana: 0.0, tydzien: 1.15, notka: "Wtorkowe zamknięcie (CNBC). Szkic spadkowy: cel 4,0092, unieważnienie 4,0864.", notka_en: "Tuesday's close (CNBC). Bearish draft: target 4.0092, invalidation 4.0864.", zrodlo: 5 },
    wti: { kurs: 84.1, zmiana: 2.5, tydzien: 1.01, notka: "Najbliższy kontrakt. Powyżej poziomu unieważnienia 83,95 szkicu spadkowego; rozliczenie jutro rano.", notka_en: "Front-month contract. Above the bearish draft's 83.95 invalidation level; settlement tomorrow morning.", zrodlo: 3 },
    dax: { kurs: 24710, zmiana: -1.23, tydzien: -3.99, notka: "Trading Economics, zamknięcie. Poniżej poziomu unieważnienia 24 873 szkicu wzrostowego; rozliczenie jutro rano.", notka_en: "Trading Economics, close. Below the bullish draft's 24,873 invalidation level; settlement tomorrow morning.", zrodlo: 5 },
    btcusd: { kurs: 60247.1, zmiana: 0.85, tydzien: -4.34, notka: "Gemini. W ciągu doby do 57 220, poniżej celu 57 655; rozliczenie jutro rano według świec Coinbase.", notka_en: "Gemini. Down to 57,220 within the day, below the 57,655 target; settlement tomorrow morning from Coinbase candles.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Czw 26 lis", wydarzenia: ["USA: Święto Dziękczynienia, giełdy zamknięte", "Protokół EBC (13:30)"] },
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto i srebro (25 lis 2026)", nazwa_en: "Trading Economics: gold and silver (25 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: Wall Street ogranicza straty (25 lis 2026)", nazwa_en: "Trading Economics: Wall Street pares losses (25 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar po danych o PCE (25 lis 2026)", nazwa_en: "Trading Economics: the dollar after PCE data (25 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: ropa rośnie drugą sesję (25 lis 2026)", nazwa_en: "Trading Economics: crude rises for a second session (25 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: inflacja bazowa PCE w USA (październik 2026)", nazwa_en: "Trading Economics: US core PCE inflation (October 2026)", url: "https://tradingeconomics.com/united-states/core-pce-price-index-annual-change" },
    { nazwa: "Trading Economics: DAX zamyka się 1,2% niżej (25 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: DAX closes 1.2% lower (25 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (24 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (24 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
