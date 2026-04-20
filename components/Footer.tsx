import Link from "next/link";
import Meander from "@/components/Meander";

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-ink text-surface-warm">
      {/* Mäander border */}
      <div className="px-6 pt-6 md:px-12">
        <Meander variant="border" background="ink" className="opacity-20" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Col 1: Brand, nav, social */}
          <div>
            <Link
              href="/"
              className="font-display text-3xl uppercase tracking-tight text-surface"
            >
              Der Grieche
            </Link>
            <p className="mt-2 font-body text-sm leading-relaxed text-surface-warm/55">
              Kattenstrother Grillhaus
              <br />
              Gütersloh · Seit 1974
            </p>
            <nav className="mt-5 flex flex-col gap-3">
              {[
                { href: "/", label: "Startseite" },
                { href: "/speisekarte", label: "Speisekarte" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "#kontakt", label: "Kontakt" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-body text-sm text-surface-warm/60 transition-colors hover:text-surface-warm"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 flex gap-5">
              <a
                href="#"
                aria-label="Instagram"
                className="font-body text-sm text-surface-warm/50 transition-colors hover:text-surface-warm"
              >
                Instagram
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="font-body text-sm text-surface-warm/50 transition-colors hover:text-surface-warm"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Col 2: Location + hours */}
          <div>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.15em] text-surface-warm/35">
              Standort
            </h3>
            <address className="mt-4 not-italic font-body text-sm leading-relaxed text-surface-warm/60">
              Kattenstrother Str. 42
              <br />
              33332 Gütersloh
              <br />
              <a
                href="tel:+4952411234567"
                className="mt-2 block transition-colors hover:text-surface-warm"
              >
                05241 / 12 34 567
              </a>
            </address>
            <div className="mt-5">
              <h4 className="font-body text-xs font-medium uppercase tracking-[0.1em] text-surface-warm/35">
                Öffnungszeiten
              </h4>
              <div className="mt-2 space-y-1 font-body text-sm text-surface-warm/55">
                <p>Di – Fr: 11:30 – 14:30 / 17:00 – 22:30</p>
                <p>Sa – So: 12:00 – 23:00</p>
                <p className="text-surface-warm/35">Mo: Ruhetag</p>
              </div>
            </div>
          </div>

          {/* Col 3: Second location placeholder + legal */}
          <div>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.15em] text-surface-warm/35">
              Demnächst
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-surface-warm/35">
              Ein zweiter Standort in Bielefeld ist in Planung.
            </p>
            <div className="mt-8">
              <h3 className="font-body text-xs font-medium uppercase tracking-[0.15em] text-surface-warm/35">
                Rechtliches
              </h3>
              <nav className="mt-4 flex flex-col gap-3">
                <Link
                  href="/impressum"
                  className="font-body text-sm text-surface-warm/60 transition-colors hover:text-surface-warm"
                >
                  Impressum
                </Link>
                <Link
                  href="/datenschutz"
                  className="font-body text-sm text-surface-warm/60 transition-colors hover:text-surface-warm"
                >
                  Datenschutz
                </Link>
              </nav>
            </div>
          </div>

          {/* Col 4: Map placeholder */}
          <div>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.15em] text-surface-warm/35">
              Anfahrt
            </h3>
            <div className="mt-4 aspect-square w-full overflow-hidden rounded bg-surface-warm/8 flex items-center justify-center border border-surface-warm/10">
              <span className="px-4 text-center font-body text-xs text-surface-warm/25">
                [Google Maps Embed]
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-surface-warm/10 pt-6 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-surface-warm/35">
            © 2026 Der Grieche – Kattenstrother Grillhaus
          </p>
          <p className="font-body text-xs text-surface-warm/35">
            Alle Preise inkl. MwSt.
          </p>
        </div>
      </div>
    </footer>
  );
}
