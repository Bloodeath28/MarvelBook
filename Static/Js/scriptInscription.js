
const url = "https://afpatraining.snage.tech/docs/#/Pages/signup";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg2MjAsImV4cCI6MTY3OTQ3ODY4MH0.ZPhc7O7KJnEpeXLTKz1PNEWUqB_mFA4XefUFIEXWrGE";
const pseudo = document.getElementById("pseudo").value;
const eMail = document.getElementById("eMail").value;
const motDePasse = document.getElementById("motDePasse").value;
const valideMotDePasse = document.getElementById("validationDeMotDePasse").value;
const btnInscription = document.getElementById("btnInscription");


btnInscription.addEventListener("click", Event => {
    if ( motDePasse !== valideMotDePasse ) {
        console.log("Les deux mots de passe sont différents");
        alert("Les deux mots de passe sont différents");
    }
    

})