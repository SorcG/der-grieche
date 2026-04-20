"use client";

import { useEffect, useRef, useState } from "react";

const UNIT = 24;
const H = 24;

/**
 * Generates a continuous SVG path for N units of the Greek key (mäander) pattern.
 * Each unit is a right-handed square spiral; units tile seamlessly at y=H/2.
 *
 * One unit (UNIT=24, H=24):
 *   Entry at (x, 12) → up to (x, 0) → right to (x+18, 0) → down to (x+18, 24)
 *   → left to (x+6, 24) → up to (x+6, 6) → right to (x+12, 6)
 *   → down to (x+12, 12) → exit at (x+24, 12)
 */
function buildPath(n: number): string {
  const parts: string[] = [];
  for (let i = 0; i < n; i++) {
    const x = i * UNIT;
    const mid = H / 2;
    if (i === 0) parts.push(`M ${x},${mid}`);
    parts.push(
      `L ${x},0`,
      `L ${x + 18},0`,
      `L ${x + 18},${H}`,
      `L ${x + 6},${H}`,
      `L ${x + 6},6`,
      `L ${x + 12},6`,
      `L ${x + 12},${mid}`,
      `L ${x + UNIT},${mid}`,
    );
  }
  return parts.join(" ");
}

export interface MeanderProps {
  /** Explicit pixel width; omit for full-width (100%). */
  width?: number | string;
  /** Stroke color; defaults to currentColor. */
  color?: string;
  /** Draw-in animation on mount. Respects prefers-reduced-motion. */
  animated?: boolean;
  className?: string;
}

export default function Meander({
  width = "100%",
  color = "currentColor",
  animated = false,
  className,
}: MeanderProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [units, setUnits] = useState(
    typeof width === "number" ? Math.ceil(width / UNIT) : 20,
  );

  useEffect(() => {
    if (typeof width === "number") {
      setUnits(Math.ceil(width / UNIT));
      return;
    }
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      if (w > 0) setUnits(Math.ceil(w / UNIT));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  const totalW = units * UNIT;
  const d = buildPath(units);

  return (
    <div ref={wrapRef} aria-hidden="true" className={className}>
      <svg
        width={typeof width === "number" ? width : "100%"}
        height={H + 2}
        viewBox={`0 0 ${totalW} ${H + 2}`}
        preserveAspectRatio="xMinYMid meet"
      >
        <path
          d={d}
          pathLength={animated ? 1 : undefined}
          stroke={color}
          strokeWidth={2}
          fill="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
          style={animated ? { strokeDasharray: 1, strokeDashoffset: 1 } : undefined}
          className={animated ? "meander-animated" : undefined}
        />
      </svg>
    </div>
  );
}
