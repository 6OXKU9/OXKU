// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-04T08:00:00+01:00",
  stanNa_en: "Wednesday morning, 4 Nov 2026 (before Europe and London open)",
  stanNa: "środa rano, 4 lis 2026 (przed sesją w Europie i Londynie)",
  naglowek_en: "Democrats win early Senate races and markets bet on a “blue sweep”: US index futures fall (Nasdaq 100 −1%), and the dollar and yields drop. The Nikkei loses almost 3%. AMD beat forecasts. Silver hit its target of $48.85.",
  naglowek: "Demokraci wygrywają wczesne wyścigi do Senatu i rynek gra pod „niebieską falę”: kontrakty na indeksy USA spadają (Nasdaq 100 −1%), spadają dolar i rentowności obligacji. Nikkei traci prawie 3%. AMD powyżej prognoz. Srebro doszło do celu 48,85 USD.",
  punkty: [
    "Wybory w USA: Demokraci wygrali wczesne wyścigi do Senatu, co według Reutersa rozbudziło zakłady na przejęcie przez nich obu izb Kongresu. Ostateczny wynik nie jest jeszcze pewny. Kontrakty na indeksy USA spadają, a rentowności i dolar idą w dół.",
    "Indeksy przed otwarciem: S&P 500 około 7 515 (−0,7%), Nasdaq 100 około 27 894 (−1,0%), DAX około 25 710 (−0,6%). W Azji Nikkei traci 2,9%, Hang Seng +0,3%.",
    "Waluty: słabszy dolar. EUR/USD 1,1232 (+0,35%), GBP/USD 1,3455 (+0,3%), USD/JPY 157,9 (−0,5%), USD/PLN 3,9306 (−0,3%). Indeks dolara 101,5 (−0,4%).",
    "Surowce: złoto około 3 948 USD (+0,4%), srebro około 49,75 USD (bez zmian), WTI około 96,5 USD (+0,5%), Brent około 104,2 USD. Bitcoin około 77 600 USD.",
    "AMD: przychody 13,4 mld USD (+45% r/r), centra danych rekordowe 8,5 mld USD (+97%), prognoza na IV kw. około 17 mld USD. Rozliczenie: wtorkowa analiza spadkowa srebra trafiona (minimum 48,53 poniżej celu 48,85); trafność 13 z 27. Dziś ADP (14:15), ISM usługi (16:00) i zapasy ropy EIA (16:30)."
  ],
  punkty_en: [
    "US elections: Democrats won early Senate races, which according to Reuters fuelled bets they could take both chambers of Congress. The final outcome is not yet certain. US index futures fall, and yields and the dollar move lower.",
    "Indices before the open: S&P 500 around 7,515 (−0.7%), Nasdaq 100 around 27,894 (−1.0%), DAX around 25,710 (−0.6%). In Asia the Nikkei loses 2.9%, Hang Seng +0.3%.",
    "Currencies: a weaker dollar. EUR/USD 1.1232 (+0.35%), GBP/USD 1.3455 (+0.3%), USD/JPY 157.9 (−0.5%), USD/PLN 3.9306 (−0.3%). Dollar index 101.5 (−0.4%).",
    "Commodities: gold around $3,948 (+0.4%), silver around $49.75 (flat), WTI around $96.5 (+0.5%), Brent around $104.2. Bitcoin around $77,600.",
    "AMD: revenue $13.4bn (+45% y/y), record data center revenue of $8.5bn (+97%), Q4 guidance about $17bn. Settlement: Tuesday's bearish silver analysis hit (low $48.53, below the $48.85 target); hit rate 13 of 27. Today ADP (14:15), ISM services (16:00) and EIA crude stocks (16:30)."
  ],
  instrumenty: {
    sp500:  { kurs: 7515.02, zmiana: -0.71, tydzien: -2.96, notka: "Notowanie CFD. Analiza spadkowa: cel 7 500, unieważnienie 7 700; kurs blisko celu.", notka_en: "CFD quote. Bearish analysis: target 7,500, invalidation 7,700; price near the target.", zrodlo: 1 },
    nasdaq: { kurs: 27894, zmiana: -1.01, tydzien: -6.44, notka: "Notowanie CFD. Analiza spadkowa: cel 27 645, unieważnienie 28 300.", notka_en: "CFD quote. Bearish analysis: target 27,645, invalidation 28,300.", zrodlo: 1 },
    xauusd: { kurs: 3947.66, zmiana: 0.41, tydzien: -2.93, notka: "Analiza spadkowa: cel 3 800, unieważnienie 4 000.", notka_en: "Bearish analysis: target $3,800, invalidation $4,000.", zrodlo: 0 },
    eurusd: { kurs: 1.1232, zmiana: 0.35, tydzien: 0.72, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3455, zmiana: 0.30, tydzien: 0.98, notka: "Analiza wzrostowa: cel 1,3489, unieważnienie 1,3306. Jutro decyzja BoE.", notka_en: "Bullish analysis: target 1.3489, invalidation 1.3306. BoE decides tomorrow.", zrodlo: 2 },
    usdjpy: { kurs: 157.88, zmiana: -0.51, tydzien: 0.04, notka: "Analiza neutralna: zakres 156,75–159,05.", notka_en: "Neutral analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 49.75, zmiana: -0.08, tydzien: -7.77, notka: "Nowa analiza spadkowa: cel 48,29, unieważnienie 52,50.", notka_en: "New bearish analysis: target $48.29, invalidation $52.50.", zrodlo: 0 },
    usdpln: { kurs: 3.9306, zmiana: -0.30, tydzien: -0.29, notka: "Analiza wzrostowa: cel 3,98, wsparcie 3,92.", notka_en: "Bullish analysis: target 3.98, support 3.92.", zrodlo: 2 },
    wti:    { kurs: 96.54, zmiana: 0.47, tydzien: -6.07, notka: "Kontrakt grudniowy. Analiza wzrostowa: cel 105, wsparcie 95; horyzont mija 6 lis.", notka_en: "December contract. Bullish analysis: target $105, support $95; the horizon ends on 6 Nov.", zrodlo: 0 },
    dax:    { kurs: 25710, zmiana: -0.60, tydzien: 0.02, notka: "Notowanie CFD. Analiza wzrostowa: cel 26 164, unieważnienie 25 665; kurs blisko unieważnienia.", notka_en: "CFD quote. Bullish analysis: target 26,164, invalidation 25,665; price near invalidation.", zrodlo: 1 },
    btcusd: { kurs: 77582, zmiana: 0.33, tydzien: -4.51, notka: "Analiza neutralna: zakres 75 800–80 000.", notka_en: "Neutral analysis: $75,800–80,000 range.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Śr 4 lis", wydarzenia: ["USA: ADP (14:15), ISM usługi (16:00), zapasy ropy EIA (16:30)", "Dalsze wyniki wyborów w USA"] },
    { dzien: "Czw 5 lis", wydarzenia: ["BoE: decyzja w sprawie stóp (14:00), rynek oczekuje podwyżki"] },
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: surowce (ropa, Brent, złoto, srebro), 4 lis 2026", nazwa_en: "Trading Economics: commodities (crude, Brent, gold, silver), 4 Nov 2026", url: "https://tradingeconomics.com/commodities" },
    { nazwa: "Trading Economics: indeksy giełdowe (US500, US100, DE40, JP225, HK50), 4 lis 2026", nazwa_en: "Trading Economics: stock indices (US500, US100, DE40, JP225, HK50), 4 Nov 2026", url: "https://tradingeconomics.com/stocks" },
    { nazwa: "Trading Economics: waluty (EUR/USD, GBP/USD, USD/JPY, USD/PLN, DXY), 4 lis 2026", nazwa_en: "Trading Economics: currencies (EUR/USD, GBP/USD, USD/JPY, USD/PLN, DXY), 4 Nov 2026", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "Yahoo Finance / Reuters: Analysts react to US midterm election results (4 lis 2026)", nazwa_en: "Yahoo Finance / Reuters: Analysts react to US midterm election results (4 Nov 2026)", url: "https://finance.yahoo.com/markets/stocks/articles/analysts-react-us-midterm-election-025738421.html" },
    { nazwa: "Trading Economics: kryptowaluty (bitcoin), 4 lis 2026", nazwa_en: "Trading Economics: crypto (bitcoin), 4 Nov 2026", url: "https://tradingeconomics.com/crypto" },
    { nazwa: "Yahoo Finance: AMD Reports Third Quarter 2026 Financial Results (3 lis 2026)", nazwa_en: "Yahoo Finance: AMD Reports Third Quarter 2026 Financial Results (3 Nov 2026)", url: "https://finance.yahoo.com/markets/stocks/articles/amd-reports-third-quarter-2026-211500470.html" },
    { nazwa: "CNBC: świece dzienne (dane wykresów na stronie), rozliczenie srebra", nazwa_en: "CNBC: daily candles (site chart data), silver settlement", url: "https://www.cnbc.com/quotes/XAGUSD=" }
  ]
};
