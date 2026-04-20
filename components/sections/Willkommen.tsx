export default function Willkommen() {
  return (
    <section className="bg-surface-warm">
      {/* Desktop: 3-col grid with diagonal image cuts */}
      <div className="hidden md:grid md:min-h-[70vh] md:grid-cols-[2fr_380px_2fr]">
        {/* Left image */}
        <div className="relative overflow-hidden bg-ink/15">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: "polygon(0 0, 100% 0, calc(100% - 80px) 100%, 0 100%)",
              background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)",
            }}
          >
            <span className="px-6 text-center font-body text-sm text-surface/25">
              [Food-Foto: Gyros am Spieß]
            </span>
          </div>
        </div>

        {/* Center text */}
        <div className="flex flex-col justify-center px-8 py-16">
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.15em] text-brand">
            Kalimera
          </p>
          <h2
            className="font-display uppercase leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
          >
            Griechisch
            <br />
            wie bei
            <br />
            Yiayia
          </h2>

          <div className="mt-6 space-y-4 font-body text-sm leading-relaxed text-ink/70">
            <p>
              Seit 1974 steht „Der Grieche" für echte Gastfreundschaft,
              handgemachtes Essen und Rezepte, die von Generation zu Generation
              weitergegeben wurden.
            </p>
            <p>
              Gründer Nikos Papadopoulos brachte die Aromen seiner thessalischen
              Heimat mit nach Deutschland — das Feuer unter dem Spieß, den Duft
              von Oregano und Zitrone, die Wärme des gemeinsamen Tisches.
            </p>
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="font-display text-xl uppercase tracking-tight text-ink/40">
              Familie Papadopoulos
            </p>
            <p className="mt-1 font-body text-xs text-ink/30">
              Inhaber · Kattenstrother Grillhaus seit 1974
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className="relative overflow-hidden bg-ink/10">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: "polygon(80px 0, 100% 0, 100% 100%, 0 100%)",
              background: "linear-gradient(225deg, #1a1a2e 0%, #2d2d4a 100%)",
            }}
          >
            <span className="px-6 text-center font-body text-sm text-surface/25">
              [Tavernen-Innenraum]
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="md:hidden">
        <div className="relative aspect-[16/9] overflow-hidden bg-ink/15">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)",
            }}
          >
            <span className="px-4 text-center font-body text-sm text-surface/25">
              [Food-Foto: Gyros am Spieß]
            </span>
          </div>
        </div>

        <div className="px-6 py-12">
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.15em] text-brand">
            Kalimera
          </p>
          <h2
            className="font-display uppercase leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(2.5rem, 8vw, 3.5rem)" }}
          >
            Griechisch
            <br />
            wie bei
            <br />
            Yiayia
          </h2>

          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-ink/70">
            <p>
              Seit 1974 steht „Der Grieche" für echte Gastfreundschaft,
              handgemachtes Essen und Rezepte, die von Generation zu Generation
              weitergegeben wurden.
            </p>
            <p>
              Gründer Nikos Papadopoulos brachte die Aromen seiner thessalischen
              Heimat mit nach Deutschland — das Feuer unter dem Spieß, den Duft
              von Oregano und Zitrone, die Wärme des gemeinsamen Tisches.
            </p>
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="font-display text-2xl uppercase tracking-tight text-ink/40">
              Familie Papadopoulos
            </p>
            <p className="mt-1 font-body text-sm text-ink/30">
              Inhaber · Kattenstrother Grillhaus seit 1974
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
