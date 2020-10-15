import { apiConfig } from '../config'
import { AxiosResponse } from 'axios'
import { Api } from '@/api/Api'
import UserList from '@/api/Response/UserList'

/**
 * Export class UserApi
 */
export class UserApi extends Api {
  /**
   * Constructor
   */
  public constructor () {
    // apiConfig.baseURL = 'https://gorest.co.in/public-api'
    super(apiConfig)
  }

  /**
   * Get users
   * @returns Promise<UserList>|Error
   */
  public async getUsers (): Promise<UserList> {
    try {
      const res: AxiosResponse<UserList> = await this.get('/users')
      return this.success(res)
    } catch (error) {
      throw error
    }
  }
}

export const userApi = new UserApi()
