import type { ReactNode } from "react";

/**
 * Illustrative placeholders for the service photos.
 * Each scene is a self-contained SVG so the page never ships a broken image;
 * swap any of them for a real photo (<img>) in the catalogue when available.
 */

const MAGENTA = "#ff2db4";
const BLUE = "#2f6bff";
const GREEN = "#2fe07a";
const YELLOW = "#ffc61a";

function Scene({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label={label}
      className="block h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b1020" />
          <stop offset="1" stopColor="#05060a" />
        </linearGradient>
        <radialGradient id={`${id}-halo`} cx="50%" cy="38%" r="60%">
          <stop offset="0" stopColor={BLUE} stopOpacity="0.38" />
          <stop offset="1" stopColor={BLUE} stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-glow`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="9" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <linearGradient id={`${id}-paint`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={MAGENTA} />
          <stop offset="0.45" stopColor={BLUE} />
          <stop offset="0.75" stopColor={GREEN} />
          <stop offset="1" stopColor={YELLOW} />
        </linearGradient>
        <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1a1f2e" />
          <stop offset="0.5" stopColor="#262c3e" />
          <stop offset="1" stopColor="#141826" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${id}-bg)`} />
      <rect width="800" height="600" fill={`url(#${id}-halo)`} />
      {children}
    </svg>
  );
}

/** Drops of paint used as a decal / accent inside scenes. */
function Splat({ x, y, s = 1, id }: { x: number; y: number; s?: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        d="M0 -46 C26 -52 56 -30 52 -2 C48 26 62 40 36 54 C14 66 -6 52 -26 58 C-52 64 -62 34 -54 12 C-48 -6 -66 -22 -44 -38 C-30 -48 -16 -42 0 -46Z"
        fill={`url(#${id}-paint)`}
      />
      <circle cx="68" cy="-30" r="7" fill={YELLOW} />
      <circle cx="-72" cy="-8" r="6" fill={MAGENTA} />
      <circle cx="60" cy="52" r="5" fill={GREEN} />
      <circle cx="-34" cy="76" r="8" fill={BLUE} />
      <circle cx="84" cy="8" r="3.5" fill={MAGENTA} />
    </g>
  );
}

/* ------------------------------------------------------------------ */

export function StorefrontScene() {
  const id = "sf";
  return (
    <Scene
      id={id}
      label="Ilustração de fachada comercial com letras caixa iluminadas e adesivagem de vitrine"
    >
      {/* building */}
      <rect x="30" y="90" width="610" height="470" fill="#0c0f19" />
      {/* ACM panels */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect
          key={i}
          x={40 + i * 100}
          y="100"
          width="96"
          height="190"
          fill={`url(#${id}-metal)`}
          opacity="0.9"
        />
      ))}
      <rect x="30" y="288" width="610" height="6" fill={BLUE} filter={`url(#${id}-glow)`} />
      {/* backlit sign */}
      <rect x="90" y="142" width="490" height="110" rx="4" fill="#06080f" stroke="#2a3350" />
      <text
        x="335"
        y="228"
        textAnchor="middle"
        fontFamily="'Exo 2', Inter, sans-serif"
        fontWeight="800"
        fontSize="86"
        letterSpacing="6"
        fill="#fff"
        filter={`url(#${id}-glow)`}
      >
        SUA MARCA
      </text>
      <rect x="150" y="238" width="370" height="3" fill={`url(#${id}-paint)`} />
      {/* windows */}
      <rect x="60" y="326" width="230" height="200" fill="#0a1226" stroke="#2a3350" />
      <rect x="380" y="326" width="230" height="200" fill="#0a1226" stroke="#2a3350" />
      <rect x="310" y="326" width="50" height="234" fill="#10172c" stroke="#2a3350" />
      <path d="M60 526 L290 326 L290 360 L110 526Z" fill="#fff" opacity="0.05" />
      <path d="M380 526 L610 326 L610 360 L430 526Z" fill="#fff" opacity="0.05" />
      {/* vinyl decals */}
      <Splat x={175} y={420} s={1.05} id={id} />
      <rect x="84" y="488" width="182" height="8" fill="#fff" opacity="0.85" />
      <text
        x="495"
        y="404"
        textAnchor="middle"
        fontFamily="'Exo 2', sans-serif"
        fontWeight="800"
        fontSize="40"
        fill="#fff"
      >
        OFERTAS
      </text>
      <rect x="410" y="420" width="170" height="4" fill={YELLOW} />
      <text
        x="495"
        y="470"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="18"
        fill="#9aa3b8"
        letterSpacing="3"
      >
        ENTRADA →
      </text>
      {/* totem */}
      <g>
        <rect x="672" y="228" width="92" height="332" fill="#0e1322" stroke="#2a3350" />
        <rect x="684" y="244" width="68" height="150" fill="#06080f" />
        <circle
          cx="718"
          cy="300"
          r="26"
          fill="none"
          stroke="#fff"
          strokeWidth="6"
          filter={`url(#${id}-glow)`}
        />
        <path d="M700 300h36" stroke={MAGENTA} strokeWidth="6" />
        <rect x="684" y="410" width="68" height="6" fill={BLUE} />
        <rect x="684" y="426" width="46" height="6" fill="#39415c" />
      </g>
      {/* floor + reflection */}
      <rect x="0" y="560" width="800" height="40" fill="#07090f" />
      <ellipse
        cx="335"
        cy="580"
        rx="300"
        ry="10"
        fill={BLUE}
        opacity="0.35"
        filter={`url(#${id}-soft)`}
      />
    </Scene>
  );
}

export function SignageScene() {
  const id = "cv";
  return (
    <Scene id={id} label="Ilustração de fachada em ACM com letras caixa, totem e luminoso">
      {/* ACM panel wall */}
      <rect x="30" y="40" width="740" height="300" fill={`url(#${id}-metal)`} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={30 + i * 148}
          y1="40"
          x2={30 + i * 148}
          y2="340"
          stroke="#05060a"
          strokeWidth="3"
        />
      ))}
      <line x1="30" y1="190" x2="770" y2="190" stroke="#05060a" strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5].flatMap((i) =>
        [0, 1].map((j) => (
          <circle key={`${i}${j}`} cx={44 + i * 148} cy={54 + j * 150} r="3" fill="#3a4260" />
        )),
      )}
      {/* channel letters with depth */}
      <g
        fontFamily="'Exo 2', sans-serif"
        fontWeight="800"
        fontSize="150"
        letterSpacing="10"
        textAnchor="middle"
      >
        <text x="404" y="262" fill="#02030a" opacity="0.9">
          LETRAS
        </text>
        <text x="400" y="258" fill="#fff" filter={`url(#${id}-glow)`}>
          LETRAS
        </text>
        <text x="400" y="258" fill="none" stroke={BLUE} strokeWidth="2">
          LETRAS
        </text>
      </g>
      <rect x="30" y="338" width="740" height="5" fill={`url(#${id}-paint)`} />
      {/* totem */}
      <g>
        <rect x="90" y="372" width="150" height="200" rx="3" fill="#0e1322" stroke="#2f3a5e" />
        <rect
          x="104"
          y="388"
          width="122"
          height="96"
          fill="#fff"
          opacity="0.94"
          filter={`url(#${id}-glow)`}
        />
        <Splat x={165} y={436} s={0.62} id={id} />
        <rect x="104" y="500" width="122" height="8" fill={BLUE} />
        <rect x="104" y="518" width="80" height="6" fill="#3a4260" />
        <rect x="150" y="572" width="30" height="10" fill="#1a1f2e" />
      </g>
      {/* luminous box sign */}
      <g>
        <rect
          x="320"
          y="388"
          width="420"
          height="150"
          rx="16"
          fill="#0a0d18"
          stroke="#2f3a5e"
          strokeWidth="3"
        />
        <rect x="334" y="402" width="392" height="122" rx="10" fill="#0d1a3d" />
        <text
          x="530"
          y="486"
          textAnchor="middle"
          fontFamily="'Exo 2', sans-serif"
          fontWeight="800"
          fontSize="78"
          letterSpacing="6"
          fill="#fff"
          filter={`url(#${id}-glow)`}
        >
          ABERTO
        </text>
        <rect x="400" y="500" width="260" height="4" fill={MAGENTA} filter={`url(#${id}-glow)`} />
        <line x1="400" y1="538" x2="400" y2="570" stroke="#3a4260" strokeWidth="4" />
        <line x1="660" y1="538" x2="660" y2="570" stroke="#3a4260" strokeWidth="4" />
      </g>
    </Scene>
  );
}

export function VehicleScene() {
  const id = "vh";
  return (
    <Scene id={id} label="Ilustração de van com envelopamento colorido e adesivos personalizados">
      {/* measuring lines */}
      <g stroke="#3a4a7a" strokeWidth="1.5" fill="none" strokeDasharray="6 6">
        <line x1="60" y1="130" x2="740" y2="130" />
        <line x1="60" y1="120" x2="60" y2="140" strokeDasharray="0" />
        <line x1="740" y1="120" x2="740" y2="140" strokeDasharray="0" />
      </g>
      <text
        x="400"
        y="118"
        textAnchor="middle"
        fontFamily="'Michroma', sans-serif"
        fontSize="14"
        fill="#7d8bb5"
        letterSpacing="4"
      >
        ENVELOPAMENTO TOTAL
      </text>
      {/* van body */}
      <path
        d="M70 230 Q70 190 110 190 L520 190 L520 400 L70 400Z"
        fill="#0d1226"
        stroke="#2f3a5e"
        strokeWidth="2"
      />
      <path
        d="M520 190 L610 190 Q640 190 664 236 L722 300 Q736 318 736 346 L736 400 L520 400Z"
        fill="#0d1226"
        stroke="#2f3a5e"
        strokeWidth="2"
      />
      {/* cab window */}
      <path
        d="M548 208 L608 208 Q624 208 636 230 L672 290 L548 290Z"
        fill="#132042"
        stroke="#2f3a5e"
      />
      {/* wrap */}
      <clipPath id={`${id}-clip`}>
        <rect x="70" y="190" width="450" height="210" />
        <rect x="520" y="290" width="216" height="110" />
      </clipPath>
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="70" y="190" width="670" height="210" fill={BLUE} opacity="0.92" />
        <path d="M70 330 Q200 260 330 330 T600 300 L740 330 L740 400 L70 400Z" fill="#05060a" />
        <circle cx="140" cy="230" r="70" fill={MAGENTA} opacity="0.9" />
        <circle cx="110" cy="352" r="40" fill={YELLOW} opacity="0.95" />
        <circle cx="520" cy="372" r="56" fill={GREEN} opacity="0.9" />
        <circle cx="400" cy="230" r="26" fill={MAGENTA} opacity="0.9" />
        <circle cx="610" cy="350" r="30" fill={YELLOW} opacity="0.9" />
      </g>
      <text
        x="300"
        y="300"
        textAnchor="middle"
        fontFamily="'Exo 2', sans-serif"
        fontWeight="800"
        fontSize="58"
        fill="#fff"
        letterSpacing="3"
      >
        SUA MARCA
      </text>
      <text
        x="300"
        y="328"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="15"
        fill="#fff"
        letterSpacing="5"
      >
        COMUNICAÇÃO VISUAL
      </text>
      {/* details */}
      <rect x="520" y="190" width="3" height="210" fill="#05060a" />
      <rect x="724" y="334" width="14" height="20" rx="3" fill={YELLOW} />
      <rect x="70" y="384" width="666" height="16" fill="#05060a" opacity="0.5" />
      {/* wheels */}
      {[190, 610].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="404" r="50" fill="#05060a" />
          <circle cx={cx} cy="404" r="32" fill="#1a1f2e" stroke="#3a4260" strokeWidth="3" />
          <circle cx={cx} cy="404" r="9" fill="#6c789c" />
        </g>
      ))}
      <ellipse
        cx="400"
        cy="462"
        rx="340"
        ry="12"
        fill={BLUE}
        opacity="0.4"
        filter={`url(#${id}-soft)`}
      />
    </Scene>
  );
}

export function CustomScene() {
  const id = "pz";
  return (
    <Scene id={id} label="Ilustração de camiseta, caneca, caderno e cartões personalizados">
      {/* t-shirt */}
      <g transform="translate(60 70)">
        <path
          d="M130 20 L190 0 Q240 40 290 0 L350 20 L420 80 L370 130 L335 108 L335 420 L145 420 L145 108 L110 130 L60 80Z"
          fill="#141a2e"
          stroke="#2f3a5e"
          strokeWidth="3"
        />
        <path d="M190 0 Q240 40 290 0" fill="none" stroke="#2f3a5e" strokeWidth="6" />
        <Splat x={240} y={190} s={1.35} id={id} />
        <text
          x="240"
          y="318"
          textAnchor="middle"
          fontFamily="'Exo 2', sans-serif"
          fontWeight="800"
          fontSize="34"
          fill="#fff"
          letterSpacing="3"
        >
          SUA ARTE
        </text>
        <rect x="170" y="330" width="140" height="4" fill="#fff" opacity="0.6" />
      </g>
      {/* mug */}
      <g transform="translate(460 330)">
        <path
          d="M200 40 q70 -2 70 60 q0 62 -70 62"
          fill="none"
          stroke="#e9ecf5"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <rect x="0" y="0" width="210" height="200" rx="18" fill="#f4f6fb" />
        <rect
          x="0"
          y="0"
          width="210"
          height="200"
          rx="18"
          fill={`url(#${id}-paint)`}
          opacity="0.0"
        />
        <rect x="18" y="12" width="26" height="176" rx="12" fill="#fff" opacity="0.7" />
        <Splat x={115} y={92} s={0.8} id={id} />
        <text
          x="115"
          y="166"
          textAnchor="middle"
          fontFamily="'Exo 2', sans-serif"
          fontWeight="800"
          fontSize="24"
          fill="#05060a"
          letterSpacing="2"
        >
          SUA MARCA
        </text>
        <ellipse cx="105" cy="206" rx="130" ry="10" fill="#000" opacity="0.5" />
      </g>
      {/* notebook */}
      <g transform="translate(560 90) rotate(8)">
        <rect width="170" height="210" rx="10" fill="#10172c" stroke={BLUE} strokeWidth="2" />
        <rect x="14" y="0" width="8" height="210" fill="#05060a" opacity="0.5" />
        <rect x="36" y="42" width="100" height="10" fill="#fff" />
        <rect x="36" y="62" width="68" height="6" fill={MAGENTA} />
        <circle cx="132" cy="168" r="18" fill={YELLOW} />
      </g>
      {/* pen */}
      <g transform="translate(700 520) rotate(-24)">
        <rect width="150" height="14" rx="7" fill={GREEN} />
        <rect x="104" width="46" height="14" rx="7" fill="#05060a" stroke="#2f3a5e" />
      </g>
    </Scene>
  );
}

export function BrandScene() {
  const id = "br";
  return (
    <Scene id={id} label="Ilustração de logotipo, cartão de visita, papelaria e paleta de cores">
      {/* letterhead */}
      <g transform="translate(450 70) rotate(7)">
        <rect width="250" height="330" rx="4" fill="#f4f6fb" />
        <rect x="24" y="26" width="46" height="46" rx="6" fill="#05060a" />
        <path d="M34 60 L46 36 L60 60Z" fill={BLUE} />
        <rect x="24" y="100" width="150" height="7" fill="#c9cfdf" />
        <rect x="24" y="118" width="190" height="7" fill="#dfe3ee" />
        <rect x="24" y="136" width="170" height="7" fill="#dfe3ee" />
        <rect x="24" y="154" width="120" height="7" fill="#dfe3ee" />
        <rect x="0" y="312" width="250" height="18" fill={`url(#${id}-paint)`} />
      </g>
      {/* logo card */}
      <g transform="translate(60 60)">
        <rect width="360" height="300" rx="14" fill="#0a0e1c" stroke={BLUE} strokeWidth="2" />
        <g filter={`url(#${id}-glow)`}>
          <path
            d="M120 100 L180 70 L240 100 L240 170 L180 200 L120 170Z"
            fill="none"
            stroke="#fff"
            strokeWidth="9"
            strokeLinejoin="round"
          />
          <path d="M150 150 L180 105 L210 150Z" fill={BLUE} />
        </g>
        <Splat x={268} y={92} s={0.45} id={id} />
        <text
          x="180"
          y="248"
          textAnchor="middle"
          fontFamily="'Exo 2', sans-serif"
          fontWeight="800"
          fontSize="32"
          letterSpacing="8"
          fill="#fff"
        >
          SUA MARCA
        </text>
        <text
          x="180"
          y="272"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          letterSpacing="6"
          fill="#7d8bb5"
        >
          IDENTIDADE VISUAL
        </text>
      </g>
      {/* business cards */}
      <g transform="translate(120 400) rotate(-6)">
        <rect width="230" height="132" rx="6" fill="#05060a" stroke="#2f3a5e" />
        <path d="M18 24 L34 6 L50 24Z" fill={BLUE} />
        <rect x="18" y="78" width="110" height="8" fill="#fff" />
        <rect x="18" y="96" width="80" height="5" fill="#7d8bb5" />
      </g>
      <g transform="translate(300 440) rotate(5)">
        <rect width="230" height="132" rx="6" fill={BLUE} />
        <Splat x={165} y={64} s={0.5} id={id} />
        <rect x="18" y="96" width="90" height="8" fill="#fff" />
      </g>
      {/* palette */}
      <g transform="translate(535 430)">
        {[MAGENTA, BLUE, GREEN, YELLOW].map((c, i) => (
          <g key={c}>
            <circle cx={i * 52} cy="0" r="22" fill={c} />
          </g>
        ))}
        <text
          x="0"
          y="56"
          fontFamily="'Michroma', sans-serif"
          fontSize="11"
          fill="#7d8bb5"
          letterSpacing="3"
        >
          PALETA
        </text>
        <text
          x="0"
          y="104"
          fontFamily="'Exo 2', sans-serif"
          fontWeight="800"
          fontSize="54"
          fill="#fff"
        >
          Aa
        </text>
      </g>
    </Scene>
  );
}

/** Small cluster of paint drops, used as the accent next to section titles. */
export function PaintAccent({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 44" className={className} aria-hidden="true">
      <path
        d="M18 6 C30 0 44 8 42 20 C40 30 48 36 34 40 C22 44 10 38 6 30 C2 22 6 12 18 6Z"
        fill={BLUE}
      />
      <path
        d="M26 14 C34 10 42 16 40 24 C38 30 30 32 24 28 C20 24 20 17 26 14Z"
        fill={MAGENTA}
        opacity="0.95"
      />
      <circle cx="52" cy="10" r="5" fill={YELLOW} />
      <circle cx="58" cy="26" r="3.2" fill={GREEN} />
      <circle cx="46" cy="38" r="3.6" fill={MAGENTA} />
      <circle cx="4" cy="12" r="2.6" fill={GREEN} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Large paint burst — decorative background element                   */
/* ------------------------------------------------------------------ */

const PALETTE = [MAGENTA, BLUE, GREEN, YELLOW];

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function colorAt(t: number) {
  const n = PALETTE.length;
  return PALETTE[Math.floor((((t % 1) + 1) % 1) * n) % n];
}

export function PaintBurst({ className = "", seed = 7 }: { className?: string; seed?: number }) {
  const r = rand(seed);
  const spikes = Array.from({ length: 30 }, (_, i) => {
    const a = (i / 30) * Math.PI * 2 + (r() - 0.5) * 0.18;
    const len = 150 + r() * 150;
    const w = 7 + r() * 16;
    const tipR = w * (0.7 + r() * 0.5);
    return { a, len, w, tipR, color: colorAt(i / 30 + 0.05) };
  });
  const dots = Array.from({ length: 34 }, () => {
    const a = r() * Math.PI * 2;
    const d = 190 + r() * 150;
    return {
      x: Math.cos(a) * d,
      y: Math.sin(a) * d,
      r: 2 + r() * 6,
      color: PALETTE[Math.floor(r() * 4)],
    };
  });
  const blob = Array.from({ length: 14 }, (_, i) => {
    const a = (i / 14) * Math.PI * 2;
    const rad = 78 + r() * 38;
    return [Math.cos(a) * rad, Math.sin(a) * rad] as const;
  });
  const blobPath =
    blob
      .map(([x, y], i) => {
        const [nx, ny] = blob[(i + 1) % blob.length];
        const mx = (x + nx) / 2;
        const my = (y + ny) / 2;
        return `${i === 0 ? `M${mx.toFixed(1)} ${my.toFixed(1)}` : ""} Q${nx.toFixed(1)} ${ny.toFixed(1)} ${((nx + blob[(i + 2) % blob.length][0]) / 2).toFixed(1)} ${((ny + blob[(i + 2) % blob.length][1]) / 2).toFixed(1)}`;
      })
      .join(" ") + "Z";
  const gid = `pb-${seed}`;

  return (
    <svg viewBox="-360 -360 720 720" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="-1" y1="-1" x2="1" y2="1">
          <stop offset="0" stopColor={MAGENTA} />
          <stop offset="0.4" stopColor={BLUE} />
          <stop offset="0.72" stopColor={GREEN} />
          <stop offset="1" stopColor={YELLOW} />
        </linearGradient>
      </defs>
      {spikes.map((s, i) => {
        const x = Math.cos(s.a) * s.len;
        const y = Math.sin(s.a) * s.len;
        const nx = -Math.sin(s.a);
        const ny = Math.cos(s.a);
        const bw = s.w * 1.6;
        const tw = s.w * 0.28;
        const ex = x * 0.92;
        const ey = y * 0.92;
        const pts = [
          [nx * bw, ny * bw],
          [ex + nx * tw, ey + ny * tw],
          [ex - nx * tw, ey - ny * tw],
          [-nx * bw, -ny * bw],
        ]
          .map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`)
          .join(" ");
        return (
          <g key={i}>
            <polygon points={pts} fill={s.color} />
            <circle cx={x} cy={y} r={s.tipR} fill={s.color} />
          </g>
        );
      })}
      <path d={blobPath} fill={`url(#${gid})`} />
      <path
        d="M-50 -46 Q-10 -78 36 -58"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.35"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.color} />
      ))}
    </svg>
  );
}
