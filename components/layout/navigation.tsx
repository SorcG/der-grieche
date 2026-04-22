"use client";

const links = [
  { label: "Startseite", href: "/" },
  { label: "Speisekarte", href: "/speisekarte" },
  { label: "Ueber Uns", href: "/ueber-uns" },
];

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
          justifyContent: "flex-end",
          gap: 32,
          overflowX: "auto",
        }}
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
              whiteSpace: "nowrap",
              flexShrink: 0,
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
            whiteSpace: "nowrap",
            flexShrink: 0,
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
      </div>
    </header>
  );
}
