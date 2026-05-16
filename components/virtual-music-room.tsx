"use client"

import { Button } from "@/components/ui/button"
import { Music, Users, Headphones } from "lucide-react"

export default function VirtualMusicRoom() {
  return (
    <section id="music-room" className="relative bg-gradient-to-b from-[#f8f1ff] to-[#eadcff] py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-white p-8 sm:p-12">
          <div className="mb-8 flex justify-center">
            <Headphones className="h-16 w-16 text-primary" />
          </div>
          <h2 className="mb-4 text-center font-serif text-4xl font-bold text-foreground">
            Virtual Music Room
          </h2>
          <p className="mb-8 text-center text-lg text-muted-foreground">
            Join our exclusive virtual music rooms where you can listen together, share playlists, and discover new music with your matches.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <Music className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-semibold">Shared Playlists</h3>
              <p className="text-sm text-muted-foreground">Create and share playlists together</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-semibold">Live Sessions</h3>
              <p className="text-sm text-muted-foreground">Listen together in real-time</p>
            </div>
            <div className="text-center">
              <Headphones className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-semibold">Discovery</h3>
              <p className="text-sm text-muted-foreground">Find new music together</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" className="landing-primary-button">
              Enter Music Room
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
