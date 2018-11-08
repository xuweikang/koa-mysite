/**
 * 图片上传
 */
const upload = require('../../utils/upload')
const router = require('koa-router')()
const uploadController = require('../controllers/upload')
const routers = router
    .get('/', uploadController.uploadImagePage)
    .post('/',uploadController.uploadImage(),uploadController.uploadImageRes)


module.exports = routers
