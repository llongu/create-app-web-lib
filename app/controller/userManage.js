const { Controller } = require("egg")
const { Route, HttpGet, HttpPost } = require("egg-decorator-router")
@Route("/api/userManage")
class UserManageController extends Controller {
	
	/**
	 * @api {get} /userManage/userList 用户列表
	 * @apiName userList
	 *  @apiDescription 用户列表
	 *
	 * @apiGroup  用户管理
	 * @apiVersion 1.0.0
	 *
	 * @apiHeader {String} token
	 * @apiParam {Number} current 页码
	 * @apiParam {Number} pageSize 每页条数
	 * @apiParam {Number} ident_type 用户标识 1普通 2超管
	 * @apiSampleRequest /userManage/userList
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *     {
	 *          "code":0,
	 *          "msg":"操作成功",
	 *          "data":{
	 *            "list": [
	 *                     {
	 *                     "_id": "60d1b29165fc2e3a8cf8920f",
	 *                     "userName": "",
	 *                     "phone": 18282702074,
	 *                     "ident_type": 2,
	 *                      }
	 *                    ],
	 *                     "pagination": {
	 *                     "current": 1,
	 *                     "pageSize": 10,
	 *                     "total": 1
	 *                     }
	 *                }
	 *
	 */
	@HttpGet("/userList")
	async index() {
		const { ctx } = this
		const { query } = ctx
		const { Response, PaginationGenerate } = ctx.helper
		try {
			const validateResult = await ctx.validate("userManage.userList", query)
			if (!validateResult) return
			const Result = await ctx.service.userManage.paginationQuery({
				ident_type: Number(query.ident_type),
			})
			const { total, list = [] } = Result
			if (!Result || !list.length) return Response({ ctx })
			const parma = (({ current, pageSize }) => ({ current, pageSize }))(query)
			const pagination = PaginationGenerate(parma, total)
			const listTree = list.map((i) => {
				const item = (({ _id, userName, ident_type, phone }) => ({
					_id,
					userName,
					ident_type,
					phone,
				}))(i)
				return item
			})
			Response({ ctx, data: { list: listTree, pagination } })
		} catch (error) {
			Response({ ctx, code: 2000, data: { error } })
		}
	}

	/**
	 * @api {get} /userManage/userInfo 用户信息
	 * @apiName userInfo
	 *  @apiDescription 用户信息
	 *
	 * @apiGroup  用户管理
	 * @apiVersion 1.0.0
	 *
	 * @apiHeader {String} token
	 * @apiParam {String} _id id
	 * @apiParam {Number} ident_type 身份标识
	 * @apiSampleRequest /userManage/userInfo
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *     {
	 *          "code":0,
	 *          "msg":"操作成功",
	 *          "data":{
	 *                     "_id": "60d1b29165fc2e3a8cf8920f",
	 *                     "userName": "",
	 *                     "phone": 18282702074,
	 *                     "ident_type": 2,
	 *                }
	 *
	 */
	@HttpGet("/userInfo")
	async userInfo() {
		const { ctx } = this
		const { query } = ctx
		const { Response } = ctx.helper
		try {
			const validateResult = await ctx.validate("userManage.userInfo", query)
			if (!validateResult) return
			const queryResult = await ctx.service.userManage.query(query)
			if (!queryResult.length) return Response({ ctx, code: 4000 })

			const data = (({ _id, userName, ident_type, phone }) => ({
				_id,
				userName,
				ident_type,
				phone,
			}))(queryResult[0])
			Response({ ctx, data })
		} catch (error) {
			Response({ ctx, code: 2000, data: { error } })
		}
	}

	/**
	 * @api {post} /userManage/createUser 新增用户
	 * @apiName createUser
	 *  @apiDescription 新增用户
	 *
	 * @apiGroup  用户管理
	 * @apiVersion 1.0.0
	 *
	 * @apiHeader {String} token
	 * @apiParam {String} userName 用户名
	 * @apiParam {String} phone 手机号
	 * @apiParam {Number} ident_type 身份标识
	 * @apiSampleRequest /userManage/createUser
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息      默认创建的密码 520520
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *     {
	 *          "code":0,
	 *          "msg":"操作成功",
	 *          "data":{}
	 *     }
	 */
	@HttpPost("/createUser")
	async createUser() {
		const { ctx } = this
		const { Response } = ctx.helper
		const { body } = ctx.request

		try {
			const validateResult = await ctx.validate("userManage.createUser", body)
			if (!validateResult) return
			const parma = { phone: body.phone }
			const queryResult = await ctx.service.userManage.query(parma)
			if (queryResult.length) return Response({ ctx, code: 4101 })
			const result = await ctx.service.userManage.add(ctx.request.body)
			if (result.success) return Response({ ctx })
			Response({ ctx, code: 4002 })
		} catch (error) {
			Response({ ctx, code: 2000, data: { error } })
		}
	}

	/**
	 * @api {post} /userManage/editUserInfo 编辑用户信息
	 * @apiName editUserInfo
	 *  @apiDescription 编辑用户信息
	 *
	 * @apiGroup  用户管理
	 * @apiVersion 1.0.0
	 *
	 * @apiHeader {String} token
	 * @apiParam {String} userName 用户名
	 * @apiParam {String} phone 手机号
	 * @apiParam {String} ident_type 身份标识
	 * @apiParam {String} _id _id
	 * @apiSampleRequest /userManage/editUserInfo
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *     {
	 *          "code":0,
	 *          "msg":"操作成功",
	 *          "data":{}
	 *     }
	 */
	@HttpPost("/editUserInfo")
	async editUserInfo() {
		const { ctx } = this
		const { Response } = ctx.helper
		const { body } = ctx.request
		try {
			const validateResult = await ctx.validate("userManage.editUserInfo", body)
			if (!validateResult) return
			const queryResult = await ctx.service.userManage.editUserInfo(body)
			if (!Object.keys(queryResult).length) return Response({ ctx, code: 4000 })
			Response({ ctx })
		} catch (error) {
			if (typeof error === "number") return Response({ ctx, code: error })
			Response({ ctx, code: 2000, data: { error } })
		}
	}

	/**
	 * @api {post} /userManage/deleteUser 删除用户信息
	 * @apiName deleteUser
	 *  @apiDescription 删除用户信息
	 *
	 * @apiGroup  用户管理
	 * @apiVersion 1.0.0
	 *
	 * @apiHeader {String} token
	 * @apiParam {String} ident_type 身份标识
	 * @apiParam {String} _id _id
	 * @apiSampleRequest /userManage/deleteUser
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *     {
	 *          "code":0,
	 *          "msg":"操作成功",
	 *          "data":{}
	 *     }
	 */
	@HttpPost("/deleteUser")
	async deleteUser() {
		const { ctx } = this
		const { Response } = ctx.helper
		const { body } = ctx.request
		try {
			const validateResult = await ctx.validate("userManage.userInfo", body)

			if (!validateResult) return
			const queryResult = await ctx.service.userManage.deleteUser(body)
			if (!Object.keys(queryResult).length) return Response({ ctx, code: 4000 })
			Response({ ctx })
		} catch (error) {
			if (typeof error === "number") return Response({ ctx, code: error })
			Response({ ctx, code: 2000, data: { error } })
		}
	}
}

module.exports = UserManageController
