<template>
  <transition name="slide">
    <div
      v-if="show"
      class="sloading loading-box fx p16 boxSize w"
    >
      <div class="icon-box">
        <Icon
          :type="type"
          :text="text"
        ></Icon>
      </div>
      <div class="cont-box fs12 f333">{{ text }}</div>
    </div>
  </transition>
</template>
<script>
import Icon from "./type.js";
export default {
  components: { Icon },
  data() {
    return {
      icon: "",
      show: false,
      type: "loading",
      text: "数据加载中请稍后",
      progressColor: "#ff0000",
      color: "#ffa800",
    };
  },
};
</script>
<style>
.loading-box {
  min-width: 260px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 1px #ccc;
  z-index: 2020;
}
.icon-box {
  flex: 0 1 70px;
  text-align: center;
  font-size: 18px;
}
.cont-box {
  flex: 1;
}
.rotate {
  animation: ani 1s ease-in infinite;
}
@keyframes ani {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
  top: 50%;
  opacity: 1;
}
.slide-enter,
.slide-leave-active {
  opacity: 0;
}
.icon-loading {
  font-weight: bold;
}
.default {
  color: #ffa800;
}
.error {
  color: #f00;
}
.warning {
  color: #ffa800;
}
.success {
  color: #3ac24b;
}
</style>
