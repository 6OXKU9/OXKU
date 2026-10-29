// ANALIZY: tu dodajesz nowe wpisy (najnowsze mogą być w dowolnym miejscu, strona sama sortuje po dacie).
//
// Pola:
//   id          unikalny, tylko litery, cyfry i myślniki (np. "2026-10-20-zloto")
//   instrument  id z instrumenty.js (eurusd, gbpusd, usdjpy, usdpln, xauusd, xagusd, wti, nasdaq, sp500, dax, btcusd)
//   data        "RRRR-MM-DD"
//   interwal    np. "H4", "D1", "W1"
//   kierunek    "wzrostowy" | "spadkowy" | "neutralny"
//   tytul, lead krótki tytuł i jedno-dwuzdaniowe podsumowanie
//   poziomy     { cena: aktualna cena, opory: [...], wsparcia: [...] }
//   scenariusze [{ typ: "wzrostowy"|"spadkowy"|"neutralny", tekst: "..." }]
//   tresc       lista akapitów
//   zrodla      [{ nazwa, url }] źródła cen i poziomów
//   autor       podpis (domyślnie „Redakcja AnalizyRynku”, a dla ai: true „AI (Claude)”)
//   ai          true = analizę przygotowała AI
//   szkic       true = szkic AI czekający na akceptację (usuń pole po sprawdzeniu)
//   przyklad    true = wpis demonstracyjny
//   korektaWykresu { o: przesunięcie, od: "RRRR-MM-DD" (pierwsza świeca nowego kontraktu), opis, opis_en } gdy wykres pokazuje inny kontrakt niż analiza (ropa po zmianie kontraktu)
//   wynik       rozliczenie (uzupełnia AI albo autor): { status: "trafiona" | "nietrafiona" | "bez rozstrzygnięcia",
//               data: "RRRR-MM-DD", komentarz: "...", komentarz_en: "..." }. Brak pola = analiza w toku.
//   *_en        wersja angielska pól: tytul_en, lead_en, tresc_en, scenariusze[].tekst_en
//
// Analizy z 18 paź 2026 przygotowała AI na podstawie cen zamknięcia z 16 paź (bitcoin: 18 paź) i poziomów
// wskazywanych przez analityków w źródłach podanych przy każdym wpisie.
window.ANALIZY = [
  {
    id: "2026-10-29-dax", instrument: "dax", data: "2026-10-29", interwal: "D1",
    kierunek: "wzrostowy", ai: true, szkic: true,
    tytul: "DAX nad 26 000 pkt, celem szczyt z 4 września przy 26 164", tytul_en: "DAX above 26,000, eyeing the 4 September high at 26,164",
    lead: "DAX wybił się z zakresu i zamknął czwartek na 26 040 pkt, najwyżej od siedmiu tygodni. Dopóki indeks trzyma się nad 25 665, bazą jest test szczytu z 4 września przy 26 164.",
    lead_en: "The DAX broke out of its range and closed Thursday at 26,040, a seven-week high. While the index holds above 25,665, a test of the 4 September high at 26,164 is the base case.",
    poziomy: { cena: 26039.68, opory: [26164], wsparcia: [25665, 25488] },
    scenariusze: [
      { typ: "wzrostowy", tekst: "Bazowo wzrost do 26 164 pkt (szczyt z 4 września, opór według TraderFox dla DZ Banku).", tekst_en: "Base case: a rise to 26,164 (the 4 September high, resistance according to TraderFox for DZ Bank)." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 25 665 (kluczowy poziom trendu według onvista) unieważnia scenariusz i otwiera drogę do 25 488 (minimum z 28 października).", tekst_en: "A daily close below 25,665 (the key trend level according to onvista) invalidates the setup and opens the way to 25,488 (the 28 October low)." }
    ],
    tresc: [
      "DAX zamknął czwartkową sesję Xetra na 26 039,68 pkt (+1,3%). Najmocniej rósł Adidas (+5,8% po zapowiedzi powrotu do wzrostu w IV kwartale), a na końcu indeksu był Vonovia (około −3%).",
      "EBC zgodnie z oczekiwaniami zostawił stopy bez zmian (depozytowa 2,50%), co rynek przyjął spokojnie. Christine Lagarde odejdzie z funkcji prezes wcześniej, 7 lutego 2027 roku.",
      "onvista wskazuje 25 665 jako poziom, nad którym trend wzrostowy pozostaje nienaruszony, i 26 120 (poziom z początku września) jako kolejny punkt odniesienia. TraderFox dla DZ Banku podaje opór 26 164 (szczyt z 4 września) i wsparcie 25 488. W piątek PKB Niemiec (8:00) i strefy euro (11:00) oraz inflacja w Niemczech (14:00)."
    ],
    tresc_en: [
      "The DAX closed Thursday's Xetra session at 26,039.68 (+1.3%). Adidas rose the most (+5.8% after guiding to a return to growth in Q4), while Vonovia was at the bottom of the index (about −3%).",
      "The ECB left rates unchanged as expected (deposit rate 2.50%), which the market took calmly. Christine Lagarde will leave the presidency early, on 7 February 2027.",
      "onvista sees 25,665 as the level above which the uptrend stays intact, and 26,120 (the early-September level) as the next reference point. TraderFox for DZ Bank gives resistance at 26,164 (the 4 September high) and support at 25,488. Friday brings German GDP (8:00), euro-area GDP (11:00) and German inflation (14:00)."
    ],
    zrodla: [
      { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss, Dax über 26.000 Punkte, EZB-Leitzins stabil (29 paź 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-ueber-26-000-punkte-12187543" },
      { nazwa: "onvista: Dax überwindet letzte Hürde vor einem Anstieg auf 26.000 Punkte (29 paź 2026)", url: "https://www.onvista.de/news/2026/10-29-dax-ueberwindet-letzte-huerde-vor-einem-anstieg-auf-26-000-punkte-41123281-19-26569831" },
      { nazwa: "DZ BANK / TraderFox: Technische Analyse DAX (29 paź 2026)", url: "https://www.dzbank-wertpapiere.de/markets/daxanalyse" }
    ]
  },
  {
    id: "2026-10-29-bitcoin", instrument: "btcusd", data: "2026-10-29", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    tytul: "Bitcoin przy 80 000 USD pod oporem 81 000–81 950, celem 78 000", tytul_en: "Bitcoin near $80,000 below the $81,000–81,950 resistance, eyeing $78,000",
    lead: "Bitcoin nie przebił strefy 81 000–81 950 USD i rano wrócił poniżej 80 000. Słaby popyt na rynku kasowym i ryzyko grudniowej podwyżki stóp Fed przemawiają za testem wsparcia 78 000 USD.",
    lead_en: "Bitcoin failed to break the $81,000–81,950 zone and slipped back below $80,000 this morning. Weak spot demand and the risk of a December Fed hike favour a test of $78,000 support.",
    poziomy: { cena: 79988, opory: [81950, 84856], wsparcia: [78000, 77600] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Bazowo spadek do wsparcia 78 000 USD (Mudrex), a przy jego przełamaniu do górnej granicy strefy 73 000–77 600 (CryptoQuant).", tekst_en: "Base case: a drop to $78,000 support (Mudrex), and on a break to the top of the $73,000–77,600 zone (CryptoQuant)." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 81 950 (górna granica strefy oporu, blisko średniego kosztu zakupu przez fundusze ETF) unieważnia scenariusz; wyżej leży maksimum z 21 paź przy 84 856.", tekst_en: "A daily close above $81,950 (top of the resistance zone, near the average ETF cost basis) invalidates the setup; above lies the 21 Oct high near $84,856." }
    ],
    tresc: [
      "Bitcoin zamknął środę na 81 249 USD, a w czwartek rano spadł do około 79 990 USD (dzienne minimum 79 586). Przez ostatnie dziesięć dni zamknięcia mieściły się w zakresie 80 000–84 000 USD.",
      "Według Analytics Insight odbicia hamuje strefa 81 000–81 800 USD, gdzie leży średni koszt zakupu przez fundusze ETF (około 81 500) i gdzie trafia podaż górników. CryptoQuant od 14 paź notuje ujemny popyt na rynku kasowym.",
      "Fed utrzymał stopy, ale dwoje członków głosowało za podwyżką, a rynek wycenia około 86–90% szans na podwyżkę w grudniu. Dziś PKB USA i inflacja PCE (13:30). Mudrex wskazuje wsparcie przy 78 000 USD."
    ],
    tresc_en: [
      "Bitcoin closed Wednesday at $81,249 and on Thursday morning fell to about $79,990 (daily low $79,586). Over the past ten days closes stayed within $80,000–84,000.",
      "According to Analytics Insight, rebounds stall in the $81,000–81,800 zone, where the average ETF cost basis sits (about $81,500) and miner supply arrives. CryptoQuant has recorded negative spot demand since 14 Oct.",
      "The Fed held rates, but two officials voted for a hike, and markets price about an 86–90% chance of a December hike. US GDP and PCE inflation are due today (13:30). Mudrex cites support near $78,000."
    ],
    zrodla: [
      { nazwa: "Analytics Insight: Bitcoin slips near USD 80,361 as Fed hold keeps hike fears alive (29 paź 2026)", url: "https://www.analyticsinsight.net/price-analysis/crypto-prices-today-bitcoin-slips-near-usd-80361-as-fed-hold-keeps-hike-fears-alive" },
      { nazwa: "Coinbase: świece dzienne BTC-USD", url: "https://www.coinbase.com/price/bitcoin" }
    ]
  },
  {
    id: "2026-10-29-nasdaq", instrument: "nasdaq", data: "2026-10-29", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    tytul: "Nasdaq 100 cofa się spod 29 800 po rozczarowaniu Alphabetu, celem 29 000", tytul_en: "Nasdaq 100 retreats from 29,800 after Alphabet disappoints, eyeing 29,000",
    lead: "Indeks zamknął środę tuż nad 50-dniową średnią przy 29 800, ale po słabych wynikach Alphabetu kontrakty spadają o około 1,2%. Dopóki Nasdaq 100 jest pod 29 800, bazą jest powrót do wsparcia 29 000.",
    lead_en: "The index closed Wednesday just above the 50-day average near 29,800, but after Alphabet's weak results futures are down about 1.2%. While the Nasdaq 100 stays below 29,800, a return to 29,000 support is the base case.",
    poziomy: { cena: 29447, opory: [29800, 30000], wsparcia: [29000, 28300] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Bazowo spadek do wsparcia 29 000, wielokrotnie testowanego w październiku, a przy jego przełamaniu do czerwcowego minimum 28 300.", tekst_en: "Base case: a drop to 29,000 support, tested repeatedly in October, and on a break to the June low of 28,300." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 29 800 (50-dniowa średnia EMA) unieważnia scenariusz i otwiera drogę do 30 000.", tekst_en: "A daily close above 29,800 (the 50-day EMA) invalidates the setup and opens the way to 30,000." }
    ],
    tresc: [
      "Nasdaq 100 zamknął środę na 29 813 pkt (+0,5%), trzeci dzień wzrostów. Po sesji Alphabet stracił ponad 8%: zysk na akcję 2,12 USD wobec oczekiwanych 3,02 i ujemny przepływ gotówki przy nakładach 51 mld USD. Microsoft zyskał około 5% po lepszych wynikach i wzroście Azure o 48%.",
      "Rano kontrakty CFD na Nasdaq 100 są przy 29 447 pkt, około 1,2% pod środowym zamknięciem. W Azji Kospi stracił 2,8% po spadku Samsunga. Fed utrzymał stopy, ale rynek wycenia grudniową podwyżkę.",
      "StoneX wskazuje opór 29 800 (50-dniowa średnia EMA, gdzie wcześniejsze odbicia się zatrzymywały) i 30 000 oraz wsparcia 29 000 i 28 300. Dziś PKB i inflacja PCE (13:30), a po sesji wyniki Amazona."
    ],
    tresc_en: [
      "The Nasdaq 100 closed Wednesday at 29,813 (+0.5%), a third straight gain. After the close Alphabet fell over 8%: EPS of $2.12 versus $3.02 expected and negative free cash flow on $51bn of capex. Microsoft rose about 5% on better results and 48% Azure growth.",
      "This morning Nasdaq 100 CFDs trade near 29,447, about 1.2% below Wednesday's close. In Asia the Kospi lost 2.8% after Samsung fell. The Fed held rates, but markets price a December hike.",
      "StoneX cites resistance at 29,800 (the 50-day EMA, where earlier rebounds stalled) and 30,000, with support at 29,000 and 28,300. GDP and PCE inflation are due today (13:30), with Amazon results after the close."
    ],
    zrodla: [
      { nazwa: "StoneX: Nasdaq 100 Forecast, NDX rebounds as Anthropic files for IPO (26 paź 2026)", url: "https://www.stonex.com/en-gb/news-and-analysis/nasdaq-100-forecast-ndx-rebounds-as-anthropic-files-for-ipo/" },
      { nazwa: "TradingKey: Alphabet Q3 2026 earnings (28 paź 2026)", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262248965-google-earnings-report-q3-services-cloud-search-capital-expenditures-cash-tradingkey" },
      { nazwa: "Trading Economics: US100 (29 paź 2026, rano)", url: "https://tradingeconomics.com/united-states/stock-market" }
    ]
  },
  {
    id: "2026-10-28-eurusd", instrument: "eurusd", data: "2026-10-28", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    tytul: "EUR/USD przy październikowych minimach, celem strefa 1,1050–1,1080", tytul_en: "EUR/USD at October lows, eyeing the 1.1050–1.1080 zone",
    lead: "Euro jest najsłabiej od kwietnia 2025 roku i notowane poniżej wszystkich głównych średnich. Dopóki kurs jest pod 1,1170, bazą jest spadek do strefy 1,1050–1,1080.",
    lead_en: "The euro is at its weakest since April 2025 and trades below all major moving averages. While the rate stays below 1.1170, a drop to the 1.1050–1.1080 zone is the base case.",
    poziomy: { cena: 1.1122, opory: [1.1170, 1.1220], wsparcia: [1.1080, 1.1050] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Bazowo przełamanie 1,1115 i spadek do strefy 1,1050–1,1080 (minimalny cel według Traders Union).", tekst_en: "Base case: a break of 1.1115 and a drop to the 1.1050–1.1080 zone (the minimum target according to Traders Union)." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 1,1170 (górna granica strefy 1,1160–1,1170) unieważnia scenariusz i otwiera drogę do 1,1200–1,1220, gdzie leżą krótkie średnie.", tekst_en: "A daily close above 1.1170 (top of the 1.1160–1.1170 zone) invalidates the setup and opens the way to 1.1200–1.1220, where the short-term averages lie." }
    ],
    tresc: [
      "EUR/USD zamknął wtorek na 1,1122 (−0,45%), najniżej od kwietnia 2025 roku, i rano utrzymuje się przy 1,1122. Dolar zyskuje przed dzisiejszą decyzją Fed, a napięcia na Bliskim Wschodzie zwiększają popyt na amerykańską walutę.",
      "Strefę euro osłabiają spowolnienie gospodarki przy uporczywej inflacji i problemy finansów publicznych Francji, której PMI spadł do 48,4 pkt. EBC w czwartek najpewniej utrzyma stopę depozytową na 2,50%.",
      "Traders Union ocenia perspektywę jako negatywną: przełamanie 1,1115 otwiera drogę do 1,1080–1,1050, a dopiero wybicie ponad 1,1160–1,1170 zmieniłoby obraz. RoboForex wskazuje opór 1,1200 i wsparcia 1,1120 i 1,1100."
    ],
    tresc_en: [
      "EUR/USD closed Tuesday at 1.1122 (−0.45%), its lowest since April 2025, and holds near 1.1122 this morning. The dollar gains ahead of today's Fed decision, and Middle East tensions add to demand for the US currency.",
      "The euro area is weighed by a slowing economy with sticky inflation and by France's public finance problems, with its PMI down to 48.4. The ECB will most likely keep the deposit rate at 2.50% on Thursday.",
      "Traders Union sees the outlook as negative: a break of 1.1115 opens the way to 1.1080–1.1050, and only a move above 1.1160–1.1170 would change the picture. RoboForex cites resistance at 1.1200 and support at 1.1120 and 1.1100."
    ],
    zrodla: [
      { nazwa: "Traders Union: EUR/USD remains vulnerable near October lows (27 paź 2026)", url: "https://tradersunion.com/news/currencies/show/3980473-eur-usd-remains-vulnerable-near-october-lows-ahead-of-central-bank-decisions/" },
      { nazwa: "RoboForex: EURUSD forecast, 27 paź 2026", url: "https://roboforex.com/beginners/analytics/forex-forecast/currencies/eur-usd-forecast-2026-10-27/" },
      { nazwa: "Trading Economics: EUR/USD (28 paź 2026, rano)", url: "https://tradingeconomics.com/euro-area/currency" }
    ]
  },
  {
    id: "2026-10-28-usdjpy", instrument: "usdjpy", data: "2026-10-28", interwal: "D1",
    kierunek: "neutralny", ai: true, szkic: true,
    tytul: "USD/JPY przy 158 między przewagą rentowności a ryzykiem interwencji", tytul_en: "USD/JPY near 158, caught between the yield gap and intervention risk",
    lead: "Para wróciła do 158, ale przed decyzjami Fed i Banku Japonii wzrosty ogranicza ryzyko interwencji. Bazą jest ruch w zakresie 156,75–159,05.",
    lead_en: "The pair is back at 158, but ahead of the Fed and Bank of Japan decisions intervention risk caps gains. Trading within 156.75–159.05 is the base case.",
    poziomy: { cena: 157.95, opory: [159.05, 160.00], wsparcia: [156.75, 155.11] },
    scenariusze: [
      { typ: "neutralny", tekst: "Bazowo konsolidacja między wrześniowym minimum 156,75 a październikowym maksimum 159,05.", tekst_en: "Base case: consolidation between the September low of 156.75 and the October high of 159.05." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 159,05 otwiera drogę do 160,00, gdzie ryzyko interwencji jest największe.", tekst_en: "A daily close above 159.05 opens the way to 160.00, where intervention risk is highest." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 156,75 oznaczałoby wyraźne umocnienie jena i otwiera drogę do 155,11.", tekst_en: "A daily close below 156.75 would signal clear yen strength and opens the way to 155.11." }
    ],
    tresc: [
      "USD/JPY zamknął wtorek na 157,94 (+0,3%), a rano jest przy 157,95. Dolar zyskuje przed dzisiejszą decyzją Fed, a różnica rentowności 10-latek USA i Japonii wciąż wspiera parę.",
      "Wzrosty ogranicza ryzyko interwencji: w lipcu Japonia interweniowała razem z USA po wybiciu ponad 160, a każde podejście do 159,05 kończyło się ostrzeżeniami Tokio. Bank Japonii w piątek najpewniej utrzyma stopę 1,25%, ale może zasygnalizować grudniową podwyżkę.",
      "Investing.com wskazuje wsparcia 156,75 (zamknięcie poniżej oznaczałoby zwrot na korzyść jena) i 155,11 oraz opory 159,05 i 160,00. XTB spodziewa się konsolidacji przy 157–158 do czasu decyzji banków centralnych."
    ],
    tresc_en: [
      "USD/JPY closed Tuesday at 157.94 (+0.3%) and trades near 157.95 this morning. The dollar gains ahead of today's Fed decision, and the gap between US and Japanese 10-year yields still supports the pair.",
      "Intervention risk caps gains: in July Japan intervened jointly with the US after a break above 160, and each approach to 159.05 has drawn warnings from Tokyo. The Bank of Japan will most likely hold at 1.25% on Friday but may signal a December hike.",
      "Investing.com cites support at 156.75 (a close below would signal a shift towards yen strength) and 155.11, with resistance at 159.05 and 160.00. XTB expects consolidation around 157–158 until the central bank decisions."
    ],
    zrodla: [
      { nazwa: "Investing.com: USD/JPY Near 158 as Yield Gap Support Collides With Japan's Intervention Risk (16 paź 2026)", url: "https://ca.investing.com/analysis/usdjpy-near-158-as-yield-gap-support-collides-with-japans-intervention-risk-200628629" },
      { nazwa: "XTB: Chart of the Day, USDJPY caught in a trap (27 paź 2026)", url: "https://www.xtb.com/en/market-analysis/chart-of-the-day-usdjpy-caught-in-a-trap-tokyo-intervention-and-a-hawkish-boj-loom" },
      { nazwa: "Trading Economics: USD/JPY (28 paź 2026, rano)", url: "https://tradingeconomics.com/euro-area/currency" }
    ]
  },
  {
    id: "2026-10-27-dax", instrument: "dax", data: "2026-10-27", interwal: "D1",
    kierunek: "neutralny", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-29", komentarz: "29 paź DAX zamknął sesję Xetra na 26 039,68 pkt, powyżej górnej granicy zakresu R1 25 800. Zamknięcie dnia wypadło poza zakresem S1–R1. Źródło ceny: ARIVA.DE / dpa-AFX.", komentarz_en: "On 29 Oct the DAX closed the Xetra session at 26,039.68, above the R1 upper bound of 25,800. The daily close fell outside the S1–R1 range. Price source: ARIVA.DE / dpa-AFX." },
    tytul: "DAX w zawężającym się zakresie przed Fed i EBC", tytul_en: "DAX in a narrowing range ahead of the Fed and ECB",
    lead: "DAX odrobił w dwa dni cały piątkowy spadek i zamknął wtorek na 25 591 pkt. Przed decyzjami Fed i EBC oraz wynikami Big Tech bazą jest ruch w zakresie 25 317–25 800.",
    lead_en: "The DAX recouped Friday's entire drop in two days and closed Tuesday at 25,591. Ahead of the Fed and ECB decisions and Big Tech results, trading within 25,317–25,800 is the base case.",
    poziomy: { cena: 25591, opory: [25800, 25900], wsparcia: [25317, 25000] },
    scenariusze: [
      { typ: "neutralny", tekst: "Bazowo konsolidacja między wsparciem 25 317 (gdzie indeks stabilizował się w poniedziałek i wtorek) a oporem 25 800.", tekst_en: "Base case: consolidation between 25,317 support (where the index stabilised on Monday and Tuesday) and 25,800 resistance." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 25 800 (sygnał kupna według wallstreet-online) otwiera drogę do 25 900, rekordowego zamknięcia.", tekst_en: "A daily close above 25,800 (a buy signal according to wallstreet-online) opens the way to 25,900, the record close." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 25 317 otwiera drogę do 25 000.", tekst_en: "A daily close below 25,317 opens the way to 25,000." }
    ],
    tresc: [
      "DAX zamknął wtorkową sesję Xetra na 25 590,77 pkt (+0,7%), po poniedziałkowym wzroście o 0,9%. Najmocniej rosło Porsche (blisko +4% po wynikach), a traciły Mercedes-Benz (blisko −4% po obniżeniu prognozy zysku) i Beiersdorf (−3,3%).",
      "Według finanzen.at zakres wahań się zawęża: kluczowe wsparcie leży przy 25 317, a trwały ruch powyżej 25 700 poprawiłby obraz wykresu. wallstreet-online wskazuje 25 800 jako sygnał kupna, a rekordowe zamknięcie to około 25 900.",
      "W środę decyzja Fed oraz wyniki Microsoftu i Alphabetu, w czwartek EBC i Amazon, w piątek Bank Japonii i PKB Niemiec. Przy tylu wydarzeniach analiza zakłada konsolidację, a nie kierunek."
    ],
    tresc_en: [
      "The DAX closed Tuesday's Xetra session at 25,590.77 (+0.7%), after Monday's 0.9% gain. Porsche rose the most (nearly +4% after results), while Mercedes-Benz (nearly −4% after a profit warning) and Beiersdorf (−3.3%) fell.",
      "According to finanzen.at the trading range is narrowing: key support lies at 25,317, and a sustained move above 25,700 would improve the chart. wallstreet-online sees 25,800 as a buy signal, and the record close is about 25,900.",
      "Wednesday brings the Fed decision and results from Microsoft and Alphabet, Thursday the ECB and Amazon, Friday the Bank of Japan and German GDP. With so many events, this analysis assumes consolidation rather than a direction."
    ],
    zrodla: [
      { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss, Dax steigt vor Tech-Zahlen (27 paź 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-steigt-vor-tech-zahlen-12183820" },
      { nazwa: "finanzen.at: DAX überraschend stark (27 paź 2026)", url: "https://www.finanzen.at/nachrichten/aktien/dax-ueberraschend-stark-jetzt-noch-long-vor-der-fed-1036671323" },
      { nazwa: "wallstreet-online: DAX: Mal hoch, mal wieder runter (20 paź 2026)", url: "https://www.wallstreet-online.de/nachricht/21549809-dax-hoch-runter" }
    ]
  },
  {
    id: "2026-10-27-usdpln", instrument: "usdpln", data: "2026-10-27", interwal: "D1",
    kierunek: "wzrostowy", ai: true, szkic: true,
    tytul: "Dolar po 3,94 zł, celem górna granica kanału przy 3,98", tytul_en: "The dollar at 3.94 zloty, eyeing the channel top near 3.98",
    lead: "USD/PLN przebił w poniedziałek kwietniowe maksima z 2025 roku przy 3,94 i jest najwyżej od półtora roku. Dopóki kurs trzyma się nad 3,92, bazą jest ruch w stronę górnej granicy tegorocznego kanału wzrostowego.",
    lead_en: "USD/PLN broke above the April 2025 highs near 3.94 on Monday and is at an 18-month high. While the rate holds above 3.92, a move towards the top of this year's rising channel is the base case.",
    poziomy: { cena: 3.9437, opory: [3.9800, 4.0000], wsparcia: [3.9200, 3.9002] },
    scenariusze: [
      { typ: "wzrostowy", tekst: "Bazowo wzrost do około 3,98 zł (górna granica tegorocznego kanału wzrostowego według Comparic), a przy jej przełamaniu do 4,00 zł.", tekst_en: "Base case: a rise to about 3.98 zloty (the top of this year's rising channel according to Comparic), and on a break to 4.00 zloty." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 3,92 (przełamany opór, teraz wsparcie) unieważnia scenariusz i otwiera drogę do 3,9002.", tekst_en: "A daily close below 3.92 (broken resistance, now support) invalidates the setup and opens the way to 3.9002." }
    ],
    tresc: [
      "USD/PLN zamknął poniedziałek na 3,9373 po dziennym maksimum 3,9418, a we wtorek rano jest przy 3,9437 (wyliczone z EUR/PLN 4,4039 i EUR/USD 1,1167). EUR/PLN jest najwyżej od ponad dwóch lat.",
      "Dolar zyskuje na oczekiwaniach kolejnych podwyżek stóp Fed (rynek wycenia około 82% szans na grudniową podwyżkę) i na napięciach wokół Iranu. Euro słabnie po gorszych danych i przez problemy finansów publicznych Francji, a słabość złotego trwa od kilku tygodni.",
      "Według Comparic kluczowym oporem było 3,92 zł; po jego przełamaniu kolejne poziomy to kwietniowe maksima z 2025 roku przy 3,94 i górna granica kanału wzrostowego przy około 3,98. W środę decyzja Fed, w czwartek EBC."
    ],
    tresc_en: [
      "USD/PLN closed Monday at 3.9373 after a daily high of 3.9418, and on Tuesday morning trades near 3.9437 (derived from EUR/PLN 4.4039 and EUR/USD 1.1167). EUR/PLN is at its highest in over two years.",
      "The dollar is supported by expectations of further Fed hikes (markets price about an 82% chance of a December hike) and tensions around Iran. The euro weakens on softer data and France's public finance problems, and the zloty's slide has lasted several weeks.",
      "According to Comparic, 3.92 zloty was the key resistance; after its break the next levels are the April 2025 highs near 3.94 and the top of the rising channel near 3.98. The Fed decides on Wednesday, the ECB on Thursday."
    ],
    zrodla: [
      { nazwa: "Comparic: Dolar kontynuuje wzrosty, kurs złotego mocno traci (26 paź 2026)", url: "https://comparic.pl/dolar-kontynuuje-wzrosty-kurs-zlotego-mocno-traci-26-pazdziernika-2026-r/" },
      { nazwa: "Parkiet: Popołudniowe umocnienie dolara, USD najwyżej od kilkunastu miesięcy (26 paź 2026)", url: "https://www.parkiet.com/waluty/art45400771-popoludniowe-umocnienie-dolara-usd-najwyzej-od-kilkunastu-miesiecy" },
      { nazwa: "Trading Economics: EUR/USD i EUR/PLN (27 paź 2026, rano)", url: "https://tradingeconomics.com/euro-area/currency" }
    ]
  },
  {
    id: "2026-10-27-nasdaq", instrument: "nasdaq", data: "2026-10-27", interwal: "D1",
    kierunek: "neutralny", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-28", komentarz: "28 paź Nasdaq 100 zamknął sesję na 29 813 pkt, powyżej górnej granicy zakresu R1 29 800. Świeca dzienna zamknęła się poza zakresem S1–R1. Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 28 Oct the Nasdaq 100 closed at 29,813, above the R1 upper bound of 29,800. The daily candle closed outside the S1–R1 range. Price source: CNBC daily candles." },
    tytul: "Nasdaq 100 odbija po wniosku Anthropic, ale przed Fed i wynikami w zakresie 29 000–29 800", tytul_en: "Nasdaq 100 rebounds on Anthropic's filing, but stays in a 29,000–29,800 range ahead of the Fed and earnings",
    lead: "Indeks wrócił nad 29 200 dzięki odbiciu spółek AI, ale wciąż jest pod 50-dniową średnią przy 29 800. Przed decyzją Fed i wynikami Microsoftu, Alphabetu i Amazona bazą jest ruch w zakresie 29 000–29 800.",
    lead_en: "The index climbed back above 29,200 on a rebound in AI stocks but remains below the 50-day average near 29,800. Ahead of the Fed decision and results from Microsoft, Alphabet and Amazon, trading within 29,000–29,800 is the base case.",
    poziomy: { cena: 29273, opory: [29800, 30000], wsparcia: [29000, 28300] },
    scenariusze: [
      { typ: "neutralny", tekst: "Bazowo konsolidacja między wsparciem 29 000 a 50-dniową średnią EMA przy 29 800.", tekst_en: "Base case: consolidation between 29,000 support and the 50-day EMA near 29,800." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 29 000 otwiera drogę do czerwcowego minimum 28 300.", tekst_en: "A daily close below 29,000 opens the way to the June low of 28,300." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 29 800 otwiera drogę do 30 000 i linii trendu przy 30 200.", tekst_en: "A daily close above 29,800 opens the way to 30,000 and the trend line near 30,200." }
    ],
    tresc: [
      "Nasdaq 100 zamknął poniedziałek na 29 273 pkt (+1,1%) po dziennym maksimum 29 404. Spółki AI i producenci chipów odbili po tym, jak Anthropic złożył prospekt przed debiutem na Nasdaq. W Azji Kospi zyskał we wtorek 3,4%, a Nikkei 1,7%.",
      "StoneX ocenia obraz techniczny jako spadkowy: odbicie zatrzymało się wcześniej na 50-dniowej średniej EMA przy 29 800, a wsparcie 29 000 było testowane kilka razy. Poniżej leży czerwcowe minimum 28 300, a powyżej 30 000 i linia trendu przy 30 200.",
      "W środę decyzja Fed (rynek spodziewa się utrzymania stóp, ale wycenia grudniową podwyżkę) oraz wyniki Microsoftu i Alphabetu, w czwartek Amazona, PKB i inflacja PCE. Te wydarzenia mogą wybić indeks z zakresu, dlatego ta analiza zakłada konsolidację, a nie kierunek."
    ],
    tresc_en: [
      "The Nasdaq 100 closed Monday at 29,273 (+1.1%) after a daily high of 29,404. AI stocks and chipmakers rebounded after Anthropic filed a prospectus to list on Nasdaq. In Asia on Tuesday the Kospi gained 3.4% and the Nikkei 1.7%.",
      "StoneX sees the technical picture as bearish: earlier rebounds stalled at the 50-day EMA near 29,800, and 29,000 support has been tested several times. Below lies the June low of 28,300, above it 30,000 and the trend line near 30,200.",
      "Wednesday brings the Fed decision (a hold is expected, but markets price a December hike) and results from Microsoft and Alphabet, with Amazon, GDP and PCE inflation on Thursday. These events could break the index out of its range, so this analysis assumes consolidation rather than a direction."
    ],
    zrodla: [
      { nazwa: "StoneX: Nasdaq 100 Forecast, NDX rebounds as Anthropic files for IPO (26 paź 2026)", url: "https://www.stonex.com/en-gb/news-and-analysis/nasdaq-100-forecast-ndx-rebounds-as-anthropic-files-for-ipo/" },
      { nazwa: "investingLive: Asia-Pacific market news, Regional stocks mostly rose (27 paź 2026)", url: "https://investinglive.com/news/investinglive-asia-pacific-market-news-regional-stocks-mostly-rose/" },
      { nazwa: "Trading Economics: rynek akcji USA (US100), 26 paź 2026", url: "https://tradingeconomics.com/united-states/stock-market" }
    ]
  },
  {
    id: "2026-10-26-usdpln", instrument: "usdpln", data: "2026-10-26", interwal: "D1",
    kierunek: "wzrostowy", ai: true, szkic: true,
    wynik: { status: "trafiona", data: "2026-10-26", komentarz: "26 paź USD/PLN doszedł do 3,9418, powyżej oporu R1 3,9345, a dzień zamknął na 3,9373. Kurs nie zamknął się poniżej S1 3,9002. Analiza ukazała się rano przy kursie 3,9266, a maksimum padło po publikacji. Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 26 Oct USD/PLN reached 3.9418, above R1 resistance at 3.9345, and closed the day at 3.9373. The rate did not close below S1 at 3.9002. The analysis was published in the morning at 3.9266, and the high came after publication. Price source: CNBC daily candles." },
    tytul: "Dolar przy 3,93 zł, najdrożej od prawie dwóch lat", tytul_en: "The dollar near 3.93 zloty, its highest in almost two years",
    lead: "USD/PLN wybił się w piątek ponad strefę oporu 3,9156–3,9255 i zamknął tydzień na 3,9264. Dopóki kurs trzyma się nad 3,9002, bazą jest test piątkowego maksimum 3,9345.",
    lead_en: "USD/PLN broke above the 3.9156–3.9255 resistance zone on Friday and closed the week at 3.9264. While the rate holds above 3.9002, a test of Friday's 3.9345 high is the base case.",
    poziomy: { cena: 3.9266, opory: [3.9345, 4.0000], wsparcia: [3.9002, 3.8785] },
    scenariusze: [
      { typ: "wzrostowy", tekst: "Bazowo wzrost do piątkowego maksimum 3,9345, najwyżej od prawie dwóch lat, a przy jego przełamaniu w stronę 4,00 zł, poziomu wskazywanego przez analityków.", tekst_en: "Base case: a rise to Friday's high of 3.9345, the highest in almost two years, and on a break towards 4.00 zloty, the level analysts point to." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 3,9002 (pierwsze wsparcie według DM BOŚ) unieważnia scenariusz i otwiera drogę do 3,8785.", tekst_en: "A daily close below 3.9002 (first support according to DM BOŚ) invalidates the setup and opens the way to 3.8785." }
    ],
    tresc: [
      "USD/PLN zamknął piątek na 3,9264 (+0,7%) po dziennym maksimum 3,9345. W poniedziałek rano dolar kosztuje około 3,9266 zł. EUR/PLN jest przy 4,40, na górnej granicy strefy oporu 4,39–4,40.",
      "Dolar zyskuje dzięki drogiej ropie (Brent około 115 USD), oczekiwaniom na kolejne podwyżki stóp Fed i obawom o finanse publiczne Francji. Złotemu ciążą też prognozy Fitch, który podniósł szacunek deficytu Polski na 2026 rok do 7,3% PKB.",
      "Analityk DM BOŚ wskazywał strefę oporu 3,9156–3,9255 oraz wsparcia 3,9002 i 3,8785. Strefa została przełamana, a PKO BP spodziewa się utrzymania presji wzrostowej na USD/PLN. W tym tygodniu kluczowe będą decyzje Fed (środa) i EBC (czwartek)."
    ],
    tresc_en: [
      "USD/PLN closed Friday at 3.9264 (+0.7%) after a daily high of 3.9345. On Monday morning the dollar trades near 3.9266 zloty. EUR/PLN is near 4.40, at the top of the 4.39–4.40 resistance zone.",
      "The dollar is supported by pricey oil (Brent near $115), expectations of further Fed hikes and worries over France's public finances. The zloty is also weighed by Fitch, which raised its 2026 Polish deficit estimate to 7.3% of GDP.",
      "A DM BOŚ analyst cited a 3.9156–3.9255 resistance zone and support at 3.9002 and 3.8785. The zone has broken, and PKO BP expects upward pressure on USD/PLN to persist. This week the Fed (Wednesday) and ECB (Thursday) decisions are key."
    ],
    zrodla: [
      { nazwa: "Comparic: Kurs dolara blisko 3,93 zł. Kluczowe poziomy dla USD/PLN (12 paź 2026)", url: "https://comparic.pl/kurs-dolara-blisko-393-zl-kluczowe-poziomy-dla-usd-pln-i-eur-usd/" },
      { nazwa: "Super Biznes: Dolar o krok od 4 zł (13 paź 2026)", url: "https://superbiz.se.pl/wiadomosci/dolar-o-krok-od-4-zl-funt-najdrozszy-od-prawie-dwoch-lat-aa-53HG-mF7w-yTrZ.html" },
      { nazwa: "money.pl: Kurs dolara do złotego 26.10.2026", url: "https://www.money.pl/pieniadze/ile-kosztuje-dolar-kurs-dolara-do-zlotego-pln-usd-26-10-2026-7344105680009312a.html" },
      { nazwa: "CNBC: USD/PLN, świeca dzienna 23 paź 2026", url: "https://www.cnbc.com/quotes/PLN=" }
    ]
  },
  {
    id: "2026-10-23-dax", instrument: "dax", data: "2026-10-23", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-27", komentarz: "27 paź DAX zamknął sesję Xetra na 25 590,77 pkt (+0,7%), powyżej poziomu unieważnienia R1 25 475, zanim cena dotknęła wsparcia S1 24 800 (najniżej od publikacji: 25 014 23 paź). Źródło ceny: ARIVA.DE / dpa-AFX.", komentarz_en: "On 27 Oct the DAX closed the Xetra session at 25,590.77 (+0.7%), above the R1 invalidation level of 25,475, before price touched S1 support at 24,800 (lowest since publication: 25,014 on 23 Oct). Price source: ARIVA.DE / dpa-AFX." },
    tytul: "DAX traci po słabym PMI z Francji, celem strefa 24 800", tytul_en: "DAX slips after weak French PMI, eyeing the 24,800 zone",
    lead: "DAX zamknął piątek na 25 182 pkt, poniżej 10-dniowej średniej i wsparcia 25 325. Dopóki indeks jest pod strefą 25 450–25 475, bazą jest powrót do wsparcia 24 800.",
    lead_en: "The DAX closed Friday at 25,182, below its 10-day average and the 25,325 support. While the index stays below the 25,450–25,475 zone, a return to 24,800 support is the base case.",
    poziomy: { cena: 25182, opory: [25475, 25800], wsparcia: [24800, 24480] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Bazowo spadek do strefy 24 800–24 850 (wielokrotnie potwierdzone wsparcie i październikowe minimum 24 792), a przy jej przełamaniu do 24 480.", tekst_en: "Base case: a drop to the 24,800–24,850 zone (repeatedly confirmed support and the October low of 24,792), and on a break to 24,480." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 25 475 (górna granica strefy oporu 25 450–25 475) unieważnia scenariusz i otwiera drogę do 25 800.", tekst_en: "A daily close above 25,475 (top of the 25,450–25,475 resistance zone) invalidates the setup and opens the way to 25,800." }
    ],
    tresc: [
      "DAX zakończył piątkową sesję Xetra na 25 182 pkt (−0,8%) po dziennym minimum 25 129. Najmocniej traciły MTU Aero Engines (−4,8% po słabych wynikach Safrana), Deutsche Telekom (−3,2%) i Siemens Energy (−2,9%).",
      "Nastroje popsuły wstępne PMI: we Francji indeks złożony spadł do 48,4 pkt, poniżej progu 50, a w Niemczech do 52,8 pkt wobec oczekiwanych 53,3. Brent podrożał do około 116 USD, a w USA spadki kontynuowały spółki technologiczne.",
      "W przyszłym tygodniu zdecydują Fed (28 paź), EBC (29 paź) i wyniki Microsoftu, Alphabetu i Amazona. Analitycy onvista wskazują opór w strefie 25 450–25 475 i wsparcia 25 000 oraz 24 800–24 850, a wallstreet-online wskazuje 25 800 jako sygnał kupna i 24 792 jako minimum miesiąca."
    ],
    tresc_en: [
      "The DAX ended Friday's Xetra session at 25,182 (−0.8%) after a daily low of 25,129. MTU Aero Engines (−4.8% after weak Safran results), Deutsche Telekom (−3.2%) and Siemens Energy (−2.9%) fell the most.",
      "Flash PMIs soured the mood: France's composite fell to 48.4, below the 50 threshold, and Germany's to 52.8 versus 53.3 expected. Brent rose to about $116, and US tech stocks kept falling.",
      "Next week the Fed (28 Oct), the ECB (29 Oct) and results from Microsoft, Alphabet and Amazon will set the tone. onvista analysts cite resistance in the 25,450–25,475 zone and support at 25,000 and 24,800–24,850, while wallstreet-online sees 25,800 as a buy signal and 24,792 as the monthly low."
    ],
    zrodla: [
      { nazwa: "ad-hoc-news / Dow Jones: DAX schließt nach Frankreichs PMI 190 Punkte tiefer (23 paź 2026)", url: "https://www.ad-hoc-news.de/boerse/news/marktberichte/dax-schliesst-nach-frankreichs-pmi-190-punkte-tiefer/70400630" },
      { nazwa: "onvista: Dax verteidigt Unterstützung (21 paź 2026)", url: "https://www.onvista.de/news/2026/10-21-dax-verteidigt-unterstuetzung-dieser-widerstand-ist-nun-entscheidend-41123281-19-26566647" },
      { nazwa: "wallstreet-online: DAX: Mal hoch, mal wieder runter (20 paź 2026)", url: "https://www.wallstreet-online.de/nachricht/21549809-dax-hoch-runter" }
    ]
  },
  {
    id: "2026-10-23-zloto", instrument: "xauusd", data: "2026-10-23", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    tytul: "Złoto poniżej 4000 USD po raz pierwszy od lipca, celem strefa 3940–3960", tytul_en: "Gold below $4,000 for the first time since July, eyeing the $3,940–3,960 zone",
    lead: "Złoto wybiło się dołem z trzytygodniowej konsolidacji i w nocy spadło do 3986,74 USD. Ropa przy 100 USD podbija oczekiwania inflacyjne i szanse na podwyżkę stóp Fed, więc bazą jest dalszy spadek.",
    lead_en: "Gold broke below its three-week consolidation and fell to $3,986.74 overnight. Oil near $100 lifts inflation expectations and Fed hike odds, so a further drop is the base case.",
    poziomy: { cena: 4024, opory: [4067, 4228], wsparcia: [3950, 3873] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Bazowo spadek do czerwcowego minimum w strefie 3940–3960 (cel Societe Generale), a przy jej przełamaniu do przełamanej linii trendu przy 3873.", tekst_en: "Base case: a drop to the June low in the $3,940–3,960 zone (Societe Generale's target), and on a break to the broken trend line near $3,873." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 4067 (dolna granica przełamanej konsolidacji) unieważnia scenariusz i otwiera drogę do 4228.", tekst_en: "A daily close above $4,067 (the lower bound of the broken consolidation) invalidates the setup and opens the way to $4,228." }
    ],
    tresc: [
      "Złoto zamknęło czwartek na 4024 USD (−2,8%), a w piątek w Azji spadło do 3986,74 USD, najniżej od trzech miesięcy. Cena wybiła się dołem z konsolidacji 4067–4228, w której poruszała się przez trzy tygodnie.",
      "Głównym czynnikiem jest ropa: WTI kosztuje około 100 USD, a Trump sięgnął po ustawę Defense Production Act w sprawie paliw. Droższa energia podbija oczekiwania inflacyjne, a rynek wycenia około 80% szans na podwyżkę stóp Fed w grudniu, co zwiększa koszt trzymania złota.",
      "Według FXStreet cena jest pod 20-tygodniową średnią (4282,89), a RSI 38,75 wskazuje słabnący, ale niewyczerpany impet spadkowy. Societe Generale widzi spadek do czerwcowego minimum 3940–3960, a dalej do około 3830. Ważne będzie posiedzenie Fed w przyszłym tygodniu."
    ],
    tresc_en: [
      "Gold closed Thursday at $4,024 (−2.8%), and in Asia on Friday fell to $3,986.74, a three-month low. Price broke below the $4,067–4,228 consolidation it had held for three weeks.",
      "Oil is the main driver: WTI trades near $100, and Trump invoked the Defense Production Act over fuel. Pricier energy lifts inflation expectations, and markets price about an 80% chance of a December Fed hike, raising the cost of holding gold.",
      "According to FXStreet, price is below the 20-week average ($4,282.89), and an RSI of 38.75 points to weakening but not exhausted downside momentum. Societe Generale sees a drop to the June low of $3,940–3,960, then to about $3,830. Next week's Fed meeting will matter."
    ],
    zrodla: [
      { nazwa: "FXStreet: Gold hits fresh three-month low below $4,000 (23 paź 2026)", url: "https://www.fxstreet.com/analysis/gold-price-forecast-xau-usd-hits-fresh-three-month-low-below-4-000-amid-surging-energy-prices-202610230330" },
      { nazwa: "FXStreet: Gold extends decline as higher oil prices fuel inflation concerns (23 paź 2026)", url: "https://www.fxstreet.com/analysis/gold-extends-decline-as-higher-oil-prices-fuel-inflation-concerns-202610230507" },
      { nazwa: "Trading Economics: złoto (23 paź 2026, rano)", url: "https://tradingeconomics.com/commodity/gold" }
    ]
  },
  {
    id: "2026-10-23-srebro", instrument: "xagusd", data: "2026-10-23", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    tytul: "Srebro na najniższym poziomie od listopada 2025, celem 50 USD", tytul_en: "Silver at its lowest since November 2025, eyeing $50",
    lead: "Srebro straciło w czwartek 5,8% i w nocy zeszło poniżej 54 USD. Dopóki cena jest pod 55,50 USD, przewagę mają sprzedający.",
    lead_en: "Silver lost 5.8% on Thursday and slipped below $54 overnight. While price stays below $55.50, sellers have the edge.",
    poziomy: { cena: 54.42, opory: [55.50, 58.00], wsparcia: [50.00] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Bazowo spadek do psychologicznego poziomu 50 USD, który wskazują analitycy FXStreet.", tekst_en: "Base case: a drop to the psychological $50 level cited by FXStreet analysts." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 55,50 (najbliższy opór poziomy) unieważnia scenariusz; wyżej leży 58,00 (38,2% zniesienia spadku z maja–lipca).", tekst_en: "A daily close above $55.50 (nearest horizontal resistance) invalidates the setup; above lies $58.00 (38.2% retracement of the May–July decline)." }
    ],
    tresc: [
      "Srebro zamknęło czwartek na 54,59 USD (−5,8%) po dziennym minimum 54,46, a w piątek w Azji spadło poniżej 54 USD, najniżej od listopada 2025 roku. Zmierza do drugiego z rzędu tygodnia spadków.",
      "Presję tworzą te same czynniki co w złocie: ropa przy 100 USD, rosnące oczekiwania na podwyżkę stóp Fed i mocny dolar. W tym tygodniu cena trzykrotnie nie utrzymała się nad 58 USD.",
      "FXStreet wskazuje opór 55,50, a dalej 58,00, 60,00 i około 63,00 (23,6% zniesienia). MACD jest pod zerem, a RSI około 31,5 jest blisko wyprzedania, co może spowalniać spadek, ale nie zapowiada jeszcze odwrócenia."
    ],
    tresc_en: [
      "Silver closed Thursday at $54.59 (−5.8%) after a daily low of $54.46, and in Asia on Friday fell below $54, its lowest since November 2025. It is heading for a second straight weekly loss.",
      "The same drivers as in gold weigh: oil near $100, rising Fed hike expectations and a strong dollar. This week price failed three times to hold above $58.",
      "FXStreet cites resistance at $55.50, then $58.00, $60.00 and about $63.00 (23.6% retracement). MACD is below zero and an RSI near 31.5 is close to oversold, which may slow the decline but does not yet signal a reversal."
    ],
    zrodla: [
      { nazwa: "FXStreet: Silver slides further below $54.00, fresh YTD low (23 paź 2026)", url: "https://www.fxstreet.com/news/silver-price-forecast-xag-usd-slides-further-below-5400-fresh-ytd-low-and-counting-202610230201" },
      { nazwa: "FXStreet: Silver breaks $55 as bears target $50 (22 paź 2026)", url: "https://www.fxstreet.com/news/silver-price-forecast-xag-usd-breaks-55-as-bears-target-50-202610221848" },
      { nazwa: "Trading Economics: srebro (23 paź 2026, rano)", url: "https://tradingeconomics.com/commodity/silver" }
    ]
  },
  {
    id: "2026-10-23-ropa", instrument: "wti", data: "2026-10-23", interwal: "D1",
    kierunek: "wzrostowy", ai: true, szkic: true,
    tytul: "Ropa WTI powyżej 100 USD, kupujący celują w 105", tytul_en: "WTI crude above $100, buyers target $105",
    lead: "WTI wróciła ponad 100 USD po atakach w Arabii Saudyjskiej i decyzji Trumpa o użyciu Defense Production Act. Dopóki cena trzyma się nad 95 USD, bazą jest dalszy wzrost.",
    lead_en: "WTI is back above $100 after attacks in Saudi Arabia and Trump's move to invoke the Defense Production Act. While price holds above $95, further gains are the base case.",
    poziomy: { cena: 100.40, opory: [105, 110], wsparcia: [95, 91] },
    scenariusze: [
      { typ: "wzrostowy", tekst: "Bazowo wzrost do 105 USD, a przy trwałym wybiciu do 110 USD. Szczyt z początku wojny na Bliskim Wschodzie leży przy 113 USD.", tekst_en: "Base case: a rise to $105, and on a sustained break to $110. The peak from the start of the Middle East war is near $113." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 95 USD (pierwsze wsparcie) unieważnia scenariusz i otwiera drogę do 50-dniowej średniej przy 91 USD.", tekst_en: "A daily close below $95 (first support) invalidates the setup and opens the way to the 50-day average near $91." }
    ],
    tresc: [
      "Grudniowy kontrakt na WTI zamknął czwartek na 99,47 USD po dziennym maksimum 100,57, a rano kosztuje około 100,40 USD (+0,9%). Brent jest przy 114 USD.",
      "Ceny wspierają ataki na infrastrukturę w Arabii Saudyjskiej, doniesienia o planach kolejnych uderzeń na Iran i decyzja Trumpa o użyciu Defense Production Act w sprawie paliw, która pokazuje, że Waszyngton liczy się z napiętą podażą.",
      "Według FXStreet 100 USD to opór psychologiczny, a kolejne bariery to 105 i 110 USD. Wsparcia leżą przy 95 USD i przy 50-dniowej średniej około 91 USD. Wykres pokazuje grudniowy kontrakt."
    ],
    tresc_en: [
      "The December WTI contract closed Thursday at $99.47 after a daily high of $100.57, and this morning trades near $100.40 (+0.9%). Brent is near $114.",
      "Prices are supported by attacks on Saudi infrastructure, reports of plans for further strikes on Iran and Trump's decision to invoke the Defense Production Act over fuel, which shows Washington expects tight supply.",
      "According to FXStreet, $100 is psychological resistance, with further barriers at $105 and $110. Support lies at $95 and at the 50-day average near $91. The chart shows the December contract."
    ],
    zrodla: [
      { nazwa: "FXStreet: WTI buyers eye breakout above $100 (22 paź 2026)", url: "https://www.fxstreet.com/news/wti-oil-price-forecast-buyers-eye-breakout-above-100-as-upside-pressure-builds-202610221228" },
      { nazwa: "FXEmpire: Saudi attacks lift Brent and WTI on supply fears (22 paź 2026)", url: "https://www.fxempire.com/forecasts/article/oil-price-forecast-saudi-attacks-lift-brent-and-wti-on-supply-fears-1639721" },
      { nazwa: "Trading Economics: ropa WTI (23 paź 2026, rano)", url: "https://tradingeconomics.com/commodity/crude-oil" }
    ]
  },
  {
    id: "2026-10-23-usdjpy", instrument: "usdjpy", data: "2026-10-23", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-27", komentarz: "27 paź USD/JPY zamknął dzień na 157,94, powyżej poziomu unieważnienia R1 157,60, zanim kurs dotknął wsparcia S1 155,00 (najniżej od publikacji: 156,06 23 paź). Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 27 Oct USD/JPY closed the day at 157.94, above the R1 invalidation level of 157.60, before the rate touched S1 support at 155.00 (lowest since publication: 156.06 on 23 Oct). Price source: CNBC daily candles." },
    tytul: "USD/JPY pod presją ryzyka interwencji, celem 155,00", tytul_en: "USD/JPY under intervention-risk pressure, eyeing 155.00",
    lead: "Para wybiła się w czwartek dołem z zakresu 157,5–159 i spadła do 156,67. Wyższa inflacja bazowa w Japonii i ryzyko interwencji przemawiają za dalszym osłabieniem dolara wobec jena.",
    lead_en: "The pair broke below its 157.5–159 range on Thursday and fell to 156.67. Higher core inflation in Japan and intervention risk favour further dollar losses against the yen.",
    poziomy: { cena: 156.93, opory: [157.60, 159.00], wsparcia: [155.00, 153.90] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Bazowo spadek przez 156,40 do 155,00, a dalej do 153,90 (poziomy Orbex).", tekst_en: "Base case: a drop through 156.40 to 155.00, then to 153.90 (Orbex levels)." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 157,60 unieważnia scenariusz i otwiera drogę do 159,00.", tekst_en: "A daily close above 157.60 invalidates the setup and opens the way to 159.00." }
    ],
    tresc: [
      "USD/JPY zamknął czwartek na 156,76 (−0,9%), poniżej dolnej granicy zakresu, w którym poruszał się od tygodnia. W nocy para zeszła do 156,25, a rano odbiła do około 156,90.",
      "Inflacja bazowa w Japonii wyniosła 2,1%, a wskaźnik bez żywności i energii 2,4% wobec oczekiwanych 2,3%, co wspiera zwolenników podwyżki stóp BoJ. Rynek liczy się też z interwencją walutową. Wspiera dolara jedynie wysoka rentowność obligacji USA.",
      "Orbex wskazuje wsparcia 156,40, 155,00 i 153,90 oraz opory 157,60, 159,00 i 160,00, oceniając, że w parze dominuje presja spadkowa."
    ],
    tresc_en: [
      "USD/JPY closed Thursday at 156.76 (−0.9%), below the bottom of the range it held for a week. Overnight the pair fell to 156.25, and this morning it rebounded to about 156.90.",
      "Japan's core inflation came in at 2.1%, and the measure excluding food and energy at 2.4% versus 2.3% expected, which supports the case for a BoJ hike. Markets also price in the risk of currency intervention. Only high US yields support the dollar.",
      "Orbex cites support at 156.40, 155.00 and 153.90 and resistance at 157.60, 159.00 and 160.00, and sees downward pressure dominating the pair."
    ],
    zrodla: [
      { nazwa: "Orbex: USD/JPY technical analysis (22 paź 2026)", url: "https://www.orbex.com/blog/en/2026/10/usd-jpy-22-10-2026" },
      { nazwa: "RoboForex: USDJPY under pressure amid hawkish signals from the BoJ (21 paź 2026)", url: "https://roboforex.com/ph/beginners/analytics/forex-forecast/currencies/usd-jpy-forecast-2026-10-21/" },
      { nazwa: "Trading Economics: USD/JPY (23 paź 2026, rano)", url: "https://tradingeconomics.com/japan/currency" }
    ]
  },
  {
    id: "2026-10-23-nasdaq", instrument: "nasdaq", data: "2026-10-23", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-26", komentarz: "26 paź Nasdaq 100 zamknął sesję na 29 273 pkt (+1,1%), powyżej poziomu unieważnienia R1 29 240, zanim cena dotknęła wsparcia S1 28 745 (najniżej od publikacji: 28 826 23 paź). Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 26 Oct the Nasdaq 100 closed at 29,273 (+1.1%), above the R1 invalidation level of 29,240, before price touched S1 support at 28,745 (lowest since publication: 28,826 on 23 Oct). Price source: CNBC daily candles." },
    tytul: "Nasdaq 100 pod 29 000 po wyprzedaży półprzewodników, celem 28 745", tytul_en: "Nasdaq 100 below 29,000 after the chip selloff, eyeing 28,745",
    lead: "Indeks stracił w czwartek 2,9%, a indeks półprzewodników 6,7%. Dopóki Nasdaq 100 jest pod 29 240, bazą jest test wrześniowego minimum 28 745.",
    lead_en: "The index lost 2.9% on Thursday and the semiconductor index 6.7%. While the Nasdaq 100 is below 29,240, a test of September's 28,745 low is the base case.",
    poziomy: { cena: 28999, opory: [29240, 30000], wsparcia: [28745, 28000] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Bazowo spadek do 28 745 (minimum z września), a przy jego przełamaniu do 28 000.", tekst_en: "Base case: a drop to 28,745 (September low), and on a break to 28,000." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 29 240 (dawne wsparcie, podstawa wrześniowego wybicia) unieważnia scenariusz i otwiera drogę do 30 000.", tekst_en: "A daily close above 29,240 (former support, the base of September's breakout) invalidates the setup and opens the way to 30,000." }
    ],
    tresc: [
      "Nasdaq 100 zamknął czwartek na 28 959 pkt (−2,9%) po dziennym minimum 28 855. Indeks półprzewodników spadł o 6,7% po cięciu inwestycji przez Teslę i obawach o finansowanie spółek AI. Rano kontrakty rosną o 0,1%.",
      "W Azji przecena trwała: KOSDAQ stracił 3,5%, Kospi 2,2%, a Nikkei 1,4%. Ciążą też ropa przy 100 USD i rosnące szanse na podwyżkę stóp Fed w grudniu.",
      "StoneX wskazywał wsparcia 29 240, 29 000 i 28 745 oraz opory 30 000 i 30 370. Dwa pierwsze wsparcia zostały przełamane, więc 29 240 staje się oporem, a kolejnym celem jest wrześniowe minimum. Poniżej OneUp Trader wskazuje 28 000."
    ],
    tresc_en: [
      "The Nasdaq 100 closed Thursday at 28,959 (−2.9%) after a daily low of 28,855. The semiconductor index fell 6.7% after Tesla's capex cut and worries over AI company funding. Futures are up 0.1% this morning.",
      "The selloff continued in Asia: the KOSDAQ lost 3.5%, the Kospi 2.2% and the Nikkei 1.4%. Oil near $100 and rising odds of a December Fed hike also weigh.",
      "StoneX cited support at 29,240, 29,000 and 28,745 and resistance at 30,000 and 30,370. The first two supports have broken, so 29,240 turns into resistance and September's low is the next target. Below that, OneUp Trader cites 28,000."
    ],
    zrodla: [
      { nazwa: "StoneX: Nasdaq 100 forecast (21 paź 2026)", url: "https://www.stonex.com/en-gb/news-and-analysis/nasdaq-100-forecast-stocks-rebound-ahead-of-more-earnings-2026-10-21/" },
      { nazwa: "OneUp Trader: NASDAQ Futures technical analysis (21 paź 2026)", url: "https://blog.oneuptrader.com/analysis/technical-analysis/nasdaq-nq-technical-analysis-bulls-under-pressure-as-trendline-breaks/" },
      { nazwa: "Yournews: Wall Street slides as Nasdaq drops more than 2% (22 paź 2026)", url: "https://yournews.com/2026/10/22/7234999/wall-street-slides-as-nasdaq-drops-more-than-2-amid/" },
      { nazwa: "Trading Economics: US100 (23 paź 2026, rano)", url: "https://tradingeconomics.com/united-states/stock-market" }
    ]
  },
  {
    id: "2026-10-22-nasdaq", instrument: "nasdaq", data: "2026-10-22", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    wynik: { status: "trafiona", data: "2026-10-22", komentarz: "22 paź Nasdaq 100 spadł do 28 855 pkt, poniżej wsparcia S1 29 000, i zamknął sesję na 28 959 (−2,9%), daleko od poziomu unieważnienia R1 30 000. Analiza ukazała się przed sesją w USA, więc liczy się świeca z dnia publikacji. Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 22 Oct the Nasdaq 100 fell to 28,855, below S1 support at 29,000, and closed at 28,959 (−2.9%), far from the R1 invalidation level of 30,000. The analysis was published before the US session, so the publication-day candle counts. Price source: CNBC daily candles." },
    tytul: "Nasdaq 100 traci w nocy po wynikach Tesli, test strefy 29 000", tytul_en: "Nasdaq 100 slips overnight after Tesla results, 29,000 zone in play",
    lead: "Kontrakty na Nasdaq 100 tracą rano około 1,3% po cięciu inwestycji przez Teslę i napięciach na Bliskim Wschodzie. Indeks pozostaje pod przełamaną linią trendu, a bazą jest powrót do strefy 29 000.",
    lead_en: "Nasdaq 100 futures are down about 1.3% this morning after Tesla's capex cut and Middle East tensions. The index stays below its broken trend line, and a return to the 29,000 zone is the base case.",
    poziomy: { cena: 29359, opory: [30000, 30370], wsparcia: [29000, 28745] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Bazowo spadek do strefy 29 000–29 240 (październikowe minima i podstawa wybicia z września), a przy jej przełamaniu do 28 745 (minimum z września).", tekst_en: "Base case: a drop to the 29,000–29,240 zone (October lows and the base of September's breakout), and on a break to 28,745 (September low)." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 30 000 (przełamana linia trendu i opór psychologiczny) unieważnia scenariusz i otwiera drogę do 30 370.", tekst_en: "A daily close above 30,000 (broken trend line and psychological resistance) invalidates the setup and opens the way to 30,370." }
    ],
    tresc: [
      "Nasdaq 100 zamknął środę na 29 822 pkt (+1,1%), czwartą sesję z rzędu wyżej. W nocy kontrakty terminowe spadły o około 1,3%: Tesla obniżyła prognozę nakładów inwestycyjnych (akcje −3,3% po sesji), a Meta podniosła swoją (+2,2%), co podsyca wątpliwości wokół handlu spółkami AI.",
      "Ciąży też Bliski Wschód: Brent podrożał do około 111 USD po atakach w Arabii Saudyjskiej, a według New York Timesa USA i Izrael mają plany kolejnych uderzeń na Iran. Giełdy w Azji spadały, Kospi o 3,3%.",
      "Technicznie indeks wybił się w piątek dołem z linii trendu wzrostowego. StoneX wskazuje opór około 30 000 (tam przebiega przełamana linia) i 30 370, a wsparcia 29 240, około 29 000 i 28 745. Dopóki indeks jest pod 30 000, bazą jest konsolidacja z testem okolic 29 000."
    ],
    tresc_en: [
      "The Nasdaq 100 closed Wednesday at 29,822 (+1.1%), its fourth straight gain. Overnight futures fell about 1.3%: Tesla cut its capex forecast (shares −3.3% after hours) while Meta raised its own (+2.2%), feeding doubts about the AI trade.",
      "The Middle East also weighs: Brent rose to about $111 after attacks in Saudi Arabia, and the New York Times reports the US and Israel have plans for further strikes on Iran. Asian markets fell, the Kospi by 3.3%.",
      "Technically the index broke below its uptrend line on Friday. StoneX cites resistance around 30,000 (where the broken line runs) and 30,370, with support at 29,240, around 29,000 and 28,745. While the index is below 30,000, consolidation with a test of the 29,000 area is the base case."
    ],
    zrodla: [
      { nazwa: "StoneX: Nasdaq 100 forecast (21 paź 2026)", url: "https://www.stonex.com/en-gb/news-and-analysis/nasdaq-100-forecast-stocks-rebound-ahead-of-more-earnings-2026-10-21/" },
      { nazwa: "Bloomberg via swissinfo: US Stock Futures Drop After Earnings, Oil Gains (22 paź 2026)", url: "https://www.swissinfo.ch/eng/us-stock-futures-drop-after-earnings,-oil-gains:-markets-wrap/92254614" },
      { nazwa: "OneUp Trader: NASDAQ Futures technical analysis (21 paź 2026)", url: "https://blog.oneuptrader.com/analysis/technical-analysis/nasdaq-nq-technical-analysis-bulls-under-pressure-as-trendline-breaks/" },
      { nazwa: "Trading Economics: US100 (22 paź 2026, rano)", url: "https://tradingeconomics.com/commodity/gold" }
    ]
  },
  {
    id: "2026-10-21-dax", instrument: "dax", data: "2026-10-21", interwal: "D1",
    kierunek: "wzrostowy", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-23", komentarz: "23 paź DAX zamknął sesję Xetra na 25 182 pkt (−0,8%), poniżej wsparcia S1 25 325, zanim cena dotknęła oporu R1 25 800 (najwyżej od publikacji: 25 706 21 paź). Źródło ceny: ad-hoc-news.de (Dow Jones).", komentarz_en: "On 23 Oct the DAX closed the Xetra session at 25,182 (−0.8%), below S1 support at 25,325, before price touched R1 resistance at 25,800 (highest since publication: 25,706 on 21 Oct). Price source: ad-hoc-news.de (Dow Jones)." },
    tytul: "DAX wybił się z oporu 25 450–25 500, celem 25 800–26 000", tytul_en: "DAX breaks out of 25,450–25,500 resistance, eyeing 25,800–26,000",
    lead: "DAX zamknął się na najwyższym poziomie od miesiąca po mocnym starcie sezonu wyników. Dopóki indeks trzyma się powyżej 10-dniowej średniej (25 325), przewagę mają kupujący.",
    lead_en: "The DAX closed at a one-month high after a strong start to earnings season. As long as it holds above the 10-day average (25,325), buyers have the edge.",
    poziomy: { cena: 25647, opory: [25800, 26000], wsparcia: [25325, 24825] },
    scenariusze: [
      { typ: "wzrostowy", tekst: "Bazowo kontynuacja wzrostu w stronę 25 800, a dalej 26 000. Strefa 25 450–25 500, która od początku października była oporem, powinna teraz działać jako wsparcie.", tekst_en: "Base case: further gains toward 25,800 and then 26,000. The 25,450–25,500 zone, resistance since early October, should now act as support." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 25 325 (10-dniowa EMA) unieważnia scenariusz i kieruje indeks na podwójne dno 24 825–24 789.", tekst_en: "A daily close below 25,325 (10-day EMA) invalidates the setup and targets the double bottom at 24,825–24,789." }
    ],
    tresc: [
      "DAX zakończył środową sesję Xetra na 25 647,11 pkt (+1,35%), najwyżej od około miesiąca. Rano spadł do 25 250, a w ciągu dnia doszedł do 25 706. Najmocniej rosły SAP (+3,5% przed wynikami po sesji), Airbus, Bayer i Siemens; Adidas podniósł prognozę zysku na 2026 rok.",
      "Technicznie indeks pokonał strefę 25 450–25 500, na której zatrzymywał się od początku października. ING wskazuje kolejne opory 25 650, 25 800 i okolice 26 000, a wsparcie w 10-dniowej średniej wykładniczej (25 325) i w podwójnym dnie 24 825/24 789.",
      "Ryzykiem są wyniki SAP po sesji (22:05), wstępne PMI w czwartek 23 paź i decyzja EBC w przyszłym tygodniu (28–29 paź)."
    ],
    tresc_en: [
      "The DAX ended Wednesday's Xetra session at 25,647.11 (+1.35%), its highest in about a month. It dipped to 25,250 in the morning and reached 25,706 intraday. SAP (+3.5% ahead of results after the close), Airbus, Bayer and Siemens led gains; Adidas raised its 2026 profit guidance.",
      "Technically the index cleared the 25,450–25,500 zone that had capped it since early October. ING names further resistance at 25,650, 25,800 and around 26,000, with support at the 10-day exponential average (25,325) and the double bottom at 24,825/24,789.",
      "Risks are SAP's results after the close (22:05 Warsaw time), flash PMIs on Thursday 23 Oct and next week's ECB decision (28–29 Oct)."
    ],
    zrodla: [
      { nazwa: "MS Aktuell: DAX auf Vierwochenhoch (21 paź 2026)", url: "https://ms-aktuell.de/welt/dax-vierwochenhoch-21-10-2026/" },
      { nazwa: "wallstreet-online / ING Markets: DAX – Tiefe Korrektur vorbei? (21 paź 2026)", url: "https://www.wallstreet-online.de/nachricht/21558344-dax-tiefe-korrektur-vorbei" }
    ]
  },
  {
    id: "2026-10-18-zloto", instrument: "xauusd", data: "2026-10-18", interwal: "D1",
    kierunek: "neutralny", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-22", komentarz: "22 paź złoto zamknęło dzień na 4024,1 USD (−2,8%), poniżej dolnej granicy zakresu S1 4096. Świeca dzienna zamknęła się poza zakresem S1–R1. Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 22 Oct gold closed the day at $4,024.1 (−2.8%), below the S1 lower bound of $4,096. The daily candle closed outside the S1–R1 range. Price source: CNBC daily candles." },
    tytul: "Złoto w zakresie 4096–4240, przewaga strony podażowej", tytul_en: "Gold ranges between 4,096 and 4,240, sellers hold a slight edge",
    lead: "Wysoka inflacja w USA i rentowności 10-latek powyżej 5% hamują złoto. Dopóki cena nie wyjdzie z zakresu, bazą jest konsolidacja.",
    lead_en: "Hot US inflation and 10-year yields above 5% are capping gold. Until price breaks out of the range, consolidation is the base case.",
    poziomy: { cena: 4166, opory: [4240, 4331], wsparcia: [4096, 3970] },
    scenariusze: [
      { typ: "neutralny", tekst: "Bazowo handel między 4096 a 4240 do posiedzenia Fed 27–28 paź.", tekst_en: "Base case: trading between 4,096 and 4,240 into the 27–28 Oct Fed meeting." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 4096 otwiera drogę do 4000–3970.", tekst_en: "A daily close below 4,096 opens the way to 4,000–3,970." },
      { typ: "wzrostowy", tekst: "Zamknięcie powyżej 4240 (100-dniowa średnia) kieruje cenę na 4307–4331.", tekst_en: "A close above 4,240 (100-day average) targets 4,307–4,331." }
    ],
    tresc: [
      "Złoto zakończyło tydzień w okolicach 4166 USD, tracąc około 0,7%. Wrześniowa inflacja CPI w USA wyniosła 3,7% r/r przy oczekiwanych 3,6%, a dane PPI także zaskoczyły w górę. Według Kitco rynek wycenia około 90% szans na podwyżkę stóp Fed w grudniu.",
      "Technicznie cena porusza się między strefą 4096–4104, której rynek dotąd nie przebił na zamknięciu dnia, a oporem 4200–4240, gdzie przebiegają 20- i 100-dniowa średnia. Minimum z 14 paź to 4073.",
      "Analitycy są podzieleni: TD Securities widzi konsolidację z przechyłem w dół, RoboForex cel 3970, a Forex.com pozostaje ostrożnie pozytywny, dopóki cena trzyma się powyżej 4096."
    ],
    tresc_en: [
      "Gold ended the week near $4,166, down about 0.7%. US September CPI came in at 3.7% y/y versus 3.6% expected, and PPI also surprised to the upside. According to Kitco, markets price roughly a 90% chance of a Fed hike in December.",
      "Technically, price is stuck between the 4,096–4,104 zone, which has not been broken on a daily close, and resistance at 4,200–4,240 where the 20- and 100-day averages sit. The 14 Oct low is 4,073.",
      "Analysts are split: TD Securities sees a range tilting lower, RoboForex targets 3,970, and Forex.com stays cautiously constructive while price holds above 4,096."
    ],
    zrodla: [
      { nazwa: "Kitco: Gold set for weekly drop (16 paź 2026)", url: "https://www.kitco.com/news/off-the-wire/2026-10-16/gold-set-weekly-drop-traders-assess-fed-signals" },
      { nazwa: "FXStreet: Gold stumbles as US yields eclipse fading October Fed hike bets", url: "https://www.fxstreet.com/news/gold-stumbles-as-us-yields-eclipse-fading-october-fed-hike-bets-202610161921" },
      { nazwa: "Forex.com: Gold price short-term outlook (15 paź 2026)", url: "https://www.forex.com/en-us/news-and-analysis/gold-price-short-term-outlook-xau-usd-holds-critical-support-as-breakout-nears-10-15-2026/" },
      { nazwa: "RoboForex: XAU/USD forecast (16 paź 2026)", url: "https://roboforex.com/beginners/analytics/forex-forecast/gold/xau-usd-gold-forecast-2026-10-16/" }
    ]
  },
  {
    id: "2026-10-18-srebro", instrument: "xagusd", data: "2026-10-18", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    wynik: { status: "trafiona", data: "2026-10-22", komentarz: "22 paź srebro spadło do 54,46 USD, poniżej wsparcia S1 55,40, zanim jakakolwiek świeca dzienna zamknęła się powyżej R1 59,37 (najwyższe zamknięcie od publikacji: 57,97 20 paź). Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 22 Oct silver fell to $54.46, below S1 support at $55.40, before any daily candle closed above R1 at $59.37 (highest close since publication: $57.97 on 20 Oct). Price source: CNBC daily candles." },
    tytul: "Srebro pod presją, celem minimum tygodnia 55,40", tytul_en: "Silver under pressure, targeting the weekly low at 55.40",
    lead: "Srebro straciło około 9% w miesiąc i trzyma się poniżej oporu 59,37. Rosnące rentowności i ryzyko podwyżki stóp Fed sprzyjają spadkom.",
    lead_en: "Silver has lost about 9% in a month and stays below resistance at 59.37. Rising yields and Fed hike risk favour the downside.",
    poziomy: { cena: 57.05, opory: [59.37, 63.06], wsparcia: [55.40, 54.39] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Spadek do 55,40, a po jego przebiciu do 54,39 i dalej do 50.", tekst_en: "A drop to 55.40, and below it to 54.39 and then 50." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 59,37 unieważnia scenariusz spadkowy i otwiera drogę do 60–63.", tekst_en: "A daily close above 59.37 invalidates the bearish view and opens the way to 60–63." }
    ],
    tresc: [
      "Srebro kończyło piątek w okolicach 57,05 USD (−0,7% d/d według Kitco). Miesiąc wcześniej kosztowało 63,68, więc spadek sięga około 9%.",
      "Najbliższe wsparcie to minimum tygodnia 55,38–55,40, a niżej roczne minimum 54,77 i 54,39. Opór stanowi szczyt z 14 paź na 59,37, a wyżej 100- i 50-dniowa średnia (63,06 i 63,98).",
      "FXStreet wskazuje, że RSI zbliża się do strefy wyprzedania, więc możliwe jest krótkie odbicie przed kontynuacją spadków."
    ],
    tresc_en: [
      "Silver finished Friday near $57.05 (−0.7% d/d according to Kitco). A month earlier it traded at 63.68, a drop of about 9%.",
      "The nearest support is the weekly low at 55.38–55.40, then the yearly low of 54.77 and 54.39. Resistance is the 14 Oct high at 59.37, with the 100- and 50-day averages higher up (63.06 and 63.98).",
      "FXStreet notes the RSI is nearing oversold territory, so a short bounce is possible before the decline resumes."
    ],
    zrodla: [
      { nazwa: "FXStreet: Silver price forecast, bears target 55 (16 paź 2026)", url: "https://www.fxstreet.com/news/silver-price-forecast-bears-target-55-as-rsi-nears-oversold-202610161923" },
      { nazwa: "Kitco: Gold set for weekly drop (16 paź 2026)", url: "https://www.kitco.com/news/off-the-wire/2026-10-16/gold-set-weekly-drop-traders-assess-fed-signals" },
      { nazwa: "Fortune: Current price of silver (16 paź 2026)", url: "https://fortune.com/article/current-price-of-silver-10-16-2026/" }
    ]
  },
  {
    id: "2026-10-18-ropa", instrument: "wti", data: "2026-10-18", interwal: "D1",
    kierunek: "wzrostowy", ai: true, szkic: true,
    wynik: { status: "trafiona", data: "2026-10-22", komentarz: "22 paź grudniowy kontrakt na WTI doszedł do 100,57 USD, powyżej R1 104,44 przeliczonego na nowy kontrakt (99,32), zanim świeca dzienna zamknęła się poniżej S1 (najniższe zamknięcie: 97,15 21 paź wobec S1 93,11 po przeliczeniu). Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 22 Oct the December WTI contract reached $100.57, above R1 of $104.44 converted to the new contract ($99.32), before a daily candle closed below S1 (lowest close: $97.15 on 21 Oct versus converted S1 of $93.11). Price source: CNBC daily candles." },
    korektaWykresu: { o: -5.12, od: "2026-10-21", opis: "Wykres pokazuje kontrakt grudniowy. Poziomy z analizy i świece kontraktu listopadowego (do 20 paź) przesunięto o −5,12 USD, czyli różnicę między kontraktami z 19 paź (103,66 i 98,54).", opis_en: "The chart shows the December contract. Analysis levels and November-contract candles (up to 20 Oct) are shifted by −$5.12, the spread between the contracts on 19 Oct (103.66 and 98.54)." },
    tytul: "Ropa WTI powyżej 100 USD, trend wzrostowy trzyma", tytul_en: "WTI above $100, the uptrend holds",
    lead: "WTI zyskała ponad 10% w tydzień po atakach w cieśninie Ormuz i dużym spadku zapasów w USA. Dopóki cena jest powyżej 98,23, przewagę mają kupujący.",
    lead_en: "WTI gained over 10% on the week after attacks in the Strait of Hormuz and a large US inventory draw. Buyers stay in control while price holds above 98.23.",
    poziomy: { cena: 101.41, opory: [104.44, 110.08], wsparcia: [98.23, 95.19] },
    scenariusze: [
      { typ: "wzrostowy", tekst: "Utrzymanie się nad 100 USD otwiera drogę do 104,44, a dalej do 110.", tekst_en: "Holding above $100 opens the way to 104.44 and then 110." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 98,23 sygnalizuje głębszą korektę w stronę 95,19–94,28.", tekst_en: "A daily close below 98.23 signals a deeper pullback toward 95.19–94.28." }
    ],
    tresc: [
      "Listopadowy kontrakt na WTI zamknął piątek na 101,41 USD (+3,5% d/d, +10,4% w tygodniu). Brent kosztuje 109,86 USD, najwięcej od maja.",
      "Za wzrostami stoją miny i ataki na tankowce w cieśninie Ormuz (ruch spadł do około 68% stanu sprzed wojny), ataki Huti na cele w Arabii Saudyjskiej oraz spadek zapasów ropy w USA o 8,6 mln baryłek przy oczekiwanych 0,3 mln.",
      "Ryzykiem dla wzrostów jest uwolnienie rezerw przez IEA i USA. Poziomy powyżej 100 USD są słabo przetestowane, bo większość analiz powstała, gdy cena była w rejonie 95–98."
    ],
    tresc_en: [
      "The November WTI contract settled Friday at $101.41 (+3.5% d/d, +10.4% on the week). Brent is at $109.86, its highest since May.",
      "The rally is driven by mines and tanker attacks in the Strait of Hormuz (traffic is down to about 68% of pre-war levels), Houthi strikes on Saudi targets, and an 8.6M barrel US crude draw versus 0.3M expected.",
      "The risk to the upside is reserve releases by the IEA and the US. Levels above $100 are thinly tested, since most analyses were written with price at 95–98."
    ],
    zrodla: [
      { nazwa: "EnergyNow: Oil surges as Middle East supply fears push Brent near 110", url: "https://energynow.com/2026/10/oil-surges-as-middle-east-supply-fears-push-brent-near-110-and-wti-above-100-both-post-strong-weekly-gains/" },
      { nazwa: "OilPrice: WTI outpaces Brent as US crude draw ignites fresh buying", url: "https://oilprice.com/Energy/Energy-General/WTI-Outpaces-Brent-as-US-Crude-Draw-Ignites-Fresh-Buying.html" },
      { nazwa: "FXEmpire: Natural gas and oil forecast, can WTI break 98.23", url: "https://www.fxempire.com/forecasts/article/natural-gas-and-oil-forecast-8-6m-barrel-draw-hormuz-risk-can-wti-break-98-23-1638564" }
    ]
  },
  {
    id: "2026-10-18-bitcoin", instrument: "btcusd", data: "2026-10-18", interwal: "D1",
    kierunek: "neutralny", ai: true, szkic: true,
    wynik: { status: "trafiona", data: "2026-10-28", komentarz: "Przez cały 10-dniowy horyzont (19–28 paź) żadna świeca dzienna nie zamknęła się poza zakresem S1–R1 (79 676–84 262). Najniższe zamknięcie: 80 009 (26 paź), najwyższe: 84 025 (21 paź). Źródło ceny: świece dzienne Coinbase.", komentarz_en: "Throughout the 10-day horizon (19–28 Oct) no daily candle closed outside the S1–R1 range (79,676–84,262). Lowest close: 80,009 (26 Oct), highest: 84,025 (21 Oct). Price source: Coinbase daily candles." },
    tytul: "Bitcoin w impasie między 79 700 a 84 300", tytul_en: "Bitcoin stuck between 79,700 and 84,300",
    lead: "Bitcoin trzyma się w rejonie średniego kosztu zakupu przez ETF-y (około 81 500). Odpływy z funduszy i awersja do ryzyka ciążą, ale wsparcia na razie trzymają.",
    lead_en: "Bitcoin is holding around the average ETF cost basis (about 81,500). Fund outflows and risk aversion weigh on it, but supports are holding for now.",
    poziomy: { cena: 81960, opory: [84262, 87374], wsparcia: [79676, 77500] },
    scenariusze: [
      { typ: "neutralny", tekst: "Bazowo konsolidacja między minimum (79 676) a maksimum tygodnia (84 262).", tekst_en: "Base case: consolidation between the weekly low (79,676) and high (84,262)." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 79 676 otwiera drogę do 77 500–78 000.", tekst_en: "A daily close below 79,676 opens the way to 77,500–78,000." },
      { typ: "wzrostowy", tekst: "Zamknięcie powyżej 84 262 kieruje cenę na 87 000–87 400.", tekst_en: "A close above 84,262 targets 87,000–87,400." }
    ],
    tresc: [
      "W niedzielę rano bitcoin kosztował około 81 960 USD (Coinbase), o 1,3% mniej niż tydzień wcześniej. Maksimum tygodnia to 84 262 (12 paź), minimum 79 676 (15 paź).",
      "Z ETF-ów na bitcoina odpłynęło w tygodniu około 228 mln USD, a w czwartek zlikwidowano pozycje warte około 1 mld USD. Piątkowa wyprzedaż na Nasdaq i wzrost VIX pokazują, że bitcoin porusza się razem z nastrojami na rynku akcji.",
      "Krótkie średnie wskazują w dół, dłuższe nadal wspierają. Kluczowe będzie posiedzenie Fed 27–28 paź."
    ],
    tresc_en: [
      "On Sunday morning bitcoin traded near $81,960 (Coinbase), 1.3% lower than a week earlier. The weekly high was 84,262 (12 Oct) and the low 79,676 (15 Oct).",
      "Spot bitcoin ETFs saw about $228M of outflows on the week, and roughly $1B of positions were liquidated on Thursday. Friday's Nasdaq selloff and the VIX jump show bitcoin moving with equity sentiment.",
      "Short-term averages point lower while longer ones remain supportive. The 27–28 Oct Fed meeting will be key."
    ],
    zrodla: [
      { nazwa: "Bitcoin News Digest (18 paź 2026)", url: "https://bitcoinnewsdigest.substack.com/p/bitcoin-news-digest-october-18-2026" },
      { nazwa: "CoinDesk: Wall Street freaked out Friday, VIX and bitcoin say it may not last", url: "https://www.coindesk.com/markets/2026/10/18/wall-street-freaked-out-friday-vix-and-bitcoin-say-it-may-not-last" },
      { nazwa: "Bitcoin.com: Bitcoin price at 81,500 leaves bulls and bears at a standoff", url: "https://news.bitcoin.com/market-updates/bitcoin-price-at-81500-leaves-bulls-and-bears-at-a-standoff/" }
    ]
  },
  {
    id: "2026-10-18-eurusd", instrument: "eurusd", data: "2026-10-18", interwal: "D1",
    kierunek: "neutralny", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-27", komentarz: "27 paź EUR/USD zamknął dzień na 1,1122, poniżej dolnej granicy zakresu S1 1,1160. Świeca dzienna zamknęła się poza zakresem S1–R1. Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 27 Oct EUR/USD closed the day at 1.1122, below the S1 lower bound of 1.1160. The daily candle closed outside the S1–R1 range. Price source: CNBC daily candles." },
    tytul: "EUR/USD odbija od tegorocznego minimum, opór 1,1300", tytul_en: "EUR/USD bounces off the yearly low, resistance at 1.1300",
    lead: "Para przerwała serię pięciu spadkowych tygodni. Krótkoterminowo trwa odbicie, ale dopóki kurs jest poniżej 1,1300, średnioterminowy obraz pozostaje spadkowy.",
    lead_en: "The pair snapped a five-week losing streak. A short-term bounce is under way, but below 1.1300 the medium-term picture stays bearish.",
    poziomy: { cena: 1.1230, opory: [1.1300, 1.1365], wsparcia: [1.1160, 1.1110] },
    scenariusze: [
      { typ: "neutralny", tekst: "Bazowo handel między 1,1160 a 1,1300 przed posiedzeniami Fed i EBC.", tekst_en: "Base case: trading between 1.1160 and 1.1300 ahead of the Fed and ECB meetings." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 1,1300 (20-dniowa średnia) otwiera drogę do 1,1365.", tekst_en: "A daily close above 1.1300 (20-day average) opens the way to 1.1365." },
      { typ: "spadkowy", tekst: "Powrót poniżej 1,1160 kieruje kurs na tegoroczne minimum 1,1113 i 1,1100.", tekst_en: "A drop back below 1.1160 targets the yearly low at 1.1113 and 1.1100." }
    ],
    tresc: [
      "EUR/USD zakończył tydzień w okolicach 1,1230–1,1250 po odbiciu od tegorocznego minimum 1,1113 z 15 paź. To pierwszy wzrostowy tydzień od pięciu.",
      "Po stronie USA inflacja CPI wynosi 3,7% r/r, a według FXStreet rynek wycenia około 80% szans na podwyżkę stóp Fed w grudniu. W strefie euro inflacja HICP to 3,8% r/r, stopa depozytowa EBC 2,50%, a ankieta Reuters także wskazuje podwyżkę w grudniu.",
      "Ryzykiem dla euro są napięcia budżetowe we Włoszech i Francji oraz ropa w okolicach 100 USD."
    ],
    tresc_en: [
      "EUR/USD ended the week near 1.1230–1.1250 after bouncing off the yearly low of 1.1113 on 15 Oct. It was the first up week in five.",
      "In the US, CPI inflation is 3.7% y/y and according to FXStreet markets price about an 80% chance of a Fed hike in December. In the euro area HICP inflation is 3.8% y/y, the ECB deposit rate is 2.50%, and a Reuters poll also points to a December hike.",
      "Risks for the euro include fiscal strain in Italy and France and oil near $100."
    ],
    zrodla: [
      { nazwa: "FXStreet: EUR/USD weekly forecast, US dollar future in the hands of Kevin Warsh", url: "https://www.fxstreet.com/analysis/eur-usd-weekly-forecast-us-dollar-future-in-the-hands-of-kevin-warsh-202610161526" },
      { nazwa: "Forex.com: EUR/USD snaps five-week slide at critical support (17 paź 2026)", url: "https://forex.com/en-us/news-and-analysis/euro-technical-forecast-eur-usd-snaps-five-week-slide-at-critical-support-10-17-2026" },
      { nazwa: "RoboForex: EUR/USD weekly forecast 19 paź 2026", url: "https://roboforex.com/beginners/analytics/forex-forecast/currencies/eur-usd-weekly-forecast-2026-10-19/" }
    ]
  },
  {
    id: "2026-10-18-gbpusd", instrument: "gbpusd", data: "2026-10-18", interwal: "D1",
    kierunek: "wzrostowy", ai: true, szkic: true,
    tytul: "GBP/USD wybija 1,3350, rynek liczy na podwyżkę BoE", tytul_en: "GBP/USD breaks 1.3350 as markets bet on a BoE hike",
    lead: "Funt zyskał po sygnałach, że Bank Anglii podniesie stopy 5 lis. Krótkoterminowo trend jest wzrostowy, ale RSI wskazuje na wykupienie.",
    lead_en: "Sterling gained on signs the Bank of England will hike on 5 Nov. The short-term trend is up, though the RSI shows overbought conditions.",
    poziomy: { cena: 1.3350, opory: [1.3435, 1.3650], wsparcia: [1.3268, 1.3135] },
    scenariusze: [
      { typ: "wzrostowy", tekst: "Test 200-dniowej średniej na 1,3435, a po jej pokonaniu ruch w stronę 1,3650.", tekst_en: "A test of the 200-day average at 1.3435, and above it a move toward 1.3650." },
      { typ: "spadkowy", tekst: "Zamknięcie dnia poniżej 1,3268 unieważnia wybicie i otwiera drogę do 1,3135.", tekst_en: "A daily close below 1.3268 invalidates the breakout and opens the way to 1.3135." }
    ],
    tresc: [
      "GBP/USD zyskał w piątek około 0,6% i przebił 1,3350, a tydzień zakończył wzrostową formacją objęcia (outside week) po dotknięciu tegorocznego minimum w okolicach 1,3135.",
      "W ankiecie Reutersa 54 z 63 ekonomistów spodziewa się podwyżki stopy BoE z 3,75% do 4,00% na posiedzeniu 5 lis. 28 paź rząd przedstawi budżet, który może zwiększyć zmienność funta.",
      "Scotiabank wskazuje cel w rejonie 1,3650, ale RSI na poziomie 72 sugeruje możliwy powrót do 1,3268 przed dalszymi wzrostami."
    ],
    tresc_en: [
      "GBP/USD rose about 0.6% on Friday and broke 1.3350, ending the week with a bullish outside range after touching the yearly low near 1.3135.",
      "In a Reuters poll, 54 of 63 economists expect the BoE to raise Bank Rate from 3.75% to 4.00% on 5 Nov. The government presents its budget on 28 Oct, which could add volatility.",
      "Scotiabank points to 1.3650, but an RSI of 72 suggests a possible pullback to 1.3268 before further gains."
    ],
    zrodla: [
      { nazwa: "FXStreet: GBP/USD breaks 1.3350 as Warsh stays vague, BoE hike bets build", url: "https://www.fxstreet.com/news/pound-sterling-price-news-and-forecast-gbp-usd-breaks-13350-as-warsh-stays-vague-boe-hike-bets-build-202610161635" },
      { nazwa: "FXStreet: British pound weekly outside reversal eyes 1.3650 (Scotiabank)", url: "https://www.fxstreet.com/news/british-pound-weekly-outside-reversal-eyes-13650-against-us-dollar-scotiabank-202610161728" },
      { nazwa: "Yahoo Finance: US dollar price forecast (Warsh)", url: "https://finance.yahoo.com/markets/currencies/articles/us-dollar-price-forecast-warsh-082128574.html" }
    ]
  },
  {
    id: "2026-10-18-usdjpy", instrument: "usdjpy", data: "2026-10-18", interwal: "D1",
    kierunek: "neutralny", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-22", komentarz: "22 paź USD/JPY zamknął dzień na 156,76, poniżej dolnej granicy zakresu S1 157,50. Świeca dzienna zamknęła się poza zakresem S1–R1. Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 22 Oct USD/JPY closed the day at 156.76, below the S1 lower bound of 157.50. The daily candle closed outside the S1–R1 range. Price source: CNBC daily candles." },
    tytul: "USD/JPY w wąskim zakresie 157,50–159,00", tytul_en: "USD/JPY in a tight 157.50–159.00 range",
    lead: "Zmienność na USD/JPY jest historycznie niska. Ostrzeżenia przed interwencją ograniczają wzrosty, a wysokie rentowności w USA hamują spadki.",
    lead_en: "USD/JPY volatility is historically low. Intervention warnings cap the upside, while high US yields limit the downside.",
    poziomy: { cena: 157.89, opory: [159.00, 160.40], wsparcia: [157.50, 156.50] },
    scenariusze: [
      { typ: "neutralny", tekst: "Bazowo handel między 157,50 a 159,00 do posiedzeń Fed (28 paź) i BoJ (29–30 paź).", tekst_en: "Base case: trading between 157.50 and 159.00 into the Fed (28 Oct) and BoJ (29–30 Oct) meetings." },
      { typ: "wzrostowy", tekst: "Zamknięcie powyżej 159,00 kieruje kurs na 159,50–160,40, gdzie rośnie ryzyko interwencji.", tekst_en: "A close above 159.00 targets 159.50–160.40, where intervention risk rises." },
      { typ: "spadkowy", tekst: "Zamknięcie poniżej 157,50 otwiera drogę do 156,50 i 155,50.", tekst_en: "A close below 157.50 opens the way to 156.50 and 155.50." }
    ],
    tresc: [
      "USD/JPY kończył tydzień w okolicach 157,90–158,00, o około 0,2% niżej niż tydzień wcześniej. Od kilku sesji kurs porusza się między 157,50 a 159,00.",
      "Bank Japonii trzyma stopę na 1,25%, ale członkini zarządu Koeda brzmi jastrzębio i posiedzenie 29–30 paź może zapowiedzieć kolejną podwyżkę. Minister finansów Katayama ostrzega przed nadmiernym osłabieniem jena.",
      "Po stronie USA rentowność 10-latek wynosi około 5,1%, co wspiera dolara, choć rynek nieco ograniczył oczekiwania co do podwyżek Fed."
    ],
    tresc_en: [
      "USD/JPY ended the week near 157.90–158.00, about 0.2% lower than a week earlier. For several sessions the pair has traded between 157.50 and 159.00.",
      "The Bank of Japan holds its rate at 1.25%, but board member Koeda sounds hawkish and the 29–30 Oct meeting may signal the next hike. Finance Minister Katayama warns against excessive yen weakness.",
      "On the US side, the 10-year yield is around 5.1%, which supports the dollar, although markets have trimmed Fed hike expectations somewhat."
    ],
    zrodla: [
      { nazwa: "Forex.com: USD/JPY weekly outlook, volatility has left the building", url: "https://forex.com/en-us/news-and-analysis/usd-jpy-weekly-outlook-volatility-has-left-the-building" },
      { nazwa: "RoboForex: USD/JPY forecast (15 paź 2026)", url: "https://roboforex.com/beginners/analytics/forex-forecast/currencies/usd-jpy-forecast-2026-10-15/" },
      { nazwa: "CapitalStreetFX: Daily forex report 16 paź 2026", url: "https://www.capitalstreetfx.com/market-analysis/daily-forex-report-16-oct-2026/" }
    ]
  },
  {
    id: "2026-10-18-usdpln", instrument: "usdpln", data: "2026-10-18", interwal: "D1",
    kierunek: "neutralny", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-23", komentarz: "23 paź USD/PLN zamknął dzień na 3,9264, powyżej górnej granicy zakresu R1 3,9211. Świeca dzienna zamknęła się poza zakresem S1–R1. Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 23 Oct USD/PLN closed the day at 3.9264, above the R1 upper bound of 3.9211. The daily candle closed outside the S1–R1 range. Price source: CNBC daily candles." },
    tytul: "USD/PLN w okolicach 3,88, złoty odrabia straty", tytul_en: "USD/PLN near 3.88 as the zloty recovers",
    lead: "Słabszy dolar po wypowiedziach prezesa Fed pomógł złotemu. Kurs testuje październikowe minimum 3,8762; opór to niedawny szczyt 3,9211.",
    lead_en: "A softer dollar after the Fed chair's comments helped the zloty. The rate is testing the October low of 3.8762; resistance is the recent high at 3.9211.",
    poziomy: { cena: 3.8827, opory: [3.9211, 4.0000], wsparcia: [3.8762] },
    scenariusze: [
      { typ: "neutralny", tekst: "Bazowo wahania między 3,8762 a 3,9211 do posiedzenia Fed.", tekst_en: "Base case: swings between 3.8762 and 3.9211 into the Fed meeting." },
      { typ: "spadkowy", tekst: "Zamknięcie poniżej 3,8762 oznacza dalsze umocnienie złotego.", tekst_en: "A close below 3.8762 points to further zloty strength." },
      { typ: "wzrostowy", tekst: "Powrót powyżej 3,9211 kieruje kurs w stronę 4,00.", tekst_en: "A move back above 3.9211 targets 4.00." }
    ],
    tresc: [
      "Kurs średni NBP z 16 paź wyniósł 3,8827 zł. Dolar tracił po tym, jak prezes Fed Kevin Warsh nie dał jasnych sygnałów przed posiedzeniem 27–28 paź, a część inwestorów realizowała zyski.",
      "Stopa referencyjna RPP wynosi 3,75%. Według dostępnych źródeł możliwa jest podwyżka w listopadzie, jeśli inflacja utrzyma się powyżej 3,5%.",
      "W średnim terminie wysokie dane o inflacji w USA wspierają dolara, dlatego przed decyzją Fed bazą jest zakres, a nie trend."
    ],
    tresc_en: [
      "The NBP fixing on 16 Oct was 3.8827. The dollar weakened after Fed Chair Kevin Warsh gave no clear signal before the 27–28 Oct meeting, and some investors took profits.",
      "The Polish reference rate is 3.75%. According to available sources, a November hike is possible if inflation stays above 3.5%.",
      "In the medium term, hot US inflation data supports the dollar, so the base case before the Fed decision is a range rather than a trend."
    ],
    zrodla: [
      { nazwa: "Comparic: Dolar kolejny dzień mocno traci (16 paź 2026)", url: "https://comparic.pl/dolar-kolejny-dzien-mocno-traci-co-dzieje-sie-z-kursami-dolara-euro-franka-i-funta-16-10-2026/" },
      { nazwa: "MyBank: Kursy walut w piątek 16 paź 2026", url: "https://mybank.pl/news/35857-kursy-walut-w-piatek-16-pazdziernika-2026-dolar-po-3-88-zl-frank-powyzej-4-71-zl.html" },
      { nazwa: "Comparic: Dolar wraca poniżej 3,90 zł (15 paź 2026)", url: "https://comparic.pl/dolar-wraca-ponizej-390-zl-kurs-zlotego-zyskuje-15-pazdziernika-2026-r/" }
    ]
  },
  {
    id: "2026-10-18-nasdaq", instrument: "nasdaq", data: "2026-10-18", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-21", komentarz: "21 paź Nasdaq 100 zamknął sesję na 29 822 pkt (+1,1%), powyżej poziomu unieważnienia R1 29 750, zanim cena dotknęła wsparcia S1 28 740 (najniżej od publikacji: 29 209 20 paź). Źródło ceny: świece dzienne CNBC.", komentarz_en: "On 21 Oct the Nasdaq 100 closed at 29,822 (+1.1%), above the R1 invalidation level of 29,750, before price touched S1 support at 28,740 (lowest since publication: 29,209 on 20 Oct). Price source: CNBC daily candles." },
    tytul: "Nasdaq 100 po wyprzedaży spółek AI, presja w dół", tytul_en: "Nasdaq 100 after the AI selloff, pressure stays lower",
    lead: "Indeks stracił 5,5% w tydzień i zamknął piątek przy dziennym minimum. Obawy o zadłużenie spółek AI i ryzyko podwyżki stóp Fed przeważają.",
    lead_en: "The index lost 5.5% on the week and closed Friday at its daily low. Worries over AI company debt and Fed hike risk dominate.",
    poziomy: { cena: 29188, opory: [29750, 30500], wsparcia: [28740, 28200] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Spadek do 28 740 (61,8% zniesienia), a dalej do 28 200.", tekst_en: "A drop to 28,740 (61.8% retracement), then to 28,200." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 29 750 (50-dniowa średnia) unieważnia scenariusz spadkowy.", tekst_en: "A daily close above 29,750 (50-day average) invalidates the bearish view." }
    ],
    tresc: [
      "Nasdaq 100 zamknął piątek na 29 187,55 pkt (−2,5% d/d, −5,5% w tygodniu). Indeks półprzewodników spadł w tygodniu o 11,4%, a VIX zamknął powyżej 20.",
      "Wyprzedaż zaczęła się od obaw o zadłużenie spółek AI, zwłaszcza CoreWeave. Do tego dochodzą inflacja CPI na poziomie 3,7% i rentowność 10-latek około 5,1%, które podbijają szanse na podwyżkę stóp Fed w grudniu.",
      "Kluczowe w tym tygodniu będą wyniki Netflixa (20 paź) oraz Tesli i Mety (21 paź). Strefa 29 200–29 250 (50% zniesienia i 100-dniowa średnia) została w piątek zaatakowana; zamknięcie poniżej niej analitycy FTA traktują jako sygnał spadkowy."
    ],
    tresc_en: [
      "The Nasdaq 100 closed Friday at 29,187.55 (−2.5% d/d, −5.5% on the week). The semiconductor index fell 11.4% on the week and the VIX closed above 20.",
      "The selloff began with worries over AI company debt, especially CoreWeave. Add 3.7% CPI inflation and a 10-year yield near 5.1%, which raise the odds of a December Fed hike.",
      "This week's key events are Netflix earnings (20 Oct) and Tesla and Meta (21 Oct). The 29,200–29,250 zone (50% retracement and 100-day average) came under attack on Friday; FTA analysts treat a close below it as a bearish signal."
    ],
    zrodla: [
      { nazwa: "Teleborsa: Nasdaq 100 −2,50% (16 paź 2026)", url: "https://www.teleborsa.it/News/2026/10/16/borsa-profondo-rosso-per-il-nasdaq-100-in-discesa-del-2-50percent-203_TLB-1LINER.html" },
      { nazwa: "MarketScreener: Nasdaq 100 quotes", url: "https://www.marketscreener.com/quote/index/NASDAQ-100-4946/quotes/" },
      { nazwa: "FTA Online: Nasdaq 100, AI trade and CoreWeave (16 paź 2026)", url: "https://www.ftaonline.com/nasdaq100-ai-trade-coreweave.html" },
      { nazwa: "FXEmpire: Nasdaq retreats as CoreWeave dives 14%", url: "https://www.fxempire.com/forecasts/article/nasdaq-index-sp500-dow-jones-forecasts-nasdaq-retreats-as-coreweave-dives-14-1638715" }
    ]
  },
  {
    id: "2026-10-18-sp500", instrument: "sp500", data: "2026-10-18", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
    tytul: "S&P 500 w korekcie, celem strefa 7515–7525", tytul_en: "S&P 500 in a correction, targeting the 7,515–7,525 zone",
    lead: "Najgorszy tydzień od czerwca. Krótkoterminowo przewagę mają sprzedający, choć długoterminowy trend wzrostowy pozostaje nienaruszony.",
    lead_en: "The worst week since June. Sellers have the short-term edge, though the long-term uptrend remains intact.",
    poziomy: { cena: 7659, opory: [7790, 7840], wsparcia: [7520, 7507] },
    scenariusze: [
      { typ: "spadkowy", tekst: "Spadek do strefy 7515–7525, gdzie leży też wrześniowe minimum 7507.", tekst_en: "A drop to the 7,515–7,525 zone, close to the September low at 7,507." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 7790 (szczyt z 14 paź) unieważnia scenariusz spadkowy.", tekst_en: "A daily close above 7,790 (the 14 Oct high) invalidates the bearish view." }
    ],
    tresc: [
      "S&P 500 zamknął piątek na 7659,44 pkt (−1,1% d/d, −1,9% w tygodniu). Od początku roku indeks wciąż jest 11,9% na plusie.",
      "Presję tworzą wyprzedaż spółek technologicznych, inflacja CPI 3,7% r/r i rentowność 10-latek około 5,1%. Według danych CME rynek wycenia około 74% szans na podwyżkę stóp Fed w grudniu.",
      "Najbliższe wsparcia to 7615–7625 i 7515–7525. Wrześniowe minimum 7507 to granica, poniżej której szersza struktura wzrostowa byłaby zagrożona. RSI zbliża się do wyprzedania, więc możliwe są odbicia."
    ],
    tresc_en: [
      "The S&P 500 closed Friday at 7,659.44 (−1.1% d/d, −1.9% on the week). It is still up 11.9% year to date.",
      "Pressure comes from the tech selloff, 3.7% CPI inflation and a 10-year yield near 5.1%. According to CME data, markets price about a 74% chance of a December Fed hike.",
      "Nearest supports are 7,615–7,625 and 7,515–7,525. The September low at 7,507 is the line below which the broader uptrend would be at risk. The RSI is nearing oversold, so bounces are possible."
    ],
    zrodla: [
      { nazwa: "La Nación / AP: How major US stock indexes fared Friday 10/16/2026", url: "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-friday-10162026-nid16102026/" },
      { nazwa: "FXEmpire: Nasdaq retreats as CoreWeave dives 14% (16 paź 2026)", url: "https://www.fxempire.com/forecasts/article/nasdaq-index-sp500-dow-jones-forecasts-nasdaq-retreats-as-coreweave-dives-14-1638715" },
      { nazwa: "CapitalStreetFX: Daily index report 15 paź 2026", url: "https://www.capitalstreetfx.com/market-analysis/daily-index-report-15-10-2026/" },
      { nazwa: "TS2: Nasdaq drops 2.1% as chip rout caps a 4.5% weekly slide", url: "https://ts2.tech/en/nasdaq-drops-2-1-as-chip-rout-caps-a-4-5-weekly-slide/" }
    ]
  },
  {
    id: "2026-10-18-dax", instrument: "dax", data: "2026-10-18", interwal: "D1",
    kierunek: "neutralny", ai: true, szkic: true,
    wynik: { status: "nietrafiona", data: "2026-10-19", komentarz: "19 paź DAX zamknął sesję Xetra na 25 320 pkt (−1,2%), poniżej wsparcia S1 25 344. Świeca dzienna zamknęła się poza zakresem S1–R1. Źródło ceny: ad-hoc-news.de (Dow Jones).", komentarz_en: "On 19 Oct the DAX closed the Xetra session at 25,320 (−1.2%), below S1 support at 25,344. The daily candle closed outside the S1–R1 range. Price source: ad-hoc-news.de (Dow Jones)." },
    tytul: "DAX zyskuje mimo wyprzedaży w USA, opór 25 915", tytul_en: "DAX gains despite the US selloff, resistance at 25,915",
    lead: "DAX zakończył tydzień 2,1% wyżej, ale piątkowa wyprzedaż na Wall Street może ciążyć na otwarciu. Do wybicia ponad 25 915 bazą jest konsolidacja.",
    lead_en: "The DAX ended the week 2.1% higher, but Friday's Wall Street selloff may weigh on Monday's open. Until a break above 25,915, consolidation is the base case.",
    poziomy: { cena: 25622, opory: [25915, 26160], wsparcia: [25344, 24855] },
    scenariusze: [
      { typ: "neutralny", tekst: "Bazowo handel między 25 344 (20-dniowa średnia) a 25 915.", tekst_en: "Base case: trading between 25,344 (20-day average) and 25,915." },
      { typ: "wzrostowy", tekst: "Zamknięcie dnia powyżej 25 915 otwiera drogę do 26 160 i rekordu 26 470–26 495.", tekst_en: "A daily close above 25,915 opens the way to 26,160 and the record at 26,470–26,495." },
      { typ: "spadkowy", tekst: "Zamknięcie poniżej 25 344 kieruje indeks na 24 855 (200-dniowa średnia).", tekst_en: "A close below 25,344 targets 24,855 (200-day average)." }
    ],
    tresc: [
      "DAX zamknął piątek na 25 622,42 pkt (+0,9% d/d, +2,1% w tygodniu). Notowania pozasesyjne w weekend wskazują około 25 490, co odzwierciedla późną wyprzedaż w USA.",
      "Wspierają go podniesiona przez MFW prognoza wzrostu Niemiec (1,3%) i wyniki spółek. W tym tygodniu ważne będą indeks ZEW (20 paź), wyniki SAP (21 paź) i wstępne PMI (23 paź), a w przyszłym decyzja EBC (28–29 paź).",
      "Ryzykiem jest ropa Brent blisko 110 USD i obawy o podwyżki stóp w USA i strefie euro."
    ],
    tresc_en: [
      "The DAX closed Friday at 25,622.42 (+0.9% d/d, +2.1% on the week). Weekend off-hours quotes point to about 25,490, reflecting the late US selloff.",
      "It is supported by the IMF's upgraded German growth forecast (1.3%) and corporate earnings. Key this week are the ZEW index (20 Oct), SAP earnings (21 Oct) and flash PMIs (23 Oct), with the ECB decision the following week (28–29 Oct).",
      "Risks are Brent near $110 and worries about rate hikes in the US and the euro area."
    ],
    zrodla: [
      { nazwa: "MS Aktuell: DAX Schlusskurs 16 paź 2026", url: "https://ms-aktuell.de/?p=169288" },
      { nazwa: "MS Aktuell: DAX Börsenwoche Ausblick 18 paź 2026", url: "https://ms-aktuell.de/welt/dax-boersenwoche-ausblick-18-10-2026/" },
      { nazwa: "Finanznachrichten / XTB: DAX Wochenausblick (18 paź 2026)", url: "https://www.finanznachrichten.de/nachrichten-2026-10/69865323-dax-bullisches-momentum-chartanalyse-prognose-wochenausblick-232.htm" },
      { nazwa: "stock3: DAX Wochenausblick (4 paź 2026)", url: "https://stock3.com/news/exklusive-stock3-plus-analyse-dax-wochenausblick-wurde-das-oktobertief-schon-markiert-17317439" }
    ]
  }
];
