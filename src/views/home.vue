<template>
  <div id="home">
    <ava-header :active.sync="active"></ava-header>
    <router-view></router-view>
  </div>
</template>

<script>
import avaHeader from "components/common/header.vue";

export default {
  name: "home",
  components: {
    avaHeader,
  },
  data(){
    return{
      active:'resourceManagement'
    }
  },
  watch:{
    active(newVal){
      console.log(newVal)
      this.$router.push({
        path:`${this.active}`
      })
    }
  }
};
</script>

<style>
#home{
  width:100%;
  height: 90%;
}
</style>