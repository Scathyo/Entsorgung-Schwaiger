/*
  kontakt.js
  Client-seitige Validierung des Kontaktformulars.
  Eigenständiges Modul, nur auf kontakt.html eingebunden.
  Hinweis: Es gibt aktuell keinen Server-Endpunkt – das Formular zeigt
  nur eine Erfolgsmeldung an. Für echten Versand später z. B. an einen
  Formular-Dienst (z. B. Formspree) oder ein eigenes Backend anbinden.
*/
(function () {
  "use strict";

  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var status = form.querySelector("[data-form-status]");

  function setError(fieldEl, hasError) {
    fieldEl.setAttribute("data-error", hasError ? "true" : "false");
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var valid = true;
    var fields = form.querySelectorAll("[data-field]");

    fields.forEach(function (fieldEl) {
      var input = fieldEl.querySelector("input, textarea, select");
      if (!input) return;

      var value = input.value.trim();
      var fieldValid = true;

      if (input.hasAttribute("required") && value === "") {
        fieldValid = false;
      }

      if (input.type === "email" && value !== "" && !isValidEmail(value)) {
        fieldValid = false;
      }

      setError(fieldEl, !fieldValid);
      if (!fieldValid) valid = false;
    });

    if (!status) return;

    if (valid) {
      status.textContent =
        "Danke für Ihre Nachricht! Wir melden uns in der Regel innerhalb eines Werktags zurück.";
      status.className = "form-status form-status--success";
      status.setAttribute("data-visible", "true");
      form.reset();
    } else {
      status.textContent =
        "Bitte prüfen Sie die rot markierten Felder und füllen Sie sie vollständig aus.";
      status.className = "form-status form-status--error";
      status.setAttribute("data-visible", "true");
    }
  });
})();
