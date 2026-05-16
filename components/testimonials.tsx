export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah",
      location: "London",
      quote: "I found my musical soulmate through Unity Dating! We bonded over indie rock."
    },
    {
      name: "Marco",
      location: "Milan",
      quote: "The AI translation feature made it so easy to connect with people from different countries."
    },
    {
      name: "Emma",
      location: "Berlin",
      quote: "Finally a dating app that understands my passion for music!"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-6 bg-muted rounded-lg">
              <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
