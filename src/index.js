document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const registerLink = document.getElementById("register-link");
    const registerFormContainer = document.getElementById("register-form-container");
    const registerOption = document.getElementById("register-option");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;
  
      // Validar las credenciales
      if (username === "noel19102002ledezma@gmail.com" && password === "noel1910") {
        // Credenciales válidas, redirigir al usuario a la página deseada
        window.location.href = "/app-root";
      } else {
        // Credenciales inválidas, mostrar un mensaje de error
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
      }
    });
  
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("register-username").value;
      const password = document.getElementById("register-password").value;
  
      // Guardar el nuevo usuario en el almacenamiento local
      localStorage.setItem(username, password);
  
      // Limpiar el formulario después de registrar al usuario
      document.getElementById("register-username").value = "";
      document.getElementById("register-password").value = "";
  
      alert("Usuario registrado exitosamente");
  
      // Redirigir al usuario a la página deseada después del registro
      window.location.href = "/app-root";
    });
  
    registerLink.addEventListener("click", function(event) {
      event.preventDefault();
      registerFormContainer.style.display = "block";
      registerOption.style.display = "none";
    });
  });
  
  
  
  
  