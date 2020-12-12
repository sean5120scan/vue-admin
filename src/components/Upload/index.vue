<template>
  <div>
    <el-dialog
      title="批量上传素材"
      :visible.sync="show"
      width="55%"
      class="upload-box"
    >
      <div>
        <el-row class="mb16 ptb12">
          <el-col :span="8"
            ><span class="err inBlock plr4">*</span
            ><span>请选择需要导入的文件:</span>
          </el-col>
          <el-col :span="16">
            <div class="theme-color">
              <section class="upload-box" v-if="uploadShow">
                <form enctype="multipart/form-data" @submit="submit">
                  <label for="file" class="pointer">
                    <i class="iconfont icon-upload theme-color fsBold"></i
                    >上传文件</label
                  >
                  <input
                    type="file"
                    id="file"
                    class="file2"
                    ref="file"
                    @change.prevent="upload"
                  />
                </form>
                <p class="fs12 f999 mt4">仅支持.xlsx 格式文件，小于100MB</p>
              </section>
              <section v-else class="">
                <div class="upload-top">
                  <el-row>
                    <el-col :span="18"
                      ><span class="f333 fs12">{{ filename }}</span
                      ><span class="inBlock plr4"
                        ><i class="iconfont icon-success fs16"></i></span
                    ></el-col>
                    <el-col :span="6" class="hRight f666">
                      <div>
                        <i
                          class="iconfont icon-del fs26 plr4"
                          @click="close"
                        ></i>
                      </div>
                      <div>
                        <label for="file"
                          ><i class="iconfont icon-replace fs26 plr4"></i
                        ></label>
                        <input
                          type="file"
                          id="file"
                          class="file2"
                          @change.prevent="upload"
                        />
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="upload-bottom">
                  <el-progress
                    v-if="progressShow"
                    class="progress"
                    :percentage="progressVal"
                    :stroke-width="2"
                    :show-text="false"
                  ></el-progress>
                </div>
              </section>
            </div>
          </el-col>
        </el-row>
        <el-row class="ptb12">
          <el-col :span="8" class="pl24 boxSize">上传素材名称相同时：</el-col>
          <el-col :span="16">
            <el-radio-group v-model="radio">
              <el-radio :label="0">跳过</el-radio>
              <el-radio :label="1">新增素材信息</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-row>
          <el-col :span="8" class="theme-color left-txt">
            <a
              class="theme-color"
              href="https://ali-res.dabanjia.com/res/20191104/家装BIM素材导入模版.xlsx"
              >下载素材批量上传模板</a
            >
          </el-col>
          <el-col :span="16">
            <el-button type="primary" @click="startUpload">开始上传</el-button>
            <el-button @click="cancel">取 消</el-button>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "upload",
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: false,
      radio: 0,
      filename: "",
      uploadShow: true,
      progressShow: true,
      progressVal: 0,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    startUpload() {
      this.$emit("start-upload", false);
    },
    cancel() {
      this.$emit("cancel", false);
    },
    close() {
      this.uploadShow = true;
    },
    submit(e){
      return false
    },
    async upload(e) {
      console.log("e", e.target.files[0]);
      let file = e.target.files[0];
      let suffix = file.name.substring(file.name.lastIndexOf(".") + 1);
      console.log("suffix:", suffix);
      let fd = new FormData();
      fd.append("file", file);

      if (suffix === "xlsx") {
        // if (!this.progressShow) {
        //   this.progressShow = true;
        // }
        this.filename = file.name;
        this.uploadShow = false;
        let self = this;
        // this.progressVal = 100;
        try {
          let res = await axios.post(
            "http://localhost:9000/api/upload",
            fd,
            {
              headers: { "Content-Type": "multipart/form-data" },
              onUploadProgress(event) {
                self.progressVal = Number(((event.loaded / event.total) * 100).toFixed(0))
                console.log("this.progressVal:", self.progressVal);
                if (event.loaded == event.total) {
                  self.progressVal = 0;
                  self.progressShow=false
                }
              }
            }
            // withCredentials: false,             
          )
        } catch (err) {
          throw new Error(err);
        }
      } else {
        if (!this.progressShow) {
          this.progressShow = false;
        }
        this.$sLoading.open({ type: "error", text: "文件格式不对" });
      }
    },
   
  },
};
</script>

<style scoped lang="scss">
.mt4 {
  margin-top: 4px;
}
.plr4 {
  padding: 0 4px;
}
.fs26 {
  font-size: 20px;
}
.file2 {
    visibility: hidden;
    width: 1px;
    height: 1px;
}
.left-txt {
  text-align: left !important;
  height: 40px;
  line-height: 40px;
}

.upload-box {
  ::v-deep .el-radio__label {
    color: #000;
  }
  ::v-deep .el-dialog__title {
    font-size: 14px;
  }
}
.origin-cont {
  text-align: left;
}
.upload-bottom {
  margin-top: 10px;
}
.progress {
  width: 80%;
}
</style>


