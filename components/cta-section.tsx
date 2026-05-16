"use client"

import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-r from-[#211629] to-[#31203d] py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-4 font-serif text-4xl font-bold text-white">
          Ready to Find Your Musical Soulmate?
        </h2>
        <p className="mb-8 text-lg text-white/80">
          Join thousands of music lovers finding real connections across the globe.
        </p>
        <Button size="lg" className="landing-primary-button bg-white text-foreground hover:bg-white/90">
          Get Started Free
        </Button>
      </div>
    </section>
  )
}
