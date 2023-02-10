import { httpClient } from '../http'

export interface getUserProfileSearchRequestType {
  userName: string
}

export const getUserProfile = async ({ userName }: getUserProfileSearchRequestType) => {
  const response = await httpClient({
    url: 'https://api.github.com',
    endPoint: `/users/${userName}`
  })

  return response
}
