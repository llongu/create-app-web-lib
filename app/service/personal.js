const { Service } = require("egg")

class UserService extends Service {
	async index() {
		const res = await this.ctx.model.User.find({})
		return res
	}

	async add(data = {}) {
		return new Promise(async (resolve, reject) => {
			const userModel = await new this.ctx.model.User({ ...data })
			userModel.save(function (err) {
				if (err) {
					reject(err)
				} else {
					resolve({ success: true })
				}
			})
		})
	}
	async query(data = {}) {
		return new Promise(async (resolve) => {
			const userModel = await this.ctx.model.User.find({ ...data })
			resolve(userModel)
		})
	}
	async updata(id, data = {}) {
		return new Promise(async (resolve) => {
			const userModel = await this.ctx.model.User.findOneAndUpdate(id, data)
			resolve(userModel)
		})
	}
	async modifyPassword(_id, data = {}) {
		return new Promise(async (resolve, reject) => {
			const userData = await this.ctx.model.User.find({ _id })
			if (userData[0].passWord !== data.passWord) {
				reject(4109)
			} else {
				const result = await this.ctx.model.User.findOneAndUpdate(_id, {
					passWord: data.n_passWord,
				})
				resolve(result)
			}
		})
	}
}

module.exports = UserService
