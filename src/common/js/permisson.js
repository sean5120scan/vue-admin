function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) { // 如果存在meta.roles
      // 只要meta.roles中存在与用户角色列表中相同的值，则说明具有访问权限
      return roles.some(role => route.meta.roles.includes(role))
    } else {
      // 不存在meta或者是不存在meta.roles，则说明是通用模块，直接放行
    //   return true
      return true
    }
  }
function filterAsyncRoutes(routes, roles) {
    const res = []
        routes.forEach(route => {
        let tmp = { ...route }
            // console.log("temp:", tmp)
            console.log("tmp:", tmp)
            console.log("roles:", roles)
            console.log("hasPermission(roles, tmp):",hasPermission(roles,tmp))
        if (hasPermission(roles, tmp)) { // 相对路由数组的每一项进行访问权限的判断
            if (tmp.children) {
                // 如果存在children，则递归调用筛选函数
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            // 将处理好的路由配置放入到res中
            res.push(tmp)
        }
    })
    return res
}
  
export {
    hasPermission,
    filterAsyncRoutes
}