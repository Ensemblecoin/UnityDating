"use client"

import React, { useState, useCallback } from "react"
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
import { Card, CardContent } from "@/components/ui/card"
import { COUNTRIES, MUSIC_GENRES, LANGUAGES } from "@/lib/constants"
import { findMatches } from "@/lib/matching-service"
import type { Match } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"
import { Music, Heart, Globe, Sparkles, ChevronRight, ChevronLeft, Check, User } from "lucide-react"

// ─── Constants ────────────────────────────────────────────────────────────────

const AGE_RANGES = ["18–24", "25–30", "31–36", "37–44", "45–54", "55+"]

const RELATIONSHIP_GOALS = [
  { value: "casual", label: "Casual — keeping it light & fun" },
  { value: "serious", label: "Serious — looking for something real" },
  { value: "marriage", label: "Marriage — ready to build a life together" },
]

const PREFERRED_DISTANCES = [
  { value: "same_city", label: "Same city — close enough to share a concert" },
  { value: "same_country", label: "Same country — a road trip away" },
  { value: "anywhere", label: "Anywhere — love has no borders" },
]

const STEPS = [
  {
    number: 1,
    title: "About You",
    subtitle: "Let's start with the basics",
    icon: User,
    color: "from-violet-500 to-purple-600",
    percent: 25,
  },
  {
    number: 2,
    title: "Your Music Personality",
    subtitle: "Music is the language of the soul",
    icon: Music,
    color: "from-purple-500 to-pink-500",
    percent: 50,
  },
  {
    number: 3,
    title: "Your Connection Style",
    subtitle: "How you want to connect matters",
    icon: Globe,
    color: "from-pink-500 to-rose-500",
    percent: 75,
  },
  {
    number: 4,
    title: "Preview Your Match Profile",
    subtitle: "Here's how you'll appear to matches",
    icon: Sparkles,
    color: "from-rose-500 to-orange-400",
    percent: 100,
  },
]

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  name: string
  countryCode: string
  ageRange: string
  selectedGenres: string[]
  favoriteArtist: string
  favoriteLoveSong: string
  selectedLanguages: string[]
  relationshipGoal: string
  preferredDistance: string
}

interface ProfileFormProps {
  onMatchesFound: (matches: Match[]) => void
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ToggleChip({
  label,
  selected,
  onToggle,
}: {
  label: string
  selected: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      style={{ pointerEvents: "auto" }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold",
        "transition-all duration-150 cursor-pointer select-none touch-manipulation",
        "hover:scale-105 active:scale-95",
        selected
          ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg ring-2 ring-purple-400 ring-offset-2"
          : "bg-white text-foreground border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50"
      )}
      aria-pressed={selected}
    >
      {selected && <Check className="h-3.5 w-3.5 shrink-0" />}
      {label}
    </button>
  )
}

function FieldBlock({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("space-y-3 rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm", className)}>
      {children}
    </div>
  )
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressHeader({ currentStep }: { currentStep: number }) {
  const step = STEPS[currentStep - 1]
  const StepIcon = step.icon

  return (
    <div className="px-8 pt-8 pb-6 border-b border-gray-100">
      {/* Step dots */}
      <div className="flex items-center justify-center gap-3 mb-6">
        {STEPS.map((s) => {
          const isDone = s.number < currentStep
          const isActive = s.number === currentStep
          const SIcon = s.icon
          return (
            <React.Fragment key={s.number}>
              <div
                className={cn(
                  "flex items-center justify-center rounded-full transition-all duration-300",
                  isActive
                    ? `h-10 w-10 bg-gradient-to-br ${s.color} text-white shadow-lg shadow-purple-200`
                    : isDone
                    ? "h-8 w-8 bg-gradient-to-br from-violet-500 to-purple-600 text-white"
                    : "h-8 w-8 bg-gray-100 text-gray-400 border-2 border-gray-200"
                )}
              >
                {isDone ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <SIcon className={cn("h-4 w-4", isActive ? "h-5 w-5" : "")} />
                )}
              </div>
              {s.number < STEPS.length && (
                <div
                  className={cn(
                    "h-0.5 flex-1 max-w-[48px] rounded-full transition-all duration-500",
                    s.number < currentStep ? "bg-gradient-to-r from-violet-500 to-purple-600" : "bg-gray-200"
                  )}
                />
              )}
            </React.Fragment>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
            Step {currentStep} of {STEPS.length}
          </span>
          <span className="text-xs font-bold text-purple-600">{step.percent}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out",
              step.color
            )}
            style={{ width: `${step.percent}%` }}
          />
        </div>
      </div>

      {/* Step title */}
      <div className="flex items-center gap-3">
        <div className={cn("flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md", step.color)}>
          <StepIcon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground leading-tight">{step.title}</h2>
          <p className="text-sm text-muted-foreground">{step.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Step 1: About You ────────────────────────────────────────────────────────

function Step1({
  data,
  onChange,
}: {
  data: FormData
  onChange: (patch: Partial<FormData>) => void
}) {
  return (
    <div className="space-y-5">
      <FieldBlock>
        <Label htmlFor="name" className="text-sm font-semibold">
          Your name <span className="text-rose-500">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="What should we call you?"
          value={data.name}
          onChange={(e) => onChange({ name: e.target.value })}
          className="border-gray-200 focus:border-purple-400 focus:ring-purple-200 rounded-xl"
        />
      </FieldBlock>

      <FieldBlock className="relative z-10">
        <Label htmlFor="country" className="text-sm font-semibold">
          Where are you from? <span className="text-rose-500">*</span>
        </Label>
        <Select value={data.countryCode} onValueChange={(v) => onChange({ countryCode: v })}>
          <SelectTrigger id="country" className="rounded-xl border-gray-200 focus:border-purple-400">
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
      </FieldBlock>

      <FieldBlock>
        <Label className="text-sm font-semibold">
          Age range <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <div className="flex flex-wrap gap-2">
          {AGE_RANGES.map((range) => (
            <ToggleChip
              key={range}
              label={range}
              selected={data.ageRange === range}
              onToggle={() => onChange({ ageRange: data.ageRange === range ? "" : range })}
            />
          ))}
        </div>
      </FieldBlock>
    </div>
  )
}

// ─── Step 2: Music Personality ────────────────────────────────────────────────

function Step2({
  data,
  onChange,
}: {
  data: FormData
  onChange: (patch: Partial<FormData>) => void
}) {
  const toggleGenre = useCallback(
    (genre: string) => {
      onChange({
        selectedGenres: data.selectedGenres.includes(genre)
          ? data.selectedGenres.filter((g) => g !== genre)
          : [...data.selectedGenres, genre],
      })
    },
    [data.selectedGenres, onChange]
  )

  return (
    <div className="space-y-5">
      <FieldBlock>
        <Label className="text-sm font-semibold">
          Favorite genres <span className="text-rose-500">*</span>
        </Label>
        <p className="text-xs text-muted-foreground">Pick everything that moves you</p>
        <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Genre selection">
          {MUSIC_GENRES.map((genre) => (
            <ToggleChip
              key={genre}
              label={genre}
              selected={data.selectedGenres.includes(genre)}
              onToggle={() => toggleGenre(genre)}
            />
          ))}
        </div>
      </FieldBlock>

      <FieldBlock>
        <Label htmlFor="artist" className="text-sm font-semibold">
          Favorite artist <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Input
          id="artist"
          type="text"
          placeholder="e.g. Beyoncé, The Beatles, Bad Bunny…"
          value={data.favoriteArtist}
          onChange={(e) => onChange({ favoriteArtist: e.target.value })}
          className="border-gray-200 focus:border-purple-400 rounded-xl"
        />
      </FieldBlock>

      <FieldBlock>
        <Label htmlFor="lovesong" className="text-sm font-semibold">
          Favorite love song <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Input
          id="lovesong"
          type="text"
          placeholder="e.g. At Last — Etta James"
          value={data.favoriteLoveSong}
          onChange={(e) => onChange({ favoriteLoveSong: e.target.value })}
          className="border-gray-200 focus:border-purple-400 rounded-xl"
        />
      </FieldBlock>
    </div>
  )
}

// ─── Step 3: Connection Style ─────────────────────────────────────────────────

function Step3({
  data,
  onChange,
}: {
  data: FormData
  onChange: (patch: Partial<FormData>) => void
}) {
  const toggleLanguage = useCallback(
    (lang: string) => {
      onChange({
        selectedLanguages: data.selectedLanguages.includes(lang)
          ? data.selectedLanguages.filter((l) => l !== lang)
          : [...data.selectedLanguages, lang],
      })
    },
    [data.selectedLanguages, onChange]
  )

  return (
    <div className="space-y-5">
      <FieldBlock>
        <Label className="text-sm font-semibold">
          Languages spoken <span className="text-rose-500">*</span>
        </Label>
        <p className="text-xs text-muted-foreground">Select all languages you speak</p>
        <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Language selection">
          {LANGUAGES.map((lang) => (
            <ToggleChip
              key={lang}
              label={lang}
              selected={data.selectedLanguages.includes(lang)}
              onToggle={() => toggleLanguage(lang)}
            />
          ))}
        </div>
      </FieldBlock>

      <FieldBlock className="relative z-10">
        <Label htmlFor="goal" className="text-sm font-semibold">
          Relationship goal <span className="text-rose-500">*</span>
        </Label>
        <Select value={data.relationshipGoal} onValueChange={(v) => onChange({ relationshipGoal: v })}>
          <SelectTrigger id="goal" className="rounded-xl border-gray-200 focus:border-purple-400">
            <SelectValue placeholder="What are you looking for?" />
          </SelectTrigger>
          <SelectContent position="popper" sideOffset={5}>
            {RELATIONSHIP_GOALS.map((g) => (
              <SelectItem key={g.value} value={g.value}>
                {g.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldBlock>

      <FieldBlock className="relative z-0">
        <Label htmlFor="distance" className="text-sm font-semibold">
          Preferred distance <span className="text-rose-500">*</span>
        </Label>
        <Select value={data.preferredDistance} onValueChange={(v) => onChange({ preferredDistance: v })}>
          <SelectTrigger id="distance" className="rounded-xl border-gray-200 focus:border-purple-400">
            <SelectValue placeholder="How far would you go for love?" />
          </SelectTrigger>
          <SelectContent position="popper" sideOffset={5}>
            {PREFERRED_DISTANCES.map((d) => (
              <SelectItem key={d.value} value={d.value}>
                {d.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldBlock>
    </div>
  )
}

// ─── Step 4: Profile Preview ──────────────────────────────────────────────────

function Step4({
  data,
  isSubmitting,
  onSubmit,
}: {
  data: FormData
  isSubmitting: boolean
  onSubmit: () => void
}) {
  const countryName = COUNTRIES.find((c) => c.code === data.countryCode)?.name || ""
  const goalLabel = RELATIONSHIP_GOALS.find((g) => g.value === data.relationshipGoal)?.label.split("—")[0].trim() || ""
  const distanceLabel = PREFERRED_DISTANCES.find((d) => d.value === data.preferredDistance)?.label.split("—")[0].trim() || ""

  return (
    <div className="space-y-5">
      {/* Preview card */}
      <div className="rounded-3xl border-2 border-purple-100 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 p-6 shadow-inner">
        <div className="flex items-start gap-4">
          {/* Avatar placeholder */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-2xl font-bold text-white shadow-lg">
            {data.name ? data.name.charAt(0).toUpperCase() : "?"}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-foreground truncate">
                {data.name || "Your Name"}
              </h3>
              {data.ageRange && (
                <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-700">
                  {data.ageRange}
                </span>
              )}
            </div>
            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
              {data.countryCode && (
                <>
                  <img
                    src={`https://flagcdn.com/w40/${data.countryCode}.png`}
                    alt={countryName}
                    className="h-4 w-5 rounded-sm object-cover"
                  />
                  <span>{countryName}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Music section */}
        {data.selectedGenres.length > 0 && (
          <div className="mt-4 rounded-2xl border border-purple-100 bg-white/60 p-4">
            <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-600">
              <Music className="h-3.5 w-3.5" /> Music Vibes
            </p>
            <div className="flex flex-wrap gap-1.5">
              {data.selectedGenres.map((g) => (
                <span
                  key={g}
                  className="rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-1 text-xs font-semibold text-white"
                >
                  {g}
                </span>
              ))}
            </div>
            {data.favoriteArtist && (
              <p className="mt-2 text-xs text-muted-foreground">
                🎤 <span className="font-medium">{data.favoriteArtist}</span>
              </p>
            )}
            {data.favoriteLoveSong && (
              <p className="mt-1 text-xs text-muted-foreground">
                🎵 <span className="font-medium italic">{data.favoriteLoveSong}</span>
              </p>
            )}
          </div>
        )}

        {/* Languages & goals */}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {data.selectedLanguages.length > 0 && (
            <div className="rounded-2xl border border-purple-100 bg-white/60 p-3">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-600">
                <Globe className="h-3.5 w-3.5" /> Languages
              </p>
              <div className="flex flex-wrap gap-1.5">
                {data.selectedLanguages.map((l) => (
                  <span
                    key={l}
                    className="rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(goalLabel || distanceLabel) && (
            <div className="rounded-2xl border border-purple-100 bg-white/60 p-3">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-600">
                <Heart className="h-3.5 w-3.5" /> Looking for
              </p>
              {goalLabel && (
                <p className="text-xs font-medium text-foreground">{goalLabel}</p>
              )}
              {distanceLabel && (
                <p className="mt-0.5 text-xs text-muted-foreground">{distanceLabel}</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Encouraging copy */}
      <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-pink-50 border border-purple-100 p-4 text-center">
        <p className="text-sm font-medium text-purple-700">
          ✨ Your profile looks great! Ready to meet people who share your musical soul?
        </p>
      </div>

      {/* Find Matches button */}
      <Button
        type="button"
        onClick={onSubmit}
        disabled={isSubmitting}
        size="lg"
        className="w-full rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white text-lg font-bold shadow-xl shadow-purple-300/50 hover:shadow-purple-400/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border-0"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Finding your matches…
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Find My Matches
          </span>
        )}
      </Button>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProfileForm({ onMatchesFound }: ProfileFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [direction, setDirection] = useState<"forward" | "back">("forward")
  const [animKey, setAnimKey] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState<FormData>({
    name: "",
    countryCode: "",
    ageRange: "",
    selectedGenres: [],
    favoriteArtist: "",
    favoriteLoveSong: "",
    selectedLanguages: [],
    relationshipGoal: "",
    preferredDistance: "",
  })

  const patchFormData = useCallback((patch: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...patch }))
  }, [])

  const validateStep = (step: number): string | null => {
    if (step === 1) {
      if (!formData.name.trim()) return "Please enter your name"
      if (!formData.countryCode) return "Please select your country"
    }
    if (step === 2) {
      if (formData.selectedGenres.length === 0) return "Please select at least one music genre"
    }
    if (step === 3) {
      if (formData.selectedLanguages.length === 0) return "Please select at least one language"
      if (!formData.relationshipGoal) return "Please select your relationship goal"
      if (!formData.preferredDistance) return "Please select your preferred distance"
    }
    return null
  }

  const goToStep = (next: number, dir: "forward" | "back") => {
    setDirection(dir)
    setAnimKey((k) => k + 1)
    setCurrentStep(next)
  }

  const handleNext = () => {
    const error = validateStep(currentStep)
    if (error) {
      toast({ title: "Almost there!", description: error, variant: "destructive" })
      return
    }
    if (currentStep < 4) goToStep(currentStep + 1, "forward")
  }

  const handleBack = () => {
    if (currentStep > 1) goToStep(currentStep - 1, "back")
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    const countryName = COUNTRIES.find((c) => c.code === formData.countryCode)?.name || ""

    const userProfile = {
      name: formData.name.trim(),
      countryCode: formData.countryCode,
      countryName,
      musicGenres: formData.selectedGenres,
      languages: formData.selectedLanguages,
      ageRange: formData.ageRange || undefined,
      favoriteArtist: formData.favoriteArtist || undefined,
      favoriteLoveSong: formData.favoriteLoveSong || undefined,
      relationshipGoal: formData.relationshipGoal || undefined,
      preferredDistance: formData.preferredDistance || undefined,
    }

    const matches = findMatches(userProfile, 6)

    if (matches.length === 0) {
      toast({
        title: "No matches found",
        description: "Try adjusting your preferences to find more matches",
      })
    } else {
      toast({
        title: "🎶 Matches found!",
        description: `We found ${matches.length} people who share your musical soul`,
      })
    }

    onMatchesFound(matches)
    setIsSubmitting(false)
  }

  const animClass =
    direction === "forward" ? "animate-step-enter" : "animate-step-enter-back"

  return (
    <Card
      id="profile-form"
      className="mx-auto max-w-2xl rounded-3xl border-2 border-purple-100 shadow-2xl shadow-purple-200/40 overflow-hidden"
    >
      {/* Progress header */}
      <ProgressHeader currentStep={currentStep} />

      {/* Step content */}
      <CardContent className="px-8 pt-7 pb-8">
        <div key={animKey} className={animClass}>
          {currentStep === 1 && <Step1 data={formData} onChange={patchFormData} />}
          {currentStep === 2 && <Step2 data={formData} onChange={patchFormData} />}
          {currentStep === 3 && <Step3 data={formData} onChange={patchFormData} />}
          {currentStep === 4 && (
            <Step4 data={formData} isSubmitting={isSubmitting} onSubmit={handleSubmit} />
          )}
        </div>

        {/* Navigation buttons (steps 1–3) */}
        {currentStep < 4 && (
          <div className="mt-8 flex items-center gap-3">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex-1 rounded-full border-2 border-gray-200 font-semibold hover:border-purple-300 hover:bg-purple-50"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back
              </Button>
            ) : (
              <div className="flex-1" />
            )}

            <Button
              type="button"
              onClick={handleNext}
              className="flex-1 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold shadow-lg shadow-purple-300/40 hover:shadow-purple-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border-0"
            >
              {currentStep === 3 ? "Preview Profile" : "Continue"}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Back button on step 4 */}
        {currentStep === 4 && (
          <div className="mt-4">
            <Button
              type="button"
              variant="ghost"
              onClick={handleBack}
              className="w-full rounded-full text-muted-foreground hover:text-foreground hover:bg-gray-100"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Edit my answers
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
