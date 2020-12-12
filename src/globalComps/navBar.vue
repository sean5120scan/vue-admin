<template>
  <div class="nav">
    <div class="nav-left">111</div>
    <div class="nav-mid">mid</div>
    <div class="nav-rt" @click="handleRt">right</div>
  </div>
</template>
<script>
export default {
  name: "navBar",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleRt() {
      this.$emit("clickRt", 123);
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  height: 60px;
}
.nav-left {
  width: 30%;
  background: #f4e6cc;
}
.nav-mid {
  flex: 1;
  background: #dff2f9;
}
.nav-rt {
  width: 30%;
  background: #f5bcdc;
}
</style>
