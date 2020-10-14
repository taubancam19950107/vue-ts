// user-module.ts
import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules'
import { UserApi } from '@/api/Request/User'
import store from '../index'
import User from '@/api/Response/User'
import Company from '@/api/Response/Company'

/**
 * UsersModule
 */
@Module
class UsersModule extends VuexModule {
  // states
  users: User[] = []
  company: Company = {
    company: '',
    text: '',
    url: ''
  }

  /**
   * Reversed users
   * @returns {array} - Reversed users
   */
  get userReverse () {
    return this.users.reverse()
  }

  /**
   * Company name
   * @returns {string} - Company name
   */
  get companyName () {
    return this.company.company
  }

  /**
   * Mutation: Set users
   * @params User[] - User list
   */
  @Mutation
  setUsers (users: User[]) {
    this.users = users
  }

  /**
   * Mutation: Set Company
   * @params company: Company
   */
  @Mutation
  setCompany (company: Company) {
    this.company = company
  }

  /**
   * Action: Get users from api
   */
  @Action
  async getUsers () {
    const userApi = new UserApi()
    const users = await userApi.getUsers()
    this.setUsers(users.data)
    this.setCompany(users.ad)
  }
}

// register module (could be in any file)
export const userModule = new UsersModule({ store, name: 'Users' })
