<template>
  <div id="home">
    <section class="header">
      <h1 class="logo"></h1>
      <div class="login_wrap">
        <span>로그인</span><span>|</span><span>회원가입</span>
      </div>
      <div class="title_wrap">
        <h2 class="title">KNU <span class="title title--labName"><strong class="title title--initial">생</strong>체대사<strong class="title title--initial">조</strong>절학</span> Lab.</h2>
      </div>
    </section>

    <section class="content">
      <div class="figure_container">
        <div class="figure_wrap" v-for="(item, index) in 4" :key="`figure_${index}`">
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

    <section class="footer">
      <div class="site_wrap">
        <div class="site">
          <a href="http://cals.kangwon.ac.kr/" target="_blank">
            <img class="siteImage" src="@/assets/img/site/knu.png" alt="girl"><br>
            <span class="siteName">KNU</span>
          </a>
        </div>
        <div class="site">
          <a href="http://cals.kangwon.ac.kr/" target="_blank">
            <img class="siteImage" src="@/assets/img/site/school64.png" alt="girl"><br>
            <span class="siteName">동생대</span>
          </a>
        </div>
        <div class="site">
          <a href="https://library.kangwon.ac.kr/" target="_blank">
            <img class="siteImage" src="@/assets/img/site/books64.png" alt="girl"><br>
            <span class="siteName">도서관</span>
          </a>
        </div>
        <div class="site">
          <a href="https://www.riss.kr/" target="_blank">
            <img class="siteImage" src="@/assets/img/site/riss.gif" alt="girl"><br>
            <span class="siteName">RISS</span>
          </a>
        </div>
        <div class="site">
          <a href="http://www.ndsl.kr/" target="_blank">
            <img class="siteImage" src="@/assets/img/site/ndsl.png" alt="girl"><br>
            <span class="siteName">NDSL</span>
          </a>
        </div>
      </div>
      <div class="info_wrap">
        <h3></h3>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/reset.scss';

// 헤더
.header {
  position: relative;
  background: url('../assets/img/home_cover2.jpg') center center / cover no-repeat;
  width: auto;
  height: 45vh;

  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
    display: inline-block;
    vertical-align: middle;
    background: url('../assets/img/logo.png') no-repeat;
    background-size: contain;
    width: 5vh;
    height: 5vh;
  }

  .login_wrap {
    position: absolute;
    top: 20px;
    right: 20px;
    display: inline-block;
    vertical-align: middle;
    font-size: 24px;
  }

  .title_wrap {
    padding-top: 22vh;
    text-align: center;

    .title {
      font-family: Gugi;
      font-size: calc(2vh + .2vw);
      color: #333444;

      &.title--labName {
        font-size: 2.5em;
        color: #222;
        font-weight: bold;
      }

      &.title--initial {
        background: linear-gradient(to right, #333, #222444);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.25em;
        // color: #222444;
        font-weight: bold;
      }
    }
  }
}
// 본문
.content {
  // background-color: green; // dummy

  position: relative;
  min-height: 100vh;

  .figure_container {
    // background-color: pink; // dummy

    position: absolute;
    top: -50px;
    left: 50%;
    transform: translate(-50%, 0);

    width: 60vw;
    text-align: center;

    .figure_wrap {
      // background-color: yellowgreen; // dummy

      display: inline-block;
      width: 10vw;
      margin: 20px 40px;

      figure {
        min-width: 200px;
        min-height: 200px;
        background-color: rgba(255, 255, 255, 0);

        .figure_image {
          max-width: 200px;
          height: auto;
        }
      }

      figcaption {
        text-align: center;
        background-color: rgba(255, 255, 255, 0);

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

.footer {
  height: 120px;
  text-align: center;
  background-color: $gray-light-2;

  .site_wrap {
    // background-color: aquamarine; // dummy

    padding: 10px;

    .site {
      display: inline-block;
      vertical-align: middle;
      text-align: center;

      width: 100px;
      height: 100px;
      padding: 10px;
      margin: 0 .5vw;

      border: 1px dashed $skyblue;
      border-radius: 10px;

      a {
        position: relative;
        // vertical-align: middle;

        img {
          max-width: 64px;
          max-height: 64px;
        }

        .siteName {
          font-weight: bold;
        }
      }
    }
  }
}

@media ( max-width: 1400px ) {
  .title {
    font-size: 0.8rem;
  }
}

</style>
