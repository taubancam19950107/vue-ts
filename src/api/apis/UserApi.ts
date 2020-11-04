import { API_CONFIG } from '../config'
import { AxiosResponse } from 'axios'
import { Api } from '@/api/Api'

/**
 * Export class UserApi
 */
export default class UserApi extends Api {
  /**
   * Constructor
   */
  public constructor() {
    super(API_CONFIG)
  }

  /**
   * Login
   * @returns Promise|Error
   */
  public async login(params: { username: string, password: string }) {
    try {
      const res: AxiosResponse = await this.post('/login', params)
      return this.success(res)
    } catch (error) {
      this.error(error)
    }
  }

  /**
   * Get users
   * @returns Promise|Error
   */
  public async getUserInfo() {
    try {
      const res: AxiosResponse = await this.get('/user')
      return this.success(res)
    } catch (error) {
      this.error(error)
    }
  }
}
