<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import login from "components/login/login.vue"
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
    height: 100%;
  }
</style>
