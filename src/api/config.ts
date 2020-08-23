import { API_URL } from '@/config/constants'
import { AxiosRequestConfig } from 'axios'

export const apiConfig: AxiosRequestConfig = {
  // withCredentials: true,
  timeout: 30000,
  baseURL: API_URL + '/api',
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
}
