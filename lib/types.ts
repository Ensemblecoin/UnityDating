export interface UserProfile {
  id?: string
  name: string
  countryCode: string
  countryName: string
  musicGenres: string[]
  languages: string[]
  ageRange?: string
  favoriteArtist?: string
  favoriteLoveSong?: string
  relationshipGoal?: string
  preferredDistance?: string
}

export interface Match extends UserProfile {
  score: number
}

export interface Country {
  code: string
  name: string
}
