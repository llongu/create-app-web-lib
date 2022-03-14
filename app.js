module.exports = (app) => {
	app.beforeStart(async () => {
		// console.log(app.mongoose)
		// 从配置中心获取 MySQL 的配置
		// { host: 'mysql.com', port: '3306', user: 'test_user', password: 'test_password', database: 'test' }
		// await app.mongoose.sync({ force: true })
	})
}
