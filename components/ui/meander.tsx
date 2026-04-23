type MeanderProps = {
  background?: "brand" | "surface" | "warm" | "ink";
  height?: number;
  className?: string;
};

const variants = {
  brand:   { bg: "#0960D0", fg: "#FCFEFD" },
  surface: { bg: "#FCFEFD", fg: "#0960D0" },
  warm:    { bg: "#F4EDE0", fg: "#0960D0" },
  ink:     { bg: "#0F1A2E", fg: "#F4EDE0" },
};

export default function Meander({
  background = "brand",
  height = 56,
  className,
}: MeanderProps) {
  const { bg, fg } = variants[background];
  const tileW = height * (40 / 24);
  const sw = height * (3 / 24);
  const s = height / 24;
  const id = `mk-${background}`;

  return (
    <div className={className} style={{ background: bg, lineHeight: 0 }} aria-hidden="true">
      <svg width="100%" height={height} style={{ display: "block" }}>
        <defs>
          <pattern id={id} x="0" y="0" width={tileW} height={height} patternUnits="userSpaceOnUse">
            <line x1="0" y1={1.5*s} x2={tileW} y2={1.5*s} stroke={fg} strokeWidth={sw} strokeLinecap="butt"/>
            <line x1="0" y1={22.5*s} x2={tileW} y2={22.5*s} stroke={fg} strokeWidth={sw} strokeLinecap="butt"/>
            <path
              d={`M${4*s},${1.5*s} L${4*s},${18*s} L${16*s},${18*s} L${16*s},${5*s} L${8*s},${5*s} L${8*s},${14*s} L${12*s},${14*s} L${12*s},${9*s}`}
              stroke={fg} strokeWidth={sw} fill="none" strokeLinecap="butt" strokeLinejoin="miter"/>
            <path
              d={`M${24*s},${22.5*s} L${24*s},${6*s} L${36*s},${6*s} L${36*s},${19*s} L${28*s},${19*s} L${28*s},${10*s} L${32*s},${10*s} L${32*s},${15*s}`}
              stroke={fg} strokeWidth={sw} fill="none" strokeLinecap="butt" strokeLinejoin="miter"/>
          </pattern>
        </defs>
        <rect width="100%" height={height} fill={`url(#${id})`}/>
      </svg>
    </div>
  );
}
