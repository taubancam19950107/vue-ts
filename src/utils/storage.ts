import { getCookie, setCookie, deleteCookie } from './cookie'
import { STORAGE } from '@/config/constants'

/**
 * Get token cookie
 * @returns string token
 */
export function getToken () {
  return getCookie(STORAGE.TOKEN)
}

/**
 * Set token cookie
 * @param string token
 * @returns void
 */
export function setToken (token: string) {
  setCookie(STORAGE.TOKEN, token)
}

/**
 * Delete token cookie
 * @returns void
 */
export function deleteToken () {
  deleteCookie(STORAGE.TOKEN)
}
