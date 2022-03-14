module.exports = {
	dev: {
		url: "mongodb://127.0.0.1:27017/eggBase",
		force: true,
		options: {
			poolSize: 40,
		},
	},
	build: {
		url: "",
		options: {
			poolSize: 40,
		},
	},
	redis_dev: {
		port: 6379,
		host: "127.0.0.1",
		password: "",
		db: 0,
	},
	redis_build: {
		port: 6379,
		host: "127.0.0.1",
		password: "",
		db: 0,
	},
}
