"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const lines = ["IMMER FRISCH.", "IMMER LECKER.", "IMMER AUTHENTISCH."];

export default function TextFillStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const fills = Array.from(
        sectionRef.current?.querySelectorAll<HTMLElement>(
          "[data-fill-span]",
        ) ?? [],
      );
      if (!fills.length) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        fills.forEach((el) => (el.style.clipPath = "none"));
      });

      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
        () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=250%",
              pin: true,
              scrub: 1,
            },
          });

          fills.forEach((el, i) => {
            tl.to(
              el,
              { clipPath: "inset(0 0% 0 0)", ease: "none", duration: 1 },
              i * 0.8,
            );
          });
        },
      );

      mm.add(
        "(prefers-reduced-motion: no-preference) and (max-width: 767px)",
        () => {
          fills.forEach((el, i) => {
            gsap.to(el, {
              clipPath: "inset(0 0% 0 0)",
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
              },
              delay: i * 0.1,
            });
          });
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen items-center bg-ink"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 md:px-12">
        <div className="space-y-2 md:space-y-4">
          {lines.map((line, i) => (
            <div
              key={i}
              className="relative"
              style={{ lineHeight: 1 }}
            >
              {/* Outline layer — always visible */}
              <span
                className="block select-none font-display uppercase"
                style={{
                  fontSize: "clamp(2.5rem, 9vw, 7.5rem)",
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(244,237,224,0.2)",
                }}
                aria-hidden="true"
              >
                {line}
              </span>
              {/* Fill layer — clip-path animated by GSAP on scroll */}
              <span
                data-fill-span
                className="absolute inset-0 block font-display uppercase"
                style={{
                  fontSize: "clamp(2.5rem, 9vw, 7.5rem)",
                  color: "#F4EDE0",
                  clipPath: "inset(0 100% 0 0)",
                }}
                aria-label={i === 0 ? line : undefined}
              >
                {line}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
