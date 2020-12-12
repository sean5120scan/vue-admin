import axios from "axios"
import router from "@r/index.js"
import { db } from "@u/utils"
import qs from "qs"

let config = {
  baseURL :process.env.NODE_ENV == "development" ? "" : process.env.VUE_APP_BASE_URL,
  timeout: 5000,
};
const Http = axios.create(config);

// 添加请求拦截器
Http.interceptors.request.use((config) => {
  // debugger
  console.log(router.app.$sLoading)
  let type = Object.prototype.toString.call(config.data)
  if (config.method == 'post' || config.method == 'put') {
    if (type == "[object FormData]") {
      config.headers = { "Content-Type": "multipart/form-data" };    
      if (config.data.loading) { 
        router.app.$sLoading.open({ text: "文件上传中，请稍后", type: "loading" });
      } 
    } else {
      if (config.data.loading) { 
        router.app.$sLoading.open()
      }
      config.headers = { "Content-Type": "application/x-www-form-urlencoded" }
      config.data = qs.stringify(config.data)
    }
  } else {
      config.data = qs.stringify(config.data)
      if (config.params.loading) {
        router.app.$sLoading.$sLoading
      }
  }
  return config;
});
// 添加响应拦截器
Http.interceptors.response.use(
 
  (response) => {
      if(response.status==200){
        router.app.$sLoading.close();
      }
    return response.data;
  },
  (error) => {
    console.log("error:", error);
    if (
      error.code === "ECONNABORTED" ||
      error.message === "Network Error" ||
      error.message.includes("timeout")
    ) {
     
      router.app.$sLoading.open({ type: "error", text: "当前网络错误" })
    }
    //错误处理
    let code = error.response.status;
    if (code == 200) {
      console.log(200);
    } else if (code == 403) {
      //处理token过期问题
      router.app.$sLoading.open({
        type: "error",
        text: "登录已过期，请重新登录",
      });

      db.ls.clear()
      db.ss.clear()
      router.replace("/")

    } else {
      router.app.$sLoading.open({ type: "error", text: "当前网络错误" })
    }
    return Promise.reject(error);
  }
);
// loading:  true:请求接口时出现加载提示，false反之
function request(url, method = "GET", params = {}, loading = false) {
  let Method = method.toLowerCase()
  if (Method == "get"||Method == "delete") {
    params = { ...params, loading }
    return Http[Method](url, { params });
  } else if(Method == "post"||Method == "put"){
    let data = Object.assign(params, { loading })
    return Http[Method](url, data);
  }
}
export default request;