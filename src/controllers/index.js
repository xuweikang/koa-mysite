module.exports = async ( ctx, next ) => {
    const title = 'home'
    const viewUrl = (ctx.url.split('/pages/')[1] || '').split('?')[0] || 'index'
    console.log(viewUrl)
    await ctx.render(viewUrl, {
        title
    })
    next()
}