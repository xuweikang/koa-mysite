const multer = require('koa-multer');//加载koa-multer模块


/**
 * 上传图片
 * @param name
 * @returns {*}
 */
let uploadImg = function (name) {
    //配置
    var storage = multer.diskStorage({
        //文件保存路径
        destination: function (req, file, cb) {
            cb(null, '/home/static/images')
        },
        //修改文件名称
        filename: function (req, file, cb) {
            var fileFormat = (file.originalname).split(".");
            cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
        }
    })

    //加载配置
    var upload = multer({storage: storage})

    return upload.single(name)
}


module.exports = {
    uploadImg
}

