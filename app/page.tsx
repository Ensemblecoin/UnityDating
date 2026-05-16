"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturesShowcase from "@/components/features-showcase"
import VirtualMusicRoom from "@/components/virtual-music-room"
import ProfileForm from "@/components/profile-form"
import MatchesSection from "@/components/matches-section"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import type { UserProfile, Match } from "@/lib/types"

export default function Home() {
  const [matches, setMatches] = useState<Match[]>([])

  const handleMatchesFound = (foundMatches: Match[]) => {
    setMatches(foundMatches)
    // Scroll to matches section
    setTimeout(() => {
      document.getElementById("matches")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f3e8ff]">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesShowcase />
        <VirtualMusicRoom />
        <div className="relative bg-gradient-to-b from-[#eadcff] via-[#f8f1ff] to-[#eadcff] py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTg3NmJjIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
          </div>
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">Start Your Love Story</h2>
              <p className="text-lg text-muted-foreground">Fill out your profile and discover your musical soulmate</p>
            </div>
            <ProfileForm onMatchesFound={handleMatchesFound} />
            <MatchesSection matches={matches} />
          </div>
        </div>
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
