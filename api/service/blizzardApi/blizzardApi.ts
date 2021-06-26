import {AxiosInstance} from "axios"

const axios = require('axios')
const qs = require('qs')
const WoWGameData = require('./wow/gameData.ts')

class BlizzardApi {
    public origin : string
    public locale : string
    public clientId : string
    public clientSecret : string
    public axios : AxiosInstance
    public wowGameData : object
    public oauthToken : string
    public defaultAxiosParams : object
    private originObject: object = {
        us:  {
            hostname: 'https://us.api.blizzard.com',
            defaultLocale: 'en_US',
            locales: ['en_US', 'es_MX', 'pt_BR', 'multi'],
        },
        eu: {
            hostname: 'https://eu.api.blizzard.com',
            defaultLocale: 'en_GB',
            locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT', 'multi'],
        },
        sea: {
            hostname: 'https://sea.api.blizzard.com',
            defaultLocale: 'en_US',
            locales: ['en_US', 'multi'],
        },
        kr: {
            hostname: 'https://kr.api.blizzard.com',
            defaultLocale: 'ko_KR',
            locales: ['ko_KR', 'en_GB', 'en_US', 'multi'],
        },
        tw: {
            hostname: 'https://tw.api.blizzard.com',
            defaultLocale: 'zh_TW',
            locales: ['zh_TW', 'en_GB', 'en_US', 'multi'],
        },
        cn: {
            hostname: 'https://gateway.battlenet.com.cn',
            defaultLocale: 'zh_CN',
            locales: ['zh_CN', 'en_GB', 'en_US', 'multi'],
        }
    };

    constructor() {
    }

    async init(clientId : string, clientSecret : string, origin = 'eu', locale = 'en_GB') {
        if (!clientId) throw new Error('You are missing your Client ID in the passed parameters. This parameter is required.')
        if (!clientSecret) throw new Error('You are missing your Client Secret in the passed parameters. This parameter is required.')
        this.origin = origin
        this.locale = locale
        this.clientId = clientId
        this.clientSecret = clientSecret

        this.defaultAxiosParams = {
            locale: this.locale
        }

        // Handles the fetching of a new OAuth token from the Battle.net API
        // and then creates a reusable instance of axios for all subsequent API requests.
        try {
            await this.setOAuthToken()
            this.axios.defaults.headers.common['Authorization'] = `Bearer ${this.oauthToken}`
            console.log(this.oauthToken)
        } catch (error) {
            //console.log(error)
        }

        this.wowGameData = new WoWGameData(this.defaultAxiosParams, this.origin, this.oauthToken);
    }

    async setOAuthToken() {

        const headers = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: this.clientId,
                password: this.clientSecret,
            },
        };
        const data = {
            grant_type: 'client_credentials',
        };

        try {
            const response = await axios.post(`https://${this.origin}.battle.net/oauth/token`,
                qs.stringify(data),
                headers
            )
            this.oauthToken = response.data.access_token
        } catch (error) {
            throw new Error(`Problem getting the OAuth token from the Blizzard API.  
                            Please check that your Client ID and Secret are correct.`);
        }
    }
}

module.exports = BlizzardApi