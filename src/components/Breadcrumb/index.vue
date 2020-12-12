<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        :key="i"
        v-for="(item, i) in breadcrumb"
        class="pointer"
        @click.native="clickBreadCrumb(item)"
      >
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  components: {},
  props: {},
  data() {
    return {
    };
  },
  computed: {
    breadcrumb() {
      let temp = [], temps = [];
      this.$route.matched.filter((item, index, self) => {
        // if(item.meta.title){
        //     const title = item.meta.title;
        //     temp.push(title);
        // }
        if (item.name) {
          const name = item.name;
          temp.push(name);
        }
      });
      temp.filter((item, index, self) => {
        if (!temps.includes(item)) {
          temps.push(item);
        }
      })
      console.log("temp:", temps)
      return temps;

    }
  },
  created() { },
  mounted() { },
  methods: {

  },
};
</script>

<style scoped>
</style>
