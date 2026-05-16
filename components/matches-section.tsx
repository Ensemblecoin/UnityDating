import type { Match } from "@/lib/types"

interface MatchesSectionProps {
  matches: Match[]
}

export default function MatchesSection({ matches }: MatchesSectionProps) {
  if (matches.length === 0) {
    return null
  }

  return (
    <section id="matches" className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-foreground">Your Matches</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches.map((match) => (
          <div key={match.id} className="bg-white rounded-lg p-6 border border-border">
            <h4 className="text-xl font-semibold mb-2">{match.name}, {match.age}</h4>
            <p className="text-muted-foreground mb-4">{match.bio}</p>
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Genres: {match.genres.join(", ")}</p>
              <p className="text-sm font-medium">Languages: {match.languages.join(", ")}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{match.location}</span>
              <span className="text-lg font-bold text-primary">{match.compatibility}% Match</span>
            </div>
            <button className="landing-primary-button w-full mt-4">Connect</button>
          </div>
        ))}
      </div>
    </section>
  )
}
