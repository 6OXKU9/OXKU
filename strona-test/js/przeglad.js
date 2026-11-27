// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-27T07:55:00+01:00",
  stanNa_en: "Friday, 27 Nov 2026 (morning)",
  stanNa: "piątek, 27 lis 2026 (rano)",
  naglowek_en: "Markets rebound after the US holiday: Nasdaq 100 futures rise 2.4% and S&P 500 futures 1.7%. In Asia China's index +3.6%, the Nikkei and Hang Seng about 2% each. Gold +2.2% to $3,645, WTI crude $85.9 ahead of Sunday's OPEC+ meeting.",
  naglowek: "Rynki odbijają po święcie w USA: kontrakty na Nasdaq 100 rosną o 2,4%, na S&P 500 o 1,7%. W Azji indeks Chin +3,6%, Nikkei i Hang Seng po około 2%. Złoto +2,2% do 3 645 USD, ropa WTI 85,9 USD przed niedzielnym spotkaniem OPEC+.",
  punkty: [
    "Według Trading Economics kontrakty na Nasdaq 100 rosną o 2,4%, na S&P 500 o 1,7%, na Dow o 1%. W USA dziś krótsza sesja po Święcie Dziękczynienia.",
    "W Azji indeks Chin zyskał około 3,6%, Nikkei 1,9–2,3%, Hang Seng około 2%, ASX 200 0,5% (najlepszy tydzień od sierpnia); Sensex w Indiach −0,8%. W Tokio inflacja bazowa przyspieszyła do 2,9% (poprzednio 2,6%).",
    "Indeks dolara przy 103,7. EUR/USD 1,0979, GBP/USD 1,3125, USD/JPY 159,34. Rynek wycenia niemal pewną podwyżkę Fed o 25 pb w grudniu i możliwą kolejną w styczniu.",
    "Złoto zyskuje 2,2% do 3 645 USD po odbiciu od 15-miesięcznego minimum, srebro 44,1. Ropa WTI 85,9 USD (+1,2%), Brent 97,1, na drodze do pierwszego wzrostu tygodniowego od czterech tygodni; w niedzielę spotkanie OPEC+ w sprawie wydobycia na 2027 rok. Bitcoin około 61 600 USD.",
    "Rozliczyliśmy szkic spadkowy DAX jako nietrafiony (zamknięcie 25 216 powyżej 25 151) i dodaliśmy nowy szkic wzrostowy. Ropa WTI nie miała w czwartek świecy dziennej (święto w USA), więc jej szkic czeka na piątkowe zamknięcie. Dziś o 8:45 wstępny CPI Francji; w przyszłym tygodniu ISM (wtorek i czwartek) i raport z rynku pracy USA (piątek, 14:30)."
  ],
  punkty_en: [
    "According to Trading Economics Nasdaq 100 futures rise 2.4%, S&P 500 futures 1.7% and Dow futures 1%. The US has a shortened session today after Thanksgiving.",
    "In Asia China's index gained about 3.6%, the Nikkei 1.9–2.3%, the Hang Seng about 2% and the ASX 200 0.5% (its best week since August); India's Sensex −0.8%. In Tokyo core inflation accelerated to 2.9% (previously 2.6%).",
    "The dollar index near 103.7. EUR/USD 1.0979, GBP/USD 1.3125, USD/JPY 159.34. Markets price an almost certain 25 bp Fed hike in December and a possible further one in January.",
    "Gold gains 2.2% to $3,645 after rebounding from a 15-month low, silver 44.1. WTI crude $85.9 (+1.2%), Brent 97.1, on track for its first weekly gain in four weeks; OPEC+ meets on Sunday on 2027 output. Bitcoin around $61,600.",
    "We settled the DAX bearish draft as a miss (a 25,216 close above 25,151) and added a new bullish draft. WTI crude had no daily candle on Thursday (US holiday), so its draft waits for Friday's close. Today French flash CPI at 8:45; next week ISM (Tuesday and Thursday) and the US jobs report (Friday, 14:30)."
  ],
  instrumenty: {
    sp500: { kurs: 7302, zmiana: 1.66, tydzien: 5.67, notka: "Środowe zamknięcie (CNBC) skorygowane o ruch kontraktów (+1,7%, Trading Economics). Szkic wzrostowy: cel 7 416, unieważnienie 7 153.", notka_en: "Wednesday's close (CNBC) adjusted for the futures move (+1.7%, Trading Economics). Bullish draft: target 7,416, invalidation 7,153.", zrodlo: 1 },
    nasdaq: { kurs: 26672, zmiana: 2.4, tydzien: 6.56, notka: "Środowe zamknięcie (CNBC) skorygowane o ruch kontraktów (+2,4%). Szkic spadkowy: cel 24 911, unieważnienie 27 019.", notka_en: "Wednesday's close (CNBC) adjusted for the futures move (+2.4%). Bearish draft: target 24,911, invalidation 27,019.", zrodlo: 1 },
    xauusd: { kurs: 3645.26, zmiana: 2.19, tydzien: 3.2, notka: "Szkic wzrostowy: cel 3 723, unieważnienie 3 500.", notka_en: "Bullish draft: target 3,723, invalidation 3,500.", zrodlo: 0 },
    eurusd: { kurs: 1.0979, zmiana: 0.11, tydzien: 0.11, notka: "Szkic spadkowy: cel 1,0762, unieważnienie 1,1023.", notka_en: "Bearish draft: target 1.0762, invalidation 1.1023.", zrodlo: 2 },
    gbpusd: { kurs: 1.3125, zmiana: 0.11, tydzien: 0.34, notka: "Szkic spadkowy: cel 1,2965, unieważnienie 1,3144.", notka_en: "Bearish draft: target 1.2965, invalidation 1.3144.", zrodlo: 2 },
    usdjpy: { kurs: 159.34, zmiana: 0.06, tydzien: 0.51, notka: "Szkic neutralny: kurs w zakresie 157,21–160.", notka_en: "Neutral draft: the rate is within the 157.21–160 range.", zrodlo: 2 },
    xagusd: { kurs: 44.09, zmiana: 1.64, tydzien: 7.04, notka: "Szkic wzrostowy: cel 45 blisko ceny, unieważnienie 40,77.", notka_en: "Bullish draft: $45 target close to the price, invalidation $40.77.", zrodlo: 0 },
    usdpln: { kurs: 4.0818, zmiana: 0.0, tydzien: 0.52, notka: "Czwartkowe zamknięcie (CNBC). Szkic spadkowy: cel 4,0092, unieważnienie 4,0864.", notka_en: "Thursday's close (CNBC). Bearish draft: target 4.0092, invalidation 4.0864.", zrodlo: 5 },
    wti: { kurs: 85.94, zmiana: 2.7, tydzien: 2.33, notka: "Najbliższy kontrakt. Powyżej poziomu unieważnienia 83,95 szkicu spadkowego; rozliczenie po piątkowym zamknięciu.", notka_en: "Front-month contract. Above the bearish draft's 83.95 invalidation level; settlement after Friday's close.", zrodlo: 3 },
    dax: { kurs: 25215.5, zmiana: 0.0, tydzien: 1.66, notka: "Czwartkowe zamknięcie (CNBC). Nowy szkic wzrostowy: cel 25 946, unieważnienie 24 698.", notka_en: "Thursday's close (CNBC). New bullish draft: target 25,946, invalidation 24,698.", zrodlo: 5 },
    btcusd: { kurs: 61632, zmiana: 1.88, tydzien: 4.79, notka: "Gemini. Szkic spadkowy: cel 57 208, unieważnienie 62 562.", notka_en: "Gemini. Bearish draft: target $57,208, invalidation $62,562.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Pt 27 lis", wydarzenia: ["Francja: wstępny CPI (8:45)", "USA: krótsza sesja"] },
    { dzien: "Nd 29 lis", wydarzenia: ["Spotkanie OPEC+"] },
    { dzien: "Pon 30 lis", wydarzenia: ["Polska: wstępny CPI (10:00)"] },
    { dzien: "Wt 1 gru", wydarzenia: ["USA: ISM przemysł (16:00)"] },
    { dzien: "Czw 3 gru", wydarzenia: ["USA: ISM usługi (16:00)"] },
    { dzien: "Pt 4 gru", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto odbija od 15-miesięcznego minimum (27 lis 2026)", nazwa_en: "Trading Economics: gold rebounds from a 15-month low (27 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: kontrakty w USA i indeksy Azji (27 lis 2026)", nazwa_en: "Trading Economics: US futures and Asian indices (27 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: dolar przy 103,7 (27 lis 2026)", nazwa_en: "Trading Economics: the dollar near 103.7 (27 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: ropa zmierza do wzrostu tygodniowego (27 lis 2026)", nazwa_en: "Trading Economics: crude heads for a weekly gain (27 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: inflacja bazowa w Tokio 2,9% (27 lis 2026)", nazwa_en: "Trading Economics: Tokyo core inflation 2.9% (27 Nov 2026)", url: "https://tradingeconomics.com/japan/inflation-cpi" },
    { nazwa: "Trading Economics: DAX (26 lis 2026); DAX i USD/PLN: zamknięcia CNBC", nazwa_en: "Trading Economics: DAX (26 Nov 2026); DAX and USD/PLN: CNBC closes", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (24 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (24 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", nazwa_en: "FXEmpire: The Week Ahead: PCE in Focus After AI Sell-Off in Holiday-Shortened Week", url: "https://www.fxempire.com/forecasts/article/the-week-ahead-pce-in-focus-after-ai-sell-off-in-holiday-shortened-week-1646337" },
    { nazwa: "Newsquawk: Weekly Economic Calendar 23–27 lis 2026", nazwa_en: "Newsquawk: Weekly Economic Calendar 23–27 Nov 2026", url: "https://www.newsquawk.com/headlines/newsquawk-weekly-economic-calendar---23rd-27th-november-2026" },
    { nazwa: "Wells Fargo (ActionForex): Economics Week Ahead (26 lis 2026)", nazwa_en: "Wells Fargo (ActionForex): Economics Week Ahead (26 Nov 2026)", url: "https://www.actionforex.com/contributors/fundamental-analysis/662125-economics-week-ahead-35/" }
  ]
};
