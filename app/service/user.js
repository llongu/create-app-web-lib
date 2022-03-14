const Service = require("egg").Service

class UserService extends Service {
	async index() {
		const res = await this.ctx.model.User.find({})
		return res
	}

	async add(data = {}) {
		return new Promise(async (resolve, reject) => {
			const userModel = await new this.ctx.model.User({
				...data,
				ident_type: 1,
			})
			userModel.save((err) => {
				err ? reject(err) : resolve({ success: true })
			})
		})
	}
	async query(data = {}) {
		return new Promise(async (resolve) => {
			const userPhone = await this.ctx.model.User.find({ phone:data.phone})
			if(!userPhone.length) {
				return resolve({
					errorCode:4000
				})
			}
			const userPwd = await this.ctx.model.User.find({ passWord:data.passWord })
			if(!userPwd.length) {
				return resolve({
					errorCode:4109
				})
			}
			resolve({
				queryResult:userPwd,
			})
		})
	}
}

module.exports = UserService
