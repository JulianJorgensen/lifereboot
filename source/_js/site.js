// --------------------------------------------------
// SITE.JS
// --------------------------------------------------

$(document).ready(function(){

  $(document).foundation();

  // Email protector
  $('a[data-email-protector]').emailProtector()


  // testimonials slider
  var testimonialsSlider = $('#testimonials-slider').royalSlider({
    addActiveClass: true,
    navigateByClick: false,
    loopRewind: true,
    fadeinLoadedSlide: false,
    autoHeight: true,
    sliderDrag: false,
    keyboardNavEnabled: true,
    numImagesToPreload: 1,
    autoPlay: {
      // autoplay options go gere
      enabled: true,
      pauseOnHover: true,
      delay: 4000
    }
  }).data('royalSlider');

});
