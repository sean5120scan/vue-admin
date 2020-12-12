<template>
  <div class="menu">
    <el-menu
      :unique-opened="true"
      :collapse="collapse"
      class="el-menu-vertical"
    >
      <template v-for="(item,index) in list">
        <template v-if="item.children&&item.children.length>0">
          <el-submenu
            :index="`menu${item.id}`"
            :key="index"
          >
            <template slot="title">
              <div @click="handlerItem(item)">
                <i class="el-icon-location"></i>
                <span>{{item.meta.title}}</span>
              </div>
            </template>
            <el-menu-item-group>
              <SideMenu :list="item.children"></SideMenu>
            </el-menu-item-group>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item
            :key="index"
            :index="`menu${item.id}`"
            @click="handlerItem(item)"
          >
            <i class="el-icon-location"></i>
            <span>{{item.meta.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "SideMenu",
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    };
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {
    handlerItem(item) {
      console.log("item：", item)
      item.id == 31
        ? this.$sysWarn({ text: "没有权限，请联系管理员" })
        : this.$router.push({ name: item.routeName });
      if (item.id == 41) {
        this.$relogin()
      }
    }
  },
};
</script>

<style scoped lang="scss">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-item {
  padding-left: 30px;
}
</style>
