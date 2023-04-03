const url               = "https://afpatraining.snage.tech/login";
const apiKey            = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg2MjAsImV4cCI6MTY3OTQ3ODY4MH0.ZPhc7O7KJnEpeXLTKz1PNEWUqB_mFA4XefUFIEXWrGE";
const userMail          = document.getElementById("eMail");
const motDePasse        = document.getElementById("motDePasse");
const btnConnexion      = document.getElementById("btnConnexion");
const rejexMail         = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
const rejexMotDePasse   = /^(?=.*\d)(?=.*[!.?@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const token =sessionStorage.getItem('token');
if (token) {
    window.location.href ="./Profil.html";
}

btnConnexion.addEventListener("click", Event => {

    if (userMail.value === "" && motDePasse.value === "") {
        console.log("Les champs ne sont pas correctement remplis");
        alert("Vous n'avez pas correctement remplis le formulaire");
    }
    else if (!rejexMail.test(userMail.value)) {
        console.log("Adresse mail non valide");
        alert("L'adresse email saisie n'est pas correcte");
    }
    else if (!rejexMotDePasse.test(motDePasse.value)) {
        console.log("Mot de passe invalide");
        alert("Le mot de passe doit contenir une Majuscule, un Chiffre, un carractere speciale, et doit faire 8 carratere minimum");
    }
    else {
        axios.post(url, {
            email: eMail.value,
            password: motDePasse.value,
        },{
            headers : {
                'x-api-key' : `${apiKey}`
            }
        })
        .then(function(response){
            console.log("Donnée reçue: ", response.data);
            sessionStorage.setItem('token', response.data.token);
            window.location.href ="./Profil.html";
        })
        .catch(function(error) {
            console.log("Erreur: ",error);
            alert("Email et/ou le mot de passe sont incorrectes");
        });
    }

})