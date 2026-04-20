import type { Metadata } from "next";
import Meander from "@/components/Meander";
import SignatureCard from "@/components/sections/SignatureCard";

export const metadata: Metadata = {
  title: "Unsere Geschichte – Der Grieche",
  description:
    "Seit 1974 steht Der Grieche für Tradition, Familie und handgemachte griechische Küche in Gütersloh.",
};

const timeline = [
  {
    year: "Sommer 1974",
    heading: "Der Anfang",
    body: "Nikos Papadopoulos, 28 Jahre alt, verlässt sein Dorf in Thessalien mit einer Kochtasche voller Rezepte und dem Traum vom eigenen Restaurant. Im August eröffnet er an der Kattenstrother Straße ein kleines Grillhaus mit 18 Sitzplätzen. Die erste Speisekarte passt auf eine halbe DIN-A4-Seite: Gyros, Souvlaki, Bauernsalat.",
    detail: "18 Sitzplätze. Eine Küche. Eine Familie.",
  },
  {
    year: "Der Durchbruch",
    heading: "Das Stammgast-Wunder",
    body: "Mitte der 1980er ist das Grillhaus zur Institution geworden. Gütersloher kommen nicht nur zum Essen — sie kommen zu Nikos. Geburtstage, Verlobungen, Firmenfeiern: Der Grieche ist dabei. Das Lokal wächst auf 60 Plätze. Der Spieß dreht sich nun täglich von 11 bis Mitternacht.",
    detail: "60 Plätze. Ausgebucht am Wochenende seit 1987.",
  },
  {
    year: "Tradition Leben",
    heading: "Zweite Generation",
    body: "Nikos' Sohn Alexandros übernimmt das Ruder — und hält Kurs. Die Rezepte bleiben, das Feuer bleibt, die Gastfreundschaft bleibt. Nur das Interieur bekommt eine behutsame Frischekur. Der Grieche ist heute ein Ort, an dem drei Generationen Gütersloher an einem Tisch sitzen.",
    detail: "Seit 2018 in zweiter Generation geführt.",
  },
];

export default function UeberUns() {
  return (
    <main>
      {/* Mini-Hero */}
      <div className="flex min-h-[30vh] flex-col items-center justify-center bg-ink px-6 pb-10 pt-[calc(64px+3rem)] text-center">
        <h1
          className="font-display uppercase leading-none tracking-tight text-surface"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
        >
          Unsere Geschichte
        </h1>
        <div className="mt-6 w-full max-w-lg">
          <Meander variant="border" background="ink" className="opacity-30" />
        </div>
      </div>

      {/* Timeline */}
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="space-y-24 md:space-y-32">
            {timeline.map((station, i) => (
              <div
                key={i}
                className={`grid items-start gap-8 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Year / visual column */}
                <div
                  className={`flex flex-col ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}
                >
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-surface-warm">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)"
                            : i === 1
                              ? "linear-gradient(160deg, #1a1a2e 0%, #0d2a4a 100%)"
                              : "linear-gradient(120deg, #2e1a0a 0%, #1a2e1a 100%)",
                      }}
                    />
                    <div className="relative text-center">
                      <p
                        className="font-display uppercase leading-none tracking-tight text-surface/80"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                      >
                        {station.year}
                      </p>
                      <p className="mt-3 font-body text-xs uppercase tracking-[0.15em] text-surface/35">
                        {station.detail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text column */}
                <div
                  className={`flex flex-col justify-center ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}
                >
                  <div className="mb-4 h-px w-12 bg-brand" />
                  <h2
                    className="font-display uppercase leading-none tracking-tight text-ink"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                  >
                    {station.heading}
                  </h2>
                  <p className="mt-6 font-body text-base leading-relaxed text-ink/65 md:text-lg">
                    {station.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mäander transition */}
      <Meander variant="band" background="ink" />

      {/* Signature Card */}
      <SignatureCard />

      {/* Mäander into footer */}
      <Meander variant="band" background="ink" />
    </main>
  );
}
