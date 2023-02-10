export interface userInList {
  id: number
  login: string
  avatar_url: string
  html_url: string
}

export interface searchTypes {
  total_count: number
  items: userInList[]
}
