"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Atmosphaere() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!bgRef.current) return;
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
        () => {
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
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="atmosphaere"
      ref={sectionRef}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink"
    >
      {/* Parallax wrapper — slightly oversized so translateY never exposes edges */}
      <div
        ref={bgRef}
        className="absolute"
        style={{ inset: "-20% 0", height: "140%" }}
      >
        {/* Ken Burns layer */}
        <div
          className="absolute inset-0 hero-ken-burns"
          style={{
            background:
              "linear-gradient(160deg, #0f1a2e 0%, #0a2040 40%, #1a2e10 80%, #0f1a2e 100%)",
          }}
        />
      </div>

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[720px] px-6 py-24 text-center md:px-12">
        <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.18em] text-surface/50">
          Atmosphäre
        </p>
        <h2
          className="font-display uppercase leading-none tracking-tight text-surface"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          Seit 1974
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-surface/65 md:text-lg">
          Warmes Licht, vertraute Gesichter, der Duft von Holzkohle und Oregano.
          Ein Platz, an dem Gäste zu Stammgästen und Stammgäste zu Freunden
          werden.
        </p>
        <a
          href="tel:+4952411234567"
          className="mt-8 inline-block rounded border border-surface/40 px-8 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-surface transition-colors hover:border-surface hover:bg-surface/10"
        >
          Tisch reservieren
        </a>
      </div>
    </section>
  );
}
