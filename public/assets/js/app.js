(function(){
   
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
