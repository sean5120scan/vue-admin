import Vue from "vue"
import Vuex from "vuex"
import appModule from "./app"
import userModule from "./user"
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        app:appModule,
        user:userModule
    }
})
export default store
