<template>
  <div class="side_bar">
    <router-link tag="div" class="sideTab" :to="{ name: 'PaperNoticeList' }"><a>논문</a></router-link>
    <router-link tag="div" class="sideTab" :to="{ name: 'LabNoticeList' }"><a>실험실</a></router-link>
  </div>
</template>

<script>
export default {
  name: 'NoticeSideBar'
}
</script>

<style lang="scss" scoped>
.side_bar {
  background-color: grey;
  min-height: 500px;
}
.sideTab {
  width: 100px;
  height: 20px;
  padding: 6px;
  font-size: 1.1em;

  &.active {
    a {
      color: lime;
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
</style>
