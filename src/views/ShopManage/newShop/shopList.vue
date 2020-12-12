<template>
  <div>
    <ul>
      <li
        class="item"
        v-for="(item,index) in list"
        :key="index"
        @click="viewShop(index)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "shopList",
  components: {},
  props: {},
  data() {
    return {
      list: [
        { name: "aaaaa", age: 12 },
        { name: "bbbb", age: 12 },
        { name: "cccc", age: 12 },
        { name: "ddddd", age: 12 },
        { name: "eeeee", age: 12 },
      ]
    };
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {
    viewShop() {
      this.$router.push({ name: "shopDetail" })
    }
  },
};
</script>

<style scoped>
.item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
</style>
