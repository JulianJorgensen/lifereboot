// --------------------------------------------------
// SITE.JS
// --------------------------------------------------

$(document).foundation();

$(document).ready(function(){

  $("#newsletter-signup-form").on("submit", function(ev) {
    ev.preventDefault();
  });

  $("#newsletter-signup-form").on("formvalid.zf.abide", function(e,frm) {
    $.getJSON(this.action + "?callback=?",$(this).serialize());
    $(".newsletter-signup-container").hide();
    $("#newsletter-signup #thank-you").show();
  });
  $('a').smoothScroll();

  // Email protector
  $('a[data-email-protector]').emailProtector()


  // testimonials slider
  var testimonialsSlider = $('#testimonials-slider').royalSlider({
    addActiveClass: true,
    navigateByClick: false,
    loopRewind: true,
    fadeinLoadedSlide: false,
    sliderDrag: false,
    sliderTouch: false,
    keyboardNavEnabled: true,
    numImagesToPreload: 1,
    allowCSS3: false,
    autoPlay: {
      // autoplay options go gere
      enabled: true,
      pauseOnHover: true,
      delay: 8000
    }
  }).data('royalSlider');

});
