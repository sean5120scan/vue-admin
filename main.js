import Vue from "vue"
import Axios from "axios"
import Vuexios from "vue-axios"
import Mint from "mint-ui"
import "mint-ui/lib/style.css"
import VueCookie from "vue-cookie"

import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from "vue-awesome/components/Icon"

import App from "./App"
import store from "./store/index.js"
import router from "./router/index.js"

Vue.use(Mint);
Vue.use(Vuexios,Axios);
Vue.use(VueCookie);
Vue.component('icon', Icon)

new Vue({
el:"#app",
template:"<App></App>",
store,
router,
components:{App}

})


