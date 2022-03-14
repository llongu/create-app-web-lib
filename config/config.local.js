const mongoosedb = require("./db")
module.exports = {
	mongoose: {
		...mongoosedb.dev,
	},
	redis: {
		client: {
			...mongoosedb.redis_dev,
		},
	},
}
