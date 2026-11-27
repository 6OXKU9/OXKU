---
status: active
priority: P0
owner: Claude + Bartek
type: ops
depends_on: ["HOSTING_CLOUDFLARE"]
blocks: []
last_updated: 2026-11-27
start_date: 2026-10-18
eta: 2026-11-10
in_flight: true
---

# Plan: Automatyczne aktualizacje przed sesjami

## Status

- **Overall:** Done technicznie; działa w trybie stałym
- **Phase 0 (Przegląd rano i wieczorem):** Done (2026-10-18)
- **Phase 1 (Aktualizacja przed sesją w USA i częstsze świece):** Done (2026-11-03)
- **Phase 2 (Tydzień obserwacji bez braków danych):** Done (2026-11-16): od 3 lis wszystkie trzy codzienne aktualizacje trafiały na stronę; USD/PLN bywa bez świeżego notowania i jest wtedy podawany z zamknięcia CNBC.

**Next action:** Kontynuować codzienne aktualizacje; przenieść plan do shipped przy następnym /plans sync.
**Last updated:** 2026-11-27

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
