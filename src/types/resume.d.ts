export interface Name {
  first: string
  last: string
}

export interface Contact {
  email: string
  tel: string
}

export interface Header {
  role?: string
  experience: string[]
  technologies: string[]
}

export interface Company {
  name: string
  description: string
  industries: string[]
  url: string
}

export interface Date {
  month: string
  year: number
}

export interface DateEntry {
  start: Date
  end: Date
}

export interface Link {
  type: string
  title: string
  url: string
}

export interface Experience {
  active?: boolean
  role: string
  company: Company
  date: DateEntry
  location: string
  description: string[]
  technologies: string[]
}

export interface Institution {
  title: string
  domain: string
  description: string[]
}

export interface Education {
  active?: boolean
  institution: Institution
  date: DateEntry
}

export interface Snippet {
  title: string
  url: string
  description: string
}

export interface Query {
  question: string
  answer: string
  featured?: boolean
}
