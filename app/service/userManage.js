const { Service } = require("egg")

class UserManageService extends Service {
	async index() {
		const res = await this.ctx.model.User.find({})
		return res
	}

	async add(data = {}) {
		return new Promise(async (resolve, reject) => {
			const userModel = await new this.ctx.model.User({
				...data,
				passWord: "520520",
			})
			userModel.save((err) => {
				err ? reject(err) : resolve({ success: true })
			})
		})
	}
	async paginationQuery(data = {}) {
		const { ctx } = this
		return ctx.helper.PaginationQuery(ctx.model.User, data, ctx)
	}
	async query(data = {}) {
		return new Promise(async (resolve, reject) => {
			try {
				const userModel = await this.ctx.model.User.find({ ...data })
				resolve(userModel)
			} catch (error) {
				reject(error)
			}
		})
	}
	async editUserInfo(data) {
		const { _id, ident_type, phone, userName } = data
		return new Promise(async (resolve, reject) => {
			try {
				const userModel = await this.ctx.model.User.find({ _id })
				if (!userModel || !userModel.length) return reject(4000)
				const result = await this.ctx.model.User.findOneAndUpdate(_id, {
					phone,
					userName,
					ident_type,
				})
				resolve(result)
			} catch (error) {
				reject(error)
			}
		})
	}
	async deleteUser(data) {
		return new Promise(async (resolve, reject) => {
			try {
				const userModel = await this.ctx.model.User.find(data)
				if (!userModel.length) return reject(4000)
				const result = await this.ctx.model.User.remove(data)
				resolve(result)
			} catch (error) {
				console.log(error)
				reject(error)
			}
		})
	}
}

module.exports = UserManageService
