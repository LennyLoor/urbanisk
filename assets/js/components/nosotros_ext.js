import { dataJSON } from "../../data/data.js";
const data = JSON.parse(dataJSON);
class cardNosotrosEXT extends HTMLElement {
    constructor() {
        super();
        this.nosotros_ext = data.nosotros;
    }

    connectedCallback() {
         this.innerHTML = this.nosotros_ext.filter((data_) => data_.equipo == "Externo").map((data_) => {
            return `<div class="nst_card-item card-${data_.id}">
                        <span class="no-select tag tag-${data_.tag}"">${data_.equipo}</span>
                        <img width="182" height="182" src="${data_.image}" class="no-select">
                        <div class="item_content">
                            <div class="item_content-info">
                                <b class="info-name">${data_.name}</b>
                                <p><b>${data_.cargo}</b> - ${data_.detalle}</p>
                            </div>
                            <div class="item_content-footer center"> 
                                <button class="btn-secundary center no-select btn-ver-mas-ext" data-id="${data_.id}">
                                    Ver más <i class="fa-solid fa-external-link-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>`;            
        }).join('');
        if (!document.getElementById("sidebar_ext")) {
            document.body.insertAdjacentHTML("beforeend", `
                <div id="overlay_ext" class="overlay"></div>
                <div id="sidebar_ext" class="nst_sidebar">
                    <a class="close close_ext"><i class="fa-solid fa-square-xmark"></i></a> 
                    <div class="nst_sidebar-content">
                        <img id="modal-image-ext" width="182" height="182" class="no-select">
                        <div class="content-info">
                            <div>
                                <h2 id="modal-name-ext"></h2>
                                <h4 id="modal-cargo-ext"></h4>
                            </div>
                            <p id="modal-info-ext"></p>
                        </div>
                    </div> 
                </div>
            `);
        }
        document.addEventListener("click", (event) => {
            const btn_ = event.target.closest(".btn-ver-mas-ext");
            if (btn_) {
                const id = parseInt(btn_.dataset.id, 10); 
                this.toggleSidebarExt(id);
            }

            if (event.target.closest(".close_ext") || event.target.id === "overlay") {
                this.toggleSidebarExt();
            }
        });
    }
    toggleSidebarExt(id = null) {
        const sidebarExt = document.getElementById("sidebar_ext");
        const overlayExt = document.getElementById("overlay_ext");

        const isOpen = sidebarExt.classList.contains("active");

        if (isOpen) {
            document.body.style.overflow = 'auto'; 
            sidebarExt.classList.remove("active"); 
            overlayExt.classList.remove("show"); 
        } else {
            if (id !== null) {
                const person = this.nosotros_ext.find(p => parseInt(p.id, 10) === id);

                if (person) {
                    document.getElementById("modal-image-ext").src = person.image;
                    document.getElementById("modal-name-ext").textContent = person.name; 
                    document.getElementById("modal-cargo-ext").textContent = person.cargo + '-' + person.detalle; 
                    document.getElementById("modal-info-ext").textContent = person.info; 
                } else {
                    console.error("No se encontró una persona con el ID:", id);
                }
            }

            document.body.style.overflow = 'hidden'; 
            sidebarExt.classList.add("active");
            overlayExt.classList.add("show"); 
        }
    }
}
window.customElements.define('card-nosotros-ext', cardNosotrosEXT);
 