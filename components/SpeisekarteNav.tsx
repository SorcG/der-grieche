"use client";

import { useEffect, useState } from "react";

interface SpeisekarteNavProps {
  categories: { id: string; name: string }[];
}

export default function SpeisekarteNav({ categories }: SpeisekarteNavProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");

  useEffect(() => {
    const elements = categories
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      // Fires when the section top-half passes the middle of the viewport
      { rootMargin: "-40% 0px -55% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  return (
    <nav
      className="sticky top-[72px] z-40 overflow-x-auto border-b border-ink/10 bg-surface"
      aria-label="Speisekarte Kategorien"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <ul className="flex gap-1 py-3">
          {categories.map(({ id, name }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block whitespace-nowrap rounded px-4 py-2 font-body text-sm font-medium uppercase tracking-[0.08em] transition-colors ${
                  activeId === id
                    ? "bg-brand text-surface"
                    : "text-ink/55 hover:text-ink"
                }`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
