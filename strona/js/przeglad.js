// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-19T13:55:00+01:00",
  stanNa_en: "Thursday, 19 Nov 2026 (before the US session)",
  stanNa: "czwartek, 19 lis 2026 (przed sesją w USA)",
  naglowek_en: "Anthropic's debut revives the AI trade: Nasdaq 100 futures rise more than 2%, S&P 500 futures more than 1%. The DAX recovers (+0.6% to around 25,900). Walmart beats expectations (/bin/bash.65 per share). Gold near ,717, WTI crude 4.",
  naglowek: "Debiut Anthropic ożywia handel spółkami AI: kontrakty na Nasdaq 100 rosną o ponad 2%, na S&P 500 o ponad 1%. DAX odrabia straty (+0,6% do około 25 900). Walmart powyżej oczekiwań (0,65 USD na akcję). Złoto przy 3 717 USD, ropa WTI 84.",
  punkty: [
    "Kontrakty w USA mocno w górę przed debiutem Anthropic, który wycenił akcje na 83 USD: Nasdaq 100 o ponad 2%, S&P 500 o ponad 1%, Dow o 0,7%. Źródła różnią się co do wielkości oferty (81,3 lub 107,3 mld USD). Walmart zarobił 0,65 USD na akcję, powyżej prognozy firmy 0,62–0,64.",
    "DAX odbija o około 0,6% do 25 900 po czterech spadkowych sesjach: Infineon +3,6%, Siemens Energy +2,8%, Deutsche Bank +2,9%; Commerzbank +1,8% po porozumieniu rządu Niemiec z UniCredit. Tracą Henkel, Fresenius Medical Care i SAP. W Europie dziś bez ważnych odczytów.",
    "Dolar lekko słabnie po wczorajszym szczycie: indeks 103,7 (−0,1%). EUR/USD 1,0988, GBP/USD 1,3156, USD/JPY 159,9 (blisko celu szkicu 160,39). Rynek wycenia podwyżkę Fed o 25 pb w grudniu.",
    "Złoto 3 717 USD (−0,2%), tuż nad wsparciem 3 700; srebro 45,07 USD. Ropa WTI 84,05 USD (+1,0%), Brent 92,8, przy doniesieniach o możliwych kolejnych uderzeniach USA na Iran. Bitcoin około 63 900 USD.",
    "O 14:30 wnioski o zasiłek w USA; w piątek o 16:00 ostateczny odczyt nastrojów Uniwersytetu Michigan. Żaden poziom analiz nie został dziś wyraźnie przebity; rozliczenia rano po świecach dziennych."
  ],
  punkty_en: [
    "US futures jump ahead of the debut of Anthropic, which priced its shares at $83: Nasdaq 100 more than 2%, S&P 500 more than 1%, Dow 0.7%. Sources differ on the size of the offering ($81.3B or $107.3B). Walmart earned $0.65 per share, above the company's $0.62–0.64 guidance.",
    "The DAX rebounds about 0.6% to 25,900 after four losing sessions: Infineon +3.6%, Siemens Energy +2.8%, Deutsche Bank +2.9%; Commerzbank +1.8% after the German government's agreement with UniCredit. Henkel, Fresenius Medical Care and SAP lose. No major European data today.",
    "The dollar eases slightly after yesterday's peak: index 103.7 (−0.1%). EUR/USD 1.0988, GBP/USD 1.3156, USD/JPY 159.9 (close to the draft's 160.39 target). Markets price a 25 bp Fed hike in December.",
    "Gold $3,717 (−0.2%), just above $3,700 support; silver $45.07. WTI crude $84.05 (+1.0%), Brent 92.8, on reports of possible further US strikes on Iran. Bitcoin around $63,900.",
    "US jobless claims at 14:30; on Friday at 16:00 the final University of Michigan sentiment reading. No analysis level was clearly breached today; settlements in the morning from the daily candles."
  ],
  instrumenty: {
    sp500: { kurs: 7406.15, zmiana: 1.13, tydzien: -2.45, notka: "CFD przed sesją (Trading Economics), kontrakty ponad +1%. Szkic wzrostowy: cel 7 502, unieważnienie 7 288.", notka_en: "Pre-market CFD (Trading Economics), futures more than +1%. Bullish draft: target 7,502, invalidation 7,288.", zrodlo: 1 },
    nasdaq: { kurs: 27625.19, zmiana: 1.88, tydzien: -2.35, notka: "CFD przed sesją (Trading Economics), kontrakty ponad +2%. Szkic wzrostowy: cel 27 622 (blisko), unieważnienie 26 581.", notka_en: "Pre-market CFD (Trading Economics), futures more than +2%. Bullish draft: target 27,622 (close), invalidation 26,581.", zrodlo: 1 },
    xauusd: { kurs: 3716.95, zmiana: -0.18, tydzien: -4.13, notka: "Nowy szkic spadkowy: cel 3 700, unieważnienie 3 855.", notka_en: "New bearish draft: target $3,700, invalidation $3,855.", zrodlo: 0 },
    eurusd: { kurs: 1.0988, zmiana: 0.14, tydzien: -0.59, notka: "Szkic spadkowy: cel 1,0950, unieważnienie 1,1140.", notka_en: "Bearish draft: target 1.0950, invalidation 1.1140.", zrodlo: 2 },
    gbpusd: { kurs: 1.3156, zmiana: 0.07, tydzien: -0.54, notka: "Nowy szkic wzrostowy: cel 1,3227, unieważnienie 1,3132.", notka_en: "New bullish draft: target 1.3227, invalidation 1.3132.", zrodlo: 4 },
    usdjpy: { kurs: 159.94, zmiana: 0.38, tydzien: 0.06, notka: "Szkic wzrostowy: cel 160,39 (blisko), unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39 (close), invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 45.07, zmiana: 0.09, tydzien: -9.89, notka: "Nowy szkic spadkowy: cel 44,74, unieważnienie 47,69.", notka_en: "New bearish draft: target $44.74, invalidation $47.69.", zrodlo: 0 },
    usdpln: { kurs: 4.0162, zmiana: 0.0, tydzien: 0.87, notka: "Zamknięcie ze środy (CNBC), brak świeższego notowania. Szkic wzrostowy: cel 4,08, unieważnienie 3,9775.", notka_en: "Wednesday close (CNBC), no fresher quote. Bullish draft: target 4.08, invalidation 3.9775.", zrodlo: 5 },
    wti: { kurs: 84.05, zmiana: 0.95, tydzien: -5.29, notka: "Najbliższy kontrakt. Nowy szkic spadkowy: cel 81,97, unieważnienie 85,95.", notka_en: "Front-month contract. New bearish draft: target $81.97, invalidation $85.95.", zrodlo: 3 },
    dax: { kurs: 25900, zmiana: 0.64, tydzien: -3.26, notka: "Około 25 900 według Trading Economics (tabela CFD podaje 25 733). Szkic spadkowy: cel 25 618, unieważnienie 26 139.", notka_en: "Around 25,900 according to Trading Economics (the CFD table shows 25,733). Bearish draft: target 25,618, invalidation 26,139.", zrodlo: 5 },
    btcusd: { kurs: 63891, zmiana: 1.44, tydzien: -10.48, notka: "Gemini. Szkic spadkowy: cel 61 946 (rozliczenie według świec Coinbase), unieważnienie 68 380.", notka_en: "Gemini. Bearish draft: target $61,946 (settled from Coinbase candles), invalidation $68,380.", zrodlo: 6 }
  },
  kalendarz: [
    { dzien: "Czw 19 lis", wydarzenia: ["USA: wnioski o zasiłek (14:30)"] },
    { dzien: "Pt 20 lis", wydarzenia: ["USA: nastroje Uniwersytetu Michigan, odczyt ostateczny (16:00)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto i srebro (19 lis 2026)", nazwa_en: "Trading Economics: gold and silver (19 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: kontrakty w USA przed debiutem Anthropic, wyniki Walmartu (19 lis 2026)", nazwa_en: "Trading Economics: US futures ahead of Anthropic's debut, Walmart results (19 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Extends Gains on Hawkish Fed Outlook (19 lis 2026)", nazwa_en: "Trading Economics: Dollar Extends Gains on Hawkish Fed Outlook (19 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: Oil Holds at Near Three-Month Low (19 lis 2026)", nazwa_en: "Trading Economics: Oil Holds at Near Three-Month Low (19 Nov 2026)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { nazwa: "Trading Economics: funt i BoE (18 lis 2026)", nazwa_en: "Trading Economics: sterling and the BoE (18 Nov 2026)", url: "https://tradingeconomics.com/united-kingdom/currency" },
    { nazwa: "Trading Economics: DAX odrabia straty (19 lis 2026); USD/PLN: zamknięcie CNBC", nazwa_en: "Trading Economics: DAX recovers (19 Nov 2026); USD/PLN: CNBC close", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (19 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (19 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Letters to a Young Investor: Weekly Economic Calendar 16–20 lis 2026", nazwa_en: "Letters to a Young Investor: Weekly Economic Calendar 16–20 Nov 2026", url: "https://letterstoayounginvestor.substack.com/p/weekly-economic-calendar-november-cf0" }
  ]
};
