module.exports = {
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
	n_passWord: [
		{ required: true },
		{
			type: "string",
			message: "passWord 为4-12位字母数字组成",
			min: 4,
			max: 12,
			pattern: /^(?:\d+|[a-zA-Z]+)$/,
		},
	],
	c_passWord: [
		{ required: true },
		{
			type: "string",
			message: "passWord 为4-12位字母数字组成",
			min: 4,
			max: 12,
			pattern: /^(?:\d+|[a-zA-Z]+)$/,
		},
	],
}
