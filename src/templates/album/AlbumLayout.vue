<template>
  <div class="report_layout">
    <aside class="sideBar_wrap">
      <SideBar></SideBar>
    </aside>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import SideBar from './AlbumSideBar'

export default {
  name: 'AlbumLayout',
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
</style>
