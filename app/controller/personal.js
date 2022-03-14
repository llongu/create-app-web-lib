const { Controller } = require("egg")
const { Route, HttpGet, HttpPost } = require("egg-decorator-router")
@Route("/api")
class PersonalController extends Controller {
	/**
	 * @api {get} /userInfo  用户信息
	 * @apiName userInfo
	 *  @apiDescription 用户信息
	 *
	 * @apiGroup  个人中心
	 * @apiVersion 1.0.0
	 *
	 * @apiSampleRequest /api/userInfo
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *     {
	 *          "code":0,
	 *          "msg":"操作成功",
	 *          "data":{
	 *                  "userName": "",
	 *                  "phone": 18282702074,
	 *                  "ident_type":2 //身份标识 1 普通 2 超管
	 *                }
	 *
	 */
	@HttpGet("/userInfo")
	async index() {
		const { ctx } = this
		const { Response } = ctx.helper
		// @ts-ignore
		const { uid } = ctx.request
		try {
			const queryResult = await ctx.service.personal.query({ _id: uid })
			if (!queryResult.length) return Response({ ctx, code: 2000 })
			const data = (({ userName, phone, ident_type }) => ({
				userName,
				phone,
				ident_type,
			}))(queryResult[0])
			Response({ ctx, data })
		} catch (error) {
			Response({ ctx, code: 2000, data: { error } })
		}
	}

	/**
	 * @api {get} /updata_userInfo 修改用户信息
	 * @apiName updata_userInfo
	 *  @apiDescription 修改用户信息
	 *
	 * @apiGroup  个人中心
	 * @apiVersion 1.0.0
	 *
	 * @apiParam {String} userName 用户名
	 * @apiParam {Number} ident_type 用户标识 1普通 2超管
	 * @apiSampleRequest /api/updata_userInfo
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *     {
	 *          "code":0,
	 *          "msg":"操作成功",
	 *          "data":{}
	 *
	 */
	@HttpPost("/updata_userInfo")
	async updataUserName() {
		const { ctx } = this
		const { Response } = ctx.helper
		// @ts-ignore
		const { body, uid } = ctx.request
		try {
			const validateResult = await ctx.validate("personal.updataUserInfo", body)
			if (!validateResult) return

			const queryResult = await ctx.service.personal.updata(uid, body)
			if (!Object.keys(queryResult).length) return Response({ ctx, code: 4000 })
			Response({ ctx })
		} catch (error) {
			Response({ ctx, code: 2000, data: { error } })
		}
	}

	/**
	 * @api {get} /modify_password 修改密码
	 * @apiName modify_password
	 *  @apiDescription 修改密码
	 *
	 * @apiGroup  个人中心
	 * @apiVersion 1.0.0
	 *
	 * @apiParam {String} passWord 密码
	 * @apiParam {String} n_passWord 新密码
	 * @apiParam {String} c_passWord 再次输入新密码
	 * @apiSampleRequest /api/modify_password
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *     {
	 *          "code":0,
	 *          "msg":"操作成功",
	 *          "data":{}
	 *
	 */
	@HttpPost("/modify_password")
	async modifyPassword() {
		const { ctx } = this
		const { Response } = ctx.helper
		// @ts-ignore
		const { body, uid } = ctx.request
		try {
			const validateResult = await ctx.validate("personal.modifyPassword", body)
			if (!validateResult) return
			if (body.n_passWord !== body.c_passWord)
				return Response({ ctx, code: 4107 })
			if (body.passWord === body.c_passWord)
				return Response({ ctx, code: 4106 })
			const queryResult = await ctx.service.personal.modifyPassword(uid, body)
			if (!Object.keys(queryResult).length) return Response({ ctx, code: 4000 })
			Response({ ctx })
		} catch (error) {
			if (typeof error === "number") return Response({ ctx, code: error })
			Response({ ctx, code: 2000, data: { error } })
		}
	}
}

module.exports = PersonalController
