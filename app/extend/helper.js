const {
	_cacheGet,
	_cacheSet,
	_response,
	_paginationQuery,
	_paginationGenerate,
	_paramsFilter
} = require("../utils/index")
const moment = require("moment")
module.exports = {
	relativeTime(time) {
		moment(new Date(time)).fromNow()
	},
	CacheGet(redis, key) {
		return _cacheGet(redis, key)
	},
	CacheSet(redis, key, val, timeout) {
		return _cacheSet(redis, key, val, timeout)
	},
	PaginationQuery(model, query, ctx) {
		return _paginationQuery(model, query, ctx)
	},
	Response({ ctx, code, data }) {
		return _response(ctx, code, data)
	},
	PaginationGenerate(query, total) {
		return _paginationGenerate(query, total)
	},
	paramsFilter(originParams,needParams) {
		return _paramsFilter(originParams,needParams)
	},
}
