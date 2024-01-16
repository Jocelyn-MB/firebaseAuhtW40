
function loginUser() {

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  console.log(`Correo: ${email}, Contraseña: ${password}`);

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((success) => {
      console.log('Succesfully signed in')
    }).catch((error) => {
      console.log('Error')
    });
}