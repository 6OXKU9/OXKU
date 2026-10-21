// Lista instrumentów. Aby dodać nowy, dopisz obiekt na końcu listy.
// dec = liczba miejsc po przecinku w cenach, tv = symbol w TradingView (wykres na żywo na opublikowanej stronie).
// grupa: Forex, Metale, Surowce, Indeksy, Kryptowaluty. Pola z końcówką _en to wersja angielska.
window.INSTRUMENTY = [
  {
    id: "eurusd", dec: 4, symbol: "EUR/USD", nazwa: "Euro / Dolar", grupa: "Forex",
    tv: "FX:EURUSD", jednostka: "pips (0,0001)",
    opis: "Najpłynniejsza para walutowa świata. Odzwierciedla różnicę w polityce pieniężnej EBC i Fed oraz kondycję obu gospodarek.",
    czynniki: ["Decyzje Fed i EBC", "Inflacja CPI w USA i strefie euro", "Payrolls (NFP)", "PMI", "Rentowności obligacji 2Y"],
    sesja: "24/5, największa płynność 14:00–18:00 (nakładanie sesji Londyn/Nowy Jork)",
    nazwa_en: "Euro / US Dollar",
    jednostka_en: "pips (0.0001)",
    opis_en: "The world's most liquid currency pair. Reflects the policy gap between the ECB and the Fed and the health of both economies.",
    czynniki_en: ["Fed and ECB decisions", "US and euro-area CPI", "Nonfarm payrolls (NFP)", "PMI", "2-year bond yields"],
    sesja_en: "24/5, deepest liquidity 14:00–18:00 Warsaw time (London/New York overlap)"
  },
  {
    id: "gbpusd", dec: 4, symbol: "GBP/USD", nazwa: "Funt / Dolar", grupa: "Forex",
    tv: "FX:GBPUSD", jednostka: "pips (0,0001)",
    opis: "„Cable”. Bardziej zmienna niż EUR/USD, silnie reaguje na dane z Wielkiej Brytanii i decyzje Banku Anglii.",
    czynniki: ["Decyzje BoE", "CPI w Wielkiej Brytanii", "Dane z rynku pracy UK", "Sentyment do dolara"],
    sesja: "24/5, najaktywniejsza w sesji londyńskiej",
    nazwa_en: "British Pound / US Dollar",
    jednostka_en: "pips (0.0001)",
    opis_en: "“Cable”. More volatile than EUR/USD and highly sensitive to UK data and Bank of England decisions.",
    czynniki_en: ["BoE decisions", "UK CPI", "UK labour data", "US dollar sentiment"],
    sesja_en: "24/5, most active in the London session"
  },
  {
    id: "usdjpy", dec: 2, symbol: "USD/JPY", nazwa: "Dolar / Jen", grupa: "Forex",
    tv: "FX:USDJPY", jednostka: "pips (0,01)",
    opis: "Para mocno powiązana z różnicą rentowności USA–Japonia. Jen pełni rolę bezpiecznej przystani w okresach awersji do ryzyka.",
    czynniki: ["Polityka BoJ", "Rentowności 10Y w USA", "Interwencje japońskiego MF", "Nastroje risk-on / risk-off"],
    sesja: "24/5, aktywna w sesji azjatyckiej i nowojorskiej",
    nazwa_en: "US Dollar / Japanese Yen",
    jednostka_en: "pips (0.01)",
    opis_en: "Closely tied to the US–Japan yield gap. The yen acts as a safe haven when risk appetite fades.",
    czynniki_en: ["BoJ policy", "US 10-year yields", "Japanese Finance Ministry intervention", "Risk-on / risk-off sentiment"],
    sesja_en: "24/5, active in the Asian and New York sessions"
  },
  {
    id: "usdpln", dec: 4, symbol: "USD/PLN", nazwa: "Dolar / Złoty", grupa: "Forex",
    tv: "FX_IDC:USDPLN", jednostka: "pipsy (0,0001)",
    opis: "Kurs dolara w złotych. Zależy głównie od globalnej siły dolara (EUR/USD), apetytu na ryzyko i polityki NBP.",
    czynniki: ["EUR/USD i indeks dolara", "Decyzje RPP i NBP", "Nastroje wobec rynków wschodzących", "Inflacja CPI w Polsce"],
    sesja: "24/5, największa płynność 9:00–17:00",
    nazwa_en: "US Dollar / Polish Zloty", jednostka_en: "pips (0.0001)",
    opis_en: "The dollar priced in Polish zloty. Driven mainly by global dollar strength (EUR/USD), risk appetite and National Bank of Poland policy.",
    czynniki_en: ["EUR/USD and the dollar index", "Polish central bank (NBP/MPC) decisions", "Emerging-market sentiment", "Polish CPI inflation"],
    sesja_en: "24/5, deepest liquidity 9:00–17:00 Warsaw time"
  },
  {
    id: "xauusd", dec: 0, symbol: "XAU/USD", nazwa: "Złoto", grupa: "Metale",
    tv: "OANDA:XAUUSD", jednostka: "USD za uncję trojańską",
    opis: "Klasyczny środek przechowywania wartości. Reaguje na realne stopy procentowe, siłę dolara, zakupy banków centralnych i napięcia geopolityczne.",
    czynniki: ["Realne rentowności (TIPS)", "Indeks dolara DXY", "Zakupy banków centralnych", "Geopolityka", "Przepływy do ETF-ów"],
    sesja: "Niemal 24/5, z krótką przerwą dzienną",
    nazwa_en: "Gold",
    jednostka_en: "USD per troy ounce",
    opis_en: "The classic store of value. Responds to real interest rates, the dollar, central-bank buying and geopolitical tension.",
    czynniki_en: ["Real yields (TIPS)", "Dollar index DXY", "Central-bank buying", "Geopolitics", "ETF flows"],
    sesja_en: "Nearly 24/5, with a short daily break"
  },
  {
    id: "xagusd", dec: 2, symbol: "XAG/USD", nazwa: "Srebro", grupa: "Metale",
    tv: "OANDA:XAGUSD", jednostka: "USD za uncję trojańską",
    opis: "Metal szlachetny i przemysłowy zarazem. Zwykle bardziej zmienny niż złoto. Popyt zależy też od fotowoltaiki i elektroniki.",
    czynniki: ["Kurs złota (relacja gold/silver)", "Koniunktura przemysłowa, PMI", "Popyt z fotowoltaiki", "Dolar"],
    sesja: "Niemal 24/5, z krótką przerwą dzienną",
    nazwa_en: "Silver",
    jednostka_en: "USD per troy ounce",
    opis_en: "Both a precious and an industrial metal. Usually more volatile than gold; demand also depends on solar and electronics.",
    czynniki_en: ["Gold price (gold/silver ratio)", "Industrial activity, PMI", "Solar demand", "US dollar"],
    sesja_en: "Nearly 24/5, with a short daily break"
  },
  {
    id: "wti", dec: 2, symbol: "WTI", nazwa: "Ropa naftowa WTI", grupa: "Surowce",
    tv: "TVC:USOIL", jednostka: "USD za baryłkę",
    opis: "Amerykańska ropa naftowa, punkt odniesienia dla cen paliw. Wrażliwa na geopolitykę Bliskiego Wschodu, decyzje OPEC+ i zapasy w USA.",
    czynniki: ["Decyzje OPEC+", "Geopolityka (Bliski Wschód, cieśnina Ormuz)", "Tygodniowe zapasy ropy w USA (EIA)", "Popyt z Chin", "Dolar"],
    sesja: "Kontrakty prawie 24/5, przerwa dzienna 23:00–00:00",
    nazwa_en: "WTI Crude Oil", jednostka_en: "USD per barrel",
    opis_en: "US crude oil, the benchmark for fuel prices. Sensitive to Middle East geopolitics, OPEC+ decisions and US inventories.",
    czynniki_en: ["OPEC+ decisions", "Geopolitics (Middle East, Strait of Hormuz)", "Weekly US crude inventories (EIA)", "Chinese demand", "US dollar"],
    sesja_en: "Futures nearly 24/5, daily break 23:00–00:00 Warsaw time"
  },
  {
    id: "nasdaq", dec: 0, symbol: "NAS100", nazwa: "Nasdaq 100", grupa: "Indeksy",
    tv: "OANDA:NAS100USD", jednostka: "punkty indeksowe",
    opis: "100 największych spółek niefinansowych z Nasdaq, zdominowany przez technologię. Wrażliwy na stopy procentowe i wyniki gigantów tech.",
    czynniki: ["Wyniki kwartalne spółek Big Tech", "Oczekiwania co do stóp Fed", "Rentowności 10Y", "Temat AI i półprzewodników"],
    sesja: "Kasowy: 15:30–22:00 (czasu PL); kontrakty prawie 24/5",
    nazwa_en: "Nasdaq 100",
    jednostka_en: "index points",
    opis_en: "The 100 largest non-financial Nasdaq companies, dominated by technology. Sensitive to interest rates and Big Tech earnings.",
    czynniki_en: ["Big Tech quarterly earnings", "Fed rate expectations", "10-year yields", "AI and semiconductor theme"],
    sesja_en: "Cash: 15:30–22:00 Warsaw time; futures nearly 24/5"
  },
  {
    id: "sp500", dec: 0, symbol: "US500", nazwa: "S&P 500", grupa: "Indeksy",
    tv: "OANDA:SPX500USD", jednostka: "punkty indeksowe",
    opis: "Główny barometr amerykańskiej giełdy: 500 największych spółek z USA. Punkt odniesienia dla większości globalnych portfeli.",
    czynniki: ["Wyniki spółek", "Polityka Fed", "Dane makro USA (CPI, NFP, PKB)", "Indeks zmienności VIX"],
    sesja: "Kasowy: 15:30–22:00 (czasu PL); kontrakty prawie 24/5",
    nazwa_en: "S&P 500",
    jednostka_en: "index points",
    opis_en: "The main barometer of the US stock market: 500 of the largest US companies and the benchmark for most global portfolios.",
    czynniki_en: ["Corporate earnings", "Fed policy", "US macro data (CPI, NFP, GDP)", "VIX volatility index"],
    sesja_en: "Cash: 15:30–22:00 Warsaw time; futures nearly 24/5"
  },
  {
    id: "dax", dec: 0, symbol: "DE40", nazwa: "DAX", grupa: "Indeksy",
    tv: "OANDA:DE30EUR", jednostka: "punkty indeksowe",
    opis: "40 największych spółek z giełdy we Frankfurcie. Najważniejszy indeks europejski, wrażliwy na koniunkturę w Niemczech i Chinach.",
    czynniki: ["Decyzje EBC", "PMI i ZEW z Niemiec", "Eksport do Chin i cła", "Kurs EUR/USD"],
    sesja: "Kasowy: 9:00–17:30; kontrakty prawie 24/5",
    nazwa_en: "DAX", jednostka_en: "index points",
    opis_en: "The 40 largest companies on the Frankfurt exchange. Europe's key index, sensitive to the German and Chinese economies.",
    czynniki_en: ["ECB decisions", "German PMI and ZEW", "Exports to China and tariffs", "EUR/USD"],
    sesja_en: "Cash: 9:00–17:30 Warsaw time; futures nearly 24/5"
  },
  {
    id: "btcusd", dec: 0, symbol: "BTC/USD", nazwa: "Bitcoin", grupa: "Kryptowaluty",
    tv: "BITSTAMP:BTCUSD", jednostka: "USD za 1 BTC",
    opis: "Największa kryptowaluta. Notowana całą dobę, 7 dni w tygodniu; bardzo zmienna i coraz mocniej powiązana z nastrojami na Nasdaq.",
    czynniki: ["Przepływy do ETF-ów na bitcoina", "Oczekiwania co do stóp Fed", "Nastroje na rynku akcji (Nasdaq)", "Regulacje"],
    sesja: "24/7",
    nazwa_en: "Bitcoin", jednostka_en: "USD per 1 BTC",
    opis_en: "The largest cryptocurrency. Trades around the clock, 7 days a week; highly volatile and increasingly tied to Nasdaq sentiment.",
    czynniki_en: ["Spot bitcoin ETF flows", "Fed rate expectations", "Equity sentiment (Nasdaq)", "Regulation"],
    sesja_en: "24/7"
  }
];
