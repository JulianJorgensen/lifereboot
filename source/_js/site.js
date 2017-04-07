// --------------------------------------------------
// SITE.JS
// --------------------------------------------------

$(document).foundation();

$(document).ready(function(){
  $('a').smoothScroll();

  $("#newsletter-signup-form").on("submit", function(ev) {
    ev.preventDefault();
  });

  $("#newsletter-signup-form").on("formvalid.zf.abide", function(e,frm) {
    register($(this));
  });


  function register($form) {
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      cache       : false,
      dataType    : 'json',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
      success     : function(data) {
        if (data.result != "success") {
          // Something went wrong, do something to notify the user. maybe alert(data.msg);
        } else {
          $(".newsletter-signup-container").hide();
          $("#newsletter-signup #thank-you").show();
        }
      }
    });
  }

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
