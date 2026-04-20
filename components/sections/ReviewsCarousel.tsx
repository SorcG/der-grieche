const reviews = [
  {
    name: "Marie K.",
    rating: 5,
    date: "März 2026",
    text: "Absolut authentisch! Das Gyros schmeckt wie in Griechenland. Wir kommen seit Jahren hierher und die Qualität ist immer gleich hervorragend.",
  },
  {
    name: "Thomas B.",
    rating: 5,
    date: "Februar 2026",
    text: "Der beste Grieche in OWL, ohne Frage. Das Bifteki mit Feta-Füllung ist ein Traum. Service freundlich und schnell.",
  },
  {
    name: "Sandra W.",
    rating: 5,
    date: "Januar 2026",
    text: "Familiäre Atmosphäre, herzlicher Empfang. Die Meze-Platte für zwei war riesig und unglaublich lecker. Sehr empfehlenswert!",
  },
  {
    name: "Klaus M.",
    rating: 5,
    date: "Dezember 2025",
    text: "Seit 20 Jahren mein Lieblingsrestaurant in Gütersloh. Nikos und sein Team machen einfach alles richtig. Danke für die vielen schönen Abende!",
  },
  {
    name: "Anna P.",
    rating: 5,
    date: "November 2025",
    text: "Vegetarische Optionen werden hier groß geschrieben. Tzatziki, Melitzanosalata, Dolmades — alles frisch und hausgemacht. Sehr zu empfehlen!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill="#FBBC05"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  return (
    <section className="overflow-hidden bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid items-start gap-12 md:grid-cols-[320px_1fr] md:gap-16">
          {/* Heading column */}
          <div className="md:sticky md:top-32">
            <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.15em] text-brand">
              Was unsere Gäste sagen
            </p>
            <h2
              className="font-display uppercase leading-none tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Google
              <br />
              Bewertungen
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <Stars count={5} />
              <span className="font-body text-sm text-ink/55">
                4,9 · 183 Bewertungen
              </span>
            </div>
            <p className="mt-3 font-body text-xs text-ink/35">via Google Maps</p>
          </div>

          {/* Scrollable cards */}
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {reviews.map((review, i) => (
              <article
                key={i}
                className="w-72 flex-shrink-0 snap-start rounded-lg border border-ink/10 bg-surface p-6 md:w-80"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-body text-sm font-medium text-ink">
                      {review.name}
                    </p>
                    <p className="font-body text-xs text-ink/40">{review.date}</p>
                  </div>
                  <Stars count={review.rating} />
                </div>
                <p className="font-body text-sm leading-relaxed text-ink/65">
                  „{review.text}"
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
