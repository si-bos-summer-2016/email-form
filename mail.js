$(document).ready(function() {

$(function() {

var form = $('#contactForm');
$(form).submit(function(e) {

  e.preventDefault();
  var formData = $(form).serialize();

  $.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
  })

      $('#messageSuccess').append('<p>Message sent successfully.</p>');
      $('#name,#email,#message').val("");
    });
  });
});
