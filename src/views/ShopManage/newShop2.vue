<template>
  <div>
    <span>newShop</span>
    <el-button
      type="primary"
      @click="test('error')"
    >error</el-button>
    <el-button
      type="success"
      @click="test('succ')"
    >success</el-button>
    <el-button
      type="success"
      @click="test('warn')"
    >warning</el-button>
    <el-button
      type="success"
      @click="test('reset')"
    >重写loaidng</el-button>
    <el-button
      type="success"
      @click="colse"
    >关闭</el-button>
    <el-button
      type="success"
      @click="success"
    >成功</el-button>
    <el-button
      type="primary"
      @click="warnTip"
    >警告插件</el-button>
    <hr />
    <el-button
      type="primary"
      @click="openLogin"
    >打开登录框</el-button>
    <el-button
      type="primary"
      @click="viewDatail"
    >详情</el-button>
    <!-- <NavBar></NavBar> -->
  </div>
</template>
<script>
export default {
  name: "newShop",
  components: {},
  props: {},
  data() {
    return {
      instance: null,
      arr: [{ name: "cc", age: 20, ff: "ss ", kek: "weqweqwe " }],
      res: false,
    };
  },
  computed: {},
  created() { },
  mounted() {
    this.instance = this.$sLoading;
  },
  methods: {
    test(type) {
      console.log("type:", type);
      if (type == "succ") {
        // this.$message.success("修改成功");
      } else if (type == "error") {
        // this.$message.error("修改成功");
      } else if (type == "warn") {
        this.$sLoading.open({ type: "error", color: "#f00", text: "错误" });
        // this.$message({ type: "warning", message: "警告",duration:2000 });
      } else {
        this.$sLoading.open({ color: "#f90" });
      }
    },
    colse() {
      this.instance.close();
    },
    success() {
      this.$message({ type: "success", message: "评论成功" });
    },
    openLogin() {
      console.log("openLogin");
      this.$relogin();
    },
    warnTip() {
      console.log("this.$warn:", this);
      this.$sysWarn({
        text: "没有权限，请联系管理员",
        mask: true,
        // isClickMaskVisble: true,
      });
    },
    viewDatail() {
      console.log("aaa")
      this.$route.push({ name: "shopDetail" })
    }
  },
};
</script>

<style scoped></style>
