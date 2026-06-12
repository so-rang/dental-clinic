type Tone =
  | "navy"
  | "rose"
  | "azure"
  | "sand"
  | "moss"
  | "ink"
  | "warm-light";

type Pattern = "arc" | "grid" | "wave" | "dot" | "line" | "circle";

const TONES: Record<Tone, { from: string; to: string; ink: string }> = {
  navy: { from: "#1E2A4A", to: "#3A4B7A", ink: "#E5E3DE" },
  rose: { from: "#E8C5B5", to: "#F4DCD0", ink: "#3C2A22" },
  azure: { from: "#D6E2F0", to: "#A8B8D8", ink: "#1F2A44" },
  sand: { from: "#E8DFCF", to: "#F2EBD8", ink: "#3C342A" },
  moss: { from: "#B7C0A8", to: "#D8DDC8", ink: "#2A3022" },
  ink: { from: "#1A1A1A", to: "#2F2F2D", ink: "#FAFAF7" },
  "warm-light": { from: "#F2EFE6", to: "#EAE6D8", ink: "#3A3A36" },
};

export function MoodPlaceholder({
  tone = "warm-light",
  pattern = "arc",
  label,
  caption,
  aspect = "square",
  className = "",
}: {
  tone?: Tone;
  pattern?: Pattern;
  label?: string;
  caption?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide" | "full";
  className?: string;
}) {
  const t = TONES[tone];

  const aspectClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    wide: "aspect-[16/9]",
    full: "",
  }[aspect];

  return (
    <div
      className={`relative overflow-hidden ${aspectClass} ${className}`}
      style={{
        background: `linear-gradient(135deg, ${t.from} 0%, ${t.to} 100%)`,
        color: t.ink,
      }}
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <filter id={`grain-${tone}-${pattern}`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0"
            />
          </filter>
        </defs>

        {pattern === "arc" && (
          <g
            stroke={t.ink}
            strokeWidth="0.4"
            fill="none"
            opacity="0.5"
          >
            <circle cx="100" cy="220" r="180" />
            <circle cx="100" cy="220" r="150" />
            <circle cx="100" cy="220" r="120" />
            <circle cx="100" cy="220" r="90" />
          </g>
        )}

        {pattern === "grid" && (
          <g stroke={t.ink} strokeWidth="0.3" opacity="0.4">
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 22}
                x2="200"
                y2={i * 22}
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 22}
                y1="0"
                x2={i * 22}
                y2="200"
              />
            ))}
          </g>
        )}

        {pattern === "wave" && (
          <g stroke={t.ink} fill="none" strokeWidth="0.5" opacity="0.5">
            {Array.from({ length: 7 }).map((_, i) => (
              <path
                key={i}
                d={`M -10 ${40 + i * 25} Q 50 ${20 + i * 25} 100 ${
                  40 + i * 25
                } T 210 ${40 + i * 25}`}
              />
            ))}
          </g>
        )}

        {pattern === "dot" && (
          <g fill={t.ink} opacity="0.35">
            {Array.from({ length: 12 }).map((_, r) =>
              Array.from({ length: 12 }).map((_, c) => (
                <circle
                  key={`${r}-${c}`}
                  cx={10 + c * 16}
                  cy={10 + r * 16}
                  r="1"
                />
              )),
            )}
          </g>
        )}

        {pattern === "line" && (
          <g stroke={t.ink} strokeWidth="0.4" opacity="0.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1={-10}
                y1={i * 18}
                x2={210}
                y2={i * 18 + 40}
              />
            ))}
          </g>
        )}

        {pattern === "circle" && (
          <g stroke={t.ink} fill="none" strokeWidth="0.5" opacity="0.55">
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="20" />
          </g>
        )}

        <rect
          width="200"
          height="200"
          filter={`url(#grain-${tone}-${pattern})`}
        />
      </svg>

      {(label || caption) && (
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {caption && (
            <p
              className="text-[10px] tracking-[0.18em] uppercase mb-2 opacity-70"
              style={{ color: t.ink }}
            >
              {caption}
            </p>
          )}
          {label && (
            <p
              className="font-display italic text-[28px] md:text-[32px] leading-tight"
              style={{ color: t.ink }}
            >
              {label}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
