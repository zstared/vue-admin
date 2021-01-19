const Koa = require("koa");
const fs = require("fs");
const path = require("path");
const koaBody = require("koa-body");
const Router = require("koa-router");
const router = Router();
const cors = require("koa2-cors");

//加载路由
fs.readdirSync(__dirname)
  .filter((file) => file !== "server.js")
  .forEach((dir) => {
    fs.readdirSync(path.join(__dirname, dir)).forEach((file) => {
      console.log(file);
      const route = require(path.join(__dirname, dir, file));
      router.use(route.routes(), route.allowedMethods());
    });
  });
const app = new Koa();
//支持跨域
app.use(cors());
//支持文件上传
app.use(
  koaBody({
    multipart: true,
    formidable: {
      multiples: true,
      maxFileSize: 10 * 1024 * 1024, //最大文件 支持10M
    },
  })
);
//中间件
app.use(async (ctx, next) => {
  const url = ctx.path; //请求地址
  const date=new Date();
  const time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  console.log(time+' 请求地址:'+url);
  /**
   * @method 请求成功的返回结果
   * @param {Object} data
   * @param {String} msg
   */
  ctx.success = function(data = {}) {
    ctx.body = {
      code: 0,
      data: data,
      message: "请求成功",
    };
  };

  /**
   * @method 请求失败的返回结果
   * @param {*} code
   * @param {*} msg
   */
  ctx.error = function(code = 1000000, msg = "请求失败!") {
    ctx.body = {
      code: code,
      message: msg,
      desc: "",
      data: {},
    };
  };
  await next();
});

//路由
app.use(router.routes());

//未匹配到路由
app.use(async (ctx) => {
  ctx.error(404, `请求地址[${ctx.URL}]有误!`);
});

app.listen(9090, () => {
  console.log("模拟接口服务!监听接口9090");
});
