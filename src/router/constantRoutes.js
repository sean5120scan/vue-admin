import { getComponent } from "@u/utils.js"
const constantRoutes = [
    {
        path: "/login",
        name: "login",
        component: getComponent('Login')
    },
    {
        path: "/register",
        name: "register",
        component: getComponent('Register')
    },
    {
        path: "/unit",
        name: "unit",
        component: getComponent('Unit')
    },
    {
        path: "/",
        redirect: "/init",
        component:()=>import("@/views/Main/index.vue"),
        // meta: {
        //     title:"项目管理",
        // },
        children: [{
            path:"init",
            name: "init",
            component:getComponent('Init'),
        }]
    },
]
export default constantRoutes