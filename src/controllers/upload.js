const upload = require('../../utils/upload')
module.exports = {
    /**
     * 上传文件页面
     * @param   {obejct} ctx 上下文对象
     */
    async uploadImagePage( ctx ) {
        console.log('进入到了图片上传页面')
        await ctx.render('upload', {
            title: '图片上传'
        })
    },
    /**
     * 图片上传逻辑
     * @param ctx
     */
    uploadImage(){
        return upload.uploadImg('file')
    },

    /**
     * 图片上传结果
     * @param ctx
     * @param next
     * @returns {Promise<void>}
     */

    async uploadImageRes( ctx, next ){
        console.log('图片上传结果')
        console.log(ctx.req.file)
        ctx.response.body = '图片上传成功!!图片地址为～ wickhamxu.cn/' + ctx.req.file.filename;
        return
    }
}
