const User = require('../model/user.model')
class userService {
    async createUser(user_name, password) {
        // User.create({
        //     user_name: user_name,
        //     password:password
        // })
        const res = User.create({ user_name, password })
        return res.dataValues
    }
}
module.exports = userService