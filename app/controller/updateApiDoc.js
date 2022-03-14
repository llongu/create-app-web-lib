const Controller = require("egg").Controller
const {
	Route,
	HttpAll,
	HttpGet,
	HttpPost,
	HttpPut,
	HttpPatch,
	HttpDelete,
	Middleware,
} = require("egg-decorator-router")
const {exec} = require('child_process');



@Route('/api/updateApiDoc')
class UpdateApiDocController extends Controller {
	/**
	 * @api {all} /updateApiDoc  
	 * @apiName updateApiDoc
	 * @apiDescription 访问该接口可直接创建或更新api文档
	 *
	 * @apiGroup  api 文档更新接口
	 * @apiVersion 1.0.0
	 *
	 *
	 * @apiSuccess {Number} status 状态码.  0  成功
	 * @apiSuccess {String} msg 提示信息
	 * @apiSuccess {Object} data 
	 * @apiSuccessExample {json} Success-Response:
	 *     {
                code: 1000,
                msg: "apidoc更新成功",
                data: {
                    text: `请访问 localhost:7002/public/apidoc/index.html`,
                },
            }
    *
	 */
	@HttpAll('/')
	async index() {
        const {ctx}=this
        const cmdStr = 'npm run apidoc';

        try{
            const res=await new Promise((resolve, reject) => {
                exec(cmdStr, function(err, stdout, stderr){
                    if (err){
                        reject({
                            code: 2000,
                            msg: "apidoc更新失败",
                            data: {
                                text: `执行失败`,
                            },
                        })
                    } else {
                       resolve( {
                            code: 1000,
                            msg: "apidoc更新成功",
                            data: {
                                text: `请访问 ${ctx.request.header.host}/public/apidoc/index.html`
                            }
                        })
                    }
                });
            })
            ctx.body=res
        }catch(e){
            ctx.body=e
        }   
	}
}

module.exports = UpdateApiDocController
