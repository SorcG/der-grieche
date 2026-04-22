"use client";

import { useState } from "react";

const links = [
  { label: "Startseite", href: "/" },
  { label: "Speisekarte", href: "/speisekarte" },
  { label: "Ueber Uns", href: "/ueber-uns" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#0960D0",
      }}
    >
      {/* Main bar */}
      <div
        style={{
          height: 64,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <img
            src="/images/der-grieche.jpg"
            alt="Der Grieche – Kattenstrother Grillhaus"
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          />
        </a>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: 32 }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "#FCFEFD",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4952411234567"
            style={{
              backgroundColor: "#6B7C48",
              color: "#FCFEFD",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "10px 20px",
              borderRadius: 4,
              transition: "background-color 150ms ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#58673b")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#6B7C48")
            }
          >
            Reservieren
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <span
            style={{ display: "block", width: 24, height: 2, backgroundColor: "#FCFEFD" }}
          />
          <span
            style={{ display: "block", width: 24, height: 2, backgroundColor: "#FCFEFD" }}
          />
          <span
            style={{ display: "block", width: 24, height: 2, backgroundColor: "#FCFEFD" }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden"
          style={{ backgroundColor: "#0960D0", padding: "8px 24px 24px" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "#FCFEFD",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "12px 0",
                borderBottom: "1px solid rgba(252,254,253,0.1)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4952411234567"
            onClick={() => setOpen(false)}
            style={{
              display: "inline-block",
              marginTop: 16,
              backgroundColor: "#6B7C48",
              color: "#FCFEFD",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "10px 20px",
              borderRadius: 4,
            }}
          >
            Reservieren
          </a>
        </div>
      )}
    </header>
  );
}
