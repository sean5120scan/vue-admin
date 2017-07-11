<template>
 <div> 
       <div class="autoslide" >
         <mt-swipe :auto="2000" :continuous="true"  :prevent="true">
            <mt-swipe-item  >
                 <img src="../asset/img/01.jpeg" alt="">         
            </mt-swipe-item>
            <mt-swipe-item >
                <img src="../asset/img/02.jpeg" alt=""> 
            </mt-swipe-item>
             <mt-swipe-item >
               <img src="../asset/img/03.jpeg" alt=""> 
           </mt-swipe-item> 
         </mt-swipe>
       </div>
       <div>
          <MenuBox></MenuBox> 
       </div>  
  <div class="tit">     
      <mt-header title="---优惠专区---"></mt-header>
  </div>   
  <List></List>
 </div> 
</template>
<script>
import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import Icon from "vue-awesome/components/Icon"
import { Search } from 'mint-ui'
import MenuBox from '@/components/MenuBox'
import List from '@/components/list'

export default{
  name:"index",
  data(){
  	return {
  		selected:"/"
  	}
  },
  components:{MenuBox,List}
}

</script>
<style scoped>
      body{ background: #ccc } 
     .mint-header{font-size:1.2em; background:#fff;color:#000; }
     .tabItem{height:50px;}
     .mint-swipe{ height: 220px;overflow:hidden;}
      .mint-header{ background: #ddd;padding:5px 0;}
     .autoslide{width:100%;height:220px;overflow: hidden;}
     .mint-swipe-item{ margin:0;padding:0;width: 100%; height:100%; }
     .mint-swipe-item img{ width:100%;height: 220px;}
</style> 