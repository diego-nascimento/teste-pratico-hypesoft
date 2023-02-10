import { httpClient } from '../http'

export interface userSearchRequestType {
  userName: string
  page?: number
  per_page?: number
}

export const searchUser = async ({ userName, page = 0, per_page = 10 }: userSearchRequestType) => {
    const response = await httpClient({
      url: 'https://api.github.com',
      endPoint: `/search/users?q=${userName}&page=${page}&per_page=${per_page}`
    })

    return response.body
}
