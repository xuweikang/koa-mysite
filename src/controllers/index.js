module.exports = async ( ctx ) => {
    const title = 'home'
    const viewUrl = ctx.url.split('/home/')[1].split('?')[0] || 'index'
    console.log(viewUrl)
    await ctx.render(viewUrl, {
        title
    })
}