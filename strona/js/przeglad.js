// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-25T07:55:00+01:00",
  stanNa_en: "Wednesday, 25 Nov 2026 (morning)",
  stanNa: "środa, 25 lis 2026 (rano)",
  naglowek_en: "The AI sell-off spread to Asia: Nikkei −2.8%, Taiwan −4.8%. US futures lose about 0.3%, Australian inflation rose to 4.9%, and US PCE and GDP data are due at 14:30 before Thursday's holiday.",
  naglowek: "Wyprzedaż spółek AI przeniosła się do Azji: Nikkei −2,8%, Tajwan −4,8%. Kontrakty w USA tracą około 0,3%, inflacja w Australii wzrosła do 4,9%, a o 14:30 dane o PCE i PKB z USA przed czwartkowym świętem.",
  punkty: [
    "W nocy Nikkei stracił 2,8%, giełda na Tajwanie 4,8%, Hang Seng 0,8%, a ASX 200 około 0,5%; indeks w Indiach zyskał 2,4%. Kontrakty na S&P 500 i Nasdaq 100 tracą rano około 0,3% po wtorkowym spadku Nasdaq 100 o 2% i Nvidii o 6%.",
    "Inflacja CPI w Australii wzrosła w październiku do 4,9% r/r (oczekiwano 4,7%, poprzednio 4,3%); średnia obcięta 3,8%. AUD/USD mimo to traci około 0,8% do 0,658.",
    "Indeks dolara odbija do około 104,0 (+0,2%). EUR/USD 1,0940, GBP/USD 1,3080, USD/JPY 159,40. Rynek wycenia około 96% szans na grudniową podwyżkę Fed i około 59% na styczniową.",
    "Złoto traci około 1% do 3 522 USD, srebro 40,31 (−1,5%). Ropa WTI spada o 1,8% do 80,6 USD, Brent 89,9; według API zapasy ropy w USA wzrosły nieznacznie. Bitcoin około 59 100 USD.",
    "Rozliczyliśmy analizę Nasdaq 100 jako nietrafioną (zamknięcie poniżej 26 386) i dodaliśmy nowy szkic spadkowy. O 14:30 PCE, PKB, dobra trwałe i wnioski o zasiłek, o 20:00 Beżowa Księga; w czwartek Święto Dziękczynienia."
  ],
  punkty_en: [
    "Overnight the Nikkei lost 2.8%, Taiwan 4.8%, the Hang Seng 0.8% and the ASX 200 about 0.5%; India's index gained 2.4%. S&P 500 and Nasdaq 100 futures lose about 0.3% this morning after Tuesday's 2% drop in the Nasdaq 100 and 6% in Nvidia.",
    "Australian CPI inflation rose to 4.9% y/y in October (4.7% expected, 4.3% previously); the trimmed mean was 3.8%. AUD/USD still loses about 0.8% to 0.658.",
    "The dollar index rebounds to about 104.0 (+0.2%). EUR/USD 1.0940, GBP/USD 1.3080, USD/JPY 159.40. Markets price about a 96% chance of a December Fed hike and about 59% for January.",
    "Gold loses about 1% to $3,522, silver 40.31 (−1.5%). WTI crude falls 1.8% to $80.6, Brent 89.9; according to the API US crude stocks rose slightly. Bitcoin around $59,100.",
    "We settled the Nasdaq 100 analysis as a miss (close below 26,386) and added a new bearish draft. At 14:30 PCE, GDP, durable goods and jobless claims, at 20:00 the Beige Book; on Thursday Thanksgiving."
  ],
  instrumenty: {
    sp500: { kurs: 7180, zmiana: -0.29, tydzien: -1.96, notka: "Wtorkowe zamknięcie (CNBC) skorygowane o poranny ruch kontraktów (−0,3%, Trading Economics). Szkic wzrostowy: cel 7 416, unieważnienie 7 153.", notka_en: "Tuesday's close (CNBC) adjusted for the morning futures move (−0.3%, Trading Economics). Bullish draft: target 7,416, invalidation 7,153.", zrodlo: 1 },
    nasdaq: { kurs: 26135, zmiana: -0.3, tydzien: -3.62, notka: "Wtorkowe zamknięcie (CNBC) skorygowane o poranny ruch kontraktów (−0,3%). Nowy szkic spadkowy: cel 24 911, unieważnienie 27 019.", notka_en: "Tuesday's close (CNBC) adjusted for the morning futures move (−0.3%). New bearish draft: target 24,911, invalidation 27,019.", zrodlo: 1 },
    xauusd: { kurs: 3521.78, zmiana: -0.95, tydzien: -5.42, notka: "Szkic wzrostowy: cel 3 723, unieważnienie 3 500 blisko ceny.", notka_en: "Bullish draft: target 3,723, invalidation 3,500 close to the price.", zrodlo: 0 },
    eurusd: { kurs: 1.094, zmiana: -0.22, tydzien: -0.3, notka: "Szkic spadkowy: cel 1,0762, unieważnienie 1,1023.", notka_en: "Bearish draft: target 1.0762, invalidation 1.1023.", zrodlo: 2 },
    gbpusd: { kurs: 1.308, zmiana: -0.25, tydzien: -0.51, notka: "Szkic spadkowy: cel 1,2965, unieważnienie 1,3144.", notka_en: "Bearish draft: target 1.2965, invalidation 1.3144.", zrodlo: 2 },
    usdjpy: { kurs: 159.4, zmiana: 0.09, tydzien: 0.04, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 40.31, zmiana: -1.47, tydzien: -10.48, notka: "Cena poniżej poziomu unieważnienia 40,77 szkicu wzrostowego; rozliczenie po zamknięciu dnia.", notka_en: "The price is below the bullish draft's 40.77 invalidation level; settlement after the daily close.", zrodlo: 0 },
    usdpln: { kurs: 4.0625, zmiana: 0.0, tydzien: 1.15, notka: "Wtorkowe zamknięcie (CNBC). Szkic spadkowy: cel 4,0092, unieważnienie 4,0864.", notka_en: "Tuesday's close (CNBC). Bearish draft: target 4.0092, invalidation 4.0864.", zrodlo: 5 },
    wti: { kurs: 80.6, zmiana: -1.77, tydzien: -3.19, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 77,78, unieważnienie 83,95.", notka_en: "Front-month contract. Bearish draft: target $77.78, invalidation $83.95.", zrodlo: 3 },
    dax: { kurs: 25017.8, zmiana: 0.0, tydzien: -2.79, notka: "Wtorkowe zamknięcie (CNBC); brak notowania przed otwarciem. Szkic wzrostowy: cel 25 946, unieważnienie 24 873.", notka_en: "Tuesday's close (CNBC); no pre-open quote. Bullish draft: target 25,946, invalidation 24,873.", zrodlo: 5 },
    btcusd: { kurs: 59106, zmiana: -1.06, tydzien: -6.15, notka: "Gemini. Szkic spadkowy: cel 57 655, unieważnienie 64 534.", notka_en: "Gemini. Bearish draft: target $57,655, invalidation $64,534.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Śr 25 lis", wydarzenia: ["USA: PCE, PKB, dobra trwałe, wnioski o zasiłek (14:30)", "Beżowa Księga Fed (20:00)"] },
    { dzien: "Czw 26 lis", wydarzenia: ["USA: Święto Dziękczynienia, giełdy zamknięte", "Protokół EBC (13:30)"] },
    { dzien: "Pt 27 lis", wydarzenia: ["Tokio: CPI (0:30)", "Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto i srebro w dół (25 lis 2026)", nazwa_en: "Trading Economics: gold and silver lower (25 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: kontrakty w USA, indeksy Azji (25 lis 2026)", nazwa_en: "Trading Economics: US futures, Asian indices (25 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar odbija do 104 (25 lis 2026)", nazwa_en: "Trading Economics: the dollar rebounds to 104 (25 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: ropa i zapasy API (25 lis 2026)", nazwa_en: "Trading Economics: crude and API inventories (25 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: inflacja CPI w Australii (październik 2026)", nazwa_en: "Trading Economics: Australia CPI inflation (October 2026)", url: "https://tradingeconomics.com/australia/inflation-cpi" },
    { nazwa: "Trading Economics: DAX (25 lis 2026); DAX i USD/PLN: zamknięcia CNBC", nazwa_en: "Trading Economics: DAX (25 Nov 2026); DAX and USD/PLN: CNBC closes", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (24 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (24 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" }
  ]
};
