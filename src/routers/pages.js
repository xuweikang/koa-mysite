/**
 * 页面子路由
 */

const router = require('koa-router')()
const index = require('../controllers/index')

module.exports = router
    .get('/users', index)
