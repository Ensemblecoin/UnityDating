"use client"

import { Music, Globe, Heart, Zap } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Music-Based Matching",
    description: "Connect with people who share your favorite genres and musical taste.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Meet music lovers from around the world with AI-powered translation.",
  },
  {
    icon: Heart,
    title: "Real Connections",
    description: "Video chat, share playlists, and build meaningful relationships.",
  },
  {
    icon: Zap,
    title: "Instant Compatibility",
    description: "See your compatibility score based on musical preferences.",
  },
]

export default function FeaturesShowcase() {
  return (
    <section id="features" className="relative bg-white py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">
            Why Choose Unity Dating?
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience dating reimagined for music lovers
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="rounded-lg border border-border p-6">
                <Icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
