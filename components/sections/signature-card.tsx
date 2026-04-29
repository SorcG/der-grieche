"use client";

import { useEffect, useRef } from "react";

function ColumnSVG() {
  return (
    <svg
      width="100"
      height="160"
      viewBox="0 0 120 200"
      fill="none"
      aria-hidden="true"
      style={{ opacity: 0.3 }}
    >
      <rect x="5" y="10" width="110" height="12" rx="2" stroke="#F4EDE0" strokeWidth="2" />
      <rect x="15" y="22" width="90" height="8" rx="1" stroke="#F4EDE0" strokeWidth="2" />
      <rect x="25" y="30" width="70" height="140" rx="2" stroke="#F4EDE0" strokeWidth="2" />
      <line x1="38" y1="30" x2="38" y2="170" stroke="#F4EDE0" strokeWidth="1" />
      <line x1="51" y1="30" x2="51" y2="170" stroke="#F4EDE0" strokeWidth="1" />
      <line x1="64" y1="30" x2="64" y2="170" stroke="#F4EDE0" strokeWidth="1" />
      <line x1="77" y1="30" x2="77" y2="170" stroke="#F4EDE0" strokeWidth="1" />
      <line x1="90" y1="30" x2="90" y2="170" stroke="#F4EDE0" strokeWidth="1" />
      <rect x="15" y="170" width="90" height="8" rx="1" stroke="#F4EDE0" strokeWidth="2" />
      <rect x="5" y="178" width="110" height="12" rx="2" stroke="#F4EDE0" strokeWidth="2" />
    </svg>
  );
}

export default function SignatureCard() {
  const kastenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = kastenRef.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateX(-80px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
        } else {
          el.style.opacity = "0";
          el.style.transform = "translateX(-80px)";
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#0F1A2E",
        padding: "80px 48px",
        overflow: "hidden",
      }}
      className="py-16 md:py-20 px-6 md:px-12"
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          ref={kastenRef}
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(244,237,224,0.12)",
            borderRadius: 8,
            padding: 64,
          }}
          className="p-10 md:p-16"
        >
          {/* Desktop three-column */}
          <div
            className="hidden lg:grid"
            style={{ gridTemplateColumns: "auto 1fr auto", gap: 48, alignItems: "center" }}
          >
            {/* Left: column illustration */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ColumnSVG />
            </div>

            {/* Middle: text */}
            <TextBlock />

            {/* Right: food photo */}
            <div
              style={{
                width: 220,
                aspectRatio: "4/5",
                borderRadius: 8,
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img
                src="/images/gyrosteller-closeup.png"
                alt="Griechisches Essen"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          {/* Mobile: just text */}
          <div className="lg:hidden">
            <TextBlock />
          </div>
        </div>
      </div>
    </section>
  );
}

function TextBlock() {
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "#6B7C48",
          marginBottom: 12,
        }}
      >
        Kattenstrother Grill
      </p>

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(40px, 5vw, 72px)",
          color: "#F4EDE0",
          lineHeight: 0.95,
          marginBottom: 24,
          fontWeight: 400,
        }}
      >
        50 JAHRE
        <br />
        TRADITION
      </h2>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          lineHeight: 1.65,
          color: "rgba(244,237,224,0.75)",
          marginBottom: 32,
          maxWidth: 440,
        }}
      >
        Seit 2021 servieren wir authentische griechische Küche in Gütersloh.
        Was als kleine Taverne begann, ist heute ein fester Teil der Stadt.
      </p>

      <a
        href="tel:+4952411234567"
        className="btn"
        style={{
          display: "inline-block",
          backgroundColor: "#6B7C48",
          color: "#FCFEFD",
          textDecoration: "none",
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          padding: "14px 32px",
          borderRadius: 4,
          transition: "background-color 150ms ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#556139")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6B7C48")}
      >
        Jetzt Reservieren
      </a>

      <a
        href="/speisekarte"
        style={{
          display: "block",
          marginTop: 16,
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "rgba(244,237,224,0.6)",
          textDecoration: "none",
          transition: "color 150ms ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#F4EDE0")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(244,237,224,0.6)")}
      >
        Entdecke unsere Küche →
      </a>
    </div>
  );
}
