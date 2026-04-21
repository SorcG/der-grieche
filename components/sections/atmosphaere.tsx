"use client";

export default function Atmosphaere() {
  return (
    <section
      style={{
        position: "relative",
        height: "80vh",
        minHeight: 400,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[60vw] md:h-[80vh]"
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(15,26,46,0.4) 0%, rgba(15,26,46,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 56px)",
            color: "#F4EDE0",
            textAlign: "center",
            marginBottom: 24,
            fontWeight: 400,
          }}
        >
          SEIT 1974
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            lineHeight: 1.65,
            color: "rgba(244,237,224,0.9)",
            maxWidth: 560,
            textAlign: "center",
            marginBottom: 36,
          }}
          className="text-base md:text-lg"
        >
          Komm vorbei und erlebe griechische Gastfreundschaft, die man schmeckt.
          Bei uns ist jeder Tisch ein Stueck Griechenland.
        </p>

        <a
          href="/speisekarte"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#F4EDE0",
            textDecoration: "none",
            borderBottom: "1px solid rgba(244,237,224,0.4)",
            paddingBottom: 4,
            transition: "border-color 150ms ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderBottomColor = "rgba(244,237,224,1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderBottomColor = "rgba(244,237,224,0.4)")
          }
        >
          Unsere Speisekarte →
        </a>
      </div>
    </section>
  );
}
