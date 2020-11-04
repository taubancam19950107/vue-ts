<template>
  <div class="home-layout">
    <el-menu
      :default-active="$route.name"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-menu-item index="home" :route="{name: 'home'}">Homepage</el-menu-item>
      <el-menu-item index="example" :route="{name: 'example'}">Example</el-menu-item>
      <el-submenu index="user" class="float-right" v-if="userInfo">
        <template slot="title">
          <el-image :src="userInfo.avatar" class="user-avatar"/>
          {{ userInfo.name }}
        </template>
        <el-menu-item index="profile">Profile setting</el-menu-item>
        <el-menu-item index="logout" @click="logout">Logout</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-main>
      <router-view/>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { userModule } from '@/store/modules/User'
import { deleteToken } from '@/utils/storage'

@Component
export default class About extends Vue {
  /**
   * Get User info
   * @returns User User
   */
  get userInfo() {
    return userModule.user
  }

  /**
   * Created
   * @returns void
   */
  created(): void {
    userModule.getUserInfo()
  }

  /**
   * Logout
   * @private
   * @returns void
   */
  private logout() {
    deleteToken()
    this.$router.push({
      name: 'login'
    })
  }
}
</script>

<style lang="scss" scoped>
.el-menu--horizontal > .el-submenu .el-submenu__title {
  line-height: 55px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
</style>
