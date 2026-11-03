# Analizy rynku

- `strona/` – źródła strony (opis w `strona/README.md`).
- `strona-test/` – wygenerowana wersja próbna, którą publikuje Cloudflare Pages.

Claude aktualizuje dane przed sesjami (Europa i Londyn, USA, Azja) i wysyła zmiany tutaj; Cloudflare Pages publikuje je automatycznie pod adresem https://oxku.pages.dev. Od 3 lis 2026 projekt nie korzysta z Netlify (darmowy plan nie starczał na liczbę aktualizacji).

## Cloudflare Pages

Ustawienia projektu w Cloudflare: repozytorium `6OXKU9/OXKU`, gałąź `main`, framework „None”, polecenie budowania puste, katalog wyjściowy `strona-test`. Darmowy plan: 500 wdrożeń miesięcznie.

## Strona niepubliczna (hasło)

Każde wejście wymaga loginu i hasła. Sprawdza je `functions/_middleware.js` na serwerze Cloudflare, więc bez hasła serwer nie wydaje żadnego pliku strony. W repozytorium jest tylko skrót SHA-256 z `login:hasło`. Zmiana hasła: podmień skrót (`printf 'login:haslo' | sha256sum`). Ponowne udostępnienie strony wszystkim: usuń ten plik.
