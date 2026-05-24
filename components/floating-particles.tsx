"use client"



/* ─── Individual particle config ─────────────────────────────────────────── */
interface Particle {
  id: number
  /** Symbol rendered inside the particle */
  symbol: string
  /** Left offset as a percentage */
  left: number
  /** Bottom offset as a percentage */
  bottom: number
  /** Animation duration in seconds */
  duration: number
  /** Animation delay in seconds */
  delay: number
  /** Font size in px */
  size: number
  /** Which keyframe variant to use */
  variant: "normal" | "alt"
  /** Opacity */
  opacity: number
}

/* ─── Deterministic pseudo-random seeded by index ───────────────────────── */
function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

/* ─── Props ──────────────────────────────────────────────────────────────── */
interface FloatingParticlesProps {
  /** Number of particles to render (default: 18) */
  count?: number
  /**
   * Symbols to cycle through.
   * Defaults to music notes + hearts + sparkles.
   */
  symbols?: string[]
  /** Extra className on the wrapper div */
  className?: string
  /** z-index of the wrapper (default: 0) */
  zIndex?: number
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function FloatingParticles({
  count = 18,
  symbols = ["♪", "♫", "♬", "♩", "❤", "✦", "✧", "◆"],
  className = "",
  zIndex = 0,
}: FloatingParticlesProps) {
  const particles: Particle[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    symbol: symbols[i % symbols.length],
    left: seededRandom(i * 3) * 95,
    bottom: seededRandom(i * 7) * 30,
    duration: 5 + seededRandom(i * 11) * 7,
    delay: seededRandom(i * 13) * 8,
    size: 10 + seededRandom(i * 17) * 14,
    variant: i % 3 === 0 ? "alt" : "normal",
    opacity: 0.25 + seededRandom(i * 19) * 0.45,
  }))

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className={
            p.variant === "alt"
              ? "animate-float-particle-alt absolute select-none"
              : "animate-float-particle absolute select-none"
          }
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
            color: p.id % 2 === 0 ? "#ff4f8b" : "#c084fc",
          } as React.CSSProperties}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}
