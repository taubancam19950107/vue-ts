import { apiConfig } from '../config'
import { AxiosResponse } from 'axios'
import { Api } from '@/api/Api'
import { UserList } from './Interfaces'

export class UserApi extends Api {
  public constructor () {
    super(apiConfig)

    this.getUsers = this.getUsers.bind(this)
  }

  public async getUsers (): Promise<UserList> {
    try {
      const res: AxiosResponse<UserList> = await this.get<UserList, AxiosResponse<UserList>>('/users')
      return this.success(res)
    } catch (error) {
      throw error
    }
  }
}

export const userApi = new UserApi()
