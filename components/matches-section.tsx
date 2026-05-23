"use client"

import type { Match } from "@/lib/types"
import MatchCard from "./match-card"

interface MatchesSectionProps {
  matches: Match[]
}

export default function MatchesSection({ matches }: MatchesSectionProps) {
  if (matches.length === 0) {
    return null
  }

  return (
    <section id="matches" className="mt-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-primary">
        Your Matches ({matches.length})
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  )
}
