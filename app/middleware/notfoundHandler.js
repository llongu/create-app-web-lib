module.exports = () => {
    return async function notFoundHandler(ctx, next) {
     await next() //等待框架路由匹配后执行
		 const { Response } = ctx.helper
     try {
       if (ctx.status === 404 && !ctx.body) {
            ctx.body = { 
              code:404,
              error: 'Not Found'
             };
        }
      }catch(error){
         Response({ ctx, code: 404, data: { error, tip: "404错误" } })
      }
    };
  };