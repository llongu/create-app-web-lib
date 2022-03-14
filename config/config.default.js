require("./global")
const mongoosedb = require("./db")
const onerror = require("./onerror")
module.exports = {
	keys: "my-cookie-secret-key",
	cluster: {
		listen: {
			path: "",
			port: 7002,
			hostname: "0.0.0.0",
		},
	},
	view: {
		defaultViewEngine: "nunjucks",
		mapping: {
			".tpl": "nunjucks",
		},
	},
	security: {
		csrf: {
			enable: false,
		},
	},
	news: {
		pageSize: 5,
		serverUrl: "https://hacker-news.firebaseio.com/v0",
	},
	middleware: ["authToken","notfoundHandler"],
	robot: {},
	validatePlus: {
		resolveError(ctx, errors) {
			if (errors.length) {
				ctx.type = "json"
				ctx.code = 400
				ctx.body = {
					code: 400,
					error: errors,
					msg: "参数错误",
				}
			}
		},
	},
	cors: {
		origin: "*",
		allowMethods: "GET,HEAD,POST,PUT,DELETE,PATCH",
	},
	jwt: {
		secret: "Zseng18@A&jshbf23",
		ignore: [], //忽略路由
	},
	onerror,
	// redis
	redis: {
		client: {
			...mongoosedb.redis_build,
		},
	},
	mongoose: {
		...mongoosedb.build,
	},
}
