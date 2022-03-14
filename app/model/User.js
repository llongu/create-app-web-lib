module.exports = (app) => {
	const mongoose = app.mongoose
	const { Schema } = mongoose
	const PostSchema = new Schema({
		userName: {
			type: String,
			required: false,
		},
		passWord: {
			type: String,
			required: true,
		},
		phone: {
			type: Number,
			required: true,
		},
		ident_type: {
			type: Number,
			required: true,
		},
	})

	return mongoose.model("user", PostSchema, "user")
}
