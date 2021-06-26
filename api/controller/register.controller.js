const Bcrypt = require('bcryptjs')
const HttpStatus = require('http-status')
const userService = require('../service/user.service')

module.exports = function (router) {
  router.post('/register', async (ctx, next) => {
    if (ctx.request.body.password === 'undefined' ||
            ctx.request.body.username === 'undefined' ||
            ctx.request.body.email === 'undefined') {
      ctx.status = HttpStatus.BAD_REQUEST
      await next()
    } else {
      ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
      ctx.request.body.password = Bcrypt.hashSync(ctx.request.body.password, 10)
      const result = await userService.checkIfAlreadyExist(ctx.request.body.username, ctx.request.body.email)

      if (result === false) {
        ctx.body = await userService.createUserInDb(ctx.request.body)
        ctx.status = HttpStatus.OK
      } else {
        ctx.status = HttpStatus.OK
        ctx.body = 'Username or Email already exist'
      }
      await next()
    }
  })
}
