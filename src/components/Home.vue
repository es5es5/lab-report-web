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
        <div class="title_wrap">
          <h2 class="title">KNU <span class="title title--labName"><strong class="title title--initial">생</strong>체대사<strong class="title title--initial">조</strong>절학</span> Lab.</h2>
        </div>
        <div class="figure_container">
          <div class="figure_wrap" v-for="(item, index) in 12" :key="`figure_${index}`">
            <figure class="imghvr-blur">
              <img src="" alt="">
              <img class="figure_image" src="@/assets/img/logo.png">
              <figcaption>
                <h3 class="img-title">TITLE</h3>
                <span class="img-content">content</span>
              </figcaption>
              <!-- <a href="http://www.imagehover.io"></a> -->
            </figure>
          </div>
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
@font-face {
  font-family: 'Dokdo';
  src: local('독도'),
       url('~@/assets/fonts/Dokdo-Regular.ttf') format('truetype');
  font-weight: 300;
}
@font-face {
  font-family: 'Gugi';
  src: local('구기'),
       url('~@/assets/fonts/Gugi-Regular.ttf') format('truetype');
  font-weight: 300;
}

// 배경
#background_cover {
  background: url('../assets/img/home_cover2.jpg') center center / cover no-repeat;
  width: auto;
  height: 900px;
}

// 헤더
.header {
  display: block;
  height: 80px;

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
  // background-color: green;

  display: block;
  margin: 430px - 80px auto 0 auto;
  max-width: auto;

  .title_wrap {
    margin: 0 auto 160px auto;
    text-align: center;

    .title {
      font-family: Gugi;
      font-size: 55px;
      color: #333444;

      &.title--labName {
        font-size: 2em;
        color: #222;
        font-weight: bold;
      }
      &.title--initial {
        background: linear-gradient(to right, #333, #222444);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.2em;
        // color: #222444;
        font-weight: bold;
      }
    }
  }

  .figure_container {
    // background-color: pink;

    margin: 0 auto;
    min-width: 600px;
    width: 1200px;
    text-align: center;

    .figure_wrap {
      // background-color: yellowgreen;

      display: inline-block;
      max-width: 300px;
      margin: 20px 40px;

      figure {
        min-width: 200px;
        min-height: 200px;

        .figure_image {
          max-width: 200px;
          height: auto;
        }
      }

      figcaption {
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
}

</style>
