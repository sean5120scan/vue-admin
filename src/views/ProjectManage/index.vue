<template>
  <div>
      
    <main class='pro-main boxSize'>
      <div
        class='block'
        v-for="(item,i) in arr"
        :key='i'
      >
        <div class='pro-img-box center'>
          <!-- <img :src="lofo" alt=""> -->
          <ThumbImg :imgData="item.imgArr"></ThumbImg>
        </div>
        <div class='pro-img-cont p16 boxSize'>
          <div class='fs18'>项目名称：JZ20062800008 - 测试</div>
          <div class='pro-item-cont'>
            项目编码：ceshi123 |
            所选套餐：未知套餐 |
            设计师：13810736243（13810736243）
          </div>
          <div> 业主：已（未知电话） | 所在地区：全国 | 所在小区：未知小区</div>
          <div> 详细地址：未知地址</div>
          <div>企业内·创建 创建人：13810736243（13810736243） | 创建时间：2020-06-28 15:41:49 | 最后修改时间：2020-07-20 19:44:26</div>
        </div>
        <div class='pro-img-info p16 boxSize '>
          <span @click="viewDetail(item.id)">查看</span>
          <span>编辑</span>
          <span @click="share">分享</span>
          <span
            class='openr'
            @click="opner"
          >公开成企业项目</span>
          <span>删除</span>
        </div>
      </div>
    </main>
    <Share :show.sync='isShow'></Share>
  </div>

</template>

<script>
import Share from "@c/Share"
import ThumbImg from "@c/ThumbImg"
export default {
  name: "myProj",
  components: { Share, ThumbImg },
  props: {},
  data() {
    return {
      select: "",
      input3: '',
      isShow: false,
      lofo: require("@a/1.jpg"),
      value: "",
      options1: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '黄金糕'
        },
        {
          value: '选项3',
          label: '黄金糕'
        },
      ],
      options2: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '黄金糕'
        },
        {
          value: '选项3',
          label: '黄金糕'
        },
      ],
      arr: [
        {
          id: 11, imgArr: ["https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200802/PlanThumbnail_1596362905294.jpg",
            "https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200730/PlanThumbnail_1596115598098.jpg",
            "https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200730/PlanThumbnail_1596115598098.jpg",
          ]
        },
        {
          id: 22, imgArr: ["https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200802/PlanThumbnail_1596362905294.jpg",
            "https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200730/PlanThumbnail_1596115598098.jpg",
          ]
        },
        {
          id: 33, imgArr: [
            "https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200802/PlanThumbnail_1596362905294.jpg",
            "https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200802/PlanThumbnail_1596362905294.jpg",
            "https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200802/PlanThumbnail_1596362905294.jpg",
            "https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200802/PlanThumbnail_1596362905294.jpg",
            "https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200802/PlanThumbnail_1596362905294.jpg",
          ]
        },
        { id: 44, imgArr: ["https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200802/PlanThumbnail_1596362905294.jpg"] },
        { id: 55, imgArr: ["https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200802/PlanThumbnail_1596362905294.jpg"] },
        { id: 66, imgArr: ["https://baj-dabanjiz-conf.oss-accelerate.aliyuncs.com/image/20200802/PlanThumbnail_1596362905294.jpg"] },

      ]
    };
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {
    opner() {
      console.log("openre")
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    viewDetail(id) {
      console.log("id:", id)
      // this.$router.push({ path: `/main/myProj/${id}` })
      this.$router.push({ name: `myProj`, params: { id } })
    },
    share() {
      console.log("share")
      this.isShow = true
    }
  },
};
</script>

<style scoped lang="scss">


.main {
  display: flex;
  flex-direction: column;
}
.block {
  width: 100%;
  min-height: 160px;
  background: #fff;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
}
.pro-main {
  width: 100%;
  padding: 16px;
}
.pro-img-box {
  flex: 0 1 160px;
  padding-left: 16px;
}
.pro-img-box img {
  object-fit: contain;
  max-width: 160px;
  max-height: 160px;
}
.pro-img-cont {
  flex: 1;
  color: #999;
  line-height: 24px;
  overflow-y: hidden;
}
.pro-img-info {
  flex: 0 1 380px;
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pro-img-info span {
  flex: 1;
  color: #ffa800;
  cursor: pointer;
}
.pro-img-info span:last-child {
  text-align: center;
}
.openr {
  flex: 2;
}
.pro-item-cont {
  overflow-x: auto;
  overflow-y: hidden;
  height: 32px;
  white-space: nowrap;
}
</style>
