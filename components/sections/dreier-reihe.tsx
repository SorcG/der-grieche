"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const sectionRef = useRef<HTMLElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const refs = [img1Ref, img2Ref, img3Ref];

      refs.forEach((ref, i) => {
        gsap.from(ref.current, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        });
      });

      // Leichter Parallax auf jedem Bild beim Scrollen
      refs.forEach((ref) => {
        gsap.to(ref.current, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const imgRefs = [img1Ref, img2Ref, img3Ref];

  return (
    <section
      ref={sectionRef}
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
              ref={imgRefs[i]}
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
