"use client"

import { Button } from "@/components/ui/button"
import { Heart, Music } from "lucide-react"

export default function CTASection() {
  const scrollToForm = () => {
    document.getElementById("profile-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTestimonials = () => {
    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden border-y-2 border-gray-200 bg-gradient-to-r from-primary/20 via-secondary to-primary/20 py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
        <div className="mb-10 flex justify-center gap-6">
          <Heart className="h-16 w-16 animate-pulse text-primary" />
          <Music className="h-16 w-16 animate-pulse text-primary delay-150" />
        </div>
        
        <h2 className="mb-8 font-serif text-4xl font-bold text-foreground sm:text-5xl">
          Your Musical Soulmate Awaits
        </h2>
        
        <p className="mb-10 text-xl text-muted-foreground">
          Join thousands of music lovers who have found their perfect harmony. 
          Start your journey to love today.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-xl font-bold shadow-2xl shadow-primary/40"
          >
            Join Unity Dating
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToTestimonials}
            className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-7 text-xl font-semibold bg-transparent"
          >
            View Success Stories
          </Button>
        </div>
        
        <div className="mt-14 flex flex-col items-center gap-4 rounded-xl border border-gray-200/60 bg-background/30 px-10 py-8 backdrop-blur-sm sm:flex-row sm:justify-center sm:gap-10">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-muted-foreground">100% Free to Join</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-muted-foreground">Verified Profiles Only</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-muted-foreground">Safe & Secure</span>
          </div>
        </div>
      </div>
    </section>
  )
}
