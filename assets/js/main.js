



/* SLIDER */
var slider = $('.urb_home_slider');

setInterval(function() {
  slider.children(':last-child').fadeOut(3000, function() {
    $(this).prependTo(slider).show();
  })
}, 6000);

/* SCROLL */ 
function flipCard(element) {
  const card = element.closest('.serv_card');
  if (card) {
      card.classList.toggle('flipped');
  }
} 
// Obtener el modal
var modal = document.getElementById("modal_tc");

// Obtener el botón que abre el modal
var btn = document.getElementById("abrirModal");

// Obtener el <span> que cierra el modal
var span = document.getElementById("cerrarModal");

// Cuando el usuario haga clic en el enlace, abre el modal
btn.onclick = function() {
    modal.style.display = "block";
    event.preventDefault();  // Evita que el enlace haga scroll
}

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; 
}
 