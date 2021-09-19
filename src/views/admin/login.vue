<template>
  <div id="login">
    <div class="input">
      <div>简陋的站长登录界面</div>
      <el-input v-model="account" placeholder="请输入简陋的账号"></el-input>
      <el-input v-model="password" placeholder="请输入简陋的密码"></el-input>
      <el-button size="mini" round @click="login">简陋的登录按钮</el-button>
    </div>
  </div>
</template>

<script>
import { admin } from "@/network/login.js";
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    login() {
      admin(this.account, this.password).then((res) => {
        let allCookies = document.cookie
        console.log(allCookies)
        console.log(this.$cookies.keys() )
          if(res=='error'){
           alert("账号或密码错误")
          }else{
              window.localStorage.setItem('token','token');
               this.$router.push("admin");
          }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .input {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-content: space-around;
    flex-wrap: wrap;
    padding: 15px;
  }
}
</style>