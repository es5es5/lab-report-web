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
            <a href="https://library.kangwon.ac.kr/" target="_blank">
              <img class="siteImage" src="@/assets/img/pictogram/books64.png" alt="girl"><br>
              <span class="siteName">도서관</span>
            </a>
          </div>
        </div>
        <div class="info_wrap">
          <h3></h3>
        </div>
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
  height: 800px;
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
  // background-color: green; // dummy

  display: block;
  margin: 330px - 80px auto 0 auto;
  max-width: auto;
  min-height: 1200px;

  .title_wrap {
    margin: 0 auto 160px auto;
    text-align: center;

    .title {
      font-family: Gugi;
      // font-size: 2.5rem;
      font-size: 40px;
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
        font-size: 1.25em;
        // color: #222444;
        font-weight: bold;
      }
    }
  }

  .figure_container {
    // background-color: pink; // dummy

    margin: 0 auto;
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
  background-color: $gray-light-2;
  height: 120px;

  .site_wrap {
    .site {
      display: inline-block;
      padding: 10px;
      text-align: center;
      border: 1px dashed $skyblue;
      border-radius: 10px;

      .siteName {
        font-weight: bold;
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
