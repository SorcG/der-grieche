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
      lineRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { "--fill-progress": "0%" } as gsap.TweenVars,
          {
            "--fill-progress": "100%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${i * 200} 70%`,
              end: `top+=${(i + 1) * 200 + 200} 30%`,
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
        padding: "160px 24px",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {lines.map((line, i) => (
          <div
            key={line}
            style={{
              paddingLeft: i % 2 === 1 ? "clamp(16px, 8vw, 160px)" : "0",
              marginBottom: i < lines.length - 1 ? "16px" : "0",
              // Kein Zeilenumbruch - Gradient funktioniert nur auf einer Zeile
              whiteSpace: "nowrap",
              overflow: "visible",
            }}
          >
            <span
              ref={(el) => {
                lineRefs.current[i] = el as HTMLDivElement | null;
              }}
              style={{
                fontFamily: "var(--font-display)",
                // Kleiner auf Mobile damit kein Umbruch nötig
                fontSize: "clamp(28px, 8.5vw, 120px)",
                lineHeight: 1.1,
                letterSpacing: "0.01em",
                color: "transparent",
                WebkitTextStroke: "1.5px #F4EDE0",
                backgroundImage:
                  "linear-gradient(90deg, #F4EDE0 var(--fill-progress, 0%), transparent var(--fill-progress, 0%))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                display: "inline-block",
                ["--fill-progress" as string]: "0%",
              }}
            >
              {line}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
