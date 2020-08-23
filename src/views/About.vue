<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4 class="fs-24">Api + Store</h4>
    <ul style="padding: 0">
      <li v-for="(user, index) in users" :key="index" style="list-style: none">
        {{ user.first_name }} {{ user.last_name }}
      </li>
    </ul>
    <h4 class="fs-24">Vee validate + Ant Design of Vue</h4>
    <ValidationProvider name="input" :rules="{required: true, is_video: true}" v-slot="{ errors }">
      <template>
        <a-input placeholder="Basic usage" v-model="input" style="width: 200px"/>
      </template>
      {{errors}}
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { userModule } from '@/store/modules/Users'

@Component
export default class About extends Vue {
  input: string | null = null

  get users () {
    return userModule.userReverse
  }

  get companyName () {
    return userModule.companyName
  }

  created (): void {
    userModule.getUsers()
  }
}
</script>
