const Koa = require('Koa')
const app = new Koa()

app.use(async ctx => {
    ctx.body = 'hello world2'
})

app.listen(3131)