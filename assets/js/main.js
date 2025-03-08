
/* SLIDER */
/* var slider = $('.urb_home_slider');

setInterval(function() {
  slider.children(':last-child').fadeOut(3000, function() {
    $(this).prependTo(slider).show();
  })
}, 6000);
 */
/* SCROLL */
function flipCard(element) {
  const card = element.closest('.serv_card');
  if (card) {
    card.classList.toggle('flipped');
  }
}
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