<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4 class="fs-24" v-round>Api + Store</h4>
    <ul style="padding: 0;" v-round>
      <li v-for="(user, index) in users" :key="index" style="list-style: none;">
        {{ user.first_name }} {{ user.last_name }}
      </li>
    </ul>
    <h4 class="fs-24"><a href="https://www.antdv.com/docs/vue/introduce/" target="_blank">Ant Design of Vue</a></h4>
    <template>
      <a-input placeholder="Basic usage" v-model="input" style="width: 200px;"/>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { userModule } from '@/store/modules/Users'

@Component
/**
 * Create component
 */
export default class About extends Vue {
  input: string | null = null

  /**
  * Get reverse users list
  * @returns [User] - Users list
  */
  get users () {
    return userModule.userReverse
  }

  /**
  * Get company name
  * @returns Company.company - Company name
  */
  get companyName () {
    return userModule.companyName
  }

  /**
  * Created
  * @returns void
  */
  created (): void {
    userModule.getUsers()
  }
}
</script>
