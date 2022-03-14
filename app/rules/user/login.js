module.exports = {
	passWord: [
		{ required: true },
		{ type: "string", message: "passWord 必须为字符串" },
	],
	phone: [
		{ required: true },
		{
			type: "string",
			len: 11,
			message: "phone 必须为1开头的11位的数字",
			pattern: /^1\d{10}$/,
		},
	],
}
