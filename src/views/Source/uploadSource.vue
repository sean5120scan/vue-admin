<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="w p16">
      <el-breadcrumb-item
        :key="i"
        v-for="(item, i) in breadcrumb"
        class="pointer w"
        @click.native="clickBreadCrumb(item)"
      >
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <section class="material-container boxSize">
      <el-form ref="form" :model="form" label-width="180px" :rules="rules">
        <div class="form-seciton mt24 w">
          <div class="header">
            <span class="inBlock mr10">素材类型</span>
            <span class="f999"
              >绑定好的【所属品类】会影响：所属菜单、图例绑定、主辅材和计价单位等逻辑的判断，请慎重选择</span
            >
          </div>
          <div class="material-main">
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否可售">
              <el-radio-group v-model="form.sale">
                <el-radio :label="0">备选项</el-radio>
                <el-radio :label="1">备选项</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="是否上传模型">
              <el-radio-group v-model="form.uploadModel">
                <el-radio :label="0">是</el-radio>
                <el-radio :label="1">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="是否启用">
              <el-radio-group v-model="form.isUse">
                <el-radio :label="0">启用</el-radio>
                <el-radio :label="1">停用</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </div>
        <!-- 基本信息 -->
        <div class="form-seciton mt24 w">
          <div class="header">
            <span class="inBlock mr10">基本信息</span>
          </div>
          <div class="material-main">
            <el-form-item label="素材名称">
              <el-input
                class="medium"
                placeholder="请输入50字内的商品名称"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="素材缩略图">
              <el-upload
                class="avatar-uploader center"
                action="http://localhost:9000"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <div v-else>
                  <p><i class="el-icon-circle-plus theme-color fs24"></i></p>
                  <p class="fs12 fsBold">上传图片</p>
                  <p class="fs12 f999">
                    建议使用320*320的jpg、png、bmp格式图片，图片不大于1M
                  </p>
                </div>
              </el-upload>
            </el-form-item>
            <el-form-item label="颜色">
              <el-checkbox-group v-model="checkedList">
                <el-checkbox
                  :label="item.color"
                  v-for="(item, index) in colorArr"
                  :key="index"
                  class="color-checkbox"
                >
                  <span class="">{{ item.name }}</span>
                  <span
                    class="colorBlock inBlock"
                    :style="{ background: item.color }"
                  ></span>
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="产品尺寸">
              <el-input
                placeholder="0"
                v-model="form.len"
                class="sizeInput mr24"
              >
                <template slot="prepend">长</template>
                <template slot="append">mm</template>
              </el-input>
              <el-input
                placeholder="0"
                v-model="form.width"
                class="sizeInput mr24"
              >
                <template slot="prepend">宽</template>
                <template slot="append">mm</template>
              </el-input>
              <el-input
                placeholder="0"
                v-model="form.height"
                class="sizeInput mr24"
              >
                <template slot="prepend">高/厚</template>
                <template slot="append">mm</template>
              </el-input>
            </el-form-item>
            <el-form-item label="编码">
              <el-input
                class="medium"
                v-model="form.code"
                placeholder="请输入编码"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="备注信息">
              <el-input
                class="medium"
                type="textarea"
                v-model="form.desc"
                placeholder="请输入400字内的商品介绍"
                autocomplete="off"
                rows="4"
              ></el-input>
            </el-form-item>
          </div>
        </div>
        <!-- 销售信息 -->
        <div class="form-seciton mt24 w">
          <el-collapse v-model="saleCollaspeModel" @change="toggle('sale')">
            <el-collapse-item name="1" class="collapse-head">
              <template slot="title">
                <div class="collapse-title">
                  <el-row>
                    <el-col :span="12" class="collapse-title-info"
                      >销售信息</el-col
                    >
                    <el-col :span="12" class="collapse-title-icon"
                      >{{toggleSaleTxt}} <i class="el-icon-arrow-down f999 colspase-icon" :class="{'ex-pand':saleCollaspe}"></i
                    ></el-col>
                  </el-row>
                </div>
              </template>
              <div class="collapse-main ptb32">
                <el-form-item label="所属品牌">
                  <el-input
                    class="medium"
                    placeholder="请输入关键词并搜索品牌"
                    autocomplete="off"
                  ></el-input>
                  <div class="select-box"></div>
                </el-form-item>
                <el-form-item label="型号">
                  <el-input
                    class="medium"
                    placeholder="请输入型号"
                    autocomplete="off"
                  ></el-input>
                  <div class="select-box"></div>
                </el-form-item>
                <el-form-item label="销售指导价">
                  <el-input
                    class="medium"
                    placeholder="0.00"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="采购价">
                  <el-input
                    class="medium"
                    placeholder="0.00"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="价格单位">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="京东链接">
                  <el-input
                    type="textarea"
                    rows="3"
                    class="medium"
                    placeholder="0.00"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="天猫链接">
                  <el-input
                    type="textarea"
                    rows="3"
                    class="medium"
                    placeholder="0.00"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="拼多多链接">
                  <el-input
                    type="textarea"
                    rows="3"
                    class="medium"
                    placeholder="0.00"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <!-- 图例信息 -->
        <div class="pic-box mt24">
          <el-collapse  @change="toggle('pic')">
            <el-collapse-item class="collapse-head">
              <template slot="title">
                <div class="collapse-title">
                  <el-row>
                    <el-col :span="18" class="collapse-title-info">
                      <span>图例信息</span>
                      <span
                        >请上传需要在施工图上展示的俯视图、正视图、侧视图
                      </span>
                      <span>查看图例制作标准</span>
                    </el-col>
                    <el-col :span="6" class="collapse-title-icon"
                      >{{togglePicSaleTxt}} <i class="el-icon-arrow-down f999 colspase-icon inBlock" :class="{'ex-pand':picSaleCollaspe}" ></i
                    ></el-col>
                  </el-row>
                </div>
              </template>
              <div class="collapse-main ptb32 pl32">
                <el-button class="mr10">关联图例</el-button>
                <span>仅支持关联图例管理中已有的图例信息</span>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <section class="btn-box">
            <el-button type="primary">提交素材</el-button>
            <el-button>取消</el-button>
        </section>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  name: "uploadSource",
  components: {},
  props: {},
  data() {
    return {
      saleCollaspeModel:1,
      fromPageName: "",
      toggleSaleTxt: "展开",
      togglePicSaleTxt: "展开",
      saleCollaspe:false,
      picSaleCollaspe:false,
      breadcrumb: [],
      imageUrl: "",
      colorArr: [
        { color: "#ff8000", name: "橙色" },
        { color: "#fefb06", name: "黄色" },
        { color: "#00b54c", name: "绿色" },
        { color: "#005cf9", name: "蓝色" },
        { color: "#a830c3", name: "紫色" },
        { color: "#fe74aa", name: "粉色" },
        { color: "#ff3881", name: "玫红" },
      ],
      checkedList: [],
      form: {
        sale: 0,
        uploadModel: 0,
        isUse: 0,
        len: 0,
        width: 0,
        height: 0,
        code: "",
        desc: "",
      },
      rules:{
            region:[
             { required: true, message: '请输入活动名称', trigger: 'blur' },
             { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    clickBreadCrumb(item) {},
    toggle(type) {
      if(type == "sale"){
        this.saleCollaspe = !this.saleCollaspe;
        console.log("this.saleCollaspe：",this.saleCollaspe)
        this.toggleSaleTxt= this.toggleSaleTxt? "收起" :"展开"
      }else{
        this.picSaleCollaspe = !this.picSaleCollaspe;
        this.togglePicSaleTxt= this.togglePicSaleTxt? "收起" :"展开"
      }      
    },
    handleChange(val) {
      console.log(val);
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("from:", from);
    next((vm) => {
      console.log("vm.router:", vm.$route);
      vm.fromPageName = from.name;
      vm.breadcrumb = [
        { name: from.name, title: from.meta.title },
        { name: vm.$route.name, title: vm.$route.meta.title },
      ];
    });
  },
};
</script>

<style scoped lang="scss">
.material-container {
  padding: 0 64px;
}
.material-main {
  padding: 32px 0;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03);
}
.header {
  height: 48px;
  line-height: 48px;
  padding: 0 24px;
}
.medium {
  width: 320px;
}
.avatar-uploader {
  width: 320px;
  height: 320px;
  background: #f8f8f8;
}
.color-checkbox {
  ::v-deep .el-checkbox__label {
    color: #333;
  }
  ::v-deep .el-checkbox__inner {
    width: 16px;
    height: 16px;
  }
}
.sizeInput {
  width: 180px;
  ::v-deep .el-input-group__prepend {
    text-align: center;
    width: 36px;
    height: 36px;
    line-height: 36px;
    background: #fafafa;
    padding: 0px;
    border-radius: 0;
    font-size: 12px;
  }
  ::v-deep .el-input-group__append {
    text-align: center;
    width: 36px;
    height: 36px;
    line-height: 36px;
    background: #fff;
    padding: 0px;
    border-radius: 0;
    border-left-width: 0 !important;
    font-size: 12px;
  }
}
.collapse-title-box {
  padding: 24px 0;
  display: flex;
  background: #fcfcfc;
  width: 100%;
}
.collapse-title-left,
.collapse-title-right {
  flex: 0 1 50%;
}

.colorBlock {
  width: 16px;
  height: 16px;
  margin-left: 4px;
  vertical-align: middle;
}
.select-box {
}
.collapse-head {
  ::v-deep .el-collapse-item__arrow {
    display: none !important;
  }
  ::v-deep .el-icon-arrow-right {
    display: none;
  }
}
.collapse-title {
  width: 100%;
}
.collapse-title-info {
  text-align: left;
  padding: 0 24px;
}
.collapse-title-icon {
  text-align: right;
  padding: 0 24px;
}
.pl32 {
  padding-left: 32px;
}
.btn-box{margin: 40px 0 48px}
.colspase-icon{
    transition:transform 0.3s ease;
}
.ex-pand{transform: rotate(-90deg);}

</style>
