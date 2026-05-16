"use client"

import { Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Match } from "@/lib/types"

interface MatchesSectionProps {
  matches: Match[]
}

export default function MatchesSection({ matches }: MatchesSectionProps) {
  if (matches.length === 0) {
    return null
  }

  return (
    <section id="matches" className="relative bg-white py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-foreground">
          Your Matches
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {matches.map((match) => (
            <div key={match.id} className="rounded-lg border border-border p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{match.user.name}, {match.user.age}</h3>
                  <p className="text-sm text-muted-foreground">{match.user.location}</p>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {match.compatibilityScore}%
                </div>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{match.user.bio}</p>
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground">Common Genres:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {match.commonGenres.map((genre) => (
                    <span key={genre} className="rounded-full bg-secondary px-3 py-1 text-xs">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Like
                </Button>
                <Button size="sm" className="flex-1">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
