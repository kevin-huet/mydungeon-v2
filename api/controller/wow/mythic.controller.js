const HttpStatus = require('http-status')
const wowService = require('../../service/wow/wow.service')

module.exports = function (router, WowService) {

    router.get('/wow/mythic-plus/affix', async (ctx) => {
        ctx.body = await WowService.getWeeklyAffixes("eu", "en")
        ctx.status = HttpStatus.OK
    })

    router.get('/wow/mythic-plus/', async (ctx, next) => {
        ctx.status = HttpStatus.OK
    })


}
