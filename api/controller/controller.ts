const Router = require('koa-router')
const cookie = require('koa-cookie');
const router = new Router()
const jwt = require('../middleware/jwt')
const homeController = require('./home.controller')
const loginController = require('./login.controller')
const registerController = require('./register.controller')
const mythicController = require('./wow/mythic.controller')
import WowService from '../service/wow/wow.service'
router.use(cookie.default());

module.exports = function (app: any) {

  homeController(router)
  loginController(router, jwt)
  registerController(router)
  mythicController(router, WowService)
  app.use(router.routes()).use(router.allowedMethods())
}
