// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-03T07:50:00+01:00",
  stanNa_en: "Tuesday morning, 3 Nov 2026 (before the European session)",
  stanNa: "wtorek rano, 3 lis 2026 (przed sesją europejską)",
  naglowek_en: "The RBA hikes to 4.85%, an 18-year high. US aircraft strike Iran's Qeshm Island after a drone is shot down, but Washington calls it a one-off response. Apple slips 2.8% after hours on margin guidance. US midterms today.",
  naglowek: "RBA podnosi stopę do 4,85%, najwyżej od 18 lat. Lotnictwo USA uderzyło w irańską wyspę Keszm po zestrzeleniu drona, ale Waszyngton mówi o jednorazowej odpowiedzi. Apple traci po sesji 2,8% przez prognozę marży. Dziś wybory w USA.",
  punkty: [
    "RBA podniósł stopę o 25 pb do 4,85% (piąta podwyżka w tym roku, głosowanie 6 do 3). Bank widzi szczyt inflacji na 4,5% i inflację powyżej 3% do końca 2027 roku. Dolar australijski osłabł po decyzji.",
    "Iran: po zestrzeleniu amerykańskiego drona MQ-9 lotnictwo USA zaatakowało cele na wyspie Keszm. Urzędnik USA nazwał to odpowiedzią, a nie początkiem szerszej kampanii; Iran mówi, że kontakty przez pośredników trwają. Ropa lekko odbija: WTI około 97,4 USD (+1,0%), Brent około 105,8 USD.",
    "Azja: Kospi −3,7%, Kosdaq −3,8%, Szanghaj −0,7%, Hang Seng +0,4%; Japonia ma święto. Bank Ludowy Chin podniósł rezerwę walutową z 4% do 6%, a juan offshore stracił 0,26%, najwięcej od czerwca.",
    "Apple: przychody około 114,5 mld USD (powyżej prognoz), iPhone +17%, ale prognoza marży brutto 45–46% przez droższą pamięć; akcje po sesji −2,8%. Kontrakty w USA lekko rosną przed wyborami. Złoto około 3 926 USD (−0,5%), srebro około 49,4 USD (−2,5%).",
    "Rozliczenia: GBP/USD z 2 lis trafiony (wzrost do 1,3449, cel 1,3428), srebro z 30 paź nietrafione (zamknięcie 50,65 nad 50). Skuteczność 12 z 26. Nowe szkice: srebro spadkowo (cel 48,85) i GBP/USD wzrostowo (cel 1,3489)."
  ],
  punkty_en: [
    "The RBA raised its rate by 25 bp to 4.85% (the fifth hike this year, a 6-3 vote). The bank sees inflation peaking at 4.5% and staying above 3% until late 2027. The Australian dollar weakened after the decision.",
    "Iran: after a US MQ-9 drone was shot down, US aircraft struck targets on Qeshm Island. A US official called it a response, not the start of a wider campaign; Iran says contacts through mediators continue. Oil edges up: WTI around $97.4 (+1.0%), Brent around $105.8.",
    "Asia: Kospi −3.7%, Kosdaq −3.8%, Shanghai −0.7%, Hang Seng +0.4%; Japan is on holiday. The PBOC raised the FX reserve requirement from 4% to 6%, and the offshore yuan lost 0.26%, the most since June.",
    "Apple: revenue about $114.5bn (above forecasts), iPhone +17%, but gross margin guidance of 45–46% due to pricier memory; shares −2.8% after hours. US futures edge higher ahead of the midterms. Gold around $3,926 (−0.5%), silver around $49.4 (−2.5%).",
    "Settlements: the 2 Nov GBP/USD analysis hit (a rise to 1.3449, target 1.3428), the 30 Oct silver analysis missed (a close of 50.65 above 50). Score: 12 of 26. New drafts: bearish silver (target $48.85) and bullish GBP/USD (target 1.3489)."
  ],
  instrumenty: {
    sp500:  { kurs: 7532.17, zmiana: -0.12, tydzien: null, notka: "Notowanie CFD. Analiza spadkowa: cel 7 500, unieważnienie 7 700.", notka_en: "CFD quote. Bearish analysis: target 7,500, invalidation 7,700.", zrodlo: 1 },
    nasdaq: { kurs: 27982.42, zmiana: -0.03, tydzien: null, notka: "Notowanie CFD. Analiza spadkowa: cel 27 645, unieważnienie 28 300.", notka_en: "CFD quote. Bearish analysis: target 27,645, invalidation 28,300.", zrodlo: 1 },
    xauusd: { kurs: 3925.59, zmiana: -0.52, tydzien: null, notka: "Analiza spadkowa: cel 3 800, unieważnienie 4 000.", notka_en: "Bearish analysis: target $3,800, invalidation $4,000.", zrodlo: 0 },
    eurusd: { kurs: 1.1189, zmiana: 0.04, tydzien: null, notka: "Analiza neutralna: zakres 1,1113–1,1260.", notka_en: "Neutral analysis: 1.1113–1.1260 range.", zrodlo: 2 },
    gbpusd: { kurs: 1.3406, zmiana: 0.01, tydzien: null, notka: "Analiza z 2 lis trafiona. Nowa analiza wzrostowa: cel 1,3489, unieważnienie 1,3306.", notka_en: "2 Nov analysis hit. New bullish analysis: target 1.3489, invalidation 1.3306.", zrodlo: 2 },
    usdjpy: { kurs: 157.90, zmiana: -0.03, tydzien: null, notka: "Japonia ma dziś święto. Analiza: zakres 156,75–159,05.", notka_en: "Japan is on holiday today. Analysis: 156.75–159.05 range.", zrodlo: 2 },
    xagusd: { kurs: 49.40, zmiana: -2.47, tydzien: null, notka: "Analiza z 30 paź nietrafiona. Nowa analiza spadkowa: cel 48,85, unieważnienie 51,27.", notka_en: "30 Oct analysis missed. New bearish analysis: target $48.85, invalidation $51.27.", zrodlo: 0 },
    usdpln: { kurs: 3.9461, zmiana: 0.06, tydzien: null, notka: "Zamknięcie z 2 lis (świeca dzienna). Analiza wzrostowa: cel 3,98, wsparcie 3,92.", notka_en: "2 Nov close (daily candle). Bullish analysis: target 3.98, support 3.92.", zrodlo: 5 },
    wti:    { kurs: 97.44, zmiana: 1.02, tydzien: null, notka: "Kontrakt grudniowy. Analiza wzrostowa: cel 105, wsparcie 95.", notka_en: "December contract. Bullish analysis: target $105, support $95.", zrodlo: 0 },
    dax:    { kurs: 25981.09, zmiana: 0.63, tydzien: null, notka: "Zamknięcie Xetra z 2 lis. Analiza wzrostowa: cel 26 164, unieważnienie 25 665.", notka_en: "Xetra close of 2 Nov. Bullish analysis: target 26,164, invalidation 25,665.", zrodlo: 3 },
    btcusd: { kurs: 76645, zmiana: -0.04, tydzien: null, notka: "Analiza neutralna: zakres 75 800–80 000.", notka_en: "Neutral analysis: $75,800–80,000 range.", zrodlo: 0 }
  },
  kalendarz: [
    { dzien: "Wt 3 lis", wydarzenia: ["Wybory połówkowe w USA (wyniki w nocy)", "Wyniki AMD po sesji"] },
    { dzien: "Czw 5 lis", wydarzenia: ["BoE: decyzja w sprawie stóp (14:00), rynek oczekuje podwyżki"] },
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto (z tabelą srebro, ropa, bitcoin), 3 lis 2026", nazwa_en: "Trading Economics: gold (with silver, oil, bitcoin table), 3 Nov 2026", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: rynek akcji USA (US100, US500), 3 lis 2026", nazwa_en: "Trading Economics: US stock market (US100, US500), 3 Nov 2026", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar australijski (z tabelą walut), 3 lis 2026", nazwa_en: "Trading Economics: Australian dollar (with currency table), 3 Nov 2026", url: "https://tradingeconomics.com/australia/currency" },
    { nazwa: "ARIVA.DE / dpa-AFX: Aktien Frankfurt Schluss (2 lis 2026)", nazwa_en: "ARIVA.DE / dpa-AFX: Frankfurt stocks close (2 Nov 2026)", url: "https://www.ariva.de/news/roundup-aktien-frankfurt-schluss-dax-legt-zu-vor-apple-und-12191436" },
    { nazwa: "finwire / investingLive: Asia-Pacific market news, RBA hikes to 18-year high (3 lis 2026)", nazwa_en: "finwire / investingLive: Asia-Pacific market news, RBA hikes to 18-year high (3 Nov 2026)", url: "https://finwire.io/news/stock-markets-news/investinglive-asia-pacific-market-news-rba-hikes-to-18-year-high" },
    { nazwa: "CNBC: świece dzienne USD/PLN (dane wykresów na stronie)", nazwa_en: "CNBC: USD/PLN daily candles (site chart data)", url: "https://www.cnbc.com/quotes/PLN=" },
    { nazwa: "9to5Mac: Apple stock drops nearly 3% after hours following Q4 2026 results (2 lis 2026)", nazwa_en: "9to5Mac: Apple stock drops nearly 3% after hours following Q4 2026 results (2 Nov 2026)", url: "https://9to5mac.com/2026/11/02/apple-stock-drops-nearly-3-after-hours-following-q4-2026-results/" }
  ]
};
