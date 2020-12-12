import  aysncRoutes  from "@r/aysncRoutes"
import  constantRoutes  from "@r/constantRoutes"
import { filterAsyncRoutes } from "@com/js/permisson.js"
// import router from "@r"
const app = {
    namespaced: true,
    state: {
        routes: [],
        addRoutes:[],
    },
    getters: {

    },
    mutations: {
        setRoutes(state, routes){
            state.addRoutes = routes
            state.routes = constantRoutes.concat(routes)
        }
    },
    actions: {
        generateRoutes({ commit }, roles) { 
            return new Promise((resolve) => { 
                let accessedRoutes = []
                if (roles.includes('admin')) {
                    accessedRoutes = aysncRoutes||[]
                    console.log("accessedRoutes:", accessedRoutes)
                } else {
                    accessedRoutes = filterAsyncRoutes(aysncRoutes, roles)
                }
                console.log("最后的路由:", accessedRoutes)
                commit('setRoutes', accessedRoutes)
                resolve(accessedRoutes)
            })
        }
    }
}
export default app