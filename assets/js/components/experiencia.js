import { dataJSON } from "../../data/data.js";
const data = JSON.parse(dataJSON); 

// LIST PROJECTS
class listProjects extends HTMLElement {
    constructor() {
        super();
        this.proyectos = data.proyectos;
    }

    connectedCallback() {
        this.renderContent('planificacion-territorial');
    }

    renderContent(tab) {
        let filteredProjects;
        switch (tab) {
            case 'planificacion-territorial':
                filteredProjects = data.proyectos.filter(p => p.id === '1');
                break;
            case 'arquitectura-urbanismo':
                filteredProjects = data.proyectos.filter(p => p.id === '2');
                break;
            case 'gestion-proyectos':
                filteredProjects = data.proyectos.filter(p => p.id === '3');
                break;
            case 'formacion':
                filteredProjects = data.proyectos.filter(p => p.id === '4');
                break;
            default:
                filteredProjects = [];
        }

        this.innerHTML = filteredProjects.map((data_) => {
            return ` 
                <div class="exp_card">
                    <div class="exp-image ${data_.id}-img no-select">
                        <img width="300" src="${data_.image}" alt="${data_.name}">
                    </div>
                    <div class="exp-content">
                        <h4>${data_.name}</h4>
                        ${data_.detalle}
                    </div>
                </div>`;
        }).join('');
    }
}

window.customElements.define('list-proyectos', listProjects);

// Manejo de pestañas
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#projNavTab a');
    const projContent = document.getElementById('projContent');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            // Activar la pestaña seleccionada
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Obtener el tipo de contenido de la pestaña y cargar los proyectos correspondientes
            const tabId = tab.getAttribute('data-tab');
            projContent.renderContent(tabId);
        });
    });
});
