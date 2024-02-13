export interface BlogData {
  year: string
  monthday: string
  title: string
  intro: string
}

export interface ProjectData {
  date: string
  title: string
  tags: string[]
  description: string
  liveLink?: string
  sourceLink?: string
}
