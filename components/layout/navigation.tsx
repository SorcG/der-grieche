"use client";
import Meander from "@/components/ui/meander";

export default function Navigation() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      backgroundColor: "#0960D0",
      height: 64,
      display: "flex",
      alignItems: "center",
      width: "100%",
      overflow: "hidden",
    }}>

      {/* Mäander links */}
      <div style={{ flex: 1, height: 64, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Meander background="brand" height={40} />
      </div>

      {/* Nav-Links */}
      <div style={{ display: "flex", gap: 28, alignItems: "center", padding: "0 24px", flexShrink: 0 }}>
        <a href="/" style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: "0.12em", fontFamily: "var(--font-body)", textTransform: "uppercase", textDecoration: "none" }}>Startseite</a>
        <a href="/speisekarte" style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: "0.12em", fontFamily: "var(--font-body)", textTransform: "uppercase", textDecoration: "none" }}>Speisekarte</a>
        <a href="/ueber-uns" style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: "0.12em", fontFamily: "var(--font-body)", textTransform: "uppercase", textDecoration: "none" }}>Ueber Uns</a>
      </div>

      {/* Mäander Mitte-Rechts */}
      <div style={{ flex: 1, height: 64, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Meander background="brand" height={40} />
      </div>

      {/* RESERVIEREN Button */}
      <div style={{ flexShrink: 0, padding: "0 16px" }}>
        <a href="#reservieren" style={{ background: "#6B7C48", color: "white", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", padding: "10px 20px", borderRadius: 4, textDecoration: "none", whiteSpace: "nowrap" }}>
          RESERVIEREN
        </a>
      </div>

      {/* Mäander rechts */}
      <div style={{ flex: 1, height: 64, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Meander background="brand" height={40} />
      </div>

    </nav>
  );
}
