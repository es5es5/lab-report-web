<template>
  <div id="header">
    <h1 @click="goHome">HEADER</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goHome () {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  background-color: hotpink;
  height: 63px;
  line-height: 63px;
}
</style>
