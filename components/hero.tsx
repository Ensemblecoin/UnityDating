"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f3e8ff] to-[#eadcff] py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Connect Through Music, Find Love Across Borders
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Unity Dating brings music lovers together worldwide. Video chat with AI translation, discover matches by genre, and build real connections.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="landing-primary-button">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="landing-secondary-button">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
