// KALENDARZ EKONOMICZNY. Plik aktualizowany przez AI (Claude) razem z przeglądem rynku.
//
// Pola wydarzenia:
//   czas        data i godzina publikacji z przesunięciem strefy, np. "2026-10-20T14:30:00+02:00"
//               (czas letni w Polsce do 25 paź 2026: +02:00, potem +01:00)
//   kraj        US, EZ (strefa euro), DE, FR, UK, PL, CN, CA, JP, CH, AU, NZ
//   nazwa       nazwa wydarzenia po polsku (nazwa_en, opis_en, uwaga_en: wersja angielska)
//   wplyw       1 = słaby, 2 = średni, 3 = duży, 4 = bardzo duży (ocena AI)
//   instrumenty id z instrumenty.js, na które wydarzenie wpływa najmocniej
//   poprzednio, prognoza, aktualnie   wartości jako tekst albo null, gdy brak danych
//   opis        jedno zdanie: dlaczego to ważne
//   zrodlo      numer źródła z listy `zrodla` (od 0)
window.KALENDARZ = {
  aktualizacja: "2026-10-30T07:50:00+01:00",
  zrodla: [
    { nazwa: "Investrade: Weekly Event Calendar 19–23 paź 2026 (godziny ET)", url: "https://investrade.com/weekly-event-calendar-10-19-2026-10-23-2026/" },
    { nazwa: "Yelza: Economic Calendar 19–23 paź 2026", url: "https://yelza.com/research/economic-calendar-october-19-23-2026" },
    { nazwa: "Thrive in Markets: kalendarz tygodnia 19–23 paź 2026", url: "https://thriveinmarkets.com/calendar/2026-10-19/" },
    { nazwa: "Thrive in Markets: Evening review 2026-10-16 (termin FOMC)", url: "https://thriveinmarkets.com/market-insights/evening-review-2026-10-16/" },
    { nazwa: "FXStreet: EUR/USD weekly forecast (termin i oczekiwania EBC)", url: "https://www.fxstreet.com/analysis/eur-usd-weekly-forecast-us-dollar-future-in-the-hands-of-kevin-warsh-202610161526" },
    { nazwa: "RoboForex: USD/JPY forecast 15 paź 2026 (posiedzenie BoJ)", url: "https://roboforex.com/beginners/analytics/forex-forecast/currencies/usd-jpy-forecast-2026-10-15/" },
    { nazwa: "Yahoo Finance: US dollar price forecast (ankieta Reutersa ws. BoE)", nazwa_en: "Yahoo Finance: US dollar price forecast (Reuters poll on the BoE)", url: "https://finance.yahoo.com/markets/currencies/articles/us-dollar-price-forecast-warsh-082128574.html" },
    { nazwa: "investingLive: Asia-Pacific market news (odczyty z Chin, 19 paź 2026)", nazwa_en: "investingLive: Asia-Pacific market news (China data, 19 Oct 2026)", url: "https://investinglive.com/news/investinglive-asia-pacific-market-news-china-beats-the-euro-wobbles-and-oil-dips/" },
    { nazwa: "Continuum Economics: Preview Canada September CPI", url: "https://continuumeconomics.com/a/15f22afc/preview-due-october-19-canada-september-cpi-steady-with-slightly-slower-boc-core-rates" },
    { nazwa: "Aktiencheck: Tagesvorschau 19. Oktober 2026", url: "https://www.aktiencheck.de/news/Artikel-TAGESVORSCHAU_Termine_am_19_Oktober_2026-20179501" },
    { nazwa: "Statistics Canada: Consumer Price Index, September 2026", url: "https://www150.statcan.gc.ca/n1/daily-quotidien/261019/dq261019a-eng.htm" },
    { nazwa: "Admiral Markets: UK Employment Change preview (paź 2026)", nazwa_en: "Admiral Markets: UK Employment Change preview (Oct 2026)", url: "https://admiralmarkets.com/analytics/traders-blog/uk-employment-change-3m-preview-october-2026" },
    { nazwa: "Newsquawk: Daily Asia-Pac Opening News (20 paź 2026)", nazwa_en: "Newsquawk: Daily Asia-Pac Opening News (20 Oct 2026)", url: "https://www.newsquawk.com/headlines/newsquawk-daily-asia-pac-opening-news---20th-october-2026" },
    { nazwa: "investingLive: Asia-Pacific market news, China holds rates (20 paź 2026)", nazwa_en: "investingLive: Asia-Pacific market news, China holds rates (20 Oct 2026)", url: "https://investinglive.com/news/investinglive-asia-pacific-market-news-china-holds-rates/" },
    { nazwa: "Financial News: UK unemployment edges down to 4.7% (ONS)", url: "https://www.financial-news.co.uk/uk-unemployment-edges-down-to-4-7-as-pay-growth-holds-at-3-7-ons-says/" },
    { nazwa: "Newsquawk: German ZEW Economic Sentiment (Oct) 28.1 vs. exp. 30", url: "https://www.newsquawk.com/headlines/german-zew-economic-sentiment-index-oct-281-vs-exp-30-prev-347" },
    { nazwa: "FX Tribune: US housing starts fall to 1,221K in September 2026", url: "https://fxtribune.com/news/us-housing-starts-fall-to-1-221k-in-september-2026/" },
    { nazwa: "investingLive: UK inflation set to climb (zapowiedź CPI)", nazwa_en: "investingLive: UK inflation set to climb (CPI preview)", url: "https://investinglive.com/news/economic-data-spotlight-uk-inflation-set-to-climb-as-boe-rate-hike-and-autumn-budget-collide/" },
    { nazwa: "ad-hoc-news / Dow Jones: DAX schließt nach ZEW-Dämpfer (termin wyników SAP)", nazwa_en: "ad-hoc-news / Dow Jones: DAX closes after ZEW setback (SAP earnings time)", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-nach-zew-daempfer-0-1-prozent-tiefer/70376081" },
    { nazwa: "CappNotes: Closing Look, wtorek 20 paź 2026", nazwa_en: "CappNotes: Closing Look, Tuesday 20 Oct 2026", url: "https://cappnotes.substack.com/p/closing-look-tuesday-october-20-2026" },
    { nazwa: "FXStreet: UK CPI inflation climbs to 3.5% YoY in September", url: "https://www.fxstreet.com/news/uk-cpi-set-to-accelerate-paving-the-way-for-a-boe-interest-rate-hike-in-november-202610210200" },
    { nazwa: "Trading Economics: ropa WTI (zapasy EIA), 21 paź 2026", nazwa_en: "Trading Economics: WTI crude (EIA inventories), 21 Oct 2026", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Teslarati: Tesla Q3 2026 earnings results", url: "https://www.teslarati.com/tesla-tsla-q3-2026-earnings-results/" },
    { nazwa: "Stock Titan: SAP Quarterly Statement Q3 2026", url: "https://www.stocktitan.net/news/SAP/sap-quarterly-statement-q3-lfpmuutnzhal.html" },
    { nazwa: "Yahoo Finance: Stock market today, 22 paź 2026 (wnioski o zasiłek)", nazwa_en: "Yahoo Finance: Stock market today, 22 Oct 2026 (jobless claims)", url: "https://finance.yahoo.com/markets/article/stock-market-today-thursday-october-22-dow-sp-500-nasdaq-tesla-meta-112217857.html" },
    { nazwa: "investingLive: Asia-Pacific market news, Asian stocks slide as chip rout spreads (23 paź 2026)", nazwa_en: "investingLive: Asia-Pacific market news, Asian stocks slide as chip rout spreads (23 Oct 2026)", url: "https://investinglive.com/news/investinglive-asia-pacific-market-news-asian-stocks-slide-as-chip-rout-spreads/" },
    { nazwa: "Newsquawk: French S&P Global Composite PMI Flash (Oct) 48.4 vs. Exp. 50.5", url: "https://www.newsquawk.com/headlines/french-sp-global-composite-pmi-flash-oct-484-vs-exp-505-prev-511" },
    { nazwa: "investingLive: Germany October flash manufacturing PMI 54.2 vs 53.5 expected", url: "https://investinglive.com/news/germany-october-flash-manufacturing-pmi-54-2-vs-53-5-expected/" },
    { nazwa: "FXStreet: Eurozone HCOB Composite PMI declines to 51.9 in October", url: "https://www.fxstreet.com/news/eurozone-hcob-composite-pmi-declines-to-519-in-october-vs-527-expected-202610230806" },
    { nazwa: "investingLive: UK October flash services PMI 53.1 vs 51.8 expected", url: "https://investinglive.com/news/uk-october-flash-services-pmi-53-1-vs-51-8-expected/" },
    { nazwa: "investingLive: US S&P Global flash October services PMI 57.9 vs 58.0 expected", url: "https://investinglive.com/news/us-s-p-global-flash-october-services-pmi-57-9-vs-58-0-expected/" },
    { nazwa: "Trading Economics: US Consumer Sentiment Falls to Five-Month Low (23 paź 2026)", url: "https://tradingeconomics.com/united-states/consumer-confidence/news/590907" },
    { nazwa: "Investrade: Weekly Event Calendar 26–30 paź 2026 (godziny ET)", url: "https://investrade.com/weekly-event-calendar-10-26-2026-10-30-2026/" },
    { nazwa: "LiteFinance: kalendarz ekonomiczny 26 paź – 1 lis 2026 (godziny GMT)", url: "https://www.litefinance.org/blog/analysts-opinions/weekly-economic-calendar-for-26102026-01112026/" },
    { nazwa: "ad-hoc-news / Dow Jones: DAX schließt dank Bayer am Montag 0,9 Prozent höher (26 paź 2026)", nazwa_en: "ad-hoc-news / Dow Jones: DAX closes 0.9% higher on Bayer (26 Oct 2026)", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-dank-bayer-am-montag-0-9-prozent-hoeher/70416342" },
    { nazwa: "Investrade: Market Review, 27 paź 2026", nazwa_en: "Investrade: Market Review, 27 Oct 2026", url: "https://investrade.com/market-review-october-27-2026/" },
    { nazwa: "investingLive: Australia trimmed mean CPI rises to 3.7% (28 paź 2026)", nazwa_en: "investingLive: Australia trimmed mean CPI rises to 3.7% (28 Oct 2026)", url: "https://investinglive.com/news/australia-trimmed-mean-cpi-rises-to-3-7-above-forecasts-as-rba-hike-case-firms/" },
    { nazwa: "investingLive: Asia-Pacific market news, Hawkish RBA, surprise RBNZ hold (28 paź 2026)", nazwa_en: "investingLive: Asia-Pacific market news, Hawkish RBA, surprise RBNZ hold (28 Oct 2026)", url: "https://www.louisvelazquez.com/investinglive-asia-pacific-market-news-hawkish-rba-surprise-rbnz-hold-lift-aud-nzd/" },
    { nazwa: "investingLive: FOMC decision Oct 28, rates left unchanged", url: "https://investinglive.com/central-banks/fomc-decision-oct-28/" },
    { nazwa: "TradingKey: Alphabet Q3 2026 earnings (28 paź 2026)", nazwa_en: "TradingKey: Alphabet Q3 2026 earnings (28 Oct 2026)", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262248965-google-earnings-report-q3-services-cloud-search-capital-expenditures-cash-tradingkey" },
    { nazwa: "TipRanks: Microsoft results top Wall Street estimates (28 paź 2026)", nazwa_en: "TipRanks: Microsoft results top Wall Street estimates (28 Oct 2026)", url: "https://www.tipranks.com/news/microsoft-stock-msft-rises-as-financial-results-top-wall-street-estimates" },
    { nazwa: "Investing.com: U.S. GDP grows 3.4% in the third quarter (29 paź 2026)", nazwa_en: "Investing.com: U.S. GDP grows 3.4% in the third quarter (29 Oct 2026)", url: "https://www.investing.com/news/economic-indicators/us-inflation-accelerates-in-september-thirdquarter-gdp-rises-34-4983644" },
    { nazwa: "XTB: ECB holds rates unchanged (29 paź 2026)", nazwa_en: "XTB: ECB holds rates unchanged (29 Oct 2026)", url: "https://www.xtb.com/cy/market-analysis/news-and-research/ecb-holds-rates-unchanged-eurusd-down" },
    { nazwa: "The Motley Fool: AWS jumps 39% as Amazon's cash flow sinks (29 paź 2026)", nazwa_en: "The Motley Fool: AWS jumps 39% as Amazon's cash flow sinks (29 Oct 2026)", url: "https://www.fool.com/investing/2026/10/29/aws-jumps-39-as-amazons-cash-flow-sinks-rapid-earn/" },
    { nazwa: "Trading Economics: jen japoński, BoJ utrzymuje stopy (30 paź 2026)", nazwa_en: "Trading Economics: Japanese yen, BoJ keeps rates unchanged (30 Oct 2026)", url: "https://tradingeconomics.com/japan/currency" }
  ],
  uwaga: "Daty i godziny pochodzą ze źródeł. Godziny publikacji z Chin (w tym LPR), Wielkiej Brytanii, Niemiec i Kanady oraz godziny decyzji EBC i BoE podano według stałych harmonogramów tych instytucji, bo źródła ich nie wymieniały. Godzina decyzji BoJ jest przybliżona. Prognozy i poprzednie odczyty uzupełniamy, gdy pojawią się w źródłach.",
  uwaga_en: "Dates and times are taken from the sources. Release times for China (including the LPR), the UK, Germany and Canada, and the ECB and BoE decision times, follow those institutions' fixed schedules, as the sources did not list them. The BoJ decision time is approximate. Forecasts and previous readings are added once they appear in the sources.",
  wydarzenia: [



    { czas: "2026-10-29T13:30:00+01:00", kraj: "US", nazwa: "PKB za III kwartał (wstępny) i inflacja PCE (wrz)", wplyw: 4, instrumenty: ["eurusd", "gbpusd", "usdjpy", "xauusd", "nasdaq", "sp500", "usdpln"], opis: "Dzień po decyzji Fed: wzrost gospodarczy i miara inflacji preferowana przez Fed.", nazwa_en: "Q3 GDP (advance) and PCE inflation (Sep)", opis_en: "The day after the Fed: growth and the Fed's preferred inflation gauge.", aktualnie: "PKB +3,4% (prognoza 3,2%); PCE 3,6% r/r, bazowa 3,1% r/r", aktualnie_en: "GDP +3.4% (forecast 3.2%); PCE 3.6% y/y, core 3.1% y/y", zrodlo: 41 },
    { czas: "2026-10-29T14:15:00+01:00", kraj: "EZ", nazwa: "EBC: decyzja w sprawie stóp procentowych", wplyw: 4, instrumenty: ["eurusd", "dax", "xauusd", "usdpln"], opis: "Rynek spodziewa się utrzymania stopy depozytowej 2,50% i sygnałów przed możliwą podwyżką w grudniu.", nazwa_en: "ECB rate decision", opis_en: "Markets expect the deposit rate to stay at 2.50%, with signals ahead of a possible December hike.", aktualnie: "stopa depozytowa 2,50% bez zmian (refinansowa 2,65%)", aktualnie_en: "deposit rate unchanged at 2.50% (refi 2.65%)", zrodlo: 42 },
    { czas: "2026-10-29T14:45:00+01:00", kraj: "EZ", nazwa: "Konferencja prezes EBC", wplyw: 4, instrumenty: ["eurusd", "dax"], opis: "Wskazówki co do kolejnych ruchów stóp w strefie euro.", nazwa_en: "ECB President press conference", opis_en: "Guidance on the next rate moves in the euro area.", zrodlo: 4 },
    { czas: "2026-10-29T21:05:00+01:00", kraj: "US", nazwa: "Wyniki Amazon", wplyw: 3, instrumenty: ["nasdaq", "sp500"], opis: "Wydatki na chmurę i AI po słabym tygodniu dla technologii.", nazwa_en: "Amazon earnings", opis_en: "Cloud and AI spending after a weak week for tech.", aktualnie: "przychody 201,9 mld USD (+12%), AWS +39% do 46,0 mld USD; zysk poniżej oczekiwań, akcje po sesji około −6%", aktualnie_en: "revenue $201.9bn (+12%), AWS +39% to $46.0bn; EPS below expectations, shares about −6% after hours", zrodlo: 43 },

    { czas: "2026-10-30T04:00:00+01:00", kraj: "JP", nazwa: "BoJ: decyzja w sprawie stóp procentowych", wplyw: 4, instrumenty: ["usdjpy"], opis: "Stopa 1,25%; posiedzenie może zapowiedzieć kolejną podwyżkę. Bank Japonii nie ogłasza stałej godziny, zwykle decyzja pada rano czasu polskiego.", nazwa_en: "BoJ rate decision", opis_en: "Rate at 1.25%; the meeting may signal the next hike. The BoJ has no fixed release time; the decision usually comes in the Warsaw morning.", aktualnie: "1,25% bez zmian (8 do 1; jeden członek za podwyżką do 1,5%); inflacja bazowa osiągnęła cel 2%", aktualnie_en: "1.25% unchanged (8-1; one member for a hike to 1.5%); underlying inflation has reached the 2% target", zrodlo: 44 },
    { czas: "2026-10-30T08:00:00+01:00", kraj: "DE", nazwa: "PKB za III kwartał (wstępny)", wplyw: 2, instrumenty: ["eurusd", "dax"], opis: "Poprzednio +0,3% k/k. Kondycja największej gospodarki strefy euro.", nazwa_en: "Q3 GDP (preliminary)", opis_en: "Previously +0.3% q/q. The health of the euro area's largest economy.", zrodlo: 33 },
    { czas: "2026-10-30T11:00:00+01:00", kraj: "EZ", nazwa: "PKB strefy euro za III kwartał (wstępny)", wplyw: 2, instrumenty: ["eurusd", "dax"], opis: "Poprzednio +0,6% k/k.", nazwa_en: "Euro area Q3 GDP (flash)", opis_en: "Previously +0.6% q/q.", zrodlo: 33 },
    { czas: "2026-10-30T14:00:00+01:00", kraj: "DE", nazwa: "Inflacja HICP (paź, wstępna)", wplyw: 2, instrumenty: ["eurusd", "dax"], opis: "Pierwszy odczyt inflacji po decyzji EBC.", nazwa_en: "HICP inflation (Oct, flash)", opis_en: "The first inflation reading after the ECB decision.", zrodlo: 33 },
    { czas: "2026-11-05T14:00:00+01:00", kraj: "UK", nazwa: "BoE: decyzja w sprawie stóp procentowych", wplyw: 4, instrumenty: ["gbpusd"], opis: "Większość ekonomistów w ankiecie Reutersa spodziewa się podwyżki z 3,75% do 4,00%.", nazwa_en: "BoE rate decision", opis_en: "Most economists in a Reuters poll expect a hike from 3.75% to 4.00%.", zrodlo: 6 }
  ]
};
