
/* LOADER PAGE */
$('body').css({ overflow: 'hidden' });
const loadPage = () => {
  $(".urb_loader").fadeOut("slow", () => {
    $('body').css({ overflow: 'auto' });
  });
}
window.onload = loadPage;

/* SCROLL UP */
const scrollUp = document.querySelector('.urb_scrollUp');
window.addEventListener('scroll', (e) => {
  scrollValue = window.pageYOffset;
  if (scrollValue <= 100) {
    scrollUp.style.classList = "slideInUp";
    scrollUp.style.display = "none";
  } else {
    scrollUp.style.display = "block";
  }
});

scrollUp.addEventListener('click', () => {
  $('html, body').animate({
    scrollTop: 0,
  }, 500);
});

/* PDF - VISUALIZACIÓN */
function verPortafolio() {
  window.open('assets/doc/PORTAFOLIO_URBANISTIK_2025.pdf', '_blank');
}

/* SLIDER - HOME */
var slider = $('.urb_home_slider img');
var currentIndex = 0;
function nextImage() {
  var currentImg = $(slider[currentIndex]);
  var nextIndex = (currentIndex + 1) % slider.length;
  var nextImg = $(slider[nextIndex]);

  currentImg.css({ transform: 'scale(1)' }).animate({ opacity: 0 }, 1000, function () {
    $(this).css({ transform: 'scale(1.1)' }).hide();
  });

  nextImg.css({ transform: 'scale(1.1)', display: 'block', opacity: 0 })
    .animate({ transform: 'scale(1)', opacity: 1 }, 1000);
  currentIndex = nextIndex;
}
setInterval(nextImage, 3000);// Ejecuta cada 3 segundos


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
const modal = document.getElementById("modal_tc");
const btn = document.getElementById("abrirModal");
const span = document.getElementById("cerrarModal");
 
btn.onclick = function () {
  modal.style.display = "block";
  document.body.style.overflow = 'hidden'; 
  event.preventDefault();  // Evita que el enlace haga scroll
}

span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = 'auto';
}

/* NAVBAR */
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

/* SLIDER ALIANZAS */
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