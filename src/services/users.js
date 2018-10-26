/**
 * 用户业务操作
 */

const userModel = require('../models/users')
const userCode = require('../codes/users')
const user = {

    /**
     * 创建用户
     * @param  {object} user 用户信息
     * @return {object}      创建结果
     */
    async create( user ) {
        let result = await userModel.create(user)
        return result
    },

    /**
     * 检验用户注册数据
     * @param  {object} userInfo 用户注册数据
     * @return {object}          校验结果
     */
    validatorSignUp( userInfo ) {
        let result = {
            success: false,
            message: '',
        }

        if ( !userInfo.name || !userInfo.pwd ) {
            result.message = userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
            return result
        }

        result.success = true

        return result
    }
}

module.exports = user
