/*const firebaseConfig = {
  
  };*/

  import firebase from "firebase";
 const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWasPdyTi38H7TgqRfYujH7Hh82Z6RCJU",
    authDomain: "to-do-app-7e4da.firebaseapp.com",
    projectId: "to-do-app-7e4da",
    storageBucket: "to-do-app-7e4da.appspot.com",
    messagingSenderId: "357565733541",
    appId: "1:357565733541:web:1a24aa41bc64fadf6fcb4c",
    measurementId: "G-RWFQSKZ17R"

 } );
 const db= firebaseApp.firestore();  
export default db;     
 