<template>
	
   <div class="slideWrap">      
      <mt-swipe :auto="0">
        <mt-swipe-item>
            <Menubar></Menubar> 
        </mt-swipe-item>
        <mt-swipe-item>
        	<Menubar2></Menubar2>  
        </mt-swipe-item>
      </mt-swipe>   
   </div>
</template>
<style>	
   .mint-swipe{ height:220px }
   .slideWrap{ height: 220px;}
   .slideWrap .mint-swipe-item{ background:#fff; height:220px }
</style>
<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import Menubar from "./menubar";
	import Menubar2 from "./menubar2";
    export default{
     name:"menuBox",
     components:{Menubar,Menubar2}
    }
</script>