"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const lines = ["IMMER FRISCH.", "IMMER LECKER.", "IMMER AUTHENTISCH."];

export default function TextFill() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    if (prefersReduced) {
      lineRefs.current.forEach((el) => {
        if (el) el.style.setProperty("--fill-progress", "100%");
      });
      return;
    }

    const ctx = gsap.context(() => {
      lineRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { "--fill-progress": "0%" } as gsap.TweenVars,
          {
            "--fill-progress": "100%",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          } as gsap.TweenVars
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#0F1A2E",
        padding: "120px 48px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {lines.map((line, i) => (
          <div
            key={line}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 120px)",
              lineHeight: 1.0,
              letterSpacing: "0.01em",
              color: "transparent",
              WebkitTextStroke: "1.5px #F4EDE0",
              backgroundImage:
                "linear-gradient(90deg, #F4EDE0 var(--fill-progress, 0%), transparent var(--fill-progress, 0%))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              paddingLeft: i % 2 === 1 ? "clamp(32px, 8vw, 160px)" : "0",
              marginBottom: i < lines.length - 1 ? "16px" : "0",
              ["--fill-progress" as string]: "0%",
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </section>
  );
}
