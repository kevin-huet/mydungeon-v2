const authenticate = require('../middleware/authenticate')
const HttpStatus = require('http-status')
const userService = require('../service/user.service')
const blizzardApi = require('../service/blizzardApi/blizzardApi')
const {Schema} = require("mongoose");


module.exports = function (router, jwt) {
  router.post('/login', async (ctx, next) => {
    const user = await userService.checkAuth(ctx.request.body.email, ctx.request.body.password)
    authenticate(ctx, user)
  })

  router.get('/profile', jwt, async (ctx) => {
      ctx.body = ctx.state
      ctx.status = HttpStatus.OK
  })

    router.get('/logout', jwt, async (ctx) => {
        ctx.body = ctx.state
        ctx.status = HttpStatus.OK
    })
}
