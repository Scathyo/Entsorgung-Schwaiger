/*
  nav.js
  Steuert ausschließlich das mobile Hamburger-Menü.
  Eigenständiges Modul, hängt von keiner anderen JS-Datei ab.
  Wird auf jeder Seite eingebunden (defer).
*/
(function () {
  "use strict";

  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");

  if (!nav || !toggle) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  // Menü schließen, wenn ein Link angeklickt wird (mobile)
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();
