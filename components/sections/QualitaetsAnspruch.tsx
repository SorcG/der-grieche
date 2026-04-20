import Link from "next/link";
import FadeIn from "@/components/FadeIn";

function GyrosSpit() {
  return (
    <svg
      viewBox="0 0 200 100"
      className="w-56 text-brand"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ opacity: 0.45 }}
    >
      {/* Horizontal spit rod */}
      <line x1="10" y1="50" x2="190" y2="50" />

      {/* Meat mass — stacked ellipses suggesting layers */}
      <ellipse cx="100" cy="50" rx="38" ry="28" />
      <ellipse cx="100" cy="50" rx="30" ry="21" />
      <ellipse cx="100" cy="50" rx="20" ry="13" />

      {/* Left support stand */}
      <line x1="25" y1="50" x2="18" y2="80" />
      <line x1="18" y1="80" x2="10" y2="90" />
      <line x1="18" y1="80" x2="28" y2="90" />

      {/* Right support stand */}
      <line x1="175" y1="50" x2="182" y2="80" />
      <line x1="182" y1="80" x2="172" y2="90" />
      <line x1="182" y1="80" x2="190" y2="90" />

      {/* Flame hints beneath */}
      <path d="M 85 78 Q 90 68 95 75 Q 100 62 105 72 Q 110 65 115 78" />
    </svg>
  );
}

export default function QualitaetsAnspruch() {
  return (
    <section className="bg-surface-warm py-24 md:py-32">
      <div className="mx-auto max-w-[720px] px-6 text-center md:px-12">
        <FadeIn direction="none">
          <div className="mb-8 flex justify-center">
            <GyrosSpit />
          </div>
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.15em] text-brand">
            Unser Versprechen
          </p>
          <h2
            className="font-display uppercase leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Handgemacht
            <br />
            Seit 1974
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-ink/65 md:text-lg">
            Kein Fertigprodukt. Kein Kompromiss. Jedes Gericht entsteht täglich
            neu — mit denselben Rezepten, die Nikos Papadopoulos aus Thessalien
            mitgebracht hat.
          </p>
          <Link
            href="/ueber-uns"
            className="mt-8 inline-block rounded bg-brand px-8 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-surface transition-opacity hover:opacity-90"
          >
            Unsere Geschichte →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
