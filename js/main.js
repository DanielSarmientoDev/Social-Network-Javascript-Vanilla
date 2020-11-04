

const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

const loginCheck = user =>{
  if (user){
    loggedInLinks.forEach((link) => (link.getElementsByClassName.display = 'block'))
    loggedOutLinks.forEach((link) => (link.getElementsByClassName.display = 'none')
)
} else{
    loggedInLinks.forEach((link) => (link.getElementsByClassName.display = 'none'))
   loggedOutLinks.forEach((link) => (link.getElementsByClassName.display = 'block'))
  }
}


const formsignup = document.getElementById('form-signup')
const formsignin = document.getElementById('form-signin')
const emailHelp = document.querySelector('#emailHelp')
//Registro con correo
formsignup.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.getElementById('email-signup').value
    const pass = document.getElementById('password-signup').value
    auth.createUserWithEmailAndPassword(email, pass)
        .then((userCredential)=> {
              // clear the form
      formsignup.reset();
        $('#signup-modal').modal('hide')
        console.log("registro de email exitoso.")
        $('.toast').toast('show')

        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("codigo de error:",errorCode)
            console.log("mensaje de error:",errorMessage)
            switch(errorCode){
                case 'auth/email-already-in-use':
                {
                    emailHelp.innerHTML = "email repetido"
                    emailHelp.classList.toggle("error")
                }
                break
            }
        });
})

//iniciar sesion con correo
formsignin.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.getElementById('email-signin').value
    const password = document.getElementById('password-signin').value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) =>{
                // clear the form
    formsignin.reset();
            $('#signin-modal').modal('hide')
        console.log('inicio de sesion exitoso.')
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("codigo de error:",errorCode)
            console.log("mensaje de error:",errorMessage)
            
        });
})

// list for auth state changes
auth.onAuthStateChanged((user)=> {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      loginCheck(user)
      // ...
    } else {
      // User is signed out.
      // ...
      console.log("signout");
      loginCheck(user)
    }
  });


// Logout
const logoutlink = document.getElementById("logout")

logoutlink.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hola")
    auth.signOut().then(() => {
      console.log("signup out");
    });
  });



// events
