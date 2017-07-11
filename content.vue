<template>

<mt-header title="欢迎进入首页" class="head">
	  <!-- <router-link to="/" slot="left">  -->
	     <mt-button icon="back"></mt-button>
	  <!--  </router-link>  -->
	   <mt-button icon="more" slot="right"></mt-button>
	 </mt-header>

	 <div class="footer">
	 	<router-link to="/index">首页</router-link>
	     <router-link to="/myself">我的</router-link>
	 </div>	

</template>



<script>

export default{
  name:"index",
  component:{Header}

}

</script>
<style></style>