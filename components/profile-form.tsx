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
    location: "",
    genres: [] as string[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock matches
    const mockMatches: Match[] = [
      {
        id: "1",
        name: "Alex",
        age: 28,
        location: "New York",
        favoriteGenres: ["Jazz", "Blues"],
        compatibility: 85,
      },
    ]
    onMatchesFound(mockMatches)
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md rounded-lg bg-card p-6 shadow">
      <div className="mb-4">
        <label className="block text-sm font-medium text-foreground">Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
      >
        Find Matches
      </button>
    </form>
  )
}
