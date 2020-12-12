import Vue from "vue";
import App from "./App.vue";
import router from "@r";

import "@com/js/ele.js"
import "@/plugins/index.js";
import "@/directives/btnPermission.js";

import axios from "@u/axios";
import "./common/js/globalComps.js"
import * as filters from './common/js/filters'
import store from "./store/index"
// import 'element-ui/lib/theme-chalk/index.css';
import "@a/fonts/iconfont.css";
import "@com/css/reset.css";
import "@com/css/index.css";
import "./theme/index.css";


//全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

console.log("当前的环境：",process.env)

Vue.config.productionTip = false;
Vue.prototype.$request = axios;

console.log(process.env);

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");

