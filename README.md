# Analizy rynku

- `strona/` – źródła strony (opis w `strona/README.md`).
- `strona-test/` – wygenerowana wersja próbna, którą publikuje Netlify (`netlify.toml`).

Claude aktualizuje dane rano i po sesji w USA i wysyła zmiany tutaj; Netlify publikuje je automatycznie.

## Strona niepubliczna (hasło)

Od 21 paź 2026 każde wejście na oxku.netlify.app wymaga loginu i hasła. Sprawdza je funkcja brzegowa Netlify `netlify/edge-functions/haslo.js` (darmowa w planie Starter), więc bez hasła serwer nie wydaje żadnego pliku strony. W repozytorium jest tylko skrót SHA-256 z `login:hasło`. Zmiana hasła: podmień skrót (`printf 'login:haslo' | sha256sum`). Ponowne udostępnienie strony wszystkim: usuń ten plik.
