// alert('WOW tu es sur ma page !');

//Commentaire uniligne

/*

Commentaires sur
plusieurs lignes

    Raccourci : CTRL /
        ou : CTRL SHIFT /

*/

// -- 1 Déclarer une valeur
 var Prenom;


// -- 2 affecte une valeur
Prenom = "Marie-Pierre";

// -- 3 Afficher la valeur de ma variable dans la console navigateur.
console.log(Prenom);

/*--------------------------------------------------------------------
|                      LES TYPES DE VARIABLES                         |
----------------------------------------------------------------------*/

    // -- "typeof" me permet de connaitre le type de ma variable
console.log(typeof Prenom);

    // -- Déclaration et Affectation d'une valeur à une variable
var Age = 22;

    // -- Afficher dans la console
console.log(Age);

    // -- Vérifier son type
console.log(typeof Age);




/*--------------------------------------------------------------------
|                     LA PORTEE DES VARIABLES                         |
|    Les variables déclarées directement à la racine du fichier       |
|    sont appelées variables "GLOBAL".                                |
|                                                                     |
|    Elles sont disponibles dans l'ensemble de votre document         |
|    y compris dans les fonction ou les boucles.                      |
|                                                                     |
|    La portée des variables GLOBALES s'arrête au fichier.            |
|    Si je change de page, les variables n'existent plus.             |
|                                                                     |
|    Les variables déclarées à l'intérieur d'une fonction sont        |
|    appelées variables "LOCAL".                                      |
|                                                                     |
|    Elles sont disponibles uniquement à l'intérieur de celles-ci.    |
----------------------------------------------------------------------*/

// -- Les variables de type FLOAT

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (VRAI/FAUX)

var unBooleen = false; // -- true
console.log(unBooleen);
console.log(typeof unBooleen);



/*--------------------------------------------------------------------
|                            LES CONSTANTES                           |
|                                                                     |
|    La déclaration CONST permet de créer une constante               |
|    accessible UNIQUEMENT en lecture...                              |
|                                                                     |
|   Sa valeur ne pourra pas être modifiée par des                     |
|    réaffectations ultérieures.                                      |
|                                                                     |
|    Une constante ne peux pas être déclarée à nouveau.               |
|                                                                     |
|    Généralement, par convention, les constantes sont en majuscule   |
----------------------------------------------------------------------*/

const HOST = "localhost";
const USER = "root";
const PASW = "mysql";

// Je ne peux pas faire celà...
// USER = "127.0.0.1";
// Uncaught SyntaxError: Identifier 'HOST' has already been declared



/*--------------------------------------------------------------------
|                            LA MINUTE INFO                           |
|                                                                     |
|    Au fur et à mesure que l'on affecte ou réaffecte des             |
|    valeurs à une variable, celle-ci prend la nouvelle               |
|    valeur et le nouveau type.                                       |
|                                                                     |
|    En Javascript (ECMA Script - ES), les variables sont auto-typées.|
|                                                                     |
|    Pour convertir une variable de type NUMBER en STRING et STRING   |
|    en NUMBER, je peux utiliser les fonctions natives de Javascript. |
|                                                                     |
----------------------------------------------------------------------*/


console.log('---');

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

// -- La fonction parseInt() permet de retourner un ENTIER à partir d'un STRING
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Je réaffecte une valeur à ma variable
unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

// -- la fonction parseFloat() permet de retourner un FLOAT à partir d'un STRING
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Conversion d'un NUMBER en STRING avec toString()
var unNombreQuiDevientString = 10;
console.log(unNombreQuiDevientString);
console.log(typeof unNombreQuiDevientString);
console.log( typeof unNombreQuiDevientString.toString() );