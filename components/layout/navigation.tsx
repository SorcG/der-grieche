"use client";

import Meander from "@/components/ui/meander";

export default function Navigation() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#0960D0",
      }}
    >
      <div
        style={{
          height: 64,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <img
            src="/images/der-grieche.jpg"
            alt="Der Grieche"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(255,255,255,0.25)",
              display: "block",
            }}
          />
        </a>

        {/* Mäander links + Links + Mäander rechts + Button */}
        <div style={{ display: "flex", alignItems: "center", flex: 1, gap: 0 }}>
          {/* Mäander links */}
          <div style={{ flex: 1, overflow: "hidden", height: 40 }}>
            <Meander background="brand" height={40} />
          </div>

          {/* Nav-Links */}
          <div style={{ display: "flex", gap: 32, alignItems: "center", padding: "0 32px", flexShrink: 0 }}>
            <a
              href="/"
              style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: "0.12em", fontFamily: "var(--font-body)", textTransform: "uppercase", textDecoration: "none" }}
            >
              Startseite
            </a>
            <a
              href="/speisekarte"
              style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: "0.12em", fontFamily: "var(--font-body)", textTransform: "uppercase", textDecoration: "none" }}
            >
              Speisekarte
            </a>
            <a
              href="/ueber-uns"
              style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: "0.12em", fontFamily: "var(--font-body)", textTransform: "uppercase", textDecoration: "none" }}
            >
              Ueber Uns
            </a>
          </div>

          {/* Mäander rechts */}
          <div style={{ flex: 1, overflow: "hidden", height: 40 }}>
            <Meander background="brand" height={40} />
          </div>

          {/* RESERVIEREN Button */}
          <div style={{ flexShrink: 0, marginLeft: 24 }}>
            <a
              href="tel:+4952411234567"
              style={{
                background: "#6B7C48",
                color: "white",
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "10px 20px",
                borderRadius: 4,
                textDecoration: "none",
                transition: "background-color 150ms ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#58673b")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6B7C48")}
            >
              RESERVIEREN
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
