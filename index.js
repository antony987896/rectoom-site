// --- Système de langue RecToom ---
export function setLang(lang) {
    if (lang === 'fr') {
        document.getElementById("title").innerText = "Bienvenue sur RecToom";
        document.getElementById("subtitle").innerText = "Une nouvelle génération de jeu social.";
        document.getElementById("enterBtn").innerText = "Entrer dans RecToom";
        document.getElementById("discordBtn").innerText = "Rejoindre le Discord";
        document.getElementById("aboutBtn").innerText = "À propos";
        document.getElementById("footer").innerText = "RecToom © 2026 — Propulsé par Nexora";

        document.getElementById("loginBtn").innerText = "Se connecter";
        document.getElementById("registerBtn").innerText = "S'inscrire";

    } else {
        document.getElementById("title").innerText = "Welcome to RecToom";
        document.getElementById("subtitle").innerText = "A new generation of social gaming.";
        document.getElementById("enterBtn").innerText = "Enter RecToom";
        document.getElementById("discordBtn").innerText = "Join The Discord";
        document.getElementById("aboutBtn").innerText = "About";
        document.getElementById("footer").innerText = "RecToom © 2026 — Powered by Nexora";

        document.getElementById("loginBtn").innerText = "Login";
        document.getElementById("registerBtn").innerText = "Register";
    }
}


// --- Firebase Authentication ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKDP95h9aH8Dq3OYMYPZZghy72kklb3Bg",
  authDomain: "rectoom-site.firebaseapp.com",
  projectId: "rectoom-site",
  storageBucket: "rectoom-site.firebasestorage.app",
  messagingSenderId: "907780061957",
  appId: "1:907780061957:web:5a5f856ee56a372fb4956c"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Inscription
export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// Connexion
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

// Déconnexion
export function logout() {
    return signOut(auth);
}

// Listener de session
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Connecté :", user.email);
    } else {
        console.log("Déconnecté");
    }
});
