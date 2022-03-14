const msgCode = require("../../config/code")
/**
 * @name:_isType 类型判断函数
 * @param {*} props 需要验证得对象
 * @param {*} type 需要的类型
 * @return {*} Boolean
 */
const _isType = (props, type) => {
	const calls = Object.prototype.toString.call(props)
	const _type = calls.slice(calls.indexOf(" ") + 1, calls.length - 1)
	return type === _type ? true : false
}

/**
 * @name: _comparison 比较函数
 * @param {*} current 当前元素
 * @param {*} prior 前一个元素
 * @param {*} type 类型
 * @param {*} _default 默认值
 */
const _comparison = (current, prior, type, _default) =>
	_isType(current, type) ? current : _isType(prior, type) ? prior : _default

/**
 * @name: _response 接口响应函数
 * @param {Object} ctx ctx对象
 * @param {Number} code  响应code  default 1000
 * @param {Object} data  响应数据   default {}
 */
const _response = (ctx, code, data = {}) => {
	const defaultCode = _isType(code, "Number") ? code : 1000
	const defaultData = _comparison(data, code, "Object", {})
	if ((code && _isType(code, "Object") && data.error) || (data && data.error)) {
		defaultData.error = String(defaultData.error)
	}
	return (ctx.body = {
		code: defaultCode,
		data,
		msg: msgCode[defaultCode.toString()],
	})
}

/**
 * @name: _pagination 分页生成函数
 * @return {*} 分页对象
 */
const _paginationGenerate = (query, total) => {
	return {
		current: Number(query.current) || 1,
		pageSize: Number(query.pageSize) || 10,
		total: Number(total) || 0,
	}
}

/**
 * @name:_paginationQuery_options
 * @param {*} ctx 分页查询 具体条数 跳过查询条数
 * @return {*} 分页查询条件对象
 */
const _paginationQueryOptions = ({pageSize,current}) => ({
	limit: Number(pageSize) || 10,
	skip: Number(pageSize) * (Number(current) - 1) || 0,
})

// 分页检查
const _currentPageCheck = ({pageSize,current}, total) => {
	if (current && pageSize)
		return Math.ceil(total / Number(pageSize)) >= Number(current)
	return true
}

/**
 * @name:PaginationQuery 分页查 询
 * @param {Object} model  model对象
 * @param {Object} query  请求参数
 * @param {Object} ctx  ctx
 */
const _paginationQuery = (model, oldQuery={}, ctx) => {
	return new Promise(async (resolve, reject) => {
		try {
			const query = {...oldQuery}
			const {pageSize=10,current=1} = query
			delete query.pageSize
			delete query.current
			await model.find(query, async (err, res) => {
				if (err) return reject(err)
				if (res && !res.length) return resolve({})
				const total = (res && res.length) || 0
				await model.find(
					query,
					null,
					_paginationQueryOptions({
						pageSize,
						current
					}),
					(e, list) => {
						if (e) return reject(e)
						if (!_currentPageCheck({
							pageSize,
							current
						}, total))
							return reject("分页参数错误")
						resolve({ list, total })
					}
				)
			})
		} catch (error) {
			reject(error)
		}
	})
}

/**
 * @name: redis set
 * @param {*} redis
 * @param {*} key
 * @param {*} val
 * @param {*} timeout 过期时间,单位 s, 默认 1h
 */
const _cacheSet = (redis, key, val, timeout = 60 * 60) => {
	let formatVal
	if (typeof val === "string") {
		formatVal = val
	} else {
		formatVal = JSON.stringify(val)
	}
	redis.set(key, formatVal)
	redis.expire(key, timeout)
}
/**
 * @name: redis get
 * @param {*} redis
 * @param {*} key
 */
const _cacheGet = (redis, key) => {
	return new Promise((resolve, reject) => {
		redis.get(key, (err, val) => {
			if (err) return reject(err)
			if (!val) return resolve(null)
			try {
				resolve(JSON.parse(val))
			} catch (error) {
				resolve(val)
			}
		})
	})
}

/**
 * 过滤掉不需要的参数
 * @param {object} originParams  查询参数  {name:'名称',age:18}
 * @param {object | Array} needParams  需要的参数 {age:any} || ['age']
 * @return {object} newParams 过滤后的参数 {age:18}
 */
const _paramsFilter=(originParams={},needParams={}) =>{
	const newParams={}
	let newNeedParams={}
	if(Array.isArray(needParams)){
		newNeedParams=[...newParams]
	}else if(typeof needParams==='object'){
		newNeedParams=Object.keys(needParams)
	}else{
		 throw new Error('needParams type error')
	}
	newNeedParams.forEach(params=>{
		if(originParams[params]){
			newParams[params]=originParams[params]
		}
	})
	return newParams
}
module.exports = {
	_isType,
	_cacheSet,
	_cacheGet,
	_response,
	_comparison,
	_paginationQuery,
	_paginationGenerate,
	_paramsFilter
}
