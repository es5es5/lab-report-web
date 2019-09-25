<template>
  <div id="subHeader">
    <router-link tag="div" class="menu" :to="{ name: 'ReportMenu' }">보고서</router-link>
    <router-link tag="div" class="menu" :to="{ name: 'AlbumMenu' }">사진첩</router-link>
    <router-link tag="div" class="menu" :to="{ name: 'NoticeMenu' }">공지사항</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#subHeader {
  background-color: pink;
  height: 30px;
  line-height: 30px;

  .menu {
    display: inline-block;
    margin-right: 10px;
  }
}
</style>
