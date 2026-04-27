"use client";

import Meander from "@/components/ui/meander";
import FadeIn from "@/components/ui/fade-in";

export default function Qualitaet() {
  return (
    <section
      style={{
        backgroundColor: "#F4EDE0",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-16 md:py-24"
    >
      <FadeIn>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#6B7C48",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Handwerk &amp; Tradition
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 72px)",
            color: "#0F1A2E",
            lineHeight: 1.0,
            textAlign: "center",
            marginBottom: 32,
            fontWeight: 400,
          }}
        >
          HANDGEMACHT
        </h2>

        <div style={{ marginBottom: 32 }}>
          <Meander variant="divider" />
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            lineHeight: 1.75,
            color: "rgba(15,26,46,0.8)",
            textAlign: "center",
            maxWidth: 620,
            margin: "0 auto 20px",
          }}
        >
          Die hohe Qualitaet unserer Produkte liegt uns am Herzen. Denn wir sind
          der Ansicht, dass hoechster Genuss nur mit besten Zutaten zu erreichen
          ist. Deshalb werden unsere Gyros-Spiesse von uns selbst hergestellt und
          nach traditionellem Familienrezept gewuerzt.
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            lineHeight: 1.75,
            color: "rgba(15,26,46,0.8)",
            textAlign: "center",
            maxWidth: 620,
            margin: "0 auto 40px",
          }}
        >
          Wir streben danach, dir ein unvergleichliches Geschmackserlebnis zu
          bieten. Frische Zutaten, handgemachte Rezepte, griechische
          Leidenschaft.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="/ueber-uns"
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
            Zur Historie â†’
          </a>
        </div>
      </div>
      </FadeIn>

      {/* Decorative column â€” desktop only */}
      <svg
        width="120"
        height="200"
        viewBox="0 0 120 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="hidden md:block"
        style={{ position: "absolute", right: 48, bottom: 48, opacity: 0.08 }}
      >
        <rect x="5" y="10" width="110" height="12" rx="2" stroke="#0960D0" strokeWidth="2" />
        <rect x="15" y="22" width="90" height="8" rx="1" stroke="#0960D0" strokeWidth="2" />
        <rect x="25" y="30" width="70" height="140" rx="2" stroke="#0960D0" strokeWidth="2" />
        <line x1="38" y1="30" x2="38" y2="170" stroke="#0960D0" strokeWidth="1" />
        <line x1="51" y1="30" x2="51" y2="170" stroke="#0960D0" strokeWidth="1" />
        <line x1="64" y1="30" x2="64" y2="170" stroke="#0960D0" strokeWidth="1" />
        <line x1="77" y1="30" x2="77" y2="170" stroke="#0960D0" strokeWidth="1" />
        <line x1="90" y1="30" x2="90" y2="170" stroke="#0960D0" strokeWidth="1" />
        <rect x="15" y="170" width="90" height="8" rx="1" stroke="#0960D0" strokeWidth="2" />
        <rect x="5" y="178" width="110" height="12" rx="2" stroke="#0960D0" strokeWidth="2" />
      </svg>
    </section>
  );
}

