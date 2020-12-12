<template>
  <div
    :style="{ width: width + 'px' }"
    class="jdk-block-wrap w f999"
  >
    <div class="jdk-block-img center">
      <el-image
        :style="{ width: width + 'px', height: '224px' }"
        :src="url"
        class="center"
        fit="cover"
      >
        <div
          slot="error"
          class="image-slot"
        >
          <i class="el-icon-picture-outline "></i>
        </div>
      </el-image>
    </div>
    <div class="p16 boxSize more">
      <slot name="jdk-block-cont">
        <ul class="list-box">
          <li
            v-for="(item, index) in list"
            :key="index"
            class="elliplis fs12"
          >
            {{ item.name }}
          </li>
        </ul>
      </slot>
      <span
        slot="moreIcon"
        class="moreIcon"
      >
        <el-dropdown
          trigger="click"
          size="small"
          placement="bottom-end"
          @command="view"
        >
          <span>
            <i class="iconfont icon-more fs16"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="view">查看</el-dropdown-item>
            <el-dropdown-item command="editor">编辑</el-dropdown-item>
            <el-dropdown-item command="share">分享</el-dropdown-item>
            <el-dropdown-item command="del">删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardBlock",
  components: {},
  props: {
    width: {
      type: [String, Number],
      default: 226,
    },
    itemData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      url:
        "https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200903/PlanThumbnail_1599128396331.jpg?x-oss-process=image/resize,m_lfit,h_448,w_448",
      list: [
        { id: 0, name: "dhfahs" },
        { id: 1, name: "dhfahs" },
        { id: 2, name: "dhfahs" },
        { id: 3, name: "dhfahs" },
      ],
    };
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {
    view(i) {
      console.log("i:", i)
      console.log("itemData:", this.itemData)
      this.$router.push({
        name: "planDetail", params: { id: this.itemData.id }
      })
    }
  },
};
</script>

<style scoped>
.jdk-block-wrap {
  position: relative;
  margin-bottom: 16px;
  transition: all 1s;
}
.jdk-block-wrap:hover {
  box-shadow: 0 0 20px 6px #ccc;
}
.more {
  position: relative;
}
.moreIcon {
  position: absolute;
  right: 16px;
  bottom: 10px;
}
.list-box li {
  line-height: 20px;
  margin-top: 4px;
}
.visBlock {
  content: "";
  height: 0;
  width: 226px;
}
</style>
