# Webanwendung für die Suche nach Basketballspielen

# TypeScript und MVC Design Pattern

(Dieses Repository ist Teil meines Portfolios und wurde erstellt, um meine technischen Fähigkeiten zu demonstrieren. Es ist nicht für eine Open-Source-Zusammenarbeit vorgesehen.)

Benutzer und Benutzerinnen können nach Teams suchen, Spiele zwischen zwei Teams vergleichen und Ergebnisse filtern oder sortieren.

Das Projekt demonstriert eine strukturierte Frontend-Architektur mit **TypeScript** und dem **MVC-Designpattern (Model–View–Controller)**.

---

# Funktionen

- Suche nach Basketballteams
- Vergleich zweier Teams (Team vs Team)
- Filtern nach **Heimspielen** oder **Auswärtsspielen**
- Sortieren nach **neueste** oder **älteste** Spiele
- Anzeige zusätzlicher Informationen wie **Datum** und **Wettbewerb**
- Umschalten zwischen **Männer- und Frauenligen**
- Automatische Hervorhebung des **Siegerteams**
- Automatisches **Light/Dark Theme Switching**

---

# Architektur

Die Anwendung folgt dem **MVC-Architekturmuster (Model–View–Controller)**.

Dieses Muster unterteilt die Anwendung in drei Hauptkomponenten:

### Model

Verantwortlich für die Verwaltung der **Daten und des Anwendungszustands (State)**.

### View

Zuständig für das **Rendern der Benutzeroberfläche** im Browser.

### Controller

Verarbeitet **Benutzerinteraktionen** und verbindet **View** mit dem **Model**.

Diese Struktur verbessert:

- Wartbarkeit (maintainability)
- Skalierbarkeit (scalability)
- Lesbarkeit des Codes
