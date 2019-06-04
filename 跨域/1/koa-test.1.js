const koa = require('koa')
const serve =require('koa-simple-static')
const app = new koa();
app.use(serve({dir:'assets'}))
app.listen(3001);