const images = [
  { label: "Innenraum: Holztische, griechische Dekoration", wide: true },
  { label: "Terrasse: Abendstimmung", wide: false },
  { label: "Detail: Tischgedeck, Ouzo-Gläser", wide: false },
  { label: "Ambiente: Kerzenlicht, Wanddekoration", wide: true },
];

export default function Atmosphaere() {
  return (
    <section id="atmosphaere" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2
            className="font-display uppercase leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Bei uns ist jeder
            <br />
            Tisch familiär.
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/55 md:text-lg">
            Ein Platz, an dem Gäste zu Stammgästen und Stammgäste zu Freunden
            werden.
          </p>
        </div>

        {/* Gallery — parallax added later via GSAP */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg bg-surface-warm ${
                img.wide ? "col-span-2 aspect-[3/2]" : "aspect-[3/2]"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-4 text-center font-body text-xs text-ink/30">
                  [{img.label}]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
