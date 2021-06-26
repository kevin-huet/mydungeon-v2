
const raiderApi = require('../raiderIo/raiderApi')
let getWeeklyAffixes = async(region: string, locale: string) => {
    let api = new raiderApi(region, locale)
    return await api.getWeeklyAffixes()
}


module.exports = {getWeeklyAffixes}