export default function Willkommen() {
  return (
    <section className="bg-surface-warm py-24 md:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12 lg:gap-24">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ink/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-6 text-center font-body text-sm text-ink/30">
              [Food-Foto: Gyros am Spieß]
            </span>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.15em] text-brand">
            Kalimera
          </p>
          <h2
            className="font-display uppercase leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Griechisch
            <br />
            wie bei
            <br />
            Yiayia
          </h2>

          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-ink/75">
            <p>
              Seit 1974 steht „Der Grieche" für das, was in Gütersloh selten
              geworden ist: echte Gastfreundschaft, handgemachtes Essen und
              Rezepte, die von Generation zu Generation weitergegeben wurden.
            </p>
            <p>
              Unser Gründer Nikos Papadopoulos brachte die Aromen seiner
              thessalischen Heimat mit nach Deutschland — das Feuer unter dem
              Spieß, den Duft von Oregano und Zitrone, die Wärme des
              gemeinsamen Tisches.
            </p>
            <p>
              Heute führt seine Familie das Haus in zweiter Generation. Die
              Rezepte sind geblieben. Nur der Bart von Nikos ist etwas grauer
              geworden.
            </p>
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="font-display text-2xl uppercase tracking-tight text-ink/50">
              Familie Papadopoulos
            </p>
            <p className="mt-1 font-body text-sm text-ink/35">
              Inhaber · Kattenstrother Grillhaus seit 1974
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
