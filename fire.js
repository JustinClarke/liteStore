import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoDpQLYraFe8LUzBq4GvE6LYWFre5SsdE",
    authDomain: "litestore-89d10.firebaseapp.com",
    databaseURL: "https://litestore-89d10-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "litestore-89d10",
    storageBucket: "litestore-89d10.appspot.com",
    messagingSenderId: "493025178485",
    appId: "1:493025178485:web:b20223af21733687b3193c",
    measurementId: "G-CGZJTXFR8E"
  };

  const fire = firebase.initialzeApp(firebaseConfig);

  export default fire;