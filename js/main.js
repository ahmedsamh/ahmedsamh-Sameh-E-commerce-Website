$(document).ready(function() {
    $("form").submit(function(e) {
      e.preventDefault();
      if ($("#email").val() === "" || $("#password").val() === "") {
        alert("Please enter a valid email and password");
      } else {
        alert("Login successful!");
      }
    });
  });
  