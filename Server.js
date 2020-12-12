var koa = require("koa");
var fs = require("fs");
var path = require("path");
var router = require("koa-router")();
var static = require("koa-static");
const { resolve } = require("path");
var koaBody = require("koa-body");
var cors = require('koa2-cors');
// var bodyParser = require("koa-bodyparser");
var app = new koa();
const uploadUrl = "http://hocalhost:9000/public/upload";
// app.use(static(path.join(__dirname, "pubic")));
// app.use(bodyParser());
let curRole="editor"
const roles=["editor",'admin']
// app.use(cors({
//   origin: function (ctx) {
//     return ctx.header.origin
//   }, // 允许发来请求的域名
//   allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 设置所允许的 HTTP请求方法
//   credentials: true, // 标示该响应是合法的
// }));
// app.use(async (ctx, next) => {
//   ctx.set("Access-Control-Allow-Origin", "*")
//   next()
// })
app.use(
  koaBody({
    multipart: true,
    strict:false,//设为false
    formidable: {
      uploadDir: "public/upload",
      maxFieldsSize: 15 * 1024 * 1024,
      keepExtensions: true
      // multipart: true,
    },
  })
);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(static(path.join(__dirname, "pubic")));


// app.use(htmlRender())

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve(), ms));
router.get("/", async (ctx) => {
  ctx.body = "欢迎进入首页";
  //   ctx.response.type = "html";
  //   await sleep(3000);
  // await ctx.html("index.html")
  //   ctx.body = fs.createReadStream(__dirname + "/dist/index.html");
  // ctx.body=require("./dist/index.html")
});
//登录
// router.get("/api/login", async (ctx) => {
//   console.log("ctx.body:",ctx.request)
//   ctx.body = {
//     code: 0,
//     data: {
//       roles:['admin']
//     },
//     message: "上传成功"
//   };
// });


router.get("/userInfo", async (ctx) => {
  console.log("curRole:",curRole)
  let data = {
    name: "ccoc",
    age: 20,
    gender: "formal",
    goin: 100,
    roles:[`${curRole}`]
  };
  ctx.body = {
    ...data,
    code: 0,
    message: "ok"
  };
});
//图片上传POST
// router.post("/upload", async (ctx) => {
//   // let files = ctx.files.file;
//   console.log("files:", ctx.request.files);
//   // 上传单个文件
//   const file = ctx.request.files.file;
//   // console.log("files:", ctx.request.files.file);

//   // 获取上传文件
//   // 创建可读流
//   // const reader = fs.createReadStream(file.path);
//   // let filePath = path.join(__dirname, `/pubic/upload/${file.name}`);
//   // console.log("filePath:", filePath);
//   // 创建可写流
//   // const upStream = fs.createWriteStream(filePath);
//   // 可读流通过管道写入可写流
//   // reader.pipe(upStream);
//   ctx.response.body = {
//     url: uploadUrl + `${file.name}`, //返给前端一个url地址
//     code: 0,
//     message: "上传成功"
//   };

// });

//图片上传PUT
router.put("/upload", async (ctx) => {
  console.log("files:", ctx.request.files);
  // 上传单个文件
  const file = ctx.request.files.file;
  ctx.response.body = {
    url: uploadUrl + `${file.name}`, //返给前端一个url地址
    code: 0,
    message: "上传成功"
  };
});

router.post("/login", async (ctx) => {
  console.log("ctx:", ctx.request.body)
  let { username, password } = ctx.request.body
  console.log("username:",username)
  curRole = username;
  console.log("login后：",curRole)
  // if (username == "abc" && password == 123) {
  let data = {
      token:"123123123",
      code: 0,
      message: "登录成功"
    }
  // } else {
  //   data = {
  //     data: {},
  //     code: 1,
  //     message: "该用户尚未注册"
  //   }
  // }
  ctx.response.body = data
})
router.post("/api/getList", async (ctx) => {

  let arr = [
    { name: "aa", age: 12 },
    { name: "cbbc", age: 22 },
    { name: "cc", age: 32 },
    { name: "dd", age: 42 },
  ]
  ctx.response.body = {
    data: arr,
    code: 0,
    message: "上传成功"
  };
})

router.get("/getPic", async (ctx) => {

  let url = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602305871027&di=2fa5a0d1c31da1eaa083fed9162566e2&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190801%2Ff2565bb64ec4420ab10bcbd711d9282a.jpeg"
  ctx.response.body = {
    url,
    code: 0,
    message: "上传成功"
  };

})

router.put("/api/getdetailData", async (ctx) => {
  console.log("ctx.request",ctx)
  let url = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602305871027&di=2fa5a0d1c31da1eaa083fed9162566e2&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190801%2Ff2565bb64ec4420ab10bcbd711d9282a.jpeg"
  ctx.response.body = {
    url,
    code: 0,
    message: "ok"
  };

})
router.put("/api/getTableData", async (ctx) => {
  console.log("ctxp--query.pageSize:", ctx.request.body)
  // let { pageSize } = ctx.request.query;
  let { pageSize } = ctx.request.body;
  console.log("pageSize:", pageSize)

  let arr=[]
  if (pageSize == 1) {
    console.log("pageSize-==1")
    for (let i = 0; i < 10; i++) {
        let time=new Date().getDate()
        arr.push({
          date: time,
          name: '第一个',
          age:10
        })
    }
  } else if (pageSize == 2) {
    console.log("pageSize-==2")

    for (let i = 0; i < 10; i++) {
      let time=new Date().getDate()
      arr.push({
        date: time,
        name: '第二个',
        age:20
      })
    }    

  } else { 
    for (let i = 0; i < 10; i++) {
      console.log("pageSize-==3")

      let time=new Date().getDate()
      arr.push({
        date: time,
        name: '第三个',
        age:30
      })
    }    
  }  
  ctx.response.body = {
    data: arr,
    total: 30,
    // data: { data: arr ,total:30},
    code: 0,
    message: "ok"
  };
})

//更改施工项

router.get("/api/bind", async (ctx) => { 
  console.log("ctx.request.body:",ctx.body.query)
  ctx.response.body = {
    code: 0,
    message: "ok"
  };

})

//del接口
router.delete("/api/del", async (ctx) => { 
  console.log("ctxp--params:", ctx.request.query.id)
  ctx.response.body = {
    code: 0,
    message: "ok"
  };
})


app.listen(9090, () => {
  console.log("监听成功");
});
