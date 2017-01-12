// --------------------------------------------------
// newsletter.js
// --------------------------------------------------

$(document).ready(function(){

  // Initialize Foundation
  $(document).foundation();


  // mailchimp newsletter form
  var $form = $('.newsletter-signup-form');

  $form.on("submit", function(ev) {
    ev.preventDefault();
  });

  $form.on("formvalid.zf.abide", function(ev,frm) {
    console.log('newsletter form valid');
    register($form);
  });

});

function register($form) {
  console.log('newsletter registering form');
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
        var message = data.msg || "Sorry. Unable to subscribe. Please try again later."
        $('.response-error').html(message);
      } else {
        $(".newsletter-signup").fadeOut();
        $(".newsletter-confirmation").fadeIn();
      }
    }
  });
}
