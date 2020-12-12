<template>
  <div>
  <div class="menu">
    <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <div class="fx">
                <div class='tit-lt'>
                    <i class="el-icon-caret-right"></i>
                    <span>导航一</span>
                </div>
                <div class='tit-rt'>
                  <i class="el-icon-circle-plus"></i>
                  <span @click="toggleTitle">
                    <i class="el-icon-remove-outline" v-if="titleFlag"></i>
                    <i class="el-icon-remove" v-else></i>
                  </span>
                </div>
              </div>
             
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "planDetail",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      titleFlag:false
    };
  },
  computed: {},
  created() {
    this.id = this.$route.params.id
  },
  mounted() { },
  methods: {
    toggleTitle(){
        this.titleFlag=!this.titleFlag
    }
  },
};
</script>

<style scoped style="scss">
.menu{
  width: 200px;
  ::v-deep .el-icon-arrow-down:before{display: none !important;}
}
.tit-lt,.tit-rt{flex:1}
.tit-rt{display: flex;justify-content: flex-end;}

</style>
