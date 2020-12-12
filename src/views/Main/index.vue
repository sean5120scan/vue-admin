<template>
  <div>
    <el-container class="container">
      <el-header class="header">
        <div class="logo-wrap center">
          <el-image
            style="width:200px; height:40px"
            :src="logo"
            fit="cover"
          ></el-image>
        </div>
        <div class="header-title fs18 pt5 boxSize vCenter">
          <span class="inBlock mr10">BIM中台</span>
          <span @click="collapse=!collapse"><i class="el-icon-s-fold"></i></span>
        </div>
        <div class="user hRight">
          <div class="down-menu ">
            <div class="inBlock center mr4">
              <el-avatar :size="40">
              </el-avatar>
            </div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <span class="inBlock pointer">editor</span>
                <span class="inBlock "><i class="el-icon-arrow-down el-icon--right"></i></span>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改资料</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item @click.native="loginout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container class="fx">
        <section class="side-bar">
          <el-menu
            :default-active="activeMenu"
            @select="clickMenu"
            :collapse="collapse"
            class="el-menu-vertical"
            background-color="#4d4d4d"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <template v-for="(item,index) in menus">
              <template v-if="item.meta&&item.children&&item.children.length>1">
                <el-submenu
                  :key="index"
                  :index="item.name"
                >
                  <template slot="title">
                    <div>
                      <i :class="
                        `${item.meta.icon}`"></i>
                      <span slot="title">{{item.meta.title}}</span>
                    </div>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item
                      v-for="(cItem,k) in item.children"
                      :index="cItem.name"
                      :key="k"
                    >
                      <span slot="title">{{cItem.meta.title}}</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </template>
              <template v-else-if="item.meta&&item.children&&item.children.length==1">
                <el-menu-item
                  :key="index"
                  :index="item.name"
                >
                  <i class="el-icon-location"></i>
                  <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>
              </template>
              <template v-else>
              </template>
            </template>
          </el-menu>
        </section>
        <el-container>
          <main class="main boxSize">
            <div class="main-header w vCenter boxSize">
              <el-breadcrumb>
                <el-breadcrumb-item
                  v-for="(item, index) in breadList"
                  :key="index"
                >
                  <span v-if="index == breadList.length - 1">{{ item.meta.title }}</span>
                  <a
                    href
                    v-else
                    @click.prevent="$router.push({name:item.name})"
                  >{{
                      item.meta.title
                    }}</a>
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="main-conent">
              <keep-alive>
                  <router-view :key="$route.fullPath"></router-view>
              </keep-alive>
            </div>
          </main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// import SideMenu from "@c/SideMenu"
import { db, Cookie, } from "@u/utils"
import { mapState } from "vuex"
export default {
  name: "manage",
  // components: { SideMenu },
  props: {},
  data() {
    return {
      collapse: false,
      breadList: [],
      userAvatar: "",
      activeMenu: "init",
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      logo:require("@a/logo.png")
    };
  },
  computed: {
    ...mapState({ menus: state => state.app.routes })
  },
  created() {
    this.getBreadList();
    let activeMenu = db.ls.get("activeMenu");
    if (activeMenu) {
      this.activeMenu = activeMenu;
    }
  },
  mounted() { },
  watch: {
    $route() {
      console.log("当前matched", this.$route.matched)
      this.getBreadList()
      let activeMenu = db.ls.get("activeMenu");
      if (activeMenu) {
        this.activeMenu = activeMenu;
      }
    }
  },
  methods: {
    clickMenu(index, indexPath) {
      console.log("index:", index)
      console.log("indexPath:", indexPath)
      if (index != this.activeMenu) {
        this.$router.push({
          name: index
        });
        this.activeMenu = index;
        db.ls.set("activeMenu", index);
      }
    },
    getBreadList() {
      console.log("当前matched", this.$route.matched)
      let matchedList = this.$route.matched.filter(item => item.meta && item.meta.title)
      this.breadList = matchedList.filter(item => item.meta && item.meta.title);
      console.log("this.breadList:", this.breadList)
    },
    loginout() {

      db.ls.clear()
      Cookie.clear()
      this.$router.replace("/login")
      this.$store.commit("user/setRoles", null)


    }
  },
};
</script>
<style scoped lang="scss">
.container {
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  .header {
    height: 60px;
    background: #000;
    display: flex;
    color: #fff;
    .logo-wrap {
      width: 200px;
      height: 100%;
    }
    .header-title {
      width: 400px;
      display: flex;
    }
    .user {
      flex: 1;
      .down-menu {
        width: 300px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #fff !important;
        span.inBlock{ height: 60px;line-height: 60px;}
      }
    }
  }
  .main {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: calc(100vh - 60px);
    overflow-y: scroll;
    .main-header{
       height: 60px;
       padding: 10px;
    }
    .main-conent{
      height: calc(100vh - 122px);
      overflow-y: auto;
    }
  }
.translate-leave-active,
.translate-enter-active {
  transition: all 0.3s;
}

.translate-enter {
  opacity: 0;
  transform: translateX(-20px);
}

.translate-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

}
</style>
<style >
.el-menu-vertical{ height: 100%;overflow: auto;}
.el-menu-vertical:not(.el-menu--collapse) {
width: 200px;
}
</style>
