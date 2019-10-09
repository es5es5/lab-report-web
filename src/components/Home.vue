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
        <ul class="board_wrap">
          <li class="board" v-for="(item, index) in 3" :key="`board_${index}`">
            <div class="board-cover" :class="`board-cover${index + 1}`">
              <div class="board-cover-contents_wrap">
                <span class="contents-title">주간업무보고서</span>
              </div>
            </div>
          </li>
          <li class="board" v-for="(item, index) in 3" :key="`board_2${index}`">
            <div class="board-cover" :class="`board-cover${3 - index}`">
              <div class="board-cover-contents_wrap">
                <span class="contents-title">공지사항</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- /board_container -->

    </section>

    <section>
      <footer>
        <ul class="site_wrap">
          <li class="site">
            <div class="site_inner">
              <a class="site-anchor" href="http://cals.kangwon.ac.kr/" target="_blank">
                <img class="siteImage" src="@/assets/img/site/knu.png" alt="girl"><br>
                <span class="siteName">KNU</span>
              </a>
            </div>
          </li>
          <li class="site">
            <div class="site_inner">
              <a href="http://cals.kangwon.ac.kr/" target="_blank">
                <img class="siteImage" src="@/assets/img/site/school64.png" alt="girl"><br>
                <span class="siteName">동생대</span>
              </a>
            </div>
          </li>
          <li class="site">
            <div class="site_inner">
              <a href="https://library.kangwon.ac.kr/" target="_blank">
                <img class="siteImage" src="@/assets/img/site/books64.png" alt="girl"><br>
                <span class="siteName">도서관</span>
              </a>
            </div>
          </li>
          <li class="site">
            <div class="site_inner">
              <a href="https://www.riss.kr/" target="_blank">
                <img class="siteImage" src="@/assets/img/site/riss.gif" alt="girl"><br>
                <span class="siteName">RISS</span>
              </a>
            </div>
          </li>
          <li class="site">
            <div class="site_inner">
              <a href="http://www.ndsl.kr/" target="_blank">
                <img class="siteImage" src="@/assets/img/site/ndsl.png" alt="girl"><br>
                <span class="siteName">NDSL</span>
              </a>
            </div>
          </li>
        </ul>
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
#home {
  font-size: 14px;
}

// 헤더
section.header {
  position: relative;
  background: url('../assets/img/cover/home_cover2.jpg') center center / cover no-repeat;
  width: auto;
  height: 28.57rem;

  .logo {
    position: absolute;
    top: 1.4285rem;
    left: 1.4285rem;

    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    background: url('../assets/img/logo/logo.png') no-repeat;
    background-size: contain;
    width: 3.5rem;
    height: 3.5rem;

    @media ( max-width: 1200px ) {
      width: 3rem;
      height: 3rem;
    }
  }

  .login_wrap {
    position: absolute;
    top: 1.4285rem;
    right: 1.4285rem;
    display: inline-block;
    vertical-align: middle;
    font-size: 1.4rem;

    @media ( max-width: 1200px ) {
      font-size: 1.2rem;
    }
  }

  .title_wrap {
    padding-top: 14rem;
    text-align: center;

    .title {
      font-family: Gugi;
      font-size: 2rem;
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

@media ( max-width: 1400px ) {
  section.header .title_wrap .title {
    font-size: 1.6rem;
  }
}

@media ( max-width: 1200px ) {
  section.header .title_wrap .title {
    font-size: 1.4rem;
  }
}
@media ( max-width: 550px ) {
  section.header .title_wrap .title {
    font-size: 1rem;
  }
}

// 본문
section.content {
  // background-color: green; // dummy
  background-color: #ddd;

  min-height: 64rem;

  // 게시판 바로가기
  .board_container {
    // background-color: bisque; // dummy
    .board_wrap {
      // background-color: cadetblue; // dummy
      margin: 0 auto;
      padding: 10px;
      width: 72%;
      text-align: center;

      .board {
        // background-color: violet; // dummy

        position: relative;
        float: left;

        width: 33.333%;
        padding-top: 20%;

        @media only screen and (max-width: 1200px)  {
          width: 50%;
          padding-top: 30%;
        }

        @media ( max-width: 550px ) {
          width: 100%;
          padding-top: 66.666%;
        }

        .board-cover {
          position: absolute;
          cursor: pointer;
          transition: all .3s;

          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: 6px;
          padding: 6px;

          .board-cover-contents_wrap {
            opacity: 0;
            font-size: 0;
            padding-top: 25%;
            transition: all .3s;
            font-family: 'Gugi';
          }

          &.board-cover1 {
            background: url('../assets/img/board/board-cover1.jpg');
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
          }
          &.board-cover2 {
            background: url('../assets/img/board/board-cover2.jpg') center center / cover no-repeat;
          }
          &.board-cover3 {
            background: url('../assets/img/board/board-cover3.jpg') center center / cover no-repeat;
          }
          &:hover {
            transform: scale(1.025);
            background-color: #fff;
            border-radius: 1rem;
            opacity: .8;
            filter: blur(.5px);

            .board-cover-contents_wrap {
              opacity: 1;
              font-size: 3rem;
              text-align: center;

              .contents-title {
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
}

section footer {
  height: calc(10% + 10rem);
  background-color: $gray-light-2;

  .site_wrap {
    // background-color: aquamarine; // dummy

    padding: 10px;
    text-align: center;

    .site {
      box-sizing: content-box;
      position: relative;
      display: inline-block;
      vertical-align: middle;
      text-align: center;

      width: 5.5%;
      padding-top: 5.5%;
      margin: 0 4px;

      border: 1px dashed $skyblue;
      border-radius: 10px;

      .site_inner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        a {
          img {
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -30%);
            max-width: 4rem;
            max-height: 4rem;
            transition: all .5s;
            opacity: .8;

            &:hover {
              opacity: 1;
              transform: translate(-50%, -45%);
            }
          }

          .siteName {
            position: absolute;
            font-size: .5%;
            font-weight: bold;
            padding: 4px 0;
            bottom: -.05%;
            left: 50%;
            transform: translate(-50%, 0);
          }
          @media ( max-width: 1400px ) {
            .siteName {
              display: none;
            }
          }
        }
      }

    }
  }
}

</style>
