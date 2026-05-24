"use client"

import { Heart, Music, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import FloatingParticles from "@/components/floating-particles"

export default function CTASection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>(0.15)

  const scrollToForm = () => {
    document.getElementById("profile-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTestimonials = () => {
    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y-2 border-gray-200 py-32"
    >
      {/* ── Animated gradient background ── */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: "linear-gradient(135deg, rgba(255,79,139,0.15), rgba(124,58,237,0.12), rgba(14,165,233,0.1), rgba(255,79,139,0.15))",
          backgroundSize: "300% 300%",
        }}
      />

      {/* ── Radial glow ── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(139,92,246,0.12),transparent_60%)]" />
      </div>

      {/* ── Floating particles ── */}
      <FloatingParticles
        count={14}
        symbols={["♪", "♫", "❤", "✦", "♬"]}
        className="opacity-40"
        zIndex={1}
      />

      {/* ── Decorative rotating ring ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full border border-purple-300/10 animate-rotate-slow"
        style={{ borderStyle: "dashed" }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full border border-pink-300/5 animate-rotate-slow"
        style={{ borderStyle: "dashed", animationDirection: "reverse", animationDuration: "30s" }}
      />

      <div
        className="relative mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12"
        style={{ zIndex: 2 }}
      >
        {/* ── Animated icons ── */}
        <div
          className="mb-10 flex justify-center gap-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="relative">
            <Heart
              className="h-14 w-14 text-pink-500 animate-bounce-gentle"
              style={{ filter: "drop-shadow(0 0 12px rgba(255,79,139,0.5))" }}
            />
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full border-2 border-pink-400/40 animate-pulse-ring"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="relative" style={{ animationDelay: "0.4s" }}>
            <Music
              className="h-14 w-14 text-purple-500 animate-bounce-gentle"
              style={{ filter: "drop-shadow(0 0 12px rgba(124,58,237,0.5))", animationDelay: "0.4s" }}
            />
          </div>
          <div className="relative" style={{ animationDelay: "0.8s" }}>
            <Sparkles
              className="h-14 w-14 text-blue-400 animate-bounce-gentle"
              style={{ filter: "drop-shadow(0 0 12px rgba(14,165,233,0.5))", animationDelay: "0.8s" }}
            />
          </div>
        </div>

        {/* ── Headline ── */}
        <h2
          className="mb-8 font-serif text-4xl font-bold text-foreground sm:text-5xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          Your Musical Soulmate{" "}
          <span
            className="animate-shimmer"
            style={{
              background: "linear-gradient(90deg, #ff4f8b, #7c3aed, #ff4f8b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
            }}
          >
            Awaits
          </span>
        </h2>

        <p
          className="mb-10 text-xl text-muted-foreground"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          Join thousands of music lovers who have found their perfect harmony.
          Start your journey to love today.
        </p>

        {/* ── CTA buttons ── */}
        <div
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
          }}
        >
          <button
            onClick={scrollToForm}
            className="group relative ripple-container btn-press inline-flex items-center justify-center gap-2 rounded-full px-10 py-5 text-xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40 animate-pulse-glow"
            style={{ background: "linear-gradient(90deg, #ff4f8b, #7c3aed)" }}
          >
            <Heart className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:rotate-12" />
            Join Unity Dating
            {/* Shimmer sweep */}
            <span className="pointer-events-none absolute inset-0 rounded-full overflow-hidden">
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                }}
              />
            </span>
          </button>

          <button
            onClick={scrollToTestimonials}
            className="group ripple-container btn-press inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/40 bg-transparent px-10 py-5 text-xl font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:border-primary/70 hover:shadow-lg hover:shadow-purple-500/20"
          >
            View Success Stories
          </button>
        </div>

        {/* ── Trust badges ── */}
        <div
          className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-gray-200/60 bg-background/30 px-10 py-8 backdrop-blur-sm sm:flex-row sm:justify-center sm:gap-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s",
          }}
        >
          {[
            { label: "100% Free to Join" },
            { label: "Verified Profiles Only" },
            { label: "Safe & Secure" },
          ].map(({ label }) => (
            <div key={label} className="group flex items-center gap-2">
              <svg
                className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
