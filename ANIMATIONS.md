# Der Grieche – Animations & Scroll-Trigger

Dieses Dokument beschreibt alle Animations-Effekte der Seite —
Zweck, Wirkung, technisches Rezept.

## Toolchain

- **Framer Motion** (`framer-motion`) — für Komponenten-Entrances,
  Hover-States, einfache Viewport-Animationen.
- **GSAP + ScrollTrigger** (`gsap`, `@gsap/react`) — für komplexe,
  scroll-gekoppelte Effekte (Pinning, Text-Fill, Parallax-Choreografie).

## Globale Prinzipien

- **Easing:** `ease-out` für Entrances, `ease-in-out` für kontinuierliche
  Effekte, `power2.out` (GSAP-Äquivalent) für die meisten Scroll-Trigger.
- **Duration:** 400–600 ms für Entrance-Animationen, 200–300 ms für
  Micro-Interactions (Hover, Button-Press).
- **`prefers-reduced-motion` ist Pflicht.** Jede Animation wird über eine
  Media-Query deaktiviert, wenn der Nutzer Reduced Motion bevorzugt.
  Content ist dann sofort im finalen Zustand sichtbar.
- **Mobile Performance:** Komplexe Scroll-Effekte (Pinning, Dual Sliding
  Images) werden auf Mobile deaktiviert oder vereinfacht.

---

## Effekt 1 — Fade-in + Slide-up (Standard-Entrance)

**Wann:** Bei jedem Element, das beim Scrollen in den Viewport kommt
(Headlines, Textblöcke, Karten).

**Wirkung:** Element startet mit `opacity: 0` und `translateY(40px)`,
animiert zu `opacity: 1, translateY(0)` wenn es zu 20 % im Viewport ist.

**Dauer:** 600 ms. **Easing:** ease-out.

**Implementation:** Framer Motion `whileInView`.

```tsx
// Pseudocode
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  ...content...
</motion.div>
```

**Komponente:** `<FadeIn delay={0.1}>...</FadeIn>` — wiederverwendbarer
Client-Wrapper in `components/FadeIn.tsx`.

---

## Effekt 2 — Parallax auf Bildern

**Wann:** Auf großen Food-Bildern in Atmosphäre-Sektionen und im Hero.

**Wirkung:** Das Bild scrollt langsamer als der umgebende Content —
Eindruck von räumlicher Tiefe.

**Umsetzung:** GSAP ScrollTrigger mit `scrub: true`, `yPercent` wird
an den Scroll-Progress gekoppelt.

```tsx
// Pseudocode
gsap.to(bgRef.current, {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
```

**Mobile:** Deaktiviert (kein Performance-Nutzen, Ruckelrisiko).

---

## Effekt 3 — Dual Sliding Images (Willkommen-Section)

**Der Signatur-Effekt der Willkommen-Sektion.**

**Wann:** Ausschließlich in der Willkommen-Sektion der Startseite.

**Wirkung:** Zwei seitliche Bilder schieben sich beim Scrollen nach
außen. Das linke Bild bewegt sich nach links, das rechte nach rechts.
Der dazwischenliegende Text fadet sanft ein.

**Konkret (Desktop):**
- Linkes Bild: Start `translateX(0%)`, End `translateX(-12%)`
- Rechtes Bild: Start `translateX(0%)`, End `translateX(+12%)`
- Beide Bilder: Start `scale(1)`, End `scale(0.95)` (dezenter Shrink)
- Text-Block in der Mitte: Start `opacity: 0`, End `opacity: 1`

**Angeschnittene Bildkanten:**
- Linkes Bild: rechte Kante diagonal geclippt
  `clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%)`
- Rechtes Bild: linke Kante diagonal geclippt (gespiegelt)
  `clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%)`

**Scroll-Trigger-Setup:**
- Trigger: Die Willkommen-Section
- Start: `top bottom` (wenn Section von unten in den Viewport kommt)
- End: `bottom top` (wenn Section nach oben aus dem Viewport geht)
- `scrub: 1` (sanftes Nachziehen, nicht 1:1 an Scroll gekoppelt)

**Mobile:** Komplett deaktiviert.

---

## Effekt 4 — Text-Fill on Scroll (Plakat-Moment)

**Das visuelle Highlight der Seite.**

**Wann:** Ausschließlich in der Text-Fill-Statement-Sektion.

**Wirkung:** Die drei Zeilen `IMMER FRISCH. / IMMER LECKER. / IMMER
AUTHENTISCH.` sind zunächst nur als Outline-Text sichtbar. Beim Scrollen
durch die gepinnte Sektion enthüllen sich die Buchstaben von links nach
rechts mit Vollfarbe.

**Technisches Rezept:** Zwei Text-Layer übereinander:
1. Outline-Layer (immer sichtbar): `color: transparent`,
   `-webkit-text-stroke: 1.5px rgba(244,237,224,0.2)`
2. Fill-Layer: `clip-path: inset(0 100% 0 0)` → `inset(0 0% 0 0)`

GSAP-Timeline mit `pin: true` und `scrub: 1` steuert die drei Zeilen
zeitlich gestaffelt durch einen 250% langen Scroll-Range.

**Mobile:** Effekt bleibt aktiv, aber ohne Pinning.

---

## Effekt 5 — Pinning (Stabile Sektion beim Scrollen)

**Wann:** Text-Fill-Statement-Sektion.

**Wirkung:** Der Nutzer scrollt, aber der Viewport-Inhalt bleibt
stehen, bis alle drei Zeilen gefüllt sind.

**Implementation:** GSAP ScrollTrigger mit `pin: true`, `end: "+=250%"`.

**Mobile:** Pinning deaktiviert.

---

## Effekt 6 — Meander Draw-In

**Wann:** Beim ersten Eintritt eines Mäander-Borders (variant="draw")
in den Viewport.

**Wirkung:** Die Mäander-Linie zeichnet sich selbst von links nach rechts.

**Technisches Rezept:** IntersectionObserver fügt `meander-animated`-
Klasse hinzu. Die CSS-Animation (`@keyframes meander-draw`) läuft einmalig.

---

## Effekt 7 — Reviews-Carousel

**Autoplay alle 6 Sekunden, pausiert bei Hover/Interaction.**

**Dots-Indicator** zeigt die aktive Karte. Klick auf Dot springt zu
der entsprechenden Karte und pausiert Autoplay.

---

## Effekt 8 — Hover-States

**Buttons:**
- Hover: `scale(1.02)`, 200 ms ease-out
- Active: `scale(0.98)`, 100 ms

**Links:**
- Underline animiert beim Hover von links nach rechts.

---

## Effekt 9 — Ken-Burns auf Full-Bleed-Bildern

**Implementation:** CSS `@keyframes ken-burns` + `animation`, bereits
in `globals.css` implementiert als `.hero-ken-burns`.

---

## Zusammenfassung: Welcher Effekt wo?

| Sektion                   | Haupt-Effekt           | Zusatz                     |
| ------------------------- | ---------------------- | -------------------------- |
| Hero                      | Ken-Burns              | Fade-in Content (FM)       |
| Willkommen                | Dual Sliding Images    | Fade-in Text (GSAP)        |
| Qualitäts-Anspruch        | Fade-in + Slide-up     | —                          |
| Dreier-Bildreihe          | Staggered Fade-in      | Video-Autoplay             |
| Atmosphäre Full-Bleed     | Ken-Burns + Parallax   | Fade-in Text (FM)          |
| Reviews-Carousel          | Autoplay + Dots        | —                          |
| Text-Fill-Statement       | Text-Fill + Pinning    | (GSAP)                     |
| Signature-Card            | Fade-in + Slide-up     | —                          |
| /ueber-uns Timeline       | Alternating Fade-in    | —                          |
