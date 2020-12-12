<template>
  <div>
    <section class="layout-top center">
      <slot name="top">
        <el-button>+ 添加分组</el-button>
      </slot>
    </section>
    <section class="layout-main w">
      <el-tree
        :data="treeArr"
        node-key="id"
        :props="defaultProps"
        @node-click="handleClick"
      >
        <div
          class="custom-tree-node"
          slot-scope="{ node, data }"
        >
          <div class="opertree-node-label elliplis">
            <span class="inBlock mr8">
              <i class="iconfont icon-file fs20 y"></i>
            </span>
            <span>{{ data.title }}</span>
          </div>
          <div
            class="opertree-node-icon"
            v-if="data.id==curId"
          >
            <el-dropdown
              size="small"
              placement="bottom-end"
            >
              <i class="iconfont icon-more1 fs10 f999"></i>
              <el-dropdown-menu slot="dropdown">
                <template v-if="curParentArr.findIndex(v=>v.id === curClickData.id) == 0 ">
                  <el-dropdown-item
                    v-for="(item,index) in exclueTopMenu"
                    :key="index"
                  >
                    {{item.name}}
                  </el-dropdown-item>
                </template>
                <template v-else-if="curParentArr.findIndex(v=>v.id == curClickData.id) == curParentArr.length-1">
                  <el-dropdown-item
                    v-for="(item,index) in exclueBottomMenu"
                    :key="index"
                  >
                    {{item.name}}
                  </el-dropdown-item>
                </template>
                <template v-else>
                  <el-dropdown-item
                    v-for="(item,index) in menu"
                    :key="index"
                  >
                    {{item.name}}
                  </el-dropdown-item>
                </template>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-tree>
    </section>
  </div>
</template>
<script>

import treeArr from "@com/js/test.js"

export default {
  name: "createGroup",
  components: {},
  props: {},
  data() {
    return {
      treeArr: [],
      navList: [],
      exclueTopMenu: [
        { name: "添加子分组" },
        { name: "重命名" },
        { name: "下移" },
        { name: "删除" },
      ],
      exclueBottomMenu: [
        { name: "添加子分组" },
        { name: "重命名" },
        { name: "上移" },
        { name: "删除" },
      ],
      menu: [
        { name: "添加子分组" },
        { name: "重命名" },
        { name: "上移" },
        { name: "下移" },
        { name: "删除" },
      ],
      defaultProps: {
        children: 'groupList',
        label: 'title'
      },
      curClickData: {},
      curParentArr: [],
      curId: ""
    }
  },
  computed: {},
  created() {
    console.log("treeArr:", treeArr)
    setTimeout(() => {

      this.treeArr = treeArr
    }, 1000)
  },
  mounted() { },
  methods: {
    append(data) {
      console.log("data:", data)
      // const newChild = { id: id++, label: 'testtest', children: [] };
      // if (!data.children) {
      //   this.$set(data, 'children', []);
      // }
      // data.children.push(newChild);
    },
    handleClick(a, b, c) {

      console.log("节点所对应的对象", a)
      console.log("节点对应的 Node", b)
      console.log("节点组件本身", c)
      this.curClickData = a;
      this.curId = a.id

      //一级
      if (!b.parent.data.groupList) {
        this.curParentArr = b.parent.data || []
      } else {
        this.curParentArr = b.parent.data.groupList || []
      }

      console.log("父级数组：", this.curParentArr)

    },
    remove(node, data) {
      // const parent = node.parent;
      // const children = parent.data.children || parent.data;
      // const index = children.findIndex(d => d.id === data.id);
      // children.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.layout-top {
  width: 240px;
  padding: 20px 0;
  border-bottom: 1px solid #e6e6e6;
}
.layout-main {
  ::v-deep .el-tree-node__content {
    height: 40px;
  }
  height: 100%;
}
.y {
  color: #f1a303b8;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  height: 40px;
}
.mr8 {
  margin-right: 8px;
}
.opertree-node-label {
  width: 140px;
}
.opertree-node-icon {
  padding-right: 16px;
}
</style>
