<template>
  <div id="app">
    <!-- <login></login> -->
    <router-view></router-view>
  </div>
</template>

<script>
import login from "views/login.vue"
export default {
  name:"app",
  components:{
    login
  }
}
</script>

<style>
  @import "assets/css/base.css";
  #app{
    height: 880px;
    width: 100%;
    position: relative;
  }
</style>
