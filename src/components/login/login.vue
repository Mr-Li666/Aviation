<template>
  <div>
    <div id="login">
      <span>应急救援航空服务系统</span>
      <div class="login_form">
        <input type="text" placeholder="用户名" />
        <input type="password" placeholder="密码" />
        <div class="VerificationCode">
          <input type="text" placeholder="验证码(区分大小写)" />
          <button type="button" @click="changeCode()">验证码</button>
        </div>
        <div class="login_btn">
          <button type="button">登录</button>
        </div>
      </div>
    </div>

    <div id="copyright">
      <a href="https://beian.miit.gov.cn/"
        >©2020 中航材航空救援股份有限公司 冀ICP备2020026612号-1</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      
    }
  },
  methods:{
    changeCode(){
      console.log('改变验证码');

    }
  }
};
</script>

<style>
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
}
/* .login_btn{
  width: 100%;
} */
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

#copyright{
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
}
#copyright a{
  color:darkgray;
  font-size: 12px;
  text-decoration: none;
}
</style>