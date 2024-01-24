import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";

// Código para verificar el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Si el usuario está autenticado, puedes realizar acciones específicas aquí si es necesario.
    // No es necesario redirigir automáticamente en este punto.
    console.log("Usuario autenticado:", user.email);
  } else {
    // Si el usuario no está autenticado, muestra el formulario de inicio de sesión
    const loginForm = document.querySelector("#formLogin");

    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = loginForm["email"].value;
      const password = loginForm["password"].value;

      try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log("Bienvenido " + userCredentials.user.email);
        // Después de iniciar sesión, puedes redirigir a la página principal
        window.location.href = "/principal.html";
      } catch (error) {
        if (error.code === 'auth/invalid-login-credentials') {
          console.log("Contraseña incorrecta");
        }
      }
    });
  }
});

// Agregar el evento para cerrar sesión
document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.querySelector("#logoutButton");
  console.log("Botón Cerrar Sesión seleccionado:", logoutButton);

  logoutButton.addEventListener("click", async () => {
    try {
      await signOut(auth);
      console.log("Sesión cerrada");
      // Después de cerrar sesión, redirige a la página de inicio de sesión
      window.location.href = "/index.html";
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  });
});



  

/* auth().signInWithEmailAndPassword(email, password)//se elimina firebase porque se esta pasando la varialbe
    .then((success) => {
      console.log('Succesfully signed in')
    }).catch((error) => {
      console.log('Error')
    });*/
   