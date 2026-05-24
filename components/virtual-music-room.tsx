"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Video, VideoOff, Mic, MicOff, Music, Languages, Share2, X, Play, Pause, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export default function VirtualMusicRoom() {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isTranslating, setIsTranslating] = useState(false)
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false)
  const [currentSong, setCurrentSong] = useState("")
  const [subscriptionLevel, setSubscriptionLevel] = useState("basic")
  const { toast } = useToast()

  useEffect(() => {
    const subscription = localStorage.getItem("unity_subscription") || "basic"
    setSubscriptionLevel(subscription)
  }, [])

  const mockPlaylists = [
    { id: 1, title: "Summer Vibes", artist: "Various Artists", songs: 15 },
    { id: 2, title: "Jazz Essentials", artist: "Miles Davis, John Coltrane", songs: 20 },
    { id: 3, title: "Classical Favorites", artist: "Mozart, Beethoven", songs: 12 },
  ]

  const canSharePlaylist = subscriptionLevel === "elite"

  const handlePlaylistToggle = () => {
    if (!canSharePlaylist) {
      toast({
        title: "Elite Feature",
        description: "Upgrade to Elite to share playlists with your matches!",
        variant: "destructive"
      })
      return
    }
    setIsPlaylistOpen(!isPlaylistOpen)
  }

  const handleSharePlaylist = (playlistTitle: string) => {
    if (!canSharePlaylist) {
      toast({
        title: "Elite Feature",
        description: "Playlist sharing is exclusive to Elite members.",
        variant: "destructive"
      })
      return
    }
    setCurrentSong(playlistTitle)
  }

  return (
    <section id="virtual-music-room" className="border-t-2 border-gray-200 bg-gradient-to-b from-background to-secondary py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Virtual Music Room
          </h2>
          <p className="text-xl text-muted-foreground">
            Connect face-to-face with AI translation and share your favorite music in real-time
          </p>
        </div>

        {/* Video Chat Demo */}
        <div className="mb-14 grid gap-8 md:grid-cols-2">
          {/* Main Video */}
          <Card className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-card p-0 shadow-md">
            <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 to-purple-600/30">
              <img 
                src="https://placehold.co/560x315?text=Your+Video+Feed+showing+you+in+video+chat+with+warm+lighting+and+friendly+smile"
                alt="Your Video Feed showing you in video chat with warm lighting and friendly smile"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 backdrop-blur-sm">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-white">You</span>
              </div>
              {isTranslating && (
                <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 backdrop-blur-sm">
                  <Languages className="h-4 w-4 text-white" />
                  <span className="text-sm font-semibold text-white">Translating...</span>
                </div>
              )}
            </div>
          </Card>

          {/* Partner Video */}
          <Card className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-card p-0 shadow-md">
            <div className="relative aspect-video bg-gradient-to-br from-pink-900/50 to-pink-600/30">
              <img 
                src="https://placehold.co/560x315?text=Partner+Video+Feed+showing+international+friend+smiling+in+conversation+natural+setting"
                alt="Partner Video Feed showing international friend smiling in conversation natural setting"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 backdrop-blur-sm">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-white">Maria from Spain</span>
              </div>
              {isTranslating && (
                <div className="absolute bottom-16 left-4 right-4 rounded-lg bg-black/80 p-3 backdrop-blur-sm">
                  <p className="text-sm text-white">"I love this song! It reminds me of summer in Barcelona."</p>
                  <p className="mt-1 text-xs text-gray-300 italic">Translated from Spanish</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Control Bar */}
        <div className="mb-14 flex justify-center">
          <Card className="inline-flex items-center gap-4 rounded-3xl border-2 border-gray-200 p-6 shadow-md">
            <Button
              size="lg"
              variant={isVideoOn ? "default" : "destructive"}
              onClick={() => setIsVideoOn(!isVideoOn)}
              className="rounded-full"
            >
              {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Button>
            <Button
              size="lg"
              variant={isAudioOn ? "default" : "destructive"}
              onClick={() => setIsAudioOn(!isAudioOn)}
              className="rounded-full"
            >
              {isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </Button>
            <Button
              size="lg"
              variant={isTranslating ? "default" : "outline"}
              onClick={() => setIsTranslating(!isTranslating)}
              className="rounded-full bg-transparent"
            >
              <Languages className="mr-2 h-5 w-5" />
              AI Translate
            </Button>
            <Button
              size="lg"
              variant={isPlaylistOpen ? "default" : "outline"}
              onClick={handlePlaylistToggle}
              className="rounded-full bg-transparent"
            >
              {canSharePlaylist ? (
                <>
                  <Music className="mr-2 h-5 w-5" />
                  Share Playlist
                </>
              ) : (
                <>
                  <Lock className="mr-2 h-5 w-5" />
                  Share Playlist (Elite)
                </>
              )}
            </Button>
          </Card>
        </div>

        {/* Playlist Sharing Panel */}
        {isPlaylistOpen && (
          <Card className="border-2 border-primary p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">Share Your Music</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaylistOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {mockPlaylists.map((playlist) => (
                <Card key={playlist.id} className="overflow-hidden transition-all hover:scale-105">
                  <div className="relative h-40 bg-gradient-to-br from-primary/20 to-accent/20">
                    <img 
                      src={`https://placehold.co/400x400?text=${encodeURIComponent(playlist.title)}+album+cover+with+colorful+music+artwork`}
                      alt={`${playlist.title} album cover with colorful music artwork`}
                      className="h-full w-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Music className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="mb-2 font-bold text-foreground">{playlist.title}</h4>
                    <p className="mb-3 text-sm text-muted-foreground">{playlist.artist}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{playlist.songs} songs</Badge>
                      <Button 
                        size="sm"
                        className="rounded-full"
                        onClick={() => handleSharePlaylist(playlist.title)}
                        disabled={!canSharePlaylist}
                      >
                        {canSharePlaylist ? (
                          <>
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                          </>
                        ) : (
                          <>
                            <Lock className="mr-2 h-4 w-4" />
                            Elite
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {currentSong && (
              <div className="mt-8 rounded-lg border border-primary bg-primary/5 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button size="sm" variant="default">
                      <Play className="h-4 w-4" />
                    </Button>
                    <div>
                      <p className="font-semibold text-foreground">Now Sharing: {currentSong}</p>
                      <p className="text-sm text-muted-foreground">Both you and Maria can hear this</p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => setCurrentSong("")}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </Card>
        )}

        {/* Features List */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Card className="rounded-3xl border-2 border-gray-200 p-8 text-center shadow-md transition-all hover:border-purple-300 hover:shadow-lg">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Video className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">HD Video Chat</h3>
            <p className="text-muted-foreground leading-relaxed">
              Crystal clear video quality for meaningful face-to-face connections
            </p>
          </Card>

          <Card className="rounded-3xl border-2 border-gray-200 p-8 text-center shadow-md transition-all hover:border-purple-300 hover:shadow-lg">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Languages className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">AI Real-Time Translation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Speak your language while AI translates instantly for your partner
            </p>
          </Card>

          <Card className="rounded-3xl border-2 border-gray-200 p-8 text-center shadow-md transition-all hover:border-purple-300 hover:shadow-lg">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Music className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Synchronized Playlist</h3>
            <p className="text-muted-foreground leading-relaxed">
              Share and listen to music together in perfect sync
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
