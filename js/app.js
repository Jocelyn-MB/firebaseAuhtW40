import{signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";// mandar a llamar metodos
import { auth } from "./firebase.js";//se pone el puntito porque esta en la misma carpeta



const loginForm = document.querySelector("#formLogin");

loginForm.addEventListener("submit", async (e)=>{
  e.preventDefault();

  const email = loginForm["email"].value;
  const password = loginForm["password"].value;

  //console.log(`Correo: ${email}, Contraseña: ${password}`);


  try{
    const userCredentials= await signInWithEmailAndPassword(auth,email,password)

    console.log("Bienvenido"+ userCredentials.user.email);
    //console.log(userCredentials); ver si me regresa las credenciales
  }
  catch(error){
    
    if(error.code === 'auth/invalid-login-credentials'){
      console.log("constraseña incorrecta");
    }

  }
}
);
  

/* auth().signInWithEmailAndPassword(email, password)//se elimina firebase porque se esta pasando la varialbe
    .then((success) => {
      console.log('Succesfully signed in')
    }).catch((error) => {
      console.log('Error')
    });*/
   