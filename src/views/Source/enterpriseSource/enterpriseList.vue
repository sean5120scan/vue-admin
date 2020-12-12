<template>
  <div>
    <section class="header w sBeteen">
      <div class="head-left">
        <el-button type="primary">
          <span><i class='iconfont icon-upload fs20'></i></span>
          <span>上传素材</span>
        </el-button>
        <el-button type="primary">
          <span><i class='iconfont icon-upload fs20'></i></span>
          <span>批量上传</span>
        </el-button>
        <el-button
          type="primary"
          v-permission="['admin']"
          @click="viewDetail"
        >详情</el-button>
        <span>
         roles: {{roles}}
        </span>
      </div>
      <div class="head-right hRight">
        <el-input
          class='input'
          placeholder="名称/品牌/型号/编码/上传人"
          autocomplete="off"
        ></el-input>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "enterpriseSource",
  components: {},
  props: {},
  data() {
    return {

    };
  },
  computed: {
    ...mapState({roles:state=>state.user.roles})
  },
  created() { },
  mounted() { },
  methods: {
    viewDetail() {
      console.log("mmmmm!!!!")
      this.$router.push({ name: "enterpriseDetail" })
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 68px;
  padding: 0 16px;
  .head-left,
  .head-right {
    display: flex;
    flex: 1;
    align-self: center;
  }
  .head-right {
    .input {
      width: 224px;
    }
  }
}
</style>
