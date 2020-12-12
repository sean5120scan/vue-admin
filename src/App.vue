<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 14px;
}
// .el-message{ background: #fff;min-width:220px}
//  .input-with-select .el-input-group__prepend {
//     background-color: #fff;
//   }
// .el-input__inner{height: 36px;line-height: 36px;}
// .el-input-group__append, .el-input-group__prepend{border-radius: 0;}
// .el-message-box{border-radius: 0 !important;}
// .el-icon-warning{color:#f00 !important}
// .popper__arrow {display:none !important;top:-20px}
// .el-popper{margin-top:0}
</style>
