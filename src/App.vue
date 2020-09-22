<template>
  <div id="app" class="wrapper">
    <header></header>
    <left-content></left-content>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftContent from "./components/LeftContent"
import Header from "./components/Header"

export default {
  components:{
    LeftContent,
    Header
  }
}
</script>

<style scoped>
@import url(./index.css);
</style>