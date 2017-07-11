<template>
	<div>
		<mt-header fixed title="欢迎登陆"  class="comstyle" >     
		  <i class="iconfont">&#xe640;</i>
		</mt-header> 
       <div class="info">
       	<mt-field label="收件人" placeholder="请输入收件人"  type="username" v-model="username"></mt-field>
       	<mt-field label="地址" placeholder="请输入地址"  v-model="password"></mt-field>   
       	<mt-button  size="large" @click="success"  class="comstyle">填写成功</mt-button> 

       </div>
	</div>
</template>
<script>
import { Header } from 'mint-ui';
export default{
   name:"address",
   data:function(){
    


   }
}	

</script>
<style scoped>
.info{margin-top: 50px;}
.comstyle{ background:#f90;color:#fff;}
</style>