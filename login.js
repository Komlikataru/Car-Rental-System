document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (email && password) {
        
        window.location.href = 'about.html'; 
      } else {
        alert('Please enter valid email and password.'); 
      }
    });
  });