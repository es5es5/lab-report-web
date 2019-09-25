<template>
  <div class="side_bar">
    <router-link tag="div" class="sideTab" :to="{ name: 'WeekReportList' }"><a>주간업무보고</a></router-link>
    <router-link tag="div" class="sideTab" :to="{ name: 'PaperList' }"><a>논문자료</a></router-link>
  </div>
</template>

<script>
export default {
  name: 'ReportSideBar'
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
