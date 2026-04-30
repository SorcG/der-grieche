"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Meander from "@/components/ui/meander";
import FadeIn from "@/components/ui/fade-in";

export default function Willkommen() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const mobileTopRef = useRef<HTMLDivElement>(null);
  const mobileTextRef = useRef<HTMLDivElement>(null);
  const mobileBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const triggerConfig = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top 20%",
        scrub: 1.5,
      };

      gsap.fromTo(
        leftImageRef.current,
        { xPercent: 100 },
        { xPercent: 0, ease: "none", scrollTrigger: triggerConfig }
      );

      gsap.fromTo(
        rightImageRef.current,
        { xPercent: -100 },
        { xPercent: 0, ease: "none", scrollTrigger: triggerConfig }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 1024) return;

    const top = mobileTopRef.current;
    const text = mobileTextRef.current;
    const bottom = mobileBottomRef.current;
    if (!top || !text || !bottom) return;

    top.style.transform = "translateY(0)";
    top.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    top.style.opacity = "1";

    text.style.opacity = "0";
    text.style.transition = "opacity 0.8s ease";

    bottom.style.transform = "translateY(0)";
    bottom.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    bottom.style.opacity = "1";

    const container = top.parentElement;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          top.style.transform = "translateY(-100%)";
          top.style.opacity = "0";
          text.style.opacity = "1";
          bottom.style.transform = "translateY(100%)";
          bottom.style.opacity = "0";
        } else {
          top.style.transform = "translateY(0)";
          top.style.opacity = "1";
          text.style.opacity = "0";
          bottom.style.transform = "translateY(0)";
          bottom.style.opacity = "1";
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#FCFEFD", minHeight: 600, overflow: "hidden" }}>
      {/* Desktop: 3-column grid */}
      <div
        className="hidden lg:grid"
        style={{ gridTemplateColumns: "1fr 1fr 1fr", minHeight: 600 }}
      >
        {/* Left image */}
        <div ref={leftImageRef} style={{ overflow: "hidden", position: "relative", zIndex: 2 }}>
          <img
            src="/images/tzatziki.png"
            alt="Griechisches Essen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
            }}
          />
        </div>

        {/* Center text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "48px 32px",
            backgroundColor: "#FCFEFD",
          }}
        >
          <FadeIn delay={0.2}>
            <WillkommenText />
          </FadeIn>
        </div>

        {/* Right image */}
        <div ref={rightImageRef} style={{ overflow: "hidden", position: "relative", zIndex: 2 }}>
          <img
            src="/images/gyrosteller.png"
            alt="Griechische Taverne"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="lg:hidden" style={{ overflow: "hidden" }}>
        <div ref={mobileTopRef} style={{ height: 300, overflow: "hidden" }}>
          <img
            src="/images/tzatziki.png"
            alt="Griechisches Essen"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div ref={mobileTextRef} style={{ padding: "48px 24px", backgroundColor: "#FCFEFD" }}>
          <WillkommenText />
        </div>
        <div ref={mobileBottomRef} style={{ height: 300, overflow: "hidden" }}>
          <img
            src="/images/gyrosteller.png"
            alt="Griechische Taverne"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

function WillkommenText() {
  return (
    <>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "#6B7C48",
          marginBottom: 8,
        }}
      >
        Willkommen bei
      </p>

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(36px, 4vw, 64px)",
          color: "#FFFFFF",
          lineHeight: 1.0,
          marginBottom: 24,
          fontWeight: 400,
          textShadow: "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 2px 2px 6px rgba(0,0,0,0.5)",
        }}
      >
        DER GRIECHE
      </h2>

      <div style={{ marginBottom: 24 }}>
        <Meander variant="divider" />
      </div>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          lineHeight: 1.65,
          color: "rgba(15,26,46,0.8)",
          marginBottom: 16,
        }}
      >
        Seit 2021 steht Der Grieche für authentische griechische Küche in
        Gütersloh. Was als kleine Taverne begann, ist heute ein Ort für
        Familien, Freunde und alle, die das echte Griechenland auf dem Teller
        erleben wollen.
      </p>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          lineHeight: 1.65,
          color: "rgba(15,26,46,0.8)",
          marginBottom: 32,
        }}
      >
        Jedes Gyros wird nach unserem Familienrezept gewürzt. Handgemacht.
        Frisch. Jeden Tag.
      </p>

      <a
        href="tel:+4952411234567"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#0960D0",
          textDecoration: "none",
          transition: "color 150ms ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#6B7C48")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#0960D0")}
      >
        {"Jetzt Reservieren →"}
      </a>
    </>
  );
}
