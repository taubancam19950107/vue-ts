// user-module.ts
import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules'
import { UserApi } from '@/api/Request/User'
import store from '../index'
import User from '@/models/User'
import Company from '@/models/Company'

@Module
class UsersModule extends VuexModule {
  // states
  users: User[] = []
  company: Company = {
    company: '',
    text: '',
    url: ''
  }

  // getters
  get userReverse () {
    return this.users.reverse()
  }

  get companyName () {
    return this.company.company
  }

  // mutations
  @Mutation
  setUsers (users: User[]) {
    this.users = users
  }

  @Mutation
  setCompany (company: Company) {
    this.company = company
  }

  // actions
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
