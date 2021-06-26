const axios = require('axios')

class RaiderApi {

    public region: string
    public locale: string
    constructor(region: string, locale: string) {
        this.region = region
        this.locale = locale
    }

    async getWeeklyAffixes() {
        return await this.handleApiCall('mythic-plus/affixes', {
            region: this.region,
            locale: this.locale
        }, "Error handling weekly affixes")
    }

    async getScoreTiers() {
        return await this.handleApiCall('mythic-plus/score-tiers', {
            region: this.region,
            locale: this.locale
        }, "Error handling score tiers")
    }

    async getMythicPlusRuns(season: string, region: string, dungeon: string, affixes: string, page: number) {
        return await this.handleApiCall('mythic-plus/runs', {
            region: this.region,
            locale: this.locale
        }, "Error handling mythic plus runs")
    }

    async getStaticData(expansionId: number) {
        return await this.handleApiCall('mythic-plus/static-data', {
            region: this.region,
            locale: this.locale
        }, "Error handling static data")
    }

    async getCharacterProfile(realm: string, name: string, fields: string) {
        return await this.handleApiCall('mythic-plus/profile', {
            region: this.region,
            realm: realm,
            name: name,
            fields: fields
        }, "Error handling profile")
    }

    async handleApiCall(apiUrl : String, params : object, errorMessage : string) {
        console.log("https://raider.io/api/v1/"+apiUrl)
        try {
            const response = await
                axios.get("https://raider.io/api/v1/"+apiUrl,
                    {
                        params
                    })
            return response.data;
        } catch (error) {
            //console.log(error)
            throw new Error(`WoW Game Data Error :: ${errorMessage}`);
        }
    }
}

module.exports = RaiderApi