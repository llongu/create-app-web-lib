let { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/controller/cliManage.test.js', () => {

  describe('GET /api/cli/query', () => {
    it('test status  and res',async () => {
     const res=await app.httpRequest().get('/api/cli/query').set('token',$token)
       console.log(res.body);
        assert(res.status === 200);
    });
  });
  
});