module.exports = (app) => {
	const mongoose = app.mongoose
	const { Schema } = mongoose
	const PostSchema = new Schema({
		name: { type: String, required: true,},
		npmName: { type: String, required: true,},
		npmLink: { type: String, required: true,},
		version: { type: String, required: true,},
		platformType: { type: String, required: true},
		farmeworkType: { type: String, required: true},
		installCommand: { type: String, required: true,},
		startCommand: { type: String, required: true,},
		createAuthor: { type: String, required: true,},
		editor: { type: String, required: true,},
		createTime: { type: String, required: true,},
		changeTime: { type: String, required: true,}
	})

	return mongoose.model("componentsManage", PostSchema, "componentsManage")
}
