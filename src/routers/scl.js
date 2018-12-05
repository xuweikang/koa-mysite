/**
 * scl页面子路由
 */

const router = require('koa-router')()
const birth = require('../controllers/birth')

module.exports = router
    .get('/birth', birth)
