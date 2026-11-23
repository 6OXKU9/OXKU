// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-23T13:55:00+01:00",
  stanNa_en: "Monday, 23 Nov 2026 (before the US session)",
  stanNa: "poniedziałek, 23 lis 2026 (przed sesją w USA)",
  naglowek_en: "Markets rebound after a week of selling: Nasdaq 100 futures rise about 3%, S&P 500 futures 2–2.5%. The DAX +0.8% near 25,000 after better-than-expected German PMIs. Gold $3,618 (+2.3%), WTI crude −1.4% to 82.2.",
  naglowek: "Rynki odbijają po tygodniu wyprzedaży: kontrakty na Nasdaq 100 rosną o około 3%, na S&P 500 o 2–2,5%. DAX +0,8% przy 25 000 po lepszych od oczekiwań PMI z Niemiec. Złoto 3 618 USD (+2,3%), ropa WTI −1,4% do 82,2.",
  punkty: [
    "W zeszłym tygodniu S&P 500 stracił 8,6%, Nasdaq Composite 10%. Przed otwarciem kontrakty odbijają: według Trading Economics Nasdaq 100 o 3–3,5%, S&P 500 o 1,9–2,5%, Dow o 1,3%. VIX spada do 31,5. O 15:45 wstępne PMI z USA.",
    "Rynek wycenia około 93% szans na podwyżkę Fed o 25 pb w grudniu. Indeks dolara przy 103,9: EUR/USD 1,0959, GBP/USD 1,3096, USD/JPY 159,1.",
    "DAX zyskuje około 0,8% do 24 990 i zbliża się do 25 000. Wstępne PMI z Niemiec okazały się lepsze od oczekiwań (Trading Economics nie podaje jeszcze liczb); Infineon +4,1%, Siemens Energy +3,8%. W Wielkiej Brytanii PMI przemysłu 52,7, usług 52,0 (oczekiwano 51,8).",
    "Złoto 3 618 USD (+2,3%), srebro 42,30 (+2,7%). Ropa WTI traci 1,4% do 82,2 USD, Brent 91,1; MAE przewiduje nadwyżkę podaży około 2 mln baryłek dziennie. Bitcoin około 61 400 USD.",
    "Żaden poziom nowych szkiców nie został jeszcze przebity. W środę PCE, PKB i wnioski o zasiłek (14:30), w czwartek Święto Dziękczynienia."
  ],
  punkty_en: [
    "Last week the S&P 500 lost 8.6% and the Nasdaq Composite 10%. Before the open futures rebound: according to Trading Economics the Nasdaq 100 by 3–3.5%, the S&P 500 by 1.9–2.5%, the Dow by 1.3%. The VIX falls to 31.5. US flash PMIs at 15:45.",
    "Markets price about a 93% chance of a 25 bp Fed hike in December. The dollar index near 103.9: EUR/USD 1.0959, GBP/USD 1.3096, USD/JPY 159.1.",
    "The DAX gains about 0.8% to 24,990 and nears 25,000. German flash PMIs beat expectations (Trading Economics gives no figures yet); Infineon +4.1%, Siemens Energy +3.8%. In the UK manufacturing PMI 52.7, services 52.0 (51.8 expected).",
    "Gold $3,618 (+2.3%), silver 42.30 (+2.7%). WTI crude loses 1.4% to $82.2, Brent 91.1; the IEA expects a supply surplus of about 2 million barrels a day. Bitcoin around $61,400.",
    "No level of the new drafts has been breached yet. On Wednesday PCE, GDP and jobless claims (14:30), on Thursday Thanksgiving."
  ],
  instrumenty: {
    sp500: { kurs: 7077.04, zmiana: 2.41, tydzien: -4.58, notka: "CFD przed sesją (Trading Economics), kontrakty +1,9%. Nowy szkic wzrostowy: cel 7 238, unieważnienie 6 883.", notka_en: "Pre-market CFD (Trading Economics), futures +1.9%. New bullish draft: target 7,238, invalidation 6,883.", zrodlo: 1 },
    nasdaq: { kurs: 25797.97, zmiana: 3.07, tydzien: -5.14, notka: "CFD przed sesją (Trading Economics), kontrakty blisko +3%. Nowy szkic wzrostowy: cel 26 140, unieważnienie 24 911.", notka_en: "Pre-market CFD (Trading Economics), futures almost +3%. New bullish draft: target 26,140, invalidation 24,911.", zrodlo: 1 },
    xauusd: { kurs: 3617.84, zmiana: 2.42, tydzien: -6.16, notka: "Nowy szkic wzrostowy: cel 3 723, unieważnienie 3 500.", notka_en: "New bullish draft: target $3,723, invalidation $3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.0959, zmiana: -0.07, tydzien: -0.34, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3096, zmiana: 0.11, tydzien: -0.65, notka: "Nowy szkic wzrostowy: cel 1,3174, unieważnienie 1,3072.", notka_en: "New bullish draft: target 1.3174, invalidation 1.3072.", zrodlo: 4 },
    usdjpy: { kurs: 159.1, zmiana: 0.36, tydzien: -0.19, notka: "Nowy szkic neutralny: zakres 157,21–160.", notka_en: "New neutral draft: range 157.21–160.", zrodlo: 2 },
    xagusd: { kurs: 42.3, zmiana: 2.69, tydzien: -9.89, notka: "Nowy szkic wzrostowy: cel 45, unieważnienie 40,77.", notka_en: "New bullish draft: target $45, invalidation $40.77.", zrodlo: 0 },
    usdpln: { kurs: 4.0608, zmiana: 0.0, tydzien: 1.51, notka: "Zamknięcie z piątku (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Friday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 5 },
    wti: { kurs: 82.22, zmiana: -2.1, tydzien: -4.08, notka: "Najbliższy kontrakt. Nowy szkic spadkowy: cel 81,55, unieważnienie 84,35.", notka_en: "Front-month contract. New bearish draft: target $81.55, invalidation $84.35.", zrodlo: 3 },
    dax: { kurs: 24990.8, zmiana: 0.76, tydzien: -6.04, notka: "Trading Economics, przed otwarciem. Nowy szkic spadkowy: cel 24 500, unieważnienie 25 195.", notka_en: "Trading Economics, before the open. New bearish draft: target 24,500, invalidation 25,195.", zrodlo: 5 },
    btcusd: { kurs: 61396.5, zmiana: 1.39, tydzien: -6.0, notka: "Gemini. Nowy szkic wzrostowy: cel 62 500, unieważnienie 58 636.", notka_en: "Gemini. New bullish draft: target $62,500, invalidation $58,636.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Pon 23 lis", wydarzenia: ["USA: wstępne PMI (15:45)"] },
    { dzien: "Wt 24 lis", wydarzenia: ["Niemcy: Ifo (10:00)", "USA: zaufanie konsumentów (16:00)", "Dell: wyniki po sesji"] },
    { dzien: "Śr 25 lis", wydarzenia: ["USA: PCE, PKB, dobra trwałe, wnioski o zasiłek (14:30)", "Beżowa Księga Fed (20:00)"] },
    { dzien: "Czw 26 lis", wydarzenia: ["USA: Święto Dziękczynienia, giełdy zamknięte", "Protokół EBC (13:30)"] },
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto odbija (23 lis 2026)", nazwa_en: "Trading Economics: gold rebounds (23 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Stocks Set to Rebound (23 lis 2026)", nazwa_en: "Trading Economics: US Stocks Set to Rebound (23 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar cofa się z 19-miesięcznego szczytu (23 lis 2026)", nazwa_en: "Trading Economics: the dollar retreats from a 19-month high (23 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: ropa po trzech tygodniach spadków (22–23 lis 2026)", nazwa_en: "Trading Economics: crude after three weekly declines (22–23 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: wstępne PMI Wielkiej Brytanii (23 lis 2026)", nazwa_en: "Trading Economics: UK flash PMIs (23 Nov 2026)", url: "https://tradingeconomics.com/united-kingdom/services-pmi" },
    { nazwa: "Trading Economics: DAX Starts Week Higher (23 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: DAX Starts Week Higher (23 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (23 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (23 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
