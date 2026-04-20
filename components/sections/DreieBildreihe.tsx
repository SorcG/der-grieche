export default function DreieBildreihe() {
  return (
    <section className="bg-ink">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left image */}
        <div className="relative aspect-square overflow-hidden bg-ink/60 flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #0f1a2e 0%, #1a2e20 60%, #0f1a2e 100%)",
            }}
          />
          <span className="relative px-4 text-center font-body text-xs text-surface/20">
            [Küche: Fleisch würzen]
          </span>
        </div>

        {/* Center: video */}
        <div className="relative aspect-square overflow-hidden bg-ink/80">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
          {/* Fallback placeholder visible until video loads */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              {/* Play-circle hint */}
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
                [Video: Spieß drehen]
              </span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative aspect-square overflow-hidden bg-ink/60 flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(20deg, #0f1a2e 0%, #2e1a0f 60%, #0f1a2e 100%)",
            }}
          />
          <span className="relative px-4 text-center font-body text-xs text-surface/20">
            [Anrichten: Gyros-Teller]
          </span>
        </div>
      </div>
    </section>
  );
}
