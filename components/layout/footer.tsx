import Meander from "@/components/ui/meander";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Speisekarte", href: "/speisekarte" },
  { label: "Ueber Uns", href: "/ueber-uns" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  color: "#F4EDE0",
  fontSize: 16,
  fontWeight: 400,
  letterSpacing: "0.02em",
  marginBottom: 16,
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  color: "rgba(244,237,224,0.7)",
  fontSize: 14,
  lineHeight: 1.7,
};

const linkStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body)",
  color: "rgba(244,237,224,0.6)",
  fontSize: 14,
  textDecoration: "none",
  lineHeight: 1.8,
};

export default function Footer() {
  return (
    <footer>
      <Meander background="ink" height={48} />

      {/* Main footer area */}
      <div style={{ backgroundColor: "#0F1A2E" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "64px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 48,
          }}
        >
          {/* Column 1 — Brand + Nav */}
          <div>
            <a
              href="/"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 12,
                textDecoration: "none",
                marginBottom: 8,
              }}
            >
              <img
                src="/images/der-grieche.jpg"
                alt="Der Grieche Logo"
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid rgba(244,237,224,0.15)",
                  flexShrink: 0,
                }}
              />
            </a>
            <p style={{ ...bodyStyle, fontSize: 14, marginBottom: 24 }}>
              Kattenstrother Grillhaus
            </p>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} style={linkStyle}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 2 — Address + Hours */}
          <div>
            <p style={headingStyle}>BESUCH UNS</p>
            <address style={{ ...bodyStyle, fontStyle: "normal" }}>
              Kattenstrother Str. 100
              <br />
              33334 Guetersloh
            </address>
            <div style={{ ...bodyStyle, marginTop: 20 }}>
              <p>Mo – Fr: 11:00 – 22:00 Uhr</p>
              <p>Sa – So: 12:00 – 23:00 Uhr</p>
            </div>
            <a
              href="tel:+4952411234567"
              style={{ ...linkStyle, marginTop: 16, color: "rgba(244,237,224,0.7)" }}
            >
              05241 / 123456
            </a>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p style={headingStyle}>KONTAKT</p>
            <a
              href="mailto:info@der-grieche-guetersloh.de"
              style={{ ...linkStyle, color: "rgba(244,237,224,0.7)", marginBottom: 12 }}
            >
              info@der-grieche-guetersloh.de
            </a>
            <p style={{ ...bodyStyle, marginBottom: 24 }}>
              Tischreservierungen gerne telefonisch oder per E-Mail.
            </p>
            <a
              href="tel:+4952411234567"
              style={{
                display: "inline-block",
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
              Jetzt Reservieren
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        style={{
          backgroundColor: "#080F1A",
          padding: "16px 24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "rgba(244,237,224,0.4)",
            margin: 0,
          }}
        >
          © 2026 Der Grieche – Kattenstrother Grillhaus
        </p>
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "Impressum", href: "/impressum" },
            { label: "Datenschutz", href: "/datenschutz" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "rgba(244,237,224,0.4)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
