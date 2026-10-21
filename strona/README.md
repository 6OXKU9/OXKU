# AnalizyRynku: strona z analizami

Statyczna strona (HTML/CSS/JS, bez serwera i bazy danych). Działa po otwarciu `index.html` w przeglądarce i da się ją wrzucić na dowolny hosting (GitHub Pages, Netlify, Cloudflare Pages, zwykły serwer).

## Struktura

| Plik | Co zawiera |
|---|---|
| `index.html` | szkielet strony: nagłówek, menu, przełącznik PL/EN, stopka z ostrzeżeniem o ryzyku |
| `js/ustawienia.js` | **domena, dane właściciela, zapis na powiadomienia, baner cookies** |
| `js/i18n.js` | wersja angielska (przełącznik PL/EN) |
| `css/style.css` | wygląd (jasny i ciemny motyw) |
| `img/` | ikona strony (`favicon.svg`) i obrazek do udostępnień w mediach społecznościowych (`og.png`, 1200×630) |
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

## Tryb autora i próg trafności (nie cofać przy aktualizacjach)
- **Tryb autora:** komunikaty robocze (oznaczenie „szkic AI”, baner o analizach przykładowych i szkicach, instrukcje edycji plików) widzi tylko autor. Włącza się sam przy podglądzie lokalnym (plik otwarty z dysku, localhost, podgląd w Claude). Na stronie publicznej: dopisz do adresu `?autor=1`, żeby go włączyć, albo `?autor=0`, żeby zobaczyć stronę jak gość. Wybór zapamiętuje przeglądarka. Gość widzi przy szkicach tylko znaczek AI. Kod: `AUTOR` w `js/app.js`.
- **Próg trafności:** procent trafności pokazujemy dopiero od 5 rozliczonych analiz (`MIN_ROZLICZONYCH` w `js/app.js`), na stronie głównej, w panelu skuteczności i przy instrumentach. Wcześniej strona pokazuje „trafione / rozliczone” (np. 0/1), żeby pojedynczy wynik nie zniekształcał obrazu.
- **Drabinka poziomów** pokazuje osobno cenę z publikacji analizy („W ANALIZIE”, szara linia) i aktualny kurs z przeglądu AI („TERAZ”, złota linia).

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

## Panel autora i licznik odwiedzin

- `#panel` (link „Panel autora” w stopce) widzi tylko autor (`?autor=1`); gość trafia na stronę główną.
- Odwiedziny liczy GoatCounter (bez cookies, bez zapisu IP): kod konta w `js/ustawienia.js` → `statystyki.goatcounter`. Pusty = licznik wyłączony. Wejścia w trybie autora nie są liczone.
- Liczby w panelu pochodzą z publicznych liczników GoatCounter (`/counter/…json`), więc w ustawieniach GoatCounter musi być włączone „Allow adding visitor counts on your website”.
- Strona nie ma kont użytkowników; subskrybentów e-mail widać w panelu usługi newslettera.

## Wykresy z poziomami analiz

- Na stronie instrumentu i analizy jest własny wykres świecowy (biblioteka Lightweight Charts od TradingView, licencja Apache 2.0, plik `js/vendor/`) z naniesionymi R1/R2, S1/S2, ceną z analizy i znacznikiem dnia publikacji oraz rozliczenia.
- Świece dzienne są w `js/ohlc.js`, generowanym przez `narzedzia/pobierz_wykresy.py`. Uruchamia go GitHub Actions (`.github/workflows/wykresy.yml`) po sesji w USA i rano, kopia jest w `dane/ohlc.js` w repozytorium. Bez tego pliku sekcja wykresu się nie pokazuje.
- `korektaWykresu` w analizie przesuwa poziomy na wykresie, gdy wykres pokazuje inny kontrakt (ropa po zmianie kontraktu).
