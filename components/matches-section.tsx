import type { Match } from "@/lib/types"

interface MatchesSectionProps {
  matches: Match[]
}

export default function MatchesSection({ matches }: MatchesSectionProps) {
  if (matches.length === 0) return null

  return (
    <section id="matches" className="mt-12">
      <h3 className="mb-6 text-2xl font-bold text-foreground">Your Matches</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {matches.map((match) => (
          <div key={match.id} className="rounded-lg bg-card p-6 shadow">
            <h4 className="mb-2 text-xl font-bold text-card-foreground">{match.name}</h4>
            <p className="text-muted-foreground">{match.location}</p>
            <p className="mt-2 text-sm text-muted-foreground">Compatibility: {match.compatibility}%</p>
          </div>
        ))}
      </div>
    </section>
  )
}
