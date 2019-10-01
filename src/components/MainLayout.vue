<template>
  <div id="main_layout" class="clearfix">
    <div class="header_wrap">
      <Header></Header>
      <SubHeader></SubHeader>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header'
import SubHeader from './SubHeader'

export default {
  components: {
    Header,
    SubHeader
  }
}
</script>

<style lang="scss" scoped>
#main_layout {
  min-height: 500px;
}
.fade-enter-active,
.fade-leave-active { transition: opacity .3s }

.fade-enter,
.fade-leave-to { opacity: 0 }
</style>
