const userInfoService = require('./../services/users')
const userCode = require('./../codes/users')

module.exports = {
    /**
     * 注册操作
     * @param   {obejct} ctx 上下文对象
     */
    async signUp( ctx ) {
        let formData = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null
        }

        let validateResult = userInfoService.validatorSignUp( formData )
        if ( validateResult.success === false ) {
            result = validateResult.message
            // ctx.response.redirect('/error');
            ctx.response.body = result;
            return
        }
        //
        let userResult = await userInfoService.create({
            name: formData.name,
            create_time: new Date().getTime(),
            pwd: formData.pwd
        })

        if ( userResult && userResult.insertId * 1 > 0) {
            result.success = true
        } else {
            result.message = userCode.ERROR_SYS
        }

        ctx.body = result
    },
}
