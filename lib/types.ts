export interface UserProfile {
  id: string
  name: string
  age: number
  location: string
  bio: string
  favoriteGenres: string[]
  languages: string[]
  profileImage: string
  playlistUrl?: string
}

export interface Match {
  id: string
  user: UserProfile
  compatibilityScore: number
  commonGenres: string[]
  matchedAt: Date
}
