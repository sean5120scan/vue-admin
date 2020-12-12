import Vue from "vue"
import Router from "vue-router"
import store from "@/store"
Vue.use(Router)

import { db } from "@u/utils.js"
import constantRoutes from "./constantRoutes"

const originalPush = Router.prototype.push;
Router.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => err)
}

let  router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const whiteList = ['/login', '/register', '/404']

router.beforeEach(async (to, from, next) => { 
  console.log("to:",to)
  if (db.ls.get('token')) {  
    if (to.path == '/login') {
          next({ path: '/' });
    } else {
      const hasRoles = store.state.user.roles && store.state.user.roles.length > 0
      console.log("hasRoles:",hasRoles)
      if (hasRoles) {
        next()
      } else {
        try {
          let { roles } = await store.dispatch('user/getInfo')
          let accessRoutes = await store.dispatch('app/generateRoutes', roles)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          next("/login")
        }
      }
    }
  } else {
      if (whiteList.indexOf(to.path) != -1) {
          next();
        } else {
          next('/login');
        }
      }
})

export default router
