import {getComponent} from "@u/utils"
const projectManageRoutes = {

    name: "project",
    path: "/project",
    component: getComponent("Main"),
    meta: {
        title: "项目管理",
        icon:"el-icon-folder",
        roles:['admin'],
    },
    redirect:"/projectManage",
    children: [
        {
            path: "/projectManage",
            name: "projectManage",
            meta: {
                title: "项目列表"
            },
            redirect:"/projectIndex",
            component: getComponent("ProjectManage","entry"),
            children: [
                {
                    path: "/projectIndex",
                    name: "projectIndex",
                    component: getComponent("ProjectManage"),
                },
                {
                    path: "/myProj/:id",
                    name: "myProj",
                    meta: {
                        title:"项目详情"  
                    },
                    component: getComponent("ProjectManage", "myProj")
                },
                {
                    path: "/planDetail/:id",
                    name: "planDetail",
       
                    meta: {
                        title:"计划详情"  
                    },
                    component: getComponent("ProjectManage", "planDetail")
                },   
            ]                
        },
        
    ]
}

export default projectManageRoutes