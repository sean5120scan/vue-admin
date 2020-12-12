import Vue from "vue"
import store from '@/store'

function checkPermission(el, binding) {
  const { value } = binding
  const roles = store.state.user.roles||[]

  if (value && value instanceof Array) { // 判断传入的值是不是数组
    if (value.length > 0) {
      const permissionRoles = value
      // 只要传入的permissionRoles中，包含了roles其中的一个值即可，则代表有权限
      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })
      console.log("hasPermission:",hasPermission)
      // 没有权限则进行删除，不展示。
      // v-permission具体实现可以根据业务场景进行修改
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`permission error`)
  }
}

Vue.directive("permission",{
  bind(el,binding){
    console.log("binding------:",binding)
    checkPermission(el,binding)
  },
  inserted(el,binding){
    checkPermission(el,binding)
  },
  update(el, binding) {
    checkPermission(el, binding)
  }
})


