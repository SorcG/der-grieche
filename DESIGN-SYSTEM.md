# Der Grieche – Design System

Dieses Dokument ist die Source of Truth für alle Design-Entscheidungen.
Jede neue Komponente, jede Farbe, jede Animation richtet sich nach diesen
Regeln. Abweichungen nur nach expliziter Freigabe.

## Brand

- **Name:** Der Grieche – Kattenstrother Grillhaus
- **Standort:** Gütersloh (fiktiv)
- **Gegründet:** 1974 (fiktiv)
- **Charakter:** Klassisch-traditionelle Taverne, modern präsentiert.
  Familiär, warm, authentisch, einladend.
- **Design-Referenz (Look & Feel):** ilios-pb.de (Paderborn)

## Farbpalette

| Name          | Hex       | Rolle                              |
| ------------- | --------- | ---------------------------------- |
| Ägäis-Blau    | `#0960D0` | Primärfarbe, Brand, Akzent-Flächen |
| Reines Weiß   | `#FCFEFD` | Hauptflächen, Hintergründe         |
| Creme         | `#F4EDE0` | Mäander-Bänder, ruhige Sektionen   |
| Olivengrün    | `#6B7C48` | CTA-Buttons, Ornamente, Akzente    |
| Anthrazit     | `#0F1A2E` | Body-Text, dunkle Flächen, Footer  |

### CSS-Custom-Properties (Ziel für `globals.css`)

```css
--color-brand: #0960D0;
--color-surface: #FCFEFD;
--color-surface-warm: #F4EDE0;
--color-accent: #6B7C48;
--color-ink: #0F1A2E;
```

Diese werden über den `@theme`-Block von Tailwind v4 als Utilities exponiert
(z. B. `bg-brand`, `text-ink`, `bg-surface-warm`).

## Typografie

Drei Schriften, jede mit klarer Aufgabe.

### 1. Ancient Geek (Primärer Display-Font)

- **Zweck:** Alle großen Headlines, Brand-Name, Section-Titel
- **Quelle:** Matthew Welch (squaregear.net) — 1001fonts.com
- **Lizenz:** Frei für kommerzielle und private Nutzung
- **Einbindung:** Lokal via `next/font/local` (Datei in `app/fonts/` —
  wird in Schritt 2 hinzugefügt)
- **Charakter:** Lateinische Buchstaben mit griechisch anmutenden Formen
  (Δ-ähnliches A, Σ-ähnliches E, etc.). Gibt der Seite sofort das
  "griechische Gefühl".
- **Einschränkung:** Nur Basic Latin. Keine Umlaute (ä, ö, ü), kein ß.

### 2. Bebas Neue (Display-Fallback für Umlaute)

- **Zweck:** Automatischer Fallback, wenn Ancient Geek ein Zeichen nicht
  abdeckt (v. a. deutsche Umlaute)
- **Quelle:** Google Fonts
- **Einbindung:** Via `next/font/google`
- **Charakter:** Schmale, kantige Grotesk in Großbuchstaben — optisch
  verwandt mit Ancient Geek, fällt im Mischtext nicht zu sehr aus dem Rahmen

### 3. DM Sans (Body-Font)

- **Zweck:** Alles außer Display — Fließtext, UI, Buttons, Labels
- **Quelle:** Google Fonts
- **Einbindung:** Via `next/font/google`
- **Gewichte:** 400 (regular), 500 (medium), 700 (bold)

### Umlaut-Strategie

Ancient Geek hat keine Umlaute. Unsere Strategie ist **zweistufig**:

**Stufe 1 — Content-Vermeidung (Primär):**
Display-Headlines so formulieren, dass keine Umlaute vorkommen. Das ist
meistens ohne Informationsverlust möglich und führt oft zu kürzeren,
plakativeren Texten.

Beispiele für gute Umformulierungen:

| Vermeidung nötig      | Umgeschrieben                      |
| --------------------- | ---------------------------------- |
| QUALITÄT AN 1. STELLE | HANDGEMACHT SEIT 1974              |
| SEIT ÜBER 50 JAHREN   | 50 JAHRE TRADITION                 |
| GRIECHISCH WIE FRÜHER | GRIECHISCH SEIT 1974               |
| UNSERE SPEZIALITÄTEN  | UNSERE KLASSIKER                   |

Gute umlautfreie Display-Phrasen:
IMMER FRISCH · IMMER LECKER · IMMER AUTHENTISCH · DER GRIECHE ·
KATTENSTROTHER GRILLHAUS · SEIT 1974 · HANDGEMACHT · TRADITION ·
FAMILIE · WILLKOMMEN BEI · ZUR SPEISEKARTE · JETZT RESERVIEREN

**Stufe 2 — Font-Fallback (Sicherheitsnetz):**
Wo Umlaute trotzdem im Display-Text stehen, springt Bebas Neue
automatisch ein. Das wird im `globals.css` über `font-family`-Stack
konfiguriert: `font-family: "Ancient Geek", "Bebas Neue", sans-serif;`

### Größen-Skala

| Zweck                  | Desktop       | Mobile        | line-height |
| ---------------------- | ------------- | ------------- | ----------- |
| Hero-Display           | 96–128 px     | 56–72 px      | 0.9         |
| H2 (Section-Headline)  | 48–64 px      | 36–44 px      | 1.0         |
| H3 (Sub-Headline)      | 24–32 px      | 22–28 px      | 1.2         |
| Body                   | 16–18 px      | 15–16 px      | 1.65        |
| Small / Caption        | 13–14 px      | 12–13 px      | 1.4         |

### Letter-Spacing

- Ancient Geek Display: `0` bis `0.02em` (nicht zu eng setzen — die
  unregelmäßigen Buchstabenformen brauchen Luft)
- Bebas Neue Fallback: `0.05em` bis `0.1em`
- DM Sans Uppercase-Labels: `0.08em` bis `0.15em`
- DM Sans Body: normal (0)

### Einsatz-Regeln

- Ancient Geek primär in **Großbuchstaben** — wie bei Ilios. Kleinbuchstaben
  sind technisch verfügbar, aber sparsam einsetzen.
- Der Brand-Name "DER GRIECHE" steht immer in Ancient Geek, ALL CAPS.
- Section-Labels (kleine Überschriften über einer H2) nutzen DM Sans
  Uppercase, nicht Ancient Geek.
- Body-Text ist immer DM Sans, regular (400) oder medium (500).
- Niemals Body-Text in Ancient Geek — zu schwer lesbar.

## Signature-Ornament: Mäander (Greek Key)

Das Mäander-Motiv aus dem Logo ist das zentrale visuelle Signature-Element
der Seite.

### Einsatz-Varianten

**1. Mäander-Band (Section-Trenner)** — *Hauptverwendung*

Volle Viewport-Breite, ca. 40–60 px hoch, deutlich sichtbares Muster.
Trennt die Haupt-Sektionen der Seite. Vorbild: die gelben Bänder bei Ilios.

Farbvarianten:
- **Auf Blau-BG:** Creme-farbenes Muster (`#F4EDE0`) auf Ägäis-Blau
- **Auf Weiß-BG:** Blaues Muster (`#0960D0`) auf Weiß
- **Auf Anthrazit-BG:** Creme-farbenes Muster auf Anthrazit

**2. Mäander als Border-Detail**

Dünner (8–16 px hoch), dezent, z. B. unterhalb des Hero-Bereichs oder im
Footer als obere Kante.

**3. Animierter Mäander (Draw-In)**

Beim ersten Scrollen in den Viewport zeichnet sich die Mäander-Linie selbst —
Animation über SVG `stroke-dasharray` + `stroke-dashoffset`. Nur für
besondere Momente (Hero → erste Section), nicht an jeder Sektion.

### Implementation

Wiederverwendbare React-Komponente `<Meander />` mit Props:
- `variant`: `"band"` | `"border"` | `"draw"`
- `background`: `"brand"` | `"surface"` | `"warm"` | `"ink"`
- `height?: number` (default: 48 für band, 26 für border/draw)

Die Komponente rendert ein SVG mit einem sauberen `<pattern>`-Element.
Kein Rippen aus dem Logo.

## Spacing & Layout

- **Section-Padding vertikal:** 96–128 px (Desktop), 64–80 px (Mobile)
- **Mäander-Band-Höhe:** 48 px (Desktop), 32 px (Mobile)
- **Container max-width:** 1280 px (xl)
- **Inner-Gutter:** 24 px (Mobile), 48 px (Desktop)
- **Grid-Gap Standard:** 24–32 px

## Border-Radius

Klassisch und zurückhaltend, keine modernen Pill-Formen:

- Buttons: `4px`
- Cards: `8px`
- Media-Container: `4–8px`

## Shadows

Grundsätzlich **keine** Drop-Shadows. Tiefe kommt über Kontrast,
Farbflächen, Mäander-Bänder und Typografie-Hierarchie. Ausnahmen müssen
begründet und minimal sein.

## Bildsprache

- **Stil:** Cinematisch, warm beleuchtet, flache Schärfentiefe
- **Quellen:** AI-generierte Bilder (RunwayML / Seedance / Kling) +
  kuratierte Unsplash/Pexels
- **Format:** WebP, ausgeliefert via `next/image`
- **Aspect Ratios:**
  - Hero: 16:9 (Desktop), 3:4 (Mobile)
  - Dish-Cards & Split-Layout-Bilder: 4:5 oder 1:1
  - Atmosphäre Full-Bleed: 21:9 oder breiter
- **Abgeschrägte Bildränder** (für Willkommen-Section): Die inneren Kanten
  der zwei Bilder sind diagonal geclippt (parallelogrammartig) via
  CSS `clip-path: polygon(...)`. Detail in `ANIMATIONS.md`.

## Responsiveness

Mobile-first. Breakpoints per Tailwind v4 Standard:

- `sm`: 640 px
- `md`: 768 px
- `lg`: 1024 px
- `xl`: 1280 px
- `2xl`: 1536 px

Single-Column auf Mobile, Two-Column ab `md`, komplexere Grids ab `lg`.

## Referenzen

- Section-Struktur und Content pro Seite → `SECTIONS.md`
- Animations-Details und Scroll-Trigger-Recipes → `ANIMATIONS.md`
