
/*--------------------------------------------------------------------
|                       LES FONCTIONS                                 |
----------------------------------------------------------------------*/

// -- Déclarer une fonction
// -- Cette fonction ne retourne aucune valeur

function ditBonjour(){
    // -- Lors de l'appel de cette fonction, les instructions ci-dessous seront executées...
    alert("Bonjour !");
}

// -- Je vais appeler ma fonction "ditBonjour" et déclencher ses instructions
ditBonjour()

// -- Déclarer une fonction qui prends une variable en paramètre
function Bonjour(Prenom, Nom){
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "<strong> !<p>")
}

// Appeler / Utiliser une fonction avec des parametres
Bonjour('Jacques','Chiraq');

/*-------------
EXERCICE :
*/

function Addition(nb1, nb2){
    return nb1 + nb2;
}

document.write(Addition(10, 5));