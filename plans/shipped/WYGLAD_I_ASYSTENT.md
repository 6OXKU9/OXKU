---
status: shipped
priority: P1
owner: Claude + Bartek
type: feature
depends_on: []
blocks: []
last_updated: 2026-11-03
start_date: 2026-11-03
eta: 2026-11-03
in_flight: false
---

# Plan: Poprawki wyglądu i darmowy asystent

## Status

- **Overall:** Done
- **Phase 0 (Przegląd na telefonie, tablecie i komputerze):** Done (2026-11-03)
- **Phase 1 (Nagłówek na tablecie, wykres poziomów, zapasowe kursy):** Done (2026-11-03)
- **Phase 2 (Asystent: analizy w toku, nastawienie, zasady, jutro):** Done (2026-11-03)

**Next action:** Brak; kolejne poprawki z przeglądu wyglądu trafiają do zaległości.
**Last updated:** 2026-11-03

---

## Context

Przegląd wtyczką web-review pokazał, że na tablecie nagłówek wychodził poza ekran, a ceny na wykresie poziomów nachodziły na siebie. Bartek wybrał darmowego asystenta (bez płatnego AI).

## Goals

1. Strona mieści się w szerokości 375, 768 i 1440 px
2. Asystent odpowiada na częste pytania bez kosztów

## Non-goals

- Płatne AI w asystencie (Bartek wybrał wersję darmową 3 lis)

## Phases

### Phase 0: Przegląd na telefonie, tablecie i komputerze (shipped)

- Przegląd na telefonie, tablecie i komputerze

### Phase 1: Nagłówek na tablecie, wykres poziomów, zapasowe kursy (shipped)

- Nagłówek na tablecie, wykres poziomów, zapasowe kursy

### Phase 2: Asystent: analizy w toku, nastawienie, zasady, jutro (shipped)

- Asystent: analizy w toku, nastawienie, zasady, jutro

## Implementation notes

Testy: chk2, obj, autor, lw oraz bot2.js w scratchpadzie. Formatowanie liczb w tabelach (4000 vs 28 300) zostało w zaległościach.

## Open questions

- Brak
