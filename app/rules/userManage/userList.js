module.exports = {
	ident_type: [
		{ required: true },
		{
			type: "string",
			message: "请输入正确的身份标识",
			pattern: /(1|2)/,
		},
	],
	current: [
		{ required: true },
		{
			type: "string",
			message: "请输入分页",
		},
	],
	pageSize: [
		{ required: true },
		{
			type: "string",
			message: "请输入页码",
		},
	],
}
