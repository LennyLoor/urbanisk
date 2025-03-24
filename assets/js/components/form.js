
(() => {
    const elements = [{
        form: document.formContacto,
        check: document.querySelector("#terminos"),
        btn: document.querySelector("#urb_btn-form"),
        btn_confirm: document.querySelector(".urb_btn-confirm"),
        btn_load: document.querySelector(".urb_btn-load"),
        btn_error: document.querySelector(".urb_msm-error"),
        inputs: document.querySelectorAll('[data-tipo]')
    }];
    elements.forEach((element) => {
        /* check */
        element.check.addEventListener('change', function () {
            if (element.check.checked) {
                element.btn.disabled = false;
            } else {
                element.btn.disabled = true;
            }
        });
        /* Datos */
        async function senEmail(event) {
            event.preventDefault();
            var data = new FormData(event.target);
            
            //INPUTS - MENSAJE CARGANDO
            element.inputs.forEach(input => {
                input.disabled = true;
            });
            element.btn.style.display = 'none';
            element.btn_load.style.display = 'block';

            //RESPUESTA
            fetch(event.target.action, {
                method: element.form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {

                if (response.ok) {
                    element.form.reset();
                    element.inputs.forEach(input => {
                        input.disabled = false;
                    });
                    element.btn_load.style.display = 'none';
                    element.btn_confirm.style.display = 'block';
                    setTimeout(() => {
                        element.btn_confirm.style.display = 'none';
                        element.btn.style.display = 'block';
                    }, 2500);
                } else {
                    element.btn_error.style.display = 'flex';
                    element.btn_load.style.display = 'none';
                    setTimeout(() => {
                        element.btn_error.style.display = 'none';
                        element.btn.style.display = 'block';
                    }, 2500);
                }

            })
        }
        element.form.addEventListener("submit", senEmail);

    })
    /* FORM | VALIDACIONES */
    const inputs = document.querySelectorAll('[data-tipo]');

    inputs.forEach(input => {
        input.addEventListener('blur', (input) => {
            validacion(input.target);
        });
    })
    /*  */
    /* VALIDACION */
    function validacion(input) {

        const tipoDeInput = input.dataset.tipo;
        const msmError = input.parentElement.querySelector('.msm-error');

        if (tipoDeInput != undefined) {

            if (input.validity.valid) {
                input.classList.remove('input-invalid');
                msmError.innerHTML = '';
                msmError.style.display = "none";
            } else {
                input.classList.add('input-invalid');
                msmError.innerHTML = mostrarMensajeDeError(tipoDeInput, input);
                msmError.style.display = "block";
            }
        }

    }

    /* TIPO DE ERRORES */
    const tipoDeErrores = [
        'valueMissing',
        'patternMismatch'
    ]

    /* MENSAJE DE ERROR */
    const mensajeDeError = {
        nombre: {
            valueMissing: 'Ingresa la información requerida.',
        },
        email: {
            valueMissing: 'Ingresa la información requerida.',
            patternMismatch: 'El correo no es valido.',
        },
        asunto: {
            valueMissing: 'Ingresa la información requerida.',
        },
        mensaje: {
            valueMissing: 'Ingresa la información requerida.',
        }
    }

    /* CAMBIAR MENSAJE DE ERROR */
    function mostrarMensajeDeError(tipoDeInput, input) {
        let mensaje = "";
        tipoDeErrores.forEach((error) => {
            if (input.validity[error]) {
                mensaje = mensajeDeError[tipoDeInput][error]
            }
        })
        return mensaje
    }



})();