// Asystent AI w prawym dolnym rogu.
// Odpowiada na pytania o dane z przeglądu AI i analiz, a na prośbę zleca odświeżenie przeglądu.
// Działa w podglądzie w Claude (korzysta z AI na koncie oglądającego). Na publicznej stronie
// potrzebny będzie własny serwer z kluczem API; do tego czasu okno pokazuje informację zamiast czatu.
(function () {
  "use strict";

  var TRIGGER_ODSWIEZANIA = "trig_01W5WCKqk6SUGhtuvq8SQzMD"; // zadanie „Przegląd rynku AI – na żądanie”
  var SERWER = "Claude Code Remote";
  var MAKS_TUR = 12;

  var I = window.I18N, L = I.L;
  var INS = window.INSTRUMENTY || [], AN = (window.ANALIZY || []).slice().sort(function (a, b) { return a.data < b.data ? 1 : a.data > b.data ? -1 : 0; }), PR = window.PRZEGLAD || null;
  var tury = [], ctl = null, sample = null, mcp = null, gotowe = false;

  // ---------- Interfejs ----------
  var root = document.createElement("div");
  root.className = "bot";
  function szkielet() { return (
    '<section class="bot__panel" id="bot-panel" role="dialog" aria-label="' + L("Asystent AI", "AI assistant") + '" hidden>' +
      '<header class="bot__head"><div><b>' + L("Asystent rynkowy", "Market assistant") + '</b><span id="bot-stan">' + L("Dane z przeglądu AI", "Data from the AI brief") + '</span></div>' +
        '<button type="button" class="bot__x" id="bot-zamknij" aria-label="' + L("Zamknij", "Close") + '">×</button></header>' +
      '<div class="bot__log" id="bot-log" aria-live="polite"></div>' +
      '<div class="bot__chips" id="bot-chips"></div>' +
      '<form class="bot__form" id="bot-form"><label class="sr" for="bot-in">' + L("Wiadomość", "Message") + '</label>' +
        '<textarea id="bot-in" rows="1" placeholder="' + L("Zapytaj o rynek lub poproś o aktualizację", "Ask about the market or request an update") + '"></textarea>' +
        '<button type="submit" class="bot__send" id="bot-send" aria-label="' + L("Wyślij", "Send") + '">↑</button></form>' +
    "</section>" +
    '<button type="button" class="bot__fab" id="bot-fab" aria-expanded="false" aria-controls="bot-panel">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/></svg><span>' + L("Asystent AI", "AI assistant") + "</span></button>"); }
  root.innerHTML = szkielet();
  document.body.appendChild(root);

  var $ = function (id) { return document.getElementById(id); };
  var panel = $("bot-panel"), log = $("bot-log"), form = $("bot-form"), input = $("bot-in"), send = $("bot-send"), fab = $("bot-fab");

  function dymek(kto, tekst) {
    var d = document.createElement("div");
    d.className = "msg msg--" + kto;
    d.textContent = tekst;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
    return d;
  }
  function info(tekst) { var d = dymek("info", tekst); return d; }
  function czasPL(iso) { return new Date(iso).toLocaleString(I.lang === "en" ? "en-GB" : "pl-PL", { timeZone: "Europe/Warsaw", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }); }

  function otworz(on) {
    panel.hidden = !on;
    fab.setAttribute("aria-expanded", on ? "true" : "false");
    root.classList.toggle("is-open", on);
    if (on) { start(); setTimeout(function () { input.focus(); }, 30); }
  }
  fab.addEventListener("click", function () { otworz(panel.hidden); });
  $("bot-zamknij").addEventListener("click", function () { otworz(false); fab.focus(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) { otworz(false); fab.focus(); } });
  input.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); if (!ctl) form.requestSubmit(); } });
  input.addEventListener("input", function () { input.style.height = "auto"; input.style.height = Math.min(input.scrollHeight, 120) + "px"; });

  // ---------- Kontekst dla AI ----------
  function kontekst() {
    var ins = INS.map(function (i) {
      var p = PR && PR.instrumenty[i.id];
      return "- " + i.symbol + " (" + i.nazwa + ", id " + i.id + "): " +
        (p ? (p.kurs != null ? "kurs " + p.kurs : "kurs: brak danych") + (p.zmiana != null ? ", dzień " + p.zmiana + "%" : "") + (p.tydzien != null ? ", tydzień " + p.tydzien + "%" : "") + ". " + (p.notka || "") : "brak w przeglądzie");
    }).join("\n");
    var an = AN.slice(0, 20).map(function (a) {
      return "- " + a.data + " " + a.instrument + " " + a.interwal + ", nastawienie " + a.kierunek + (a.przyklad ? " (ANALIZA PRZYKŁADOWA, poziomy ilustracyjne)" : "") + ", wynik: " + (a.wynik && a.wynik.status || "w toku") +
        ": " + a.tytul + ". Opory " + (a.poziomy.opory || []).join(", ") + "; wsparcia " + (a.poziomy.wsparcia || []).join(", ") + ".";
    }).join("\n");
    var KAL = window.KALENDARZ;
    var kal = KAL ? KAL.wydarzenia.map(function (e) {
      return "- " + new Date(e.czas).toLocaleString("pl-PL", { timeZone: "Europe/Warsaw", weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) +
        " " + e.kraj + " " + e.nazwa + ", wpływ " + e.wplyw + "/4" + (e.prognoza ? ", prognoza " + e.prognoza : "") + (e.poprzednio ? ", poprzednio " + e.poprzednio : "") + (e.aktualnie ? ", odczyt " + e.aktualnie : "");
    }).join("\n") : (PR ? PR.kalendarz.map(function (d) { return "- " + d.dzien + ": " + d.wydarzenia.join("; "); }).join("\n") : "brak");
    var zr = PR ? PR.zrodla.map(function (z, i) { return "[" + (i + 1) + "] " + z.nazwa; }).join("\n") : "";
    return "Jesteś asystentem rynkowym na stronie „AnalizyRynku”. " + (I.lang === "en" ? "Użytkownik korzysta z angielskiej wersji strony: odpowiadaj PO ANGIELSKU (dane poniżej są po polsku, przetłumacz je). Odpowiadasz krótko" : "Odpowiadasz po polsku, krótko") + " (2–5 zdań), konkretnie, bez formatowania Markdown.\n" +
      "Opierasz się WYŁĄCZNIE na danych poniżej. Nie znasz bieżących notowań poza nimi i nie możesz przeglądać internetu. " +
      "Gdy czegoś nie ma w danych, powiedz to wprost i zaproponuj aktualizację. Zawsze podawaj, z kiedy są dane. Nie udzielasz rekomendacji inwestycyjnych.\n" +
      "Jeśli użytkownik prosi o aktualizację, odświeżenie albo najnowsze dane, wywołaj narzędzie zlec_aktualizacje z krótkim opisem prośby, a potem powiedz, że aktualizacja zajmie kilka minut i strona odświeży się sama.\n\n" +
      "PRZEGLĄD AI: zaktualizowano " + (PR ? czasPL(PR.aktualizacja) + ", stan na: " + PR.stanNa : "brak przeglądu") + "\n" +
      (PR ? "Nagłówek: " + PR.naglowek + "\nNajważniejsze:\n- " + PR.punkty.join("\n- ") + "\n" : "") +
      "\nINSTRUMENTY:\n" + ins + "\n\nKALENDARZ EKONOMICZNY (czas polski, wpływ 1–4; dziś jest " + new Date().toLocaleDateString("pl-PL", { timeZone: "Europe/Warsaw", weekday: "long", day: "numeric", month: "long" }) + "):\n" + kal + "\n\nANALIZY NA STRONIE:\n" + an + "\n\nŹRÓDŁA PRZEGLĄDU:\n" + zr;
  }

  // ---------- Zlecanie aktualizacji ----------
  function zlecAktualizacje(opis) {
    if (!mcp) return Promise.reject(new Error("brak_polaczenia"));
    return mcp.callTool(SERWER, "fire_trigger", { trigger_id: TRIGGER_ODSWIEZANIA, text: "Prośba z asystenta na stronie: " + String(opis || "odśwież wszystkie dane").slice(0, 500) });
  }
  function bladMcp(e) {
    var c = e && e.code;
    if (c === "server_not_connected" || c === "needs_reauth") return L("Aby zlecać aktualizacje, połącz konektor „Claude Code Remote” w ustawieniach claude.ai (Ustawienia → Konektory).", "To request updates, connect the “Claude Code Remote” connector in claude.ai settings (Settings → Connectors).");
    if (c === "not_in_manifest" || c === "approval_required" || c === "not_granted") return L("Zlecanie aktualizacji wymaga Twojej zgody. Spróbuj ponownie i zaakceptuj okno z prośbą o dostęp.", "Requesting updates needs your permission. Try again and accept the access prompt.");
    return L("Nie udało się zlecić aktualizacji. Możesz poprosić o nią w wątku projektu.", "The update could not be requested. You can ask for it in the project thread.");
  }

  // ---------- Start ----------
  function start() {
    if (gotowe) return;
    gotowe = true;
    var naglowek = PR ? L("Dane z przeglądu AI z ", "Data from the AI brief of ") + czasPL(PR.aktualizacja) + "." : L("Przegląd AI nie jest jeszcze gotowy.", "The AI brief is not ready yet.");
    if (!window.claude || typeof window.claude.use !== "function") return bezAI(naglowek);
    info(L("Łączę z asystentem…", "Connecting to the assistant…"));
    Promise.all([window.claude.use("sample").catch(function () { return null; }), window.claude.use("mcp").catch(function () { return null; })]).then(function (r) {
      sample = r[0]; mcp = r[1];
      log.innerHTML = "";
      if (!sample) return bezAI(naglowek);
      dymek("bot", L("Cześć! Odpowiem na pytania o kursy, kalendarz i analizy na tej stronie. ", "Hi! I can answer questions about prices, the calendar and the analyses on this site. ") + naglowek + L(" Mogę też zlecić aktualizację danych.", " I can also request a data update."));
      chipy();
      window.addEventListener("hashchange", chipy);
    }).catch(function () { bezAI(naglowek); });
  }
  // Tryb podstawowy (bez AI): odpowiedzi składane z danych przeglądu, kalendarza i analiz na stronie.
  var lokalny = false;
  function bezAI(naglowek) {
    lokalny = true;
    log.innerHTML = "";
    $("bot-stan").textContent = L("Tryb podstawowy: dane ze strony", "Basic mode: data from this site");
    dymek("bot", L("Cześć! Odpowiem na pytania o kursy, analizy, kalendarz i skuteczność na podstawie danych z tej strony. ", "Hi! I can answer questions about prices, analyses, the calendar and the track record using the data on this site. ") + naglowek);
    chipy();
    window.addEventListener("hashchange", chipy);
  }
  var ALIASY = [
    [/z[łl]ot(y|ego|ówk|em)|\bpln\b|usd\/?pln|zloty/i, "usdpln"], [/z[łl]ot|gold|xau/i, "xauusd"], [/srebr|silver|xag/i, "xagusd"],
    [/rop[aąęy]|ropie|\boil\b|wti|brent|crude/i, "wti"], [/bitcoin|\bbtc/i, "btcusd"], [/\bdax|de40|niemieck/i, "dax"],
    [/nasdaq|nas100|ndx/i, "nasdaq"], [/s&p|sp ?500|us500/i, "sp500"], [/eur\/?usd|\beuro?\b/i, "eurusd"],
    [/gbp|funt|pound|cable/i, "gbpusd"], [/jpy|\bjen|\byen/i, "usdjpy"]
  ];
  var KIER_EN = { wzrostowy: "bullish", spadkowy: "bearish", neutralny: "neutral" };
  function liczba(v, d) { return Number(v).toLocaleString(I.lang === "en" ? "en-US" : "pl-PL", { minimumFractionDigits: d, maximumFractionDigits: d }); }
  function pole(o, k) { return I.pole(o, k); }
  function godz(e) { return new Date(e.czas).toLocaleString(I.lang === "en" ? "en-GB" : "pl-PL", { timeZone: "Europe/Warsaw", weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }); }
  function wydarzenia(filtr, n) {
    var K = window.KALENDARZ, t = Date.now() - 30 * 60000;
    return K ? K.wydarzenia.filter(function (e) { return new Date(e.czas).getTime() > t && (!filtr || filtr(e)); })
      .sort(function (a, b) { return new Date(a.czas) - new Date(b.czas); }).slice(0, n) : [];
  }
  function listaWyd(arr) { return arr.map(function (e) { return "• " + godz(e) + " " + e.kraj + " " + pole(e, "nazwa") + " (" + L("wpływ ", "impact ") + e.wplyw + "/4)"; }).join("\n"); }
  function oInstrumencie(i) {
    var p = PR && PR.instrumenty[i.id], a = AN.filter(function (x) { return x.instrument === i.id; })[0], t = i.symbol + " (" + pole(i, "nazwa") + ")";
    if (p && p.kurs != null) t += ": " + L("kurs ", "price ") + liczba(p.kurs, i.dec) + (p.zmiana != null ? " (" + (p.zmiana > 0 ? "+" : "") + liczba(p.zmiana, 2) + "% " + L("dziennie", "on the day") + ")" : "");
    t += ". " + (pole(p || {}, "notka") || "");
    if (a) {
      var po = a.poziomy, r = po.opory.filter(function (v) { return v > po.cena; }), s = po.wsparcia.filter(function (v) { return v < po.cena; });
      t += "\n" + L("Analiza z ", "Analysis of ") + a.data + ": " + (I.lang === "en" ? KIER_EN[a.kierunek] : a.kierunek) + ", " + pole(a, "tytul") + "." +
        (r.length ? " " + L("Najbliższy opór ", "Nearest resistance ") + liczba(Math.min.apply(null, r), i.dec) + "." : "") +
        (s.length ? " " + L("Najbliższe wsparcie ", "Nearest support ") + liczba(Math.max.apply(null, s), i.dec) + "." : "");
    }
    var w = wydarzenia(function (e) { return (e.instrumenty || []).indexOf(i.id) >= 0; }, 3);
    if (w.length) t += "\n" + L("Najbliższe wydarzenia:", "Upcoming events:") + "\n" + listaWyd(w);
    return t;
  }
  function odpowiedzLokalna(q) {
    if (/od[śs]wie[żz]|zaktualizuj|^\s*(refresh|update)\b/i.test(q))
      return L("W tej wersji strony nie mogę zlecić aktualizacji. Dane na stronie aktualizuje AI rano i po sesji; pobrana kopia pokazuje stan z dnia pobrania. ", "This version of the site cannot request updates. AI updates the site data in the morning and after the session; a downloaded copy shows the state from the day it was downloaded. ") + (PR ? L("Ostatnia aktualizacja: ", "Last update: ") + czasPL(PR.aktualizacja) + "." : "");
    var ids = [];
    ALIASY.forEach(function (x) { if (x[0].test(q) && ids.indexOf(x[1]) < 0) ids.push(x[1]); });
    if (ids.length) return ids.slice(0, 3).map(function (id) { return oInstrumencie(INS.filter(function (i) { return i.id === id; })[0]); }).join("\n\n");
    if (/skuteczn|trafno|trafion|track|hit|wynik/i.test(q)) {
      var c = { trafiona: 0, nietrafiona: 0 }, otw = 0;
      AN.forEach(function (a) { var s = a.wynik && a.wynik.status; if (c[s] != null) c[s]++; else if (!s || s === "w toku") otw++; });
      var z = c.trafiona + c.nietrafiona;
      return z ? L("Trafność: " + Math.round(c.trafiona / z * 100) + "% (" + c.trafiona + " z " + z + " rozliczonych). W toku: " + otw + ".", "Hit rate: " + Math.round(c.trafiona / z * 100) + "% (" + c.trafiona + " of " + z + " settled). Open: " + otw + ".")
        : L("Żadna analiza nie jest jeszcze rozliczona; w toku: " + otw + ". Trafność pojawi się po pierwszych rozliczeniach.", "No analysis has been settled yet; open: " + otw + ". The hit rate appears after the first settlements.");
    }
    if (/dzi[śs]|dzisiaj|today/i.test(q)) {
      var d = new Date().toLocaleDateString("en-CA", { timeZone: "Europe/Warsaw" });
      var dz = wydarzenia(function (e) { return new Date(e.czas).toLocaleDateString("en-CA", { timeZone: "Europe/Warsaw" }) === d; }, 10);
      return dz.length ? L("Dziś w kalendarzu:", "Today in the calendar:") + "\n" + listaWyd(dz) : L("Dziś nie ma zaplanowanych wydarzeń. Najbliższe ważne:", "No events scheduled today. Next major ones:") + "\n" + listaWyd(wydarzenia(function (e) { return e.wplyw >= 3; }, 4));
    }
    if (/kalendar|tydzie|tygodni|week|wydarze|event|fed|ebc|ecb|boe|boj/i.test(q))
      return L("Najważniejsze nadchodzące wydarzenia:", "Key upcoming events:") + "\n" + listaWyd(wydarzenia(function (e) { return e.wplyw >= 3; }, 6));
    if (/podsumuj|rynek|rynk|zmieni|nowego|najważniejsz|summary|market|changed|new|developments/i.test(q) && PR)
      return pole(PR, "naglowek") + "\n• " + pole(PR, "punkty").join("\n• ") + "\n" + L("Stan na: ", "As of: ") + pole(PR, "stanNa") + ".";
    return L("W trybie podstawowym odpowiadam na pytania o konkretny rynek (np. „złoto”, „EUR/USD”, „DAX”), kalendarz („co dziś?”, „ten tydzień”), podsumowanie rynku i skuteczność analiz. Swobodna rozmowa z AI ruszy po podłączeniu klucza API.",
      "In basic mode I answer questions about a specific market (e.g. “gold”, “EUR/USD”, “DAX”), the calendar (“today”, “this week”), a market summary and the track record. Free-form AI chat starts once an API key is connected.");
  }
  // Gotowe pytania. Pierwsze dotyczą instrumentu z otwartej podstrony, jeśli jest.
  var PYTANIA_EN = [
    ["Market summary", "Give me a short summary of the current situation across all markets."],
    ["What changed?", "What are the most important developments since the last update?"],
    ["Today's calendar", "Which important data and events are in today's economic calendar?"],
    ["This week", "What are the key calendar events this week and which instruments could they move?"],
    ["Gold", "What is the current gold price and what is driving it now?"],
    ["EUR/USD", "What is the current EUR/USD rate and the key levels?"],
    ["S&P 500 and Nasdaq", "How do the S&P 500 and Nasdaq look in the latest update?"],
    ["Track record", "What is the track record of the analyses: which were hits, misses or are still open?"],
    ["Refresh all", "Update all market data."]
  ];
  var PYTANIA = [
    ["Podsumuj rynek", "Podsumuj krótko aktualną sytuację na wszystkich rynkach."],
    ["Co się zmieniło?", "Co najważniejszego wydarzyło się od ostatniej aktualizacji?"],
    ["Kalendarz na dziś", "Jakie ważne dane i wydarzenia są dziś w kalendarzu ekonomicznym?"],
    ["Kalendarz tygodnia", "Jakie są najważniejsze wydarzenia w kalendarzu na ten tydzień i które instrumenty mogą poruszyć?"],
    ["Złoto", "Jaki jest aktualny kurs złota i co go teraz porusza?"],
    ["EUR/USD", "Jaki jest aktualny kurs EUR/USD i kluczowe poziomy?"],
    ["S&P 500 i Nasdaq", "Jak wyglądają S&P 500 i Nasdaq w ostatniej aktualizacji?"],
    ["Skuteczność", "Jaka jest skuteczność analiz: które są trafione, nietrafione, a które w toku?"],
    ["Odśwież wszystko", "Zaktualizuj wszystkie dane rynkowe."]
  ];
  function chipy() {
    var c = $("bot-chips"), ang = I.lang === "en", lista = (ang ? PYTANIA_EN : PYTANIA).slice();
    var h = (location.hash || "").replace(/^#/, ""), a = h.indexOf("a-") === 0 ? AN.filter(function (x) { return x.id === h.slice(2); })[0] : null;
    var ins = INS.filter(function (i) { return i.id === (a ? a.instrument : h); })[0];
    if (ins) {
      lista = (ang ? [["What's new: " + ins.symbol, "What's new on " + ins.symbol + "? Give the price, key levels and upcoming events that could move it."],
                      ["Refresh " + ins.symbol, "Update the data for " + ins.symbol + "."]]
                   : [["Co nowego: " + ins.symbol, "Co nowego na " + ins.symbol + "? Podaj kurs, kluczowe poziomy i najbliższe wydarzenia, które mogą go poruszyć."],
                      ["Odśwież " + ins.symbol, "Zaktualizuj dane dla " + ins.symbol + "."]])
        .concat(lista.filter(function (p) { return p[0] !== ins.nazwa && p[0] !== ins.nazwa_en && p[0] !== ins.symbol; }));
    }
    if (lokalny) lista = lista.filter(function (p) { return !/^(Odśwież|Refresh)/.test(p[0]); });
    c.innerHTML = "";
    lista.forEach(function (p) {
      var b = document.createElement("button");
      b.type = "button"; b.textContent = p[0]; b.title = p[1];
      if (/^(Odśwież|Refresh)/.test(p[0])) b.className = "is-refresh";
      b.addEventListener("click", function () { if (ctl) return; input.value = p[1]; form.requestSubmit(); });
      c.appendChild(b);
    });
  }

  // Zmiana języka: podpisy okna i gotowe pytania.
  document.addEventListener("jezyk", function () {
    panel.setAttribute("aria-label", L("Asystent AI", "AI assistant"));
    root.querySelector(".bot__head b").textContent = L("Asystent rynkowy", "Market assistant");
    $("bot-stan").textContent = lokalny ? L("Tryb podstawowy: dane ze strony", "Basic mode: data from this site") : L("Dane z przeglądu AI", "Data from the AI brief");
    $("bot-zamknij").setAttribute("aria-label", L("Zamknij", "Close"));
    root.querySelector('label[for="bot-in"]').textContent = L("Wiadomość", "Message");
    input.placeholder = L("Zapytaj o rynek lub poproś o aktualizację", "Ask about the market or request an update");
    if (!ctl) send.setAttribute("aria-label", L("Wyślij", "Send"));
    fab.querySelector("span").textContent = L("Asystent AI", "AI assistant");
    if (sample || lokalny) chipy();
  });

  // ---------- Rozmowa ----------
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (ctl) { ctl.abort(); return; }
    var tekst = input.value.trim();
    if (tekst && lokalny) { input.value = ""; input.style.height = "auto"; dymek("user", tekst); dymek("bot", odpowiedzLokalna(tekst)); return; }
    if (!tekst || !sample) return;
    input.value = ""; input.style.height = "auto";
    dymek("user", tekst);
    tury.push({ role: "user", content: tekst });
    if (tury.length > MAKS_TUR) tury = tury.slice(-MAKS_TUR);
    while (tury.length && tury[0].role !== "user") tury.shift();

    var odp = dymek("bot", L("Myślę…", "Thinking…"));
    odp.classList.add("is-wait");
    ctl = new AbortController();
    send.textContent = "■"; send.setAttribute("aria-label", L("Zatrzymaj", "Stop"));

    var narzedzia = mcp ? [{
      name: "zlec_aktualizacje",
      description: "Zleca AI ponowne zebranie najnowszych danych rynkowych (kursy, wydarzenia, kalendarz) i aktualizację strony. Trwa kilka minut. Zwraca potwierdzenie albo błąd.",
      inputSchema: { type: "object", properties: { opis: { type: "string", description: "Czego dotyczy prośba, np. 'kurs złota' albo 'wszystkie dane'." } } },
      execute: function (inp) {
        var s = info(L("Zlecam aktualizację danych…", "Requesting a data update…"));
        return zlecAktualizacje(inp && inp.opis).then(function () {
          s.textContent = L("Aktualizacja zlecona. Strona odświeży się sama po zakończeniu.", "Update requested. The page refreshes itself when it is done.");
          return "zlecono";
        }, function (err) {
          s.textContent = bladMcp(err);
          throw new Error(err && err.code || "blad");
        });
      }
    }] : undefined;

    var opcje = { signal: ctl.signal, onText: function (u) { odp.classList.remove("is-wait"); odp.textContent = u.text; log.scrollTop = log.scrollHeight; } };
    if (narzedzia) opcje.tools = narzedzia; else opcje.cache = false;
    opcje.modelTier = "quick";

    sample([{ role: "user", content: kontekst() }].concat(tury), opcje).then(function (r) {
      tury.push({ role: "assistant", content: r.text });
    }, function (err) {
      odp.classList.remove("is-wait");
      var c = err && err.code;
      // Przerwana odpowiedź zostaje w historii; po błędzie usuwamy pytanie, żeby nie wysyłać dwóch pytań z rzędu.
      if (c === "cancelled" && err.text) tury.push({ role: "assistant", content: err.text }); else tury.pop();
      if (c === "cancelled") { odp.textContent = err.text || L("Zatrzymano.", "Stopped."); return; }
      if (c === "not_granted" || c === "sampling_disabled" || c === "not_declared" || c === "capability_disabled") { odp.textContent = L("Asystent nie ma zgody na użycie AI w tym widoku.", "The assistant is not allowed to use AI in this view."); form.hidden = true; return; }
      if (c === "tools_unavailable") { mcp = null; odp.textContent = L("Ten widok nie obsługuje zlecania aktualizacji. Zapytaj ponownie.", "This view cannot request updates. Please ask again."); return; }
      if (c === "rate_limited") { odp.textContent = L("Za dużo pytań naraz. Spróbuj za chwilę.", "Too many questions at once. Try again shortly."); return; }
      odp.textContent = (err && err.text) || L("Nie udało się uzyskać odpowiedzi. Spróbuj ponownie.", "No answer could be retrieved. Please try again.");
    }).then(function () {
      ctl = null; send.textContent = "↑"; send.setAttribute("aria-label", L("Wyślij", "Send"));
    });
  });
})();
