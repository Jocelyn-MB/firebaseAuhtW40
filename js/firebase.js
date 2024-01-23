// Import the functions you need from the SDKs you need

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"//librerias
import{getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"//metodo login
//import {getFirestore} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"//

const firebaseConfig = {
  apiKey: "AIzaSyBsgg_UYWJtJECN5rgTUXnER-ksIBppMME",
  authDomain: "web40-c4af6.firebaseapp.com",
  projectId: "web40-c4af6",
  storageBucket: "web40-c4af6.appspot.com",
  messagingSenderId: "932455799644",
  appId: "1:932455799644:web:2dddd4173ef3e5b49bff99",
  measurementId: "G-XCF01NEBYL",
};
  //initialize firesbase
  export const app= initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  //export const db = getFirestore(app);