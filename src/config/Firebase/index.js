import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCR1A4iiQeiauXsdWs06L7_1lf27xPTexk",
    authDomain: "web-programming---back-end.firebaseapp.com",
    databaseURL: "https://web-programming---back-end-default-rtdb.firebaseio.com",
    projectId: "web-programming---back-end",
    storageBucket: "web-programming---back-end.appspot.com",
    messagingSenderId: "613271148737",
    appId: "1:613271148737:web:f7376544d3917e817cdc40"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;