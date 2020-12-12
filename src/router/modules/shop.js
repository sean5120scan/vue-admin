import {getComponent} from "@u/utils"
const shopManageRoutes = {
    name:"organizate",
    path: "/organizate",
    component: getComponent("Main"),
    redirect:"/organization",
    meta: {
        title: "店铺管理",
        icon:"el-icon-school",
        roles:['admin','editor'],
    },
    children: [
        {
            name:"organization",
            path: "/organization",
            meta: {
                title:"组织管理"  
              },
            component:getComponent("ShopManage",'organization'),
        },
        {
            name: "shopRole",
            path: "/shopRole",
            meta: {
              title:"角色管理"  
            },
            component:getComponent("ShopManage",'shopRole')
        },
        {
            name:"newShop",
            meta: {
                title:"新开店"  
            },
            path:"/newShop",
            component: () => import("@v/ShopManage/newShop/entry.vue"),
            redirect:"/shopList",
            children: [
                {
                    path:"/shopList",
                    name: "shopList",
                    component:()=>import("@v/ShopManage/newShop/shopList.vue")
                },
                {
                    path:"/shopDetail",
                    name: "shopDetail",
                    meta: {
                        title:"店铺详情"
                    },
                    component:()=>import("@v/ShopManage/newShop/shopDetail.vue")
                },
            ]
        }
    ]
}
    


export default shopManageRoutes