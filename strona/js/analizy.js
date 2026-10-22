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
    id: "2026-10-22-nasdaq", instrument: "nasdaq", data: "2026-10-22", interwal: "D1",
    kierunek: "spadkowy", ai: true, szkic: true,
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
