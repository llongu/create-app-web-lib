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
	passWord: [
		{ required: true },
		{
			type: "string",
			message: "passWord 为4-12位字母数字组成",
			min: 4,
			max: 12,
			pattern: /^(?:\d+|[a-zA-Z]+)$/,
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
}
