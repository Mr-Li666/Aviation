<template>
  <div class="header">
    <div class="headerImg">
      <img src="~assets/img/head/sysname.png" />
    </div>
    <div class="router">
      <router-link to="/resourceManagement" tag="p">资源管理</router-link>
      <router-link to="/instruction" tag="p">指令生成</router-link>
      <router-link to="/task" tag="p">任务调度</router-link>
      <router-link to="/plan" tag="p">计划管理</router-link>
      <router-link to="service" tag="p">服务保障</router-link>
      <router-link to="/operation" tag="p">运行管理</router-link>
      <router-link to="/serviceArc" tag="p">服务采购</router-link>
      <router-link to="/statistics" tag="p">统计分析</router-link>
      <router-link to="/onduty" tag="p">值班管理</router-link>
    </div>
    <div class="config">
      <div>
        <img src="~assets/img/head/personmsg.png" alt="" />
      </div>

      <div class="info">
        <p>admin</p>
        <p>{{ getTime }}</p>
      </div>
      <div class="setup">
        <img src="~assets/img/head/setup.png" alt="" />
      </div>
      <div class="logout" @click="logout()">
        <img src="~assets/img/head/loginout.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "avaHeader",
  data() {
    return {};
  },
  computed: {
    getTime() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      // console.log(`${year}年${month}月${day}日`)
      return `${year}年${month}月${day}日`;
    },
  },
  methods: {
    logout() {
      this.$router.replace("/login");
    },
  },
};
</script>

<style>
.header {
  width: 100;
  height: 80px;
  background: #000521;
  display: flex;
  color: white;
  justify-content: space-between;
}
.headerImg {
  width: 18%;
  display: flex;
  align-items: center;
}
.headerImg img {
  width: 100%;
}
.router {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  width: 63%;
}
.router p {
  width: 107px;
  height: 38px;
  margin-top: 20px;
  margin-left: 26px;
  line-height: 38px;
  text-align: center;
  color: #cce6eb;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  background-image: url("../../assets/img/head/sys-p-bg.png");
  background-size: 100% 100%;
}
.router .router-link-active {
  color: #00f0ff;
  background-image: url("../../assets/img/head/sys-p-bged.png");
  background-size: 100% 100%;
}
.config {
  margin-left: 30px;
  margin-right: -20px;
  display: flex;
  align-items: center;
  width: 16%;
}

.info {
  height: 48px;
  border-right: 1px solid #35b5ff;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 20px;
  color: #cbe3f0;
}
.info p {
  margin: 0;
}
.setup {
  margin-right: 30px;
  cursor: pointer;
}
.logout{
  cursor: pointer;
}
</style>