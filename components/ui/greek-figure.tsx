"use client";

type GreekFigureProps = {
  width?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function GreekFigure({
  width = 200,
  className,
  style,
}: GreekFigureProps) {
  const height = width * 2.9;

  return (
    <svg
      viewBox="0 0 680 580"
      width={width}
      height={height}
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Griechischer Kellner mit Tablett"
      role="img"
    >
      <g transform="translate(280,0)">

        <rect x="-48" y="548" width="96" height="18" rx="5" fill="#FCFEFD"/>

        <ellipse cx="-20" cy="550" rx="20" ry="9" fill="#CC2200"/>
        <ellipse cx="20" cy="550" rx="20" ry="9" fill="#CC2200"/>

        <g id="legs">
          <rect x="-24" y="468" width="16" height="82" rx="6" fill="#FCFEFD" stroke="#E8E8E8" strokeWidth="1"/>
          <rect x="8" y="468" width="16" height="82" rx="6" fill="#FCFEFD" stroke="#E8E8E8" strokeWidth="1"/>
          <line x1="-16" y1="475" x2="-16" y2="545" stroke="#E8E8E8" strokeWidth="0.8"/>
          <line x1="16" y1="475" x2="16" y2="545" stroke="#E8E8E8" strokeWidth="0.8"/>
        </g>

        <g id="skirt">
          <path d="M-38,405 Q-55,430 -52,470 L52,470 Q55,430 38,405 Z" fill="#FCFEFD" stroke="#E8E8E8" strokeWidth="1"/>
          <line x1="-30" y1="408" x2="-44" y2="468" stroke="#E0E0E0" strokeWidth="1"/>
          <line x1="-18" y1="406" x2="-28" y2="468" stroke="#E0E0E0" strokeWidth="1"/>
          <line x1="-6" y1="405" x2="-12" y2="468" stroke="#E0E0E0" strokeWidth="1"/>
          <line x1="6" y1="405" x2="12" y2="468" stroke="#E0E0E0" strokeWidth="1"/>
          <line x1="18" y1="406" x2="28" y2="468" stroke="#E0E0E0" strokeWidth="1"/>
          <line x1="30" y1="408" x2="44" y2="468" stroke="#E0E0E0" strokeWidth="1"/>
          <path d="M-52,468 Q-40,462 -28,468 Q-16,462 -4,468 Q8,462 20,468 Q32,462 44,468 Q52,462 52,468" stroke="#E0E0E0" strokeWidth="1" fill="none"/>
        </g>

        <g id="left-arm">
          <path d="M-32,260 Q-70,295 -65,350" stroke="#F5C5A3" strokeWidth="20" fill="none" strokeLinecap="round"/>
          <circle cx="-65" cy="354" r="11" fill="#F5C5A3"/>
        </g>

        <g id="body">
          <rect x="-38" y="210" width="76" height="200" rx="8" fill="#FCFEFD"/>
          <polygon points="0,210 -38,210 -38,320 -6,348 0,332" fill="#0960D0"/>
          <polygon points="0,210 38,210 38,320 6,348 0,332" fill="#0960D0"/>
          <polygon points="-7,210 7,210 4,310 -4,310" fill="#FCFEFD"/>

          <rect x="10" y="228" width="26" height="18" rx="1" fill="#0D5EAF"/>
          <rect x="10" y="228" width="26" height="2" fill="#0D5EAF"/>
          <rect x="10" y="230" width="26" height="2" fill="#FCFEFD"/>
          <rect x="10" y="232" width="26" height="2" fill="#0D5EAF"/>
          <rect x="10" y="234" width="26" height="2" fill="#FCFEFD"/>
          <rect x="10" y="236" width="26" height="2" fill="#0D5EAF"/>
          <rect x="10" y="238" width="26" height="2" fill="#FCFEFD"/>
          <rect x="10" y="240" width="26" height="2" fill="#0D5EAF"/>
          <rect x="10" y="242" width="26" height="2" fill="#FCFEFD"/>
          <rect x="10" y="244" width="26" height="2" fill="#0D5EAF"/>
          <rect x="10" y="228" width="12" height="10" fill="#0D5EAF"/>
          <rect x="14" y="228" width="4" height="10" fill="#FCFEFD"/>
          <rect x="10" y="231" width="12" height="4" fill="#FCFEFD"/>
          <rect x="10" y="228" width="26" height="18" rx="1" fill="none" stroke="#0A4A8A" strokeWidth="0.5"/>
        </g>

        <g id="sash">
          <path d="M-40,385 Q-20,374 0,376 Q20,374 42,383 Q40,400 20,403 Q0,405 -20,403 Q-40,400 -42,390 Z" fill="#CC2200"/>
          <path d="M-38,390 Q-50,395 -50,412 Q-46,416 -42,412 Q-40,398 -36,394 Z" fill="#CC2200"/>
          <path d="M38,386 Q48,392 46,406 Q42,410 38,406 Q40,394 36,390 Z" fill="#CC2200"/>
          <path d="M-15,376 Q-13,390 -15,403" stroke="#AA1500" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M5,376 Q7,390 5,403" stroke="#AA1500" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M22,377 Q20,391 22,403" stroke="#AA1500" strokeWidth="1" fill="none" opacity="0.6"/>
        </g>

        <g id="right-arm">
          <path d="M38,255 Q85,240 108,215" stroke="#F5C5A3" strokeWidth="20" fill="none" strokeLinecap="round"/>
          <circle cx="108" cy="212" r="11" fill="#F5C5A3"/>
          <g id="tray">
            <ellipse cx="138" cy="202" rx="50" ry="10" fill="#C8C8C8"/>
            <ellipse cx="138" cy="198" rx="50" ry="10" fill="#E0E0E0"/>
            <rect x="124" y="152" width="18" height="46" rx="5" fill="#0960D0"/>
            <rect x="129" y="140" width="8" height="14" rx="3" fill="#0960D0"/>
            <rect x="130" y="136" width="6" height="6" rx="2" fill="#1A1A1A"/>
            <rect x="126" y="162" width="14" height="16" rx="1" fill="#FCFEFD" opacity="0.3"/>
            <line x1="128" y1="167" x2="138" y2="167" stroke="#FCFEFD" strokeWidth="1" opacity="0.6"/>
            <line x1="128" y1="171" x2="138" y2="171" stroke="#FCFEFD" strokeWidth="0.8" opacity="0.4"/>
            <path d="M150,172 L148,192 Q148,196 152,196 L162,196 Q166,196 166,192 L164,172 Z" fill="#E8F4FF" stroke="#B0C8D8" strokeWidth="1"/>
            <path d="M151,182 L149,192 Q149,195 152,195 L162,195 Q165,195 165,192 L163,182 Z" fill="rgba(240,248,255,0.7)"/>
            <line x1="150" y1="172" x2="164" y2="172" stroke="#B0C8D8" strokeWidth="1.5"/>
            <path d="M168,172 L166,192 Q166,196 170,196 L180,196 Q184,196 184,192 L182,172 Z" fill="#E8F4FF" stroke="#B0C8D8" strokeWidth="1"/>
            <path d="M169,182 L167,192 Q167,195 170,195 L180,195 Q183,195 183,192 L181,182 Z" fill="rgba(240,248,255,0.7)"/>
            <line x1="168" y1="172" x2="182" y2="172" stroke="#B0C8D8" strokeWidth="1.5"/>
          </g>
        </g>

        <g id="head">
          <ellipse cx="0" cy="158" rx="40" ry="46" fill="#F5C5A3"/>
          <path d="M36,148 Q52,158 50,200 Q48,218 44,228" stroke="#1A1A1A" strokeWidth="9" fill="none" strokeLinecap="round"/>
          <path d="M36,148 Q50,160 47,202 Q45,220 41,230" stroke="#2A2A2A" strokeWidth="5" fill="none" strokeLinecap="round"/>
          <path d="M-38,145 Q-44,158 -42,172" stroke="#1A1A1A" strokeWidth="7" fill="none" strokeLinecap="round"/>
          <path d="M38,145 Q44,158 42,172" stroke="#1A1A1A" strokeWidth="7" fill="none" strokeLinecap="round"/>
          <path d="M-34,148 Q-39,162 -37,176" stroke="#1A1A1A" strokeWidth="4" fill="none" strokeLinecap="round"/>
          <path d="M34,148 Q39,162 37,176" stroke="#1A1A1A" strokeWidth="4" fill="none" strokeLinecap="round"/>
          <path d="M-40,132 Q-30,104 0,98 Q30,104 40,132 Q20,122 0,120 Q-20,122 -40,132Z" fill="#CC2200"/>
          <path d="M38,132 Q52,122 50,137 Q48,148 36,140" fill="#CC2200"/>
          <path d="M-20,145 Q-13,141 -7,145" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M7,145 Q13,141 20,145" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <ellipse cx="-13" cy="154" rx="6" ry="7" fill="#2A1A0E"/>
          <ellipse cx="13" cy="154" rx="6" ry="7" fill="#2A1A0E"/>
          <ellipse cx="-11" cy="152" rx="2" ry="2" fill="#FCFEFD"/>
          <ellipse cx="15" cy="152" rx="2" ry="2" fill="#FCFEFD"/>
          <ellipse cx="0" cy="166" rx="5" ry="5" fill="#E8A87C"/>
          <ellipse cx="-3" cy="168" rx="3" ry="2" fill="#D4906A"/>
          <ellipse cx="3" cy="168" rx="3" ry="2" fill="#D4906A"/>
          <ellipse cx="-11" cy="178" rx="11" ry="6" fill="#1A1A1A"/>
          <ellipse cx="11" cy="178" rx="11" ry="6" fill="#1A1A1A"/>
          <ellipse cx="0" cy="176" rx="4" ry="3" fill="#F5C5A3"/>
          <path d="M-22,178 Q-26,176 -24,181" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M22,178 Q26,176 24,181" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M-7,188 Q0,194 7,188" stroke="#C08060" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </g>

      </g>
    </svg>
  );
}
