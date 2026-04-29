"use client";

import { useState, useEffect, useRef } from "react";
import FadeIn from "@/components/ui/fade-in";

const reviews = [
  {
    name: "Maria K.",
    rating: 5,
    text: "Das beste Gyros in ganz Gütersloh. Die Atmosphäre ist familiär und das Personal immer freundlich. Wir kommen seit Jahren hierher!",
    date: "vor 2 Wochen",
  },
  {
    name: "Thomas B.",
    rating: 5,
    text: "Authentische griechische Küche wie man sie sich wünscht. Das Souvlaki ist einfach unschlagbar. Sehr zu empfehlen!",
    date: "vor 1 Monat",
  },
  {
    name: "Sandra M.",
    rating: 5,
    text: "Wir haben hier unseren Hochzeitstag gefeiert und es war perfekt. Das Essen war fantastisch, der Service aufmerksam. Danke!",
    date: "vor 3 Wochen",
  },
  {
    name: "Klaus H.",
    rating: 5,
    text: "Endlich ein griechisches Restaurant das wirklich authentisch ist. Das Bifteki schmilzt auf der Zunge. Immer wieder gerne!",
    date: "vor 2 Monaten",
  },
  {
    name: "Julia R.",
    rating: 5,
    text: "Schnell, sauber, höflich und ein Familienbetrieb. Für mich immer die erste Wahl wenn ich griechisch essen möchte.",
    date: "vor 1 Woche",
  },
];

function GoogleG() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.77h5.4a4.62 4.62 0 0 1-2 3.04v2.52h3.22c1.89-1.74 2.98-4.3 2.98-7.33z"
        fill="#4285F4"
      />
      <path
        d="M10 20c2.7 0 4.96-.9 6.62-2.44l-3.22-2.52c-.9.6-2.04.96-3.4.96-2.6 0-4.8-1.76-5.59-4.12H1.1v2.6A10 10 0 0 0 10 20z"
        fill="#34A853"
      />
      <path
        d="M4.41 11.88A6.01 6.01 0 0 1 4.1 10c0-.65.11-1.28.31-1.88V5.52H1.1A10 10 0 0 0 0 10c0 1.61.38 3.14 1.1 4.48l3.31-2.6z"
        fill="#FBBC04"
      />
      <path
        d="M10 3.96c1.47 0 2.79.5 3.82 1.5l2.86-2.86A9.93 9.93 0 0 0 10 0 10 10 0 0 0 1.1 5.52l3.31 2.6C5.2 5.72 7.4 3.96 10 3.96z"
        fill="#EA4335"
      />
    </svg>
  );
}

function StarRow({ count }: { count: number }) {
  return (
    <span style={{ color: "#F4B942", fontSize: 14, letterSpacing: 1 }}>
      {"★".repeat(count)}
    </span>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div
      style={{
        backgroundColor: "#FCFEFD",
        border: "1px solid rgba(9,96,208,0.12)",
        borderRadius: 8,
        padding: 24,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 500,
            color: "#0F1A2E",
          }}
        >
          {review.name}
        </span>
        <GoogleG />
      </div>

      {/* Stars */}
      <StarRow count={review.rating} />

      {/* Date */}
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          color: "rgba(15,26,46,0.5)",
        }}
      >
        {review.date}
      </span>

      {/* Text */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          lineHeight: 1.6,
          color: "rgba(15,26,46,0.8)",
          margin: 0,
        }}
      >
        {review.text}
      </p>
    </div>
  );
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleCount = 3;
  const maxIndex = reviews.length - visibleCount;

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, maxIndex]);

  return (
    <section
      style={{
        backgroundColor: "#FCFEFD",
        padding: "96px 48px",
      }}
      className="py-16 md:py-24 px-6 md:px-12"
    >
      <FadeIn>
        <div
          className="lg:grid"
          style={{ display: "block", maxWidth: 1280, margin: "0 auto" }}
        >
          {/* Desktop two-column */}
          <div
            className="hidden lg:grid"
            style={{ gridTemplateColumns: "30% 70%", gap: 64, alignItems: "start" }}
          >
            {/* Left: headline block */}
            <div style={{ paddingTop: 8 }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#6B7C48",
                  marginBottom: 16,
                }}
              >
                Das sagen unsere Gäste
              </p>
              <h2
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "clamp(32px, 3vw, 52px)",
                  color: "#0F1A2E",
                  lineHeight: 1.0,
                  marginBottom: 24,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                ECHTE STIMMEN
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(15,26,46,0.7)",
                }}
              >
                Über 200 Bewertungen auf Google. Durchschnittlich 4.9 Sterne.
              </p>
              <span
                style={{
                  display: "inline-block",
                  marginTop: 32,
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#0960D0",
                  border: "1px solid #0960D0",
                  padding: "8px 16px",
                  borderRadius: 4,
                }}
              >
                Ausgezeichnet ★★★★★
              </span>
            </div>

            {/* Right: carousel */}
            <CarouselArea
              currentIndex={currentIndex}
              visibleCount={visibleCount}
              maxIndex={maxIndex}
              paused={paused}
              setPaused={setPaused}
              prev={prev}
              next={next}
              setCurrentIndex={setCurrentIndex}
            />
          </div>

          {/* Mobile: stacked */}
          <div className="lg:hidden">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#6B7C48",
                marginBottom: 16,
              }}
            >
              Das sagen unsere Gäste
            </p>
            <h2
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "clamp(32px, 8vw, 48px)",
                color: "#0F1A2E",
                lineHeight: 1.0,
                marginBottom: 24,
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              ECHTE STIMMEN
            </h2>
            <div style={{ marginBottom: 32 }}>
              <ReviewCard review={reviews[currentIndex]} />
            </div>
            <MobileNav
              currentIndex={currentIndex}
              total={reviews.length}
              prev={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              next={() => setCurrentIndex((i) => Math.min(reviews.length - 1, i + 1))}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function CarouselArea({
  currentIndex,
  visibleCount,
  maxIndex,
  paused,
  setPaused,
  prev,
  next,
  setCurrentIndex,
}: {
  currentIndex: number;
  visibleCount: number;
  maxIndex: number;
  paused: boolean;
  setPaused: (v: boolean) => void;
  prev: () => void;
  next: () => void;
  setCurrentIndex: (i: number) => void;
}) {
  const visible = reviews.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
          gap: 16,
          marginBottom: 24,
        }}
      >
        {visible.map((r) => (
          <ReviewCard key={r.name} review={r} />
        ))}
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <NavButton onClick={prev} disabled={currentIndex === 0} dir="prev" />
        <NavButton onClick={next} disabled={currentIndex >= maxIndex} dir="next" />
        <div style={{ display: "flex", gap: 8, marginLeft: 8 }}>
          {Array.from({ length: reviews.length - visibleCount + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Review ${i + 1}`}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                padding: 0,
                backgroundColor:
                  i === currentIndex ? "#0960D0" : "rgba(9,96,208,0.2)",
                transition: "background-color 200ms ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNav({
  currentIndex,
  total,
  prev,
  next,
  setCurrentIndex,
}: {
  currentIndex: number;
  total: number;
  prev: () => void;
  next: () => void;
  setCurrentIndex: (i: number) => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <NavButton onClick={prev} disabled={currentIndex === 0} dir="prev" />
      <NavButton onClick={next} disabled={currentIndex >= total - 1} dir="next" />
      <div style={{ display: "flex", gap: 8, marginLeft: 8 }}>
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Review ${i + 1}`}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              padding: 0,
              backgroundColor:
                i === currentIndex ? "#0960D0" : "rgba(9,96,208,0.2)",
              transition: "background-color 200ms ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function NavButton({
  onClick,
  disabled,
  dir,
}: {
  onClick: () => void;
  disabled: boolean;
  dir: "prev" | "next";
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Vorheriges Review" : "Nächstes Review"}
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        border: "1px solid #0960D0",
        backgroundColor: "transparent",
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: disabled ? "rgba(9,96,208,0.3)" : "#0960D0",
        borderColor: disabled ? "rgba(9,96,208,0.3)" : "#0960D0",
        transition: "color 150ms ease, border-color 150ms ease",
        padding: 0,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = "#6B7C48";
          e.currentTarget.style.borderColor = "#6B7C48";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = "#0960D0";
          e.currentTarget.style.borderColor = "#0960D0";
        }
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        {dir === "prev" ? (
          <path d="M8 2L4 6l4 4" />
        ) : (
          <path d="M4 2l4 4-4 4" />
        )}
      </svg>
    </button>
  );
}
