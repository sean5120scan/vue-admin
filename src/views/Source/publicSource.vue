<template>
  <div>
    <div class="head">
      <el-button @click="open">绑定施工项</el-button>
      <el-button @click="del">delete接口</el-button>
    </div>
    <div class="main w sBeteen">
      <div class="tree-group">
        <CreateGroup></CreateGroup>
      </div>
      <div class="main-cont w ">
        <el-table
          :header-cell-style="{ textAlign:'center'}"
          :data="tableData"
        >
          <el-table-column
            prop="date"
            label="日期"
            width="280"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="280"
          >
          </el-table-column>
          <el-table-column
            prop="age"
            label="年龄"
            width="280"
          >
          </el-table-column>
        </el-table>
        <div class="pager center">
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            :page-size="pageSize"
            background
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>这是一段信息</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="confirm"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
import CreateGroup from "@c/CreateGroup"
import { mapState } from "vuex"
import axios from "axios"
export default {
  name: "publicSource",
  components: { CreateGroup },
  props: {},
  data() {
    return {
      tableData: [],
      total: 0,
      pageSize: 10,
      value: "",
      dialogVisible: false
    }
  },
  computed: {
    ...mapState("app", {
      count: state => state.count
    })
  },
  created() {
    this.getTable(1)
  },
  mounted() { },
  methods: {
    add() {
      console.log(" this.$store:", this.$store)
      this.$store.commit("app/add")
    },
    async getTable(page) {
      let params = {
        pageSize: page,
        pageNum: this.pageNum
      }
      //put请求
      // axios.put("/api/getTableData", params).then(res => {
      //   console.log("表格数据", res.data)
      //   this.tableData = res.data.data
      //   this.total = parseInt(res.data.total)
      // }).catch(err => {
      //   throw new Error(err)
      // })
      //delete请求



      //get和post 请求

      // let res = await this.$request("/api/getTableData", 'GET', params, true)
      // console.log("total:", res.data.total)
      //   this.tableData = res.data.data
      //   this.total = parseInt(res.data.total)
    },
    handleCurrentChange(item) {
      console.log("this.page:", item)
      localStorage.setItem("curPage", item)
      this.getTable(item)
    },
    open() {
      this.dialogVisible = true;
    },
    async del() {
      let data = {
        id: 0
      }
      let res = await this.$request("/api/del", 'DELETE', data, true)
      console.log("删除res:", res)
    },
    async confirm() {
      this.dialogVisible = false
      let res = await this.$request("/api/bind", "GET")
      console.log("res.data.code:", res)
      if (res.code == 0) {
        this.getTable(localStorage.getItem("curPage"))
      }
    }
  },
};
</script>

<style scoped>
.main {
  margin-top: 16px;
  min-height: 60vh;
  display: flex;
}
.head {
  height: 116px;
  background: #fff;
}

.tree-group {
  width: 240px;
  border-right: 1px solid #e6e6e6;
}
.main-cont {
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 40px 0;

  /* min-height: calc(100vh - 30vh); */
}
.pager {
  height: 40px;
}
</style>
