function setLang(lang) {
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
