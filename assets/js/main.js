



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