document.addEventListener("turbolinks:load", function() {
  $("#user-sign-in").on("ajax:beforeSend", function(event, settings) {
    const xhr = event.detail[0];
    xhr.setRequestHeader('JWT-AUD', 'backend');
  });
});
