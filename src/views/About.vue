<template>
  <div class="about">
    <h4 class="fs-24" v-round>Api + Store Example</h4>
    <ul style="padding: 0;" v-round>
      <li v-for="(user, index) in users" :key="index" style="list-style: none;">
        {{ user.first_name }} {{ user.last_name }}
      </li>
    </ul>
    <h4 class="fs-24"><a href="https://www.antdv.com/docs/vue/introduce/" target="_blank">Ant Design of Vue</a></h4>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
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
