"use client"

import { useEffect, useRef, useState } from "react"
import { Headphones, Sparkles, Video } from "lucide-react"

/* ─── Types ───────────────────────────────────────────────────────────────── */
interface Step {
  number: number
  icon: React.ElementType
  title: string
  description: string
  gradient: string
  glowColor: string
  accentColor: string
  preview: React.ReactNode
}

/* ─── Step 1 preview — Genre badges ──────────────────────────────────────── */
function GenrePreview() {
  const genres = [
    { label: "Pop", delay: "0s" },
    { label: "R&B", delay: "0.1s" },
    { label: "Jazz", delay: "0.2s" },
    { label: "Latin", delay: "0.3s" },
    { label: "Indie", delay: "0.4s" },
    { label: "Soul", delay: "0.5s" },
    { label: "K-Pop", delay: "0.6s" },
    { label: "Afrobeat", delay: "0.7s" },
  ]

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {genres.map(({ label, delay }) => (
        <span
          key={label}
          className="rounded-full px-3 py-1.5 text-xs font-bold border transition-all duration-300 hover:scale-110 cursor-default animate-fade-up"
          style={{
            background: "linear-gradient(135deg, rgba(255,79,139,0.15), rgba(124,58,237,0.15))",
            borderColor: "rgba(255,79,139,0.35)",
            color: "#ff4f8b",
            animationDelay: delay,
          }}
        >
          {label}
        </span>
      ))}
    </div>
  )
}

/* ─── Step 2 preview — Match compatibility card ──────────────────────────── */
function MatchPreview() {
  const matches = [
    { initials: "S", flag: "🇧🇷", name: "Sofia", score: 94, color: "from-pink-400 to-purple-600" },
    { initials: "A", flag: "🇯🇵", name: "Aiko", score: 88, color: "from-purple-400 to-blue-500" },
    { initials: "M", flag: "🇫🇷", name: "Marie", score: 82, color: "from-pink-500 to-rose-400" },
  ]

  return (
    <div className="flex flex-col gap-2 w-full">
      {matches.map(({ initials, flag, name, score, color }, i) => (
        <div
          key={name}
          className="flex items-center gap-3 rounded-2xl px-4 py-2.5 border border-white/10 animate-fade-up"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(8px)",
            animationDelay: `${i * 0.12}s`,
          }}
        >
          <div
            className={`h-8 w-8 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-md`}
          >
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white/90 text-xs font-semibold truncate">
              {name} {flag}
            </p>
            <div className="mt-1 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${score}%`,
                  background: "linear-gradient(90deg, #ff4f8b, #7c3aed)",
                }}
              />
            </div>
          </div>
          <span
            className="text-xs font-black flex-shrink-0"
            style={{
              background: "linear-gradient(90deg, #ff4f8b, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {score}%
          </span>
        </div>
      ))}
    </div>
  )
}

/* ─── Step 3 preview — Video chat interface ──────────────────────────────── */
function VideoPreview() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-white/15 shadow-xl"
      style={{ background: "rgba(16,24,39,0.7)", backdropFilter: "blur(12px)" }}
    >
      {/* Video grid */}
      <div className="grid grid-cols-2 gap-1.5 p-2">
        {/* Remote user */}
        <div
          className="relative rounded-xl overflow-hidden aspect-video flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(255,79,139,0.3))" }}
        >
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
            S
          </div>
          <span className="absolute bottom-1.5 left-2 text-[9px] text-white/70 font-medium">Sofia 🇧🇷</span>
          {/* Live indicator */}
          <span className="absolute top-1.5 right-1.5 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[8px] text-white/60">LIVE</span>
          </span>
        </div>

        {/* Local user */}
        <div
          className="relative rounded-xl overflow-hidden aspect-video flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(255,79,139,0.3), rgba(124,58,237,0.4))" }}
        >
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
            Y
          </div>
          <span className="absolute bottom-1.5 left-2 text-[9px] text-white/70 font-medium">You 🎵</span>
        </div>
      </div>

      {/* Now playing bar */}
      <div className="mx-2 mb-2 flex items-center gap-2 rounded-xl px-3 py-2 border border-white/10"
        style={{ background: "rgba(255,79,139,0.12)" }}
      >
        <div className="flex items-end gap-[2px] h-4 flex-shrink-0">
          {[2, 4, 3, 5, 3, 2].map((h, i) => (
            <span
              key={i}
              className="inline-block w-[2px] rounded-full bg-pink-400 animate-wave-bar"
              style={{ height: `${h * 3}px`, animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <p className="text-white/80 text-[10px] font-semibold truncate flex-1">
          Blinding Lights · The Weeknd
        </p>
        <span
          className="text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
          style={{ background: "rgba(124,58,237,0.4)", color: "#c084fc" }}
        >
          AI ✦
        </span>
      </div>
    </div>
  )
}

/* ─── Connector arrow between steps ──────────────────────────────────────── */
function StepConnector() {
  return (
    <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-16 mt-[-60px]">
      <div className="relative flex items-center gap-1">
        {/* Dashed line */}
        <div
          className="h-px w-10"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(255,79,139,0.5) 0px, rgba(255,79,139,0.5) 4px, transparent 4px, transparent 8px)",
          }}
        />
        {/* Arrow head */}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M1 5H9M9 5L5.5 1.5M9 5L5.5 8.5" stroke="rgba(255,79,139,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

/* ─── Individual step card ────────────────────────────────────────────────── */
function StepCard({
  step,
  isVisible,
  index,
}: {
  step: Step
  isVisible: boolean
  index: number
}) {
  const Icon = step.icon

  return (
    <div
      className="group relative flex flex-col rounded-3xl border overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
      style={{
        borderColor: "rgba(255,255,255,0.1)",
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(124,58,237,0.12) 50%, rgba(255,79,139,0.08) 100%)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s, box-shadow 0.3s ease, scale 0.3s ease`,
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${step.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Card body */}
      <div className="relative flex flex-col h-full p-7">
        {/* Step number + icon row */}
        <div className="flex items-start justify-between mb-6">
          {/* Step number badge */}
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-white shadow-md flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            {step.number}
          </div>

          {/* Icon container */}
          <div className="relative">
            {/* Glow behind icon */}
            <div
              className="absolute inset-0 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
              style={{ background: step.gradient }}
            />
            <div
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{ background: step.gradient }}
            >
              <Icon className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-black text-white leading-tight tracking-tight">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
          {step.description}
        </p>

        {/* Visual preview */}
        <div className="mt-auto">{step.preview}</div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-[3px] w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: step.gradient }}
      />
    </div>
  )
}

/* ─── Main section ────────────────────────────────────────────────────────── */
export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const steps: Step[] = [
    {
      number: 1,
      icon: Headphones,
      title: "Choose Your Sound",
      description:
        "Pick your favourite genres, artists, moods, and languages. Your taste is your fingerprint — we use it to find people who truly get you.",
      gradient: "linear-gradient(135deg, #ff4f8b 0%, #e11d74 100%)",
      glowColor: "rgba(255,79,139,0.25)",
      accentColor: "#ff4f8b",
      preview: <GenrePreview />,
    },
    {
      number: 2,
      icon: Sparkles,
      title: "Get Matched by Musical Chemistry",
      description:
        "Unity finds people who connect with your taste and personality. Our algorithm goes beyond looks — it listens.",
      gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
      glowColor: "rgba(124,58,237,0.25)",
      accentColor: "#7c3aed",
      preview: <MatchPreview />,
    },
    {
      number: 3,
      icon: Video,
      title: "Meet in a Music Room",
      description:
        "Video chat, share playlists, and let AI translation help you connect — no matter where in the world you both are.",
      gradient: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)",
      glowColor: "rgba(14,165,233,0.2)",
      accentColor: "#0ea5e9",
      preview: <VideoPreview />,
    },
  ]

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden py-28 sm:py-32"
      style={{
        background:
          "linear-gradient(180deg, #101827 0%, #130d24 50%, #101827 100%)",
      }}
    >
      {/* ── Background orbs ── */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "#ff4f8b" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "#7c3aed" }}
      />

      {/* ── Subtle grid overlay ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <div
          className="mb-20 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Eyebrow label */}
          <div className="mb-5 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{
                borderColor: "rgba(255,79,139,0.35)",
                background: "rgba(255,79,139,0.1)",
                color: "#ff4f8b",
              }}
            >
              <Sparkles className="h-3 w-3" />
              How It Works
            </span>
          </div>

          <h2
            className="mb-5 font-serif font-black tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.15 }}
          >
            Three Steps to Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #ff4f8b, #c084fc, #ff4f8b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "shimmer 3s linear infinite",
              }}
            >
              Musical Match
            </span>
          </h2>

          <p
            className="mx-auto max-w-xl text-base sm:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            From your first playlist to your first date — Unity makes every step feel effortless.
          </p>
        </div>

        {/* ── Steps grid ── */}
        <div>
          {/* Desktop: use a flex row so connectors sit naturally between cards */}
          <div className="hidden lg:flex lg:items-start lg:gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-start flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <StepCard step={step} isVisible={isVisible} index={index} />
                </div>
                {index < steps.length - 1 && <StepConnector />}
              </div>
            ))}
          </div>

          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-6 lg:hidden">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} isVisible={isVisible} index={index} />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA nudge ── */}
        <div
          className="mt-16 flex justify-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s",
          }}
        >
          <button
            onClick={() =>
              document.getElementById("profile-form")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40"
            style={{ background: "linear-gradient(90deg, #ff4f8b, #7c3aed)" }}
          >
            <Headphones className="h-4 w-4 transition-transform group-hover:scale-125" />
            Start Your Journey — It's Free
          </button>
        </div>
      </div>
    </section>
  )
}
