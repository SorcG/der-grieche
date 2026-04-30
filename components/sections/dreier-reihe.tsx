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
  const mobileImg1Ref = useRef<HTMLDivElement>(null);
  const mobileImg2Ref = useRef<HTMLDivElement>(null);
  const mobileImg3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const refs = [img1Ref, img2Ref, img3Ref];

      refs.forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          {
            opacity: 0,
            scale: 1.15,
            y: 40,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "none",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: 1.5,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 1024) return;

    const elements = [
      mobileImg1Ref.current,
      mobileImg2Ref.current,
      mobileImg3Ref.current,
    ];
    if (elements.some((e) => !e)) return;

    elements.forEach((el) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(60px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const observers: IntersectionObserver[] = [];

    elements.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${i * 150}ms`;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          } else {
            el.style.transitionDelay = "0ms";
            el.style.opacity = "0";
            el.style.transform = "translateY(60px)";
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const imgRefs = [img1Ref, img2Ref, img3Ref];
  const mobileImgRefs = [mobileImg1Ref, mobileImg2Ref, mobileImg3Ref];

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
        {bilder.map((bild, i) => (
          <div
            key={bild.src}
            ref={mobileImgRefs[i]}
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
