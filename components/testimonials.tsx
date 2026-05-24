"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import FloatingParticles from "@/components/floating-particles"

const testimonials = [
  {
    name: "Sofia & James",
    countries: "Brazil & USA",
    quote: "We bonded over our love for jazz and now we're planning our wedding in Rio. Music brought us together across 5,000 miles.",
    image: "/James and Sofia.png",
    genres: ["Jazz", "Soul"],
    delay: "0s",
  },
  {
    name: "Yuki & Marco",
    countries: "Japan & Italy",
    quote: "From Tokyo to Rome, our shared passion for classical music created an unbreakable bond. Unity Dating made the impossible possible.",
    image: "/Yuki and Marco.png",
    genres: ["Classical", "Opera"],
    delay: "0.12s",
  },
  {
    name: "Amara & Lucas",
    countries: "Kenya & France",
    quote: "We discovered we both loved Afrobeat and French pop. Now we're creating our own musical fusion and building a life together.",
    image: "/Amara & Lucas.png",
    genres: ["Afrobeat", "Pop"],
    delay: "0.24s",
  },
]

export default function Testimonials() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>(0.1)

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden border-t-2 border-gray-200 bg-gradient-to-b from-background to-secondary py-32"
    >
      {/* ── Floating particles ── */}
      <FloatingParticles
        count={8}
        symbols={["❤", "♪", "✦", "♫"]}
        className="opacity-20"
        zIndex={0}
      />

      {/* ── Background orbs ── */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full opacity-10 blur-3xl animate-breathe"
        style={{ background: "radial-gradient(circle, #ff4f8b, transparent)" }}
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
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{
                borderColor: "rgba(255,79,139,0.35)",
                background: "rgba(255,79,139,0.08)",
                color: "#ff4f8b",
              }}
            >
              <Star className="h-3 w-3 fill-current" />
              Success Stories
            </span>
          </div>

          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Love Stories That{" "}
            <span
              className="animate-shimmer"
              style={{
                background: "linear-gradient(90deg, #ff4f8b, #7c3aed, #ff4f8b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
              }}
            >
              Inspire
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real couples who found their harmony through Unity Dating
          </p>
        </div>

        {/* ── Testimonial cards ── */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-card shadow-md transition-all duration-300 hover:scale-[1.03] hover:border-purple-300 hover:shadow-xl hover:shadow-primary/20 card-shimmer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.65s ease ${testimonial.delay}, transform 0.65s ease ${testimonial.delay}`,
              }}
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(255,79,139,0.1) 0%, transparent 70%)",
                }}
              />

              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.name} - Happy couple from ${testimonial.countries}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Genre badges overlay */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {testimonial.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm"
                      style={{ background: "rgba(124,58,237,0.7)" }}
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                {/* Star rating overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full px-2.5 py-1 backdrop-blur-sm"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <CardContent className="relative p-8">
                <Quote className="absolute -top-3 left-8 h-8 w-8 text-primary opacity-20 transition-opacity duration-300 group-hover:opacity-40" />
                <p className="mb-6 italic text-muted-foreground leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t-2 border-gray-200 pt-5">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.countries}</p>
                </div>

                {/* Animated bottom accent */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"
                  style={{ background: "linear-gradient(90deg, #ff4f8b, #7c3aed)" }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
