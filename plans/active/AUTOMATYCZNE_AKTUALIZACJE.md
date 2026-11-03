---
status: active
priority: P0
owner: Claude + Bartek
type: ops
depends_on: ["HOSTING_CLOUDFLARE"]
blocks: []
last_updated: 2026-11-03
start_date: 2026-10-18
eta: 2026-11-10
in_flight: true
---

# Plan: Automatyczne aktualizacje przed sesjami

## Status

- **Overall:** In progress (Phase 2 of 3)
- **Phase 0 (Przegląd rano i wieczorem):** Done (2026-10-18)
- **Phase 1 (Aktualizacja przed sesją w USA i częstsze świece):** Done (2026-11-03)
- **Phase 2 (Tydzień obserwacji bez braków danych):** In progress (eta 2026-11-10)

**Next action:** Sprawdzić, że jutrzejsze trzy aktualizacje (7:44, 13:47, 22:24) docierają na oxku.pages.dev.
**Last updated:** 2026-11-03

---

## Context

Strona ma być aktualna przed otwarciem każdej sesji: Europa i Londyn, USA, Azja. Dane rynkowe, kalendarz i rozliczenia analiz robi Claude według strona/narzedzia/AKTUALIZACJA.md, a świece pobiera GitHub Actions.

## Goals

1. 3 aktualizacje w dni robocze: 7:44, 13:47 (wg czasu w Nowym Jorku), 22:24
2. Świece dnia zawsze dostępne rano (4 pobrania na dobę)
3. Każda otwarta analiza rozliczona w dniu, w którym padnie poziom

## Non-goals

- Osobna aktualizacja przed Tokio o 1:00 (po 22:24 nie ma nowych danych)
- Powiadomienia wysyłane na zewnątrz

## Phases

### Phase 0: Przegląd rano i wieczorem (shipped)

- Przegląd rano i wieczorem

### Phase 1: Aktualizacja przed sesją w USA i częstsze świece (shipped)

- Aktualizacja przed sesją w USA i częstsze świece

### Phase 2: Tydzień obserwacji bez braków danych (in progress)

- Tydzień obserwacji bez braków danych

## Implementation notes

Kopiowanie do repo przez cp -r folder/. folder/ (rm -rf jest blokowane). WTI 23 paź: horyzont mija ok. 6 lis. Wyniki wyborów w USA przyjdą w nocy na 4 lis.

## Open questions

- Brak
