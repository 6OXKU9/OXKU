(function () {
  "use strict";

  var I = window.I18N, L = I.L, P = I.pole;
  function en() { return I.lang === "en"; }
  function LOC() { return en() ? "en-GB" : "pl-PL"; }   // daty
  function NLOC() { return en() ? "en-US" : "pl-PL"; }  // liczby
  var CFG = window.USTAWIENIA || {};
  var INS = window.INSTRUMENTY || [];
  var AN = (window.ANALIZY || []).slice().sort(function (a, b) { return a.data < b.data ? 1 : a.data > b.data ? -1 : 0; });
  var byId = Object.create(null);
  INS.forEach(function (i) { byId[i.id] = i; });
  var GRUPY = ["Forex", "Metale", "Surowce", "Indeksy", "Kryptowaluty"];
  var GRUPY_EN = { Forex: "Forex", Metale: "Metals", Surowce: "Commodities", Indeksy: "Indices", Kryptowaluty: "Crypto" };
  function grupa(g) { return en() ? GRUPY_EN[g] || g : g; }
  var MIES = { pl: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"], en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] };
  var AUTOR = "Redakcja AnalizyRynku";
  var PR = window.PRZEGLAD || null;
  var KAL = window.KALENDARZ || null;
  var filtrKal = { wplyw: 1, kraj: "", instrument: "" };
  var app = document.getElementById("app");
  var filtr = { instrument: "", kierunek: "", wynik: "" };

  // ---------- Pomocnicze ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function data(d) { var p = d.split("-"); return +p[2] + " " + MIES[I.lang][+p[1] - 1] + " " + p[0]; }
  function cena(v, ins) {
    var d = ins && typeof ins.dec === "number" ? ins.dec : 2;
    return Number(v).toLocaleString(NLOC(), { minimumFractionDigits: d, maximumFractionDigits: d });
  }
  var KIER = { wzrostowy: "bullish", spadkowy: "bearish", neutralny: "neutral" };
  function bias(k) {
    if (!k) return '<span class="bias bias--brak">' + L("brak analizy", "no analysis") + "</span>";
    return '<span class="bias bias--' + esc(k) + '">' + esc(en() ? KIER[k] || k : k) + "</span>";
  }
  function ex(a) {
    if (!a) return "";
    if (a.przyklad) return '<span class="tag-ex">' + L("przykład", "example") + "</span>";
    if (a.szkic) return '<span class="tag-ex">' + L("szkic AI", "AI draft") + "</span>";
    return a.ai ? '<span class="ai-badge" title="' + L("Przygotowane przez AI", "Prepared by AI") + '">AI</span>' : "";
  }
  function ostatnia(id) { for (var i = 0; i < AN.length; i++) if (AN[i].instrument === id) return AN[i]; return null; }
  function najblizsze(a) {
    var p = (a && a.poziomy) || {};
    var op = (p.opory || []).filter(function (v) { return p.cena == null || v > p.cena; });
    var ws = (p.wsparcia || []).filter(function (v) { return p.cena == null || v < p.cena; });
    return { opor: op.length ? Math.min.apply(null, op) : null, wsparcie: ws.length ? Math.max.apply(null, ws) : null };
  }
  function inicjaly(s) { if (/^AI\b/.test(s)) return "AI"; s = s.replace(/[^\p{L}\s]/gu, ""); return s.split(/\s+/).filter(Boolean).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase(); }
  function phead(crumbs, eyebrow, title, lead, extra) {
    return '<div class="phead"><div class="wrap phead__in">' +
      (crumbs ? '<nav class="crumbs" aria-label="' + L("Ścieżka", "Breadcrumb") + '">' + crumbs + "</nav>" : "") +
      (eyebrow ? '<p class="eyebrow">' + eyebrow + "</p>" : "") + "<h1>" + title + "</h1>" +
      (lead ? '<p class="lead">' + lead + "</p>" : "") + (extra || "") + "</div></div>";
  }

  // ---------- Skuteczność analiz ----------
  // Status w polu analizy `wynik.status`: "trafiona", "nietrafiona", "bez rozstrzygnięcia"; brak pola = "w toku".
  var WYNIKI = {
    "trafiona": ["hit", "Trafiona", "Hit"],
    "nietrafiona": ["miss", "Nietrafiona", "Miss"],
    "w toku": ["open", "W toku", "Open"],
    "bez rozstrzygnięcia": ["void", "Bez rozstrzygnięcia", "No result"]
  };
  function stan(a) { var s = a.wynik && a.wynik.status; return WYNIKI[s] ? s : "w toku"; }
  function wynikTag(a) { var w = WYNIKI[stan(a)]; return '<span class="res res--' + w[0] + '">' + L(w[1], w[2]) + "</span>"; }
  function skutecznosc(arr) {
    var r = { trafiona: 0, nietrafiona: 0, "w toku": 0, "bez rozstrzygnięcia": 0 };
    arr.forEach(function (a) { r[stan(a)]++; });
    r.zamkniete = r.trafiona + r.nietrafiona;
    r.proc = r.zamkniete ? Math.round(r.trafiona / r.zamkniete * 100) : null;
    return r;
  }
  function panelSkut() {
    var s = skutecznosc(AN);
    var ins = INS.map(function (i) { return { i: i, s: skutecznosc(AN.filter(function (a) { return a.instrument === i.id; })) }; })
      .filter(function (x) { return x.s.zamkniete; });
    return '<div class="score"><div class="score__main">' +
      '<span class="score__lbl">' + L("Trafność", "Hit rate") + "</span>" +
      '<b class="num">' + (s.proc != null ? s.proc + "%" : "–") + "</b>" +
      '<div class="score__bar" aria-hidden="true"><i style="width:' + (s.proc || 0) + '%"></i></div>' +
      "<p>" + (s.zamkniete ? L("na podstawie " + s.zamkniete + " rozliczonych analiz", "based on " + s.zamkniete + " settled analyses")
        : L("Brak rozliczonych analiz. Trafność pojawi się po rozliczeniu pierwszych.", "No settled analyses yet. The hit rate appears once the first ones are settled.")) + "</p></div>" +
      '<dl class="score__n">' +
      '<div><dt>' + L("Trafione", "Hits") + '</dt><dd class="num c-up">' + s.trafiona + "</dd></div>" +
      '<div><dt>' + L("Nietrafione", "Misses") + '</dt><dd class="num c-down">' + s.nietrafiona + "</dd></div>" +
      '<div><dt>' + L("W toku", "Open") + '</dt><dd class="num">' + s["w toku"] + "</dd></div>" +
      '<div><dt>' + L("Bez rozstrzygnięcia", "No result") + '</dt><dd class="num muted">' + s["bez rozstrzygnięcia"] + "</dd></div></dl>" +
      (ins.length ? '<ul class="score__ins">' + ins.map(function (x) {
        return '<li><a href="#' + x.i.id + '">' + esc(x.i.symbol) + '</a><span class="num">' + x.s.trafiona + "/" + x.s.zamkniete + "</span><b class=\"num\">" + x.s.proc + "%</b></li>";
      }).join("") + "</ul>" : "") +
      '</div><p class="muted" style="font-size:13px;margin:0">' + L("Zasady rozliczania analiz opisuje", "How analyses are settled is described in") + ' <a href="#o-stronie">' + L("Metodologia", "Methodology") + "</a>." +
      (AN.some(function (a) { return a.przyklad; }) ? " " + L("Statystyka obejmuje też analizy przykładowe.", "The statistics include the example analyses.") : "") + "</p>";
  }

  // ---------- Komponenty ----------
  function wiersz(a) {
    var ins = byId[a.instrument] || {};
    return '<a class="row" href="#a-' + esc(a.id) + '">' +
      '<div class="row__date"><b>' + esc(ins.symbol) + "</b><span>" + data(a.data) + "</span></div>" +
      '<div class="row__body"><h3>' + esc(P(a, "tytul")) + "</h3><p>" + esc(P(a, "lead")) + "</p></div>" +
      '<div class="row__side">' + bias(a.kierunek) + wynikTag(a) + '<span class="num muted" style="font-size:13px">' + esc(a.interwal) + "</span>" + ex(a) + "</div></a>";
  }
  function feed(arr) {
    if (!arr.length) return '<div class="feed"><div class="empty">' + L("Brak analiz dla wybranych filtrów.", "No analyses match these filters.") + "</div></div>";
    return '<div class="feed">' + arr.map(wiersz).join("") + "</div>";
  }

  function tabelaRynkow() {
    var h = '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>' + L("Instrument", "Instrument") + "</th><th>" + L("Nastawienie", "Bias") + "</th><th>" + L("Interwał", "Timeframe") + "</th>" +
      '<th class="r">' + L("Najbliższy opór", "Nearest resistance") + '</th><th class="r">' + L("Najbliższe wsparcie", "Nearest support") + '</th><th class="r">' + L("Aktualizacja", "Updated") + "</th></tr></thead><tbody>";
    GRUPY.forEach(function (g) {
      var items = INS.filter(function (i) { return i.grupa === g; });
      if (!items.length) return;
      h += '<tr class="grp"><td colspan="6">' + grupa(g) + "</td></tr>";
      items.forEach(function (i) {
        var a = ostatnia(i.id), n = najblizsze(a);
        h += '<tr data-href="#' + i.id + '" tabindex="0"><td><a class="ins" href="#' + i.id + '"><b>' + esc(i.symbol) + "</b><span>" + esc(P(i, "nazwa")) + "</span></a></td>" +
          "<td>" + bias(a && a.kierunek) + "</td>" +
          '<td class="num">' + (a ? esc(a.interwal) : "–") + "</td>" +
          '<td class="r num lv-up">' + (n.opor != null ? cena(n.opor, i) : "–") + "</td>" +
          '<td class="r num lv-dn">' + (n.wsparcie != null ? cena(n.wsparcie, i) : "–") + "</td>" +
          '<td class="r muted">' + (a ? data(a.data) : "–") + "</td></tr>";
      });
    });
    return h + "</tbody></table></div>";
  }

  // Drabinka poziomów: opory, cena, wsparcia na jednej skali cenowej.
  function drabinka(a) {
    var ins = byId[a.instrument];
    var p = a.poziomy || {};
    var pts = [];
    (p.opory || []).forEach(function (v) { pts.push({ v: v, t: "up", n: L("OPÓR", "RESIST.") }); });
    if (p.cena != null) pts.push({ v: p.cena, t: "now", n: L("CENA", "PRICE") });
    (p.wsparcia || []).forEach(function (v) { pts.push({ v: v, t: "dn", n: L("WSPARCIE", "SUPPORT") }); });
    if (pts.length < 2) return "";
    pts.sort(function (x, y) { return y.v - x.v; });
    var max = pts[0].v, min = pts[pts.length - 1].v, H = 30 + pts.length * 34, top = 16, bot = H - 14, W = 300, X0 = 84;
    var y = function (v) { return top + (max - v) / (max - min) * (bot - top); };
    var ly = pts.map(function (q) { return y(q.v); });
    for (var i = 1; i < ly.length; i++) if (ly[i] - ly[i - 1] < 16) ly[i] = ly[i - 1] + 16;
    var over = ly[ly.length - 1] - bot;
    if (over > 0) for (var j = ly.length - 1; j >= 0; j--) { ly[j] -= over; if (j && ly[j] - ly[j - 1] >= 16) break; }
    var n = najblizsze(a);
    var svg = '<svg class="ladder" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + L("Kluczowe poziomy cenowe", "Key price levels") + '">';
    if (n.opor != null && n.wsparcie != null) svg += '<rect class="band" x="' + X0 + '" y="' + y(n.opor).toFixed(1) + '" width="' + (W - X0) + '" height="' + (y(n.wsparcie) - y(n.opor)).toFixed(1) + '"/>';
    svg += '<line class="axis" x1="' + X0 + '" y1="' + top + '" x2="' + X0 + '" y2="' + bot + '" stroke-width="1"/>';
    pts.forEach(function (q, k) {
      var yy = y(q.v).toFixed(1);
      svg += '<line class="ln-' + q.t + '" x1="' + X0 + '" x2="' + W + '" y1="' + yy + '" y2="' + yy + '" stroke-width="' + (q.t === "now" ? 2 : 1.25) + '"' + (q.t === "now" ? "" : ' stroke-dasharray="4 4"') + "/>";
      svg += '<text class="lbl" x="0" y="' + (ly[k] + 4).toFixed(1) + '">' + q.n + "</text>";
      svg += '<text class="t-' + q.t + '" x="' + W + '" y="' + (y(q.v) - 5).toFixed(1) + '" text-anchor="end">' + cena(q.v, ins) + "</text>";
    });
    return svg + "</svg>";
  }
  function tabelaPoziomow(a) {
    var ins = byId[a.instrument], p = a.poziomy || {}, r = [];
    (p.opory || []).slice().sort(function (x, y) { return y - x; }).forEach(function (v, i, arr) { r.push('<tr><td class="lv-up">' + L("Opór", "Resistance") + " R" + (arr.length - i) + "</td><td>" + cena(v, ins) + "</td></tr>"); });
    if (p.cena != null) r.push('<tr class="now"><td>' + L("Cena przy publikacji", "Price at publication") + "</td><td>" + cena(p.cena, ins) + "</td></tr>");
    (p.wsparcia || []).slice().sort(function (x, y) { return y - x; }).forEach(function (v, i) { r.push('<tr><td class="lv-dn">' + L("Wsparcie", "Support") + " S" + (i + 1) + "</td><td>" + cena(v, ins) + "</td></tr>"); });
    return '<table class="lvl"><tbody>' + r.join("") + "</tbody></table>";
  }

  // ---------- Zgoda na pliki cookie ----------
  var KLUCZ_ZGODY = "zgoda-cookies", zgodaPamiec = null;
  function zgoda() {
    if (CFG.zgodaCookies === false) return "tak";
    if (zgodaPamiec) return zgodaPamiec;
    try { return localStorage.getItem(KLUCZ_ZGODY); } catch (e) { return null; }
  }
  function ustawZgode(v) {
    zgodaPamiec = v;
    try { localStorage.setItem(KLUCZ_ZGODY, v); } catch (e) {}
    baner(false);
    pasekNotowan();
    render(true);
  }
  function baner(pokaz) {
    var el = document.getElementById("cookie");
    if (!pokaz) { if (el) el.remove(); return; }
    if (!el) { el = document.createElement("div"); el.id = "cookie"; el.className = "cookie"; el.setAttribute("role", "dialog"); document.body.appendChild(el); }
    el.setAttribute("aria-label", L("Pliki cookie", "Cookies"));
    el.innerHTML = "<p><b>" + L("Pliki cookie", "Cookies") + "</b>" +
      L("Używamy tylko niezbędnej pamięci przeglądarki (język, ta decyzja). Wykresy i notowania TradingView mogą zapisywać pliki cookie, więc ładujemy je dopiero po Twojej zgodzie.",
        "We only use essential browser storage (language, this choice). TradingView charts and quotes may set cookies, so we load them only with your consent.") +
      ' <a href="#cookies">' + L("Szczegóły", "Details") + "</a></p>" +
      '<div class="cookie__b"><button type="button" class="btn btn--line" data-zgoda="nie">' + L("Tylko niezbędne", "Essential only") + "</button>" +
      '<button type="button" class="btn btn--primary" data-zgoda="tak">' + L("Akceptuję", "Accept") + "</button></div>";
  }
  document.addEventListener("click", function (e) {
    var z = e.target.closest && e.target.closest("[data-zgoda]");
    if (z) return ustawZgode(z.getAttribute("data-zgoda"));
    if (e.target.closest && e.target.closest("[data-cookies]")) baner(true);
  });

  // ---------- Widżety TradingView (działają na opublikowanej stronie; podgląd w Claude je blokuje) ----------
  var TV = "https://s3.tradingview.com/external-embedding/embed-widget-";
  function ciemny() { return matchMedia("(prefers-color-scheme: dark)").matches; }
  // Wstawia widżet do kontenera o danym id. Gdy skrypt się wczyta, chowa zastępczą treść; gdy nie, zostawia ją.
  // Bez zgody na pliki cookie widżet się nie ładuje, a pod zastępczą treścią pojawia się przycisk ustawień.
  function tvWidget(id, typ, config, onFail) {
    if (zgoda() !== "tak") {
      if (onFail) setTimeout(function () { var b = document.getElementById(id); if (b) onFail(b); }, 0);
      return '<div class="tv-consent" id="' + id + '">' + L("Widżety TradingView ładują się po zgodzie na pliki cookie.", "TradingView widgets load after you accept cookies.") +
        ' <button type="button" class="linkbtn" data-cookies>' + L("Ustawienia", "Settings") + "</button></div>";
    }
    setTimeout(function () {
      var box = document.getElementById(id);
      if (!box) return;
      var s = document.createElement("script");
      s.src = TV + typ + ".js";
      s.async = true;
      config.locale = en() ? "en" : "pl";
      config.colorTheme = config.theme = config.ciemny || ciemny() ? "dark" : "light";
      delete config.ciemny;
      s.textContent = JSON.stringify(config);
      s.onload = function () {
        var host = box.closest("[data-tv]");
        var f = host && host.querySelector(".tv-fallback");
        if (f) f.hidden = true;
        if (host) host.classList.add("tv-ok");
      };
      s.onerror = function () { if (onFail) onFail(box); };
      box.appendChild(s);
    }, 0);
    return '<div class="tradingview-widget-container"><div class="tradingview-widget-container__widget" id="' + id + '"></div></div>';
  }
  function tvLink(ins) { return "https://www.tradingview.com/chart/?symbol=" + encodeURIComponent(ins.tv); }

  // Pełny wykres świecowy instrumentu.
  function wykres(ins) {
    return '<div class="chart" data-tv><div class="chart__fallback tv-fallback"><p>' + L("Wykres na żywo z TradingView pojawi się tutaj na opublikowanej stronie.", "A live TradingView chart appears here on the published site.") + "</p>" +
      '<a class="btn btn--primary" href="' + tvLink(ins) + '" target="_blank" rel="noopener">' + L("Otwórz ", "Open ") + esc(ins.symbol) + L(" w TradingView", " in TradingView") + "</a></div>" +
      tvWidget("tv-chart-" + ins.id, "advanced-chart", {
        autosize: true, symbol: ins.tv, interval: "D", timezone: "Europe/Warsaw", style: "1",
        allow_symbol_change: false, hide_volume: true, support_host: "https://www.tradingview.com"
      }) + "</div>";
  }
  // Aktualny kurs, zmiana dzienna i zakres dnia.
  function kurs(ins) {
    return '<div class="quote" data-tv><div class="quote__fallback tv-fallback"><span class="num">' + esc(ins.symbol) + "</span><span>" + L("Aktualny kurs pojawi się tutaj na opublikowanej stronie.", "The live quote appears here on the published site.") + "</span></div>" +
      tvWidget("tv-quote-" + ins.id, "symbol-info", { symbol: ins.tv, width: "100%", isTransparent: true }) + "</div>";
  }
  // Kafelek z kursem i małym wykresem (strona Rynki).
  function kafelek(ins) {
    var a = ostatnia(ins.id);
    return '<div class="tile" data-tv><div class="tile__head"><a class="ins" href="#' + ins.id + '"><b>' + esc(ins.symbol) + "</b><span>" + esc(P(ins, "nazwa")) + "</span></a>" + bias(a && a.kierunek) + "</div>" +
      '<div class="tile__chart"><div class="tile__fallback tv-fallback">' + L("Kurs i wykres na żywo<br>na opublikowanej stronie", "Live quote and chart<br>on the published site") + "</div>" +
      tvWidget("tv-mini-" + ins.id, "mini-symbol-overview", { symbol: ins.tv, width: "100%", height: "100%", dateRange: "1M", isTransparent: true, autosize: true }) + "</div></div>";
  }
  // Pasek notowań na żywo pod nagłówkiem. Bez TradingView (lub bez zgody) po prostu się chowa.
  function pasekNotowan() {
    var el = document.getElementById("tape");
    if (!el) return;
    el.hidden = false;
    el.innerHTML = tvWidget("tv-tape", "ticker-tape", {
      symbols: INS.map(function (i) { return { proName: i.tv, title: i.symbol }; }),
      showSymbolLogo: false, isTransparent: true, displayMode: "regular", ciemny: true
    }, function () { el.hidden = true; });
  }


  // ---------- Przegląd AI ----------
  function czasPL(iso) {
    var d = new Date(iso);
    return d.toLocaleString(LOC(), { timeZone: "Europe/Warsaw", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  }
  function aiBadge() { return '<span class="ai-badge">AI</span>'; }
  function zmianaTxt(v) {
    if (v == null) return '<span class="muted">–</span>';
    var cls = v > 0 ? "lv-dn" : v < 0 ? "lv-up" : "muted";
    return '<span class="num ' + cls + '">' + (v > 0 ? "+" : v < 0 ? "−" : "") + Math.abs(v).toLocaleString(NLOC(), { minimumFractionDigits: 1, maximumFractionDigits: 2 }) + "%</span>";
  }
  function zrodloLink(i) {
    var z = PR && PR.zrodla[i];
    return z ? '<a href="' + esc(z.url) + '" target="_blank" rel="noopener">[' + (i + 1) + "]</a>" : "";
  }
  function brakDanych() { return L("brak danych", "no data"); }
  function przegladSkrot() {
    if (!PR) return "";
    return '<section><div class="sec-head"><div><p class="eyebrow">' + L("Na bieżąco", "Latest") + "</p><h2>" + L("Przegląd rynku ", "Market brief ") + aiBadge() + "</h2></div>" +
      '<a href="#przeglad">' + L("Pełny przegląd →", "Full brief →") + '</a></div><div class="brief"><div class="brief__main">' +
      '<p class="brief__head">' + esc(P(PR, "naglowek")) + "</p><ul>" + P(PR, "punkty").slice(0, 3).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
      '<p class="brief__meta">' + L("Stan na: ", "As of: ") + esc(P(PR, "stanNa")) + " · " + L("Zaktualizowano ", "Updated ") + czasPL(PR.aktualizacja) + "</p></div>" +
      '<div class="brief__cal"><h4>' + L("Najbliższe wydarzenia", "Upcoming events") + "</h4>" + (KAL ? kalMini(nadchodzace(6, function (e) { return e.wplyw >= 2; }), L("Brak zaplanowanych wydarzeń.", "No scheduled events.")) : kalendarzLista(PR.kalendarz)) + '<a href="#kalendarz">' + L("Pełny kalendarz →", "Full calendar →") + "</a></div></div></section>";
  }
  function kalendarzLista(k) {
    return '<ol class="cal">' + k.map(function (d) {
      return '<li><b>' + esc(d.dzien) + "</b><ul>" + d.wydarzenia.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul></li>";
    }).join("") + "</ol>";
  }
  function przegladPanel(ins) {
    var p = PR && PR.instrumenty[ins.id];
    if (!p) return "";
    return '<div class="panel"><h4>' + L("Przegląd AI ", "AI brief ") + aiBadge() + "</h4>" +
      (p.kurs != null ? '<div class="pq"><span class="num pq__px">' + cena(p.kurs, ins) + "</span>" + (p.zmiana != null ? zmianaTxt(p.zmiana) : "") + "</div>" : "") +
      '<p class="muted" style="margin:0;font-size:14px">' + esc(P(p, "notka")) + (p.zrodlo != null ? " " + zrodloLink(p.zrodlo) : "") + "</p>" +
      '<p class="brief__meta" style="margin:0">' + L("Stan na: ", "As of: ") + esc(P(PR, "stanNa")) + '</p><a href="#przeglad" style="font-size:14px">' + L("Cały przegląd →", "Full brief →") + "</a></div>";
  }
  function newsy(ins) {
    return '<div class="news" data-tv><div class="tv-fallback news__fallback">' + L("Najnowsze wiadomości o " + esc(ins.symbol) + " z TradingView pojawią się tutaj na opublikowanej stronie.", "Latest " + esc(ins.symbol) + " news from TradingView appears here on the published site.") + "</div>" +
      tvWidget("tv-news-" + ins.id, "timeline", { feedMode: "symbol", symbol: ins.tv, isTransparent: true, displayMode: "regular", width: "100%", height: "100%" }) + "</div>";
  }

  var IKONY = {
    tech: '<svg viewBox="0 0 32 32" aria-hidden="true"><path class="ic" d="M4 26h24M8 22V12M8 9V6M16 22v-6M16 13V8M24 22V14M24 11V5"/><rect class="ic" x="6" y="12" width="4" height="7"/><rect class="ic" x="14" y="13" width="4" height="5"/><rect class="ic" x="22" y="11" width="4" height="8"/></svg>',
    fund: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle class="ic" cx="16" cy="16" r="11"/><path class="ic" d="M5 16h22M16 5c3.5 3 5 7 5 11s-1.5 8-5 11c-3.5-3-5-7-5-11s1.5-8 5-11z"/></svg>',
    risk: '<svg viewBox="0 0 32 32" aria-hidden="true"><path class="ic" d="M16 4l10 4v7c0 6.5-4.2 11-10 13-5.8-2-10-6.5-10-13V8z"/><path class="ic" d="M11.5 16l3 3 6-6"/></svg>',
    tg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.5 3.6 2.9 10.8c-1.3.5-1.2 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.4l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.3-.5-1.9-1.4-1.5zM8.9 13.4l9.5-6c.4-.3.9-.1.5.2l-8 7.3-.3 3.4z"/></svg>'
  };

  // ---------- Powiadomienia ----------
  function powiadomienia(naglowek) {
    var p = CFG.powiadomienia || {}, mailOn = !!p.emailFormularz, tgOn = !!p.telegram, dis = mailOn ? "" : " disabled";
    return '<div class="sub">' +
      (naglowek ? '<div class="sub__copy"><p class="eyebrow">' + L("Powiadomienia", "Alerts") + "</p><h2>" + L("Nie przegap nowej analizy", "Never miss a new analysis") + "</h2>" +
        "<p>" + L("Powiadomimy Cię o każdej nowej analizie i dzień przed wydarzeniem z czterema głowami byka w kalendarzu.", "Get notified about every new analysis and a day before any four-bull-head event in the calendar.") + "</p></div>" : "") +
      '<div class="sub__act"><form class="sub__form" id="sub-form"' + (mailOn ? ' action="' + esc(p.emailFormularz) + '" method="post" target="_blank"' : "") + ">" +
      '<div class="sub__row"><label class="sr" for="sub-email">E-mail</label><input type="email" id="sub-email" name="' + esc(p.emailPole || "email") + '" required autocomplete="email" placeholder="' + L("Twój adres e-mail", "Your e-mail address") + '"' + dis + ">" +
      '<button class="btn btn--gold" type="submit"' + dis + ">" + L("Zapisz się", "Subscribe") + "</button></div>" +
      '<label class="sub__ok"><input type="checkbox" required' + dis + "> <span>" + L("Zgadzam się na otrzymywanie powiadomień e-mail. Mogę wypisać się w każdej chwili. ", "I agree to receive e-mail alerts and can unsubscribe at any time. ") +
      '<a href="#prywatnosc">' + L("Polityka prywatności", "Privacy policy") + "</a></span></label></form>" +
      '<div class="sub__or"><span>' + L("albo", "or") + "</span></div>" +
      (tgOn ? '<a class="btn btn--tg" href="' + esc(p.telegram) + '" target="_blank" rel="noopener">' + IKONY.tg + L("Kanał na Telegramie", "Telegram channel") + "</a>"
        : '<button type="button" class="btn btn--tg" disabled>' + IKONY.tg + L("Kanał na Telegramie", "Telegram channel") + "</button>") +
      (!mailOn || !tgOn ? '<p class="sub__note">' + L("Zapis ruszy po podłączeniu usługi wysyłki.", "Sign-up opens once the delivery service is connected.") + "</p>" : "") +
      "</div></div>";
  }

  // ---------- Udostępnianie ----------
  function adresAnalizy(a) {
    var d = (CFG.domena || "").replace(/\/+$/, "");
    if (!d) return location.href;
    return d + (en() ? "/en/analysis/" : "/analiza/") + a.id + "/";
  }
  function udostepnij(a) {
    var u = encodeURIComponent(adresAnalizy(a)), t = encodeURIComponent(P(a, "tytul"));
    return '<div class="panel"><h4>' + L("Udostępnij", "Share") + '</h4><div class="share">' +
      '<a href="https://x.com/intent/post?url=' + u + "&text=" + t + '" target="_blank" rel="noopener">X</a>' +
      '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + u + '" target="_blank" rel="noopener">LinkedIn</a>' +
      '<a href="https://www.facebook.com/sharer/sharer.php?u=' + u + '" target="_blank" rel="noopener">Facebook</a>' +
      '<button type="button" class="linkbtn" data-kopiuj="' + esc(adresAnalizy(a)) + '">' + L("Kopiuj link", "Copy link") + "</button></div></div>";
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-kopiuj]");
    if (!b) return;
    var ok = function () { b.textContent = L("Skopiowano", "Copied"); };
    try { navigator.clipboard.writeText(b.getAttribute("data-kopiuj")).then(ok, function () {}); } catch (err) {}
  });

  // ---------- Widoki ----------
  var V = {};

  V.start = function () {
    var f = AN[0], fi = f && byId[f.instrument];
    var demo = AN.some(function (a) { return a.przyklad; }), szkice = AN.filter(function (a) { return a.szkic; }).length;
    var sk = skutecznosc(AN);
    var hero = '<section class="hero"><div class="wrap hero__in"><div class="hero__copy">' +
      '<p class="eyebrow">' + L("Research · Forex · Metale · Surowce · Indeksy · Krypto", "Research · Forex · Metals · Commodities · Indices · Crypto") + "</p>" +
      "<h1>" + L("Analizy rynków finansowych z jasno wskazanymi poziomami i scenariuszami", "Financial market analysis with clear levels and scenarios") + "</h1>" +
      '<p class="lead">' + L("Regularne opracowania dla EUR/USD, USD/PLN, złota, srebra, ropy, Nasdaq 100, S&amp;P 500, DAX i bitcoina. Każda analiza zawiera nastawienie, kluczowe poziomy cenowe oraz warunki, które je potwierdzają lub unieważniają, a potem jest rozliczana.",
        "Regular coverage of EUR/USD, USD/PLN, gold, silver, oil, the Nasdaq 100, S&amp;P 500, DAX and bitcoin. Every analysis states a bias, key price levels and the conditions that confirm or invalidate it, and is then settled.") + "</p>" +
      '<div class="hero__cta"><a class="btn btn--gold" href="#analizy">' + L("Przeglądaj analizy", "Browse analyses") + '</a><a class="btn btn--ghost" href="#rynki">' + L("Przegląd rynków", "Markets overview") + "</a></div>" +
      '<div class="stats"><div class="stat"><b>' + INS.length + "</b><span>" + L("Instrumentów", "Instruments") + "</span></div>" +
      '<div class="stat"><b>' + AN.length + "</b><span>" + L("Analiz", "Analyses") + "</span></div>" +
      '<div class="stat"><b>' + (sk.proc != null ? sk.proc + "%" : "–") + "</b><span>" + L("Trafność", "Hit rate") + "</span></div>" +
      '<div class="stat"><b>' + (f ? data(f.data) : "–") + "</b><span>" + L("Ostatnia aktualizacja", "Last update") + "</span></div></div></div>" +
      (f ? '<article class="feature"><div class="feature__tag"><span>' + L("Najnowsza analiza", "Latest analysis") + "</span>" + ex(f) + "</div>" +
        '<div class="meta"><b class="num" style="color:var(--ink)">' + esc(fi.symbol) + "</b>" + bias(f.kierunek) + '<span class="num">' + esc(f.interwal) + "</span></div>" +
        '<h3><a href="#a-' + esc(f.id) + '">' + esc(P(f, "tytul")) + "</a></h3>" + drabinka(f) +
        '<a class="btn btn--primary" href="#a-' + esc(f.id) + '">' + L("Czytaj analizę", "Read analysis") + "</a></article>" : "") +
      "</div></section>";
    return hero + '<div class="wrap page">' +
      (demo ? '<div class="notice"><span class="tag-ex">' + L("przykład", "example") + "</span><p>" + L("Analizy widoczne teraz to treść demonstracyjna z ilustracyjnymi poziomami cen. Zastąp je własnymi w pliku", "The analyses shown now are demo content with illustrative price levels. Replace them with your own in") + ' <span class="num">js/analizy.js</span>.</p></div>' : "") +
      (szkice ? '<div class="notice"><span class="tag-ex">' + L("szkic AI", "AI draft") + "</span><p>" + L(szkice + " analiz przygotowała AI na podstawie danych ze źródeł. To szkice do Twojej akceptacji: sprawdź je i usuń pole szkic w pliku", szkice + " analyses were prepared by AI from sourced data. They are drafts awaiting approval: review them and remove the szkic field in") + ' <span class="num">js/analizy.js</span>.</p></div>' : "") +
      przegladSkrot() +
      '<section><div class="sec-head"><div><p class="eyebrow">' + L("Przegląd", "Overview") + "</p><h2>" + L("Nastawienie na rynkach", "Market bias") + '</h2></div><a href="#rynki">' + L("Wszystkie rynki →", "All markets →") + "</a></div>" + tabelaRynkow() + "</section>" +
      '<section><div class="sec-head"><div><p class="eyebrow">Research</p><h2>' + L("Najnowsze analizy", "Latest analyses") + '</h2></div><a href="#analizy">' + L("Archiwum i skuteczność →", "Archive and track record →") + "</a></div>" + feed(AN.slice(0, 5)) + "</section>" +
      "<section>" + powiadomienia(true) + "</section>" +
      '<section><div class="sec-head"><div><p class="eyebrow">' + L("Metodologia", "Methodology") + "</p><h2>" + L("Jak powstaje każda analiza", "How every analysis is made") + '</h2></div><a href="#o-stronie">' + L("Więcej →", "More →") + "</a></div>" +
      '<div class="pillars">' +
      '<div class="pillar">' + IKONY.tech + "<h3>" + L("Analiza techniczna", "Technical analysis") + "</h3><p>" + L("Struktura trendu, strefy podaży i popytu oraz poziomy, przy których rynek wcześniej reagował.", "Trend structure, supply and demand zones, and levels where the market has reacted before.") + "</p></div>" +
      '<div class="pillar">' + IKONY.fund + "<h3>" + L("Kontekst makro", "Macro context") + "</h3><p>" + L("Polityka banków centralnych, inflacja, rentowności obligacji i kalendarz publikacji.", "Central bank policy, inflation, bond yields and the release calendar.") + "</p></div>" +
      '<div class="pillar">' + IKONY.risk + "<h3>" + L("Scenariusze i rozliczenie", "Scenarios and settlement") + "</h3><p>" + L("Każdy wariant ma poziom, który go unieważnia, a każda analiza jest potem rozliczana jako trafiona lub nietrafiona.", "Every scenario has an invalidation level, and every analysis is later settled as a hit or a miss.") + "</p></div>" +
      "</div></section></div>";
  };

  V.rynki = function () {
    return phead("", L("Rynki", "Markets"), L("Przegląd rynków", "Markets overview"), L("Nastawienie i najbliższe poziomy z ostatnich analiz dla wszystkich obserwowanych instrumentów.", "Bias and nearest levels from the latest analyses for every instrument we cover.")) +
      '<div class="wrap page"><section><div class="sec-head"><div><p class="eyebrow">' + L("Na żywo", "Live") + "</p><h2>" + L("Notowania", "Quotes") + '</h2></div><span class="muted" style="font-size:13px">' + L("Dane: TradingView", "Data: TradingView") + "</span></div>" +
      GRUPY.map(function (g) {
        var items = INS.filter(function (i) { return i.grupa === g; });
        return items.length ? '<div class="tiles-group"><h4 class="grp-title">' + grupa(g) + '</h4><div class="tiles">' + items.map(kafelek).join("") + "</div></div>" : "";
      }).join("") + "</section>" +
      '<section><div class="sec-head"><div><p class="eyebrow">' + L("Z analiz", "From analyses") + "</p><h2>" + L("Nastawienie i poziomy", "Bias and levels") + "</h2></div></div>" + tabelaRynkow() + "</section></div>";
  };

  V.analizy = function () {
    var opts = '<option value="">' + L("Wszystkie instrumenty", "All instruments") + "</option>" + INS.map(function (i) { return '<option value="' + i.id + '"' + (filtr.instrument === i.id ? " selected" : "") + ">" + esc(i.symbol + " · " + P(i, "nazwa")) + "</option>"; }).join("");
    var kier = [["", L("Każde nastawienie", "Any bias")], ["wzrostowy", L("Wzrostowe", "Bullish")], ["spadkowy", L("Spadkowe", "Bearish")], ["neutralny", L("Neutralne", "Neutral")]].map(function (k) { return '<option value="' + k[0] + '"' + (filtr.kierunek === k[0] ? " selected" : "") + ">" + k[1] + "</option>"; }).join("");
    var wyn = [["", L("Każdy wynik", "Any result")]].concat(Object.keys(WYNIKI).map(function (k) { return [k, L(WYNIKI[k][1], WYNIKI[k][2])]; }))
      .map(function (k) { return '<option value="' + k[0] + '"' + (filtr.wynik === k[0] ? " selected" : "") + ">" + k[1] + "</option>"; }).join("");
    var arr = AN.filter(pasuje);
    return phead("", L("Archiwum", "Archive"), L("Analizy", "Analyses"), L("Wszystkie opublikowane analizy, od najnowszej, z rozliczeniem skuteczności.", "Every published analysis, newest first, with its track record.")) +
      '<div class="wrap page"><section><div class="sec-head"><div><p class="eyebrow">' + L("Wyniki", "Track record") + "</p><h2>" + L("Skuteczność analiz", "Analysis track record") + "</h2></div></div>" + panelSkut() + "</section>" +
      '<section><div class="filters"><label for="f-ins">' + L("Instrument", "Instrument") + '<select id="f-ins">' + opts + "</select></label>" +
      '<label for="f-kier">' + L("Nastawienie", "Bias") + '<select id="f-kier">' + kier + "</select></label>" +
      '<label for="f-wyn">' + L("Wynik", "Result") + '<select id="f-wyn">' + wyn + "</select></label>" +
      '<span class="count" id="licznik">' + licznik(arr.length) + "</span></div>" +
      '<div id="lista">' + feed(arr) + "</div></section></div>";
  };
  function pasuje(a) { return (!filtr.instrument || a.instrument === filtr.instrument) && (!filtr.kierunek || a.kierunek === filtr.kierunek) && (!filtr.wynik || stan(a) === filtr.wynik); }
  function licznik(n) { return L("Wyniki: ", "Showing ") + '<b class="num">' + n + "</b> " + L("z", "of") + " " + AN.length; }

  V.instrument = function (ins) {
    var arr = AN.filter(function (a) { return a.instrument === ins.id; });
    var a = arr[0];
    var extra = '<div class="meta">' + bias(a && a.kierunek) + (a ? '<span class="sep"></span><span>' + L("Ostatnia analiza: ", "Latest analysis: ") + data(a.data) + "</span>" : "") + "</div>";
    return phead('<a href="#rynki">' + L("Rynki", "Markets") + "</a><span>/</span><span>" + esc(grupa(ins.grupa)) + "</span>", esc(grupa(ins.grupa)) + " · " + esc(ins.symbol), esc(P(ins, "nazwa")), esc(P(ins, "opis")), extra) +
      '<div class="wrap page"><div class="split"><div class="article">' + kurs(ins) + wykres(ins) +
      '<div class="sec-head"><div><h2>' + L("Analizy ", "Analyses: ") + esc(ins.symbol) + "</h2></div></div>" +
      (arr.length ? feed(arr) : '<div class="feed"><div class="empty">' + L("Nie ma jeszcze analizy dla tego instrumentu.", "No analysis for this instrument yet.") + "</div></div>") +
      '<div class="sec-head"><div><h2>' + L("Wiadomości", "News") + '</h2></div><span class="muted" style="font-size:13px">' + L("Dane: TradingView", "Data: TradingView") + "</span></div>" + newsy(ins) + "</div>" +
      '<aside class="aside">' + przegladPanel(ins) + (KAL ? '<div class="panel"><h4>' + L("Nadchodzące wydarzenia", "Upcoming events") + "</h4>" + kalMini(nadchodzace(5, function (e) { return (e.instrumenty || []).indexOf(ins.id) >= 0; }), L("Brak zaplanowanych wydarzeń dla tego instrumentu.", "No scheduled events for this instrument.")) + '<a href="#kalendarz" style="font-size:14px">' + L("Pełny kalendarz →", "Full calendar →") + "</a></div>" : "") +
      '<div class="panel"><h4>' + L("Karta instrumentu", "Instrument facts") + '</h4><dl class="facts">' +
      '<div><dt>' + L("Symbol", "Symbol") + '</dt><dd class="num">' + esc(ins.symbol) + "</dd></div>" +
      "<div><dt>" + L("Kwotowanie", "Quoted in") + "</dt><dd>" + esc(P(ins, "jednostka")) + "</dd></div>" +
      "<div><dt>" + L("Godziny", "Hours") + "</dt><dd>" + esc(P(ins, "sesja")) + "</dd></div></dl></div>" +
      '<div class="panel"><h4>' + L("Co porusza rynkiem", "What moves it") + '</h4><ul class="drivers">' + P(ins, "czynniki").map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul></div>" +
      (a ? '<div class="panel"><h4>' + L("Poziomy z ostatniej analizy", "Levels from the latest analysis") + "</h4>" + drabinka(a) + tabelaPoziomow(a) + "</div>" : "") + "</aside></div></div>";
  };

  V.analiza = function (a) {
    var ins = byId[a.instrument] || {};
    var autor = a.autor || (a.ai ? L("AI (Claude)", "AI (Claude)") : AUTOR);
    var w = a.wynik || {};
    var extra = '<div class="meta">' + bias(a.kierunek) + wynikTag(a) + '<span class="sep"></span><span class="num">' + esc(ins.symbol) + "</span>" +
      '<span class="sep"></span><span>' + L("Interwał", "Timeframe") + ' <b class="num">' + esc(a.interwal) + "</b></span>" + ex(a) + "</div>" +
      '<div class="author"><span class="author__av">' + esc(inicjaly(autor)) + "</span><span><b>" + esc(autor) + "</b>" + L("Opublikowano ", "Published ") + data(a.data) + "</span></div>";
    return phead('<a href="#analizy">' + L("Analizy", "Analyses") + '</a><span>/</span><a href="#' + esc(ins.id) + '">' + esc(ins.symbol) + "</a>", esc(P(ins, "nazwa")), esc(P(a, "tytul")), "", extra) +
      '<div class="wrap page"><div class="split"><div class="article">' +
      '<div class="summary"><h4 class="eyebrow">' + L("Podsumowanie", "Summary") + "</h4><p>" + esc(P(a, "lead")) + "</p></div>" +
      (P(a, "tresc") || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
      (a.scenariusze && a.scenariusze.length ? '<div class="sec-head"><div><h2>' + L("Scenariusze", "Scenarios") + '</h2></div></div><ul class="scen">' + a.scenariusze.map(function (s) { return "<li><span>" + bias(s.typ) + "</span><p>" + esc(P(s, "tekst")) + "</p></li>"; }).join("") + "</ul>" : "") +
      (a.zrodla && a.zrodla.length ? '<div class="sec-head"><div><h2>' + L("Źródła", "Sources") + '</h2></div></div><ol class="sources">' + a.zrodla.map(function (z) { return '<li><a href="' + esc(z.url) + '" target="_blank" rel="noopener">' + esc(P(z, "nazwa")) + "</a></li>"; }).join("") + "</ol>" : "") +
      '<div class="sec-head"><div><h2>' + L("Wykres i aktualny kurs", "Chart and live quote") + '</h2></div><a href="#' + esc(ins.id) + '">' + L("Strona instrumentu →", "Instrument page →") + "</a></div>" + kurs(ins) + wykres(ins) + "</div>" +
      '<aside class="aside"><div class="panel"><h4>' + L("Wynik analizy", "Result") + "</h4>" +
      '<div class="res-box">' + wynikTag(a) + (w.data ? '<span class="muted">' + data(w.data) + "</span>" : "") + "</div>" +
      '<p class="muted" style="margin:0;font-size:14px">' + (P(w, "komentarz") ? esc(P(w, "komentarz")) : L("Analiza jest w toku. Rozliczymy ją, gdy cena dotrze do celu albo poziomu unieważnienia.", "This analysis is still open. It will be settled when price reaches the target or the invalidation level.")) +
      ' <a href="#o-stronie">' + L("Zasady", "Rules") + "</a></p></div>" +
      '<div class="panel"><h4>' + L("Kluczowe poziomy", "Key levels") + "</h4>" + drabinka(a) + tabelaPoziomow(a) +
      '<p class="muted" style="margin:0;font-size:12px">' + L("Zaznaczony pas to zakres między najbliższym oporem a wsparciem.", "The shaded band spans the nearest resistance and support.") + "</p></div>" +
      udostepnij(a) +
      '<div class="panel"><h4>' + L("Ostrzeżenie", "Disclaimer") + '</h4><p class="muted" style="margin:0;font-size:13px">' + L("Analiza ma charakter edukacyjny i nie stanowi rekomendacji inwestycyjnej.", "This analysis is educational and is not investment advice.") + ' <a href="#ryzyko">' + L("Pełne zastrzeżenie", "Full disclaimer") + "</a></p></div></aside></div></div>";
  };


  V.przeglad = function () {
    if (!PR) return phead("", L("Przegląd AI", "AI brief"), L("Przegląd rynku", "Market brief"), L("Przegląd nie został jeszcze przygotowany.", "The brief has not been prepared yet."));
    var rows = INS.map(function (i) {
      var p = PR.instrumenty[i.id] || {};
      return '<tr data-href="#' + i.id + '" tabindex="0"><td><a class="ins" href="#' + i.id + '"><b>' + esc(i.symbol) + "</b><span>" + esc(P(i, "nazwa")) + "</span></a></td>" +
        '<td class="r num">' + (p.kurs != null ? cena(p.kurs, i) : '<span class="muted">' + brakDanych() + "</span>") + "</td>" +
        '<td class="r">' + zmianaTxt(p.zmiana) + '</td><td class="r">' + zmianaTxt(p.tydzien) + "</td>" +
        '<td class="note">' + esc(P(p, "notka") || "") + (p.zrodlo != null ? " " + zrodloLink(p.zrodlo) : "") + "</td></tr>";
    }).join("");
    return phead("", L("Przegląd AI", "AI brief"), esc(P(PR, "naglowek")), "",
        '<div class="meta">' + aiBadge() + "<span>" + L("Przygotowane przez AI (Claude) na podstawie publicznych źródeł", "Prepared by AI (Claude) from public sources") + '</span><span class="sep"></span><span>' + L("Zaktualizowano ", "Updated ") + czasPL(PR.aktualizacja) + "</span></div>") +
      '<div class="wrap page"><section><div class="sec-head"><div><h2>' + L("Najważniejsze", "Key points") + '</h2></div><span class="muted" style="font-size:13px">' + L("Stan na: ", "As of: ") + esc(P(PR, "stanNa")) + "</span></div>" +
      '<ul class="points">' + P(PR, "punkty").map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></section>" +
      '<section><div class="sec-head"><div><h2>' + L("Instrumenty", "Instruments") + '</h2></div></div><div class="tbl-wrap"><table class="tbl"><thead><tr><th>' + L("Instrument", "Instrument") + '</th><th class="r">' + L("Kurs", "Price") + '</th><th class="r">' + L("Dzień", "Day") + '</th><th class="r">' + L("Tydzień", "Week") + "</th><th>" + L("Komentarz", "Comment") + "</th></tr></thead><tbody>" + rows + "</tbody></table></div></section>" +
      '<section><div class="sec-head"><div><h2>' + L("Najbliższe wydarzenia", "Upcoming events") + '</h2></div><a href="#kalendarz">' + L("Pełny kalendarz →", "Full calendar →") + '</a></div><div class="panel">' + (KAL ? kalMini(nadchodzace(10), L("Brak zaplanowanych wydarzeń.", "No scheduled events.")) : kalendarzLista(PR.kalendarz)) + "</div></section>" +
      '<section><div class="sec-head"><div><h2>' + L("Źródła", "Sources") + '</h2></div></div><ol class="sources">' + PR.zrodla.map(function (z) { return '<li><a href="' + esc(z.url) + '" target="_blank" rel="noopener">' + esc(P(z, "nazwa")) + "</a></li>"; }).join("") + "</ol>" +
      '<p class="muted" style="font-size:13px;margin:0">' + L("Przegląd przygotowuje AI. Liczby pochodzą wyłącznie z podanych źródeł; gdy dana nie została potwierdzona, widnieje „brak danych”. Przed decyzją sprawdź kurs na wykresie na żywo.", "This brief is prepared by AI. Figures come only from the listed sources; anything unconfirmed shows as “no data”. Check the live chart before making any decision.") + "</p></section></div>";
  };

  // ---------- Kalendarz ekonomiczny ----------
  var KRAJE = {
    pl: { US: "USA", EZ: "Strefa euro", DE: "Niemcy", FR: "Francja", UK: "Wielka Brytania", PL: "Polska", CN: "Chiny", CA: "Kanada", JP: "Japonia", CH: "Szwajcaria", AU: "Australia" },
    en: { US: "United States", EZ: "Euro area", DE: "Germany", FR: "France", UK: "United Kingdom", PL: "Poland", CN: "China", CA: "Canada", JP: "Japan", CH: "Switzerland", AU: "Australia" }
  };
  var SILA = { pl: ["", "słaby", "średni", "duży", "bardzo duży"], en: ["", "low", "medium", "high", "very high"] };
  var DNI = { pl: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"], en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] };
  var MIES_D = { pl: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"], en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] };
  function krajNazwa(k) { return KRAJE[I.lang][k] || k; }
  // Głowy byka: 1–2 zielone, 3 pomarańczowa, 4 czerwona i wściekła. Niewypełnione miejsca są wyszarzone.
  function glowy(w) {
    var s = SILA[I.lang][w], h = '<span class="bulls" role="img" aria-label="' + L("Wpływ: ", "Impact: ") + s + " (" + w + '/4)" title="' + L("Wpływ: ", "Impact: ") + s + '">';
    for (var i = 1; i <= 4; i++) {
      var on = i <= w, cls = on ? (i <= 2 ? "b-g" : i === 3 ? "b-o" : "b-r") : "b-off";
      h += '<svg class="bull ' + cls + '" aria-hidden="true"><use href="#' + (on && i === 4 ? "byk-zly" : "byk") + '"/></svg>';
    }
    return h + "</span>";
  }
  function kraj(k) { return '<span class="cc" title="' + esc(krajNazwa(k)) + '">' + esc(k) + "</span>"; }
  function plDzien(d) {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Warsaw", year: "numeric", month: "2-digit", day: "2-digit" }).format(d); // RRRR-MM-DD w czasie polskim
  }
  function plGodz(d) { return d.toLocaleTimeString(LOC(), { timeZone: "Europe/Warsaw", hour: "2-digit", minute: "2-digit", hour12: false }); }
  function nazwaDnia(klucz) {
    var p = klucz.split("-"), d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2], 12));
    return DNI[I.lang][d.getUTCDay()] + ", " + (+p[2]) + " " + MIES_D[I.lang][+p[1] - 1];
  }
  function wydarzenia() {
    return KAL ? KAL.wydarzenia.map(function (e) { var o = Object.assign({}, e); o.d = new Date(e.czas); return o; }).sort(function (x, y) { return x.d - y.d || y.wplyw - x.wplyw; }) : [];
  }
  function nadchodzace(n, filtr) {
    var teraz = Date.now();
    return wydarzenia().filter(function (e) { return e.d.getTime() > teraz - 30 * 60000 && (!filtr || filtr(e)); }).slice(0, n);
  }
  function insChipy(lista) {
    return (lista || []).map(function (id) { var i = byId[id]; return i ? '<a class="ichip" href="#' + id + '">' + esc(i.symbol) + "</a>" : ""; }).join("");
  }
  function wiersz_kal(e) {
    var past = e.d.getTime() < Date.now() - 30 * 60000;
    var dane = [[L("Poprz.", "Prev."), P(e, "poprzednio")], [L("Prognoza", "Forecast"), P(e, "prognoza")], [L("Odczyt", "Actual"), P(e, "aktualnie")]].filter(function (x) { return x[1] != null; });
    return '<li class="ev ev--w' + e.wplyw + (past ? " is-past" : "") + '">' +
      '<span class="ev__time num">' + plGodz(e.d) + "</span>" +
      '<span class="ev__cc">' + kraj(e.kraj) + "</span>" +
      '<div class="ev__main"><b>' + esc(P(e, "nazwa")) + "</b><p>" + esc(P(e, "opis") || "") + "</p>" +
      ((e.instrumenty && e.instrumenty.length) || dane.length ? '<div class="ev__meta">' + insChipy(e.instrumenty) +
        dane.map(function (x) { return '<span class="ev__val"><span>' + x[0] + '</span> <b class="num">' + esc(x[1]) + "</b></span>"; }).join("") + "</div>" : "") +
      "</div>" + '<span class="ev__imp">' + glowy(e.wplyw) + "</span></li>";
  }
  function ileWyd(n) { return en() ? n + (n === 1 ? " event" : " events") : n + " " + (n === 1 ? "wydarzenie" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? "wydarzenia" : "wydarzeń"); }
  function listaKal(arr) {
    if (!arr.length) return '<div class="feed"><div class="empty">' + L("Brak wydarzeń dla wybranych filtrów.", "No events match these filters.") + "</div></div>";
    var dzis = plDzien(new Date()), grupy = {}, kolej = [];
    arr.forEach(function (e) { var k = plDzien(e.d); if (!grupy[k]) { grupy[k] = []; kolej.push(k); } grupy[k].push(e); });
    return kolej.map(function (k) {
      return '<section class="day' + (k === dzis ? " is-today" : "") + '"><h3 class="day__h">' + nazwaDnia(k) + (k === dzis ? ' <span class="today">' + L("dziś", "today") + "</span>" : "") +
        '<span class="day__n">' + ileWyd(grupy[k].length) + "</span></h3>" +
        '<ol class="evs">' + grupy[k].map(wiersz_kal).join("") + "</ol></section>";
    }).join("");
  }
  function legenda() {
    var opis = { pl: ["", "Zwykle bez reakcji rynku", "Możliwy ruch na powiązanych rynkach", "Wyraźny ruch, większa zmienność", "Silne ruchy na wielu rynkach naraz"],
      en: ["", "Usually no market reaction", "Possible move in related markets", "Clear move, higher volatility", "Strong moves across many markets at once"] };
    return '<div class="legend">' + [1, 2, 3, 4].map(function (w) {
      var s = SILA[I.lang][w];
      return '<div class="legend__i">' + glowy(w) + "<span><b>" + s.charAt(0).toUpperCase() + s.slice(1) + "</b>" + opis[I.lang][w] + "</span></div>";
    }).join("") + "</div>";
  }
  function pasujeKal(e) {
    return e.wplyw >= filtrKal.wplyw && (!filtrKal.kraj || e.kraj === filtrKal.kraj) && (!filtrKal.instrument || (e.instrumenty || []).indexOf(filtrKal.instrument) >= 0);
  }
  function nastepne() {
    var e = nadchodzace(1, function (x) { return x.wplyw >= 3 && x.d.getTime() > Date.now(); })[0];
    if (!e) return "";
    return '<div class="next"><div class="next__l"><p class="eyebrow">' + L("Następne ważne wydarzenie", "Next major event") + "</p><b>" + kraj(e.kraj) + " " + esc(P(e, "nazwa")) + "</b>" +
      '<span class="muted">' + nazwaDnia(plDzien(e.d)) + ", " + plGodz(e.d) + "</span></div>" +
      '<div class="next__r">' + glowy(e.wplyw) + '<span class="num next__cd" data-cd="' + e.d.getTime() + '">' + odliczanie(e.d.getTime()) + "</span></div></div>";
  }
  function odliczanie(t) {
    var s = Math.max(0, Math.floor((t - Date.now()) / 60000)), d = Math.floor(s / 1440), h = Math.floor(s % 1440 / 60), m = s % 60;
    return L("za ", "in ") + (d ? d + " d " : "") + (d || h ? h + " h " : "") + m + " min";
  }
  setInterval(function () { document.querySelectorAll("[data-cd]").forEach(function (el) { el.textContent = odliczanie(+el.getAttribute("data-cd")); }); }, 30000);

  V.kalendarz = function () {
    if (!KAL) return phead("", L("Kalendarz", "Calendar"), L("Kalendarz ekonomiczny", "Economic calendar"), L("Kalendarz nie został jeszcze przygotowany.", "The calendar has not been prepared yet."));
    var wszystkie = wydarzenia();
    var kraje = []; wszystkie.forEach(function (e) { if (kraje.indexOf(e.kraj) < 0) kraje.push(e.kraj); });
    var wpl = [[1, L("Wszystkie", "All")], [2, L("Od średnich", "Medium and up")], [3, L("Od dużych", "High and up")], [4, L("Tylko bardzo duże", "Very high only")]].map(function (x) {
      return '<button type="button" class="seg' + (filtrKal.wplyw === x[0] ? " is-on" : "") + '" aria-pressed="' + (filtrKal.wplyw === x[0]) + '" data-wpl="' + x[0] + '">' + x[1] + "</button>";
    }).join("");
    return phead("", L("Kalendarz ", "Calendar ") + aiBadge(), L("Kalendarz ekonomiczny", "Economic calendar"), L("Kiedy publikowane są dane i decyzje, które poruszają rynkami, i jak mocno. Godziny w czasie polskim.", "When market-moving data and decisions are released, and how much they matter. Times are Warsaw time (CET/CEST)."),
        '<div class="meta"><span>' + L("Zaktualizowano ", "Updated ") + czasPL(KAL.aktualizacja) + "</span></div>") +
      '<div class="wrap page"><section>' + nastepne() + legenda() + "</section>" +
      '<section><div class="filters"><div class="segs" role="group" aria-label="' + L("Siła wpływu", "Impact") + '">' + wpl + "</div>" +
      '<label for="k-kraj">' + L("Kraj", "Country") + '<select id="k-kraj"><option value="">' + L("Wszystkie kraje", "All countries") + "</option>" + kraje.map(function (k) { return '<option value="' + k + '"' + (filtrKal.kraj === k ? " selected" : "") + ">" + esc(krajNazwa(k)) + "</option>"; }).join("") + "</select></label>" +
      '<label for="k-ins">' + L("Instrument", "Instrument") + '<select id="k-ins"><option value="">' + L("Wszystkie", "All") + "</option>" + INS.map(function (i) { return '<option value="' + i.id + '"' + (filtrKal.instrument === i.id ? " selected" : "") + ">" + esc(i.symbol) + "</option>"; }).join("") + "</select></label></div>" +
      '<div id="kal-lista">' + listaKal(wszystkie.filter(pasujeKal)) + "</div>" +
      '<p class="muted" style="font-size:13px;margin:0">' + esc(P(KAL, "uwaga") || "") + " " + L("Ocenę wpływu nadaje AI na podstawie typowej reakcji rynku na daną publikację.", "Impact ratings are assigned by AI based on the typical market reaction to each release.") + "</p>" +
      '<ol class="sources">' + KAL.zrodla.map(function (z) { return '<li><a href="' + esc(z.url) + '" target="_blank" rel="noopener">' + esc(P(z, "nazwa")) + "</a></li>"; }).join("") + "</ol></section></div>";
  };
  function podepnijKal() {
    function odswiez() { document.getElementById("kal-lista").innerHTML = listaKal(wydarzenia().filter(pasujeKal)); }
    document.querySelectorAll("[data-wpl]").forEach(function (b) {
      b.addEventListener("click", function () {
        filtrKal.wplyw = +b.getAttribute("data-wpl");
        document.querySelectorAll("[data-wpl]").forEach(function (x) { x.classList.toggle("is-on", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        odswiez();
      });
    });
    document.getElementById("k-kraj").addEventListener("change", function (e) { filtrKal.kraj = e.target.value; odswiez(); });
    document.getElementById("k-ins").addEventListener("change", function (e) { filtrKal.instrument = e.target.value; odswiez(); });
  }
  function kalMini(arr, pusty) {
    if (!arr.length) return '<p class="muted" style="margin:0;font-size:14px">' + pusty + "</p>";
    return '<ol class="mini">' + arr.map(function (e) {
      return '<li><span class="mini__t num">' + (en() ? e.d.toLocaleDateString("en-GB", { timeZone: "Europe/Warsaw", day: "numeric", month: "short" }) : plDzien(e.d).slice(8) + "." + plDzien(e.d).slice(5, 7)) + " " + plGodz(e.d) + "</span>" + kraj(e.kraj) +
        '<span class="mini__n">' + esc(P(e, "nazwa")) + "</span>" + glowy(e.wplyw) + "</li>";
    }).join("") + "</ol>";
  }

  V["o-stronie"] = function () {
    return phead("", L("Metodologia", "Methodology"), L("Jak czytać analizy", "How to read the analyses"), L("Każda analiza ma ten sam układ, żeby można je było szybko porównywać między rynkami.", "Every analysis follows the same layout so you can compare markets quickly.")) +
      '<div class="wrap page"><section class="prose">' +
      "<h2>" + L("Elementy analizy", "What each analysis contains") + "</h2><ul>" +
      L("<li><b>Nastawienie</b>: wzrostowe, spadkowe lub neutralne. Dotyczy wskazanego interwału i nie jest sygnałem do zawarcia transakcji.</li>" +
        "<li><b>Interwał</b>: H4 (4 godziny), D1 (dzień), W1 (tydzień). Określa horyzont, którego dotyczy analiza.</li>" +
        "<li><b>Kluczowe poziomy</b>: opory (R) i wsparcia (S), przy których spodziewana jest reakcja ceny. Numeracja rośnie wraz z odległością od ceny.</li>" +
        "<li><b>Scenariusze</b>: warunki, które potwierdzają obraz rynku, i poziom, który go unieważnia.</li>",
        "<li><b>Bias</b>: bullish, bearish or neutral. It applies to the stated timeframe and is not a trade signal.</li>" +
        "<li><b>Timeframe</b>: H4 (4 hours), D1 (daily), W1 (weekly). It sets the horizon the analysis covers.</li>" +
        "<li><b>Key levels</b>: resistance (R) and support (S) where a price reaction is expected. Numbers increase with distance from price.</li>" +
        "<li><b>Scenarios</b>: the conditions that confirm the view and the level that invalidates it.</li>") + "</ul>" +
      "<h2>" + L("Jak rozliczamy analizy", "How analyses are settled") + "</h2><ul>" +
      L("<li><b>Wzrostowa</b> jest trafiona, gdy cena dotknie pierwszego oporu nad ceną z publikacji (R1), zanim świeca na interwale analizy zamknie się poniżej najbliższego wsparcia (S1). W odwrotnej kolejności jest nietrafiona.</li>" +
        "<li><b>Spadkowa</b> działa odwrotnie: celem jest S1, a zamknięcie powyżej R1 ją unieważnia.</li>" +
        "<li><b>Neutralna</b> jest trafiona, gdy do końca horyzontu żadna świeca nie zamknie się poza zakresem S1–R1, a nietrafiona, gdy się zamknie.</li>" +
        "<li><b>Horyzont</b>: H4 to 5 dni sesyjnych, D1 to 10 dni sesyjnych, W1 to 6 tygodni. Gdy w tym czasie nie padnie ani cel, ani unieważnienie, analiza jest „bez rozstrzygnięcia” i nie wlicza się do trafności.</li>" +
        "<li><b>Trafność</b> to liczba trafionych podzielona przez sumę trafionych i nietrafionych. Rozliczenia dokonuje AI przy aktualizacji danych, na podstawie cen z publicznych źródeł; każde ma datę i komentarz, a autor może je skorygować.</li>",
        "<li>A <b>bullish</b> call is a hit when price touches the first resistance above the publication price (R1) before a candle on the analysis timeframe closes below the nearest support (S1). In the reverse order it is a miss.</li>" +
        "<li>A <b>bearish</b> call works the other way round: S1 is the target and a close above R1 invalidates it.</li>" +
        "<li>A <b>neutral</b> call is a hit when no candle closes outside the S1–R1 range by the end of the horizon, and a miss when one does.</li>" +
        "<li><b>Horizon</b>: H4 is 5 trading days, D1 is 10 trading days, W1 is 6 weeks. If neither the target nor the invalidation is reached in that time, the result is “no result” and it does not count toward the hit rate.</li>" +
        "<li>The <b>hit rate</b> is hits divided by hits plus misses. AI settles analyses during data updates using prices from public sources; each settlement is dated and commented, and the author can correct it.</li>") + "</ul>" +
      "<h2>" + L("Źródła", "Sources") + "</h2><p>" + L("Wykresy pochodzą z TradingView. Dane makroekonomiczne pochodzą z publikacji banków centralnych i urzędów statystycznych.", "Charts come from TradingView. Macro data comes from central bank and statistics office releases.") + "</p></section></div>";
  };

  V.kontakt = function () {
    var mail = CFG.email ? '<a href="mailto:' + esc(CFG.email) + '">' + esc(CFG.email) + "</a>" : L("Adres do uzupełnienia przed publikacją", "Address to be added before launch");
    return phead("", L("Kontakt", "Contact"), L("Skontaktuj się", "Get in touch"), L("Pytania o analizy, współpracę lub dostęp dla klientów.", "Questions about the analyses, partnerships or client access.")) +
      '<div class="wrap page"><div class="contact">' +
      '<div class="panel"><h4>E-mail</h4><p style="margin:0">' + mail + "</p></div>" +
      '<div class="panel"><h4>' + L("Media społecznościowe", "Social media") + '</h4><p style="margin:0">' + L("Linki do uzupełnienia przed publikacją", "Links to be added before launch") + "</p></div></div></div>";
  };

  V.powiadomienia = function () {
    return phead("", L("Powiadomienia", "Alerts"), L("Powiadomienia o analizach", "Analysis alerts"), L("E-mail albo Telegram: wybierz, gdzie chcesz dostawać informacje.", "E-mail or Telegram: choose where you want to hear from us.")) +
      '<div class="wrap page"><section>' + powiadomienia(false) + "</section>" +
      '<section class="prose"><h2>' + L("Co wysyłamy", "What we send") + "</h2><ul>" +
      L("<li>Każdą nową analizę: tytuł, nastawienie, kluczowe poziomy i link.</li><li>Ostrzeżenie przed wydarzeniem z czterema głowami byka (bardzo duży wpływ), dzień wcześniej.</li><li>Rozliczenie analizy: trafiona albo nietrafiona.</li>",
        "<li>Every new analysis: title, bias, key levels and a link.</li><li>A heads-up a day before any four-bull-head (very high impact) event.</li><li>Each analysis settlement: hit or miss.</li>") +
      "</ul><p>" + L("Wysyłamy tylko to, nic więcej. Z e-maili wypiszesz się linkiem w stopce każdej wiadomości, a z kanału na Telegramie w dowolnej chwili.", "That is all we send. Unsubscribe from e-mails via the link in every message, and leave the Telegram channel at any time.") + "</p></section></div>";
  };

  V.ryzyko = function () {
    return phead("", L("Informacje prawne", "Legal"), L("Ostrzeżenie o ryzyku", "Risk warning"), "") +
      '<div class="wrap page"><section class="prose">' +
      L("<p>Materiały publikowane w serwisie mają wyłącznie charakter edukacyjny i informacyjny. Nie stanowią rekomendacji inwestycyjnej, porady inwestycyjnej ani oferty w rozumieniu obowiązujących przepisów.</p>" +
        "<p>Kontrakty CFD i handel na rynku forex z użyciem dźwigni finansowej wiążą się z wysokim ryzykiem szybkiej utraty środków. Przed podjęciem decyzji inwestycyjnej oceń, czy rozumiesz zasady działania tych instrumentów i czy możesz pozwolić sobie na ryzyko utraty pieniędzy.</p>" +
        "<p>Wyniki historyczne, w tym trafność analiz, nie gwarantują przyszłych wyników. Autor nie ponosi odpowiedzialności za decyzje podjęte na podstawie publikowanych treści.</p>",
        "<p>Content published on this site is for educational and informational purposes only. It is not an investment recommendation, investment advice or an offer within the meaning of applicable law.</p>" +
        "<p>CFDs and leveraged forex trading carry a high risk of losing money rapidly. Before investing, consider whether you understand how these instruments work and whether you can afford to take the high risk of losing your money.</p>" +
        "<p>Past performance, including the analysis hit rate, does not guarantee future results. The author accepts no liability for decisions made on the basis of the published content.</p>") + "</section></div>";
  };

  // ---------- Strony prawne (projekty do weryfikacji przez prawnika) ----------
  function luka(v, pl, en) { return v ? esc(v) : '<mark class="todo">[' + L(pl, en) + "]</mark>"; }
  function projekt() {
    return '<div class="notice"><span class="tag-ex">' + L("projekt", "draft") + "</span><p>" +
      L("Projekt dokumentu do sprawdzenia przez prawnika przed publiczną publikacją strony. Pola w nawiasach uzupełnij w pliku js/ustawienia.js.", "Draft document to be reviewed by a lawyer before the site goes public. Bracketed fields are filled in js/ustawienia.js.") +
      (en() ? " The Polish version is binding." : "") + "</p></div>";
  }
  function prawna(tytul, html) {
    return phead("", L("Informacje prawne", "Legal"), tytul, "") + '<div class="wrap page">' + projekt() + '<section class="prose">' + html + "</section></div>";
  }
  function administrator() {
    return luka(CFG.wlasciciel, "imię i nazwisko lub nazwa firmy", "name or company name") + ", " + luka(CFG.adres, "adres", "address") + ", e-mail: " + luka(CFG.email, "adres e-mail", "e-mail address");
  }
  V.regulamin = function () {
    return prawna(L("Regulamin serwisu", "Terms of service"), L(
      "<h2>1. Usługodawca</h2><p>Serwis prowadzi " + administrator() + ".</p>" +
      "<h2>2. Zakres usług</h2><p>Serwis bezpłatnie udostępnia analizy rynków finansowych, przegląd rynku i kalendarz ekonomiczny przygotowywane z pomocą AI oraz, po zapisaniu się, powiadomienia e-mail lub przez Telegram. Treści mają charakter edukacyjny i nie są rekomendacją inwestycyjną (zob. Ostrzeżenie o ryzyku).</p>" +
      "<h2>3. Wymagania techniczne</h2><p>Do korzystania z serwisu potrzebna jest aktualna przeglądarka internetowa z włączonym JavaScriptem. Do powiadomień e-mail potrzebny jest adres e-mail, a do kanału na Telegramie konto w tej usłudze.</p>" +
      "<h2>4. Zasady korzystania</h2><p>Treści serwisu są chronione prawem autorskim. Można je udostępniać za pomocą linków; kopiowanie całych analiz wymaga zgody usługodawcy.</p>" +
      "<h2>5. Powiadomienia</h2><p>Umowa o dostarczanie powiadomień zawierana jest z chwilą zapisu i potwierdzenia adresu. Można ją rozwiązać w każdej chwili, wypisując się linkiem w wiadomości lub opuszczając kanał.</p>" +
      "<h2>6. Reklamacje</h2><p>Reklamacje można zgłaszać na adres " + luka(CFG.email, "adres e-mail", "e-mail address") + ". Odpowiadamy w ciągu 14 dni.</p>" +
      "<h2>7. Odpowiedzialność</h2><p>Usługodawca dokłada starań, by dane były poprawne, ale nie gwarantuje ich kompletności ani aktualności i nie odpowiada za decyzje inwestycyjne podjęte na ich podstawie.</p>" +
      "<h2>8. Zmiany regulaminu</h2><p>O zmianach regulaminu informujemy na stronie z co najmniej 7-dniowym wyprzedzeniem. Regulamin obowiązuje od " + luka("", "data", "date") + ".</p>",
      "<h2>1. Provider</h2><p>This site is operated by " + administrator() + ".</p>" +
      "<h2>2. Services</h2><p>The site provides, free of charge, financial market analyses, an AI-assisted market brief and economic calendar, and, after sign-up, alerts by e-mail or Telegram. The content is educational and is not investment advice (see the Risk warning).</p>" +
      "<h2>3. Technical requirements</h2><p>You need an up-to-date web browser with JavaScript enabled. E-mail alerts require an e-mail address; the Telegram channel requires a Telegram account.</p>" +
      "<h2>4. Use of content</h2><p>The content is protected by copyright. You may share it by link; copying whole analyses requires the provider's consent.</p>" +
      "<h2>5. Alerts</h2><p>The alert service starts when you sign up and confirm your address. You can end it at any time by unsubscribing or leaving the channel.</p>" +
      "<h2>6. Complaints</h2><p>Send complaints to " + luka(CFG.email, "adres e-mail", "e-mail address") + ". We reply within 14 days.</p>" +
      "<h2>7. Liability</h2><p>We take care that the data is accurate but do not guarantee it is complete or current, and accept no liability for investment decisions based on it.</p>" +
      "<h2>8. Changes</h2><p>We announce changes to these terms on the site at least 7 days in advance. These terms apply from " + luka("", "data", "date") + ".</p>"));
  };
  V.prywatnosc = function () {
    return prawna(L("Polityka prywatności", "Privacy policy"), L(
      "<h2>Administrator danych</h2><p>Administratorem danych osobowych jest " + administrator() + ".</p>" +
      "<h2>Jakie dane i po co</h2><ul><li><b>Adres e-mail</b> przy zapisie na powiadomienia: wysyłka powiadomień na podstawie Twojej zgody (art. 6 ust. 1 lit. a RODO), do czasu jej wycofania.</li>" +
      "<li><b>Korespondencja</b>, gdy do nas piszesz: odpowiedź na wiadomość, na podstawie naszego prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO).</li>" +
      "<li><b>Dane techniczne</b> (adres IP, typ przeglądarki) w logach serwera hostingu: bezpieczeństwo i działanie strony (art. 6 ust. 1 lit. f RODO).</li></ul>" +
      "<h2>Odbiorcy danych</h2><p>Dane mogą otrzymać: dostawca usługi newslettera " + luka("", "nazwa usługi", "service name") + ", dostawca hostingu " + luka("", "nazwa usługi", "service name") + ", a po Twojej zgodzie na pliki cookie TradingView (widżety notowań). Strona korzysta też z czcionek Google Fonts, co oznacza przekazanie adresu IP do Google. Część tych dostawców może przetwarzać dane poza Europejskim Obszarem Gospodarczym na podstawie standardowych klauzul umownych lub decyzji o adekwatności.</p>" +
      "<p>Kanał na Telegramie prowadzi Telegram według własnej polityki prywatności; nie widzimy numerów telefonów subskrybentów.</p>" +
      "<h2>Twoje prawa</h2><p>Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przeniesienia, sprzeciwu oraz wycofania zgody w dowolnym momencie. Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.</p>" +
      "<h2>Pliki cookie</h2><p>Szczegóły na stronie <a href=\"#cookies\">Pliki cookie</a>.</p>",
      "<h2>Controller</h2><p>The controller of your personal data is " + administrator() + ".</p>" +
      "<h2>What data and why</h2><ul><li><b>E-mail address</b> when you sign up for alerts: sending alerts based on your consent (Art. 6(1)(a) GDPR), until you withdraw it.</li>" +
      "<li><b>Correspondence</b> when you write to us: replying, based on our legitimate interest (Art. 6(1)(f) GDPR).</li>" +
      "<li><b>Technical data</b> (IP address, browser type) in the hosting server logs: site security and operation (Art. 6(1)(f) GDPR).</li></ul>" +
      "<h2>Recipients</h2><p>Data may be received by the newsletter provider " + luka("", "nazwa usługi", "service name") + ", the hosting provider " + luka("", "nazwa usługi", "service name") + ", and, once you accept cookies, TradingView (quote widgets). The site also uses Google Fonts, which passes your IP address to Google. Some of these providers may process data outside the European Economic Area under standard contractual clauses or adequacy decisions.</p>" +
      "<p>The Telegram channel is run by Telegram under its own privacy policy; we cannot see subscribers' phone numbers.</p>" +
      "<h2>Your rights</h2><p>You have the right to access, rectify and erase your data, to restrict processing, to data portability, to object, and to withdraw consent at any time. You may also lodge a complaint with the Polish data protection authority (Prezes UODO).</p>" +
      "<h2>Cookies</h2><p>See <a href=\"#cookies\">Cookies</a>.</p>"));
  };
  V.cookies = function () {
    var z = zgoda();
    return prawna(L("Pliki cookie", "Cookies"), L(
      "<p>Strona zapisuje w przeglądarce tylko to, co niezbędne: wybrany język i Twoją decyzję o plikach cookie. Nie używamy plików cookie reklamowych ani analitycznych.</p>" +
      "<p>Wykresy, notowania i wiadomości pochodzą z widżetów TradingView, które mogą zapisywać własne pliki cookie. Ładujemy je dopiero po Twojej zgodzie. Bez zgody zamiast nich widać link do TradingView.</p>",
      "<p>The site stores only what is essential in your browser: your language and your cookie choice. We use no advertising or analytics cookies.</p>" +
      "<p>Charts, quotes and news come from TradingView widgets, which may set their own cookies. We load them only after you consent. Without consent you see a link to TradingView instead.</p>") +
      "<p><b>" + L("Twoja obecna decyzja: ", "Your current choice: ") + "</b>" + (z === "tak" ? L("zgoda na widżety TradingView", "TradingView widgets allowed") : z === "nie" ? L("tylko niezbędne", "essential only") : L("nie wybrano", "not chosen yet")) +
      '</p><p><button type="button" class="btn btn--primary" data-cookies>' + L("Zmień ustawienia", "Change settings") + "</button></p>");
  };

  // ---------- Router ----------
  var TYTULY = { start: "", rynki: ["Rynki", "Markets"], analizy: ["Analizy", "Analyses"], przeglad: ["Przegląd AI", "AI brief"], kalendarz: ["Kalendarz ekonomiczny", "Economic calendar"],
    "o-stronie": ["Metodologia", "Methodology"], kontakt: ["Kontakt", "Contact"], ryzyko: ["Ostrzeżenie o ryzyku", "Risk warning"], powiadomienia: ["Powiadomienia", "Alerts"],
    regulamin: ["Regulamin", "Terms of service"], prywatnosc: ["Polityka prywatności", "Privacy policy"], cookies: ["Pliki cookie", "Cookies"] };
  function render(zostanTu) {
    var h = (location.hash || "").replace(/^#/, "") || "start";
    var html, nav = h, tytul = "";
    if (Object.prototype.hasOwnProperty.call(V, h) && h !== "instrument" && h !== "analiza") { html = V[h](); tytul = TYTULY[h] ? L(TYTULY[h][0], TYTULY[h][1]) : ""; }
    else if (byId[h]) { html = V.instrument(byId[h]); nav = "rynki"; tytul = byId[h].symbol + " · " + P(byId[h], "nazwa"); }
    else if (h.indexOf("a-") === 0 && AN.some(function (a) { return a.id === h.slice(2); })) {
      var a = AN.filter(function (x) { return x.id === h.slice(2); })[0];
      html = V.analiza(a); nav = "analizy"; tytul = P(a, "tytul");
    } else { html = V.start(); nav = "start"; }
    app.innerHTML = html;
    document.title = (tytul ? tytul + " · " : "") + "AnalizyRynku";
    document.querySelectorAll("[data-nav]").forEach(function (el) {
      if (el.getAttribute("data-nav") === nav) el.setAttribute("aria-current", "page"); else el.removeAttribute("aria-current");
    });
    if (!zostanTu) { window.scrollTo(0, 0); app.focus({ preventScroll: true }); }
    if (h === "analizy") podepnijFiltry();
    if (h === "kalendarz" && KAL) podepnijKal();
  }
  function podepnijFiltry() {
    var fi = document.getElementById("f-ins"), fk = document.getElementById("f-kier"), fw = document.getElementById("f-wyn");
    function zmiana() {
      filtr.instrument = fi.value; filtr.kierunek = fk.value; filtr.wynik = fw.value;
      var arr = AN.filter(pasuje);
      document.getElementById("lista").innerHTML = feed(arr);
      document.getElementById("licznik").innerHTML = licznik(arr.length);
    }
    [fi, fk, fw].forEach(function (s) { s.addEventListener("change", zmiana); });
  }
  // Całe wiersze tabeli rynków są klikalne.
  app.addEventListener("click", function (e) {
    var tr = e.target.closest("tr[data-href]");
    if (tr && !e.target.closest("a")) location.hash = tr.getAttribute("data-href");
  });
  app.addEventListener("keydown", function (e) {
    var tr = e.target.closest && e.target.closest("tr[data-href]");
    if (tr && e.key === "Enter") location.hash = tr.getAttribute("data-href");
  });

  // ---------- Sesje rynku walutowego (czas lokalny każdego centrum, pon–pt) ----------
  var SESJE = [["Sydney", "Sydney", "Australia/Sydney", 7, 16], ["Tokio", "Tokyo", "Asia/Tokyo", 9, 18], ["Londyn", "London", "Europe/London", 8, 17], ["Nowy Jork", "New York", "America/New_York", 8, 17]];
  function czesci(tz) {
    var p = {};
    new Intl.DateTimeFormat("en-GB", { timeZone: tz, weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false })
      .formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
    return p;
  }
  function zegar() {
    var html = SESJE.map(function (s) {
      var p = czesci(s[2]), h = +p.hour % 24, open = p.weekday !== "Sat" && p.weekday !== "Sun" && h >= s[3] && h < s[4];
      return '<span class="sess' + (open ? " is-open" : "") + '" title="' + (open ? L("Sesja otwarta", "Session open") : L("Sesja zamknięta", "Session closed")) + '">' + L(s[0], s[1]) + "</span>";
    }).join("");
    document.getElementById("sesje").innerHTML = html;
    var w = czesci("Europe/Warsaw");
    document.getElementById("zegar").textContent = (+w.hour % 24 < 10 ? "0" : "") + (+w.hour % 24) + ":" + w.minute;
  }
  function stopka() {
    document.getElementById("foot-rynki").innerHTML = INS.map(function (i) { return '<li><a href="#' + i.id + '">' + esc(P(i, "nazwa")) + "</a></li>"; }).join("");
  }

  stopka();
  document.getElementById("rok").textContent = new Date().getFullYear();
  var defs = document.createElement("div");
  defs.innerHTML = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="byk" viewBox="0 0 32 32"> <path fill="currentColor" d="M9.5 9.5C5 9.6 2.4 7 2.2 2.6 4.4 5.2 7 6.2 10.6 6.4zM22.5 9.5c4.5.1 7.1-2.5 7.3-6.9-2.2 2.6-4.8 3.6-8.4 3.8z"/> <ellipse fill="currentColor" cx="6.6" cy="12.6" rx="3.4" ry="1.9" transform="rotate(-18 6.6 12.6)"/> <ellipse fill="currentColor" cx="25.4" cy="12.6" rx="3.4" ry="1.9" transform="rotate(18 25.4 12.6)"/> <path fill="currentColor" d="M11 7.4h10c2.3 0 3.7 1.7 3.5 4l-.8 8.6c-.2 2-1.6 3.4-3.6 3.4h-8.2c-2 0-3.4-1.4-3.6-3.4l-.8-8.6c-.2-2.3 1.2-4 3.5-4z"/> <ellipse fill="currentColor" cx="16" cy="24.2" rx="6.2" ry="4.6"/> <ellipse fill="#fff" fill-opacity=".28" cx="16" cy="24.2" rx="6.2" ry="4.6"/> <circle fill="#1a1a1a" fill-opacity=".55" cx="13.6" cy="24.6" r="1.05"/> <circle fill="#1a1a1a" fill-opacity=".55" cx="18.4" cy="24.6" r="1.05"/> <circle fill="#fff" cx="12.6" cy="15.2" r="1.5"/><circle fill="#1a1a1a" cx="12.8" cy="15.4" r=".75"/> <circle fill="#fff" cx="19.4" cy="15.2" r="1.5"/><circle fill="#1a1a1a" cx="19.2" cy="15.4" r=".75"/> </symbol> <symbol id="byk-zly" viewBox="0 0 32 32"> <path fill="currentColor" d="M9.6 9.8C4.4 9.4 1.6 6.2 1.8 1.4 4 4.4 7 5.8 10.8 6.2zM22.4 9.8c5.2-.4 8-3.6 7.8-8.4-2.2 3-5.2 4.4-9 4.8z"/> <path fill="#fff" fill-opacity=".85" d="M1.8 1.4c.4 1.4 1 2.4 1.8 3.2L2.4 4.2zM30.2 1.4c-.4 1.4-1 2.4-1.8 3.2l1.2-.4z"/> <ellipse fill="currentColor" cx="6.4" cy="12.2" rx="3.5" ry="1.8" transform="rotate(-30 6.4 12.2)"/> <ellipse fill="currentColor" cx="25.6" cy="12.2" rx="3.5" ry="1.8" transform="rotate(30 25.6 12.2)"/> <path fill="currentColor" d="M11 7.4h10c2.3 0 3.7 1.7 3.5 4l-.8 8.6c-.2 2-1.6 3.4-3.6 3.4h-8.2c-2 0-3.4-1.4-3.6-3.4l-.8-8.6c-.2-2.3 1.2-4 3.5-4z"/> <ellipse fill="currentColor" cx="16" cy="24.2" rx="6.4" ry="4.6"/> <ellipse fill="#000" fill-opacity=".18" cx="16" cy="24.2" rx="6.4" ry="4.6"/> <ellipse fill="#1a1a1a" fill-opacity=".7" cx="13.5" cy="24.3" rx="1.25" ry=".9"/> <ellipse fill="#1a1a1a" fill-opacity=".7" cx="18.5" cy="24.3" rx="1.25" ry=".9"/> <path fill="none" stroke="#e8b923" stroke-width="1.1" stroke-linecap="round" d="M14.3 25.8a1.7 1.7 0 0 0 3.4 0"/> <path fill="#ffd84a" d="M10.4 16.3l4.2-.6c-.3 1.4-1.1 2.1-2.2 2.1-1 0-1.7-.6-2-1.5zM21.6 16.3l-4.2-.6c.3 1.4 1.1 2.1 2.2 2.1 1 0 1.7-.6 2-1.5z"/> <circle fill="#1a1a1a" cx="12.8" cy="16.6" r=".7"/><circle fill="#1a1a1a" cx="19.2" cy="16.6" r=".7"/> <path fill="none" stroke="#1a1a1a" stroke-width="1.7" stroke-linecap="round" d="M9.8 12.6l5 2.4M22.2 12.6l-5 2.4"/> <g fill="currentColor" fill-opacity=".55"><circle cx="7.2" cy="26.8" r="1.5"/><circle cx="4.6" cy="25.2" r="1.1"/><circle cx="2.8" cy="23.4" r=".75"/> <circle cx="24.8" cy="26.8" r="1.5"/><circle cx="27.4" cy="25.2" r="1.1"/><circle cx="29.2" cy="23.4" r=".75"/></g> </symbol></svg>';
  document.body.insertBefore(defs.firstChild, document.body.firstChild);
  zegar();
  pasekNotowan();
  setInterval(zegar, 30000);
  window.addEventListener("hashchange", function () { render(false); });
  document.addEventListener("jezyk", function () {
    stopka(); zegar(); pasekNotowan(); render(true);
    if (document.getElementById("cookie")) baner(true);
  });
  render(false);
  if (CFG.zgodaCookies !== false && !zgoda()) baner(true);
})();
