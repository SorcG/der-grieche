import Link from "next/link";
import Meander from "@/components/Meander";

export default function Footer() {
  return (
    <footer className="bg-ink text-surface-warm">
      {/* Mäander border */}
      <div className="px-6 pt-6 md:px-12">
        <Meander variant="border" background="ink" className="opacity-20" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
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

          {/* Navigation */}
          <div>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.15em] text-surface-warm/35">
              Navigation
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              {[
                { href: "/", label: "Startseite" },
                { href: "/speisekarte", label: "Speisekarte" },
                { href: "/#atmosphaere", label: "Atmosphäre" },
                { href: "/#standort", label: "Kontakt & Anfahrt" },
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
          </div>

          {/* Legal */}
          <div>
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
