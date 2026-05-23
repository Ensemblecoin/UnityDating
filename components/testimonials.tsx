export default function Testimonials() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Success Stories</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-card p-6 shadow">
            <p className="mb-4 text-muted-foreground">"I found my soulmate through Unity Dating!"</p>
            <p className="font-bold text-card-foreground">- Sarah & John</p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow">
            <p className="mb-4 text-muted-foreground">"Amazing platform for music lovers."</p>
            <p className="font-bold text-card-foreground">- Emma & Mike</p>
          </div>
        </div>
      </div>
    </section>
  )
}
