module.exports = {
	_id: [
		{ required: true },
		{
			type: "string",
		},
	],
	ident_type: [
		{ required: true },
		{
			type: "string",
			message: "请输入正确的身份标识",
			pattern: /(1|2)/,
		},
	],
}
