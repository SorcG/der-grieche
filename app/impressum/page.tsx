import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Der Grieche",
};

export default function Impressum() {
  return (
    <main className="mx-auto max-w-[860px] px-6 pb-24 pt-[calc(72px+4rem)] md:px-12">
      <h1
        className="font-display uppercase leading-none tracking-tight text-ink"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
      >
        Impressum
      </h1>

      <div className="mt-10 space-y-10 font-body text-base leading-relaxed text-ink/75">
        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            Angaben gemäß § 5 TMG
          </h2>
          <div className="mt-3">
            <p className="font-medium text-ink">
              Der Grieche – Kattenstrother Grillhaus
            </p>
            <p>Nikos Papadopoulos</p>
            <p>Kattenstrother Straße 247</p>
            <p>33334 Gütersloh</p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            Kontakt
          </h2>
          <div className="mt-3 space-y-1">
            <p>
              Telefon:{" "}
              <a
                href="tel:+4952411234567"
                className="text-brand transition-colors hover:underline"
              >
                05241 / 12 34 567
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@dergrieche-gt.de"
                className="text-brand transition-colors hover:underline"
              >
                info@dergrieche-gt.de
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            Umsatzsteuer-ID
          </h2>
          <div className="mt-3">
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a
              Umsatzsteuergesetz:
            </p>
            <p className="mt-1 font-medium text-ink">DE 123 456 789</p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            Verantwortlich für den Inhalt
          </h2>
          <div className="mt-3">
            <p>
              Nikos Papadopoulos
              <br />
              Kattenstrother Straße 247
              <br />
              33334 Gütersloh
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            Streitschlichtung
          </h2>
          <div className="mt-3">
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <span className="text-ink/50">https://ec.europa.eu/consumers/odr</span>. Wir
              sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            Haftung für Inhalte
          </h2>
          <div className="mt-3">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
            Haftung für Links
          </h2>
          <div className="mt-3">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
