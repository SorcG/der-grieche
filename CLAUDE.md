@AGENTS.md

# Der Grieche – Kattenstrother Grillhaus

Showcase-Website für das fiktive griechische Restaurant "Der Grieche".
Dient als Referenzprojekt für **Klarteq** (Freelance Webentwicklung, OWL).

## Kontext-Dokumente (Pflichtlektüre für jede Aufgabe)

- @DESIGN-SYSTEM.md — Farben, Typografie, Spacing, Mäander-Ornament, Bildsprache
- @SECTIONS.md — Routen, Seitenstruktur, Content pro Section
- @ANIMATIONS.md — Scroll-Trigger, Animations-Effekte, Toolchain (Framer Motion + GSAP)

## Deployment & Arbeitsweise

- **Deployment:** Vercel, erreichbar unter `der-grieche.klarteq.de`
- **Branch:** `main` (direkte Commits sind okay)
- **Code-Qualität:** TypeScript strict, Tailwind v4 CSS-first-Config,
  Next.js 16 Konventionen (siehe AGENTS.md)

## Design-Referenz

Look & Feel orientiert sich an **ilios-pb.de** (Paderborner Grieche):
cinematische Food-Fotografie, Scroll-Trigger (Text-Fill, Dual Sliding
Images), griechisch anmutende Display-Typo, Mäander-Bänder als
Section-Trenner.

Farblich eigenständig: Ägäis-Blau + Creme + Olivengrün statt Ilios' Gold/Schwarz.

## Wichtige Einschränkungen

- **Display-Font Ancient Geek** hat keine Umlaute. Display-Headlines
  werden bewusst umlautfrei formuliert (siehe DESIGN-SYSTEM.md →
  Umlaut-Strategie).
- **Mobile Performance:** Komplexe Scroll-Effekte werden auf Mobile
  deaktiviert oder vereinfacht (siehe ANIMATIONS.md).
