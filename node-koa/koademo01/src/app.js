const koa = require('koa')
const Router = require('koa-router')
const fs = require('fs')
const koaBody = require('koa-body')
const error = require('koa-json-error')
const app = new koa()
const router = new Router()
// 注册中间件，，解析请求体内的参数，挂在到ctx.request.body 
app.use(koaBody())
// 错误处理
app.use(error({
    format: (err) => {
        return {
            code: err.status,
            message: err.message,
            result: err.stack
        }
    },
    postFormat: (err, obj) => {
        const { result, ...rest } = obj
        return process.env.NODE_ENV === 'production' ? rest : obj
    }
}))
// 其他页面通过 router 加载
let urls = fs.readdirSync(__dirname + '/router')
urls.forEach((element) => {
    let module = require(__dirname + '/router/' + element)
    router.use('/' + element.replace('.routes.js', ''), module.routes(), module.allowedMethods())
})
app.use(router.routes())
// 接收错误信息
// app.on('error', (err, ctx) => {
//     console.error(err)
//     ctx.body = err
// })
app.listen(3000, () => {
    console.info('server on http://localhost:3000')
})
