export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl space-y-16">

        <section>
          <p className="mb-2 text-sm uppercase tracking-widest text-ink/60">
            Display — Ancient Geek
          </p>
          <h1
            className="text-6xl text-brand md:text-8xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DER GRIECHE
          </h1>
        </section>

        <section>
          <p className="mb-2 text-sm uppercase tracking-widest text-ink/60">
            Body — DM Sans
          </p>
          <p className="text-lg leading-relaxed text-ink">
            Seit 1974 bereiten wir Gyros, Souvlaki und Bifteki nach
            traditionellem Familienrezept zu.
          </p>
        </section>

        <section>
          <p className="mb-4 text-sm uppercase tracking-widest text-ink/60">
            Farbpalette
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <div className="h-20 rounded bg-brand" />
            <div className="h-20 rounded border border-ink/10 bg-surface" />
            <div className="h-20 rounded bg-surface-warm" />
            <div className="h-20 rounded bg-accent" />
            <div className="h-20 rounded bg-ink" />
          </div>
        </section>

      </div>
    </main>
  );
}
