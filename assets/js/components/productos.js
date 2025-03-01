import { dataJSON } from "../../data/data.js";
const data = JSON.parse(dataJSON);
class cardProductos extends HTMLElement {
    constructor() {
        super();
        this.productos = data.productos;
    }

    connectedCallback() {
        this.innerHTML = this.productos.map(function (data_) { 
                return `<div class="prod_card">
                    <div class="prod-image ${data_.producto}-img no-select">
                        <img src="${data_.image}" alt="">
                    </div>
                    ${data_.beneficios}
                </div>`; 
        }).join('')
    }
}
window.customElements.define('card-productos', cardProductos);
 /* Filtrar por Categoría */
 const enlaces = document.querySelectorAll('#categories a');

 enlaces.forEach((elemento) => {
     /* Cargar categoria activa */
     if (elemento.classList == 'active') {
         const categoria = elemento.innerHTML;
         categoria === 'todas' ? list.filter('[data-categoria]') : list.filter(`[data-categoria="${categoria}"]`);
     }
     /* Evento click categoria */
     elemento.addEventListener('click', (evento) => {
         evento.preventDefault();
         enlaces.forEach((enlace) => enlace.classList.remove('active'));
         evento.target.classList.add('active');
         const categoria = evento.target.innerHTML; 
         categoria === 'todas' ? list.filter('[data-categoria]') : list.filter(`[data-categoria="${categoria}"]`);
     });
 });