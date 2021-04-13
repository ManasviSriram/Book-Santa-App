import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA44_O0lw1fSP_xWsDwa6lnM3S2WR4JY7U",
    authDomain: "book-santa-ed023.firebaseapp.com",
    databaseURL: "https://book-santa-ed023-default-rtdb.firebaseio.com",
    projectId: "book-santa-ed023",
    storageBucket: "book-santa-ed023.appspot.com",
    messagingSenderId: "723168180972",
    appId: "1:723168180972:web:ecb9b77d611e22765103c9"
  };
  // Initialize Firebase
  
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); } 
export default firebase.firestore()