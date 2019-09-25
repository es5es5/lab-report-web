<template>
  <div id="main_layout">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#main_layout {
  background-color: beige;
  min-height: 500px;
}
.fade-enter-active,
.fade-leave-active { transition: opacity .3s }

.fade-enter,
.fade-leave-to { opacity: 0 }
</style>
