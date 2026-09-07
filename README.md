# Schwaiger Entsorgung – Website

Reines HTML/CSS/JS, kein Build-Tool, keine externen Abhängigkeiten (keine Frameworks, keine CDN-Links). Modular aufgebaut: jede Datei hat einen klar abgegrenzten Zweck, Seiten laden nur die CSS-/JS-Module, die sie wirklich brauchen.

## Struktur

```
index.html               Startseite (Diagonal-Hero + Quick-Link-Kacheln)
leistungen.html           Leistungsübersicht
ueber-uns.html             Über das Unternehmen
jobangebote.html            Offene Stellen (Platzhalter)
gruengutannahme.html        Grüngutannahme (Platzhalter)
loisachtaler-erden.html     Produktseite Loisachtaler Erden (Platzhalter)
kontakt.html               Kontaktformular
impressum.html             Impressum (Platzhalter – rechtlich prüfen!)
datenschutz.html            Datenschutzerklärung (Platzhalter – rechtlich prüfen!)

css/
  base.css            Variablen, Reset, Typografie – auf jeder Seite
  layout.css          App-Shell, linke Sidebar-Navigation, Footer – auf jeder Seite
  components.css      Buttons, Cards, Formulare, Badges – auf jeder Seite
  pages/
    home.css          Nur auf index.html (Hero, Quick-Links, Prozess-Schritte, CTA)
    leistungen.css    Nur auf leistungen.html
    kontakt.css        Nur auf kontakt.html

js/
  nav.js              Mobiles Menü (Sidebar → Overlay) – auf jeder Seite, kennt kein anderes Modul
  kontakt.js          Formularvalidierung – nur auf kontakt.html
```

## Navigation

Die Website nutzt eine linke, schmale Icon-Sidebar (statt einer oberen Navbar) mit sieben Einträgen: Start, Über uns, Leistungen, Jobangebote, Grüngutannahme, Loisachtaler Erden, Kontakt. Auf Hover/Fokus zeigt jedes Icon ein Tooltip mit Beschriftung. Unter 900px Breite klappt die Sidebar zu einer oberen Leiste mit Hamburger-Menü zusammen (gleiche `data-nav`/`data-nav-toggle`-Logik wie zuvor, `js/nav.js` musste dafür nicht verändert werden).

Die Startseite hat zusätzlich sechs Quick-Link-Kacheln direkt unter dem Hero (Reihenfolge: Über uns, Leistungen, Jobangebote, Grüngutannahme, Loisachtaler Erden, Kontakt) für schnellen Zugriff auf alle Hauptseiten.

## Prinzip

- Jede Seite bindet nur die CSS-Dateien ein, die sie tatsächlich benutzt (base + layout + components sind gemeinsame Basis, `pages/*.css` ist pro Seite optional).
- Die JS-Dateien sind komplett unabhängig voneinander (IIFEs, keine gemeinsamen globalen Variablen) und prüfen selbst, ob ihre Ziel-Elemente auf der Seite vorhanden sind – so kann jede Datei auf jeder Seite eingebunden werden, ohne Fehler zu verursachen.
- Keine externen Schriften/Icons/Bibliotheken – alle Icons und die Fuhrpark-Illustration im Hero sind Inline-SVG, die Schrift ist die System-Schriftart. Dadurch lädt die Seite auch offline vollständig.

## Noch zu erledigen (Platzhalter ersetzen)

- Echter Firmenname/Rechtsform, Adresse, Telefonnummer, E-Mail (aktuell überall "Musterstadt"-Platzhalter)
- Inhalte für Jobangebote (konkrete Stellen), Grüngutannahme (Öffnungszeiten/Preise) und Loisachtaler Erden (Produktbeschreibung, Gebinde) ergänzen – aktuell mit `[Platzhalter]` markiert
- Impressum & Datenschutz rechtlich prüfen lassen
- Kontaktformular sendet aktuell noch nirgendwohin (nur clientseitige Validierung) – für echten Versand z. B. an einen Formular-Dienst (Formspree, Web3Forms) oder ein eigenes Backend anbinden
- Optional: echte Fotos/Google-Maps-Karte ergänzen
