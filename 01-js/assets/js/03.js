
/*--------------------------------------------------------------------
|                      LA CONCATENATION                               |
----------------------------------------------------------------------*/

var debutDePhrase = "Aujourd'hui ";
var laDate = new Date();
var suiteDePhrase = ", sont présent :";
var nombreDeStagiaires = ' ' + 18;
var finDePhrase = "stagiaire(s).<br>";

/*  Nous souhaitons maintenant, grâce à la concatenation, afficher tout ce petit monde
en un seul morceau ! */

document.write( debutDePhrase + laDate.getDate() + "/" + (laDate.getMonth()+1) + '/' + laDate.getFullYear() + nombreDeStagiaires + finDePhrase );

// -- Exercice

var phrase1 = "Je m'appelle ";
var phrase2 = "Chloé et j'ai ";
var age = 127;
var phrase3 = " ans !";

document.write(phrase1 + phrase2 + age + phrase3);