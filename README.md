### 说明

1. 基于EggJS开发 (注册、登录、列表增删改查)
2. 数据存储 `mongoDB`
3. 登录存储 `JsonWebToken  Redis`
4. 请求参数检验 `egg-validate-plus` 
5. 路由装饰器 `egg-decorator-router`
5. 根据代码生成接口文档 `apiDoc`  

### 本地安装运行 

1. 安装 [mongoDB](https://www.mongodb.com/try/download/community)

   运行 `mongod.exe` 

   项目 `db.js` 配置 `mongodb://127.0.0.1:27017` 
    
   运行 `mongDB Compass` 连接 `mongodb://127.0.0.1:27017` 

   创建数据库 命名 **eggBase** ,导入目录 eggBase 下 Collection

2. 安装 [redis](https://github.com/tporadowski/redis/releases)

   运行 `redis-server.exe`

   项目 `db.js` 配置 redis 端口

3. apiDoc 

    `npm install -g apidoc`

4. 启动项目 

   `npm install`

   `npm run dev `

   `npm run test` or `npm run cov`
   
### 目录结构

```lua
  egg-cli-admin-server
  ├── package.json
  ├── app
  │   ├── controller (控制器)
  │   ├── extend (插件)
  │   ├── middleware (中间件)
  │   ├── model (数据链接)
  │   ├── public (资源文件)
  │   ├── rules (参数校验)
  │   ├── service (接口服务)
  │   ├── utils (工具类)
  │   ├── view (视图模板)
  │   └── router.js (未用)
  │
  ├── config
  |   ├── plugin.js (插件配置)
  |   ├── config.default.js (默认环境配置)
  │   ├── config.local.js (开发环境配置)
  │   ├── db.js (数据库配置)
  │   ├── onerror (报错处理)
  │   └── global (全局变量配置)
  │
  ├── logs (egg日志)
  │
  └── test
      └── app
          ├── middleware （中间件测试）
          └── controller （控制器测试）
          └── serivce （接口测试）

```

### 单元测试

test 目录为存放所有测试脚本的目录

测试脚本文件统一按 ${filename}.test.js 命名，必须以 .test.js 作为文件后缀。

```lua
  test
  ├── controller
  │   └── home.test.js
  └── service
      └── user.test.js
```

### 路由配置

- #### egg-decorator-router 使用

```js
const {
	Route,
	HttpAll,
	HttpGet,
	HttpPost,
	HttpPut,
	HttpPatch,
	HttpDelete,
	Middleware,
} = require("egg-decorator-router")

/*
   @Route() 挂载根路径
   @HttpGet('/') 配置get请求方法路径
 */
@Route()
class HomeController extends Controller {
	@HttpGet("/")
	async index() {
		this.ctx.body = {
			code: 0,
			msg: "成功",
			data: {
				text: "Hello world",
			},
		}
	}
}
```

### 接口处理

- #### request 请求参数校验 egg-validate-plus

`app/rule/` 目录下创建文件 `user/login.js`

```js
module.exports = {
	name: [{ required: true }, { type: "string", message: "name 必须为字符串" }],
	age: [{ required: true }, { type: "string", message: "age 必须为字符串" }],
}
```

`app/controller/xxx.js` 文件使用

```js
const validateResult = await this.ctx.validate("user.login", this.ctx.query)
if (!validateResult) return
```

- #### response 响应格式

```js
this.ctx.body = {
	code: 0,
	msg: "message",
	data: {},
}
```

### 代码运行日志收集，适用于 catch 代码 或其他场景

```js
this.ctx.logger.info("信息")
this.ctx.logger.warn("警告")
this.ctx.logger.error("失败")
```

### 接口文档生成

- #### 全局安装

  `npm install apidoc -g `

- #### 使用 `app/controller/xxx.js` 方法头部写上注释

```js

/**
 * @api {get} /home  示例接口
 * @apiName home
*  @apiDescription 这是示例接口
 *
 * @apiGroup  首页模块
 * @apiVersion 1.0.0
 *
 * @apiParam {String} testId 测试id，默认0,字符串类型，没有不传
 * @apiSampleRequest /home
 *
 * @apiSuccess {Number} status 状态码.  0  成功
 * @apiSuccess {String} msg 提示信息
 * @apiSuccess {Object} data
 * @apiSuccessExample {json} Success-Response:
 *     {
  *          "status":0,
  *          "msg":"成功",
  *          "data":{
  *              text: 'Hello world'
  *           }
  *      }
 *
 */
@HttpGet('/')
@HttpGet('/api/home')
async index() {
  this.ctx.body ={
    status :0,
    msg:'成功',
    data:{
       text: 'Hello world'
    },
  }
}

```

- #### 文档生成

  运行：`npm run apidoc`

  生成路径：`public/apidoc`

  地址访问：`http://127.0.0.1:7002/public/apidoc/index.html`

  访问接口文档自动生成或更新：`http://127.0.0.1:7002/api/updateApiDoc`

  ![avatar](/apiDoc.png)
