import {initializeApp} from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js'
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC3W4cTYgKShztej1y05MhG7xs27YbVS84",
    authDomain: "autenticacion-82296.firebaseapp.com",
    projectId: "autenticacion-82296",
    storageBucket: "autenticacion-82296.firebasestorage.app",
    messagingSenderId: "919005031794",
    appId: "1:919005031794:web:4715036f8b11274626c1eb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('formRegistro').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mensajeDiv = document.getElementById('mensaje');

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            mensajeDiv.innerHTML = `<div class="alert alert-success">Todo perfect..redirigiendo...</div>`;
            window.location.href = "./login.html";
            document.getElementById('formRegistro').reset();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            let texto = "No se pudo completar el registro.";
            if (error.code === "auth/email-already-in-use") {
                texto = "Este correo ya está registrado";
            }
            mensajeDiv.innerHTML = `<div class="alert alert-danger">${texto}</div>`;
        });
});