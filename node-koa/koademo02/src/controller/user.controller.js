const { createUser } = require('../service/user.servive')
class UserController {
    async register(ctx, next) {
        const { user_name, password } = ctx.request.body
        const res = await createUser(user_name, password)
        ctx.body = ctx.request.body
    }
    async login(ctx, next) {
        ctx.body = '登录成功'
    }
}
module.exports = new UserController()