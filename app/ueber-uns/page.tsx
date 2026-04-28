"use client";

import { useEffect, useRef } from "react";
import Meander from "@/components/ui/meander";
import SignatureCard from "@/components/sections/signature-card";
import GreekFigure from "@/components/ui/greek-figure";

type Station = {
  jahr: string;
  titel: string;
  text: string;
  seite: "links" | "rechts";
  bild?: string;
  bilder?: string[];
};

const stationen: Station[] = [
  {
    jahr: "2021",
    titel: "DER TRAUM WIRD WAHR",
    text: "Nach jahrelangem Traum eröffnet Aristidis Angelakopoulos gemeinsam mit seiner Frau Chrysovalantou und seinem Vater den Kattenstrother Grill an der Rhedaer Straße 30. Was der Vater einst mit dem Akropolis Grill begann, führt die nächste Generation nun in Gütersloh fort – mit Familienrezepten, griechischer Gastfreundschaft und einem Herz für echte Küche.",
    seite: "links",
    bild: "/images/gruendung.jpg",
  },
  {
    jahr: "2023",
    titel: "TEIL DER GEMEINSCHAFT",
    text: "Der Grieche übernimmt Verantwortung über den Tellerrand hinaus. Als Sponsor des ambitionierten Kreisligisten DSC Gütersloh – einem noch jungen Verein mit großen Zielen – zeigt die Familie Angelakopoulos: Wir sind Teil dieser Stadt. Ein Projekt das sie gerne von Anfang an unterstützen wollten.",
    seite: "rechts",
    bild: "/images/sponsoring.PNG",
  },
  {
    jahr: "2023",
    titel: "GRIECHISCHER SOMMER",
    text: "Mit der Eröffnung des Außenbereichs bringt Der Grieche griechisches Urlaubsfeeling nach Kattenstroth. Weiße Stühle, blaue Akzente, mediterranes Flair – mitten in Gütersloh.",
    seite: "links",
    bild: "/images/aussenbereich1.jpg",
  },
  {
    jahr: "Heute",
    titel: "MEHR ALS EIN IMBISS",
    text: "Der Grieche ist heute mehr als ein Imbiss – er ist ein Stück Heimat. Mit frischen Zutaten, Familienrezepten und einem Team das mit Herz dabei ist, bleibt die Küche das, was sie immer war: authentisch griechisch.",
    seite: "rechts",
    bild: "/images/theke.png",
  },
];

function StationContent({ station }: { station: Station }) {
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const jahrRef = useRef<HTMLParagraphElement>(null);
  const titelRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const xDir = station.seite === "links" ? -30 : 30;

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const photo = photoWrapRef.current;
    const jahr = jahrRef.current;
    const titel = titelRef.current;
    const text = textRef.current;

    if (photo) {
      photo.style.opacity = "0";
      photo.style.transform = "scale(0.95)";
      photo.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    }
    if (jahr) {
      jahr.style.opacity = "0";
      jahr.style.transform = `translateX(${xDir}px)`;
      jahr.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    }
    if (titel) {
      titel.style.opacity = "0";
      titel.style.transform = `translateX(${xDir}px)`;
      titel.style.transition = "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s";
    }
    if (text) {
      text.style.opacity = "0";
      text.style.transform = "translateY(20px)";
      text.style.transition = "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s";
    }

    const observers: IntersectionObserver[] = [];

    if (photo) {
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          photo.style.opacity = "1";
          photo.style.transform = "none";
          obs.disconnect();
        }
      }, { threshold: 0.2 });
      obs.observe(photo);
      observers.push(obs);
    }

    if (jahr) {
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (jahr) { jahr.style.opacity = "1"; jahr.style.transform = "none"; }
          if (titel) { titel.style.opacity = "1"; titel.style.transform = "none"; }
          if (text) { text.style.opacity = "1"; text.style.transform = "none"; }
          obs.disconnect();
        }
      }, { threshold: 0.2 });
      obs.observe(jahr);
      observers.push(obs);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, [xDir]);

  return (
    <div style={{ paddingBottom: 64 }} className="px-0 md:px-12">
      <div ref={photoWrapRef} style={{ marginBottom: 20 }}>
        {station.bilder ? (
          <>
            {station.bilder.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${station.titel} ${i + 1}`}
                style={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                  borderRadius: 12,
                  display: "block",
                  marginTop: i > 0 ? 12 : 0,
                }}
              />
            ))}
          </>
        ) : (
          <img
            src={station.bild ?? ""}
            alt={station.titel}
            style={{
              width: "100%",
              height: 280,
              objectFit: "cover",
              borderRadius: 12,
              display: "block",
            }}
          />
        )}
      </div>
      <p
        ref={jahrRef}
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
        ref={titelRef}
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
        ref={textRef}
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

function MobileStationCard({ station }: { station: Station }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const card = cardRef.current;
    if (!card) return;

    card.style.opacity = "0";
    card.style.transform = "translateY(24px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        card.style.opacity = "1";
        card.style.transform = "none";
        obs.disconnect();
      }
    }, { threshold: 0.15 });
    obs.observe(card);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={cardRef}>
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
      {station.bilder ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
          {station.bilder.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${station.titel} ${i + 1}`}
              style={{
                width: "100%",
                aspectRatio: "3/2",
                objectFit: "cover",
                borderRadius: 12,
                display: "block",
              }}
            />
          ))}
        </div>
      ) : (
        <img
          src={station.bild ?? ""}
          alt={station.titel}
          style={{
            width: "100%",
            aspectRatio: "3/2",
            objectFit: "cover",
            borderRadius: 12,
            display: "block",
            marginBottom: 16,
          }}
        />
      )}
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
  );
}

export default function UeberUnsPage() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const figureRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);

  // Hero mount animation
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const title = heroTitleRef.current;
    const subtitle = heroSubtitleRef.current;

    if (title) {
      title.style.opacity = "0";
      title.style.transform = "translateY(-40px)";
      title.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      setTimeout(() => {
        title.style.opacity = "1";
        title.style.transform = "none";
      }, 100);
    }

    if (subtitle) {
      subtitle.style.opacity = "0";
      subtitle.style.transition = "opacity 0.7s ease";
      setTimeout(() => {
        subtitle.style.opacity = "1";
      }, 400);
    }
  }, []);

  // Intro text scroll animation
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const intro = introRef.current;
    if (!intro) return;

    intro.style.opacity = "0";
    intro.style.transform = "translateY(30px)";
    intro.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        intro.style.opacity = "1";
        intro.style.transform = "none";
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(intro);
    return () => obs.disconnect();
  }, []);

  // GreekFigure scroll animation
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const figure = figureRef.current;
    if (!figure) return;

    figure.style.opacity = "0";
    figure.style.transform = "scale(0.8)";
    figure.style.transition = "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s";

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        figure.style.opacity = "1";
        figure.style.transform = "none";
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(figure);
    return () => obs.disconnect();
  }, []);

  // SignatureCard persistent slide animation
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const sig = signatureRef.current;
    if (!sig) return;

    sig.style.transform = "translateX(-80px)";
    sig.style.opacity = "0";
    sig.style.transition = "transform 0.7s ease, opacity 0.7s ease";

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        sig.style.transform = "none";
        sig.style.opacity = "1";
      } else {
        sig.style.transform = "translateX(-80px)";
        sig.style.opacity = "0";
      }
    }, { threshold: 0.2 });
    obs.observe(sig);
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "35vh",
          minHeight: 280,
          backgroundImage: "url('/images/haus3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 28%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(9,26,46,0.55)",
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
            ref={heroTitleRef}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 6vw, 80px)",
              color: "#FCFEFD",
              lineHeight: 1.0,
              fontWeight: 400,
              textAlign: "center",
              marginBottom: 16,
              textShadow:
                "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 2px 2px 6px rgba(0,0,0,0.5)",
            }}
          >
            UNSERE GESCHICHTE
          </h1>
          <p
            ref={heroSubtitleRef}
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

      <div style={{ padding: "12px 0" }}>
        <Meander variant="divider" />
      </div>

      {/* Intro text */}
      <div
        style={{
          backgroundColor: "#F4EDE0",
          padding: "64px 48px",
        }}
        className="px-6 md:px-12 py-12 md:py-16"
      >
        <p
          ref={introRef}
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
                width: 220,
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <div
                ref={figureRef}
                style={{
                  position: "sticky",
                  top: 80,
                  display: "flex",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <GreekFigure width={220} />
              </div>
            </div>

            {/* Timeline-Stationen */}
            {stationen.map((station) => (
              <div
                key={station.titel}
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
              <MobileStationCard key={station.titel} station={station} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "12px 0" }}>
        <Meander variant="divider" />
      </div>

      <div ref={signatureRef}>
        <SignatureCard />
      </div>
    </div>
  );
}
