
//门店管理模块
import shopManageRoutes from "./modules/shop"
import projectManageRoutes from "./modules/project"
import sourceRoutes from "./modules/source"
import { getComponent } from "@u/utils.js"
let aysncRoutes = [
    shopManageRoutes,
    projectManageRoutes,
    sourceRoutes,
    {
        path: "*",
        name: "404",
        component:getComponent("NotFound")
    }
]

export default aysncRoutes