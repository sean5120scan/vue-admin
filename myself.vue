<template>
  
 <div class="myself">
  
      <header id="header" class="">
       <div class="avata">  
         <p><img src="../asset/icons/login.png" alt=""></p>
         <label for="pic"></label>    
         <p><input type="file"  ref="input" accept="image/*" style="display:none" id="pic"></p>    
         <p>{{userInfo.username}}</p>
         <p>{{userInfo._id}}</p>
       </div>  	 
     </header>
    <div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"  ></mt-actionsheet> 
        <mt-cell title="完善个人信息" to="/myinfo"  is-link value="个人信息"></mt-cell>
      	<mt-cell title="联系客服"  is-link value="联系客服" ></mt-cell>
      	<mt-cell title="设置"  is-link value="设置"></mt-cell>
    </div>

     <div>
     	 <mt-button size="large" type="danger" @click="logout">退出</mt-button>
     </div>

 </div>
  
</template>
<script>

import { Cell } from 'mint-ui';
import { Button } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
import { Toast } from 'mint-ui';
/*import Myinfo from './myinfo';*/

export default{  
  name:"myself",
  data:function(){
      return {
          imgData:{
            imgUrl:""
          },
          actions:[
            {name:"1231",
            method:function(){



            }},
            {name:"asdas",
            method:function(){
            }}
          ],
          sheetVisible:false

      }
  },
  created(){        //页面刷新时向actions提交数据发送给后台
      let cookieVal=JSON.parse(this.$cookie.get("userinfo"));
      console.log(1111)
      if(!cookieVal){          
          this.$router.push("/login")
      }else{
          this.$store.commit("updataUserInfo",cookieVal)
          this.$router.push("/myself")                
      }
  },
  computed:{      //获取用户数据
     userInfo(){
     	return this.$store.getters.getUserInfo
     }
  },
  methods:{         //退出
  	logout(){
         this.$store.dispatch("logout",{$http:this.$http}).then((response)=>{ 
         console.log(response)                   
               Toast({
                        message: '成功退出',
                        position: 'middle',
                        duration: 200
                      });
               this.$router.push("/"); 
         })
/*     upavatar (e){
         
        let targetFile=

         this.$store.dispatch("upavatar",{$http:this.$http,})
 

        }*/
  	}


  }

}
</script>
<style scoped>
  .avata{ height:200px;background:#f90;}
  .avata p{text-align: center;margin-top: 10px;margin: 0}
  .avata img{width:80px; height:80px;border-radius:50%;margin-top:10px  } 

</style>