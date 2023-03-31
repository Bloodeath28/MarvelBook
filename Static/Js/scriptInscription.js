
const url               = "https://afpatraining.snage.tech/signup";
const apiKey            = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg2MjAsImV4cCI6MTY3OTQ3ODY4MH0.ZPhc7O7KJnEpeXLTKz1PNEWUqB_mFA4XefUFIEXWrGE";
const pseudo            = document.getElementById("pseudo");
const eMail             = document.getElementById("eMail");
const motDePasse        = document.getElementById("motDePasse");
const valideMotDePasse  = document.getElementById("validationDeMotDePasse");
const checkBox          = document.getElementById("checkBox");
const btnInscription    = document.getElementById("btnInscription");
const rejexMail         = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
const rejexMotDePasse   = /^(?=.*\d)(?=.*[!.?@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

btnInscription.addEventListener("click", Event => {

    if (pseudo.value === "" && eMail.value === "" && motDePasse.value === "" && valideMotDePasse.value === "" ) {
        console.log("Un des champs n'est pas correctement renseigné");
        alert("Vous n'avez pas remplit correctement le formulaire");
    }
    else if ( !rejexMail.test(eMail.value)) {
        console.log("Adresse mail non valide");
        alert("L'adresse email saisie n'est pas correcte");
    }
    else if ( motDePasse.value != valideMotDePasse.value ) {
        console.log("Les deux mots de passe sont différents");
        alert("Les deux mots de passe sont différents");
    }
    else if ( !rejexMotDePasse.test(motDePasse.value)) {
        console.log("Mot de passe invalide");
        alert("Le mot de passe doit contenir une Majuscule, un Chiffre, un carractere speciale, et doit faire 8 carratere minimum");
    }
    else if ( checkBox.checked != true) {
        console.log("Vous devez accepter les conditions d'utilisations");
        alert("Vous devez accepter les conditions d'utilisations");
    }
    else {
        axios.post(url, {
            email: eMail.value,
            password: motDePasse.value,
            username: pseudo.value,

        },{
            headers : {
                'x-api-key' : `${apiKey}`
            }
        })
        .then(function(response){
            console.log("Donnée reçue: ", response.data);
            window.location.href ="/views/Connexion.html";
        })
        .catch(function(error){
            console.log("Erreur: ",error);
        });
    }
});
//Marbo@30032023%