(function(){

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const config = {
    authDomain: "litestore-in.firebaseapp.com",
    databaseURL: "https://litestore-in.firebaseio.com",
    projectId: "litestore-in",
    storageBucket: "litestore-in.appspot.com",
    appId: "1:493025178485:web:b20223af21733687b3193c",
  };
  firebase.initializeApp(config);
  
  //Get elements
  const inputEmail = document.getElementById('inputEmail');
  const inputPassword = document.getElementById('inputPassword');
  const loginButton = document.getElementById('loginButton');
  const logoutButton = document.getElementById('logoutButton');
  const signupButton = document.getElementById('signupButton');
  
  //add login event
  loginButton.addEventListener('click', e =>{
    const email = inputEmail.value;
    const pass = inputPassword.value;
    const auth = firebase.auth();
    //signin
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  }());
