"use client";

import Meander from "@/components/ui/meander";

export default function Willkommen() {
  return (
    <section style={{ backgroundColor: "#FCFEFD", minHeight: 600 }}>
      {/* Desktop: 3-column grid */}
      <div
        className="hidden lg:grid"
        style={{ gridTemplateColumns: "1fr 1fr 1fr", minHeight: 600 }}
      >
        {/* Left image */}
        <div style={{ overflow: "hidden", position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?w=800&q=80&fit=crop"
            alt="Griechisches Essen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
            }}
          />
        </div>

        {/* Center text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "48px 32px",
            backgroundColor: "#FCFEFD",
          }}
        >
          <WillkommenText />
        </div>

        {/* Right image */}
        <div style={{ overflow: "hidden", position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80&fit=crop"
            alt="Griechische Taverne"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="lg:hidden">
        <div style={{ height: 300, overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?w=800&q=80&fit=crop"
            alt="Griechisches Essen"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div style={{ padding: "48px 24px", backgroundColor: "#FCFEFD" }}>
          <WillkommenText />
        </div>
        <div style={{ height: 300, overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80&fit=crop"
            alt="Griechische Taverne"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

function WillkommenText() {
  return (
    <>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "#6B7C48",
          marginBottom: 8,
        }}
      >
        Willkommen bei
      </p>

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(36px, 4vw, 64px)",
          color: "#0F1A2E",
          lineHeight: 1.0,
          marginBottom: 24,
          fontWeight: 400,
        }}
      >
        DER GRIECHE
      </h2>

      <div style={{ marginBottom: 24 }}>
        <Meander background="surface" height={16} />
      </div>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          lineHeight: 1.65,
          color: "rgba(15,26,46,0.8)",
          marginBottom: 16,
        }}
      >
        Seit 1974 steht Der Grieche fuer authentische griechische Kueche in
        Guetersloh. Was als kleine Taverne begann, ist heute ein Ort fuer
        Familien, Freunde und alle, die das echte Griechenland auf dem Teller
        erleben wollen.
      </p>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          lineHeight: 1.65,
          color: "rgba(15,26,46,0.8)",
          marginBottom: 32,
        }}
      >
        Jedes Gyros wird nach unserem Familienrezept gewuerzt. Handgemacht.
        Frisch. Jeden Tag.
      </p>

      <a
        href="tel:+4952411234567"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#0960D0",
          textDecoration: "none",
          transition: "color 150ms ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#6B7C48")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#0960D0")}
      >
        Jetzt Reservieren →
      </a>
    </>
  );
}
