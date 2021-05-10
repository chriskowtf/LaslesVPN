

  /* Burger Menu */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

$(document).ready(function(){
  $('.proba').slick({

  });
});

var $carousel = $('.carousel').flickity({
  autoPlay: 2000,
  wrapAround: true,
  selectedAttraction: 0.01
  
});

$carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex) {
  if ( !cellElement ) {
    return;
  }
  $( cellElement ).toggleClass('is-expanded');
  $carousel.flickity('reposition');
  
});

/* Animation */
$(window).scroll(function() {
  $('.inf_container2').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+800) {
      $(this).addClass('animate__backInRight');
    }
  });
});
$(window).scroll(function() {
  $('.img_illustration2').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+800) {
      $(this).addClass('animate__backInLeft');
    }
  });
});

/* Acordion Footer */
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
