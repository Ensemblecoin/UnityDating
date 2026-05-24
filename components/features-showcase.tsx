"use client"

import { Music, MessageCircle, Shield, Globe, Heart, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import AnimatedCounter from "@/components/animated-counter"
import FloatingParticles from "@/components/floating-particles"

const features = [
  {
    icon: Music,
    title: "Music Compatibility",
    description: "Advanced algorithm matches you with people who share your musical soul",
    color: "text-purple-500",
    gradient: "from-purple-500/20 to-purple-600/5",
    glowColor: "rgba(168,85,247,0.25)",
    delay: "0s",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with passionate music lovers from over 150 countries worldwide",
    color: "text-blue-500",
    gradient: "from-blue-500/20 to-blue-600/5",
    glowColor: "rgba(59,130,246,0.25)",
    delay: "0.08s",
  },
  {
    icon: MessageCircle,
    title: "Virtual Music Rooms",
    description: "Share playlists, listen together, and bond over your favorite songs",
    color: "text-pink-500",
    gradient: "from-pink-500/20 to-pink-600/5",
    glowColor: "rgba(236,72,153,0.25)",
    delay: "0.16s",
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "Every member is verified for authenticity and genuine connections",
    color: "text-green-500",
    gradient: "from-green-500/20 to-green-600/5",
    glowColor: "rgba(34,197,94,0.25)",
    delay: "0.24s",
  },
  {
    icon: Heart,
    title: "Real Relationships",
    description: "Over 10,000 couples have found lasting love through our platform",
    color: "text-red-500",
    gradient: "from-red-500/20 to-red-600/5",
    glowColor: "rgba(239,68,68,0.25)",
    delay: "0.32s",
  },
  {
    icon: Sparkles,
    title: "Cultural Exchange",
    description: "Learn languages, explore cultures, and grow together through music",
    color: "text-yellow-500",
    gradient: "from-yellow-500/20 to-yellow-600/5",
    glowColor: "rgba(234,179,8,0.25)",
    delay: "0.40s",
  },
]

/* ─── Stats row ──────────────────────────────────────────────────────────── */
const stats = [
  { value: 10000, suffix: "+", label: "Couples Matched" },
  { value: 150, suffix: "+", label: "Countries" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 50000, suffix: "+", label: "Active Members" },
]

export default function FeaturesShowcase() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>(0.1)
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>(0.2)

  return (
    <section
      id="features-showcase"
      ref={sectionRef}
      className="relative overflow-hidden border-t-2 border-gray-200 bg-background py-32"
    >
      {/* ── Subtle floating particles ── */}
      <FloatingParticles
        count={10}
        symbols={["♪", "♫", "✦", "◆"]}
        className="opacity-30"
        zIndex={0}
      />

      {/* ── Animated background gradient orbs ── */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full opacity-10 blur-3xl animate-breathe"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full opacity-10 blur-3xl animate-breathe"
        style={{ background: "radial-gradient(circle, #ff4f8b, transparent)", animationDelay: "1.2s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <div
          className="mb-20 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
        >
          {/* Eyebrow */}
          <div className="mb-5 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest animate-pulse-glow"
              style={{
                borderColor: "rgba(124,58,237,0.35)",
                background: "rgba(124,58,237,0.08)",
                color: "#7c3aed",
              }}
            >
              <Sparkles className="h-3 w-3" />
              Why Choose Unity Dating
            </span>
          </div>

          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Everything You Need to{" "}
            <span
              className="animate-shimmer"
              style={{
                background: "linear-gradient(90deg, #ff4f8b, #7c3aed, #ff4f8b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
              }}
            >
              Find Love
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Experience a revolutionary approach to international dating powered by music
          </p>
        </div>

        {/* ── Animated stats row ── */}
        <div
          ref={statsRef}
          className="mb-20 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map(({ value, suffix, label }, i) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 card-shimmer"
              style={{
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              {/* Glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)" }}
              />
              <p
                className="mb-1 text-3xl font-black"
                style={{
                  background: "linear-gradient(90deg, #ff4f8b, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <AnimatedCounter
                  target={value}
                  suffix={suffix}
                  active={statsVisible}
                  duration={1600}
                />
              </p>
              <p className="text-sm font-semibold text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Feature cards grid ── */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-card p-8 shadow-md transition-all duration-300 hover:scale-[1.04] hover:border-purple-300 hover:shadow-xl hover:shadow-primary/20 card-shimmer"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${feature.delay}, transform 0.6s ease ${feature.delay}`,
                }}
              >
                {/* Hover glow overlay */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${feature.glowColor} 0%, transparent 70%)`,
                  }}
                />

                {/* Gradient bg blob */}
                <div
                  className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Icon with bounce on hover */}
                <div className="relative mb-5 inline-flex">
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ background: feature.glowColor }}
                  />
                  <Icon
                    className={`relative h-12 w-12 ${feature.color} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Animated bottom accent */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"
                  style={{ background: "linear-gradient(90deg, #ff4f8b, #7c3aed)" }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
