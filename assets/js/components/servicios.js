import { dataJSON } from "../../data/data.js";
const data = JSON.parse(dataJSON);
class cardServicios extends HTMLElement {
    constructor() {
        super();
        this.servicios = data.servicios;
    }

    connectedCallback() {
        this.innerHTML = this.servicios.map(function (data_) { 
                return `<div class="serv_card">
                    <div class="card-box serv_card-front card-${data_.bg}">
                        <img src="${data_.image}" alt="">
                        <h5 class="card-title">${data_.title}</h5>
                        <p class="card-paragraph" class="txt-center">${data_.detalle}</p>
                        <button class="btn-secundary center" onclick="flipCard(this)">Ver más <i
                                class="fa-solid fa-external-link-alt"></i> </button>
                    </div>
                    <div class="card-box serv_card-back">
                        <div class="card_back-header">
                            <h5 class="card-title">Detalles del servicio</h5>
                            <a onclick="flipCard(this)"><i class="fa-solid fa-window-close"></i></a>
                        </div>
                        ${data_.beneficios}
                    </div>
                </div>`; 
        }).join('')
    }
}
window.customElements.define('card-servicios', cardServicios);
 