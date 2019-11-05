$(document).ready(function() {
    // Message Manager
    
    var $name = $('#name');
    var $email = $('#email');
    var $message = $('#message');
    $('#newMessageBtn').on('click', function(event){
      event.preventDefault();
      var entry = {
        name: $name.val(),
        email: $email.val(),
        message: $message.val(),
      };
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/messages',
        data: entry,
        success: function(newMessage){
          $name.append(newMessage.name);
          $email.append(newMessage.email);
          $message.append(newMessage.message);
          Swal.fire({
            title: 'Success!',
            text: 'Message Sent!',
            type: 'success',
            confirmButtonText: 'OK'
          })
          $('#contact-form').trigger('reset');
          //location.reload();       
        }
      });
    });
});