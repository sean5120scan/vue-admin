<template>
<div>
	<div class="head">
		<mt-search v-model="value"></mt-search>
	</div>
  
   <ul>
	  <li v-for="item in imgData">
	    <img v-lazy="item" width="100%" class="img">
	  </li>
  </ul> 
</div>	
</template>
<script>
import Vue from "vue"
import { Lazyload } from 'mint-ui';
import { Search } from 'mint-ui';
import { Header } from 'mint-ui';

export default{
  name:"recommend",
  data(){
   return {
    imgData:[
               "../static/img/01.jpeg",
               "../static/img/02.jpeg",
               "../static/img/03.jpeg",
               "../static/img/04.jpeg",
               "../static/img/05.jpeg",
               "../static/img/06.jpeg",
            ]
     }

  }
}

</script>
<style scoped>
image[lazy=loading] {
 width: 40px;
 height:80px;
 margin: auto;
}
.head{width:100%;height:60px;position: fixed;top:0 }
img{width: 100%;}
ul{width:100%;padding: 0; }
li{list-style: none;width: 100%}
</style>