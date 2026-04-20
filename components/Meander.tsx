"use client";

import { useEffect, useId, useRef, useState } from "react";

const NATIVE_H = 24;
const NATIVE_W = 24;
const SW = 2;

const BG: Record<string, string> = {
  brand: "#0960D0",
  surface: "#FCFEFD",
  warm: "#F4EDE0",
  ink: "#0F1A2E",
};

// Foreground color that contrasts with each background
const FG: Record<string, string> = {
  brand: "#F4EDE0",
  surface: "#0960D0",
  warm: "#0960D0",
  ink: "#F4EDE0",
};

export interface MeanderProps {
  /** "band" = full-bleed colored stripe (section separator, primary use).
   *  "border" = thin decorative line, no background.
   *  "draw" = animated draw-in line (border with stroke-dashoffset animation). */
  variant?: "band" | "border" | "draw";
  /** Determines the background fill (band only) and stroke color. */
  background?: keyof typeof BG;
  /** Override height in px. Defaults: band=48, border/draw=26. */
  height?: number;
  /** Explicit width in px for border/draw variants (defaults to 100%). */
  width?: number;
  className?: string;
}

/**
 * Builds one SVG pattern tile of height `tileH`.
 * The mäander unit (24×24 native) is scaled and vertically centered.
 * Entry and exit are both at y = tileH/2, so tiles connect seamlessly.
 */
function tileUnit(tileH: number): { d: string; tileW: number } {
  const h = Math.min(tileH, NATIVE_H);
  const s = h / NATIVE_H;
  const tileW = NATIVE_W * s;
  const oy = (tileH - h) / 2;
  const y = (v: number) => oy + v * s;
  const x = (v: number) => v * s;
  const d = [
    `M ${x(0)},${y(12)} L ${x(0)},${y(0)} L ${x(18)},${y(0)}`,
    `L ${x(18)},${y(24)} L ${x(6)},${y(24)} L ${x(6)},${y(6)}`,
    `L ${x(12)},${y(6)} L ${x(12)},${y(12)} L ${x(24)},${y(12)}`,
  ].join(" ");
  return { d, tileW };
}

/** Continuous path for N mäander units (border / draw variants). */
function buildPath(units: number): string {
  const mid = NATIVE_H / 2;
  const parts: string[] = [];
  for (let i = 0; i < units; i++) {
    const x = i * NATIVE_W;
    if (i === 0) parts.push(`M ${x},${mid}`);
    parts.push(
      `L ${x},0 L ${x + 18},0 L ${x + 18},${NATIVE_H}`,
      `L ${x + 6},${NATIVE_H} L ${x + 6},6 L ${x + 12},6`,
      `L ${x + 12},${mid} L ${x + NATIVE_W},${mid}`,
    );
  }
  return parts.join(" ");
}

export default function Meander({
  variant = "border",
  background = "surface",
  height,
  width,
  className,
}: MeanderProps) {
  const h = height ?? (variant === "band" ? 48 : NATIVE_H + SW);
  const bgColor = BG[background];
  const fgColor = FG[background];

  const rawId = useId();
  const patternId = "mp" + rawId.replace(/\W/g, "");

  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [units, setUnits] = useState(
    typeof width === "number" ? Math.ceil(width / NATIVE_W) : 20,
  );

  useEffect(() => {
    if (variant === "band") return;
    if (typeof width === "number") {
      setUnits(Math.ceil(width / NATIVE_W));
      return;
    }
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      if (w > 0) setUnits(Math.ceil(w / NATIVE_W));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [variant, width]);

  // Trigger draw animation when element enters viewport (instead of on mount)
  useEffect(() => {
    if (variant !== "draw") return;
    const path = pathRef.current;
    if (!path) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          path.classList.add("meander-animated");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(path);
    return () => observer.disconnect();
  }, [variant]);

  // ── Band: full-bleed colored stripe with SVG <pattern> tiling ──────────
  if (variant === "band") {
    const { d, tileW } = tileUnit(h);
    return (
      <div className={className} aria-hidden="true" style={{ background: bgColor }}>
        <svg width="100%" height={h} style={{ display: "block" }}>
          <defs>
            <pattern
              id={patternId}
              x="0"
              y="0"
              width={tileW}
              height={h}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={d}
                stroke={fgColor}
                strokeWidth={SW}
                fill="none"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </pattern>
          </defs>
          <rect width="100%" height={h} fill={`url(#${patternId})`} />
        </svg>
      </div>
    );
  }

  // ── Border / Draw: continuous generated path ────────────────────────────
  const svgH = NATIVE_H + SW;
  const totalW = units * NATIVE_W;
  const d = buildPath(units);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={className}
      style={typeof width === "number" ? { width } : undefined}
    >
      <svg
        width={typeof width === "number" ? width : "100%"}
        height={svgH}
        viewBox={`0 0 ${totalW} ${svgH}`}
        preserveAspectRatio="xMinYMid meet"
      >
        <path
          ref={variant === "draw" ? pathRef : undefined}
          d={d}
          pathLength={variant === "draw" ? 1 : undefined}
          stroke={fgColor}
          strokeWidth={SW}
          fill="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
          style={
            variant === "draw"
              ? { strokeDasharray: 1, strokeDashoffset: 1 }
              : undefined
          }
        />
      </svg>
    </div>
  );
}
