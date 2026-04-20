import type { Metadata } from "next";
import Meander from "@/components/Meander";
import SpeisekarteNav from "@/components/SpeisekarteNav";
import { menu } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Speisekarte – Der Grieche",
  description:
    "Unsere vollständige Speisekarte: Meze, Grill-Klassiker, Salate, Desserts und Getränke.",
};

export default function Speisekarte() {
  const categories = menu.map(({ id, name }) => ({ id, name }));

  return (
    <main>
      {/* Mini-Hero */}
      <div className="flex min-h-[30vh] flex-col items-center justify-center bg-ink px-6 pb-10 pt-[calc(72px+3rem)] text-center">
        <h1
          className="font-display uppercase leading-none tracking-tight text-surface"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
        >
          Speisekarte
        </h1>
        <div className="mt-6 w-full max-w-lg">
          <Meander variant="border" background="ink" className="opacity-30" />
        </div>
      </div>

      {/* Sticky category navigation */}
      <SpeisekarteNav categories={categories} />

      {/* Menu sections */}
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12">
        <div className="space-y-20">
          {menu.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-36"
            >
              <h2
                className="font-display uppercase leading-none tracking-tight text-ink"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
              >
                {category.name}
              </h2>
              <div className="mb-8 mt-3">
                <Meander variant="border" background="surface" width={160} />
              </div>

              <ul className="divide-y divide-ink/5">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-6 py-4"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-body text-base font-medium text-ink">
                          {item.name}
                        </span>
                        {item.vegetarian && (
                          <span
                            className="rounded bg-accent/15 px-1.5 py-0.5 font-body text-xs font-medium text-accent"
                            title="Vegetarisch"
                          >
                            V
                          </span>
                        )}
                        {item.spicy && (
                          <span
                            className="font-body text-xs"
                            title="Scharf"
                            aria-label="Scharf"
                          >
                            🌶
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 font-body text-sm leading-relaxed text-ink/55">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 font-body text-sm font-medium text-accent">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 border-t border-ink/10 pt-12 text-center">
          <p className="font-body text-base text-ink/55">
            Fragen zu Allergenen oder individuellen Wünschen?
          </p>
          <a
            href="tel:+4952411234567"
            className="mt-4 inline-block rounded bg-accent px-8 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-surface transition-opacity hover:opacity-90"
          >
            Anrufen: 05241 / 12 34 567
          </a>
        </div>
      </div>
    </main>
  );
}
