<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
