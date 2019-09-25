<template>
  <div id="main_layout">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
</style>
