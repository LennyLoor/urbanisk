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
                        <img src="${data_.image}" alt="${data_.title}">
                        <b class="txt-center"> ${data_.title} </b>
                        <p class="txt-secundary txt-center">${data_.detalle}</p>
                        <button class="urb_btn btn-secundary center" onclick="flipCard(this)">Ver más<i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                    <div class="card-box serv_card-back">
                        <div class="card_back-header">
                            <h3>Detalles del servicio</h3> 
                        </div>
                        ${data_.beneficios}
                         <button class="urb_btn btn-secundary center card-btn-footer" onclick="flipCard(this)"><i class="fa-solid fa-chevron-left"></i>Volver</button>
                    </div>
                </div>`; 
        }).join('')
    }
}
window.customElements.define('card-servicios', cardServicios);
 