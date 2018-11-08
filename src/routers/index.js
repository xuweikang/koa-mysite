/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
const error = require('./error')
const upload = require('./upload')
const pages = require('./pages')

router.use('/', home.routes(), home.allowedMethods() )
router.use('/pages', pages.routes(), pages.allowedMethods() )
router.use('/api', api.routes(), api.allowedMethods())
router.use('/error', error.routes(), error.allowedMethods())
router.use('/upload',upload.routes(),upload.allowedMethods())
module.exports = router


