<template>
  <div class="thumb-box">
    <div
      :class="objClass"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <li
        v-for="(item, index) in imgData"
        :key="index"
      >
        <img
          :src="item"
          alt
        />
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: "thumbImg",
  components: {},
  computed: {
    objClass() {
      // console.log("this.imgData.length:", this.imgData);
      if (this.imgData.length == 1) {
        return "thumb-one center";
      } else if (this.imgData.length == 2) {
        return "thumb-two";
      } else {
        return "thumb-three";
      }
    },
  },
  props: {
    width: {
      type: [Number, String],
      default: 160,
    },
    height: {
      type: [Number, String],
      default: 160,
    },
    imgData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  created() { },
  mounted() { },
  methods: {},
};
</script>

<style scoped lang="scss">
.item {
  width: 100%;
  height: 100%;
}
img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.thumb-one {
}
.thumb-two {
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    width: 70px;
    height: 70px;
    margin: 5px;
  }
}
.thumb-three {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  li {
    width: 40%;
    height: 45%;
    margin: 5px;
  }
}
</style>
