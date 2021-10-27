const Router = require('koa-router')
const router = new Router()
router.prefix('/api/v1')
router.get('/users',
    async (ctx, next) => {
        ctx.type = 'application/json'
        // response
        ctx.body = {
            "code": "10000",
            "msg": "ok",
            "data": {
                "users": {
                    "id": 1,
                    "name": "user1"
                }
            }
        }
        await next()
    },
    async (ctx, next) => {
        console.log('from next middleware')
    },
)
module.exports = router
