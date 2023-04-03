const token = sessionStorage.getItem('token');

const utilisateurConnecter = document.getElementById("utilisateurConnecter");
const utilisateurNonConnecter = document.getElementById("utilisateurNonConnecter");
const btnDeconnection = document.getElementById("btnDeconnexion");

if (token) {
    utilisateurNonConnecter.style.display = "none";
    utilisateurConnecter.style.display = "block";
}