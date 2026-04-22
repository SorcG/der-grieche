type MeanderProps = {
  background?: "brand" | "surface" | "warm" | "ink";
  height?: number;
  className?: string;
};

const BG: Record<NonNullable<MeanderProps["background"]>, string> = {
  brand: "#0960D0",
  surface: "#FCFEFD",
  warm: "#F4EDE0",
  ink: "#0F1A2E",
};

const FG: Record<NonNullable<MeanderProps["background"]>, string> = {
  brand: "#F4EDE0",
  surface: "#0960D0",
  warm: "#0960D0",
  ink: "#F4EDE0",
};

// One Greek-key tile: 24×24 native units, entry and exit at y=12 (mid).
// Produces an L-shaped spiral that tiles seamlessly left→right.
function tilePath(h: number): { d: string; tileW: number } {
  const s = Math.min(h, 24) / 24;
  const W = 24 * s;
  const oy = (h - 24 * s) / 2;
  const x = (v: number) => v * s;
  const y = (v: number) => oy + v * s;
  const d = [
    `M${x(0)},${y(12)}`,
    `L${x(0)},${y(0)} L${x(18)},${y(0)}`,
    `L${x(18)},${y(24)} L${x(6)},${y(24)} L${x(6)},${y(6)}`,
    `L${x(12)},${y(6)} L${x(12)},${y(12)} L${x(24)},${y(12)}`,
  ].join(" ");
  return { d, tileW: W };
}

export default function Meander({
  background = "surface",
  height = 48,
  className,
}: MeanderProps) {
  const bg = BG[background];
  const fg = FG[background];
  const { d, tileW } = tilePath(height);
  const patternId = `meander-${background}-${height}`;

  return (
    <div
      className={className}
      style={{ background: bg, lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height={height}
        role="img"
        aria-label="Maeander-Ornament"
        style={{ display: "block" }}
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={tileW}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={d}
              stroke={fg}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </pattern>
        </defs>
        <rect width="100%" height={height} fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
