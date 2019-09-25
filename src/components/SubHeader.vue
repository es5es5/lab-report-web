<template>
  <div id="subHeader">
    <router-link tag="div" class="menu" :to="{ name: 'ReportMenu' }"><a>보고서</a></router-link>
    <router-link tag="div" class="menu" :to="{ name: 'AlbumMenu' }"><a>사진첩</a></router-link>
    <router-link tag="div" class="menu" :to="{ name: 'NoticeMenu' }"><a>공지사항</a></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#subHeader {
  background-color: pink;
  height: 50px;
  line-height: 50px;

  .menu {
    display: inline-block;
    padding: 0 4px;
    font-size: 1.3em;
    margin-right: 10px;

    &.active {
      a {
        color: lime;
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
}
</style>
