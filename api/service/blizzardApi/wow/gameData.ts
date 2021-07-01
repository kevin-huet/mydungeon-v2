import {AxiosInstance} from "axios";

const axios = require('axios')

export default class GameData {

    public defaultAxiosParams : any
    public staticNamespace : String
    public dynamicNamespace : String
    public gameBaseUrlPath : String
    public token : String

    constructor(defaultAxiosParams : any, origin : String, token : String) {
        console.log("init wow game data")
        this.defaultAxiosParams = defaultAxiosParams
        this.staticNamespace = `static-${origin}`
        this.dynamicNamespace = `dynamic-${origin}`
        this.gameBaseUrlPath = '/data/wow'
        this.token = token
    }

    // Azerite Essences Index API {GET}
    async getAzeriteEssencesIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/azerite-essence/index`,
            'Error fetching',
            this.staticNamespace
        );
    }

    // Azerite Essences API {GET}
    async getAzeriteEssence(id : number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/azerite-essence/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    // Azerite Essence Media API {GET}
    async azeriteEssenceMedia(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/media/azerite-essence/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    // Connected Realm API {GET}
    async getConnectedRealm(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/connected-realm/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }


    // Connected Realms Index API {GET}
    async getConnectedRealmsIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/covenant/index`,
            'Error fetching',
            this.staticNamespace
        );
    }

    // Achievement API {GET}
    async getAchievement(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/achievement/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    // Achievement Media API {GET}
    async getAchievementMedia(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/media/achievement/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    // AchievementIndex API {GET}
    async getAchievementIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/achievement/index`,
            'Error fetching',
            this.staticNamespace
        );
    }

    // Achievement Category API {GET}
    async getAchievementCategory(id : number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/achievement-category/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    // Achievement Category Index API {GET}
    async getAchievementCategoryIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/achievement-category/index`,
            'Error fetching',
            this.staticNamespace
        );
    }

    // Auction API {GET}
    async getAuctions(connectedRealmId: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}/auction`,
            'Error fetching',
            this.staticNamespace
        );
    }

    // Creature Families Index API {GET}
    async getCreatureFamiliesIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/index`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getCreatureFamily(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getCreatureTypeIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/index`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getCreatureType(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getCreature(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/creature/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getCreatureDisplayMedia(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-display/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getCreatureFamilyMedia(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-family/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getGuildCrestComponentIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/index`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getGuildCrestBorderMedia(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/media/guild-crest/border/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getGuildCrestEmblemMedia(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/media/guild-crest/emblem/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }


    // Playable Class API {GET}
    async getPlayableClassesIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/index`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    async getPlayableClassMedia(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/media/playable-class/${id}`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    async getPlayableClass(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/${id}`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    // Mythic+ API {GET}
    async getMythicAffix(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/keystone-affix/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getMythicAffixIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/keystone-affix/index`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getMythicAffixMedia(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/media/keystone-affix/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }


    // Covenant Api //
    async getCovenantsIndex() {
        console.log("convenant index")
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/covenant/index`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getCovenant(id : Number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/covenant/${id}`,
            'Error fetching',
            this.staticNamespace
        );
    }

    async getCovenantMedia(id : Number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/media/covenant/${id}`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getSoulbindsIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/covenant/soulbind/index`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getSoulbind(id : Number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/covenant/soulbind/${id}`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getConduitsIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/covenant/conduit/index`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getConduit(id : Number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/covenant/conduit/${id}`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getItemClassesIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/item-class/index`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getItemClass(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${id}`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getItemSetsIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/item-set/index`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getItemSet(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/item-set/${id}`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getItemSubclass(classId: number, subClassId: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${classId}/item-subclass/${subClassId}`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getItem(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/item/${id}`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getItemMedia(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/media/item/${id}`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getMountIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/mount/index`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getMount(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/mount/${id}`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async mediaSearch(tags: string, page: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/search/media`,
            'Error fetching connected realm index.',
            this.staticNamespace
        );
    }

    async getPlayableRacesIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/index`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    async getPlayableRace(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/${id}`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    async getPlayableSpecializationIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/playable-specialization/index`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    async getPlayableSpecialization(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/playable-specialization/${id}`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    async getPlayableSpecializationMedia(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/media/playable-specialization/${id}`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    async getPowerTypeIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/power-type/index`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    async getPowerType(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/power-type/${id}`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    async getWoWTokenIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/token/index`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    async getTitleIndex() {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/title/index`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    async getTitle(id: number) {
        return await this.handleApiCall(
            `${this.gameBaseUrlPath}/title/${id}`,
            'Error fetching.',
            this.staticNamespace
        );
    }

    // Send request
    async handleApiCall(apiUrl : String, errorMessage : String, namespace : String) {
        console.log("https://eu.api.blizzard.com"+apiUrl)
        try {
            const response = await
                axios.get("https://eu.api.blizzard.com"+apiUrl,
                    {
                        headers: {
                            "Authorization" : `Bearer ${this.token}`
                        },
                        params: {
                            namespace: namespace
                        }
                    })
            return response.data;
        } catch (error) {
            //console.log(error)
            throw new Error(`WoW Game Data Error :: ${errorMessage}`);
        }
    }
}

module.exports = GameData