"use client"

import { useEffect, useRef, useState } from "react"
import { Music2, Heart, Quote } from "lucide-react"

/* ─── Types ──────────────────────────────────────────────────────────────── */
interface Testimonial {
  names: string
  flags: string
  countries: string
  matchPct: number
  genres: string[]
  quote: string
  song: string
  image: string
  gradientFrom: string
  gradientTo: string
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const testimonials: Testimonial[] = [
  {
    names: "Sofia & James",
    flags: "🇧🇷 + 🇺🇸",
    countries: "Brazil & USA",
    matchPct: 94,
    genres: ["Jazz", "Bossa Nova"],
    quote:
      "We bonded over jazz and now we're planning our wedding in Rio. Music brought us together across 5,000 miles.",
    song: "Girl from Ipanema — João Gilberto",
    image: "/James and Sofia.png",
    gradientFrom: "#ff4f8b",
    gradientTo: "#7c3aed",
  },
  {
    names: "Aiko & Marco",
    flags: "🇯🇵 + 🇮🇹",
    countries: "Japan & Italy",
    matchPct: 91,
    genres: ["Classical", "Indie"],
    quote:
      "Music transcended our language barrier. Now we're composing our life together, one note at a time.",
    song: "Clair de Lune — Claude Debussy",
    image: "/Yuki and Marco.png",
    gradientFrom: "#7c3aed",
    gradientTo: "#06b6d4",
  },
  {
    names: "Amara & Pierre",
    flags: "🇰🇪 + 🇫🇷",
    countries: "Kenya & France",
    matchPct: 89,
    genres: ["Afrobeat", "Soul"],
    quote:
      "From different continents, same rhythm. Love found us through music and we've been dancing ever since.",
    song: "Water No Get Enemy — Fela Kuti",
    image: "/Amara & Lucas.png",
    gradientFrom: "#f59e0b",
    gradientTo: "#ef4444",
  },
]

/* ─── Animated match-percentage counter ─────────────────────────────────── */
function MatchCounter({
  target,
  gradientFrom,
  gradientTo,
}: {
  target: number
  gradientFrom: string
  gradientTo: string
}) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let current = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [visible, target])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span
        className="text-3xl font-black tabular-nums leading-none"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}%
      </span>
      <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        Match
      </span>
    </div>
  )
}

/* ─── Single testimonial card ────────────────────────────────────────────── */
function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <div
      className="testimonial-card group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 animate-fade-up"
      style={{
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow:
          "0 4px 32px rgba(124,58,237,0.10), 0 1.5px 6px rgba(0,0,0,0.06)",
        border: "1.5px solid rgba(255,255,255,0.7)",
        animationDelay: `${index * 0.12}s`,
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `0 8px 48px ${t.gradientFrom}45, 0 2px 16px ${t.gradientTo}30`,
        }}
      />

      {/* ── Couple image ── */}
      <div className="relative h-60 overflow-hidden rounded-t-3xl bg-muted">
        <img
          src={t.image}
          alt={`${t.names} — Unity Dating success story`}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Fade-to-white overlay at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.95) 100%)",
          }}
        />

        {/* Match badge — top right */}
        <div
          className="match-badge absolute right-4 top-4 flex flex-col items-center justify-center rounded-2xl px-3 py-2 shadow-xl transition-all duration-300 group-hover:scale-110"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
            border: `1.5px solid ${t.gradientFrom}55`,
          }}
        >
          <MatchCounter
            target={t.matchPct}
            gradientFrom={t.gradientFrom}
            gradientTo={t.gradientTo}
          />
        </div>

        {/* Flags badge — top left */}
        <div
          className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold shadow-lg"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
            border: "1.5px solid rgba(255,255,255,0.8)",
          }}
        >
          <span>{t.flags}</span>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="relative flex flex-1 flex-col p-6">
        {/* Names + countries row */}
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground leading-tight">
              {t.names}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">{t.countries}</p>
          </div>
          <div
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full shadow-md transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})`,
            }}
          >
            <Heart className="h-4 w-4 fill-white text-white" />
          </div>
        </div>

        {/* Genre badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          {t.genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm"
              style={{
                background: `linear-gradient(90deg, ${t.gradientFrom}, ${t.gradientTo})`,
              }}
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Quote */}
        <div className="relative mb-5 flex-1">
          <Quote
            className="absolute -left-1 -top-1 h-6 w-6 opacity-15"
            style={{ color: t.gradientFrom }}
          />
          <p className="pl-5 text-sm italic leading-relaxed text-muted-foreground">
            &ldquo;{t.quote}&rdquo;
          </p>
        </div>

        {/* Their song */}
        <div
          className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 group-hover:brightness-95"
          style={{
            background: `linear-gradient(135deg, ${t.gradientFrom}14, ${t.gradientTo}14)`,
            border: `1px solid ${t.gradientFrom}28`,
          }}
        >
          <div
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})`,
            }}
          >
            <Music2 className="h-4 w-4 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Their Song
            </p>
            <p className="truncate text-xs font-semibold text-foreground">
              {t.song}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t-2 border-gray-200 py-32"
      style={{
        background:
          "linear-gradient(160deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 50%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Decorative background orbs */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "#ff4f8b" }}
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "#7c3aed" }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: "#06b6d4" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <div className="mb-20 text-center">
          {/* Pill label */}
          <div className="mb-6 flex justify-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg"
              style={{ background: "linear-gradient(90deg, #ff4f8b, #7c3aed)" }}
            >
              <Heart className="h-4 w-4 fill-white" />
              Real Success Stories
            </div>
          </div>

          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Love Found Through{" "}
            <span
              className="animate-shimmer"
              style={{
                background: "linear-gradient(90deg, #ff4f8b, #7c3aed, #ff4f8b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
              }}
            >
              Music
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real couples who discovered their perfect harmony — matched by genre,
            united by love
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.names} t={t} index={i} />
          ))}
        </div>

        {/* ── Bottom social proof strip ── */}
        <div className="mt-20 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16">
          {[
            { value: "10,000+", label: "Couples matched" },
            { value: "150+", label: "Countries represented" },
            { value: "94%", label: "Report lasting connection" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span
                className="text-3xl font-black"
                style={{
                  background: "linear-gradient(90deg, #ff4f8b, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
