<template>
  <div id="side_bar">
    <router-link tag="div" class="sideTab" :to="{ name: 'WeekReportList' }">주간업무보고</router-link>
    <router-link tag="div" class="sideTab" :to="{ name: 'side1' }">사이드바1</router-link>
    <router-link tag="div" class="sideTab" :to="{ name: 'side2' }">사이드바2</router-link>
    <router-link tag="div" class="sideTab" :to="{ name: 'side3' }">사이드바3</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#side_bar {
  background-color: aquamarine;
  min-height: 500px;
}
.sideTab {
  width: 100px;
  height: 20px;

  a {
    display: block;
  }
}
</style>
