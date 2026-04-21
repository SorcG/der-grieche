import FadeIn from "@/components/ui/fade-in";

export default function DreierReihe() {
  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    borderRadius: 8,
  };

  const cellStyle: React.CSSProperties = {
    aspectRatio: "1/1",
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  };

  return (
    <section
      style={{
        backgroundColor: "#0F1A2E",
        padding: "64px 24px",
      }}
      className="py-12 md:py-16"
    >
      <div
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >
        {/* Desktop: 3 columns */}
        <div
          className="hidden md:grid"
          style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}
        >
          <FadeIn delay={0}>
            <div style={cellStyle}>
              <img
                src="https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?w=800&q=80&fit=crop"
                alt="Griechisches Essen"
                style={imgStyle}
              />
            </div>
          </FadeIn>

          {/* Middle: video slot placeholder */}
          <FadeIn delay={0.15}>
            <div style={cellStyle}>
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80&fit=crop"
                alt="Video-Platzhalter: Gyros am Spieß"
                style={imgStyle}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden="true"
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    backgroundColor: "rgba(252,254,253,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                    <path d="M5 3l9 5-9 5V3z" />
                  </svg>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div style={cellStyle}>
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&fit=crop"
                alt="Grill-Atmosphäre"
                style={imgStyle}
              />
            </div>
          </FadeIn>
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            {
              src: "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?w=800&q=80&fit=crop",
              alt: "Griechisches Essen",
              video: false,
            },
            {
              src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80&fit=crop",
              alt: "Video-Platzhalter",
              video: true,
            },
            {
              src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&fit=crop",
              alt: "Grill-Atmosphäre",
              video: false,
            },
          ].map((item) => (
            <div key={item.src} style={{ height: 280, borderRadius: 8, overflow: "hidden", position: "relative" }}>
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {item.video && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-hidden="true"
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "rgba(252,254,253,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                      <path d="M5 3l9 5-9 5V3z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
