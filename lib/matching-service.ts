import type { UserProfile, Match } from "./types"

// Mock user database - in production, this would come from a real database
const mockUsers: UserProfile[] = [
  {
    id: "1",
    name: "Alice Johnson",
    countryCode: "us",
    countryName: "United States",
    musicGenres: ["Rock", "Jazz", "Pop"],
    languages: ["English", "Spanish"],
  },
  {
    id: "2",
    name: "Bob Martin",
    countryCode: "fr",
    countryName: "France",
    musicGenres: ["Pop", "Classical"],
    languages: ["French", "English"],
  },
  {
    id: "3",
    name: "Carlos Rodriguez",
    countryCode: "es",
    countryName: "Spain",
    musicGenres: ["Rock", "Flamenco"],
    languages: ["Spanish"],
  },
  {
    id: "4",
    name: "Diana Silva",
    countryCode: "br",
    countryName: "Brazil",
    musicGenres: ["Samba", "Jazz", "Pop"],
    languages: ["Portuguese", "English"],
  },
  {
    id: "5",
    name: "Erik Müller",
    countryCode: "de",
    countryName: "Germany",
    musicGenres: ["Classical", "Electronic"],
    languages: ["German", "English"],
  },
  {
    id: "6",
    name: "Francesca Rossi",
    countryCode: "it",
    countryName: "Italy",
    musicGenres: ["Classical", "Pop", "Jazz"],
    languages: ["Italian", "English"],
  },
  {
    id: "7",
    name: "Yuki Tanaka",
    countryCode: "jp",
    countryName: "Japan",
    musicGenres: ["Pop", "Electronic", "Jazz"],
    languages: ["Japanese", "English"],
  },
  {
    id: "8",
    name: "Sophie Williams",
    countryCode: "gb",
    countryName: "United Kingdom",
    musicGenres: ["Rock", "Pop", "Electronic"],
    languages: ["English"],
  },
  {
    id: "9",
    name: "Michael Chen",
    countryCode: "ca",
    countryName: "Canada",
    musicGenres: ["Hip-Hop", "Pop", "Electronic"],
    languages: ["English", "French"],
  },
]

/**
 * Find matches for a user based on shared music genres and languages
 * Scoring algorithm:
 * - Shared music genre: +2 points each
 * - Shared language: +3 points each
 */
export function findMatches(
  userProfile: UserProfile,
  topN: number = 3
): Match[] {
  return mockUsers
    .filter((user) => user.name.toLowerCase() !== userProfile.name.toLowerCase())
    .map((candidate) => {
      const sharedGenres = candidate.musicGenres.filter((genre) =>
        userProfile.musicGenres.includes(genre)
      ).length

      const sharedLanguages = candidate.languages.filter((lang) =>
        userProfile.languages.includes(lang)
      ).length

      const score = sharedGenres * 2 + sharedLanguages * 3

      return { ...candidate, score }
    })
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
}

/**
 * Get all users from the database
 */
export function getAllUsers(): UserProfile[] {
  return mockUsers
}
