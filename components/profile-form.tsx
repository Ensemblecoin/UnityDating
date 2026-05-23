"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { COUNTRIES, MUSIC_GENRES, LANGUAGES } from "@/lib/constants"
import { findMatches } from "@/lib/matching-service"
import type { Match } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"

interface ProfileFormProps {
  onMatchesFound: (matches: Match[]) => void
}

export default function ProfileForm({ onMatchesFound }: ProfileFormProps) {
  const [name, setName] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleGenreToggle = (genre: string) => {
    console.log("[v0] Genre toggled:", genre)
    setSelectedGenres((prev) => {
      const newGenres = prev.includes(genre) 
        ? prev.filter((g) => g !== genre) 
        : [...prev, genre]
      console.log("[v0] Updated genres:", newGenres)
      return newGenres
    })
  }

  const handleLanguageToggle = (language: string) => {
    console.log("[v0] Language button clicked:", language)
    console.log("[v0] Current languages before toggle:", selectedLanguages)
    setSelectedLanguages((prev) => {
      const isCurrentlySelected = prev.includes(language)
      const newLanguages = isCurrentlySelected
        ? prev.filter((l) => l !== language)
        : [...prev, language]
      console.log("[v0] Language was selected:", isCurrentlySelected)
      console.log("[v0] New languages after toggle:", newLanguages)
      return newLanguages
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validation
    if (!name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    if (!countryCode) {
      toast({
        title: "Error",
        description: "Please select your country",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    if (selectedGenres.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one music genre",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    if (selectedLanguages.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one language",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    const countryName = COUNTRIES.find((c) => c.code === countryCode)?.name || ""

    const userProfile = {
      name: name.trim(),
      countryCode,
      countryName,
      musicGenres: selectedGenres,
      languages: selectedLanguages,
    }

    // Find matches
    const matches = findMatches(userProfile, 6)

    if (matches.length === 0) {
      toast({
        title: "No matches found",
        description: "Try adjusting your preferences to find more matches",
      })
    } else {
      toast({
        title: "Matches found!",
        description: `We found ${matches.length} potential matches for you`,
      })
    }

    onMatchesFound(matches)
    setIsSubmitting(false)
  }

  return (
    <Card id="profile-form" className="mx-auto max-w-2xl rounded-xl border-2 border-gray-200 shadow-xl shadow-primary/20">
      <CardHeader className="border-b-2 border-gray-200 pb-6">
        <CardTitle className="text-center text-3xl text-primary">
          Create Your Profile
        </CardTitle>
        <CardDescription className="text-center">
          Tell us about yourself and find your perfect music-loving match
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-gray-200 focus:border-primary"
            />
          </div>

          <div className="space-y-2 relative z-10 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <Label htmlFor="country">Country</Label>
            <Select value={countryCode} onValueChange={setCountryCode} required>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]" position="popper" sideOffset={5}>
                {COUNTRIES.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 relative z-0 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <Label>Favorite Music Genres</Label>
            <p className="text-sm text-muted-foreground">
              Select all genres you enjoy
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Genre selection">
              {MUSIC_GENRES.map((genre) => {
                const isSelected = selectedGenres.includes(genre)
                return (
                  <button
                    key={genre}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log("[v0] Genre button clicked in onClick:", genre)
                      handleGenreToggle(genre)
                    }}
                    onMouseDown={(e) => {
                      console.log("[v0] Genre button mousedown:", genre)
                    }}
                    style={{ pointerEvents: 'auto' }}
                    className={cn(
                      "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all cursor-pointer pointer-events-auto select-none touch-manipulation",
                      "hover:scale-105 active:scale-95",
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-lg ring-2 ring-primary ring-offset-2"
                        : "bg-card text-foreground border-2 border-gray-200 hover:bg-primary/20 hover:border-primary"
                    )}
                    aria-pressed={isSelected}
                    aria-label={`${genre} ${isSelected ? 'selected' : 'not selected'}`}
                  >
                    {isSelected ? "✓ " : ""}{genre}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <Label>Languages Spoken</Label>
            <p className="text-sm text-muted-foreground">
              Select all languages you speak
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Language selection">
              {LANGUAGES.map((language) => {
                const isSelected = selectedLanguages.includes(language)
                return (
                  <button
                    key={language}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log("[v0] Language button clicked in onClick:", language)
                      handleLanguageToggle(language)
                    }}
                    onMouseDown={(e) => {
                      console.log("[v0] Language button mousedown:", language)
                    }}
                    style={{ pointerEvents: 'auto' }}
                    className={cn(
                      "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all cursor-pointer pointer-events-auto select-none touch-manipulation",
                      "hover:scale-105 active:scale-95",
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-lg ring-2 ring-primary ring-offset-2"
                        : "bg-card text-foreground border-2 border-gray-200 hover:bg-primary/20 hover:border-primary"
                    )}
                    aria-pressed={isSelected}
                    aria-label={`${language} ${isSelected ? 'selected' : 'not selected'}`}
                  >
                    {isSelected ? "✓ " : ""}{language}
                  </button>
                )
              })}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full text-lg font-bold shadow-lg shadow-primary/50 border border-primary/30"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Finding Matches..." : "Find Matches"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
