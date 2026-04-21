"use client";

import { useState, useEffect } from "react";
import Meander from "@/components/ui/meander";

const kategorien = [
  {
    id: "gyros",
    label: "Gyros",
    gerichte: [
      { name: "Gyros Teller", beschreibung: "Klassischer Gyros-Teller mit Pommes und Tzatziki", preis: "9,90 €" },
      { name: "Doppelte Portion Gyros", beschreibung: "Fuer den grossen Hunger", preis: "14,90 €" },
      { name: "Gyros mit Pommes", beschreibung: "Gyros und knusprige Pommes Frites", preis: "9,00 €" },
      { name: "Gyros mit Reis", beschreibung: "Gyros auf Basmati-Reis mit Gyrossauce", preis: "9,50 €" },
      { name: "Gyros Bauernsalat", beschreibung: "Gyros auf frischem griechischem Salat", preis: "11,90 €" },
    ],
  },
  {
    id: "pita",
    label: "Gyros Pita",
    gerichte: [
      { name: "Gyros Pita", beschreibung: "Gyros im Fladenbrot mit Tzatziki und Zwiebeln", preis: "4,50 €" },
      { name: "Gyros Pita Deluxe", beschreibung: "Mit extra Tzatziki, Tomaten und Pommes", preis: "6,90 €" },
      { name: "Bauern Pita", beschreibung: "Mit Fetakaese, Zwiebeln und Krautsalat", preis: "5,80 €" },
    ],
  },
  {
    id: "grill",
    label: "Vom Grill",
    gerichte: [
      { name: "Souvlaki", beschreibung: "Gegrillte Schweinefleischspiesse mit Beilagen", preis: "12,90 €" },
      { name: "Bifteki", beschreibung: "Griechische Hackfleischrolle mit Fetakaese", preis: "13,90 €" },
      { name: "Lammkoteletts", beschreibung: "Zarte Lammkoteletts vom Grill, 3 Stueck", preis: "18,90 €" },
      { name: "Haehnchenspieß", beschreibung: "Mariniertes Haehnchen vom Holzkohlengrill", preis: "11,90 €" },
      { name: "Gemischter Grillteller", beschreibung: "Gyros, Souvlaki und Bifteki in einer Portion", preis: "19,90 €" },
    ],
  },
  {
    id: "vorspeisen",
    label: "Vorspeisen",
    gerichte: [
      { name: "Tzatziki", beschreibung: "Hausgemacht mit frischem Knoblauch und Dill", preis: "3,90 €" },
      { name: "Taramosalata", beschreibung: "Griechischer Kaviar-Dip", preis: "4,50 €" },
      { name: "Melitzanosalata", beschreibung: "Gebackener Auberginen-Dip", preis: "4,50 €" },
      { name: "Mezedes-Platte", beschreibung: "Auswahl aus 4 Dips mit frischem Fladenbrot", preis: "12,90 €" },
      { name: "Saganaki", beschreibung: "Gebratener Fetakaese mit Sesam und Honig", preis: "7,90 €" },
    ],
  },
  {
    id: "beilagen",
    label: "Beilagen & Salate",
    gerichte: [
      { name: "Pommes Frites", beschreibung: "Knusprig frittiert", preis: "3,50 €" },
      { name: "Bauernsalat", beschreibung: "Tomaten, Gurken, Oliven, Fetakaese", preis: "7,90 €" },
      { name: "Griechisches Fladenbrot", beschreibung: "Frisch gebacken, mit Olivenoel", preis: "2,50 €" },
      { name: "Reis", beschreibung: "Basmati-Reis", preis: "2,90 €" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    gerichte: [
      { name: "Baklava", beschreibung: "Blaetterteig mit Nuessen und Honig", preis: "4,90 €" },
      { name: "Galaktoboureko", beschreibung: "Griechischer Griesauflauf im Blaetterteig", preis: "5,50 €" },
      { name: "Loukoumades", beschreibung: "Griechische Honigkrapfen mit Zimt", preis: "5,90 €" },
    ],
  },
];

export default function SpeisekartePage() {
  const [activeKategorie, setActiveKategorie] = useState("gyros");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveKategorie(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    kategorien.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "40vh",
          minHeight: 320,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(15,26,46,0.75)",
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
              fontSize: "clamp(48px, 8vw, 96px)",
              color: "#FCFEFD",
              lineHeight: 1.0,
              fontWeight: 400,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            SPEISEKARTE
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
            Kattenstrother Grillhaus · Guetersloh
          </p>
        </div>
      </div>

      <Meander background="surface" height={48} />

      {/* Sticky category nav */}
      <div
        style={{
          position: "sticky",
          top: 64,
          zIndex: 40,
          backgroundColor: "#FCFEFD",
          borderBottom: "1px solid rgba(9,96,208,0.1)",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "0 48px",
            minWidth: "max-content",
          }}
          className="px-6 md:px-12"
        >
          {kategorien.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "16px 20px",
                background: "none",
                border: "none",
                borderBottom:
                  activeKategorie === id
                    ? "2px solid #0960D0"
                    : "2px solid transparent",
                color:
                  activeKategorie === id
                    ? "#0960D0"
                    : "rgba(15,26,46,0.6)",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) => {
                if (activeKategorie !== id)
                  e.currentTarget.style.color = "#0960D0";
              }}
              onMouseLeave={(e) => {
                if (activeKategorie !== id)
                  e.currentTarget.style.color = "rgba(15,26,46,0.6)";
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu content */}
      <div
        style={{
          backgroundColor: "#FCFEFD",
          padding: "64px 48px",
        }}
        className="px-6 md:px-12 py-12 md:py-16"
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {kategorien.map(({ id, label, gerichte }, ki) => (
            <section
              key={id}
              id={id}
              style={{ marginBottom: ki < kategorien.length - 1 ? 64 : 0 }}
            >
              {/* Category header */}
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3vw, 48px)",
                  color: "#0F1A2E",
                  fontWeight: 400,
                  marginBottom: 8,
                }}
              >
                {label}
              </h2>
              <div style={{ marginBottom: 32 }}>
                <Meander background="surface" height={16} />
              </div>

              {/* Dishes */}
              {gerichte.map((gericht, gi) => (
                <div
                  key={gericht.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    borderBottom:
                      gi < gerichte.length - 1
                        ? "1px solid rgba(15,26,46,0.08)"
                        : "none",
                    padding: "16px 0",
                    gap: 16,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        fontWeight: 500,
                        color: "#0F1A2E",
                        margin: 0,
                      }}
                    >
                      {gericht.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        color: "rgba(15,26,46,0.55)",
                        marginTop: 4,
                        margin: "4px 0 0",
                      }}
                    >
                      {gericht.beschreibung}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#0960D0",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {gericht.preis}
                  </span>
                </div>
              ))}
            </section>
          ))}

          {/* Allergen notice */}
          <div
            style={{
              marginTop: 64,
              paddingTop: 32,
              borderTop: "1px solid rgba(15,26,46,0.1)",
              fontSize: 12,
              color: "rgba(15,26,46,0.5)",
              lineHeight: 1.6,
              fontFamily: "var(--font-body)",
            }}
          >
            <p>
              <strong>Allergene:</strong> Unsere Gerichte koennen Spuren von
              Gluten, Laktose, Nuessen und anderen Allergenen enthalten. Bitte
              informieren Sie unser Personal bei Unvertraeglichkeiten.
            </p>
            <p style={{ marginTop: 8 }}>
              Alle Preise inkl. MwSt. Aenderungen vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
