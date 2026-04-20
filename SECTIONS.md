# Der Grieche – Sections & Struktur

Die Website ist eine Multi-Page-App, deren Startseite sich wie eine One-Page
anfühlt (Scroll-Story). Referenz-Vorbild: ilios-pb.de.

## Routen-Übersicht

- `/` — Startseite (komplette Scroll-Story)
- `/speisekarte` — Vollständige Speisekarte
- `/ueber-uns` — Geschichte & Timeline
- `/impressum` — Rechtlich Pflicht
- `/datenschutz` — Rechtlich Pflicht

## Globale Elemente

### Sticky Top-Navigation

Fixiert am oberen Rand, voll sichtbar beim Scrollen.

- Hintergrund: Ägäis-Blau (`brand`) — immer, keine Scroll-Animation
- Höhe: 64 px (Desktop), 56 px (Mobile)
- Logo links: "Der Grieche" als Bebas Neue ALL CAPS
- Links: Speisekarte, Über uns, Atmosphäre (Anker `#atmosphaere`),
  Kontakt (Anker `#kontakt`)
- CTA rechts: "Reservieren" (Olivengrün-Button, `tel:`-Link)
- Mobile: Hamburger-Menü, gleiches Brand-Blau, Slide-Down-Panel

### Footer

Siehe Abschnitt "Footer" unten.

## Startseite — Section-Dramaturgie

Die Startseite besteht aus Content-Sektionen, getrennt durch Mäander-Bänder
(`<Meander variant="band" />`). Jede Sektion hat **genau eine Aufgabe**.

### 1. Hero

- Fullscreen (`h-screen` / 100 vh)
- Hintergrund: `bg-ink`, cinematisches Food-Foto / Videoloop mit
  Ken-Burns-Effekt (`.hero-ken-burns` auf dem Medien-Element)
- Overlay: Dunkles Gradient (`from-ink/30 via-transparent to-ink/70`)
- Content (zentriert, `relative z-10`):
  - Tagline: `Kattenstrother Grillhaus · Seit 1974` (DM Sans, uppercase, spacing)
  - Headline: `DER GRIECHE` (Bebas Neue, `clamp(4rem, 12vw, 9rem)`)
  - Subtext: *„Wo Herz und Herd seit Jahrzehnten verschmelzen."*
  - Primary CTA: `Tisch reservieren` → `tel:`
  - Secondary CTA: `Zur Speisekarte →` → `/speisekarte`
- Unten (absolute): Mäander-Border + Scroll-Indicator (Mouse-SVG mit Bounce)
- Nav-Abstand: `pt-16` auf dem Content-Container

### Mäander-Band: surface

Weißes Ornament-Band als visueller Atemzug nach dem dunklen Hero.

### 2. Willkommen — Dual Sliding Images

Effektvoller Einstieg mit zwei übereinander geschnittenen Food-Fotos.

- Background: `bg-surface-warm` (Creme)
- Desktop-Layout (`md:`): 3-Spalten-Grid `grid-cols-[2fr_380px_2fr]`,
  volle Abschnittshöhe (`min-h-[70vh]`)
  - Linkes Bild: `clip-path: polygon(0 0, 100% 0, calc(100% - 80px) 100%, 0 100%)`
    → diagonaler rechter Rand
  - Mittlere Spalte: Text (vertikal zentriert, `px-8 py-16`)
    - Label: `Kalimera` (DM Sans, brand)
    - H2: `GRIECHISCH WIE BEI YIAYIA` (Bebas Neue)
    - 2 Absätze über Familie, Tradition, Herkunft
    - Signature: „Familie Papadopoulos"
  - Rechtes Bild: `clip-path: polygon(80px 0, 100% 0, 100% 100%, 0 100%)`
    → diagonaler linker Rand
- Mobile: gestapelt (oberes Bild, Text, optional unteres Bild)

### Mäander-Band: warm

Creme-Band als sanfter Übergang zum nächsten Abschnitt.

### 3. Qualitäts-Anspruch

Ruhige Aussage-Sektion, kein Lärm.

- Background: `bg-surface-warm`
- Layout: zentriert, max-w-[720px]
- Inline-SVG: stilisierter Gyros-Spieß (Liniengrafik, `text-brand`, 40% Deckkraft)
- Label: `Unser Versprechen` (DM Sans, uppercase)
- H2: `HANDGEMACHT SEIT 1974` (Bebas Neue, `clamp(2.5rem, 6vw, 4.5rem)`)
- Körpertext: ein Satz über Frische / keine Fertigprodukte
- CTA: `Unsere Geschichte →` → `/ueber-uns` (Olivengrün-Button)

### 4. Dreier-Bildreihe

Atmosphärisch dichter Bilderblock.

- Background: `bg-ink`
- Layout: 3-Spalten-Grid (`grid grid-cols-1 md:grid-cols-3`)
- Jede Zelle: quadratisches Seitenverhältnis (`aspect-square`), Bild-Placeholder
- Mittlere Zelle: `<video autoPlay muted loop playsInline>` (Küchen-Clip)
- Keine Beschriftungen, kein Padding — volle Kante-zu-Kante

### 5. Atmosphäre

Cinematischer Full-Bleed-Moment.

- `id="atmosphaere"`
- Background: `bg-ink`, full-bleed Hintergrundbild mit `.hero-ken-burns`
- Gradient-Overlay: `from-ink/40 via-ink/20 to-ink/70`
- Mindesthöhe: `min-h-[80vh]`
- Content (zentriert):
  - Label: `Atmosphäre` (DM Sans)
  - H2: `SEIT 1974` (Bebas Neue, `clamp(3rem, 8vw, 6rem)`)
  - Prosa: Ein Satz über Gemeinschaft und Stimmung
  - CTA: `Tisch reservieren` → `tel:` (Ghost-Button, `border-surface/40`)

### Mäander-Band: brand

Ägäis-Blau-Band als energetischer Kontrast vor den hellen Bewertungen.

### 6. Bewertungs-Karussell (Reviews Carousel)

Social Proof, dezent eingebettet.

- Background: `bg-surface` (Weiß)
- Desktop-Layout: 2-Spalten `grid-cols-[320px_1fr]`
  - Links: sticky Überschrift (`md:sticky md:top-32`)
    - Label: `Was unsere Gäste sagen`
    - H2: `GOOGLE BEWERTUNGEN` (Bebas Neue)
    - Durchschnittssterne + Anzahl
  - Rechts: horizontales Scroll-Karussell
    - `overflow-x-auto snap-x snap-mandatory`
    - 5 Review-Cards (Name, Datum, Sterne, Zitat)
    - Kartenbreite: `w-72 md:w-80`, `flex-shrink-0`, `snap-start`
- Mobile: volle Breite, horizontales Wischen

### 7. Text-Fill-Statement

Der stärkste typografische Moment der Seite.

- Background: `bg-ink`
- Mindesthöhe: `min-h-screen`, Inhalt vertikal zentriert
- Text (Bebas Neue, `clamp(3rem, 10vw, 8rem)`, line-height 1):
  1. `IMMER FRISCH.`
  2. `IMMER LECKER.`
  3. `IMMER AUTHENTISCH.`
- Dual-Layer-Technik:
  - Outline-Ebene (immer sichtbar): `color: transparent`,
    `WebkitTextStroke: 1.5px rgba(244,237,224,0.25)`
  - Fill-Ebene (enthüllt per Scroll):
    `clip-path: inset(0 X% 0 0)`, animiert via `transition-[clip-path] duration-700`
  - Trigger: IntersectionObserver, gestaffelt (`transitionDelay` 0 / 150 / 300 ms)

### 8. Signature Card

Abschluss der Scroll-Story, Einladung zur weiteren Erkundung.

- Background: `bg-ink`
- max-w-[960px], zentriert
- Desktop-Layout: 3-Spalten `grid-cols-[80px_1fr_280px]`
  - Spalte 1: Griechische Säule als SVG-Liniengrafik (dekorativ, `opacity-30`)
  - Spalte 2:
    - Label: `Unsere Geschichte`
    - H2: `50 JAHRE TRADITION` (Bebas Neue)
    - Kurztext
    - CTA-Paar: `Unsere Geschichte` → `/ueber-uns` | `Reservieren` → `tel:`
  - Spalte 3: Polaroid-Foto (weißer Rahmen, leichte Rotation, `shadow-lg`)
    - Unterschrift: „Nikos, Sommer 1974"

### Mäander-Band: ink

Dunkles Abschluss-Band, das nahtlos in den Footer übergeht.

## Footer

- `id="kontakt"`
- Background: `bg-ink`, Text: `text-surface-warm`
- Obere Border: `<Meander variant="border" background="ink" className="opacity-20" />`
- 4-Spalten-Grid (`md:grid-cols-4`):
  1. **Marke + Nav + Social:** Logo, 4 Nav-Links, Instagram / Facebook
  2. **Standort 1:** Adresse (Gütersloh), Öffnungszeiten, `tel:`-Link
  3. **Standort 2 (Placeholder):** „Demnächst: Bielefeld" + Rechtliches
  4. **Karte:** Map-Embed-Placeholder (quadratisch, `aspect-square`)
- Unten: Copyright | Preishinweis (MwSt.)

## /speisekarte

- Mini-Hero (30 vh): `bg-ink`, Headline `SPEISEKARTE`, Mäander-Border
- Sticky-Kategorie-Navigation (`top-[64px] md:top-[64px]`)
  mit angepasster `top`-Offset für die blaue Nav
- 8 Kategorien, jede mit SVG-Lineart-Icon:
  1. `gyros` — Gyros (Teller-Icon)
  2. `gyros-pita` — Gyros Pita (Wrap-Icon)
  3. `spezialitaeten` — Spezialitäten (Flammen-Icon)
  4. `bauern-pita` — Bauern-Pita (Haus/Brot-Icon)
  5. `fuer-kinder` — Für Kinder (Stern-Icon)
  6. `warme-speisen` — Warme Speisen (Dampf-/Topf-Icon)
  7. `beilagen-salate` — Beilagen & Salate (Blatt-Icon)
  8. `kalte-speisen-desserts` — Kalte Speisen & Desserts (Eiskristall-Icon)
- Pro Kategorie: Titel (Bebas Neue), Mäander-Border, Item-Liste (Name,
  Beschreibung, Preis, V-Badge, Chili-Emoji)
- Footer-CTA: Telefon-Link

## /ueber-uns

- Mini-Hero (30 vh): `bg-ink`, Headline `UNSERE GESCHICHTE`, Mäander-Border
- Vertikale Timeline (3 Stationen, abwechselnd links/rechts auf Desktop):
  1. `SOMMER 1974` — Gründungsgeschichte
  2. `DER DURCHBRUCH` — Wachstum & Stammgäste (~1985)
  3. `TRADITION LEBEN` — Übergabe an die zweite Generation (heute)
- Signature Card (eingebettet, gleiche Komponente wie Startseite)
- Footer

## /impressum und /datenschutz

Standard-Rechtstexte. Minimaler Design-Footprint, aber im Design-System
(Typo, Farben, Spacing). Keine Animations-Effekte, keine Food-Bilder.
