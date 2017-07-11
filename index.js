import Vue from "vue"
import Router from "vue-router"
import VueLazyload  from "vue-lazyload"
import index from "@/components/index"
import login from "@/components/login"
import regist from "@/components/regist"
import myself from "@/components/myself"
import myinfo from "@/components/myinfo"
import address from "@/components/address"
import recommend from "@/components/recommend"




Vue.use(Router)
Vue.use(VueLazyload);

export default new Router({

 routes:[ 
          {path:"/",component:index,name:"index"},
          {path:"/login",component:login,name:"login"},
          {path:"/regist",component:regist,name:"regist"},
          {path:"/myself",component:myself,name:"myself"},
          {path:"/myinfo",component:myinfo,name:"myinfo"},
          {path:"/address",component:address,name:"address"},
          {path:"/recommend",component:recommend,name:"recommend"}
        ]
})