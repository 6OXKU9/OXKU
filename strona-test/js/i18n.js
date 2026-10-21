// Wersja językowa strony (PL / EN).
// L("tekst po polsku", "English text") zwraca tekst w bieżącym języku.
// pole(obiekt, "tytul") zwraca obiekt.tytul_en w wersji angielskiej (gdy istnieje), inaczej obiekt.tytul.
// Teksty stałe w index.html tłumaczy atrybut data-en (i data-en-aria dla aria-label).
(function () {
  "use strict";
  var zapisany = null;
  try { zapisany = localStorage.getItem("jezyk"); } catch (e) {}
  var zAdresu = (location.search.match(/[?&]lang=(pl|en)\b/) || [])[1];
  var I = window.I18N = {
    lang: zAdresu || (zapisany === "en" ? "en" : "pl"),
    L: function (pl, en) { return I.lang === "en" && en != null ? en : pl; },
    pole: function (o, k) {
      if (!o) return o;
      return I.lang === "en" && o[k + "_en"] != null ? o[k + "_en"] : o[k];
    },
    ustaw: function (l) {
      if (l !== "pl" && l !== "en" || l === I.lang) return;
      I.lang = l;
      try { localStorage.setItem("jezyk", l); } catch (e) {}
      // Parametr ?lang= w adresie nie może nadpisać wyboru po przeładowaniu.
      if (zAdresu) try { history.replaceState(null, "", location.pathname + location.hash); zAdresu = null; } catch (e) {}
      statyczne();
      document.dispatchEvent(new CustomEvent("jezyk"));
    }
  };
  function statyczne() {
    document.documentElement.lang = I.lang;
    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (el.getAttribute("data-pl") == null) el.setAttribute("data-pl", el.textContent);
      el.textContent = el.getAttribute(I.lang === "en" ? "data-en" : "data-pl");
    });
    document.querySelectorAll("[data-en-aria]").forEach(function (el) {
      if (el.getAttribute("data-pl-aria") == null) el.setAttribute("data-pl-aria", el.getAttribute("aria-label") || "");
      el.setAttribute("aria-label", el.getAttribute(I.lang === "en" ? "data-en-aria" : "data-pl-aria"));
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === I.lang ? "true" : "false");
    });
  }
  I.statyczne = statyczne;
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-lang]");
    if (b) I.ustaw(b.getAttribute("data-lang"));
  });
  statyczne();
})();
