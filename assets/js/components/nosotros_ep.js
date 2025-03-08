import { dataJSON } from "../../data/data.js";
const data = JSON.parse(dataJSON);

class cardNosotrosEP extends HTMLElement {
    constructor() {
        super();
        this.nosotros = data.nosotros || [];
    }

    connectedCallback() {
        this.innerHTML = this.nosotros.filter((data_) => data_.equipo == "Equipo Principal").map((data_) => {
            return `
                <div class="nst_card-item card-${data_.id}">
                    <span class="no-select tag tag-${data_.tag}">${data_.equipo}</span>
                    <img width="182" height="182" src="${data_.image}" class="no-select">
                    <div class="item_content">
                        <div class="item_content-info">
                            <h3>${data_.name}</h3>
                            <b>${data_.cargo}</b>
                            <p>${data_.detalle}</p>
                        </div>
                        <div class="item_content-footer center">
                            <a href="${data_.linkedIn}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            <button class="btn-secundary center no-select btn-ver-mas" data-id="${data_.id}">
                                Ver más <i class="fa-solid fa-external-link-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>`;
        }).join('');

        this.addModal();
        this.addEventListeners();
    }

    addModal() {
        if (!document.getElementById("sidebar")) {
            document.body.insertAdjacentHTML("beforeend", `
                <div id="overlay" class="overlay"></div>
                <div id="sidebar" class="nst_sidebar">
                    <a class="close close_principal"><i class="fa-solid fa-square-xmark"></i></a> 
                    <div class="nst_sidebar-content">
                        <img id="modal-image" width="182" height="182" class="no-select">
                        <div class="content-info">
                            <div>
                                <h2 id="modal-name"></h2>
                                <h4 id="modal-cargo"></h4>
                            </div>
                            <div id="modal-card-detalle" class="card-detalle"></div>
                            <p id="modal-info"></p>
                        </div>
                    </div>
                    <div class="info-footer"> 
                        <button id="modal-linkedin" class="btn-primary m-auto no-select">
                            LinkedIn <i class="fa-solid fa-external-link-alt"></i>
                        </button>
                    </div>
                </div>
            `);
        }
    }

    addEventListeners() {
        document.addEventListener("click", (event) => {
            const btn = event.target.closest(".btn-ver-mas");
            if (btn) {
                const id = parseInt(btn.dataset.id, 10);
                this.toggleSidebar(id);
            }

            if (event.target.closest(".close_principal") || event.target.id === "overlay") {
                this.toggleSidebar();
            }
        });
    }

    toggleSidebar(id = null) {
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");

        const isOpen = sidebar.classList.contains("active");

        if (isOpen) {
            document.body.style.overflow = 'auto'; 
            sidebar.classList.remove("active"); 
            overlay.classList.remove("show");
        } else {
            if (id !== null) {
                const person = this.nosotros.find(p => parseInt(p.id, 10) === id);
                if (person) {
                    document.getElementById("modal-image").src = person.image;
                    document.getElementById("modal-name").textContent = person.name;
                    document.getElementById("modal-cargo").textContent = person.cargo;
                    document.getElementById("modal-card-detalle").innerHTML = person.cardDetalle;
                    document.getElementById("modal-info").textContent = person.info;
                    document.getElementById("modal-linkedin").onclick = () => window.open(person.linkedIn, "_blank");
                }
            }

            document.body.style.overflow = 'hidden'; 
            sidebar.classList.add("active");
            overlay.classList.add("show");
        }
    }
}

window.customElements.define('card-nosotros-ep', cardNosotrosEP);
