let { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/controller/home.test.js', () => {

  describe('GET /', () => {
    it('test status  and res.headers.content-type',async () => {
      app.httpRequest().get('/').end((err,res)=>{
        assert(res.status === 200);
        assert(res.headers['content-type'] === 'text/html; charset=utf-8');
      })
    });
  });

  describe('GET /api/home', () => {
    it('test status  and res.body.code  ',async () => {
      app.httpRequest().get('/api/home')
      .set('token',$token)
      .end((err,res)=>{
        assert(res.status === 200);
        assert(res.headers['content-type'] === 'text/html; charset=utf-8');
      })
    });
  });
  
});