export default function FeaturesShowcase() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-card p-6 shadow">
            <h3 className="mb-2 text-xl font-bold text-card-foreground">Video Chat</h3>
            <p className="text-muted-foreground">Connect face-to-face with AI translation</p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow">
            <h3 className="mb-2 text-xl font-bold text-card-foreground">Music Matching</h3>
            <p className="text-muted-foreground">Match based on your favorite genres</p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow">
            <h3 className="mb-2 text-xl font-bold text-card-foreground">Global Community</h3>
            <p className="text-muted-foreground">Connect with music lovers worldwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}
