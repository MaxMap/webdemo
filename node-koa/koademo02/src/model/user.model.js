const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

//创建模型
const User = seq.define('zd_user', {
    // id 自动创建
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,// 是否允许为空
        unique: true,// 唯一
        comment: '用户名，唯一' // 表的注释
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,// 是否允许为空
        comment: '密码'
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,// 是否允许为空
        defaultValue: 0,//默认值 
        comment: '是否为管理员 0 否（默认） 1 是'
    }
})
// 强制同步数据表（创建）
// User.sync({ force: true })

module.exports = User