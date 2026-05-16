export interface UserProfile {
  id: string
  name: string
  age: number
  bio: string
  genres: string[]
  languages: string[]
  location: string
  avatar?: string
}

export interface Match {
  id: string
  name: string
  age: number
  bio: string
  genres: string[]
  languages: string[]
  location: string
  avatar?: string
  compatibility: number
}
