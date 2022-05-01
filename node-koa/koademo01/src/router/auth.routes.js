const Router = require('koa-router')
const auth = new Router()

// /auth
auth.post('/login', async (ctx, next) => {
    a
    const data = ctx.params;
    console.log('登录信息=>', ctx.request.body)
    if (ctx.request.body.passWord === '') {
        ctx.throw('密码不能为空！', 422)
        // return ctx.app.emit('error', { code: '99999', message: '密码不能为空' }, ctx)
    } else {
        ctx.response.status = 200
        ctx.response.body = '登录成功'
    }

    await next()
})

// auth/list
auth.get('/list', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'auth-list'
    await next()
})

module.exports = auth