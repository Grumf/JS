
/* var laDate = new Date();

function getYourFckingAge(){
    var Prenom = prompt("Quel est ton Prénom ?");
    var Age = prompt("Bonjour "+ Prenom +" ! Quel âge as-tu ?" );
    alert("Tu es donc né en " + (laDate.getFullYear()-Age) + "!" );
    document.write("Bonjour " + Prenom + ", tu as " + Age + " ans.");
}

getYourFckingAge() */

// 1 - Initialisation des variables
var dateObj = new Date();
var anneeActuelle = dateObj.getFullYear();

// 2 - Création d'une fonction
function Wesh(){

    // 2a - Demander le Prenom
    let prenom = prompt("Hello ! What is your f*cking name ?", "<saisir votre nom>");
    // 2b - ajouter le Prenom et demander l'âge
    let age = parseInt( prompt("Hello "+ prenom +" How old are you b*tch ?"));
    // 2c - Déduire l'âge de l'année actuelle
    alert("HOLY SHIT ! So you're born in "+ ( anneeActuelle - age ) +" !");
    // 2d - Afficher tout dans la page
    document.write("Hello ! " + prenom + ", you're f*cking old, you are " + age + " years old.");}
// 3 - Execution de ma fonction
Wesh()