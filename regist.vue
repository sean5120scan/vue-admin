<template>
<div>	
  <mt-header title="请注册" class="head" fixed></mt-header>
  <div class="form">
  	<p><mt-field label="用户名" placeholder="请填写用户名" v-model="username"></mt-field></p>
  <!--   <p>{{tip_username}}</p> -->
  	<p><mt-field label="密码" placeholder="请填写密码" type="password" v-model="password"></mt-field></p>
  <!--   <p>{{tip_password}}</p> -->
  	<p><mt-field label="密码重复" placeholder="请再次填写密码" type="password" v-model="rpassword"></mt-field></p>
  <!--   <p>{{tip_rpassword}}</p> -->
  	<p><mt-button type="primary" style="background:#f90" size="large" @click="submit">提交</mt-button></p><p></p>
    <p>我有账号 <router-link :to="{name:'login'}">立即登录</router-link></p>
</div>
</div>

</template>
<script> 
import {Field} from "mint-ui";
import { Button } from 'mint-ui'
import { Toast } from 'mint-ui';
import {Header} from "mint-ui";

export default { 
 name:"regist",
 data(){
  return {      
        username:"", 
        password:"",
        rpassword:""        
  }
 },

 methods:{

 	submit(){
 	       this.$store.dispatch("submit",{
        
               $http:this.$http,
                data:{          
                  username:this.username, 
                  password:this.password, 
                  rpassword:this.rpassword, 
                }
      }).then((response)=>{
          
          if(!response.data.code){
                Toast({
                         message: '注册成功',
                         position: 'middle',
                         duration: 1000
                });
               
               this.$store.commit("updateUserInfo",response.data);

               setTimeout(()=>{
                  this.$router.push("/myself")
               })

          }else{            
                Toast({
                         message: response.data.message,
                         position: 'middle',
                         duration: 1000
                });
          }         
      })
  }   
       
 }   
  
}


</script>
<style scoped>
.head{ height: 100px;  background:#f90}
p{ margin-bottom: 20px }
div:last-child{text-align:center}
.form{margin-top:120px;}
</style>