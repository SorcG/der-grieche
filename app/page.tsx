import Meander from "@/components/Meander";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-surface">
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.18em] text-brand">
          Gütersloh · Seit 1974
        </p>

        <h1 className="font-display text-7xl uppercase tracking-tight text-ink sm:text-9xl">
          Der Grieche
        </h1>

        <p className="mt-2 font-display text-3xl uppercase tracking-tight text-accent sm:text-5xl">
          Kattenstrother Grillhaus
        </p>

        <div className="my-10 w-full max-w-xl">
          <Meander color="#0960D0" animated />
        </div>

        <p className="max-w-md font-body text-lg leading-relaxed text-ink">
          Authentisch griechisch — frisch vom Grill, herzlich serviert.
        </p>

        <a
          href="#menu"
          className="mt-8 inline-block rounded bg-accent px-8 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-surface transition-opacity hover:opacity-90"
        >
          Speisekarte ansehen
        </a>
      </section>
    </main>
  );
}
