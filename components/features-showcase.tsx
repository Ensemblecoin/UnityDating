"use client"

import { Music, MessageCircle, Shield, Globe, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Music Compatibility",
    description: "Advanced algorithm matches you with people who share your musical soul",
    color: "text-purple-500"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with passionate music lovers from over 150 countries worldwide",
    color: "text-blue-500"
  },
  {
    icon: MessageCircle,
    title: "Virtual Music Rooms",
    description: "Share playlists, listen together, and bond over your favorite songs",
    color: "text-pink-500"
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "Every member is verified for authenticity and genuine connections",
    color: "text-green-500"
  },
  {
    icon: Heart,
    title: "Real Relationships",
    description: "Over 10,000 couples have found lasting love through our platform",
    color: "text-red-500"
  },
  {
    icon: Sparkles,
    title: "Cultural Exchange",
    description: "Learn languages, explore cultures, and grow together through music",
    color: "text-yellow-500"
  }
]

export default function FeaturesShowcase() {
  return (
    <section id="features-showcase" className="border-t-2 border-gray-200 bg-background py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Why Choose Unity Dating
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Experience a revolutionary approach to international dating powered by music
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-card p-8 shadow-md transition-all hover:scale-105 hover:border-purple-300 hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <Icon className={`mb-4 h-12 w-12 ${feature.color}`} />
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
