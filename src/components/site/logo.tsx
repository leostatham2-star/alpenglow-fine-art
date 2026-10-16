"use client";

interface LogoProps {
  className?: string;
  light?: boolean;
  compact?: boolean;
}

export function Logo({ className = "", light = false, compact = false }: LogoProps) {
  const ink = light ? "#f7f2e9" : "#26211a";
  const gold = "#b3812f";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="Alpenglow Fine Art">
      <svg
        width={compact ? 30 : 38}
        height={compact ? 30 : 38}
        viewBox="0 0 44 44"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="27" cy="15" r="6.5" stroke={gold} strokeWidth="1.6" />
        <path
          d="M3 34 L15 18 L23 28 L29 21 L41 34"
          stroke={ink}
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M8 34 L19 24 L28 34"
          stroke={ink}
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M2 38 H42" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-sans font-medium uppercase"
          style={{
            color: ink,
            letterSpacing: "0.32em",
            fontSize: compact ? "0.78rem" : "0.95rem",
            textShadow: light ? "0 1px 8px rgba(33,28,20,0.55)" : "none",
          }}
        >
          Alpenglow
        </span>
        {!compact && (
          <span
            className="font-sans uppercase mt-1.5"
            style={{
              color: light ? "#e5c584" : gold,
              letterSpacing: "0.42em",
              fontSize: "0.55rem",
              textShadow: light ? "0 1px 6px rgba(33,28,20,0.6)" : "none",
            }}
          >
            Fine Art Photography
          </span>
        )}
      </span>
    </span>
  );
}
