<template>
  <div id="avaLogin">
    <div id="login">
      <span>应急救援航空服务系统</span>
      <login-form @loginform_info = "show_dialogInfo"></login-form>
      <input-dialog v-if="isActive" :dialog_html = "dialogInfo"></input-dialog>
    </div>

    <div id="copyright">
      <a href="https://beian.miit.gov.cn/"
        >©2020 中航材航空救援股份有限公司 冀ICP备2020026612号-1</a>
    </div>
  </div>
</template>

<script>

import loginForm from 'components/login/loginForm.vue'
import inputDialog from 'components/login/dialog.vue'


export default {
  name: "login",
  components: { 
    loginForm,
    inputDialog  
  },
  data() {
    return {
      isActive:false,
      dialogInfo:'',
    }
  },
  methods:{
    show_dialogInfo(data){
      // console.log(data)
      this.dialogInfo = data
      this.isActive = true;
      setTimeout(() => {
        this.isActive = false;
      }, 2000);
    }
  },
};
</script>

<style >
#avaLogin{
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/login.png');
  background-position: -1000px -500px;
  background-repeat: no-repeat;
}
#login {
  width: 360px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
#login span {
  font-weight: 400;
  font-size: 2rem;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0px 6px 10px rgb(0 66 63 / 35%);
}
#copyright {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
}
#copyright a {
  color: darkgray;
  font-size: 12px;
  text-decoration: none;
}
</style>