<template>
  <div id="home">
    <div id="background_cover">
      <section class="header">
        <div class="header_inner">
          <div class="logo" />
          <div class="login_wrap">
            <span>로그인</span><span>|</span><span>회원가입</span>
          </div>
        </div>
      </section>

      <section class="content">
        <div class="figure_container">
          <ul>
            <li class="figure_wrap">
              <figure class="imghvr-fade">
                <img src="@/assets/img/logo.png">
                <figcaption>
                  <h3 class="img-title">asdf</h3>
                  <span class="img-content">asdf</span>
                </figcaption>
                <!-- <a href="http://www.imagehover.io"></a> -->
              </figure>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div class="footer"></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/reset.scss';

// 배경
#background_cover {
  background: url('../assets/img/home_cover2.jpg') center center / cover no-repeat;
  width: auto;
  min-height: 600px;
}

// 헤더
.header {
  .header_inner {
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
}

// 본문
.content {
  .figure_wrap {
    figure {
      text-align: center;

      .img-title {
        font-size: 2em;
        font-weight: bold;
      }
      .img-content {
        display: inline-block;

        margin-top: 10px;
        font-size: 1.6em;
        font-weight: normal;
      }
    }
  }
}
</style>
