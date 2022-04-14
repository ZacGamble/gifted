import { giftsService } from "../Services/GiftsService.js";
import { ProxyState} from "../AppState.js"

function _drawGifts(){
    let template = ''
    // const gift = ProxyState.gift
    ProxyState.gift.forEach(g => template += g.Template);
    document.getElementById('closedgift').innerHTML = template
}
export class GiftsController{
    constructor(){
        ProxyState.on('gift', _drawGifts)
        // _drawGifts()
        this.getGifts()
    }
    async getGifts(){
        try {
            await giftsService.getGifts()
        } catch (error) {
            console.log('error with getting gifts');
        }
    }
}