import axios from 'axios'

export interface Params {
  data?: any
  url?: string
  endPoint: string
  headers?: any
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE'
}

export interface Result {
  statusCode: number
  body: any
}

export async function httpClient ({
  data,
  endPoint,
  headers,
  url,
  method = 'GET'
}: Params): Promise<Result> {
  try {
    const response = await axios.request({
      baseURL: url,
      url: endPoint,
      data,
      headers,
      method
    })

    return {
      statusCode: response.status,
      body: response.data
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Something went wrong'
    }
  }
}
