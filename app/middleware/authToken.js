const jwt = require("jsonwebtoken")
const noCheckToken = require("../../config/noCheckToken")
module.exports = (options, app) => {
	return async function authTokenMiddleware(ctx, next) {
		const { Response, CacheGet } = ctx.helper
		try {
			// no token
			const flag = noCheckToken.includes(ctx.url)
			if (flag) return await next()
			const token = ctx.request.header.token || undefined
			if (!token) return Response({ ctx, code: 401, data: { error: "请登录" } })
			const decode = jwt.verify(token, ctx.app.config.jwt.secret)
			// @ts-ignore
			ctx.request.uid = decode.uid.replace("admin", "")
			// @ts-ignore
			const redisToken = await CacheGet(app.redis, decode.uid)
			if (token !== redisToken)
				return Response({ ctx, code: 4112, data: { error: "当前登录已失效" } })
			await next()
		} catch (error) {
			Response({ ctx, code: 6160, data: { error, tip: "token验证错误" } })
		}
	}
}
