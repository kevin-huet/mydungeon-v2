const HttpStatus = require('http-status')
const jwt = require('../middleware/jwt')
const userService = require('../service/user.service')

module.exports = function (router) {
  router.get('/book', async (ctx, next) => {
    console.log('cookie', ctx.cookie)
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
    const books = ['Speaking javascript', 'Fluent Python', 'Pro Python', 'The Go programming language']
    ctx.status = HttpStatus.OK
    ctx.body = books
    await next()
  })

  router.get('/', async (ctx, next) => {
  })

  router.post('/test', async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
    ctx.status = HttpStatus.OK
    await next()
  })
}
