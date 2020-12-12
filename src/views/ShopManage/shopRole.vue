<template>
  <div class="shop-role-page">
    <section>
      <input
        type="file"
        value="图片上传"
        ref="file"
        @change="uploadFile"
      />
    </section>
    <section>
      <h3>普通post请求带loading</h3>
      <el-button
        type="primary"
        @click="testPost"
      >普通post</el-button>
    </section>
    <section>
      <h3>普通get请求（不带loading）</h3>
      <el-button
        type="success"
        @click="testGet"
      >普通get</el-button>
    </section>
    <section>
      <h3>获取远程图片</h3>
      <el-button
        type="success"
        @click="getpic"
      >获取图片</el-button>
    </section>
    <div style="margin-top: 30px">
      <h3>上传sheets表</h3>
      <el-button
        type="error"
        @click="open"
      >上传sheets表</el-button>
      <Upload
        :show.sync="isShow"
        @start-upload="upload"
        @cancel="cancel"
      ></Upload>
    </div>
    <div>
      <p><input
          type="file"
          ref="file"
          class="filetestEle"
          @change="changeHander"
        ></p>
      <el-button
        type="error"
        @click="uptest"
      >上传测试</el-button>
    </div>
    <div>
      <el-button
        type="error"
        @click="put"
      >put请求测试</el-button>
    </div>
  </div>
</template>

<script>
import Upload from "@c/Upload";
export default {
  name: "shopRole",
  components: { Upload },
  props: {},
  data() {
    return {
      isShow: false,
    };
  },
  computed: {},
  created() {
    console.log("vue.prototype:");
    Promise.all([
      this.$request("/api/getPic", 'GET', {}, true),
      this.$request("/api/userInfo", 'GET', true),
    ]).then(res => {
      console.log("res:", res)
    })

  },
  mounted() { },
  methods: {
    open() {
      this.isShow = true;
    },
    cancel(i) {
      console.log("cancel:i", i);
      this.isShow = i;
    },
    upload(i) {
      console.log("开始upload:i", i);
      this.isShow = i;
    },
    async uploadFile(e) {
      console.log("e:", e);
      let file = e.target.files[0];
      let fm = new FormData();
      fm.append("file", file);
      let res = await this.$request("/api/upload", "PUT", fm, true);
      if (res.url) {
        this.$sLoading.open({ type: "success", text: "上传成功" });
      }
      console.log("res:", res);
    },
    async testPost() {
      console.log("testPost");
      let res2 = await this.$request(
        "/api/getList",
        "post",
        { name: "cc", password: 123 },
        true
      );
      console.log("res2:", res2);
    },
    async testGet() {
      console.log("testGet");
      let res3 = await this.$request(
        "/api/userInfo",
        "get",
        { gender: "formal", age: 10 },
        false
      );
      console.log("res3:", res3);
    },
    async getpic() {
      let res3 = await this.$request("/api/getPic", "get");
      console.log("res3:", res3);
    },
    uptest(e) {
      let fileTestEle = this.$refs.file;
      console.log("fileTestEle:", fileTestEle)
      if (fileTestEle) {
        fileTestEle.click(e)
      }
    },
    changeHander(e) {
      console.log("e----:", e)
      let file = e.target.files[0];
      let fm = new FormData();
      fm.append("file", file);
      // this.$request("/api/upload", "post", fm, true).then(res=>{
      //   console.log("res；",res)
      // }).catch(err=>{
      //   console.log("err；",err)
      // })
    },
    async put() {
      let res = await this.$request("/api/getdetailData", 'PUT')
      console.log("res:", res)
    }
  },
};
</script>
<style scoped>
.shop-role-page {
  padding: 20px;
  box-sizing: border-box;
  display: flex;
}
section {
  padding: 20px 0;
  border-bottom: 1px dashed #f90;
  flex: 1;
}
h3 {
  padding: 10px 0;
}
.filetestEle {
  display: none;
}
</style>
