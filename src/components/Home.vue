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
      <div class="board_container">
        <div class="board_wrap" v-for="(item, index) in 3" :key="`board_${index}`">
          <nav class="board" :class="`nav${index + 1}`">
          </nav>
        </div>
      </div>
      <!-- /board_container -->

      <div class="figure_container">
        <!-- <div class="figure_wrap" v-for="(item, index) in 4" :key="`figure_${index}`"> -->
        <div class="figure_wrap">
          <figure class="imghvr-blur">
            <img class="figure_image" src="@/assets/img/samples/sample1.jpg">
            <figcaption>
              <h3 class="img-title">TITLE</h3>
              <span class="img-content">content</span>
            </figcaption>
            <!-- <a href="http://www.imagehover.io"></a> -->
          </figure>
        </div>
        <div class="figure_wrap">
          <figure class="imghvr-blur">
            <img class="figure_image" src="@/assets/img/samples/sample2.jpg">
            <figcaption>
              <h3 class="img-title">TITLE</h3>
              <span class="img-content">content</span>
            </figcaption>
            <!-- <a href="http://www.imagehover.io"></a> -->
          </figure>
        </div>
        <div class="figure_wrap">
          <figure class="imghvr-blur">
            <img class="figure_image" src="@/assets/img/samples/sample3.jpg">
            <figcaption>
              <h3 class="img-title">TITLE</h3>
              <span class="img-content">content</span>
            </figcaption>
            <!-- <a href="http://www.imagehover.io"></a> -->
          </figure>
        </div>
        <div class="figure_wrap">
          <figure class="imghvr-blur">
            <img class="figure_image" src="@/assets/img/samples/sample4.jpg">
            <figcaption>
              <h3 class="img-title">TITLE</h3>
              <span class="img-content">content</span>
            </figcaption>
            <!-- <a href="http://www.imagehover.io"></a> -->
          </figure>
        </div>
        <div class="figure_wrap">
          <figure class="imghvr-blur">
            <img class="figure_image" src="@/assets/img/samples/sample4.jpg">
            <figcaption>
              <h3 class="img-title">TITLE</h3>
              <span class="img-content">content</span>
            </figcaption>
            <!-- <a href="http://www.imagehover.io"></a> -->
          </figure>
        </div>
        <div class="figure_wrap">
          <figure class="imghvr-blur">
            <img class="figure_image" src="@/assets/img/samples/sample1.jpg">
            <figcaption>
              <h3 class="img-title">TITLE</h3>
              <span class="img-content">content</span>
            </figcaption>
            <!-- <a href="http://www.imagehover.io"></a> -->
          </figure>
        </div>
        <div class="figure_wrap">
          <figure class="imghvr-blur">
            <img class="figure_image" src="@/assets/img/samples/sample2.jpg">
            <figcaption>
              <h3 class="img-title">TITLE</h3>
              <span class="img-content">content</span>
            </figcaption>
            <!-- <a href="http://www.imagehover.io"></a> -->
          </figure>
        </div>
        <div class="figure_wrap">
          <figure class="imghvr-blur">
            <img class="figure_image" src="@/assets/img/samples/sample3.jpg">
            <figcaption>
              <h3 class="img-title">TITLE</h3>
              <span class="img-content">content</span>
            </figcaption>
            <!-- <a href="http://www.imagehover.io"></a> -->
          </figure>
        </div>
      </div>
      <!-- /figure_container-->

    </section>

    <section>
      <footer>
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
      </footer>
    </section>
    <!-- footer -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goHome () {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/reset.scss';

// 헤더
section.header {
  position: relative;
  background: url('../assets/img/cover/home_cover2.jpg') center center / cover no-repeat;
  width: auto;
  height: 45vh;

  .logo {
    position: absolute;
    top: 20px;
    left: 20px;

    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    background: url('../assets/img/logo/logo.png') no-repeat;
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
section.content {
  // background-color: green; // dummy
  background-color: #ddd;

  min-height: 100vh;

  // 게시판 바로가기
  .board_container {
    // background-color: bisque; // dummy

    margin: 0 auto 0 auto;
    width: 72vw;
    text-align: center;
    vertical-align: middle;

    .board_wrap {
      // background-color: cadetblue; // dummy

      display: inline-block;
      width: 24vw;
      height: 16vw;
      padding: .5vw 0.25vw;

      nav.board {
        // background-color: violet; // dummy

        background-color: #fff;
        cursor: pointer;
        height: 100%;
        opacity: 0.75;

        &.nav1 {
          background: url('../assets/img/nav/board_nav1.jpg') center center / cover no-repeat;
        }
        &.nav2 {
          background: url('../assets/img/nav/board_nav2.jpg') center center / cover no-repeat;
        }
        &.nav3 {
          background: url('../assets/img/nav/board_nav3.jpg') center center / cover no-repeat;
        }
      }
    }
  }

  // 사진첩
  .figure_container {
    // background-color: pink; // dummy

    margin: 0 auto;
    width: 60vw;
    text-align: center;
    vertical-align: middle;

    .figure_wrap {
      // background-color: yellowgreen; // dummy

      display: inline-block;
      width: 10vw;
      margin: 1vh 2vw;

      figure {
        min-width: 200px;
        min-height: 200px;
        background-color: rgba(255, 255, 255, 0);

        .figure_image {
          max-width: 10vw;
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

section footer {
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
