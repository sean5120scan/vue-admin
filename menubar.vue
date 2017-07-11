<template>
<div class="swipWrap">
  <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
  </ul>
</div>
</template>
<style scoped language>
.swipWrap{width:100%; height:220px; }
ul{ width: 100%; height:100%;padding: 0}
li{height:80px;width:25%;float: left;list-style: none;margin-bottom:10px; }
li:nth-of-type(1){ background:url('../asset/nav2.png') no-repeat 5px 0px}
li:nth-of-type(2){ background:url('../asset/nav2.png') no-repeat -100px 0px}
li:nth-of-type(3){ background:url('../asset/nav2.png') no-repeat -210px 0px}
li:nth-of-type(4){ background:url('../asset/nav2.png') no-repeat -300px 0px}

li:nth-of-type(5){ background:url('../asset/nav2.png') no-repeat  5px -90px}
li:nth-of-type(6){ background:url('../asset/nav2.png') no-repeat  -100px -90px}
li:nth-of-type(7){ background:url('../asset/nav2.png') no-repeat  -210px -90px}
li:nth-of-type(8){ background:url('../asset/nav2.png') no-repeat  -300px -90px}
</style>
<script >
export default{
  name:"menubar2"
}
</script>