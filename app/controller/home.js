const Controller = require("egg").Controller
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

@Route()
class HomeController extends Controller {
	/**
	 * @api {get} /home  示例接口
	 * @apiName home
	 *  @apiDescription 这是示例接口
	 *
	 * @apiGroup  首页模块
	 * @apiVersion 1.0.0
	 *
	 * @apiParam {String} testId 测试id，默认0,字符串类型，没有不传
	 * @apiHeader {String} token
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
	@HttpGet("/")
	@HttpGet("/api/home")
	async index() {
		await this.ctx.render("home/index.tpl")
		// this.ctx.body = {
		// 	status: 0,
		// 	msg: "成功",
		// 	data: {
		// 		text: "Hello world",
		// 	},
		// }
	}
}

module.exports = HomeController
