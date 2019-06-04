const koa = require('koa')
const Router = require('koa-router')
const app = new koa();
const router = new Router();
const whiteList=[
    'http://localhost:3001'
]
router.get('/a',(ctx,next) => {
    console.log(whiteList.includes(ctx.header.origin),ctx.request.originalUrl)
    if(whiteList.includes(ctx.header.origin)){
        ctx.set('Access-Control-Allow-Origin', ctx.header.origin);
        ctx.body='welcome';
        next();
    }
})
app.use(router.routes())
app.listen(3000);