export default function Datenschutz() {
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
            fontSize: "clamp(32px, 5vw, 56px)",
            color: "#0F1A2E",
            lineHeight: 1.0,
            marginBottom: 48,
          }}
        >
          DATENSCHUTZ
        </h1>

        {/* Sections Helper */}
        {[
          {
            titel: "1. Verantwortlicher",
            text: `Verantwortlich für die Datenverarbeitung auf dieser
            Website ist Klarteq (Showcase-Projekt), Gütersloh.
            Kontakt: luca@klarteq.de`,
          },
          {
            titel: "2. Erhebung und Verarbeitung von Daten",
            text: `Diese Website erhebt keine personenbezogenen Daten.
            Es werden keine Cookies gesetzt, keine Tracking-Tools
            verwendet und keine Nutzerdaten gespeichert. Die Website
            dient ausschließlich als Demonstrationsprojekt.`,
          },
          {
            titel: "3. Hosting",
            text: `Diese Website wird über Vercel Inc. gehostet.
            Vercel kann technische Zugriffsdaten (Server-Logs) erfassen.
            Weitere Informationen finden Sie in der Datenschutzerklärung
            von Vercel: vercel.com/legal/privacy-policy`,
          },
          {
            titel: "4. Externe Inhalte",
            text: `Diese Website bindet Bilder von Unsplash.com ein.
            Beim Laden dieser Bilder kann Ihre IP-Adresse an die Server
            von Unsplash übermittelt werden. Weitere Informationen:
            unsplash.com/privacy`,
          },
          {
            titel: "5. Ihre Rechte",
            text: `Sie haben das Recht auf Auskunft, Berichtigung,
            Löschung und Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten. Da diese Website keine
            personenbezogenen Daten erhebt, entfällt dies in der Praxis.
            Bei Fragen: luca@klarteq.de`,
          },
          {
            titel: "6. Aktualität",
            text: `Diese Datenschutzerklärung gilt für das
            Showcase-Projekt "Der Grieche" von Klarteq.
            Stand: April 2026.`,
          },
        ].map(({ titel, text }) => (
          <section key={titel} style={{ marginBottom: 40 }}>
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
              {titel}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                lineHeight: 1.75,
                color: "rgba(15,26,46,0.75)",
                whiteSpace: "pre-line",
              }}
            >
              {text}
            </p>
          </section>
        ))}

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
