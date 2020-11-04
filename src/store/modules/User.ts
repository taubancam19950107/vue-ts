import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules'
import UserApi from '@/api/apis/UserApi'
import store from '../index'
import User from '@/api/types/User'
import { setToken } from '@/utils/storage'

/**
 * UsersModule
 */
@Module
class UserModule extends VuexModule {
  // states
  user?: User = undefined

  /**
   * Mutation: Set user
   * @param User User info
   */
  @Mutation
  setUser(user: User) {
    this.user = user
  }

  /**
   * Login
   * @param userInfo
   * @returns {Promise<void>}
   * @constructor
   */
  @Action
  public async login(userInfo: { username: string, password: string}) {
    let { username, password } = userInfo
    username = username.trim()
    const userApi = new UserApi()
    const { data } = await userApi.login({ username, password })
    setToken(data.accessToken)
  }

  /**
   * Action: Get user from api
   */
  @Action
  async getUserInfo() {
    try {
      const userApi = new UserApi()
      const { data } = await userApi.getUserInfo()
      this.setUser(data)
    } catch (e) {
      // TODO
    }
  }
}

// register module (could be in any file)
export const userModule = new UserModule({ store, name: 'User' })
