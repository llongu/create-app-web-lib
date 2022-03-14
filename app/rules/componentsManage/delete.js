module.exports = {
	id: [{ required: true , type: "string", message: "id 必须为字符串" },{validator(rule, value, callback, source, options) {
         try{
			if(JSON.parse(value)){
				return callback();
			}
		 }catch(e){
			return   callback({ message: `id 必选为字符串或数组字符串 "id" || ["id"] ` }); // 验证不通过
		 }
        callback(); // 验证不通过
      }
	}]
}
