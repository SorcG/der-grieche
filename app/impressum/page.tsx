export default function Impressum() {
  return (
    <main
      style={{
        backgroundColor: "#FCFEFD",
        minHeight: "100vh",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        {/* Hinweis-Banner */}
        <div
          style={{
            backgroundColor: "rgba(9,96,208,0.06)",
            border: "1px solid rgba(9,96,208,0.2)",
            borderRadius: 8,
            padding: "16px 24px",
            marginBottom: 48,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "#0960D0",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            <strong>Hinweis:</strong> Diese Website ist ein fiktives
            Showcase-Projekt von Klarteq (klarteq.de). Alle Angaben
            sind frei erfunden. Dies ist kein echtes Unternehmen.
          </p>
        </div>

        {/* Seitentitel */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "#0F1A2E",
            lineHeight: 1.0,
            marginBottom: 48,
          }}
        >
          IMPRESSUM
        </h1>

        {/* Angaben gemäß § 5 TMG */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B7C48",
              marginBottom: 16,
            }}
          >
            Angaben gemäß § 5 TMG
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(15,26,46,0.8)",
            }}
          >
            Der Grieche – Kattenstrother Grillhaus (fiktiv)<br />
            Kattenstrother Str. 100<br />
            33334 Gütersloh<br />
            Deutschland
          </p>
        </section>

        {/* Kontakt */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B7C48",
              marginBottom: 16,
            }}
          >
            Kontakt
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(15,26,46,0.8)",
            }}
          >
            Telefon: 05241 / 123456<br />
            E-Mail: info@der-grieche-guetersloh.de
          </p>
        </section>

        {/* Verantwortlich */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B7C48",
              marginBottom: 16,
            }}
          >
            Verantwortlich für den Inhalt
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(15,26,46,0.8)",
            }}
          >
            Dieses Showcase-Projekt wurde erstellt von:<br />
            Klarteq – Luca Sorci<br />
            Gütersloh, NRW<br />
            Web: klarteq.de
          </p>
        </section>

        {/* Haftungsausschluss */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B7C48",
              marginBottom: 16,
            }}
          >
            Haftungsausschluss
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              lineHeight: 1.7,
              color: "rgba(15,26,46,0.7)",
            }}
          >
            Diese Website ist ein fiktives Demonstrationsprojekt.
            Alle Inhalte, Personen, Adressen und Angaben sind frei
            erfunden. Eine Haftung für die Richtigkeit, Vollständigkeit
            oder Aktualität der bereitgestellten Informationen wird
            nicht übernommen.
          </p>
        </section>

        {/* Bildnachweise */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B7C48",
              marginBottom: 16,
            }}
          >
            Bildnachweise
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              lineHeight: 1.7,
              color: "rgba(15,26,46,0.7)",
            }}
          >
            Bilder: Unsplash.com (lizenzfrei). Fotografen werden
            gemäß Unsplash-Lizenz nicht namentlich genannt.
          </p>
        </section>

        {/* Zurück-Link */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#0960D0",
            textDecoration: "none",
          }}
        >
          ← Zurück zur Startseite
        </a>

      </div>
    </main>
  );
}
