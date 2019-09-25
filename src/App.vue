<template>
  <div id="app" class="clearfix">
    <div class="header_wrap">
      <Header></Header>
      <SubHeader></SubHeader>
    </div>
    <aside class="sideBar_wrap">
      <SideBar></SideBar>
    </aside>
    <div class="mainLayout_wrap">
      <MainLayout></MainLayout>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import SideBar from './components/SideBar'
import MainLayout from './components/MainLayout'

export default {
  name: 'app',
  components: {
    Header,
    SubHeader,
    SideBar,
    MainLayout
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/cmm.scss';

#app { height: 100%; }

.sideBar_wrap {
  float: left;
  width: 10%;
}
.main_layout_wrap {
  float: left;
  width: 90%;
}

.fade-enter-active,
.fade-leave-active { transition: opacity .1s }

.fade-enter,
.fade-leave-to { opacity: 0 }
</style>
