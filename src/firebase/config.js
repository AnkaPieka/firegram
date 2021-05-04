import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDne6joUSxL7l-sDMbhGztkQRrlXy1jfMg",
    authDomain: "firegram-tuto-691b6.firebaseapp.com",
    projectId: "firegram-tuto-691b6",
    storageBucket: "firegram-tuto-691b6.appspot.com",
    messagingSenderId: "566497808370",
    appId: "1:566497808370:web:174fd815792667ac53656b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { projectStorage, projectFirestore, timestamp };