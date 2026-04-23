"use client";

import Meander from "@/components/ui/meander";
import FadeIn from "@/components/ui/fade-in";
import SignatureCard from "@/components/sections/signature-card";
import GreekFigure from "@/components/ui/greek-figure";

const stationen = [
  {
    jahr: "1974",
    titel: "DIE GRUENDUNG",
    text: "Panagiotis eroeffnet seine erste kleine Taverne an der Kattenstrother Strasse. Mit wenig mehr als einem Gyros-Spieß und einem Familienrezept beginnt eine Geschichte, die Guetersloh fuer immer veraendern wird.",
    seite: "links" as const,
    bild: "/images/sitzbereich.png",
  },
  {
    jahr: "1989",
    titel: "DER DURCHBRUCH",
    text: "Nach Jahren harter Arbeit ist Der Grieche in aller Munde. Die Warteschlangen reichen bis auf die Strasse. Panagiotis holt seine Familie aus Griechenland nach, um den Ansturm zu bewaeltigen.",
    seite: "rechts" as const,
    bild: "/images/spiess-schneiden.png",
  },
  {
    jahr: "2003",
    titel: "NEUE RAEUME",
    text: "Der Grieche zieht in groessere Raeumlichkeiten um. Das neue Restaurant fasst 80 Gaeste und bietet erstmals einen Biergarten. Die Atmosphaere bleibt famililaer, das Rezept unveraendert.",
    seite: "links" as const,
    bild: "/images/tzatziki.png",
  },
  {
    jahr: "Heute",
    titel: "ERFOLG UND TRADITION",
    text: "Heute fuehrt die zweite Generation die Tradition fort. Die Rezepte sind dieselben, die Leidenschaft unvermindert. Der Grieche ist und bleibt ein Stueck Guetersloh.",
    seite: "rechts" as const,
    bild: "/images/gyrosteller.png",
  },
];

function StationContent({ station }: { station: (typeof stationen)[number] }) {
  return (
    <FadeIn direction={station.seite === "links" ? "right" : "left"}>
      <div style={{ paddingBottom: 64 }} className="px-0 md:px-12">
        <img
          src={station.bild}
          alt={station.titel}
          style={{
            width: "100%",
            aspectRatio: "3/2",
            objectFit: "cover",
            borderRadius: 8,
            display: "block",
            marginBottom: 20,
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#6B7C48",
            marginBottom: 8,
          }}
        >
          {station.jahr}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(24px, 2.5vw, 36px)",
            color: "#0F1A2E",
            fontWeight: 400,
            marginBottom: 16,
          }}
        >
          {station.titel}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            lineHeight: 1.7,
            color: "rgba(15,26,46,0.75)",
          }}
        >
          {station.text}
        </p>
      </div>
    </FadeIn>
  );
}

function TimelineMarker({ jahr }: { jahr: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 8,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          backgroundColor: "#0960D0",
          border: "3px solid #F4EDE0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 10,
            fontWeight: 700,
            color: "#FCFEFD",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {jahr}
        </span>
      </div>
    </div>
  );
}

export default function UeberUnsPage() {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "35vh",
          minHeight: 280,
          backgroundImage:
            "url('/images/sitzbereich.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(15,26,46,0.8)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 24px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 6vw, 80px)",
              color: "#FCFEFD",
              lineHeight: 1.0,
              fontWeight: 400,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            UNSERE GESCHICHTE
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "rgba(244,237,224,0.8)",
            }}
          >
            Der Grieche · Seit 1974
          </p>
        </div>
      </div>

      <Meander background="warm" height={48} />

      {/* Intro text */}
      <div
        style={{
          backgroundColor: "#F4EDE0",
          padding: "64px 48px",
        }}
        className="px-6 md:px-12 py-12 md:py-16"
      >
        <p
          style={{
            maxWidth: 720,
            margin: "0 auto",
            textAlign: "center",
            fontFamily: "var(--font-body)",
            fontSize: 18,
            lineHeight: 1.75,
            color: "rgba(15,26,46,0.8)",
          }}
        >
          Was 1974 als kleine Taverne in Guetersloh begann, ist heute ein fester
          Bestandteil der Stadt. Drei Generationen, eine Leidenschaft:
          authentische griechische Kueche.
        </p>
      </div>

      <Meander background="warm" height={24} />

      {/* Timeline */}
      <div
        style={{
          backgroundColor: "#F4EDE0",
          padding: "80px 48px",
        }}
        className="px-6 md:px-12 py-16 md:py-20"
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          {/* Desktop timeline */}
          <div className="hidden lg:block" style={{ position: "relative" }}>

            {/* Vertikale Mittellinie */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: 2,
                top: 0,
                bottom: 0,
                backgroundColor: "rgba(9,96,208,0.2)",
              }}
              aria-hidden="true"
            />

            {/* Griechische Figur – sticky auf der Mittellinie */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translateX(-50%)",
                width: 80,
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  position: "sticky",
                  top: 120,
                  display: "flex",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <GreekFigure width={72} />
              </div>
            </div>

            {/* Timeline-Stationen */}
            {stationen.map((station) => (
              <div
                key={station.jahr}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 80px 1fr",
                  alignItems: "start",
                }}
              >
                {station.seite === "links" ? (
                  <StationContent station={station} />
                ) : (
                  <div />
                )}

                {/* Jahres-Marker */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 8 }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#0960D0",
                      border: "2px solid #F4EDE0",
                      zIndex: 1,
                      marginTop: 16,
                    }}
                  />
                </div>

                {station.seite === "rechts" ? (
                  <StationContent station={station} />
                ) : (
                  <div />
                )}
              </div>
            ))}
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {stationen.map((station) => (
              <div key={station.jahr}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                  <TimelineMarker jahr={station.jahr} />
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(20px, 5vw, 28px)",
                      color: "#0F1A2E",
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {station.titel}
                  </h3>
                </div>
                <img
                  src={station.bild}
                  alt={station.titel}
                  style={{
                    width: "100%",
                    aspectRatio: "3/2",
                    objectFit: "cover",
                    borderRadius: 8,
                    display: "block",
                    marginBottom: 16,
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(15,26,46,0.75)",
                  }}
                >
                  {station.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Meander background="warm" height={48} />

      <SignatureCard />
    </div>
  );
}
