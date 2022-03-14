module.exports = {
	id: [{ required: true , type: "string", message: "id 必须为字符串" }],
	name: [{ required: true , type: "string", message: "name 必须为字符串" }],
	npmName: [{ required: true , type: "string", message: "npmName 必须为字符串" }],
	npmLink: [{ required: true , type: "string", message: "npmLink 必须为字符串" }],
	version: [{ required: true , type: "string", message: "version 必须为字符串" }],
	platformType: [{ required: true , type: "string", validator(rule, value, callback, source, options) {
        const pattern = ['Web H5','Web PC','Wechat Mini Program','App Hybrid'];
        if (pattern.includes(value)) {
          callback(); // 验证通过
          return; 
        }
        callback({ message: `platformType 必须为Web H5','Web PC','Wechat Mini Program','App Hybrid' 中一个` }); // 验证不通过
      }
	}],
	farmeworkType: [{ required: true , type: "string", message: "farmeworkType 必须为字符串" }],
	installCommand: [{ required: true , type: "string", message: "installCommand 必须为字符串" }],
	startCommand: [{ required: true , type: "string", message: "startCommand 必须为字符串" }],
}
