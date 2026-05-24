"use client"

import Image from "next/image"
import { Music, Heart, Globe, Headphones, Radio, Star } from "lucide-react"
import { useRouter } from "next/navigation"
import FloatingParticles from "@/components/floating-particles"

/* ─── Animated music-wave bar ─────────────────────────────────────────────── */
function WaveBar({ delay = "0s", height = "h-4" }: { delay?: string; height?: string }) {
  return (
    <span
      className={`inline-block w-[3px] ${height} rounded-full bg-white/70 animate-wave-bar origin-bottom`}
      style={{ animationDelay: delay }}
    />
  )
}

/* ─── App mockup card ─────────────────────────────────────────────────────── */
function AppMockup() {
  return (
    <div className="animate-float-card relative w-full max-w-[340px] mx-auto lg:mx-0 lg:ml-auto">
      {/* Glow halo behind card */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, #ff4f8b 0%, #7c3aed 60%, transparent 100%)" }}
      />

      {/* Main card */}
      <div
        className="relative rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(124,58,237,0.25) 50%, rgba(255,79,139,0.15) 100%)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Card header */}
        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                S
              </div>
              {/* Online indicator */}
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#1a0a2e]" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">Sofia M.</p>
              <p className="text-white/60 text-xs">🇧🇷 São Paulo</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-white/50 mb-1">Match score</span>
            <span
              className="text-2xl font-black animate-shimmer"
              style={{
                background: "linear-gradient(90deg, #ff4f8b, #c084fc, #ff4f8b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              92%
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5 h-px bg-white/10" />

        {/* Listening together */}
        <div className="px-5 py-3 flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-500 to-purple-700 flex items-center justify-center shadow-md">
              <Headphones className="h-4 w-4 text-white" />
            </div>
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-xl border border-pink-400/60 animate-pulse-ring" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white/90 text-xs font-semibold truncate">Listening together now</p>
            <p className="text-white/50 text-xs truncate">Blinding Lights · The Weeknd</p>
          </div>
          {/* Mini wave visualiser */}
          <div className="flex items-end gap-[2px] h-5 flex-shrink-0">
            <WaveBar delay="0s"    height="h-2" />
            <WaveBar delay="0.15s" height="h-4" />
            <WaveBar delay="0.3s"  height="h-3" />
            <WaveBar delay="0.45s" height="h-5" />
            <WaveBar delay="0.6s"  height="h-3" />
            <WaveBar delay="0.75s" height="h-2" />
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5 h-px bg-white/10" />

        {/* Genre badges */}
        <div className="px-5 py-3">
          <p className="text-white/50 text-xs mb-2 font-medium uppercase tracking-wider">Favourite Genres</p>
          <div className="flex flex-wrap gap-2">
            {["Pop", "R&B", "Latin", "Indie", "Soul"].map((genre) => (
              <span
                key={genre}
                className="rounded-full px-3 py-1 text-xs font-semibold text-white/90 border border-white/20"
                style={{ background: "rgba(255,79,139,0.18)" }}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5 h-px bg-white/10" />

        {/* CTA row */}
        <div className="px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white/60 text-xs ml-1">4.9</span>
          </div>
          <button
            className="rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-lg"
            style={{ background: "linear-gradient(90deg, #ff4f8b, #7c3aed)" }}
          >
            Send a Vibe ♪
          </button>
        </div>
      </div>

      {/* Floating badge — top right */}
      <div
        className="absolute -top-3 -right-3 rounded-2xl px-3 py-2 shadow-xl border border-white/20 text-center"
        style={{
          background: "linear-gradient(135deg, #7c3aed, #ff4f8b)",
          backdropFilter: "blur(10px)",
        }}
      >
        <p className="text-white text-[10px] font-semibold leading-tight">🌍 150+</p>
        <p className="text-white/80 text-[9px]">Countries</p>
      </div>

      {/* Floating badge — bottom left */}
      <div
        className="absolute -bottom-3 -left-3 rounded-2xl px-3 py-2 shadow-xl border border-white/20 flex items-center gap-2"
        style={{ background: "rgba(16,24,39,0.85)", backdropFilter: "blur(10px)" }}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
        <p className="text-white text-[10px] font-semibold">12,400 online now</p>
      </div>
    </div>
  )
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const router = useRouter()

  const scrollToForm = () => {
    document.getElementById("profile-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, #ff4f8b 0%, #7c3aed 45%, #101827 100%)",
      }}
    >
      {/* ── Animated gradient overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 animate-gradient-shift"
        style={{
          background:
            "linear-gradient(135deg, #ff4f8b, #7c3aed, #0ea5e9, #ff4f8b)",
          backgroundSize: "300% 300%",
        }}
      />

      {/* ── Floating music note particles ── */}
      <FloatingParticles count={22} zIndex={1} />

      {/* ── Subtle music-wave pattern overlay ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${10 + i * 12}%`,
              background:
                "linear-gradient(90deg, transparent 0%, white 30%, white 70%, transparent 100%)",
              transform: `scaleX(${0.4 + (i % 3) * 0.2})`,
              transformOrigin: i % 2 === 0 ? "left" : "right",
            }}
          />
        ))}
      </div>

      {/* ── Radial glow orbs ── */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl animate-breathe"
        style={{ background: "#ff4f8b" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-10 blur-3xl animate-breathe"
        style={{ background: "#7c3aed", animationDelay: "1.5s" }}
      />
      {/* ── Extra accent orb ── */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full opacity-20 blur-3xl animate-breathe"
        style={{ background: "#0ea5e9", animationDelay: "0.75s" }}
      />

      {/* ── Main content ── */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">

          {/* ── Left column ── */}
          <div className="text-center lg:text-left">

            {/* Logo pill */}
            <div
              className="mb-8 flex justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0s" }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm shadow-lg">
                <Image
                  src="/Unity Transparent Logo.png"
                  alt="Unity Dating Logo"
                  width={28}
                  height={32}
                  className="h-auto w-7 drop-shadow"
                />
                <span className="text-sm font-bold text-white tracking-widest uppercase">
                  Unity Dating
                </span>
                <span className="rounded-full bg-pink-500/80 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                  Beta
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="mb-6 font-serif font-black tracking-tight text-white animate-fade-up"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                lineHeight: 1.1,
                animationDelay: "0.1s",
              }}
            >
              Find Love Through{" "}
              <span
                className="animate-shimmer"
                style={{
                  background:
                    "linear-gradient(90deg, #fda4af, #f9a8d4, #e879f9, #fda4af)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% auto",
                }}
              >
                the Music
              </span>
              <br />
              You Already Love
            </h1>

            {/* Sub-headline */}
            <p
              className="mb-10 text-lg leading-relaxed text-white/75 sm:text-xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Unity Dating connects music lovers across cultures, languages, and borders
              through shared playlists, live music rooms, and real compatibility.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                onClick={scrollToForm}
                className="group relative ripple-container btn-press inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40 animate-pulse-glow"
                style={{ background: "linear-gradient(90deg, #ff4f8b, #7c3aed)" }}
              >
                <Heart className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:rotate-12" />
                Create Free Profile
                {/* Shimmer sweep */}
                <span className="pointer-events-none absolute inset-0 rounded-full overflow-hidden">
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                    }}
                  />
                </span>
              </button>

              <button
                onClick={() => router.push("/music-room")}
                className="group ripple-container btn-press inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/50 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Radio className="h-5 w-5 transition-transform group-hover:rotate-12" />
                Explore Music Room
              </button>
            </div>

            {/* Social proof strip */}
            <div
              className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-8 lg:items-start lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Avatar stack */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["🇧🇷", "🇯🇵", "🇫🇷", "🇳🇬"].map((flag, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-[#7c3aed] bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-sm shadow"
                    >
                      {flag}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">10,000+ couples</p>
                  <p className="text-white/60 text-xs">matched worldwide</p>
                </div>
                {/* Animated badge */}
                <span
                  className="ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold text-white animate-bounce-gentle"
                  style={{ background: "rgba(255,79,139,0.35)" }}
                >
                  ↑ Growing
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-10 w-px bg-white/20" />

              {/* Live wave indicator */}
              <div className="flex items-center gap-2">
                <div className="flex items-end gap-[3px] h-6">
                  <WaveBar delay="0s"   height="h-2" />
                  <WaveBar delay="0.2s" height="h-5" />
                  <WaveBar delay="0.4s" height="h-3" />
                  <WaveBar delay="0.6s" height="h-6" />
                  <WaveBar delay="0.8s" height="h-4" />
                  <WaveBar delay="1.0s" height="h-2" />
                  <WaveBar delay="1.2s" height="h-5" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Live music rooms</p>
                  <p className="text-white/60 text-xs">playing right now</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right column — App mockup ── */}
          <div
            className="flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <AppMockup />
          </div>
        </div>
      </div>

      {/* ── How It Works strip ── */}
      <div
        className="relative border-t border-white/10"
        style={{ background: "rgba(16,24,39,0.55)", backdropFilter: "blur(12px)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: Music,
                label: "Musical Chemistry",
                desc: "Algorithm matches on taste, not just looks",
                delay: "0s",
              },
              {
                icon: Globe,
                label: "Global Connections",
                desc: "150+ countries, one shared language: music",
                delay: "0.1s",
              },
              {
                icon: Heart,
                label: "Authentic Relationships",
                desc: "Verified profiles, real conversations",
                delay: "0.2s",
              },
            ].map(({ icon: Icon, label, desc, delay }) => (
              <div
                key={label}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/25 hover:scale-[1.03] hover:shadow-lg hover:shadow-pink-500/10 card-shimmer animate-fade-up"
                style={{ animationDelay: delay }}
              >
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: "linear-gradient(135deg, #ff4f8b, #7c3aed)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{label}</p>
                  <p className="text-xs text-white/55 leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
