"use client";

type MeanderProps = {
  background?: "brand" | "surface" | "warm" | "ink";
  height?: number;
  className?: string;
};

const variants = {
  brand:   { bg: "#0960D0", patternColor: "white" },
  surface: { bg: "#FCFEFD", patternColor: "#0960D0" },
  warm:    { bg: "#F4EDE0", patternColor: "#0960D0" },
  ink:     { bg: "#0F1A2E", patternColor: "#F4EDE0" },
};

export default function Meander({ background = "brand", height = 56, className }: MeanderProps) {
  const { bg, patternColor } = variants[background];
  const tileW = Math.round(height * 3.33);
  const sw = height * 0.125;
  const uid = `meander-${background}-${height}`;

  return (
    <div
      className={className}
      style={{ width: "100%", height, backgroundColor: bg, position: "relative", overflow: "hidden" }}
      role="img"
      aria-label="Maeander-Ornament"
    >
      <svg
        width="100%"
        height={height}
        style={{ position: "absolute", inset: 0, display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={uid} x="0" y="0" width={tileW} height={height} patternUnits="userSpaceOnUse">
            {/* top rail */}
            <line x1="0" y1={height * 0.0625} x2={tileW} y2={height * 0.0625}
              stroke={patternColor} strokeWidth={sw} strokeLinecap="butt" />
            {/* bottom rail */}
            <line x1="0" y1={height * 0.9375} x2={tileW} y2={height * 0.9375}
              stroke={patternColor} strokeWidth={sw} strokeLinecap="butt" />
            {/* left spiral (descends from top rail) */}
            <path
              d={[
                `M ${tileW * 0.1} ${height * 0.0625}`,
                `L ${tileW * 0.1} ${height * 0.75}`,
                `L ${tileW * 0.4} ${height * 0.75}`,
                `L ${tileW * 0.4} ${height * 0.2083}`,
                `L ${tileW * 0.2} ${height * 0.2083}`,
                `L ${tileW * 0.2} ${height * 0.5833}`,
                `L ${tileW * 0.3} ${height * 0.5833}`,
                `L ${tileW * 0.3} ${height * 0.375}`,
              ].join(" ")}
              stroke={patternColor}
              strokeWidth={sw}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="none"
            />
            {/* right spiral (ascends from bottom rail) */}
            <path
              d={[
                `M ${tileW * 0.6} ${height * 0.9375}`,
                `L ${tileW * 0.6} ${height * 0.25}`,
                `L ${tileW * 0.9} ${height * 0.25}`,
                `L ${tileW * 0.9} ${height * 0.7917}`,
                `L ${tileW * 0.7} ${height * 0.7917}`,
                `L ${tileW * 0.7} ${height * 0.4167}`,
                `L ${tileW * 0.8} ${height * 0.4167}`,
                `L ${tileW * 0.8} ${height * 0.625}`,
              ].join(" ")}
              stroke={patternColor}
              strokeWidth={sw}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height={height} fill={bg} />
        <rect width="100%" height={height} fill={`url(#${uid})`} />
      </svg>
    </div>
  );
}
