"use client";

const bounceKeyframes = `
@keyframes scroll-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(8px); }
}
`;

export default function Hero() {
  return (
    <>
      <style>{bounceKeyframes}</style>
      <section
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(9,96,208,0.3) 0%, rgba(15,26,46,0.85) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="px-6 md:px-12"
        >
          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "rgba(244,237,224,0.8)",
              marginBottom: 16,
            }}
          >
            Kattenstrother Grillhaus · Seit 1974
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(64px, 10vw, 140px)",
              color: "#FCFEFD",
              lineHeight: 0.9,
              marginBottom: 24,
              fontWeight: 400,
            }}
          >
            DER GRIECHE
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              color: "rgba(244,237,224,0.9)",
              maxWidth: 480,
              lineHeight: 1.55,
              marginBottom: 40,
            }}
            className="text-base md:text-lg"
          >
            Handgemachtes Gyros. Griechische Gastfreundschaft. Seit 1974.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="tel:+4952411234567"
              style={{
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#556139")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#6B7C48")
              }
            >
              Tisch Reservieren
            </a>
            <a
              href="/speisekarte"
              style={{
                color: "#F4EDE0",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FCFEFD")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#F4EDE0")}
            >
              Zur Speisekarte →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            color: "rgba(244,237,224,0.6)",
            animation: "scroll-bounce 2s ease-in-out infinite",
          }}
          aria-hidden="true"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>
    </>
  );
}
