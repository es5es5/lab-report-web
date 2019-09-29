<template>
  <div id="app" class="clearfix">
    <div class="header_wrap">
      <Header></Header>
      <SubHeader></SubHeader>
    </div>
    <MainLayout></MainLayout>
  </div>
</template>

<script>
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import MainLayout from './components/MainLayout'

export default {
  name: 'app',
  components: {
    Header,
    SubHeader,
    MainLayout
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/cmm.scss';
@import '@/assets/scss/index.scss';

#app { height: 100%; }

.fade-enter-active,
.fade-leave-active { transition: opacity .1s }

.fade-enter,
.fade-leave-to { opacity: 0 }
</style>
