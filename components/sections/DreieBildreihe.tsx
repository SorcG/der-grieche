import FadeIn from "@/components/FadeIn";

const cells = [
  {
    label: "[Küche: Fleisch würzen]",
    bg: "linear-gradient(160deg, #0f1a2e 0%, #1a2e20 60%, #0f1a2e 100%)",
    video: false,
  },
  {
    label: "[Video: Spieß drehen]",
    bg: "",
    video: true,
  },
  {
    label: "[Anrichten: Gyros-Teller]",
    bg: "linear-gradient(20deg, #0f1a2e 0%, #2e1a0f 60%, #0f1a2e 100%)",
    video: false,
  },
];

export default function DreieBildreihe() {
  return (
    <section className="bg-ink">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {cells.map((cell, i) => (
          <FadeIn key={i} delay={i * 0.15} direction="none">
            <div className="relative aspect-square overflow-hidden bg-ink/60">
              {cell.video ? (
                <>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <svg
                        viewBox="0 0 48 48"
                        className="h-12 w-12 text-surface/15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <circle cx="24" cy="24" r="22" />
                        <polygon
                          points="20,16 34,24 20,32"
                          fill="currentColor"
                          stroke="none"
                          className="text-surface/15"
                        />
                      </svg>
                      <span className="font-body text-xs text-surface/20">
                        {cell.label}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="absolute inset-0"
                    style={{ background: cell.bg }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="px-4 text-center font-body text-xs text-surface/20">
                      {cell.label}
                    </span>
                  </div>
                </>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
