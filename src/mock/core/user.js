const Router = require("koa-router");
const Mock = require("mockjs");

const user = new Router({
  prefix: "/core/user",
});
//'id', 'user_name', 'name_cn', 'name_en', 'avatar', 'sex', 'mail', 'mobile', 'status', 'password_strength']
user.get("/current", async (ctx) => {
  ctx.success(
    Mock.mock({
      "id|1000-2000": 1000,
      user_name: "@cname()",
      avatar: "",
      avatar_file: "@image()",
      "sex|1": [0, 1],
      mail: "@email()",
      mobile: /^1[385][1-9]\d{8}/,
      menus: [
        {
          "id|10000-20000": 1000,
          name: "首页",
          resource_code: "home",
          resource_type: 1,
          icon: "ri-home-4-line",
          children: [
            {
              "id|10000-20000": 1000,
              name: "工作台",
              resource_code: "work",
              resource_type: 2,
              path: "/work",
              icon: "",
            },
            {
              "id|10000-20000": 1000,
              name: "监控页",
              resource_code: "monitor",
              resource_type: 2,
              path: "/monitor",
              icon: "ri-computer-line",
            },
          ],
        },
        {
          "id|10000-20000": 1000,
          name: "系统管理",
          resource_code: "system",
          resource_type: 1,
          path: "",
          icon: "ri-settings-4-line",
          children: [
            {
              "id|10000-20000": 1000,
              name: "用户管理",
              resource_code: "user",
              resource_type: 2,
              path: "/system/user",
              icon: "ri-user-line",
            },
            {
              "id|10000-20000": 1000,
              name: "角色管理",
              resource_code: "role",
              resource_type: 2,
              path: "/system/role",
              icon: "ri-shield-user-line",
            },
            {
              "id|10000-20000": 1000,
              name: "菜单管理",
              resource_code: "menu",
              resource_type: 2,
              path: "/system/menu",
              icon: "ri-menu-line",
            },
            {
              "id|10000-20000": 1000,
              name: "资源管理",
              resource_code: "resource",
              resource_type: 2,
              path: "/system/resource",
              icon: "ri-menu-2-line",
            },
          ],
        },
      ],
    })
  );
});

module.exports = user;

// 'id', ['resource_name', 'name'], 'parent_id', 'path', 'sort_no', 'icon', 'resource_code','resource_type'],
// user.post('/updatePassword',userController.updatePassword);
// user.post('/create',userController.create);
// user.post('/update',userController.update);
// user.post('/updateState',userController.updateState);
// user.post('/delete',userController.delete);
// user.get('/details/:id',userController.details);
// user.get('/list',userController.list);
// user.get('/pageList', userController.pageList);
// user.post('/relateRole', userController.relateRole);
// user.post('/relateResource', userController.relateResource);
// user.post('/updateCurrent', userController.updateCurrent);
// user.post('/existAccount', userController.existAccount);
// user.post('/existMobile', userController.existMobile);
// user.get('/permission', userController.permission);

// 'http://mockjs', {
//                     "userName" : '@name',     //模拟名称
//                     "age|1-100":100,          //模拟年龄(1-100)
//                     "color"    : "@color",    //模拟色值
//                     "date"     : "@date('yyyy-MM-dd')",  //模拟时间
//                     "url"      : "@url()",     //模拟url
//                     "content"  : "@cparagraph()", //模拟文本
//                     'list|1-10': [{'id|+2': 1 , 'age|20-30': 100}],
//                     'email': '@email',
//                     'friends|3': [{name: '@name'}],
//                     'price|10-20.2-5': 11,
//                     'cost|10-20.3': 11,
//                     'test|3.2-5': 52,
//                     'yourname|2-4': 'alice-',
//                     'title': '@title',
//                     // 链接
//                     'url': '@url("http")',
//                     // 邮箱
//                     'email': '@email',
//                     // 时间
//                     'date': '@date("yyyy-MM-dd HH:mm:ss")',
//                     'date2': '@dateTime',
//                     // 汉字
//                     'ctitle': '@ctitle(8)',
//                     // 汉字姓名
//                     'canme': '@cname()',
//                     // 地址
//                     'cadd': '@province' + '@city' + '@county',
//                     // 手机号
//                     'phone': /^1[385][1-9]\d{8}/
//                 }
