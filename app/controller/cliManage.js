const { Controller } = require("egg")
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
const jwt = require("jsonwebtoken")

@Route('/api/cli')
class CliManageController extends Controller {

	/**
	 * @api {get} /cli/query  列表查询
	 * @apiName query
	 *  @apiDescription 列表查询
	 *
	 * @apiGroup  脚手架模板管理
	 * @apiVersion 1.0.0
	 *	
	 * @apiHeader {String} token
	 * @apiParam {String} pageSize 分页大小 默认10  可选
	 * @apiParam {String} current 分页位置 默认1 可选
	 * @apiParam {String} name 模板名称   可选
	 * @apiSampleRequest /cli/query
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *    {
			"code": 1000,
			"data": {
				"result": {
				"list": [
                {
                    "_id": "60d191f68d33976184c7e89b",
                    "name": "test",
                    "npmName": "jyj-wx-h5",
                    "npmLink": "www.baidu.com",
                    "version": "1.0.0",
                    "platformType": "Web H5",
                    "farmeworkType": "vue",
                    "installCommand": "npm i",
                    "startCommand": "npm start",
                    "createAuthor": "ll",
                    "editor": "ll",
                    "createTime": "1624347126573",
                    "changeTime": "1624347126573",
                }
            ],
            "pagination": {
                "current": 1,
                "pageSize": 10,
                "total": 2
            }
       	 }
		},
			"msg": "操作成功"
		}
		*
	 */
	@HttpGet("/query")
	async query() {
        const { ctx, } = this
        const {Response,paramsFilter } = ctx.helper
		try {
			const validateResult = await ctx.validate("cliManage.query", ctx.query)
            if (!validateResult) return
			const newQuery=paramsFilter(ctx.query,require("../rules/cliManage/query"))
			//模糊查询字段
			if(newQuery.name){
				newQuery.name=new RegExp(newQuery.name,'i')
			}
            const result = await ctx.service.cliManage.query(newQuery)
            Response({ctx, data:{ result }})
		} catch (error) {
			Response({ctx, code:2000, data:{error}})
		}
	}

	/**
	 * @api {post} /cli/add  新增
	 * @apiName add
	 *  @apiDescription 列表新增
	 *
	 * @apiGroup  脚手架模板管理
	 * @apiVersion 1.0.0
	 *	
	 * @apiHeader {String} token
	 * @apiParam {String} name 模板名称
	 * @apiParam {String} npmName npm包名
	 * @apiParam {String} npmLink npm链接   
	 * @apiParam {String} version 版本   
	 * @apiParam {String} platformType 必须为Web H5','Web PC','Wechat Mini Program','App Hybrid' 中一个
	 * @apiParam {String} farmeworkType 技术框架   
	 * @apiParam {String} installCommand 安装命令   
	 * @apiParam {String} startCommand 启动命令 
	 * @apiSampleRequest /cli/add
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *  {
			"code": 1000,
			"data": {
				"result": true
       		 },
			"msg": "操作成功"
		}
		*
	 */
	@HttpPost("/add")
	async add() {
        const { ctx, } = this
        const {Response } = ctx.helper
		try {
			const validateResult = await ctx.validate("cliManage.add", ctx.request.body)
            if (!validateResult) return
			 //获取创建人 createAuthor
            //获取编辑人 editor
            //获取创建时间 createTime
            //获取编辑时间 changeTime
            const decode = jwt.verify(ctx.header.token, ctx.app.config.jwt.secret)
            const {phone}=decode
            ctx.request.body['createAuthor']=phone
            ctx.request.body['editor']=phone
            ctx.request.body['createTime']=new Date().getTime()
            ctx.request.body['changeTime']=new Date().getTime()
			
            const result = await ctx.service.cliManage.add(ctx.request.body)
            Response({ctx, data:{ result }})
		} catch (error) {
			Response({ctx, code:2000, data:{error}})
		}
	}


	/**
	 * @api {post} /cli/update  编辑
	 * @apiName update
	 * @apiDescription 列表编辑
	 *
	 * @apiGroup  脚手架模板管理
	 * @apiVersion 1.0.0
	 *	
	 * @apiHeader {String} token
	 * @apiParam {String} id 模板id
	 * @apiParam {String} name 模板名称
	 * @apiParam {String} npmName npm包名
	 * @apiParam {String} npmLink npm链接   
	 * @apiParam {String} version 版本   
	 * @apiParam {String} platformType 必须为Web H5','Web PC','Wechat Mini Program','App Hybrid' 中一个
	 * @apiParam {String} farmeworkType 技术框架   
	 * @apiParam {String} installCommand 安装命令   
	 * @apiParam {String} startCommand 启动命令 
	 * @apiSampleRequest /cli/update
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *  {
			"code": 1000,
			"data": {
				"result": true
       		 },
			"msg": "操作成功"
		}
		*
	 */
	@HttpPost("/update")
	async update() {
		const { ctx, } = this
		const {Response } = ctx.helper
		try {
			const validateResult = await ctx.validate("cliManage.update", ctx.request.body)
			if (!validateResult) return
			//创建人和时间 不可修改
			//获取编辑人 editor
			//获取编辑时间 changeTime
			const decode = jwt.verify(ctx.header.token, ctx.app.config.jwt.secret)
			const {phone}=decode
			ctx.request.body['editor']=phone
			ctx.request.body['changeTime']=new Date().getTime()
			
			const result = await ctx.service.cliManage.update(ctx.request.body)
			Response({ctx, data:{ result }})
		} catch (error) {
			Response({ctx, code:2000, data:{error}})
		}
	}


	/**
	 * @api {post} /cli/delete  删除 (批量)
	 * @apiName delete
	 * @apiDescription 列表删除
	 *
	 * @apiGroup  脚手架模板管理
	 * @apiVersion 1.0.0
	 *	
	 * @apiHeader {String} token
	 * @apiParam {String|Array[String]}  id 模板id:   "id" || ["id1","id2"]
	 * @apiSampleRequest /cli/delete
	 *
	 * @apiSuccess {Number} code 状态码.  1000  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data
	 * @apiSuccessExample {json} Success-Response:
	 *  {
			"code": 1000,
			"data": {
				"result": true
       		 },
			"msg": "操作成功"
		}
		*
	 */
	@HttpPost("/delete")
	async delete() {
		const { ctx, } = this
		const {Response } = ctx.helper
		try {
			const validateResult = await ctx.validate("cliManage.delete", ctx.request.body)
			if (!validateResult) return
			const result = await ctx.service.cliManage.delete(ctx.request.body)
			Response({ctx, data:{ result }})
		} catch (error) {
			Response({ctx, code:2000, data:{error}})
		}
	}


}

module.exports = CliManageController
