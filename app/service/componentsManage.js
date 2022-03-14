const Service = require("egg").Service


class ComponentsManageService extends Service {

	async query(data = {}) {
        const {ctx}=this
        const { PaginationQuery, PaginationGenerate } = ctx.helper
        return new Promise(async (resolve,reject) => {
            await PaginationQuery(ctx.model.ComponentsManage, data, ctx)
            .then(({ list=[], total }) => {
                const pagination = PaginationGenerate(data, total)
                resolve({ list, pagination })
            })
            .catch((err) => {
                reject(err)
            })
        })
	}

    async add(data = {}) {
        const {ctx}=this
            return new Promise(async (resolve,reject) => {
                const ComponentsManageModel = await new this.ctx.model.ComponentsManage({ ...data })
                ComponentsManageModel.save(function (err) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve( true )
                    }
                })
            })
		
	}

    async update(data = {}) {
        const {ctx}=this
            return new Promise(async (resolve,reject) => {
                this.ctx.model.ComponentsManage.findByIdAndUpdate(data.id,{...data},function (err,docs){
                    if (err) {
                        reject('数据不存在修改失败 '+err)
                    } else {
                        resolve( true )
                    }
                })
            })
		
	}

    async delete(data = {}) {
        const {ctx}=this
            return new Promise(async (resolve,reject) => {
                try {
                    if(Array.isArray(JSON.parse((data.id)))){
                        this.ctx.model.ComponentsManage.deleteMany({_id: {$in:JSON.parse((data.id))}}, function (err, docs) { 
                            console.log(docs);
                            if (err){ 
                                reject(err)
                            } 
                            else{ 
                                docs.deletedCount ?   resolve( true ) :  reject('数据不存在')
                            } 
                        });
                    }else{
                        this.ctx.model.ComponentsManage.findByIdAndDelete(JSON.parse(data.id), function (err, docs) { 
                            console.log(docs);
                            if (err){ 
                                reject(err)
                            } 
                            else{ 
                                docs ?   resolve( true ) :  reject('数据不存在')
                            } 
                        });
                    }
                } catch (error) {
                    reject(error)
                }
            })
    }
		
}

module.exports = ComponentsManageService
