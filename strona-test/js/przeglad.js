// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-12T13:50:00+01:00",
  stanNa_en: "Thursday afternoon, 12 Nov 2026 (before the US open)",
  stanNa: "czwartek po południu, 12 lis 2026 (przed sesją w USA)",
  naglowek_en: "The DAX sets another record above 26,900, led by Siemens. US futures slip on Nvidia. The dollar holds near 103. Gold falls toward $3,935, silver below $51. No major US data today; PPI on Friday.",
  naglowek: "DAX na kolejnym rekordzie powyżej 26 900, na czele Siemens. Kontrakty w USA lekko w dół przez Nvidię. Dolar utrzymuje się blisko 103. Złoto spada w stronę 3 935 USD, srebro poniżej 51 USD. Dziś bez ważnych danych z USA; PPI w piątek.",
  punkty: [
    "DAX czwartą sesję z rzędu na rekordzie: w ciągu dnia ponad 26 900, teraz około 26 848 (+0,7%). Siemens +4,5% po wynikach lepszych od oczekiwań, Merck około +3% po podniesieniu prognozy, Allianz +2,2%; Infineon −2%. Euro Stoxx 50 +0,1%, Londyn +0,3%.",
    "Analiza wzrostowa DAX trafiona w ciągu dnia (cel 26 693). Nowy szkic: wzrost do 27 011, które Trading Economics podaje jako maksimum wszech czasów. Skuteczność 25 z 55.",
    "Kontrakty w USA lekko w dół przez Nvidię, która w listopadzie straciła ponad 20% po doniesieniach o możliwej zmianie prezesa; tracą też AMD i Intel. S&P 500 około 7 585, Nasdaq 100 około 28 113. Dziś w USA nie ma ważnych odczytów.",
    "Dolar stabilny blisko 103, najwyżej od kwietnia 2025: EUR/USD 1,1090, GBP/USD 1,3269, USD/JPY 159,7. Rynek wycenia około 91% szans na grudniową podwyżkę stóp Fed.",
    "Złoto trzecią sesję pod 4 000 USD: około 3 935 (−1,3%), blisko celu szkicu spadkowego (3 886). Srebro około 50,8 USD (−1,6%), poniżej unieważnienia szkicu wzrostowego (51,38); decyduje zamknięcie dnia. WTI około 85,9 USD, Brent około 92,1 USD. Bitcoin około 72 900 USD, blisko dolnej granicy zakresu (72 644). W piątek o 14:30 PPI w USA."
  ],
  punkty_en: [
    "The DAX sets a record for a fourth straight session: above 26,900 intraday, now around 26,848 (+0.7%). Siemens +4.5% after beating expectations, Merck about +3% after raising guidance, Allianz +2.2%; Infineon −2%. Euro Stoxx 50 +0.1%, London +0.3%.",
    "The bullish DAX analysis hit intraday (target 26,693). New draft: a rise to 27,011, which Trading Economics lists as the all-time high. Hit rate 25 of 55.",
    "US futures are slightly lower because of Nvidia, which has lost more than 20% in November on reports of a possible CEO change; AMD and Intel also fall. S&P 500 around 7,585, Nasdaq 100 around 28,113. No major US data today.",
    "The dollar is steady near 103, the highest since April 2025: EUR/USD 1.1090, GBP/USD 1.3269, USD/JPY 159.7. Markets price about 91% odds of a December Fed hike.",
    "Gold is below $4,000 for a third session: around $3,935 (−1.3%), close to the bearish draft's target ($3,886). Silver around $50.8 (−1.6%), below the bullish draft's invalidation ($51.38); the daily close decides. WTI around $85.9, Brent around $92.1. Bitcoin around $72,900, near the range's lower bound ($72,644). US PPI on Friday at 14:30."
  ],
  instrumenty: {
    sp500: { kurs: 7585.34, zmiana: -0.45, tydzien: 3.15, notka: "Kontrakt CFD przed sesją. Szkic wzrostowy: cel 7 716, unieważnienie 7 422.", notka_en: "Pre-market CFD quote. Bullish draft: target 7,716, invalidation 7,422.", zrodlo: 1 },
    nasdaq: { kurs: 28113.31, zmiana: -0.92, tydzien: 5.57, notka: "Kontrakt CFD przed sesją. Analiza neutralna: zakres 27 421–28 830.", notka_en: "Pre-market CFD quote. Neutral analysis: 27,421–28,830 range.", zrodlo: 1 },
    xauusd: { kurs: 3934.56, zmiana: -1.32, tydzien: -3.76, notka: "Szkic spadkowy: cel 3 886, unieważnienie 4 066; kurs zbliża się do celu.", notka_en: "Bearish draft: target $3,886, invalidation $4,066; price approaching the target.", zrodlo: 0 },
    eurusd: { kurs: 1.109, zmiana: 0.01, tydzien: -1.14, notka: "Szkic spadkowy: cel 1,1065, unieważnienie 1,1170.", notka_en: "Bearish draft: target 1.1065, invalidation 1.1170.", zrodlo: 2 },
    gbpusd: { kurs: 1.3269, zmiana: -0.08, tydzien: -1.34, notka: "Szkic spadkowy: cel 1,3177, unieważnienie 1,3385.", notka_en: "Bearish draft: target 1.3177, invalidation 1.3385.", zrodlo: 2 },
    usdjpy: { kurs: 159.66, zmiana: -0.07, tydzien: 1.27, notka: "Szkic wzrostowy: cel 160,39, unieważnienie 158,64.", notka_en: "Bullish draft: target 160.39, invalidation 158.64.", zrodlo: 2 },
    xagusd: { kurs: 50.83, zmiana: -1.61, tydzien: -1.83, notka: "Szkic wzrostowy: cel 54,73, unieważnienie 51,38; kurs poniżej, decyduje zamknięcie dnia.", notka_en: "Bullish draft: target $54.73, invalidation $51.38; price below it, the daily close decides.", zrodlo: 0 },
    usdpln: { kurs: 3.9768, zmiana: 0.0, tydzien: 1.46, notka: "Zamknięcie ze środy. Analiza neutralna: zakres 3,9308–3,9833.", notka_en: "Wednesday close. Neutral analysis: 3.9308–3.9833 range.", zrodlo: 3 },
    wti: { kurs: 85.93, zmiana: -0.69, tydzien: -5.07, notka: "Najbliższy kontrakt. Szkic spadkowy: cel 83,88, unieważnienie 92,53.", notka_en: "Front-month contract. Bearish draft: target $83.88, invalidation $92.53.", zrodlo: 0 },
    dax: { kurs: 26848, zmiana: 0.69, tydzien: 1.99, notka: "W trakcie sesji (CFD), rekord ponad 26 900. Nowy szkic wzrostowy: cel 27 011, unieważnienie 26 492.", notka_en: "During the session (CFD), record above 26,900. New bullish draft: target 27,011, invalidation 26,492.", zrodlo: 3 },
    btcusd: { kurs: 72895, zmiana: -1.4, tydzien: -4.05, notka: "Gemini. Analiza neutralna: zakres 72 644–76 306; kurs blisko dolnej granicy.", notka_en: "Gemini. Neutral analysis: $72,644–76,306 range; price near the lower bound.", zrodlo: 4 }
  },
  kalendarz: [
    { dzien: "Pt 13 lis", wydarzenia: ["USA: ceny producentów PPI (14:30)"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: Gold Extends Decline on Hawkish Fed View; srebro, ropa (12 lis 2026)", nazwa_en: "Trading Economics: Gold Extends Decline on Hawkish Fed View; silver, crude (12 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: US Futures Weighed Down by Nvidia (12 lis 2026)", nazwa_en: "Trading Economics: US Futures Weighed Down by Nvidia (12 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Trading Economics: Dollar Holds Gains on Hawkish Fed Bets (12 lis 2026)", nazwa_en: "Trading Economics: Dollar Holds Gains on Hawkish Fed Bets (12 Nov 2026)", url: "https://tradingeconomics.com/united-states/currency" },
    { nazwa: "Trading Economics: DAX bije rekord (12 lis 2026); USD/PLN: zamknięcie CNBC z 11 lis", nazwa_en: "Trading Economics: DAX hits a record (12 Nov 2026); USD/PLN: CNBC close on 11 Nov", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (12 lis 2026)", nazwa_en: "Gemini: BTC/USD quote (12 Nov 2026)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: ceny producentów PPI w USA, termin i prognoza", nazwa_en: "Trading Economics: US PPI, release date and forecast", url: "https://tradingeconomics.com/united-states/producer-prices-change" }
  ]
};
