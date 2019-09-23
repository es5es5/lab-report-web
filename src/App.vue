<template>
  <div id="app" class="clearfix">
    <div class="header_wrap">
      <Header></Header>
    </div>

    <aside>
      <SideBar></SideBar>
    </aside>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
import SideBar from './components/SideBar'

export default {
  name: 'app',
  components: {
    Header,
    SideBar
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/cmm.scss';

#app { height: 100%; }

aside {
  float: left;
  width: 10%;
}
.fade-enter-active,
.fade-leave-active { transition: opacity .1s }

.fade-enter,
.fade-leave-to { opacity: 0 }
</style>
