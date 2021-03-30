
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 const fbConfig = {
    apiKey: "AIzaSyDuI6P-022zXO1QHjpz68rmSLB__3mkCDI",
    authDomain: "project-mangment-c4cab.firebaseapp.com",
    databaseURL: "https://project-mangment-c4cab.firebaseio.com",
    projectId: "project-mangment-c4cab",
    storageBucket: "project-mangment-c4cab.appspot.com",
    messagingSenderId: "259702240996",
    appId: "1:259702240996:web:a5d848e858765d9b4c5ef1"
  };

  firebase.initializeApp(fbConfig)
  firebase.firestore();

  export default firebase