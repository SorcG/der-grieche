import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – Der Grieche",
};

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-[860px] px-6 pb-24 pt-[calc(72px+4rem)] md:px-12">
      <h1
        className="font-display uppercase leading-none tracking-tight text-ink"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
      >
        Datenschutzerklärung
      </h1>

      <div className="mt-10 space-y-10 font-body text-base leading-relaxed text-ink/75">
        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            1. Datenschutz auf einen Blick
          </h2>
          <div className="mt-3 space-y-4">
            <h3 className="font-medium text-ink">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
            <h3 className="font-medium text-ink">
              Datenerfassung auf dieser Website
            </h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Die Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            2. Hosting
          </h2>
          <div className="mt-3">
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters gespeichert. Dies können insbesondere IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten sowie
              Websitezugriffe sein.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            3. Verantwortliche Stelle
          </h2>
          <div className="mt-3">
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <div className="mt-3 text-ink">
              <p className="font-medium">
                Der Grieche – Kattenstrother Grillhaus
              </p>
              <p>Nikos Papadopoulos</p>
              <p>Kattenstrother Straße 247</p>
              <p>33334 Gütersloh</p>
              <p className="mt-2">
                Telefon:{" "}
                <a
                  href="tel:+4952411234567"
                  className="text-brand hover:underline"
                >
                  05241 / 12 34 567
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@dergrieche-gt.de"
                  className="text-brand hover:underline"
                >
                  info@dergrieche-gt.de
                </a>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            4. Datenerfassung auf dieser Website
          </h2>
          <div className="mt-3 space-y-4">
            <h3 className="font-medium text-ink">Cookies</h3>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige
              Cookies. Es werden keine Tracking- oder Analyse-Cookies
              eingesetzt.
            </p>
            <h3 className="font-medium text-ink">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in Server-Log-Dateien, die Ihr Browser automatisch
              übermittelt. Dies sind: Browsertyp und -version, verwendetes
              Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners,
              Uhrzeit der Serveranfrage und IP-Adresse. Diese Daten sind nicht
              bestimmten Personen zuordenbar und werden nicht mit anderen
              Datenquellen zusammengeführt.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            5. Ihre Rechte
          </h2>
          <div className="mt-3 space-y-4">
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem das
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
            <p>
              Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
              können Sie diese Einwilligung jederzeit für die Zukunft
              widerrufen. Außerdem haben Sie das Recht, unter bestimmten
              Umständen die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
