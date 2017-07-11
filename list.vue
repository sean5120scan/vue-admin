<template>
<div>
	<div class="list clear">
	  <div class="icon"><img src="../asset/logo.png" alt=""></div>
	  <div class="cont">
	  	 	  <h2>商户信息</h2>
	  	 	   <p>本周热门推荐</p>
	  </div>
	</div>
	<div class="list clear">
	  <div class="icon"><img src="../asset/logo.png" alt=""></div>
	  <div class="cont">
	  	 	  <h2>商户信息</h2>
	  	 	   <p>本周热门推荐</p>
	  </div>
	</div>
	<div class="list clear">
	  <div class="icon"><img src="../asset/logo.png" alt=""></div>
	  <div class="cont">
	  	 	  <h2>商户信息</h2>
	  	 	   <p>本周热门推荐</p>
	  </div>
	</div>
	<div class="list clear">
	  <div class="icon"><img src="../asset/logo.png" alt=""></div>
	  <div class="cont">
	  	 	  <h2>商户信息</h2>
	  	 	   <p>本周热门推荐</p>
	  </div>
	</div>	
</div>

</template>
<script>
	export default{
       name:"list"
	}
</script>
<style scoped>
.icon{width:30%;float:left}
.icon img{width:100%}
.cont{width:60%;float:right }
.list{padding:5px 0;border:1px solid #ccc;}
.clear:after{content:""; display: block;overflow:hidden;clear:both}
</style>