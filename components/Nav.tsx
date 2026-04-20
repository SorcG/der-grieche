"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/#atmosphaere", label: "Atmosphäre" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-brand h-14 md:h-16">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="font-display text-xl uppercase tracking-tight text-surface"
        >
          Der Grieche
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-sm font-medium uppercase tracking-[0.1em] text-surface/75 transition-colors hover:text-surface"
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+4952411234567"
            className="rounded bg-accent px-5 py-2 font-body text-sm font-medium uppercase tracking-[0.1em] text-surface transition-opacity hover:opacity-90"
          >
            Reservieren
          </a>
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 p-1 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-surface transition-all duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-surface transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-surface transition-all duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-brand transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-2 font-body text-base font-medium uppercase tracking-[0.1em] text-surface/75 transition-colors hover:text-surface"
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+4952411234567"
            className="mt-2 font-body text-base font-medium uppercase tracking-[0.1em] text-accent"
          >
            Reservieren
          </a>
        </nav>
      </div>
    </header>
  );
}
