const koaJwt = require('koa-jwt')

module.exports = koaJwt({
  secret: 'test' // Should not be hardcoded
})
