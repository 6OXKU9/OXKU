// PRZEGLĄD RYNKU AI. Plik nadpisywany przez Claude przy każdej aktualizacji.
// Każda liczba ma źródło. Gdy dana nie została potwierdzona w źródle, pole zostaje puste (null) i strona pokazuje „brak danych”.
window.PRZEGLAD = {
  aktualizacja: "2026-11-05T22:40:00+01:00",
  stanNa_en: "Thursday evening, 5 Nov 2026 (after the US close, before Asia)",
  stanNa: "czwartek wieczorem, 5 lis 2026 (po sesji w USA, przed Azją)",
  naglowek_en: "An AI stock meltdown on Wall Street: the S&P 500 falls about 4.5%, the Nasdaq 100 more than 6% (into a correction) and the Dow about 3.4%. The PHLX chip index loses about 11% and the VIX jumps more than 60%. Bitcoin drops below $76,000. Our bearish S&P 500 analysis reached its 7,500 target; settlements follow in the morning.",
  naglowek: "Wyprzedaż spółek AI na Wall Street: S&P 500 traci około 4,5%, Nasdaq 100 ponad 6% (wchodzi w korektę), Dow Jones około 3,4%. Indeks chipów PHLX spada o około 11%, VIX rośnie o ponad 60%. Bitcoin poniżej 76 000 USD. Nasza analiza spadkowa S&P 500 doszła do celu 7 500; rozliczenia rano.",
  punkty: [
    "Wall Street (notowania CFD): S&P 500 około 7 338, Nasdaq 100 około 26 525, Dow Jones około 51 301. Spadki prowadziły spółki chipowe (Nvidia, Micron, AMD, Broadcom) i oprogramowania (Palantir, CrowdStrike) na obawach, że Kongres z większością Demokratów zaostrzy zasady dla centrów danych AI. Tesla i SpaceX −9%.",
    "Według Yahoo Finance fundusze realizowały zyski z 2026 roku, a inwestorzy indywidualni sprzedali akcje za około 358 mln USD netto, najwięcej od 2020 roku. VIX wzrósł o ponad 60%, najmocniej od ponad dwóch lat.",
    "Europa: DAX ustanowił rekord 26 693, ale zamknął się około 26 330 (−0,4%); Infineon −10%, Rheinmetall −16%. BoE podniósł stopy do 4,00% (8 do 1). Wnioski o zasiłek w USA na poziomie lipcowego minimum, najniższego od 57 lat.",
    "Surowce i krypto: złoto około 4 089 USD (+0,7%), srebro około 51,8 USD (−0,9%), WTI około 90,8 USD (+3,1%), Brent około 98,7 USD na niepewności wokół porozumienia z Iranem. Bitcoin około 75 760 USD, poniżej poziomu unieważnienia szkicu wzrostowego (77 699 na zamknięciu dnia).",
    "Do rozliczenia rano po świecach: S&P 500 dotknął celu 7 500 (analiza spadkowa trafiona), a Nasdaq 100 zamknął się daleko pod 27 967 (analiza wzrostowa nietrafiona). Dodaliśmy nową analizę spadkową DAX. Jutro o 14:30 raport z rynku pracy w USA: prognoza 65 tys. miejsc pracy, stopa bezrobocia 4,2%."
  ],
  punkty_en: [
    "Wall Street (CFD quotes): S&P 500 around 7,338, Nasdaq 100 around 26,525, Dow Jones around 51,301. Chipmakers (Nvidia, Micron, AMD, Broadcom) and software (Palantir, CrowdStrike) led the losses on fears that a Democratic-majority Congress will tighten rules for AI data centres. Tesla and SpaceX −9%.",
    "According to Yahoo Finance, funds locked in 2026 profits and retail investors net sold about $358m of stocks, the most since 2020. The VIX jumped more than 60%, its biggest gain in over two years.",
    "Europe: the DAX set a record of 26,693 but closed around 26,330 (−0.4%); Infineon −10%, Rheinmetall −16%. The BoE raised rates to 4.00% (8–1). US jobless claims matched July's low, the lowest in 57 years.",
    "Commodities and crypto: gold around $4,089 (+0.7%), silver around $51.8 (−0.9%), WTI around $90.8 (+3.1%), Brent around $98.7 on uncertainty over an Iran deal. Bitcoin around $75,760, below the bullish draft's invalidation level ($77,699 on a daily close).",
    "To settle in the morning with candles: the S&P 500 touched its 7,500 target (bearish analysis hit), and the Nasdaq 100 closed far below 27,967 (bullish analysis missed). We added a new bearish DAX analysis. Tomorrow at 14:30 the US jobs report: forecast 65k jobs, unemployment rate 4.2%."
  ],
  instrumenty: {
    sp500:  { kurs: 7337.96, zmiana: -4.56, tydzien: -4.95, notka: "Notowanie CFD. Analiza spadkowa: cel 7 500 osiągnięty, rozliczenie rano.", notka_en: "CFD quote. Bearish analysis: 7,500 target reached, settlement in the morning.", zrodlo: 1 },
    nasdaq: { kurs: 26525.43, zmiana: -6.72, tydzien: -9.79, notka: "Notowanie CFD. Analiza wzrostowa: zamknięcie daleko pod unieważnieniem 27 967, rozliczenie rano.", notka_en: "CFD quote. Bullish analysis: close far below the 27,967 invalidation, settlement in the morning.", zrodlo: 1 },
    xauusd: { kurs: 4088.64, zmiana: 0.71, tydzien: 1.69, notka: "Analiza wzrostowa: cel 4 205, unieważnienie 4 075.", notka_en: "Bullish analysis: target $4,205, invalidation $4,075.", zrodlo: 0 },
    eurusd: { kurs: 1.1262, zmiana: 0.31, tydzien: 0.75, notka: "Kurs z popołudnia. Analiza neutralna: zakres 1,1113–1,1260; rozstrzygnie świeca dzienna.", notka_en: "Afternoon quote. Neutral analysis: 1.1113–1.1260 range; the daily candle decides.", zrodlo: 3 },
    gbpusd: { kurs: 1.3492, zmiana: 0.16, tydzien: 0.87, notka: "Kurs z popołudnia. Analiza wzrostowa: cel 1,3550, unieważnienie 1,3376.", notka_en: "Afternoon quote. Bullish analysis: target 1.3550, invalidation 1.3376.", zrodlo: 3 },
    usdjpy: { kurs: 157.85, zmiana: -0.36, tydzien: 0.10, notka: "Kurs z popołudnia. Analiza neutralna: zakres 156,75–159,05.", notka_en: "Afternoon quote. Neutral analysis: 156.75–159.05 range.", zrodlo: 3 },
    xagusd: { kurs: 51.80, zmiana: -0.87, tydzien: -0.65, notka: "Szkic spadkowy: cel 48,29, unieważnienie 52,50.", notka_en: "Bearish draft: target $48.29, invalidation $52.50.", zrodlo: 0 },
    usdpln: { kurs: 3.8942, zmiana: -0.23, tydzien: -0.71, notka: "Kurs z popołudnia. Analiza spadkowa: cel 3,8674, unieważnienie 3,9423.", notka_en: "Afternoon quote. Bearish analysis: target 3.8674, invalidation 3.9423.", zrodlo: 3 },
    wti:    { kurs: 90.82, zmiana: 3.06, tydzien: -10.96, notka: "Najbliższy kontrakt. Analiza spadkowa: cel 84,11, unieważnienie 93,59.", notka_en: "Front-month contract. Bearish analysis: target $84.11, invalidation $93.59.", zrodlo: 0 },
    dax:    { kurs: 26330, zmiana: -0.41, tydzien: 1.12, notka: "Zamknięcie sesji. Nowa analiza spadkowa: cel 25 877, unieważnienie 26 693 (rekord).", notka_en: "Session close. New bearish analysis: target 25,877, invalidation 26,693 (record).", zrodlo: 4 },
    btcusd: { kurs: 75757, zmiana: -5.81, tydzien: -2.60, notka: "Gemini, ostatnie 24 godziny. Analiza wzrostowa: kurs pod unieważnieniem 77 699, rozstrzygnie zamknięcie dnia.", notka_en: "Gemini, last 24 hours. Bullish analysis: price below the 77,699 invalidation, the daily close decides.", zrodlo: 5 }
  },
  kalendarz: [
    { dzien: "Pt 6 lis", wydarzenia: ["USA: raport z rynku pracy (14:30), prognoza 65 tys., bezrobocie 4,2%"] }
  ],
  zrodla: [
    { nazwa: "Trading Economics: złoto, srebro, ropa, Brent (5 lis 2026)", nazwa_en: "Trading Economics: gold, silver, crude, Brent (5 Nov 2026)", url: "https://tradingeconomics.com/commodity/gold" },
    { nazwa: "Trading Economics: Wall Street Slides as Chipmakers Tumble (5 lis 2026)", nazwa_en: "Trading Economics: Wall Street Slides as Chipmakers Tumble (5 Nov 2026)", url: "https://tradingeconomics.com/united-states/stock-market" },
    { nazwa: "Yahoo Finance: Dow plunges 1,800 points, Nasdaq enters correction in AI trade meltdown (5 lis 2026)", nazwa_en: "Yahoo Finance: Dow plunges 1,800 points, Nasdaq enters correction in AI trade meltdown (5 Nov 2026)", url: "https://finance.yahoo.com/markets/live/stock-market-today-thursday-november-5-dow-sp-500-nasdaq-oil-rises-chip-stocks-141439950.html" },
    { nazwa: "Trading Economics: waluty (kursy z popołudnia), 5 lis 2026", nazwa_en: "Trading Economics: currencies (afternoon quotes), 5 Nov 2026", url: "https://tradingeconomics.com/currencies" },
    { nazwa: "Trading Economics: DAX Retreats (5 lis 2026)", nazwa_en: "Trading Economics: DAX Retreats (5 Nov 2026)", url: "https://tradingeconomics.com/germany/stock-market" },
    { nazwa: "Gemini: notowanie BTC/USD (ostatnie 24 godziny)", nazwa_en: "Gemini: BTC/USD quote (last 24 hours)", url: "https://www.gemini.com/prices/bitcoin" },
    { nazwa: "Trading Economics: zatrudnienie poza rolnictwem w USA, prognoza na październik 2026", nazwa_en: "Trading Economics: US nonfarm payrolls, October 2026 forecast", url: "https://tradingeconomics.com/united-states/non-farm-payrolls" }
  ]
};
