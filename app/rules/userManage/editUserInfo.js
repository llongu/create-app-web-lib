module.exports = {
	userName: [
		{ required: true },
		{
			type: "string",
			message: "userName 为2-8位组成",
			min: 2,
			max: 8,
		},
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
