import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA-X3sopQgmoglrDEp74ZARWyS1_lGJd_Y",
    authDomain: "aula1-bf62c.firebaseapp.com",
    databaseURL: "https://aula1-bf62c-default-rtdb.firebaseio.com",
    projectId: "aula1-bf62c",
    storageBucket: "aula1-bf62c.appspot.com",
    messagingSenderId: "1047586581246",
    appId: "1:1047586581246:web:82c6cfd93273cfe22b13af",
    measurementId: "G-708RTNR1HK"
  };

  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase;