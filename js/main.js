const form = document.getElementById('form')
const btn = document.getElementById('btn')


form.addEventListener('button', (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const pass = document.getElementById('password').value
    auth.createUserWithEmailAndPassword(email, pass)
        .then(function (response) {
        console.log("registro de email exitoso.")
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("codigo de error:",errorCode)
            console.log("mensaje de error:",errorMessage)
        });
})