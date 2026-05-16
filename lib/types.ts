export interface UserProfile {
  id: string
  name: string
  age: number
  location: string
  favoriteGenres: string[]
  bio: string
  image?: string
}

export interface Match {
  id: string
  name: string
  age: number
  location: string
  favoriteGenres: string[]
  compatibility: number
  image?: string
}
