<template>
<div>

  <router-view></router-view>

  	<mt-tabbar v-model="selected" fixed>
  	  <mt-tab-item id="/" class="tabItem">
  	   <i class="iconfont">&#xe606;</i>
  	  </mt-tab-item>
  	  <mt-tab-item id="/recommend" class="tabItem">	   
  	   <i class="iconfont">&#xe620;</i> 
  	  </mt-tab-item>
  	  <mt-tab-item id="/myself" class="tabItem">     
  	     <i class="iconfont">&#xe600;</i> 
  	  </mt-tab-item>
     </mt-tabbar> 
</div>
</template>
<script>

/*import index from "./components/index.vue"*/
import {Header} from "mint-ui";
/*import {Field} from 'mint-ui';*/


export default{
  name:"App",
  data(){
  	 return {     
        selected:"/"
  	 }
  },
  watch:{
  	selected(){
        this.$router.push(this.selected)
  	}
  }
}

</script>

<style>

body{ margin:0}
.head{ height: 20% }
.tabItem{height:50px;}
 @font-face {
  font-family: 'iconfont';
  src: url('../static/fonts/iconfont.eot');
  src: url('../static/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../static/fonts/iconfont.woff') format('woff'),
  url('../static/fonts/iconfont.ttf') format('truetype'),
  url('../static/fonts/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:30px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}  
</style>