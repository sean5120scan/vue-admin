<template>
  <div class="center login-page">
    <div class="wrap">
      <div class="header txtCenter fs24 fsBold mt30">BIM中台</div>
      <div class="inner p30 boxSize">
        <div class="item">
          <div class="title vCenter">用户名</div>
          <div class="inputBox">
            <el-input
              class="inputEle"
              v-model="username"
              placeholder="请输入用户名"
            ></el-input>
          </div>
        </div>
        <div class="item mt20">
          <div class="title vCenter">密码</div>
          <div class="inputBox">
            <el-input
              class="inputEle"
              v-model="password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </div>
        </div>
        <div class="item mt20">
          <div class="title vCenter"></div>
          <div class="inputBox">
            <el-checkbox v-model="isChecked">记住密码</el-checkbox>
          </div>
        </div>
        <div class="item mt20">
          <div class="title vCenter"></div>
          <div class="inputBox btnBox">
            <el-button
              type="primary"
              style="width: 180px"
              :loading="loading"
              @click="login"
            >登陆</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@u/utils"
import AuthApi from "@/apis/authApi"
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      isChecked: false,
    };
  },
  computed: {},
  created() {
    // console.log("cookie:", Cookie.get("isRemenber"))
    // if (Cookie.get("isRemenber")) {
    //   this.isChecked = true
    //   this.username = Cookie.get("username")
    //   this.password = Cookie.get("password")
    // }
  },
  mounted() { },
  methods: {

    async login() {

      let data = {
        username: this.username,
        password: this.password
      }

      //记住用户名
      // if (this.isChecked) {
      //   Cookie.set("isRemenber", true)
      //   Cookie.set("username", this.username, 5)
      //   Cookie.set("password", this.password, 5)
      // } else {
      //   Cookie.clear()
      // }
      let res = await AuthApi.login(data)
      console.log("res:", res)
      let token = res.token
      console.log("token:", token)
      if (token) {
        console.log("---token存在---:")
        db.ls.set("token", token);
        console.log("aaaaaaaaaaaa")
        this.$store.commit("user/setToken", token)
        this.$router.push({ path: "/init" });

      }




      // let res = await this.$request("/api/userInfo");
      // console.log("res:", res);
      // this.$router.push({ paht: "/main" });
      // db.ls.set("token", 123);
      //生成菜单
      // let arr = ['editor']
      // this.$store.commit("app/generateRoutes", arr)

    },
  },
};
</script>
<style scoped lang="scss">
.login-page {
  width: 100%;
  height: 100vh;
}
.wrap {
  width: 500px;
  height: 300px;
  border: 1px solid #ccc;
  background: #fff;
}
.item {
  display: flex;
}
.title {
  width: 100px;
}
.inputBox {
  flex: 1;
}
.inputEle {
  width: 70%;
}
.btnBox {
  ::v-deep .el-button--primary {
    background: #ffa800;
    border-color: #ffa800;
  }
}
</style>
