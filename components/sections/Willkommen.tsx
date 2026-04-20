"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Willkommen() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!leftRef.current || !rightRef.current || !textRef.current) return;
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
        () => {
          const trigger = {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          };

          // Hide text initially; GSAP reveals it on scroll
          gsap.set(textRef.current, { opacity: 0 });

          gsap.fromTo(leftRef.current, { x: "0%" }, { x: "-12%", ease: "none", scrollTrigger: trigger });
          gsap.fromTo(rightRef.current, { x: "0%" }, { x: "12%", ease: "none", scrollTrigger: trigger });
          gsap.fromTo(
            [leftRef.current, rightRef.current],
            { scale: 1 },
            { scale: 0.95, ease: "none", scrollTrigger: trigger },
          );
          gsap.to(textRef.current, {
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "top 15%",
              scrub: false,
            },
          });
        },
      );

      mm.add("(prefers-reduced-motion: reduce)", () => {
        if (textRef.current) textRef.current.style.opacity = "1";
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-surface-warm">
      {/* Desktop: 3-col grid with diagonal clip-path cuts and GSAP slide */}
      <div
        ref={gridRef}
        className="hidden overflow-hidden md:grid md:min-h-[70vh] md:grid-cols-[2fr_380px_2fr]"
      >
        {/* Left image */}
        <div ref={leftRef} className="relative overflow-hidden bg-ink/15">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              background:
                "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)",
            }}
          >
            <span className="px-6 text-center font-body text-sm text-surface/25">
              [Food-Foto: Gyros am Spieß]
            </span>
          </div>
        </div>

        {/* Center text — GSAP sets opacity:0 on desktop and reveals on scroll */}
        <div
          ref={textRef}
          className="flex flex-col justify-center px-8 py-16"
        >
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.15em] text-brand">
            Kalimera
          </p>
          <h2
            className="font-display uppercase leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
          >
            Griechisch
            <br />
            wie bei
            <br />
            Yiayia
          </h2>

          <div className="mt-6 space-y-4 font-body text-sm leading-relaxed text-ink/70">
            <p>
              Seit 1974 steht „Der Grieche" für echte Gastfreundschaft,
              handgemachtes Essen und Rezepte, die von Generation zu Generation
              weitergegeben wurden.
            </p>
            <p>
              Gründer Nikos Papadopoulos brachte die Aromen seiner thessalischen
              Heimat mit nach Deutschland — das Feuer unter dem Spieß, den Duft
              von Oregano und Zitrone, die Wärme des gemeinsamen Tisches.
            </p>
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="font-display text-xl uppercase tracking-tight text-ink/40">
              Familie Papadopoulos
            </p>
            <p className="mt-1 font-body text-xs text-ink/30">
              Inhaber · Kattenstrother Grillhaus seit 1974
            </p>
          </div>
        </div>

        {/* Right image */}
        <div ref={rightRef} className="relative overflow-hidden bg-ink/10">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
              background:
                "linear-gradient(225deg, #1a1a2e 0%, #2d2d4a 100%)",
            }}
          >
            <span className="px-6 text-center font-body text-sm text-surface/25">
              [Tavernen-Innenraum]
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: stacked layout, no animation */}
      <div className="md:hidden">
        <div className="relative aspect-[16/9] overflow-hidden bg-ink/15">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)",
            }}
          >
            <span className="px-4 text-center font-body text-sm text-surface/25">
              [Food-Foto: Gyros am Spieß]
            </span>
          </div>
        </div>

        <div className="px-6 py-12">
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.15em] text-brand">
            Kalimera
          </p>
          <h2
            className="font-display uppercase leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(2.5rem, 8vw, 3.5rem)" }}
          >
            Griechisch
            <br />
            wie bei
            <br />
            Yiayia
          </h2>

          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-ink/70">
            <p>
              Seit 1974 steht „Der Grieche" für echte Gastfreundschaft,
              handgemachtes Essen und Rezepte, die von Generation zu Generation
              weitergegeben wurden.
            </p>
            <p>
              Gründer Nikos Papadopoulos brachte die Aromen seiner thessalischen
              Heimat mit nach Deutschland — das Feuer unter dem Spieß, den Duft
              von Oregano und Zitrone, die Wärme des gemeinsamen Tisches.
            </p>
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="font-display text-2xl uppercase tracking-tight text-ink/40">
              Familie Papadopoulos
            </p>
            <p className="mt-1 font-body text-sm text-ink/30">
              Inhaber · Kattenstrother Grillhaus seit 1974
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
