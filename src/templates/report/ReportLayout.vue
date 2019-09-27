<template>
  <div class="report_layout">
    <aside class="sideBar_wrap">
      <SideBar></SideBar>
    </aside>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import SideBar from './ReportSideBar'

export default {
  name: 'ReportLayout',
  components: {
    SideBar
  }
}
</script>

<style lang="scss" scoped>
.sideBar_wrap {
  float: left;
  width: 10%;
}
.content {
  float: left;
  width: 90%;
}
</style>
