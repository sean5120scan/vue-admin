<template>
  <div>
      <el-button type="success" >成功按钮</el-button>
      <!-- <input type="button" value="调整" @click='go'> -->
 </div>
</template>

<script>
export default {
  name:"home",
  components: {},
  props: {},
  data() {
    return {

    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    go(){
      console.log("aa")
      this.$router.push({name:"unit"})
    }
  },
};
</script>

<style scoped>

</style>
