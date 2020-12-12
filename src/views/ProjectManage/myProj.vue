<template>
  <div class="wrap">
    <div class="detail-header vCenter pl16 boxSize w">
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          :key="i"
          v-for="(item, i) in breadcrumb"
          class="pointer"
          @click.native="clickBreadCrumb(item)"
        >
          {{ item.title }}
        </el-breadcrumb-item>
      </el-breadcrumb> -->
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="detail-info p16 boxSize w f999">
      <div class="fx">
        <div class="fs20 f333 fsBold detail-name">JZ20081900175-朱肖慧</div>
        <div class="detial-btns">
          <el-button
            type="default"
            size="medium"
          >编辑</el-button>
          <el-button
            type="default"
            size="medium"
            @click="del"
          >删除</el-button>
        </div>
      </div>
      <div class="mt10">
        项目编码：未知编码 合同编号： 所选套餐： 设计师：袁文康（13901984667）
        企业内·创建 创建人：袁文康（13901984667） 创建时间：2020-09-03 15:18:13
        最后修改时间：2020-09-03 15:33:09
      </div>
      <div class="ptb16 boxSize">
        <h4 class="fsBold f333">业主信息</h4>
        <ul>
          <li>业主：未知业主（未知手机）</li>
          <li>居住地址：无</li>
          <li>备注：无</li>
        </ul>
      </div>
    </div>
    <div class="detail-body p16 boxSize sBeteen fx">
      <CardBlock
        v-for="(item, index) in arr"
        :key="index"
        :itemData="item"
      ></CardBlock>
      <div class="visBlock"></div>
      <div class="visBlock"></div>
      <div class="visBlock"></div>
      <div class="page-wrap hCenter">
        <el-pagination
          background
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import CardBlock from "@c/CardBlock";
import Breadcrumb from "@c/Breadcrumb";
export default {
  name: "myProj",
  components: { CardBlock, Breadcrumb },
  props: {},
  data() {
    return {
      id: 0,
      breadcrumb: [],
      arr: [
        { id: 11, name: "区域1" },
        { id: 22, name: "区域2" },
        { id: 33, name: "区域3" },
        { id: 44, name: "区域4" },
        { id: 55, name: "区域5" },
        { id: 66, name: "区域6" },
        { id: 77, name: "区域7" },
        { id: 88, name: "区域8" },
        { id: 99, name: "区域6" },
        { id: 20, name: "区域6" },
      ],
    };
  },
  computed: {},
  created() {
    this.id = this.$route.params.id;
    console.log("this.$route.matched:", this.$route.matched)
  },
  watch: {
    $route(to, from) {
      console.log("from:", from)
      this.getBreadcrumb()
    }
  },
  mounted() { },
  methods: {
    viewPlan(id) {
      // this.$router.push({ path: `/main/myProj/${id}` });
      console.log("id:", id);
    },
    getBreadcrumb() {

      let matched = this.$route.matched;
      console.log("matched:", matched)


    },
    clickBreadCrumb(item) {
      console.log("item：", item);
      if (item.routeCode == "planDetail") {
        return;
      } else if (item.routeCode == "projectManage") {
        this.$router.push(`/main/${item.routeCode}`);
      } else {
        this.$router.push(`/main/myProj/${this.id}`);
      }
    },
    del() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped>
.wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.block {
  height: 120px;
  background: #f98;
  flex: 1 1 220px;
  margin: 20px;
}
.detail-header {
  height: 32px;
  display: flex;
  border-bottom: 1px solid #ddd;
}
.detail-name,
.detial-btns {
  flex: 1;
}
.detial-btns {
  display: flex;
  justify-content: flex-end;
}
.detail-info {
}
.detail-body {
  flex: 1;
  overflow-y: scroll;
  flex-wrap: wrap;
}
.detail-info li {
  padding-top: 5px;
}
.page-wrap {
  width: 80%;
  margin: 20px 5px;
}
.visBlock {
  content: "";
  width: 226px;
  height: 0;
}
</style>
