const raiderApi = require('../raiderIo/raiderApi')
import BlizzardApi from '../blizzardApi/blizzardApi'

export default class WowService {

    private readonly api: BlizzardApi

    constructor() {
        console.log("init WoW service")
        this.api = new BlizzardApi()
        this.api.init(process.env.API_KEY, process.env.API_SECRET, "eu", "en_GB").then(r => console.error(r))
    }

    async reloadBlizzardToken() {
        console.log("blizzard token reloaded")
        this.api.init(process.env.API_KEY, process.env.API_SECRET, "eu", "en_GB").then(r => console.error(r))
    }

    async getWeeklyAffixes(region: string, locale: string)  {
        let api = new raiderApi(region, locale)
        return await api.getWeeklyAffixes()
    }

    async getCovenantsData()  {
        return await this.api.wowGameData.getCovenantsIndex()
    }

    async getApi() {
        return this.api
    }

}
