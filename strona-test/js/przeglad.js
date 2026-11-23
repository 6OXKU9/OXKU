// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-23T22:35:00+01:00",
  stanNa_en: "Monday, 23 Nov 2026 (evening)",
  stanNa: "poniedziałek, 23 lis 2026 (wieczór)",
  naglowek_en: "A huge rebound after a week of selling: Nasdaq 100 +6.9%, S&P 500 +4.7%, Nvidia +31.5% after Jensen Huang was reinstated as CEO. The DAX closed 2.15% higher, gold +2.9%, WTI crude −3.8% to 80.2.",
  naglowek: "Wielkie odbicie po tygodniu wyprzedaży: Nasdaq 100 +6,9%, S&P 500 +4,7%, Nvidia +31,5% po przywróceniu Jensena Huanga na stanowisko prezesa. DAX zamknął się 2,15% wyżej, złoto +2,9%, ropa WTI −3,8% do 80,2.",
  punkty: [
    "Według Trading Economics S&P 500 zyskał około 4,7%, Nasdaq 100 6,9%, Dow 3,1%. Zarząd Nvidii przywrócił Jensena Huanga na stanowisko prezesa, a akcje spółki wzrosły o 31,5%. Micron +19%, Marvell +18,4%; CrowdStrike −8,9% po ogłoszeniu przejęcia Zscalera. VIX spadł do 26,6.",
    "Wstępne PMI z USA słabsze: przemysł 54,5 (poprzednio 54,9), usługi 54,7 przy oczekiwanych 55,6. Rynek nadal wycenia ponad 90% szans na podwyżkę Fed o 25 pb w grudniu. Indeks dolara wzrósł o 0,5% do 104,3: EUR/USD 1,0903, GBP/USD 1,3034, USD/JPY 158,95.",
    "DAX zamknął się na 25 337 (+2,15%). PMI z Niemiec mocno powyżej oczekiwań: przemysł 55,0, usługi 54,0, kompozytowy 55,0 (oczekiwano 53,3), najwyżej od marca 2022. Siemens Energy +7,3%, Infineon +6,8%.",
    "Złoto 3 636 USD (+2,9%) odbiło od rocznych minimów, srebro 43,10 (+4,6%). Ropa WTI spadła o 3,8% do 80,2 USD, najniżej od trzech miesięcy, po wznowieniu pracy rurociągu Sharara w Libii; Brent 89,3. Bitcoin około 61 200 USD (w ciągu doby do 63 600).",
    "Dzień przyniósł kilka przebić poziomów: S&P 500 i Nasdaq 100 osiągnęły cele szkiców wzrostowych, DAX zamknął się powyżej poziomu unieważnienia szkicu spadkowego, GBP/USD spadł poniżej poziomu unieważnienia, a WTI i EUR/USD dotarły do celów szkiców spadkowych. Rozliczenie jutro rano na podstawie świec dziennych."
  ],
  punkty_en: [
    "According to Trading Economics the S&P 500 gained about 4.7%, the Nasdaq 100 6.9% and the Dow 3.1%. Nvidia's board reinstated Jensen Huang as CEO and the shares rose 31.5%. Micron +19%, Marvell +18.4%; CrowdStrike −8.9% after announcing a deal for Zscaler. The VIX fell to 26.6.",
    "US flash PMIs were softer: manufacturing 54.5 (previously 54.9), services 54.7 against 55.6 expected. Markets still price more than a 90% chance of a 25 bp Fed hike in December. The dollar index rose 0.5% to 104.3: EUR/USD 1.0903, GBP/USD 1.3034, USD/JPY 158.95.",
    "The DAX closed at 25,337 (+2.15%). German PMIs beat expectations strongly: manufacturing 55.0, services 54.0, composite 55.0 (53.3 expected), the highest since March 2022. Siemens Energy +7.3%, Infineon +6.8%.",
    "Gold $3,636 (+2.9%) rebounded from one-year lows, silver 43.10 (+4.6%). WTI crude fell 3.8% to $80.2, a three-month low, after Libya's Sharara pipeline restarted; Brent 89.3. Bitcoin around $61,200 (up to 63,600 within the day).",
    "Several levels were breached today: the S&P 500 and Nasdaq 100 reached the targets of the bullish drafts, the DAX closed above the invalidation level of the bearish draft, GBP/USD fell below its invalidation level, and WTI and EUR/USD reached the targets of the bearish drafts. Settlement tomorrow morning from the daily candles."
  ],
  instrumenty: {
    sp500: { kurs: 7242.71, zmiana: 4.81, tydzien: -2.34, notka: "Trading Economics, koniec sesji. Cel szkicu wzrostowego 7 238 osiągnięty; rozliczenie jutro rano.", notka_en: "Trading Economics, end of session. The bullish draft's 7,238 target was reached; settlement tomorrow morning.", zrodlo: 1 },
    nasdaq: { kurs: 26699.77, zmiana: 6.68, tydzien: -1.83, notka: "Trading Economics, koniec sesji. Cel szkicu wzrostowego 26 140 osiągnięty; rozliczenie jutro rano.", notka_en: "Trading Economics, end of session. The bullish draft's 26,140 target was reached; settlement tomorrow morning.", zrodlo: 1 },
    xauusd: { kurs: 3635.81, zmiana: 2.93, tydzien: -5.69, notka: "Szkic wzrostowy: cel 3 723 jeszcze nieosiągnięty, unieważnienie 3 500.", notka_en: "Bullish draft: 3,723 target not yet reached, invalidation 3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.0903, zmiana: -0.58, tydzien: -0.85, notka: "Kurs poniżej celu 1,0950 szkicu spadkowego; rozliczenie jutro rano.", notka_en: "The rate is below the bearish draft's 1.0950 target; settlement tomorrow morning.", zrodlo: 2 },
    gbpusd: { kurs: 1.3034, zmiana: -0.36, tydzien: -1.12, notka: "Kurs poniżej poziomu unieważnienia 1,3072; rozliczenie jutro rano po zamknięciu dnia.", notka_en: "The rate is below the 1.3072 invalidation level; settlement tomorrow morning after the daily close.", zrodlo: 2 },
    usdjpy: { kurs: 158.95, zmiana: 0.26, tydzien: -0.29, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 43.1, zmiana: 4.63, tydzien: -8.18, notka: "Szkic wzrostowy: cel 45 jeszcze nieosiągnięty, unieważnienie 40,77.", notka_en: "Bullish draft: $45 target not yet reached, invalidation $40.77.", zrodlo: 0 },
    usdpln: { kurs: 4.0608, zmiana: 0.0, tydzien: 1.51, notka: "Zamknięcie z piątku (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Friday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 5 },
    wti: { kurs: 80.2, zmiana: -4.5, tydzien: -6.44, notka: "Najbliższy kontrakt. Cel szkicu spadkowego 81,55 osiągnięty; rozliczenie jutro rano.", notka_en: "Front-month contract. The bearish draft's $81.55 target was reached; settlement tomorrow morning.", zrodlo: 3 },
    dax: { kurs: 25337, zmiana: 2.15, tydzien: -4.74, notka: "Zamknięcie 25 337 powyżej poziomu unieważnienia 25 195 szkicu spadkowego; rozliczenie jutro rano.", notka_en: "Close of 25,337 above the bearish draft's 25,195 invalidation level; settlement tomorrow morning.", zrodlo: 5 },
    btcusd: { kurs: 61237.6, zmiana: 1.13, tydzien: -6.24, notka: "Gemini. W ciągu doby do 63 645, powyżej celu 62 500; rozliczenie jutro rano według świec Coinbase.", notka_en: "Gemini. Up to 63,645 within the day, above the 62,500 target; settlement tomorrow morning from Coinbase candles.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Wt 24 lis", wydarzenia: ["Niemcy: Ifo (10:00)", "USA: zaufanie konsumentów (16:00)", "Dell: wyniki po sesji"] },
    { dzien: "Śr 25 lis", wydarzenia: ["USA: PCE, PKB, dobra trwałe, wnioski o zasiłek (14:30)", "Beżowa Księga Fed (20:00)"] },
    { dzien: "Czw 26 lis", wydarzenia: ["USA: Święto Dziękczynienia, giełdy zamknięte", "Protokół EBC (13:30)"] },
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto odbija od rocznych minimów (23 lis 2026)", nazwa_en: "Trading Economics: gold rebounds from one-year lows (23 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: akcje w USA, Nvidia (23 lis 2026)", nazwa_en: "Trading Economics: US stocks, Nvidia (23 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar i PMI z USA (23 lis 2026)", nazwa_en: "Trading Economics: the dollar and US PMIs (23 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: ropa na trzymiesięcznym minimum (23 lis 2026)", nazwa_en: "Trading Economics: crude at a three-month low (23 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: wstępne PMI USA (23 lis 2026)", nazwa_en: "Trading Economics: US flash PMIs (23 Nov 2026)", url: "https://tradingeconomics.com/united-states/services-pmi" },
    { nazwa: "Trading Economics: DAX zamyka się 2,15% wyżej (23 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: DAX closes 2.15% higher (23 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (23 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (23 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
