const HttpStatus = require('http-status')
const wowService = require('../../service/wow/wow.service')
const Covenant = require('../../model/Covenant.model')

module.exports = function (router) {
    router.get('/wow/mythic-plus/affix', async (ctx) => {
        ctx.body = await wowService.getWeeklyAffixes("eu", "en")
        ctx.status = HttpStatus.OK
    })

    router.get('/wow/mythic-plus/', async (ctx, next) => {
    })

    router.get('/test', async (ctx, next) => {
        let a = new Covenant({michel:"test"});
        await a.save()
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
        ctx.status = HttpStatus.OK
        await next()
    })
}
