const { Controller } = require("egg")
const jwt = require("jsonwebtoken")
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

@Route("/api")
class UserController extends Controller {
	@HttpGet("/user")
	async index() {
		const { ctx, app } = this
		const { PaginationQuery, Response, PaginationGenerate } = this.ctx.helper
		try {
			const err = ctx.validate("user.list", ctx.query)
			if (err) {
				Response(ctx, 2000, `${err[0].field} is ${err[0].message}`)
			} else {
				const Query = { userName: ctx.query.userName }

				await PaginationQuery(ctx.model.User, Query, ctx)
					.then(({ list, total }) => {
						const pagination = PaginationGenerate(ctx.query, total)
						Response(ctx, { list, pagination })
					})
					.catch((err) => {
						Response(ctx, 2000, err || "请求失败")
						throw err
					})
			}
		} catch (error) {
			Response(ctx, 2000, error || "请求失败")
		}
	}

	/**
	 * @api {post} /login
	 * @apiName /login
	 *  @apiDescription 登录
	 *
	 * @apiGroup  登录
	 * @apiVersion 1.0.0
	 *
	 * @apiParam {String} phone 手机号 1开头 11位
	 * @apiParam {String} passWord 密码
	 * @apiSampleRequest /login
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data token
	 * @apiSuccessExample {json} Success-Response:
	 *     {
	 *          "code":0,
	 *          "msg":"操作成功",
	 *          "data":{
	 *                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzV29yZCI6IjUyMDUyMCIsInBob25lIjoiMTgyODI3MDIwNzQiLCJ1aWQiOiJhZG1pbjYwY2Q1NWI1YjQ3ZjlkMzllYzJmZDViZSIsImlhdCI6MTYyNDI1ODkyNiwiZXhwIjoxNjI0MzQ1MzI2fQ.oUiMqxp3D3EIdJzW0JDrf8pF2LAOgndw4pQoRRyyVyw"
	 *           }
	 *      }
	 *
	 */
	@HttpPost("/login")
	async login() {
		const { ctx, app } = this
		const { Response, CacheSet } = ctx.helper
		try {
			const validateResult = await ctx.validate("user.login", ctx.request.body)
			if (!validateResult) return
			const {queryResult,errorCode} = await ctx.service.user.query(ctx.request.body)
			console.log('%c 🍸 queryResult: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', queryResult);
			if(errorCode){
				return Response({ ctx, code: errorCode })
			}
			const payload = { ...ctx.request.body, uid: `admin${queryResult[0]._id}` }
			// 签发 token
			const token = jwt.sign(payload, app.config.jwt.secret, {
				expiresIn: "1 days",
			})
			// set redis
			await CacheSet(app.redis, `admin${queryResult[0]._id}`, token, 86400)
			// 响应token
			Response({ ctx, data: { token } })
		} catch (error) {
			
			Response({ ctx, code: 2000, data: { error } })
		}
	}

	/**
	 * @api {post} /regist
	 * @apiName /regist
	 *  @apiDescription 注册
	 *
	 * @apiGroup  注册
	 * @apiVersion 1.0.0
	 *
	 * @apiParam {String} phone 手机号 1开头 11位
	 * @apiParam {String} passWord 密码
	 * @apiParam {String} userName 用户名
	 * @apiSampleRequest /regist
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *     {
	 *          "code":0,
	 *          "msg":"操作成功",
	 *          "data":{}
	 *      }
	 *
	 */
	@HttpPost("/regist")
	async regist() {
		const { ctx } = this
		const { Response } = ctx.helper
		try {
			const validateResult = await ctx.validate("user.regist", ctx.request.body)
			if (!validateResult) return
			const queryResult = await ctx.service.user.query({
				phone: ctx.request.body.phone,
			})

			if (queryResult.length) return Response({ ctx, code: 4101 })

			const result = await ctx.service.user.add(ctx.request.body)
			if (result.success) return Response({ ctx })
			Response({ ctx, code: 4002 })
		} catch (error) {
			Response({ ctx, code: 2000, data: { error } })
		}
	}
}

module.exports = UserController
