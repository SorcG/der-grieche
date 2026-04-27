"use client";

import { useState } from "react";
import Meander from "@/components/ui/meander";

type Gericht = {
  nr?: string;
  name: string;
  beschreibung?: string;
  preis: string;
};

type Kategorie = {
  id: string;
  name: string;
  gerichte: Gericht[];
};

const speisekarte: Kategorie[] = [
  {
    id: "vorspeisen",
    name: "Vorspeisen",
    gerichte: [
      { nr: "1", name: "Fetakäse überbacken (scharf)", beschreibung: "Tomatensauce, Öl und Pitabrot", preis: "7,50 €" },
      { nr: "1a", name: "Gigandes (dicke Bohnen)", beschreibung: "mit Fetakäse überbacken", preis: "8,50 €" },
      { nr: "2", name: "Zaziki", preis: "4,50 €" },
      { nr: "3", name: "Saganaki", beschreibung: "gebratener Fetakäse", preis: "6,00 €" },
      { nr: "4", name: "Oliven und Peperoni", preis: "4,80 €" },
      { nr: "4a", name: "Gegrillte Peperoni", beschreibung: "mit Knoblauchöl", preis: "5,00 €" },
      { nr: "5", name: "Krautsalat", preis: "3,50 €" },
      { nr: "6", name: "Saganaki mit Sesam und Honig", beschreibung: "gebratener Fetakäse", preis: "6,80 €" },
      { nr: "7", name: "Überbackene 3 Käse-Sorten mit Pitabrot", beschreibung: "Feta, Edamer, Mozzarella, Tomaten, Paprika, Olivenöl und Oregano", preis: "8,50 €" },
      { nr: "8", name: "Bauernsalat mit Pitabrot", beschreibung: "Tomaten, Gurken, Zwiebeln, Fetakäse, Oliven, Krautsalat, Olivenöl, Paprika", preis: "10,00 €" },
      { nr: "9", name: "Fitness-Salat mit Hähnchenbrust", beschreibung: "Eisbergsalat, Tomaten, Gurken, Zwiebeln, Paprika, Edamer-Käse, Hähnchenbrust-Filet, Olivenöl & Balsamico", preis: "11,00 €" },
      { nr: "9a", name: "Fitness-Salat mit Gyros", beschreibung: "Eisbergsalat, Tomaten, Gurken, Zwiebeln, Paprika, Edamer-Käse, Gyros, Olivenöl & Balsamico", preis: "11,00 €" },
      { nr: "9b", name: "Fitness-Salat mit Thunfisch", beschreibung: "Eisbergsalat, Tomaten, Gurken, Zwiebeln, Paprika, Edamer-Käse, Thunfisch, Olivenöl & Balsamico", preis: "11,00 €" },
    ],
  },
  {
    id: "saucen",
    name: "Saucen & Beilagen",
    gerichte: [
      { name: "Zaziki", preis: "1,50 €" },
      { name: "Metaxasauce", preis: "1,50 €" },
      { name: "Ketchup", preis: "0,50 €" },
      { name: "Mayonnaise", preis: "0,50 €" },
      { name: "Mediterrane Sauce", preis: "1,00 €" },
    ],
  },
  {
    id: "schnellgerichte",
    name: "Schnellgerichte",
    gerichte: [
      { nr: "10", name: "Bratwurst", preis: "3,00 €" },
      { nr: "11", name: "Currywurst", preis: "3,50 €" },
      { nr: "12", name: "Pommes", preis: "3,00 €" },
      { nr: "13", name: "Vegetarische Pita", beschreibung: "Feta, Krautsalat, Tomaten, Pommes, Zwiebeln und Zaziki", preis: "6,50 €" },
      { nr: "14", name: "Gütersloher-Teller", beschreibung: "Gyros mit Zwiebeln, Currywurst mit Zwiebeln, Reis, Krautsalat", preis: "11,00 €" },
      { nr: "15", name: "Kattenstrother-Teller", beschreibung: "Gyros, Currywurst, Zaziki, Zwiebeln, Pommes mit Mayonnaise", preis: "12,00 €" },
      { nr: "16", name: "Pommes griechischer Art", beschreibung: "Metaxasauce, Fetakäse und griech. Oregano", preis: "5,00 €" },
      { nr: "17", name: "Pita Santouits", beschreibung: "Gyros, Zwiebeln, Pommes, Tomaten", preis: "6,80 €" },
      { nr: "18", name: "Gyros-Box", beschreibung: "Gyros, Pommes, Zwiebeln und Sauce nach Wahl", preis: "7,30 €" },
      { nr: "19", name: "Die scharfe Gyros-Box", beschreibung: "Gyros, Pommes oder Reis, Jalapenos", preis: "7,30 €" },
    ],
  },
  {
    id: "gyros",
    name: "Gyros",
    gerichte: [
      { nr: "20", name: "Gyros Pita", beschreibung: "Gyros, Krautsalat, Zwiebeln", preis: "6,80 €" },
      { nr: "21", name: "Gyros Pita mit Zaziki", beschreibung: "Gyros, Krautsalat, Zwiebeln mit Zaziki", preis: "7,30 €" },
      { nr: "22", name: "Gyros Pita Classic", beschreibung: "Gyros, Pommes, Tomaten, Zwiebeln und Zaziki", preis: "7,30 €" },
      { nr: "23", name: "Gyros Pita Sparta", beschreibung: "Gyros, Zwiebeln, Tomaten, Edamer-Käse, Metaxasauce und Pommes", preis: "11,50 €" },
      { nr: "24", name: "Gyros mit Pommes und Zwiebeln", preis: "11,00 €" },
      { nr: "25", name: "Gyros mit Krautsalat und Zwiebeln", preis: "11,00 €" },
      { nr: "26", name: "Gyros mit Zaziki und Zwiebeln", preis: "11,00 €" },
      { nr: "27", name: "Gyros mit Zwiebeln, Krautsalat und Zaziki", preis: "12,00 €" },
      { nr: "28", name: "Gyros mit Zwiebeln, Pommes und Krautsalat", preis: "12,00 €" },
      { nr: "29", name: "Gyros mit Zwiebeln, Pommes und Zaziki", preis: "12,00 €" },
      { nr: "30", name: "Gyros-Teller mit Zwiebeln, Pommes, Krautsalat und Zaziki", preis: "13,00 €" },
    ],
  },
  {
    id: "grill",
    name: "Vom Grill",
    gerichte: [
      { nr: "31", name: "Souvlaki-Teller", beschreibung: "2 Spieße, Pommes, Krautsalat, Zwiebeln", preis: "13,00 €" },
      { nr: "32", name: "Hähnchenbrustfilet-Teller", beschreibung: "Hähnchenbrustfilet, Pommes, Krautsalat, Zwiebeln", preis: "13,50 €" },
      { nr: "32a", name: "Mediterrane Hähnchenbrustfilet-Teller", beschreibung: "Hähnchenbrust, Pommes, grüne Bohnen, Fetakäse und mediterrane Sauce, Zwiebeln", preis: "16,50 €" },
      { nr: "32b", name: "Hähnchenbrust Stifado", beschreibung: "Hähnchenbrust mit kleinen Zwiebeln in Tomatensauce, Pommes, Krautsalat", preis: "17,00 €" },
      { nr: "33", name: "Schweinesteak-Teller", beschreibung: "Steaks, Pommes, Krautsalat, Zwiebeln", preis: "12,50 €" },
      { nr: "34", name: "Bifteki-Teller", beschreibung: "2 Bifteki mit Feta gefüllt, Pommes & Krautsalat, Zwiebeln", preis: "15,00 €" },
      { nr: "34a", name: "Bifteki-Teller ohne Füllung", beschreibung: "3 Bifteki ohne Füllung, Pommes & Krautsalat, Zwiebeln", preis: "14,00 €" },
      { nr: "34b", name: "Bifteki-Teller mit Edamer", beschreibung: "2 Bifteki gefüllt mit Edamer Käse, Tomaten & Paprika, Pommes, Krautsalat, Zwiebeln", preis: "16,00 €" },
      { nr: "35", name: "Lammkoteletts-Teller", beschreibung: "mit Pommes, Krautsalat, Zwiebeln", preis: "18,50 €" },
      { nr: "36", name: "Olympia Platte", beschreibung: "Gyros mit Zwiebeln, 1 Souvlaki, Krautsalat, Zaziki, Pommes und Reis", preis: "15,50 €" },
      { nr: "37", name: "Santorini Platte", beschreibung: "Gyros mit Zwiebeln, 1 Hähnchenbrustfilet, 1 Souvlaki, Krautsalat, Zaziki, Pommes und Reis", preis: "17,00 €" },
      { nr: "38", name: "Zakynthos Platte", beschreibung: "Gyros mit Zwiebeln, 1 Steak, 1 Schweinefilet, Krautsalat, Zaziki, Pommes und Reis", preis: "17,00 €" },
      { nr: "39", name: "Naxos Platte", beschreibung: "Gyros mit Zwiebeln, 2 Bifteki, Krautsalat, Zaziki, Pommes und Reis", preis: "16,50 €" },
      { nr: "40", name: "Athen Platte", beschreibung: "Gyros mit Zwiebeln, 2 Lammkoteletts, 1 Souvlaki, Krautsalat, Zaziki, Pommes und Reis", preis: "19,00 €" },
      { nr: "41", name: "Ouzo Platte", beschreibung: "Gyros mit Zwiebeln, 2 Lammkoteletts, 1 Bifteki, Krautsalat, Zaziki, Pommes und Reis", preis: "18,50 €" },
      { nr: "42", name: "Troja Platte", beschreibung: "Gyros mit Zwiebeln, Bifteki gefüllt mit Feta, Krautsalat, Zaziki, Pommes und Reis", preis: "16,50 €" },
      { nr: "43", name: "Akropolis Platte", beschreibung: "Gyros mit Zwiebeln, 1 Souvlaki, 1 Steak, Krautsalat, Zaziki, Pommes und Reis", preis: "16,50 €" },
      { nr: "44", name: "Rhodos Platte", beschreibung: "Gyros mit Zwiebeln, 2 Schweinefilet, Krautsalat, Zaziki, Pommes und Reis", preis: "17,50 €" },
      { nr: "45", name: "Kyllini Platte", beschreibung: "Gyros mit Zwiebeln, 1 Souvlaki, 1 Schweinefilet, Krautsalat, Zaziki, Pommes und Reis", preis: "17,50 €" },
      { nr: "46", name: "Mykonos Platte", beschreibung: "Gyros mit Zwiebeln, 1 Steak, 1 Bifteki, Krautsalat, Zaziki, Pommes und Reis", preis: "16,00 €" },
      { nr: "47", name: "Metaxa Platte", beschreibung: "Gyros mit Metaxasauce und Zwiebeln, 1 Schweinefilet, 1 Bifteki, Krautsalat, Zaziki, Pommes und Reis", preis: "17,50 €" },
      { nr: "48", name: "Aristoteles Platte", beschreibung: "Gyros mit Zwiebeln, 1 Souvlaki, 1 Bifteki, Krautsalat, Zaziki, Pommes und Reis", preis: "16,50 €" },
      { nr: "49", name: "Schweinefilet", beschreibung: "3 Schweinefilet, Krautsalat, Pommes, Zwiebeln, Reis & Zaziki", preis: "18,00 €" },
      { nr: "50", name: "Sokrates Platte", beschreibung: "2 Souvlaki, Bifteki gefüllt mit Feta, Bauernsalat, Zaziki, Zwiebeln, Pommes & Reis", preis: "19,50 €" },
      { nr: "51", name: "Hellenen Platte", beschreibung: "Gyros, 1 Souvlaki, 1 Steak, 1 Hähnchenbrustfilet, Bauernsalat, Zaziki, Zwiebeln, Pommes und Reis", preis: "20,00 €" },
    ],
  },
  {
    id: "ueberbackenes",
    name: "Überbackenes",
    gerichte: [
      { nr: "52", name: "Gyros überbacken", beschreibung: "Gyros, Käse, Metaxasauce, Krautsalat und Reis", preis: "14,50 €" },
      { nr: "53", name: "Schweinesteak überbacken", beschreibung: "Steaks, Käse, Metaxasauce, Krautsalat und Reis", preis: "14,50 €" },
      { nr: "54", name: "Hähnchenbrustfilet überbacken", beschreibung: "Hähnchenbrustfilet, Käse, Metaxasauce, Krautsalat und Reis", preis: "15,50 €" },
      { nr: "55", name: "Bifteki überbacken mit Feta", beschreibung: "Hackfleisch gefüllt mit Feta Käse, Metaxasauce, Krautsalat, Reis", preis: "16,00 €" },
      { nr: "55a", name: "Bifteki überbacken ohne Füllung", beschreibung: "Hackfleisch ohne Füllung, Käse, Metaxasauce, Krautsalat, Reis", preis: "15,00 €" },
      { nr: "55b", name: "Bifteki überbacken mit Edamer", beschreibung: "Hackfleisch gefüllt mit Edamer-Käse, Tomate & Paprika in Metaxasauce, dazu Krautsalat & Reis", preis: "17,00 €" },
      { nr: "56", name: "Gyros-Spezial überbacken", beschreibung: "Gyros & Pommes überbacken mit Käse, Metaxasauce, Krautsalat", preis: "14,50 €" },
      { nr: "57", name: "Pommes überbacken", beschreibung: "Pommes, Käse, Metaxasauce", preis: "6,50 €" },
      { nr: "58", name: "Gyros überbacken Hollandaise", beschreibung: "Gyros, Käse, Sauce Hollandaise, Krautsalat und Reis", preis: "16,00 €" },
      { nr: "59", name: "Gigantes – Griechische dicke Bohnen", beschreibung: "Gyros mit Fetakäse in Tomatensauce überbacken + Pitabrot", preis: "15,00 €" },
      { nr: "60", name: "Grüne Bohnen mit Hähnchenbrustfilet überbacken", beschreibung: "Griechische grüne Bohnen, Hähnchenbrustfilet mit Fetakäse in Tomatensauce überbacken + Pitabrot", preis: "15,00 €" },
      { nr: "60a", name: "Schweinefilet überbacken", beschreibung: "3 Schweinefilet, Käse, Metaxasauce, Krautsalat und Reis", preis: "20,00 €" },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    gerichte: [
      { nr: "61", name: "Margherita", beschreibung: "Tomatensauce und Käse", preis: "8,00 €" },
      { nr: "62", name: "Pizza Tonno", beschreibung: "Tomatensauce, Käse, Thunfisch und Zwiebeln", preis: "11,50 €" },
      { nr: "63", name: "Salami Pizza", beschreibung: "Tomatensauce, Käse, Salami", preis: "9,50 €" },
      { nr: "64", name: "Capriciosa", beschreibung: "Tomatensauce, Käse, Champignons und Schinken", preis: "11,00 €" },
      { nr: "65", name: "Pizza Schinken", beschreibung: "Tomatensauce, Käse, Schinken und Zwiebeln", preis: "10,50 €" },
      { nr: "66", name: "Metaxa-Pizza", beschreibung: "Metaxasauce, Käse und Gyros", preis: "12,50 €" },
      { nr: "67", name: "Gousto", beschreibung: "Tomatensauce, Käse, Champignons, Paprika und Zwiebeln", preis: "11,00 €" },
      { nr: "68", name: "Gyros-Pizza", beschreibung: "Tomatensauce, Käse, Gyros, Zwiebeln", preis: "12,50 €" },
      { nr: "69", name: "Kefalonia", beschreibung: "Tomatensauce, Käse, Salami, Peperoni, Feta, Oliven", preis: "11,50 €" },
      { nr: "70", name: "Kalameta", beschreibung: "Tomatensauce, Käse, Feta, frische Tomaten, Oliven und Zwiebeln", preis: "11,50 €" },
      { nr: "71", name: "Kreta", beschreibung: "Tomatensauce, Käse, Gyros, Feta, Oliven, Paprika", preis: "13,50 €" },
      { nr: "72", name: "Herkules", beschreibung: "Tomatensauce, Käse, Gyros, Pommes", preis: "12,50 €" },
      { nr: "73", name: "Pizza Hollandaise", beschreibung: "Sauce Hollandaise, Käse und Gyros", preis: "13,00 €" },
    ],
  },
  {
    id: "kinder",
    name: "Für Kinder",
    gerichte: [
      { nr: "74", name: "Gyros mit Pommes und Krautsalat", preis: "9,50 €" },
      { nr: "75", name: "Steak mit Pommes und Krautsalat", preis: "9,50 €" },
      { nr: "76", name: "Hähnchenbrustfilet mit Pommes und Krautsalat", preis: "9,50 €" },
      { nr: "77", name: "Bifteki gefüllt mit Feta", beschreibung: "dazu Pommes und Krautsalat", preis: "10,50 €" },
      { nr: "78", name: "Bifteki gefüllt mit Edamer-Käse", beschreibung: "Tomate & Paprika, dazu Pommes und Krautsalat", preis: "11,00 €" },
    ],
  },
  {
    id: "getraenke",
    name: "Alkoholfrei & Getränke",
    gerichte: [
      { name: "Coca Cola, Fanta, Sprite", preis: "3,50 €" },
      { name: "Apfelschorle", preis: "3,00 €" },
      { name: "Multi", preis: "3,00 €" },
      { name: "Alkoholfreies Bier (Krombacher)", preis: "3,30 €" },
      { name: "Alkoholfreies Weizen (Erdinger)", preis: "4,30 €" },
      { name: "Erdinger Weizen", preis: "4,30 €" },
      { name: "Mythos (Griechisches Bier)", preis: "3,50 €" },
      { name: "Krombacher", preis: "3,30 €" },
      { name: "Becks", preis: "3,30 €" },
    ],
  },
  {
    id: "wein",
    name: "Wein & Sekt",
    gerichte: [
      { name: "Retsina", preis: "6,50 €" },
      { name: "Mostra (Flasche)", preis: "8,00 €" },
      { name: "Rot-, Rosé- oder Weißwein (trocken oder lieblich)", preis: "8,00 €" },
      { name: "Likörwein (Flasche)", preis: "17,00 €" },
      { name: "Samos (weiß)", preis: "17,00 €" },
      { name: "Mavrodaphne (Rot)", preis: "17,00 €" },
    ],
  },
];

export default function Speisekarte() {
  const [offen, setOffen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOffen(offen === id ? null : id);
  };

  return (
    <main style={{ backgroundColor: "#FCFEFD", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{
        backgroundColor: "#0F1A2E",
        padding: "80px 48px 64px",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(244,237,224,0.6)",
          marginBottom: 16,
        }}>
          Kattenstrother Grillhaus
        </p>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(48px, 8vw, 96px)",
          color: "#FCFEFD",
          lineHeight: 0.9,
          marginBottom: 24,
          textShadow: "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 2px 2px 6px rgba(0,0,0,0.5)",
        }}>
          SPEISEKARTE
        </h1>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          color: "rgba(244,237,224,0.7)",
          maxWidth: 480,
          margin: "0 auto",
          lineHeight: 1.6,
        }}>
          Rhedaer Str. 30 · 33330 Gütersloh · Tel. 052415059777
        </p>
      </div>

      <div style={{ padding: "12px 0" }}><Meander variant="divider" /></div>

      {/* Accordion */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {speisekarte.map((kategorie) => {
          const istOffen = offen === kategorie.id;
          return (
            <div
              key={kategorie.id}
              style={{
                borderBottom: "1px solid rgba(9,96,208,0.15)",
                marginBottom: 0,
              }}
            >
              {/* Kategorie-Header */}
              <button
                onClick={() => toggle(kategorie.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "24px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  fontSize: "clamp(24px, 4vw, 36px)",
                  color: istOffen ? "#0960D0" : "#0F1A2E",
                  lineHeight: 1,
                  transition: "color 0.2s ease",
                }}>
                  {kategorie.name.toUpperCase()}
                </span>
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 20,
                  color: "#0960D0",
                  transform: istOffen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  display: "inline-block",
                  marginLeft: 16,
                  flexShrink: 0,
                }}>
                  +
                </span>
              </button>

              {/* Gerichte-Liste */}
              {istOffen && (
                <div style={{ paddingBottom: 32 }}>
                  {kategorie.gerichte.map((gericht, i) => (
                    <div key={i}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 16,
                        padding: "12px 0",
                      }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                            {gericht.nr && (
                              <span style={{
                                fontFamily: "var(--font-body)",
                                fontSize: 11,
                                color: "#0960D0",
                                fontWeight: 500,
                                minWidth: 28,
                                flexShrink: 0,
                              }}>
                                {gericht.nr}.
                              </span>
                            )}
                            <span style={{
                              fontFamily: "var(--font-body)",
                              fontSize: 16,
                              fontWeight: 500,
                              color: "#0F1A2E",
                              lineHeight: 1.4,
                            }}>
                              {gericht.name}
                            </span>
                          </div>
                          {gericht.beschreibung && (
                            <p style={{
                              fontFamily: "var(--font-body)",
                              fontSize: 13,
                              color: "rgba(15,26,46,0.55)",
                              marginTop: 4,
                              lineHeight: 1.5,
                              paddingLeft: gericht.nr ? 36 : 0,
                            }}>
                              {gericht.beschreibung}
                            </p>
                          )}
                        </div>
                        <span style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 15,
                          fontWeight: 500,
                          color: "#0960D0",
                          flexShrink: 0,
                          whiteSpace: "nowrap",
                        }}>
                          {gericht.preis}
                        </span>
                      </div>
                      {i < kategorie.gerichte.length - 1 && (
                        <div style={{
                          height: 1,
                          backgroundColor: "rgba(9,96,208,0.08)",
                          margin: "0",
                        }} />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Hinweis Pizza */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "rgba(15,26,46,0.5)",
          marginTop: 40,
          textAlign: "center",
        }}>
          Jede weitere Pizzazutat +1,00 € · Jede weitere Gyros-Pita-Zutat +0,50 €
        </p>
      </div>

    </main>
  );
}
