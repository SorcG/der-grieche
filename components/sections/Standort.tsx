export default function Standort() {
  return (
    <section id="standort" className="bg-surface-warm py-24 md:py-32">
      <div className="mx-auto grid max-w-[1280px] items-start gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12">
        {/* Map placeholder — replace with Google Maps embed or custom map */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-ink/10">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
            <span className="font-body text-sm text-ink/30">[Google Maps Embed]</span>
            <span className="font-body text-xs text-ink/20">
              Kattenstrother Straße 247, Gütersloh
            </span>
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.15em] text-brand">
            Finden Sie uns
          </p>
          <h2
            className="font-display uppercase leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Zu Besuch
            <br />
            kommen
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-ink/45">
                Adresse
              </h3>
              <p className="mt-1 font-body text-base text-ink">
                Kattenstrother Straße 247
                <br />
                33334 Gütersloh
              </p>
            </div>

            <div>
              <h3 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-ink/45">
                Telefon
              </h3>
              <a
                href="tel:+4952411234567"
                className="mt-1 block font-body text-base text-ink transition-colors hover:text-brand"
              >
                05241 / 12 34 567
              </a>
            </div>

            <div>
              <h3 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-ink/45">
                Öffnungszeiten
              </h3>
              <table className="mt-2 font-body text-sm">
                <tbody>
                  <tr>
                    <td className="pb-1.5 pr-6 font-medium text-ink">Mo, Mi–Do</td>
                    <td className="pb-1.5 text-ink/65">11:30–14:30 · 17:00–22:30</td>
                  </tr>
                  <tr>
                    <td className="pb-1.5 pr-6 font-medium text-ink">Fr & Sa</td>
                    <td className="pb-1.5 text-ink/65">11:30–23:00</td>
                  </tr>
                  <tr>
                    <td className="pb-1.5 pr-6 font-medium text-ink">Sonntag</td>
                    <td className="pb-1.5 text-ink/65">12:00–22:00</td>
                  </tr>
                  <tr>
                    <td className="pr-6 font-medium text-ink/35">Dienstag</td>
                    <td className="text-ink/35">Ruhetag</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="tel:+4952411234567"
              className="inline-block rounded bg-accent px-8 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-surface transition-opacity hover:opacity-90"
            >
              Tisch reservieren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
