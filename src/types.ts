export interface BlogData {
  date: string
  title: string
  intro: string
  body: string
  id: number
}

export interface ProjectData {
  date: string
  title: string
  tags: string[]
  description: string
  liveLink?: string
  sourceLink?: string
  imgs: string[]
}
