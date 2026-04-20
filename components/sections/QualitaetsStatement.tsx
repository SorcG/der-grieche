"use client";

import { useEffect, useRef, useState } from "react";

const words = ["IMMER", "FRISCH.", "IMMER", "LECKER.", "IMMER", "AUTHENTISCH."];

export default function QualitaetsStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setVisibleCount(words.length);
        return;
      }
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      // Each word appears at equal intervals across the scroll range
      setVisibleCount(Math.ceil(progress * (words.length + 1)));
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    // min-h-[300vh] gives the "pinning" duration — GSAP ScrollTrigger replaces this later
    <section ref={sectionRef} className="relative min-h-[300vh] bg-brand">
      <div className="sticky top-0 flex min-h-screen items-center px-6 md:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap gap-x-8 gap-y-2 md:gap-x-14">
            {words.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="font-display uppercase leading-none tracking-tight text-surface"
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 7rem)",
                  opacity: i < visibleCount ? 1 : 0,
                  transform:
                    i < visibleCount ? "translateY(0)" : "translateY(40px)",
                  transition:
                    "opacity 0.6s ease-out, transform 0.6s ease-out",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
