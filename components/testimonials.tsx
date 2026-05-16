"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah & Marcus",
    location: "London & Berlin",
    text: "We connected through our love of jazz and indie rock. The virtual music room made it so easy to get to know each other!",
    rating: 5,
  },
  {
    name: "Emma",
    location: "Tokyo",
    text: "Finally found someone who understands my music taste. The AI translation made conversations feel natural despite the language barrier.",
    rating: 5,
  },
  {
    name: "James & Lisa",
    location: "Sydney & Vancouver",
    text: "We've been together for 6 months now. Unity Dating brought us together and we're forever grateful!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-[#f3e8ff] to-[#eadcff] py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-foreground">
          Love Stories from Our Community
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg border border-border bg-white p-6">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
