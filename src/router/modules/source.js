import { getComponent } from "@u/utils"
// 素材
const sourceRoutes = {
    name:"publicSource",
    path:"/publicSource",
    meta: {
        title: "企业资源管理",
        icon:"el-icon-files",
        roles:['editor'],
    },
    redirect: "/publicSource",
    component: getComponent("Main"),
    children: [
        {
            name:"publicSource",
            path: "/publicSource",
            meta: {
                title:"公有素材"
            },
            component:getComponent("Source","publicSource"),
        },
        {
            name:"enterpriseSource",
            path: "/enterpriseSource",
            meta: {
                title:"企业素材"
            },
            redirect:"/enterpriseList",
            component: ()=>import("@v/Source/enterpriseSource/entry.vue"),
            children: [
                {                   
                    path: "/enterpriseList",
                    name:"enterpriseList",
                    meta: {
                        title:"素材列表"
                    },
                    component:()=>import("@v/Source/enterpriseSource/enterpriseList.vue")
                },
                {                   
                    name:"enterpriseDetail",
                    path: "/enterpriseDetail",
                    meta: {
                        title:"企业素材详情"
                    },
                    component:()=>import("@v/Source/enterpriseSource/enterpriseDetail.vue")
                }
            ]
        },
        {
            name:"uploadSource",
            path: "/uploadSource",
            meta: {
                title:"上传素材"
            },
            component: getComponent("Source","uploadSource"),           
        }
    ]
}
  
export default sourceRoutes