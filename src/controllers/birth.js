module.exports = async ( ctx, next ) => {
    const title = '鹿鹿，生日快乐'
    const viewUrl = 'birth'
    await ctx.render(viewUrl, {
        title
    })
    next()
}