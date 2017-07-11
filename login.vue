<template>
	
	<div class=""> 
     <div>
           <mt-header fixed title="欢迎登陆" class="commonColor headTop">     
             <i class="iconfont">&#xe640;</i>
           </mt-header> 

      </div> 	

     <div class="logInfo">
        <mt-field label="用户名" placeholder="请输入用户名"  type="username" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>   
     </div>   
      <p style="text-align:center;margin-top:50px">
          <mt-button  size="large" @click="login" class="commonColor ">登陆</mt-button>      
      </p>
      <p>
          没有账号？<router-link to="/regist" class="aaa" >立即注册</router-link>
      </p>
	</div>


</template>
<script>
 import { Header } from 'mint-ui';
 import { Field } from 'mint-ui';
import { Button } from 'mint-ui';
import { Toast } from 'mint-ui';

export default{

  name:"login",
  data(){
    return {
        username:"",
        password:""
    }   
  },
  methods:{
     login(){
        this.$store.dispatch("login",
             {
                $http:this.$http, 
                data:{ 
                        username:this.username,
                        password:this.password

                     }})
               .then((response)=>{
                  if(response.data.code){
                    let instance=Toast(response.data.message);
                    setTimeout(()=>{
                       instance.close()
                    },500)
               }else{
                    
                     Toast("登录成功");
                     this.$store.commit("updataUserInfo",response.data) 
                     setTimeout(()=>{
                        this.$router.push("/myself")
                     },500)
               }
         })         
     }
  }

}


</script>
<style scoped>
  
 @font-face {
  font-family: 'iconfont';
  src: url('../../static/fonts/iconfont.eot');
  src: url('../../static/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../static/fonts/iconfont.woff') format('woff'),
  url('../../static/fonts/iconfont.ttf') format('truetype'),
  url('../../static/fonts/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:30px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
} 


  .logInfo{margin-top:160px;}
  .tabItem{height:50px;}
  p{text-align: center}
  .headTop{ height: 150px;font-size:2em;margin: 0}
  .commonColor{ background:#f90}
   .aaa{ color:#000;text-decoration:none; }
</style>