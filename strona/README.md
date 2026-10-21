# AnalizyRynku: strona z analizami

Statyczna strona (HTML/CSS/JS, bez serwera i bazy danych). Działa po otwarciu `index.html` w przeglądarce i da się ją wrzucić na dowolny hosting (GitHub Pages, Netlify, Cloudflare Pages, zwykły serwer).

## Struktura

| Plik | Co zawiera |
|---|---|
| `index.html` | szkielet strony: nagłówek, menu, przełącznik PL/EN, stopka z ostrzeżeniem o ryzyku |
| `js/ustawienia.js` | **domena, dane właściciela, zapis na powiadomienia, baner cookies** |
| `js/i18n.js` | wersja angielska (przełącznik PL/EN) |
| `css/style.css` | wygląd (jasny i ciemny motyw) |
| `js/instrumenty.js` | lista rynków: EUR/USD, GBP/USD, USD/JPY, USD/PLN, złoto, srebro, ropa WTI, Nasdaq 100, S&P 500, DAX, bitcoin |
| `js/analizy.js` | **tu dodajesz analizy** |
| `js/app.js` | logika: podstrony, filtry, drabinka poziomów, wykres TradingView |

## Podstrony

`#start`, `#rynki`, `#analizy` (skuteczność i filtry: instrument, kierunek, wynik), `#przeglad`, `#kalendarz`, `#o-stronie`, `#powiadomienia`, `#kontakt`, `#ryzyko`, `#regulamin`, `#prywatnosc`, `#cookies`, strona każdego instrumentu (np. `#xauusd`) i każdej analizy (`#a-<id>`).

## Jak dodać analizę

Skopiuj jeden wpis w `js/analizy.js`, zmień pola i zapisz. Strona sama posortuje analizy po dacie, ustawi nastawienie instrumentu (wzrostowy / spadkowy / neutralny) i narysuje drabinkę poziomów. Wpisy z `przyklad: true` są demonstracyjne; usuń je, gdy dodasz własne.

## Notowania i wykresy na żywo (TradingView)

Darmowe widżety TradingView, bez konta i klucza API:
- pasek notowań pod nagłówkiem na każdej podstronie,
- strona „Rynki”: kafelek z kursem, zmianą i wykresem z ostatniego miesiąca dla każdego instrumentu,
- strona instrumentu i strona analizy: aktualny kurs ze zmianą dzienną oraz pełny wykres świecowy.

W podglądzie w Claude zewnętrzne skrypty są blokowane, więc zamiast widżetów widać opis i link do TradingView. Żeby zobaczyć je na żywo, rozpakuj `strona.zip` i otwórz `index.html` w przeglądarce.

## Przed publikacją dla klientów

- Uzupełnić sekcję „O stronie” (autor, kontakt).
- Zastąpić przykładowe analizy własnymi.
- Sprawdzić treść ostrzeżenia o ryzyku z prawnikiem, jeśli strona ma służyć pozyskiwaniu klientów.
- Uzupełnić `js/ustawienia.js`: domena, właściciel, adres, e-mail, usługa newslettera, kanał na Telegramie.
- Dać regulamin, politykę prywatności i stronę o cookies do sprawdzenia prawnikowi (to projekty).
- Rozważyć hosting czcionek na własnym serwerze zamiast Google Fonts (mniej danych przekazywanych do Google).
- Uruchomić `python3 narzedzia/publikuj.py` i wrzucić katalog `strona-publikacja` na hosting.

## Przegląd rynku AI (`js/przeglad.js`)

Plik z przeglądem dnia: najważniejsze wydarzenia, kurs i komentarz dla każdego instrumentu, kalendarz tygodnia i lista źródeł. Przygotowuje go Claude na podstawie publicznych źródeł (serwisy finansowe, raporty brokerów, kalendarze makro). Każda liczba ma źródło; czego nie da się potwierdzić, zostaje jako „brak danych”. Strona pokazuje przegląd na stronie głównej, na podstronie „Przegląd AI”, w kalendarzu i na stronie każdego instrumentu.

Investing.com nie jest pobierany automatycznie: jego regulamin zabrania automatycznego zbierania danych. Kalendarz na żywo i newsy pochodzą z oficjalnych widżetów TradingView.

## Asystent AI (`js/asystent.js`)

Okno czatu w prawym dolnym rogu. W podglądzie w Claude odpowiada na pytania o dane z przeglądu AI i analiz (korzysta z AI na koncie oglądającego) i na prośbę zleca odświeżenie przeglądu (zaplanowane zadanie „Przegląd rynku AI – na żądanie” przez konektor Claude Code Remote). Na publicznej stronie zamiast czatu wyświetla informację; uruchomienie go dla klientów wymaga serwera z kluczem API.

## Kalendarz ekonomiczny (`js/kalendarz.js`)

Własny kalendarz: data i godzina (czas polski), kraj, wydarzenie, instrumenty, na które wpływa, prognoza i poprzedni odczyt, oraz siła wpływu w skali 1–4 głów byka (1–2 zielone, 3 pomarańczowa, 4 czerwona i wściekła). Filtry: siła wpływu, kraj, instrument. AI aktualizuje go razem z przeglądem według `narzedzia/AKTUALIZACJA.md`.

## Skuteczność analiz

Każda analiza ma status: w toku, trafiona, nietrafiona albo bez rozstrzygnięcia (pole `wynik` w `js/analizy.js`). Zasady rozliczania są na podstronie Metodologia; AI rozlicza otwarte analizy przy każdej aktualizacji. Strona „Analizy” pokazuje trafność (trafione / rozliczone), liczby w każdym statusie i wynik dla każdego instrumentu; strona główna pokazuje trafność w nagłówku.

## Powiadomienia

Formularz e-mail i przycisk kanału na Telegramie (strona główna i `#powiadomienia`). Działają po wpisaniu w `js/ustawienia.js` adresu formularza z usługi newslettera (`emailFormularz`) i linku do kanału (`telegram`); do tego czasu są widoczne, ale wyłączone.

## Publikacja (`narzedzia/publikuj.py`)

`python3 narzedzia/publikuj.py` tworzy katalog `strona-publikacja` gotowy do wrzucenia na hosting (np. Cloudflare Pages, Netlify, GitHub Pages; wszystkie mają darmowe plany dla stron statycznych):
- każda analiza dostaje własny adres `/analiza/<id>/` i `/en/analysis/<id>/` z tytułem, opisem i danymi dla Google oraz podglądem linku w mediach społecznościowych,
- `sitemap.xml` i `robots.txt`,
- strona główna z adresem kanonicznym.

Adresy biorą domenę z `js/ustawienia.js`.

## Pliki cookie

Strona zapisuje tylko język i decyzję o cookies. Widżety TradingView (mogą zapisywać pliki cookie) ładują się dopiero po kliknięciu „Akceptuję” na banerze; „Ustawienia cookies” w stopce pozwala zmienić decyzję.

## Wersja angielska

Przełącznik PL/EN w nagłówku. Teksty interfejsu są w kodzie (`L("po polsku", "in English")`), treści w polach z końcówką `_en` w plikach danych. AI uzupełnia wersję angielską przy każdej aktualizacji. Link `?lang=en` otwiera stronę od razu po angielsku.
