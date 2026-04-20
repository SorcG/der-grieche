# Der Grieche – Sections & Struktur

Die Website ist eine Multi-Page-App, deren Startseite sich wie eine One-Page
anfühlt (Scroll-Story). Referenz-Vorbild: ilios-pb.de.

## Routen-Übersicht

- `/` — Startseite (komplette Scroll-Story)
- `/speisekarte` — Vollständige Speisekarte
- `/impressum` — Rechtlich Pflicht
- `/datenschutz` — Rechtlich Pflicht

## Startseite — Section-Dramaturgie

Die Startseite ist eine durchgängige Scroll-Komposition. Jede Sektion
hat **genau eine Aufgabe**. Keine Überfrachtung.

### 1. Hero

- Fullscreen (`h-screen` / 100 vh)
- Hintergrund: Videoloop **oder** cinematisches Food-Foto mit leichtem
  Ken-Burns-Effekt (Zoom + subtiler Pan)
- Overlay: Dunkles Gradient von oben (für Textlesbarkeit)
- Content:
  - Kleine Tagline oben: `Kattenstrother Grillhaus · seit 1974`
  - Haupt-Headline: `DER GRIECHE` (Anton, extra groß)
  - Subtext: Ein Satz Tavernen-Poesie
  - Primary CTA: `Tisch reservieren`
  - Secondary CTA: `Zur Speisekarte →`
- Unten: Mäander-Linie + dezenter Scroll-Indicator

### 2. Willkommen / Philosophie

- Hintergrund: Creme (`surface-warm`)
- Layout: Zwei Spalten auf Desktop, Stack auf Mobile
- Links: Großes Food-Foto (z. B. Gyros am Spieß)
- Rechts:
  - Kleine Überschrift: `Kalimera`
  - H2: `Griechisch wie bei Yiayia`
  - 2–3 Absätze über Familie, Tradition, Herkunft
  - Stilisierte Signature des (fiktiven) Inhabers

### 3. Signature Dishes

- Hintergrund: Weiß (`surface`)
- Layout: 4 Karten im Grid (1 auf Mobile, 2 auf Tablet, 4 auf Desktop)
- Die vier Klassiker:
  1. Gyros Pitta
  2. Souvlaki
  3. Bifteki
  4. Bauernsalat
- Jede Karte:
  - Großes quadratisches Food-Bild
  - Name (Anton, moderate Größe)
  - Kurzer Satz Beschreibung (DM Sans, 2 Zeilen)
  - Preis
  - Hover: Scale 1.02 + Olivengrün-Border

### 4. Qualitäts-Statement (Plakat-Moment)

- Hintergrund: Ägäis-Blau (`brand`)
- Text: Weiß
- **Effekt: Pinning.** Die Sektion "klebt" beim Scrollen, während die
  Wörter nacheinander eingeblendet werden.
- Text erscheint in großer Anton-Typo wortweise gestaffelt:
  - `IMMER`
  - `FRISCH.`
  - `IMMER`
  - `LECKER.`
  - `IMMER`
  - `AUTHENTISCH.`
- Optional: Kleines eingebettetes Video am Rand (Fleisch schneiden,
  Pitta backen) — stumm, autoplay, loop.

### 5. Atmosphäre

- Hintergrund: Weiß
- Bild-Galerie: 3–4 Innenraum- / Ambiente-Shots
- Kurzer Headline-Text: `Bei uns ist jeder Tisch familiär.`
- Parallax auf den Bildern beim Scrollen

### 6. Standort & Öffnungszeiten

- Hintergrund: Creme
- Layout: Zwei Spalten
- Links: Google-Maps-Embed oder stilisierte eigene Karte
- Rechts:
  - Adresse (fiktiv, Gütersloh)
  - Öffnungszeiten (klar formatiert)
  - Telefon (auf Mobile klickbar via `tel:`)
  - CTA: `Tisch reservieren`

### 7. Footer

- Hintergrund: Anthrazit (`ink`)
- Text: Creme
- Obere Border: Mäander-Ornament (statisch)
- Content:
  - Logo invertiert / in Weiß
  - Navigation
  - Social-Links (Instagram, Facebook)
  - Rechtliches (Impressum, Datenschutz)
  - Copyright

## /speisekarte

- Kleiner Hero (30 vh): Headline `Speisekarte`, Mäander-Border
- Sticky Anker-Navigation oben mit Kategorien:
  - Vorspeisen (Meze)
  - Vom Grill (Gyros, Souvlaki, Bifteki, Lamm, Hähnchen)
  - Beilagen & Salate
  - Desserts
  - Getränke
- Pro Kategorie:
  - Kategorie-Titel (Anton)
  - Liste der Gerichte mit: Name, Beschreibung (1–2 Zeilen), Preis
  - Icons: `V` für vegetarisch, Chili-Symbol für scharf

## /impressum und /datenschutz

Standard-Rechtstexte. Minimaler Design-Footprint, aber im Design-System
(Typo, Farben, Spacing). Keine Animations-Effekte, keine Food-Bilder.
