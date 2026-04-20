import Link from "next/link";
import FadeIn from "@/components/FadeIn";

function GreekColumn() {
  return (
    <svg
      viewBox="0 0 60 200"
      className="h-44 w-12 text-surface"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ opacity: 0.25 }}
    >
      {/* Entablature top */}
      <rect x="0" y="4" width="60" height="7" rx="0.5" />
      <rect x="3" y="11" width="54" height="5" rx="0.5" />
      {/* Shaft */}
      <rect x="13" y="16" width="34" height="155" />
      {/* Fluting */}
      <line x1="19" y1="16" x2="19" y2="171" />
      <line x1="25" y1="16" x2="25" y2="171" />
      <line x1="30" y1="16" x2="30" y2="171" />
      <line x1="35" y1="16" x2="35" y2="171" />
      <line x1="41" y1="16" x2="41" y2="171" />
      {/* Base */}
      <rect x="10" y="171" width="40" height="8" rx="0.5" />
      <rect x="5" y="179" width="50" height="7" rx="0.5" />
      <rect x="0" y="186" width="60" height="10" rx="0.5" />
    </svg>
  );
}

export default function SignatureCard() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[960px] px-6 md:px-12">
        <FadeIn direction="up">
          <div className="grid items-center gap-12 md:grid-cols-[80px_1fr_280px] md:gap-16">
            {/* Greek column illustration */}
            <div className="hidden justify-center md:flex">
              <GreekColumn />
            </div>

            {/* Text block */}
            <div>
              <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.15em] text-surface/35">
                Unsere Geschichte
              </p>
              <h2
                className="font-display uppercase leading-none tracking-tight text-surface"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                50 Jahre
                <br />
                Tradition
              </h2>
              <div className="mt-6 font-body text-base leading-relaxed text-surface/55">
                <p>
                  Was 1974 als kleines Grillhaus an der Kattenstrother Straße
                  begann, ist heute ein fester Bestandteil der Gütersloher
                  Gastronomielandschaft. Zwei Generationen, ein Feuer.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/ueber-uns"
                  className="rounded bg-surface-warm px-6 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-ink transition-opacity hover:opacity-90"
                >
                  Unsere Geschichte
                </Link>
                <a
                  href="tel:+4952411234567"
                  className="rounded border border-surface/25 px-6 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-surface transition-colors hover:border-surface/60"
                >
                  Reservieren
                </a>
              </div>
            </div>

            {/* Polaroid photo */}
            <div className="mx-auto w-60 md:mx-0 md:w-auto">
              <div
                className="bg-white p-3 shadow-xl"
                style={{ transform: "rotate(2deg)" }}
              >
                <div className="flex aspect-[4/5] items-center justify-center overflow-hidden bg-surface-warm/60">
                  <span className="px-2 text-center font-body text-xs text-ink/30">
                    [Gründerfoto: Nikos 1974]
                  </span>
                </div>
                <p className="mt-2 text-center font-body text-xs text-ink/45">
                  Nikos, Sommer 1974
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
