// --- Système de langue RecToom ---
export function setGlobalLang(lang) {

    // Fonction sécurisée pour éviter les bugs sur register.html
    function safeSet(id, text) {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    }

    if (lang === 'fr') {
        // Page d'accueil (index.html)
        safeSet("title", "Bienvenue sur RecToom");
        safeSet("subtitle", "Une nouvelle génération de jeu social.");
        safeSet("enterBtn", "Entrer dans RecToom");
        safeSet("discordBtn", "Rejoindre le Discord");
        safeSet("aboutBtn", "À propos");

        // Pages login / register
        safeSet("loginBtn", "Se connecter");
        safeSet("registerBtn", "S'inscrire");

        // Footer global
        safeSet("footer", "RecToom © 2026 — Propulsé par Nexora");

    } else {
        // Page d'accueil (index.html)
        safeSet("title", "Welcome to RecToom");
        safeSet("subtitle", "A new generation of social gaming.");
        safeSet("enterBtn", "Enter RecToom");
        safeSet("discordBtn", "Join The Discord");
        safeSet("aboutBtn", "About");

        // Pages login / register
        safeSet("loginBtn", "Login");
        safeSet("registerBtn", "Register");

        // Footer global
        safeSet("footer", "RecToom © 2026 — Powered by Nexora");
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
