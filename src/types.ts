export interface BlogData {
  date: Date
  title: string
  intro: string
  body: string
}

export interface ProjectData {
  date: string
  title: string
  tags: string[]
  description: string
  liveLink?: string
  sourceLink?: string
}
