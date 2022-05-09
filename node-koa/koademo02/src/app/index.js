const koa = require('koa')
const koaBody = require('koa-body')
const userRouter = require('../router/user.route')
const app = new koa()

app.use(koaBody())
app.use(userRouter.routes())

module.exports = app