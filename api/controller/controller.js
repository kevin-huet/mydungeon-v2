const Router = require('koa-router')
const cookie = require('koa-cookie');
const router = new Router()
const jwt = require('../middleware/jwt')
const homeController = require('./home.controller')
const loginController = require('./login.controller')
const registerController = require('./register.controller')
const mythicControlelr = require('./wow/mythic.controller')
router.use(cookie.default());

module.exports = function (app) {
  homeController(router)
  loginController(router, jwt)
  registerController(router)
  mythicControlelr(router)
  app.use(router.routes()).use(router.allowedMethods())
}
