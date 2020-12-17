import Vue from "vue";
import VueRouter from "vue-router";
//import NProgress from "nprogress";
import "nprogress/nprogress.css";
import AppLayout from "../layouts/AppLayout";

export const routes = [
  { path: "/login", component: () => import("@/views/login") },
  {
    path: "/",
    component: AppLayout,
    redirect: "index",
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/views/home"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
];
//注册路由
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
});

//导航前置守卫
router.beforeEach(async (to, from, next) => {
  //NProgress.start();
  next();
  //NProgress.done();
});

export default router;

// router.beforeEach(async(to, from, next) => {
//     NProgress.start();
//     if (to.path.split("/")[1] == "app") {
//         next();
//         NProgress.done();
//     } else {
//         if (to.path !== "/login" && store.state.user.empID == 0&&to.path!="/video") {
//             next("/login");
//         } else {
//             //验证权限
//             if (to.meta.auth) {
//                 let menu = store.state.user.menuItems.filter(function(menu) {
//                     return menu.url == to.path;
//                 });
//                 if (menu[0]) {
//                     //console.log(menu[0].function);
//                     to.meta.permission = menu[0].function; //操作权限
//                     next();
//                 } else {
//                     //没有页面权限
//                     next("/error/401");
//                 }
//             } else {
//                 next();
//             }
//         }
//         NProgress.done();
//     }
// });
