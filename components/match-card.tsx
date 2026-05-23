"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Video } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Match } from "@/lib/types"

interface MatchCardProps {
  match: Match
}

export default function MatchCard({ match }: MatchCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const { toast } = useToast()

  const handleConnect = () => {
    toast({
      title: "Connection Request Sent!",
      description: `Your message has been sent to ${match.name}. They'll be notified soon!`,
    })
  }

  const handleVideoCall = () => {
    toast({
      title: "Virtual Music Room",
      description: `Preparing video chat with ${match.name}...`,
    })
    setTimeout(() => {
      document.getElementById("virtual-music-room")?.scrollIntoView({ behavior: "smooth" })
    }, 1000)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    if (!isLiked) {
      toast({
        title: "Match Liked!",
        description: `${match.name} has been added to your favorites`,
      })
    }
  }

  return (
    <Card className="overflow-hidden shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center justify-center">
          <img
            src={`https://flagcdn.com/w80/${match.countryCode}.png`}
            alt={`Flag of ${match.countryName}`}
            className="h-12 w-16 rounded-md object-cover shadow-md"
          />
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground">{match.name}</h3>
          <p className="italic text-muted-foreground">{match.countryName}</p>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-foreground">
            Music Genres:
          </p>
          <div className="flex flex-wrap gap-2">
            {match.musicGenres.map((genre) => (
              <Badge key={genre} variant="secondary" className="bg-primary text-primary-foreground">
                {genre}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-foreground">
            Languages:
          </p>
          <div className="flex flex-wrap gap-2">
            {match.languages.map((language) => (
              <Badge key={language} variant="outline">
                {language}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <div className="rounded-full bg-accent px-4 py-2 font-bold text-accent-foreground shadow-md">
            Match Score: {match.score}
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <Button
            onClick={handleLike}
            variant={isLiked ? "default" : "outline"}
            size="sm"
            className="flex-1 bg-transparent"
          >
            <Heart className={`mr-1 h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
            Like
          </Button>
          <Button
            onClick={handleConnect}
            variant="default"
            size="sm"
            className="flex-1"
          >
            <MessageCircle className="mr-1 h-4 w-4" />
            Connect
          </Button>
          <Button
            onClick={handleVideoCall}
            variant="outline"
            size="sm"
            className="flex-1 bg-transparent"
          >
            <Video className="mr-1 h-4 w-4" />
            Video
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
