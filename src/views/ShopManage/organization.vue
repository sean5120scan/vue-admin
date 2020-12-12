<template>
  <div>
    <div class="drag-box">
      <draggable
        v-model="myArray"
        animation="300"
        @start="onStart"
        @end="onEnd"
      >
        <transition-group>
          <div
            class="item"
            v-for="element in myArray"
            :key="element.id"
          >{{element.name}}</div>
        </transition-group>
      </draggable>
    </div>
    <div>
      <i class="el-icon-delete"></i>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "newShop",
  components: { draggable },
  props: {},
  data() {
    return {
      drag: false,
      myArray: [
        {
          id: 1,
          name: "我是1号",
        },
        {
          id: 2,
          name: "我是2号",
        },
        {
          id: 3,
          name: "我是3号",
        },
        {
          id: 4,
          name: "我是4号",
        },
        {
          id: 5,
          name: "我是5号",
        },
      ],
    };
  },
  computed: {},
created() {

  },
  mounted() { },
  methods: {

    onStart() {
      this.drag = true;
    },
    //拖拽结束事件
    onEnd(e) {
      this.drag = false;
      console.log("end---e:", e)
      console.log("new--arry:", this.myArray)
    },
  },
};
</script>

<style scoped>
.ul {
  width: 60%;
}
.item {
  width: 90%;
  margin: 20px auto;
  background: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  height: 80px;
  line-height: 80px;
  cursor: move;
}
.item:hover {
  background: #f9f9f9;
}
</style>
