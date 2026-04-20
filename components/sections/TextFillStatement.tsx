"use client";

import { useEffect, useRef, useState } from "react";

const lines = ["IMMER FRISCH.", "IMMER LECKER.", "IMMER AUTHENTISCH."];

export default function TextFillStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState([false, false, false]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const lineEls = Array.from(
      section.querySelectorAll<HTMLElement>("[data-fill-line]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.fillLine,
            );
            setFilled((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    lineEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
              data-fill-line={i}
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
              {/* Fill layer — reveals left-to-right on scroll */}
              <span
                className="absolute inset-0 block font-display uppercase transition-[clip-path] duration-700 ease-out"
                style={{
                  fontSize: "clamp(2.5rem, 9vw, 7.5rem)",
                  color: "#F4EDE0",
                  clipPath: filled[i]
                    ? "inset(0 0% 0 0)"
                    : "inset(0 100% 0 0)",
                  transitionDelay: `${i * 120}ms`,
                }}
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
