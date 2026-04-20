import Link from "next/link";

const dishes = [
  {
    name: "Gyros Pitta",
    description:
      "Zart mariniertes Schweinefleisch vom Spieß, Tzatziki, frische Tomaten in knusprigem Pitabrot.",
    price: "ab 6,90 €",
  },
  {
    name: "Souvlaki",
    description:
      "Saftiges Schweinefleisch am Spieß, über Holzkohle gegrillt, serviert mit frischem Pitabrot.",
    price: "ab 8,50 €",
  },
  {
    name: "Bifteki",
    description:
      "Handgeformtes Hacksteak mit Feta-Füllung, vom Grill. Mit Pommes frites und Tzatziki.",
    price: "ab 12,90 €",
  },
  {
    name: "Bauernsalat",
    description:
      "Tomaten, Gurken, Paprika, Kalamata-Oliven, rote Zwiebeln und ein großzügiges Stück Feta.",
    price: "ab 7,50 €",
  },
];

export default function SignatureDishes() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-12 text-center">
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.15em] text-brand">
            Unsere Klassiker
          </p>
          <h2
            className="font-display uppercase leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Signature Dishes
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-lg border border-transparent transition-all duration-300 hover:scale-[1.02] hover:border-accent"
            >
              {/* Image placeholder — replace with next/image */}
              <div className="relative aspect-square bg-surface-warm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-3 text-center font-body text-xs text-ink/30">
                    [{dish.name}]
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-display text-xl uppercase tracking-tight text-ink">
                  {dish.name}
                </h3>
                <p className="mt-2 line-clamp-2 font-body text-sm leading-relaxed text-ink/65">
                  {dish.description}
                </p>
                <p className="mt-3 font-body text-sm font-medium text-accent">
                  {dish.price}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/speisekarte"
            className="inline-block rounded border border-ink/20 px-8 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:border-ink hover:bg-ink/5"
          >
            Vollständige Speisekarte →
          </Link>
        </div>
      </div>
    </section>
  );
}
