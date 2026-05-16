"use client"

import { useState } from "react"
import type { Match } from "@/lib/types"

interface ProfileFormProps {
  onMatchesFound: (matches: Match[]) => void
}

export default function ProfileForm({ onMatchesFound }: ProfileFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bio: "",
    genres: [] as string[],
    languages: [] as string[]
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock matches for demo
    const mockMatches: Match[] = [
      {
        id: "1",
        name: "Alex",
        age: 28,
        bio: "Music enthusiast and traveler",
        genres: ["indie", "folk"],
        languages: ["English", "Spanish"],
        location: "Barcelona",
        compatibility: 92
      }
    ]
    onMatchesFound(mockMatches)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border border-border rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Age</label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="w-full px-4 py-2 border border-border rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Bio</label>
        <textarea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          className="w-full px-4 py-2 border border-border rounded-lg"
          rows={4}
        />
      </div>
      <button type="submit" className="landing-primary-button w-full">
        Find Matches
      </button>
    </form>
  )
}
