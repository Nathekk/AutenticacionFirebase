import {initializeApp} from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js';
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

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

onAuthStateChanged(auth, (user) => {
    if (user) {
        const email = user.email;
        const uid = user.uid;

        document.getElementById("nombre").textContent = email;
        document.getElementById("email").textContent = email;
        document.getElementById("uidUsuario").textContent = uid;
    } else {
        window.location.href = "/login";
    }
});

document.getElementById('btnLogout').addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = "/login";
    }).catch((error) => {
        console.error("Error al cerrar sesión: ", error);
    });
});
