<template>
  <div id="home">
    <div id="cover">
      <div class="header_wrap">
        <div class="logo" />
        <div class="login_wrap">
          <span>로그인</span><span>|</span><span>회원가입</span>
        </div>
      </div>
      <div class="homeTab_wrap">
        <ul>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/reset.scss';
.header_wrap {
  .logo {
    display: inline-block;
    vertical-align: middle;
    background: url('../assets/img/logo.png') no-repeat;
    background-size: contain;
    width: 4em;
    height: 4em;
  }
  .login_wrap {
    display: inline-block;
    vertical-align: middle;
    font-size: 2em;
  }
}
#cover {
  background: url('../assets/img/home_cover.jpg') center center / cover no-repeat;
  // background-size: cover;
  width: auto;
  min-height: 1200px;
}
</style>
