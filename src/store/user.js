import UserApi from "@/apis/userApi"
import { db} from "@u/utils.js"
const user = {
    namespaced: true,
    state: {
        roles: [],
        token:""
    },
    getters: {},
    mutations: {
        setRoles(state, roles) { 
            console.log("---mutaiction-rolse:",roles)
            state.roles=roles
        },
        setToken(state, token) {
            state.token=token
        }
    },
    actions: {
        getInfo({ commit }, payload) {
            return new Promise((resolve, reject) => {
                UserApi.getUserInfo().then(res => {
                const { roles } = res
                commit('setRoles', roles)
                resolve(res)
              }).catch(error => {
                reject(error)
              })
            })
        },
        resetToken({ commit }, payload) { 
            commit("setToken", "")
            db.ls.remove("token","")
        }
    }

}
export default user