// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-24T22:35:00+01:00",
  stanNa_en: "Tuesday, 24 Nov 2026 (evening)",
  stanNa: "wtorek, 24 lis 2026 (wieczór)",
  naglowek_en: "The AI rally reversed: Nasdaq 100 −2%, Nvidia −6%, DAX −1.3% as Infineon fell almost 10%. The dollar weakened 0.5%, gold −2.2%, silver −5%, and WTI crude rebounded to $81.4.",
  naglowek: "Rajd spółek AI się odwrócił: Nasdaq 100 −2%, Nvidia −6%, DAX −1,3% przy spadku Infineona o prawie 10%. Dolar osłabł o 0,5%, złoto −2,2%, srebro −5%, a ropa WTI odbiła do 81,4 USD.",
  punkty: [
    "Według Trading Economics S&P 500 stracił około 0,5% (7 193), Nasdaq 100 około 2% (26 162), a Dow zyskał około 0,8%. Nvidia spadła o około 6% na obawach o ład korporacyjny po przywróceniu Jensena Huanga; Micron −11%, AMD −8,9%, Intel −8,1%, HPE −16% po słabej prognozie. Anthropic poniżej ceny z debiutu.",
    "Indeks dolara spadł o 0,5% do 103,8 z poniedziałkowego szczytu 104,3. EUR/USD 1,0965 (+0,6%), GBP/USD 1,3114 (+0,6%), USD/JPY 159,23. Rynek nadal wycenia 95–97% szans na grudniową podwyżkę Fed; w tle doniesienia o rozważanych wyższych cłach na Chiny i UE.",
    "DAX zamknął się 1,3% niżej, około 25 010. Infineon −9,9%, Siemens Energy −7%, Hochtief −5,6%. Indeks Ifo wzrósł do 90,6 (oczekiwano 90,5), najwyżej od maja 2023; oczekiwania firm 91,9.",
    "Złoto spadło o 2,2% do około 3 555 USD, srebro o ponad 5% do 40,8. Ropa WTI wzrosła o 1,6% do 81,4 USD, Brent 90,8, na napięciach wokół cieśniny Ormuz. Bitcoin około 59 800 USD.",
    "Nasdaq 100 zamknął się poniżej poziomu unieważnienia szkicu wzrostowego (26 386), a srebro jest tuż przy poziomie unieważnienia 40,77; rozliczenie jutro rano według świec dziennych. W środę o 14:30 PCE, PKB, dobra trwałe i wnioski o zasiłek, o 20:00 Beżowa Księga; w nocy CPI Australii (1:30). Odczytu Conference Board i wyników Della nie potwierdziliśmy w źródłach."
  ],
  punkty_en: [
    "According to Trading Economics the S&P 500 lost about 0.5% (7,193) and the Nasdaq 100 about 2% (26,162), while the Dow gained about 0.8%. Nvidia fell about 6% on governance concerns after Jensen Huang's reinstatement; Micron −11%, AMD −8.9%, Intel −8.1%, HPE −16% after a weak forecast. Anthropic is below its IPO price.",
    "The dollar index fell 0.5% to 103.8 from Monday's 104.3 high. EUR/USD 1.0965 (+0.6%), GBP/USD 1.3114 (+0.6%), USD/JPY 159.23. Markets still price a 95–97% chance of a December Fed hike; reports say higher tariffs on China and the EU are being weighed.",
    "The DAX closed 1.3% lower, around 25,010. Infineon −9.9%, Siemens Energy −7%, Hochtief −5.6%. The Ifo index rose to 90.6 (90.5 expected), the highest since May 2023; business expectations 91.9.",
    "Gold fell 2.2% to about $3,555, silver more than 5% to 40.8. WTI crude rose 1.6% to $81.4, Brent 90.8, on tensions around the Strait of Hormuz. Bitcoin around $59,800.",
    "The Nasdaq 100 closed below the bullish draft's invalidation level (26,386), and silver is right at its 40.77 invalidation level; settlement tomorrow morning from the daily candles. On Wednesday at 14:30 PCE, GDP, durable goods and jobless claims, at 20:00 the Beige Book; overnight Australian CPI (1:30). We could not confirm the Conference Board reading or Dell's results in our sources."
  ],
  instrumenty: {
    sp500: { kurs: 7193.12, zmiana: -0.61, tydzien: -2.01, notka: "Trading Economics, koniec sesji. Szkic wzrostowy: cel 7 416, unieważnienie 7 153.", notka_en: "Trading Economics, end of session. Bullish draft: target 7,416, invalidation 7,153.", zrodlo: 1 },
    nasdaq: { kurs: 26161.69, zmiana: -2.19, tydzien: -3.11, notka: "Trading Economics, koniec sesji. Zamknięcie poniżej poziomu unieważnienia 26 386 szkicu wzrostowego; rozliczenie jutro rano.", notka_en: "Trading Economics, end of session. Close below the bullish draft's 26,386 invalidation level; settlement tomorrow morning.", zrodlo: 1 },
    xauusd: { kurs: 3555.04, zmiana: -2.17, tydzien: -7.63, notka: "Szkic wzrostowy: cel 3 723, unieważnienie 3 500.", notka_en: "Bullish draft: target 3,723, invalidation 3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.0965, zmiana: 0.59, tydzien: -0.29, notka: "Szkic spadkowy: cel 1,0762, unieważnienie 1,1023.", notka_en: "Bearish draft: target 1.0762, invalidation 1.1023.", zrodlo: 2 },
    gbpusd: { kurs: 1.3114, zmiana: 0.64, tydzien: -0.71, notka: "Szkic spadkowy: cel 1,2965, unieważnienie 1,3144.", notka_en: "Bearish draft: target 1.2965, invalidation 1.3144.", zrodlo: 2 },
    usdjpy: { kurs: 159.23, zmiana: 0.14, tydzien: -0.08, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 40.8, zmiana: -5.39, tydzien: -13.81, notka: "Cena tuż przy poziomie unieważnienia 40,77 szkicu wzrostowego; rozliczenie jutro rano według zamknięcia.", notka_en: "The price is right at the bullish draft's 40.77 invalidation level; settlement tomorrow morning from the close.", zrodlo: 0 },
    usdpln: { kurs: 4.075, zmiana: 0.0, tydzien: 1.92, notka: "Zamknięcie z poniedziałku (CNBC), brak świeższego notowania. Szkic spadkowy: cel 4,0092, unieważnienie 4,0864.", notka_en: "Monday's close (CNBC), no fresher quote. Bearish draft: target 4.0092, invalidation 4.0864.", zrodlo: 5 },
    wti: { kurs: 81.44, zmiana: 1.58, tydzien: -5.31, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 77,78, unieważnienie 83,95.", notka_en: "Front-month contract. Bearish draft: target $77.78, invalidation $83.95.", zrodlo: 3 },
    dax: { kurs: 25012, zmiana: -1.28, tydzien: -3.97, notka: "Trading Economics, zamknięcie. Szkic wzrostowy: cel 25 946, unieważnienie 24 873.", notka_en: "Trading Economics, close. Bullish draft: target 25,946, invalidation 24,873.", zrodlo: 5 },
    btcusd: { kurs: 59825, zmiana: -2.23, tydzien: -7.78, notka: "Gemini. Szkic spadkowy: cel 57 655, unieważnienie 64 534.", notka_en: "Gemini. Bearish draft: target $57,655, invalidation $64,534.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Śr 25 lis", wydarzenia: ["Australia: CPI (1:30)", "USA: PCE, PKB, dobra trwałe, wnioski o zasiłek (14:30)", "Beżowa Księga Fed (20:00)"] },
    { dzien: "Czw 26 lis", wydarzenia: ["USA: Święto Dziękczynienia, giełdy zamknięte", "Protokół EBC (13:30)"] },
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto i srebro w dół (24 lis 2026)", nazwa_en: "Trading Economics: gold and silver lower (24 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Stock Indices Close Mostly Lower (24 lis 2026)", nazwa_en: "Trading Economics: US Stock Indices Close Mostly Lower (24 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar słabnie do 103,8 (24 lis 2026)", nazwa_en: "Trading Economics: the dollar weakens to 103.8 (24 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: Oil Rises Near $81.5 on US-Iran Tensions (24 lis 2026)", nazwa_en: "Trading Economics: Oil Rises Near $81.5 on US-Iran Tensions (24 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "FOREX.com: Euro Short-term Outlook: EUR/USD Plunges to 19-Month Low (18 lis 2026)", nazwa_en: "FOREX.com: Euro Short-term Outlook: EUR/USD Plunges to 19-Month Low (18 Nov 2026)", url: "https://www.forex.com/en/news-and-analysis/euro-short-term-outlook-eur-usd-plunges-to-19-month-low-bears-face-critical-test-11-18-2026/?amp=true" },
    { nazwa: "Trading Economics: The DAX Index Closes 1.29% Lower; Ifo (24 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: The DAX Index Closes 1.29% Lower; Ifo (24 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (24 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (24 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
