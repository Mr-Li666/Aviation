<template>
  <div class="dialog">
    <span>{{ dialog_html }}</span>
  </div>
</template>

<script>
export default {
  name: "inputDialog",
  props:{
    dialog_html:{
      type:String,
      required:true,
      default:''
    }
  }
};
</script>

<style scoped>
#login .dialog {
  width: 218px;
  height: 48px;
  line-height: 48px;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
}
#login .dialog span {
  font-size: 14px;
}
</style>

