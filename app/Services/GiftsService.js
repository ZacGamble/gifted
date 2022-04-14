import { ProxyState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { gifApi } from "./AxiosService.js"


class GiftsService {
    async getGifts() {
        let params = {
            api_key: 'Cuyr7covC5ZGg38MJ4huELUmAh6jVZs0',
            rating: 'pg',
            q: 'random',
            limit: '3'
        }

        const res = await gifApi.get('', { params })
        const gift = res.data.data.map(g => new Gift(g))
        console.log("the res", res.data);
        ProxyState.gift = gift
        console.log("proxystate", ProxyState.gift)

    }

}

export const giftsService = new GiftsService()