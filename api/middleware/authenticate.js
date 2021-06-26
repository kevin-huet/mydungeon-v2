
const jwt = require('jsonwebtoken')
const HttpStatus = require('http-status')

module.exports = function (ctx, user) {
  if (user !== null) {
    ctx.status = 200
    ctx.body = {
      token: jwt.sign(
          {
            "email": user.email,
            "username": user.username,
            "expiration": "1d"
          },
          "test"
      ), // Should be the same secret key as the one used is ./jwt.js
      message: 'Successfully logged in!'
    }
  } else {
    ctx.status = HttpStatus.UNAUTHORIZED
    ctx.body = {
      message: 'Authentication failed'
    }
  }
  return ctx
}
