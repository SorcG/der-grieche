"use client";

import { useState, useEffect } from "react";

const navLinkStyle = (scrolled: boolean): React.CSSProperties => ({
  color: "rgba(255,255,255,0.75)",
  fontSize: 13,
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
  fontFamily: "system-ui, sans-serif",
  fontWeight: 500,
  transition: "color 0.2s ease",
  whiteSpace: "nowrap" as const,
});

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = scrolled
    ? "rgba(9, 26, 46, 0.95)"
    : "rgba(9, 26, 46, 0.55)";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          height: 72,
          display: "flex",
          alignItems: "center",
          backgroundColor: bg,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(9, 96, 208, 0.35)",
          transition: "background-color 0.3s ease",
          padding: "0 32px",
          boxSizing: "border-box",
        }}
      >
        {/* Left links – desktop only */}
        <div
          className="hidden lg:flex"
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 40,
          }}
        >
          <a
            href="/"
            className="btn"
            style={navLinkStyle(scrolled)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.textDecoration = "underline";
              e.currentTarget.style.textDecorationColor = "#0960D0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.75)";
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Startseite
          </a>
          <a
            href="/speisekarte"
            className="btn"
            style={navLinkStyle(scrolled)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.textDecoration = "underline";
              e.currentTarget.style.textDecorationColor = "#0960D0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.75)";
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Speisekarte
          </a>
        </div>

        {/* Centre crest */}
        <div
          style={{
            flexShrink: 0,
            textAlign: "center",
            padding: "0 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 1,
            gap: 2,
          }}
        >
          <span
            style={{
              color: "#0960D0",
              fontSize: 10,
              opacity: 0.8,
              lineHeight: 1,
            }}
          >
            ✦
          </span>
          <a
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              color: "white",
              letterSpacing: "0.08em",
              textDecoration: "none",
              lineHeight: 1,
            }}
          >
            DER GRIECHE
          </a>
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 10,
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Kattenstrother Grillhaus
          </span>
        </div>

        {/* Right links + button – desktop only */}
        <div
          className="hidden lg:flex"
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 40,
          }}
        >
          <a
            href="/ueber-uns"
            className="btn"
            style={navLinkStyle(scrolled)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.textDecoration = "underline";
              e.currentTarget.style.textDecorationColor = "#0960D0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.75)";
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Über Uns
          </a>
          <a
            href="tel:+4952411234567"
            style={{
              border: "1px solid #0960D0",
              background: "transparent",
              color: "white",
              padding: "8px 18px",
              borderRadius: 0,
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 500,
              transition: "background 0.2s ease, color 0.2s ease",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0960D0";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "white";
            }}
          >
            Reservieren
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          style={{
            marginLeft: "auto",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            flexDirection: "column",
            gap: 5,
          }}
        >
          <span style={{ display: "block", width: 22, height: 2, backgroundColor: "white", transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: 22, height: 2, backgroundColor: "white", transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: 22, height: 2, backgroundColor: "white", transition: "opacity 0.2s" }} />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          className="lg:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            backgroundColor: "#0F1A2E",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          {[
            { label: "Startseite", href: "/" },
            { label: "Speisekarte", href: "/speisekarte" },
            { label: "Über Uns", href: "/ueber-uns" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.85)",
                fontFamily: "system-ui, sans-serif",
                fontSize: 20,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4952411234567"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 16,
              border: "1px solid #0960D0",
              background: "transparent",
              color: "white",
              padding: "12px 32px",
              borderRadius: 0,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Reservieren
          </a>
        </div>
      )}
    </>
  );
}
