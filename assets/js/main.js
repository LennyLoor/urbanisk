
/* SLIDER */
var slider = $('.urb_home_slider img');
var currentIndex = 0;
function nextImage() {
  var currentImg = $(slider[currentIndex]);
  var nextIndex = (currentIndex + 1) % slider.length;
  var nextImg = $(slider[nextIndex]);
  // Aplica el efecto de zoom-out y fadeOut a la imagen actual
  currentImg.css({ transform: 'scale(1)' }).animate({ opacity: 0 }, 1000, function () {
    $(this).css({ transform: 'scale(1.1)' }).hide(); // Ajuste para el próximo ciclo
  });
  // Muestra la siguiente imagen con zoom-in y fadeIn
  nextImg.css({ transform: 'scale(1.1)', display: 'block', opacity: 0 })
    .animate({ transform: 'scale(1)', opacity: 1 }, 1000);
  currentIndex = nextIndex;
}
setInterval(nextImage, 3000);// Ejecutar cada 3 segundos


/* SERVICIOS */
function flipCard(element) {
  const card = element.closest('.serv_card');
  if (card.classList.contains('flipped')) {
    card.classList.remove('flipped');
    return;
  }
  document.querySelectorAll('.serv_card.flipped').forEach(openCard => {
    openCard.classList.remove('flipped');
  });
  card.classList.add('flipped');
}

/* TERMINOS Y CONDICIONES */
// Obtener el modal
var modal = document.getElementById("modal_tc");

// Obtener el botón que abre el modal
var btn = document.getElementById("abrirModal");

// Obtener el <span> que cierra el modal
var span = document.getElementById("cerrarModal");

const checkbox_terminos = document.getElementById('terminos');
const btn_form = document.getElementById("btn-form");

checkbox_terminos.addEventListener('change', function () {
  if (checkbox_terminos.checked) {
    btn_form.classList.remove('btn-disabled'); // Eliminar clase 'disabled'
    btn_form.classList.add('btn-primary');     // Agregar clase 'primary'
  } else {
    btn_form.classList.remove('btn-primary');  // Eliminar clase 'primary'
    btn_form.classList.add('btn-disabled');    // Agregar clase 'disabled'
  }
});

// Cuando el usuario haga clic en el enlace, abre el modal
btn.onclick = function () {
  modal.style.display = "block";
  document.body.style.overflow = 'hidden';
  btn_form.classList.add('ee')
  event.preventDefault();  // Evita que el enlace haga scroll
}

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = 'auto';
}
/*  */
document.querySelector(".menu-toggle").addEventListener("click", function () {
  const menu = document.querySelector(".urb_nav");
  if (menu.classList.contains("active")) {
    menu.classList.add("fade-out");
    setTimeout(() => {
      menu.classList.remove("active", "fade-out");
      document.getElementById('header-scroll').style.backgroundColor = "transparent"
    }, 500);
  } else {
    menu.classList.add("active");
    document.getElementById('header-scroll').style.backgroundColor = "#006082"
  }
  this.classList.toggle("active");
});


document.querySelectorAll(".listItem").forEach(item => {
  item.addEventListener("click", function () {
    const menu = document.querySelector(".urb_nav");
    menu.classList.add("fade-out");
    setTimeout(() => {
      menu.classList.remove("active", "fade-out");
    }, 500);
    document.querySelector(".menu-toggle").classList.remove("active");
  });
});

/*  */
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("urb_ali-slider");
  const images = [
    "./assets/image/alianza_1.webp",
    "./assets/image/alianza_2.webp",
    "./assets/image/alianza_3.webp",
    "./assets/image/alianza_4.webp",
    "./assets/image/alianza_5.webp"
  ];

  function populateSlider() {
    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      slider.appendChild(img);
    });
    images.forEach(src => { // Duplicamos para efecto infinito
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      slider.appendChild(img);
    });
  }

  populateSlider();
});