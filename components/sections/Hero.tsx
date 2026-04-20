import Link from "next/link";
import Meander from "@/components/Meander";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-ink">
      {/* Placeholder for food photo / video — apply hero-ken-burns to the media element */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-brand/20 hero-ken-burns" />

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 font-body text-sm font-medium uppercase tracking-[0.18em] text-surface/60">
          Kattenstrother Grillhaus · Seit 1974
        </p>

        <h1
          className="font-display uppercase leading-none tracking-tight text-surface"
          style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
        >
          Der Grieche
        </h1>

        <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-surface/70 sm:text-xl">
          Wo Herz und Herd seit Jahrzehnten verschmelzen.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+4952411234567"
            className="rounded bg-accent px-8 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-surface transition-opacity hover:opacity-90"
          >
            Tisch reservieren
          </a>
          <Link
            href="/speisekarte"
            className="rounded border border-surface/30 px-8 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-surface transition-colors hover:border-surface hover:bg-surface/10"
          >
            Zur Speisekarte →
          </Link>
        </div>
      </div>

      {/* Bottom: Mäander + Scroll-Indicator */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8">
        <div className="mx-auto max-w-[1280px]">
          <Meander variant="border" background="ink" className="opacity-30" />
        </div>
        <div className="mt-5 flex justify-center">
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-[10px] uppercase tracking-widest text-surface/40">
              Scroll
            </span>
            {/* Mouse icon */}
            <svg
              width="18"
              height="28"
              viewBox="0 0 18 28"
              fill="none"
              className="text-surface/40"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="1"
                width="16"
                height="26"
                rx="8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="8"
                y="5"
                width="2"
                height="5"
                rx="1"
                fill="currentColor"
                className="animate-bounce"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
