---
status: shipped
priority: P0
owner: Claude + Bartek
type: infra
depends_on: []
blocks: ["WERYFIKACJA_TRADINGVIEW"]
last_updated: 2026-11-03
start_date: 2026-11-03
eta: 2026-11-03
in_flight: false
---

# Plan: Przeniesienie strony na Cloudflare Pages

## Status

- **Overall:** Done
- **Phase 0 (Diagnoza (limit kredytów Netlify)):** Done (2026-11-03)
- **Phase 1 (Hasło dla Cloudflare (functions/_middleware.js)):** Done (2026-11-03)
- **Phase 2 (Przełączenie adresu na oxku.pages.dev):** Done (2026-11-03)

**Next action:** Bartek usuwa stary projekt w panelu Netlify.
**Last updated:** 2026-11-03

---

## Context

Netlify Free daje 300 kredytów miesięcznie, a każde wdrożenie kosztuje 15, więc strona stanęła po ok. 20 aktualizacjach. Cloudflare Pages ma 500 darmowych wdrożeń miesięcznie, co wystarcza na 3 przeglądy dziennie i pobieranie świec.

## Goals

1. Strona na żywo aktualizuje się po każdym pushu na main
2. Strona dalej wymaga loginu i hasła
3. Zero kosztów hostingu

## Non-goals

- Własna domena (osobna decyzja przy publikacji publicznej)
- Płatny plan Netlify

## Phases

### Phase 0: Diagnoza (limit kredytów Netlify) (shipped)

- Diagnoza (limit kredytów Netlify)

### Phase 1: Hasło dla Cloudflare (functions/_middleware.js) (shipped)

- Hasło dla Cloudflare (functions/_middleware.js)

### Phase 2: Przełączenie adresu na oxku.pages.dev (shipped)

- Przełączenie adresu na oxku.pages.dev

## Implementation notes

Ustawienia Cloudflare: repo 6OXKU9/OXKU, gałąź main, framework None, brak polecenia budowania, katalog wyjściowy strona-test. Hasło sprawdza functions/_middleware.js (skrót SHA-256 z login:hasło). netlify.toml i funkcja Netlify usunięte z repo 3 lis.

## Open questions

- [ ] Czy Bartek usunął projekt na Netlify (inaczej w grudniu Netlify może zbudować stronę bez hasła)?
