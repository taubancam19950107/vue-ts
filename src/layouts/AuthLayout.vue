<template>
  <div class="auth-container">
    <div class="auth-wraper">
      <div class="header">
        <img src="../assets/images/logo.png" class="logo"/>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: $loginBg;

  .auth-wraper {
    position: relative;
    max-width: 300px;
    width: 100%;
    padding: 160px 15px 0;
    margin: 0 auto;
    overflow: hidden;
    background-color: $loginBg;

    .logo {
      width: 150px;
      margin-bottom: 30px;
    }
  }
}
</style>
