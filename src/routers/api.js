/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('../controllers/users')

const routers = router
    .post('/user/signUp', userInfoController.signUp)


module.exports = routers
