"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sofia & James",
    countries: "Brazil & USA",
    quote: "We bonded over our love for jazz and now we're planning our wedding in Rio. Music brought us together across 5,000 miles.",
    image: "/James and Sofia.png"
  },
  {
    name: "Yuki & Marco",
    countries: "Japan & Italy",
    quote: "From Tokyo to Rome, our shared passion for classical music created an unbreakable bond. Unity Dating made the impossible possible.",
    image: "/Yuki and Marco.png"
  },
  {
    name: "Amara & Lucas",
    countries: "Kenya & France",
    quote: "We discovered we both loved Afrobeat and French pop. Now we're creating our own musical fusion and building a life together.",
    image: "/Amara & Lucas.png"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t-2 border-gray-200 bg-gradient-to-b from-background to-secondary py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Love Stories That Inspire
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real couples who found their harmony through Unity Dating
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden rounded-3xl border-2 border-gray-200 bg-card shadow-md transition-all hover:scale-105 hover:border-purple-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.name} - Happy couple from ${testimonial.countries}`}
                  className="h-full w-full object-cover object-top transition-transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
              </div>
              <CardContent className="relative p-8">
                <Quote className="absolute -top-3 left-8 h-8 w-8 text-primary opacity-20" />
                <p className="mb-6 italic text-muted-foreground leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t-2 border-gray-200 pt-5">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.countries}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
