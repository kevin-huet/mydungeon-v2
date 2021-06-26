const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const Logger = require('koa-logger')
const serve = require('koa-static')
const mount = require('koa-mount')
const cors = require('koa-cors')
const app = new Koa()
const PORT = process.env.PORT || 3000
const controller = require('./controller/controller')
const initDB = require('./config/database.config')
require('ts-node/register');

initDB()

app.use(BodyParser())
app.use(Logger())
app.use(cors())

controller(app)

app.listen(PORT, function () {
  console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/', PORT, PORT)
})
