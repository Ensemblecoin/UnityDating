"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Music, Heart, Globe } from "lucide-react"

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("profile-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToFeatures = () => {
    document.getElementById("features-showcase")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%239C92AC" fillOpacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8 flex justify-center lg:justify-start">
              <Image
                src="/Unity Transparent Logo.png"
                alt="Unity Dating Logo - Colorful heart-shaped spade filled with international flags"
                width={200}
                height={233}
                priority
                className="h-auto w-[200px] drop-shadow-2xl"
              />
            </div>
            
            <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Where Love
              <span className="block text-primary">Unites Borders</span>
            </h1>
            
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              Connect with passionate music lovers across the globe. Share melodies, discover harmony, and find your perfect match.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold shadow-xl shadow-primary/30"
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToFeatures}
                className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold bg-transparent"
              >
                Learn More
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div className="flex flex-col items-center lg:items-start">
                <Music className="mb-2 h-8 w-8 text-primary" />
                <p className="text-sm font-semibold text-foreground">Musical</p>
                <p className="text-xs text-muted-foreground">Chemistry</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Globe className="mb-2 h-8 w-8 text-primary" />
                <p className="text-sm font-semibold text-foreground">Global</p>
                <p className="text-xs text-muted-foreground">Connections</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Heart className="mb-2 h-8 w-8 text-primary" />
                <p className="text-sm font-semibold text-foreground">Authentic</p>
                <p className="text-xs text-muted-foreground">Relationships</p>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image 
                src="/Couple listening to music.png" 
                alt="Romantic couple sharing headphones listening to music together"
                width={600}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-border bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Music className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Music-Based Matching</h3>
              <p className="text-muted-foreground">Our algorithm connects you based on shared musical tastes and preferences</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Globe className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Cross-Cultural Romance</h3>
              <p className="text-muted-foreground">Break barriers and discover love beyond borders with our global community</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Heart className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Authentic Connections</h3>
              <p className="text-muted-foreground">Verified profiles ensure genuine conversations and meaningful relationships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
