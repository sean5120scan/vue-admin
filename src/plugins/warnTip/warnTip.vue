<template>
  <div>
    <el-dialog
      title="系统提示"
      :visible.sync="show"
      width="33%"
      :modal="isShowModal"
      :close-on-click-modal="asyncVisble"
      class="warn-dailog-box"
    >
      <div>
        <el-row class="content-box">
          <el-col :span="3" class="center"
            ><i class="iconfont icon-error err"></i
          ></el-col>
          <el-col :span="21" class="content">{{ text }}</el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="close">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "warning",
  components: {},
  props: {},
  data() {
    return {
      show: false,
      text: "",
      asyncVisble: false,
      isShowModal: true,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>

<style scoped lang="scss">
.warn-dailog-box {
  ::v-deep .el-dialog__body {
    padding: 15px 20px;
  }
}
.err {
  color: #f00;
  font-size: 22px;
}
.content {
  padding-top: 5px;
  box-sizing: border-box;
}
</style>
