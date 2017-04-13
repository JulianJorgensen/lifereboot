// --------------------------------------------------
// SITE.JS
// --------------------------------------------------

$(document).foundation();

$(document).ready(function(){
  $('a').smoothScroll();

  $('#newsletter-signup-form')
    // form validation passed, form will submit if submit event not returned false
    .on("formvalid.zf.abide", function(ev,frm) {
      register($(this));
    })
    // to prevent form from submitting upon successful validation
    .on("submit", function(ev) {
      ev.preventDefault();
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
          $('#newsletter-signup-form #mailchimp-error').show().html(data.msg);          
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
