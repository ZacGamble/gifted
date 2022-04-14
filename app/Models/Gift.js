export class Gift{
    constructor(data){
        this.images = data.images
        this.title = data.title
        this.url = data.url

    }

    get Template() {
        return `  <div class="m-3 gift-wrapping text-center" style="width: 18rem;">
        <h5 class="card-title text-align-center">${this.title}</h5>
        <img src="${this.url}"/>
      </div>
    </div>
        
        `
    }
}