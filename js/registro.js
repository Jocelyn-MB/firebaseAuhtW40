import{createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";// mandar a llamar metodos
import { auth } from "./firebase.js";//se pone el puntito porque esta en la misma carpeta
//function loginUser() {


const RegistroForm = 
document.querySelector("#FormRegistro");

RegistroForm.addEventListener("submit", async (e)=>{
  e.preventDefault();

  const email = RegistroForm["email-registro"].value;
  const password = RegistroForm["password-registro"].value;

  //console.log(`Correo: ${email}, Contraseña: ${password}`);


  try{
    const userCredentials= await createUserWithEmailAndPassword(auth,email,password)

    console.log("Bienvenido"+ userCredentials.user.email);
    //console.log(userCredentials); ver si me regresa las credenciales
  }
  catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log("Correo electrónico ya en uso");
    } else if (error.code === 'auth/invalid-email') {
      console.log("Correo electrónico inválido");
    } else if (error.code === 'auth/weak-password') {
      console.log("Contraseña débil");
    }
  }
  
}
);
  //var email = document.getElementById("email").value;
  //var password = document.getElementById("password").value;


  //console.log(`Correo: ${email}, Contraseña: ${password}`);
