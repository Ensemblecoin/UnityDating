"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import ProfileForm from "@/components/profile-form"
import MatchesSection from "@/components/matches-section"
import type { Match } from "@/lib/types"

export default function FindMatchPage() {
  const router = useRouter()
  const [matches, setMatches] = useState<Match[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check authentication
    const isAuth = localStorage.getItem("unity_auth")
    if (!isAuth) {
      router.push("/signin")
      return
    }
    setIsAuthenticated(true)
  }, [router])

  const handleMatchesFound = (foundMatches: Match[]) => {
    setMatches(foundMatches)
    setTimeout(() => {
      document.getElementById("matches")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border p-4 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/unity-logo.png"
              alt="Unity Dating Logo"
              width={40}
              height={47}
              className="h-auto w-[40px]"
            />
            <span className="text-2xl font-bold text-primary">UNITY</span>
          </Link>
        </div>
      </header>

      <main className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Find Your Match</h1>
            <p className="text-lg text-muted-foreground">
              Share your musical preferences and discover compatible partners
            </p>
          </div>

          <ProfileForm onMatchesFound={handleMatchesFound} />
          <MatchesSection matches={matches} />
        </div>
      </main>
    </div>
  )
}
