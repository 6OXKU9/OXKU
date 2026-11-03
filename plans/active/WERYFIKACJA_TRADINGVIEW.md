---
status: active
priority: P1
owner: Claude + Bartek
type: feature
depends_on: ["HOSTING_CLOUDFLARE"]
blocks: []
last_updated: 2026-11-03
start_date: 2026-11-03
eta: 2026-11-05
in_flight: true
---

# Plan: Wykresy TradingView na żywej stronie

## Status

- **Overall:** Blocked (Phase 1 of 2)
- **Phase 0 (Kod widżetów i test z podstawionym skryptem):** Done (2026-11-03)
- **Phase 1 (Potwierdzenie na żywej stronie):** Blocked (eta 2026-11-05)

**Next action:** Bartek otwiera oxku.pages.dev, klika Akceptuję i sprawdza wykres EUR/USD.
**Last updated:** 2026-11-03

---

## Context

Widżety TradingView ładują się dopiero po zgodzie na pliki cookie. W podglądzie Claude są zawsze blokowane, a środowisko Claude nie łączy się z TradingView, więc potwierdzić może tylko Bartek.

## Goals

1. Po kliknięciu Akceptuję widać pasek notowań, kurs, wykres i wiadomości bez odświeżania

## Non-goals

- Własne wykresy zamiast TradingView (są już wykresy poziomów z danych CNBC)

## Phases

### Phase 0: Kod widżetów i test z podstawionym skryptem (shipped)

- Kod widżetów i test z podstawionym skryptem

### Phase 1: Potwierdzenie na żywej stronie (blocked)

- Potwierdzenie na żywej stronie

## Implementation notes

Symbole: FX:EURUSD, OANDA:XAUUSD, OANDA:DE30EUR itd. (js/instrumenty.js). Brak nagłówka CSP, który mógłby je blokować.

## Open questions

- [ ] Czy któryś symbol pokazuje komunikat, że jest dostępny tylko na TradingView?
