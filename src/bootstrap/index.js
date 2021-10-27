const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const requireDirectory = require('require-directory')
const routerDir = path.join(process.cwd() + '/src/routers')

requireDirectory(module, routerDir, { visit: visitor })

async function visitor (obj) {
    if (obj instanceof Router) {
        app.use(obj.routes(), obj.allowedMethods())
    }
}

module.exports = app
