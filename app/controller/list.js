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

@Route("/list")
class ListController extends Controller {
	@HttpGet("/")
	async index() {
		const { ctx, app } = this
		const { Response, CacheSet, CacheGet } = ctx.helper
		const page = ctx.query.page || 1
		const newsList = await ctx.service.news.list(page)
		await Response(ctx, { newsList })
	}
}

module.exports = ListController
