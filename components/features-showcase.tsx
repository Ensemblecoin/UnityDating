export default function FeaturesShowcase() {
  const features = [
    {
      title: "Video Chat",
      description: "Connect face-to-face with AI translation in real-time"
    },
    {
      title: "Music Matching",
      description: "Match based on your favorite genres and playlists"
    },
    {
      title: "Global Community",
      description: "Connect with music lovers from around the world"
    },
    {
      title: "Virtual Music Room",
      description: "Share and discover music together in real-time"
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Why Unity Dating?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
