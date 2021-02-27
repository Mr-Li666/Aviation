<template>
  <div class="login_form">
    <input class="username" type="text" v-model="user" placeholder="用户名" />
    <input class="password" type="password" v-model="password" placeholder="密码" />
    <div class="VerificationCode">
      <input type="text" v-model="inputVcode"  placeholder="验证码(区分大小写)" />
      <button type="button" @click="changeCode()">{{ final_Vcode }}</button>
    </div>
    <div class="login_btn">
      <button type="button" @click="login()">登录</button>
    </div>
  </div>
</template>

<script>
import {check_log, getAuthority} from 'network/login.js'

export default {
  name: "loginFrom",
  data() {
    return {
      user:'',
      password:'',
      inputVcode:'',
      initial_Vcode: [
        '1','2','3','4','5','6','7','8','9','0',
				'a','b','c','d','e','f','g','h','i','j',
				'k','l','m','n','o','p','q','r','s','t',
				'u','v','w','x','y','z',
				'A','B','C','D','E','F','G','H','I','J',
				'K','L','M','N','O','P','Q','R','S','T',
				'U','V','W','X','Y','Z'],
      final_Vcode: "",
      isActive: false,
      dialog_html: "正在登录，验证账号密码……",
    };
  },
  methods: {
    changeCode() {
      // 点击时改变验证码
      this.final_Vcode = "";

      for (let i = 0; i < 4; i++) {
        let index = parseInt(Math.random() * this.initial_Vcode.length);
        this.final_Vcode += this.initial_Vcode[index];
      }
    },
    // 登录事件监听
    login() {
      console.log(this.user)
      console.log(this.password)
      console.log(this.inputVcode)
      
      if (this.user && this.password && this.inputVcode) {
        console.log("开始登录");
        // 进行登录验证
        // 1.首先检验验证码是否正确，正确的话再验证账号密码
        // if (this.inputVcode === this.final_Vcode) {
        //   // 发送请求，验证账号密码
        //   check_log(user,password).then(res => {
        //     console.log(res.data)
        //     if(res.code == 200){
        //       // 进行下一步请求
        //       getAuthority(res.data.userId).then(permiss =>{
        //         // console.log(permiss)
        //         window.sessionStorage.setItem('key',JSON.stringify(permiss));
        //         // window.location.replace("/hang/index.html")
                // this.$router.push("/home")
        //       })
        //     }
        //     if(res.code == 500){
        //       // 渲染服务端返回的错误
        //       this.dialog_html = res.message
        //     }
        //   }).catch(err =>{
        //     // 账号密码输入错误，需要重新输入
        //     let info = "账号密码输入错误，请重新输入";
        //     this.dialog_html = info
        //   })
        // } else {
        //   let info = "验证码不匹配，请重新输入";
        //   this.dialog_html = info
        // }
        this.$router.push("/home")
      } else {
        if (!this.user || !this.password) {
          // 进行dialog的显示与隐藏
          let info = "请输入用户名或密码";
          this.dialog_html = info
        } else {
          let info = "请输入验证码";
          this.dialog_html = info
        }
      }
      // 向父组件传递参数dialog
      this.$emit('loginform_info',this.dialog_html)
    }
  },
  created() {
    // 组件创建完成时，渲染验证码，否则会出现验证码区域空白
    this.changeCode();
  },
};
</script>

<style>
.login_form {
  z-index: 1;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  margin-top: 10px;
  padding: 45px;
  text-align: center;
}
.login_form input {
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  background: #f2f2f2;
  box-sizing: border-box;
  outline: none;
}
.VerificationCode {
  width: 100%;
}
.VerificationCode input {
  width: 68%;
}
.VerificationCode button {
  width: 30%;
  background: #f2f2f2;
  height: 49px;
  border: 0;
  margin-left: 2%;
  outline: none;
  font-size: 14px;
}
.login_btn button {
  width: 100%;
  border: 0;
  color: #ffffff;
  background: #014188;
  font-size: 14px;
  padding: 15px;
  cursor: pointer;
  outline: none;
}
</style>