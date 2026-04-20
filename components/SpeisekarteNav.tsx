"use client";

import { useEffect, useState } from "react";

interface SpeisekarteNavProps {
  categories: { id: string; name: string }[];
}

function CategoryIcon({ id }: { id: string }) {
  const cls = "h-4 w-4 shrink-0";
  const props = {
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: cls,
  };

  switch (id) {
    case "gyros":
      // Plate with layered meat
      return (
        <svg {...props}>
          <ellipse cx="10" cy="13" rx="7" ry="3" />
          <ellipse cx="10" cy="10" rx="5" ry="2.5" />
          <ellipse cx="10" cy="7.5" rx="3" ry="2" />
          <line x1="3" y1="16" x2="17" y2="16" />
        </svg>
      );
    case "gyros-pita":
      // Folded wrap / pita
      return (
        <svg {...props}>
          <path d="M 3 14 Q 3 7 10 7 Q 17 7 17 14" />
          <path d="M 3 14 Q 5 17 10 17 Q 15 17 17 14" />
          <path d="M 6 10 Q 10 9 14 10" />
          <path d="M 7 12 Q 10 11 13 12" />
        </svg>
      );
    case "spezialitaeten":
      // Flame + grill grate
      return (
        <svg {...props}>
          <path d="M 10 16 Q 5 13 7 8 Q 8 5 10 4 Q 9 7 11 9 Q 12 6 13 5 Q 16 10 13 14 Q 12 16 10 16 Z" />
          <line x1="4" y1="17" x2="16" y2="17" />
        </svg>
      );
    case "bauern-pita":
      // Thick layered bread loaf
      return (
        <svg {...props}>
          <rect x="3" y="9" width="14" height="8" rx="2" />
          <path d="M 5 9 Q 6 5 10 5 Q 14 5 15 9" />
          <line x1="7" y1="9" x2="7" y2="17" strokeOpacity="0.4" />
          <line x1="10" y1="9" x2="10" y2="17" strokeOpacity="0.4" />
          <line x1="13" y1="9" x2="13" y2="17" strokeOpacity="0.4" />
        </svg>
      );
    case "fuer-kinder":
      // Star
      return (
        <svg {...props}>
          <polygon points="10,3 11.8,7.5 16.5,7.5 12.8,10.5 14.1,15 10,12.5 5.9,15 7.2,10.5 3.5,7.5 8.2,7.5" />
        </svg>
      );
    case "warme-speisen":
      // Bowl with steam
      return (
        <svg {...props}>
          <path d="M 4 11 Q 4 16 10 16 Q 16 16 16 11 Z" />
          <line x1="4" y1="11" x2="16" y2="11" />
          <path d="M 7 8 Q 7.5 6 7 4" />
          <path d="M 10 8 Q 10.5 6 10 4" />
          <path d="M 13 8 Q 13.5 6 13 4" />
        </svg>
      );
    case "beilagen-salate":
      // Leaf
      return (
        <svg {...props}>
          <path d="M 10 16 Q 3 12 4 6 Q 8 3 14 5 Q 17 9 14 14 Q 12 16 10 16 Z" />
          <path d="M 10 16 Q 8 11 10 6" />
          <path d="M 10 10 Q 13 9 14 7" />
          <path d="M 9 13 Q 6 13 5 11" />
        </svg>
      );
    case "kalte-speisen-desserts":
      // Snowflake / ice crystal
      return (
        <svg {...props}>
          <line x1="10" y1="3" x2="10" y2="17" />
          <line x1="3" y1="10" x2="17" y2="10" />
          <line x1="5" y1="5" x2="15" y2="15" />
          <line x1="15" y1="5" x2="5" y2="15" />
          <circle cx="10" cy="10" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
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
      { rootMargin: "-40% 0px -55% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  return (
    <nav
      className="sticky top-16 z-40 overflow-x-auto border-b border-ink/10 bg-surface"
      aria-label="Speisekarte Kategorien"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <ul className="flex gap-1 py-2">
          {categories.map(({ id, name }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded px-3 py-2 font-body text-xs font-medium uppercase tracking-[0.08em] transition-colors ${
                  activeId === id
                    ? "bg-brand text-surface"
                    : "text-ink/55 hover:text-ink"
                }`}
              >
                <CategoryIcon id={id} />
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
