"use client";

import FadeIn from "@/components/ui/fade-in";

const bilder = [
  {
    src: "/images/bifteki.png",
    alt: "Bifteki auf Schieferplatte mit Tzatziki und Pita",
  },
  {
    src: "/images/mixed-greek.png",
    alt: "Griechische Mezze-Auswahl mit Tomatenreis und Haenchen",
  },
  {
    src: "/images/mythos-ouzo.png",
    alt: "Griechische Getraenke: Mythos Bier und Ouzo",
  },
];

export default function DreierReihe() {
  return (
    <section
      style={{
        backgroundColor: "#0F1A2E",
        padding: "64px 48px",
      }}
    >
      {/* Desktop: drei Bilder nebeneinander */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 12,
        }}
      >
        {bilder.map((bild, i) => (
          <FadeIn key={bild.src} delay={i * 0.15}>
            <div
              style={{
                borderRadius: 8,
                overflow: "hidden",
                aspectRatio: "4/3",
              }}
            >
              <img
                src={bild.src}
                alt={bild.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Mobile: Bilder untereinander */}
      <div
        className="flex flex-col md:hidden"
        style={{ gap: 12 }}
      >
        {bilder.map((bild) => (
          <div
            key={bild.src}
            style={{
              borderRadius: 8,
              overflow: "hidden",
              aspectRatio: "16/9",
            }}
          >
            <img
              src={bild.src}
              alt={bild.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
