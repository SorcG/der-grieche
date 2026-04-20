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
- **Referenz-Vorbild (Look & Feel):** ilios-pb.de (Paderborn)

## Farbpalette

| Name          | Hex       | Rolle                              |
| ------------- | --------- | ---------------------------------- |
| Ägäis-Blau    | `#0960D0` | Primärfarbe, Brand, Akzent-Flächen |
| Reines Weiß   | `#FCFEFD` | Hauptflächen, Hintergründe         |
| Creme         | `#F4EDE0` | Ruhige Sektionen, Sekundär-BG      |
| Olivengrün    | `#6B7C48` | CTA-Buttons, Ornamente, Akzente    |
| Anthrazit     | `#0F1A2E` | Body-Text, dunkle Flächen          |

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

- **Display (Headlines, Statements):** Anton – schmal, bold, ALL CAPS
- **Body (Fließtext, UI):** DM Sans – klar, moderne Grotesk

Einbindung via `next/font/google` in `app/layout.tsx`.

### Größen-Skala

| Zweck           | Desktop       | Mobile        | line-height |
| --------------- | ------------- | ------------- | ----------- |
| Hero-Display    | 96–128 px     | 56–72 px      | 0.9         |
| H2 (Section)    | 48–64 px      | 36–44 px      | 1.0         |
| H3 (Sub)        | 24–32 px      | 22–28 px      | 1.2         |
| Body            | 16–18 px      | 15–16 px      | 1.65        |
| Small / Caption | 13–14 px      | 12–13 px      | 1.4         |

### Letter-Spacing

- Display Headlines: `-0.005em` bis `-0.01em` (leicht dicht)
- Uppercase-Labels / Buttons: `0.08em` bis `0.18em` (gespreizt)
- Body: normal (0)

### Einsatz-Regeln

- "Der Grieche" (Brand-Name) immer als Anton ALL CAPS
- H2-Headlines als Anton ALL CAPS
- Section-Labels (kleine Caps oberhalb der H2) als DM Sans Uppercase + Spacing
- Body als DM Sans, regular (400) oder medium (500)

## Signature-Ornament: Mäander (Greek Key)

Das Mäander-Motiv aus dem Logo ist das visuelle Signature-Element der Seite.

**Einsatz:**

- Als animierter Section-Trenner (SVG-Draw-In via `stroke-dasharray`)
- Als Border-Detail bei Hero/Footer
- Optional als Loader-Animation

**Implementation:** Wiederverwendbare React-Komponente `<Meander />`
(Props: `width`, `color`, `animated`). Saubere SVG-Pattern, nicht aus
dem Logo gerippt.

## Spacing & Layout

- **Section-Padding vertikal:** 96–128 px (Desktop), 64–80 px (Mobile)
- **Container max-width:** 1280 px (xl)
- **Inner-Gutter:** 24 px (Mobile), 48 px (Desktop)
- **Grid-Gap Standard:** 24–32 px

## Border-Radius

Klassisch und zurückhaltend, keine modernen "Pill"-Formen:

- Buttons: `4px`
- Cards: `8px`
- Media-Container: `4–8px`

## Shadows

Grundsätzlich **keine** Drop-Shadows. Tiefe wird über Kontrast, Farbflächen
und Typografie-Hierarchie erzeugt. Ausnahmen müssen begründet und minimal sein.

## Animation-Prinzipien

- **Libraries (werden in späterem Schritt installiert):**
  Framer Motion (für Komponenten-Entrances), GSAP + ScrollTrigger
  (für Pinning & Parallax).
- **Easing:** `ease-out` für Entrance, `ease-in-out` für kontinuierliche Effekte
- **Duration:** 400–600 ms für Entrances, 200–300 ms für Micro-Interactions
- **`prefers-reduced-motion` immer respektieren** (Animationen deaktivieren,
  Content sofort sichtbar)

### Eingesetzte Effekte

1. **Fade-in + Slide-up** (y: 40 px) bei Section-Entry
2. **Parallax** auf großen Food-Bildern (Bild bewegt sich langsamer als Text)
3. **Pinning** auf der Qualitäts-Statement-Sektion (Block bleibt kurz fix,
   Wörter fahren nacheinander ein)
4. **Mäander-Draw-In** als Section-Trenner (SVG-Linie zeichnet sich beim Scroll)
5. **Hover auf Dish-Cards:** Scale 1.02 + dezenter Olivengrün-Border

## Bildsprache

- **Stil:** Cinematisch, warm beleuchtet, flache Schärfentiefe
- **Quellen:** AI-generierte Bilder (Seedance / RunwayML / Kling) +
  kuratierte Unsplash/Pexels
- **Format:** WebP, ausgeliefert via `next/image`
- **Aspect Ratios:**
  - Hero: 16:9 (Desktop), 3:4 (Mobile)
  - Dish-Cards: 4:5 oder 1:1
  - Atmosphäre: 3:2

## Responsiveness

Mobile-first. Breakpoints per Tailwind v4 Standard:

- `sm`: 640 px
- `md`: 768 px
- `lg`: 1024 px
- `xl`: 1280 px
- `2xl`: 1536 px

Single-Column auf Mobile, Two-Column ab `md`, komplexere Grids ab `lg`.
