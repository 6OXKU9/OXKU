// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-05T08:00:00+01:00",
  stanNa_en: "Thursday morning, 5 Nov 2026 (before Europe and London open)",
  stanNa: "czwartek rano, 5 lis 2026 (przed sesją w Europie i Londynie)",
  naglowek_en: "Gold climbs towards $4,150 on hopes of US-Iran de-escalation, and WTI slips to $87. The dollar stays at a five-week low. Six analyses settled after Wednesday's moves: sterling hit, five missed; hit rate 15 of 34. The BoE decides at 13:00 and a hike to 4.00% is almost fully priced.",
  naglowek: "Złoto zmierza ku 4 150 USD na nadziejach na deeskalację USA–Iran, a WTI spada do 87 USD. Dolar zostaje na 5-tygodniowym minimum. Po środowych ruchach rozliczyliśmy sześć analiz: funt trafiony, pięć nietrafionych; trafność 15 z 34. O 13:00 BoE, podwyżka do 4,00% jest niemal w pełni wyceniona.",
  punkty: [
    "Rozliczenia po świecach z 4 lis: GBP/USD trafiony (1,3503 powyżej celu 1,3489). Nietrafione: złoto (zamknięcie 4 060 nad 4 000), Nasdaq 100 (28 437 nad 28 300), ropa WTI (88,12 pod 95), USD/PLN (3,9032 pod 3,92) i bitcoin (80 428 nad zakresem 80 000). Dla każdego instrumentu dodaliśmy nowy szkic analizy.",
    "Złoto około 4 124 USD (+1,6%), najwyżej od dwóch tygodni; srebro około 52,7 USD, nad poziomem unieważnienia szkicu (52,50), rozstrzygnie zamknięcie dnia. WTI około 87,1 USD (−1,2%), Brent około 94,3 USD.",
    "Waluty: indeks dolara około 101,2 (−0,3%). EUR/USD 1,1264, GBP/USD 1,3492, USD/JPY 157,9, USD/PLN około 3,904. Rynek wycenia 79% szans na grudniową podwyżkę stóp Fed.",
    "Azja: według Trading Economics Nikkei traci około 2% przez spadki spółek związanych z AI (Advantest, Kioxia), a Hang Seng zyskuje około 3%. Kontrakty na indeksy USA są blisko zera po środowym rajdzie (S&P 500 +1,6%, Dow +3%); po sesji AppLovin rośnie, Qualcomm spada.",
    "Dziś: zamówienia w niemieckim przemyśle (8:00), decyzja BoE (13:00, rynek w ponad 96% wycenia podwyżkę z 3,75% do 4,00%), wnioski o zasiłek w USA (14:30). W piątek raport z rynku pracy w USA."
  ],
  punkty_en: [
    "Settlements on the 4 Nov candles: GBP/USD hit (1.3503 above the 1.3489 target). Missed: gold (close 4,060 above 4,000), Nasdaq 100 (28,437 above 28,300), WTI (88.12 below 95), USD/PLN (3.9032 below 3.92) and bitcoin (80,428 above the 80,000 range). We added a new draft analysis for each instrument.",
    "Gold around $4,124 (+1.6%), a two-week high; silver around $52.7, above the draft's invalidation level ($52.50), the daily close decides. WTI around $87.1 (−1.2%), Brent around $94.3.",
    "Currencies: the dollar index around 101.2 (−0.3%). EUR/USD 1.1264, GBP/USD 1.3492, USD/JPY 157.9, USD/PLN around 3.904. Markets price a 79% chance of a December Fed hike.",
    "Asia: according to Trading Economics the Nikkei loses about 2% on AI-linked stocks (Advantest, Kioxia), while the Hang Seng gains about 3%. US index futures are near flat after Wednesday's rally (S&P 500 +1.6%, Dow +3%); after the close AppLovin rose and Qualcomm fell.",
    "Today: German factory orders (8:00), the BoE decision (13:00, markets price a more than 96% chance of a hike from 3.75% to 4.00%), US jobless claims (14:30). Friday brings the US jobs report."
  ],
  instrumenty: {
    sp500:  { kurs: 7688.62, zmiana: 1.58, tydzien: -0.41, notka: "Zamknięcie środy (CNBC). Analiza spadkowa: cel 7 500, unieważnienie 7 700; kurs tuż pod unieważnieniem.", notka_en: "Wednesday close (CNBC). Bearish analysis: target 7,500, invalidation 7,700; price just below invalidation.", zrodlo: 5 },
    nasdaq: { kurs: 28437.2, zmiana: 0.91, tydzien: -3.28, notka: "Zamknięcie środy (CNBC). Nowa analiza wzrostowa: cel 28 830, unieważnienie 27 967.", notka_en: "Wednesday close (CNBC). New bullish analysis: target 28,830, invalidation 27,967.", zrodlo: 5 },
    xauusd: { kurs: 4123.69, zmiana: 1.58, tydzien: 2.56, notka: "Nowa analiza wzrostowa: cel 4 205, unieważnienie 4 075.", notka_en: "New bullish analysis: target $4,205, invalidation $4,075.", zrodlo: 0 },
    eurusd: { kurs: 1.1264, zmiana: 0.33, tydzien: 0.77, notka: "Analiza neutralna: zakres 1,1113–1,1260; kurs tuż nad górną granicą, rozstrzygnie zamknięcie dnia.", notka_en: "Neutral analysis: 1.1113–1.1260 range; price just above the upper bound, the daily close decides.", zrodlo: 1 },
    gbpusd: { kurs: 1.3492, zmiana: 0.16, tydzien: 0.87, notka: "Nowa analiza wzrostowa: cel 1,3550, unieważnienie 1,3376. Dziś o 13:00 decyzja BoE.", notka_en: "New bullish analysis: target 1.3550, invalidation 1.3376. The BoE decides at 13:00 today.", zrodlo: 1 },
    usdjpy: { kurs: 157.89, zmiana: -0.33, tydzien: 0.13, notka: "Analiza neutralna: zakres 156,75–159,05.", notka_en: "Neutral analysis: 156.75–159.05 range.", zrodlo: 1 },
    xagusd: { kurs: 52.68, zmiana: 0.81, tydzien: 1.03, notka: "Szkic spadkowy: cel 48,29, unieważnienie 52,50; kurs nad unieważnieniem, rozstrzygnie zamknięcie dnia.", notka_en: "Bearish draft: target $48.29, invalidation $52.50; price above invalidation, the daily close decides.", zrodlo: 0 },
    usdpln: { kurs: 3.9039, zmiana: 0.02, tydzien: -0.46, notka: "Kurs z zamknięcia środy. Nowa analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Wednesday close. New bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 2 },
    wti:    { kurs: 87.10, zmiana: -1.16, tydzien: -14.61, notka: "Najbliższy kontrakt. Nowa analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. New bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax:    { kurs: 26437.7, zmiana: 2.22, tydzien: 1.53, notka: "Zamknięcie środy (CNBC). Analiza wzrostowa: cel 26 628, unieważnienie 26 164.", notka_en: "Wednesday close (CNBC). Bullish analysis: target 26,628, invalidation 26,164.", zrodlo: 5 },
    btcusd: { kurs: 80356.5, zmiana: -0.09, tydzien: 3.31, notka: "Bieżąca świeca dzienna (Coinbase). Nowa analiza wzrostowa: cel 84 856, unieważnienie 77 699.", notka_en: "Current daily candle (Coinbase). New bullish analysis: target $84,856, invalidation $77,699.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Czw 5 lis", wydarzenia: ["Niemcy: zamówienia w przemyśle (8:00)", "BoE: decyzja w sprawie stóp (13:00)", "USA: wnioski o zasiłek (14:30)"] },
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Extends Gain on US-Iran Optimism; srebro, ropa, Brent (5 lis 2026)", nazwa_en: "Trading Economics: Gold Extends Gain on US-Iran Optimism; silver, crude, Brent (5 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: Dollar Weakens After Democratic Victory; główne pary (5 lis 2026)", nazwa_en: "Trading Economics: Dollar Weakens After Democratic Victory; major pairs (5 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: złoty (USD/PLN), 4 lis 2026", nazwa_en: "Trading Economics: zloty (USD/PLN), 4 Nov 2026", url: "https://tradingeconomics.com/poland/currency" },
    { nazwa: "Trading Economics: Nikkei i giełdy w Azji (5 lis 2026)", nazwa_en: "Trading Economics: Nikkei and Asian markets (5 Nov 2026)", url: "https://tradingeconomics.com/japan/stock-market" },
    { nazwa: "Trading Economics: kontrakty w USA, AppLovin i Qualcomm (5 lis 2026)", nazwa_en: "Trading Economics: US futures, AppLovin and Qualcomm (5 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "CNBC: świece dzienne (dane wykresów na stronie), rozliczenia analiz", nazwa_en: "CNBC: daily candles (site chart data), analysis settlements", url: "https://www.cnbc.com/quotes/.SPX" },
    { nazwa: "Coinbase: świece dzienne BTC/USD (dane wykresów na stronie)", nazwa_en: "Coinbase: BTC/USD daily candles (site chart data)", url: "https://www.coinbase.com/price/bitcoin" },
    { nazwa: "Trading Economics: stopy procentowe BoE, oczekiwania (5 lis 2026)", nazwa_en: "Trading Economics: BoE interest rate, expectations (5 Nov 2026)", url: "https://tradingeconomics.com/united-kingdom/interest-rate" }
  ]
};
