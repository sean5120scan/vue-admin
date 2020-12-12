<template>
  <div class="dialog-wrap">
    <el-dialog
      :title="title"
      :visible.sync="loginVisible"
      width="35%"
      :close-on-click-modal="false"
    >
      <div class="relogin-box">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="60px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="账号"
            prop="username"
          >
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
          >
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          size="medium"
          @click="loginConfirm"
        >登录</el-button>
        <el-button
          @click="loginCancel"
          size="medium"
        >取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import router from "@r/index.js";
export default {
  name: "relogin",
  components: {},
  props: {},
  data() {
    return {
      loginVisible: false,
      code: "",
      ruleForm: {
        username: "",
        password: "",
      },
      title: "重新登录账号",
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码最少5个字符", trigger: "blur" },
          { min: 5, max: 15, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  computed: {},
  created() { },
  mounted() {
    // document.addEventListener("keydown", (evnet) => {
    //   let code = event.keyCode;
    //   if (code == 13) {
    //     this.loginConfirm();
    //   }
    // });
  },
  methods: {
    async loginConfirm() {


      let data = {
        username: this.ruleForm.username,
        password: this.ruleForm.password,
      };
      let res = await this.$request("/api/login", "post", data);
      console.log("res:", res);

      if (res.code == 0) {
        this.$refs["ruleForm"].resetFields();
        this.loginVisible = false;

      } else {
        this.$sLoading.open({ text: res.message, type: "error" });
        console.log("this.$router", this.$router)
        return
      }
    },
    loginCancel() {
      this.loginVisible = false;
      this.$refs["ruleForm"].resetFields();
    },
  },
};
</script>

<style scoped lang="scss">
.ipt-item {
  display: flex;
  margin-bottom: 16px;
}
.dialog-wrap {
  ::v-deep .el-dialog__title {
    font-size: 14px;
  }
}
</style>