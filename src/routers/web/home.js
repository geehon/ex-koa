const Router = require('koa-router')
const router = new Router()
const title = require(process.cwd() + '/package.json').name
router.get('/home', async (ctx, next) => {
    await next()
    ctx.type = 'html'
    ctx.body = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">`
        + `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
        + `<title>${title}</title></head><body><h1>welcome to ${title}.</h1>`
        + `</body></html>`
})
module.exports = router
