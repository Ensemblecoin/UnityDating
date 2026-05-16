"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { UserProfile, Match } from "@/lib/types"

interface ProfileFormProps {
  onMatchesFound?: (matches: Match[]) => void
}

export default function ProfileForm({ onMatchesFound }: ProfileFormProps) {
  const [formData, setFormData] = useState<Partial<UserProfile>>({
    name: "",
    age: 25,
    location: "",
    bio: "",
    favoriteGenres: [],
    languages: [],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate finding matches
    const mockMatches: Match[] = [
      {
        id: "1",
        user: {
          id: "user1",
          name: "Alex",
          age: 26,
          location: "New York",
          bio: "Jazz and indie rock lover",
          favoriteGenres: ["Jazz", "Indie Rock"],
          languages: ["English"],
          profileImage: "/placeholder.jpg",
        },
        compatibilityScore: 85,
        commonGenres: ["Indie Rock"],
        matchedAt: new Date(),
      },
    ]
    onMatchesFound?.(mockMatches)
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Age</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Bio</label>
        <textarea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
          rows={4}
          required
        />
      </div>
      <Button type="submit" size="lg" className="w-full landing-primary-button">
        Find My Matches
      </Button>
    </form>
  )
}
