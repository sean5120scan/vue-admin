<template>
  <div>
    <el-dialog
      :visible.sync="show"
      width="64%"
      class="dialog"
      :before-close="handleClose"
    >
      <span slot="title" class="fs14">添加分享人员</span>

      <div class="user-pick-container p24 boxSize sBeteen">
        <div class="user-picker-candidates">
          <el-input
            placeholder="请输入内容"
            v-model="username"
            class="user-input"
          >
            <el-button button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <div class="user-picker-content">
            <el-tree
              :data="dataSort"
              show-checkbox
              accordion
              :props="defaultProps"
              @node-click="handleNodeClick"
            ></el-tree>
          </div>
        </div>
        <div class="user-picker-seats">
          <div class="user-picker-seats-header sBeteen">
            <div class="seats-header-left">已选:3</div>
            <div class="seats-header-right hRight">
              <span class="del pointer"
                >清空 <i class="el-icon-delete"></i
              ></span>
            </div>
          </div>
          <div class="user-picker-seats-content">
            <section class="item sBeteen boxSize">
              <div class="item-cont">
                <i class="el-icon-s-custom inBlock pr10"></i>
                <span>周晓华</span>
              </div>
              <div class="del-icon hRight center">
                <i class="el-icon-circle-close"></i>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "share",
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultProps: [],
      username: "",
      dataSort: [
        {
          id: 1,
          label: "预算",
          children: [
            {
              id: 4,
              label: "朱亚琼",
              children: [
                {
                  id: 9,
                  label: "李家俊",
                },
                {
                  id: 10,
                  label: "韩薇",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "赋能商家",
          children: [
            {
              id: 5,
              label: "周益",
            },
            {
              id: 6,
              label: "张长桥",
            },
          ],
        },
        {
          id: 3,
          label: "其他",
          children: [
            {
              id: 7,
              label: "周奇",
            },
            {
              id: 8,
              label: "刘小勇",
            },
          ],
        },
      ],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleClose() {
      this.Emit();
    },
    cancel() {
      this.Emit();
    },
    Emit() {
      this.$emit("update:show", false);
    },
    handleNodeClick() {},
  },
};
</script>

<style scoped>
.dialog ::v-deep .el-dialog__header {
  background: #f7f7f7;
}
.dialog ::v-deep .el-dialog__body {
  padding: 0;
}
.dialog ::v-deep .el-tree-node__content {
  padding: 10px 0;
}
.dialog ::v-deep .el-tree-node__label {
  font-size: 14px;
}
.user-picker-candidates,
.user-picker-seats {
  width: 360px;
}
.user-picker-seats {
  border: 1px solid #e6e6e6;
}
.user-input {
  width: 232px;
}
.user-picker-content {
  height: 396px;
  width: 100%;
  margin-top: 8px;
  border: 1px solid #e6e6e6;
  overflow: auto;
}
.user-picker-seats-header {
  height: 36px;
  line-height: 36px;
  padding: 0 24px;
  background: #f7f7f7;
}
.seats-header-left,
.seats-header-right {
  width: 100px;
}
.user-picker-seats-content {
  height: 224px;
  overflow: auto;
}
.del:hover {
  color: #ffa800;
}
.item {
  height: 48px;
  line-height: 48px;
  padding: 0 16px;
}
.item:hover {
  background: #f7f7f7;
}
.del-cont,
.del-icon {
  width: 120px;
}
</style>
