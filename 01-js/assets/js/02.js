// -- Déclarer un tableau indexé
var monTableau = [];
var myArray = new Array;

// -- affecter des valeurs à un tableau indexé
monTableau[0] = "Marie-Pierre";
monTableau[1] = "Hugo";
monTableau[2] = "Hamid";

// -- Afficher le contenu de mon tableau dans la console
console.log(monTableau[1]); // -- Hugo
console.log(monTableau[2]); // -- Hamid
console.log(monTableau); // -- Afficher toute les données du tableau

// -- Déclarer et Affecter des valeurs à un tableau indexé.
var nosPrenoms = ["Marie-Pierre","Thomas","Olivier","Chloé","Riad","Hugo"];
console.log(nosPrenoms);

// -- Déclarer et affecter des valeurs à un objet
var coordonnee = {
    prenom : "Hugo",
    nom : "LIEGEARD",
    age : 28
};

console.log(coordonnee);
console.log(typeof coordonnee);

// -- 2 tableaux indexés
var listeDePrenoms = ["Hugo", "Marie-Pierre", "Lounis","Romain"];
var listeDeNoms = ["LIEGEARD", "DUPOUX", "DGADEN","ELIE"];

// -- Tableau à 2 dimensions à partir de mes deux tableaux précédents.
var annuaire = [ listeDePrenoms, listeDeNoms ];
console.log(annuaire);

// -- Hugo LIEGEARD
console.log(annuaire[0][0]);
console.log(annuaire[1][0]);

// -- ------!!---exercice---!!------
/* var nomExo = [ "Marie-Pierre", "Chloé", "Hugo"];
var prenomExo = ["Dupoux", "Thuillier", "Liegeard"];
var annuaireDesStagiaires = [nomExo, prenomExo];

console.log(annuaireDesStagiaires); */


// -- ------!!---correction---!!------

var AnnuaireDesStagiaires = [
    { prenom : 'Hugo', nom: 'LIEGEARD', tel : '0783 97 15 15'},
    { prenom : 'Chloé', nom: 'THUILLIER', tel : 'XX XX XX XX XX'},
    { prenom : 'Anis', nom: 'CHAHBANI', tel : 'XX XX XX XX XX'},
]

console.log(AnnuaireDesStagiaires); // -- Affiche tout le tableau
console.log(AnnuaireDesStagiaires[1]); // -- Récupère toute les infos sur Chloé (tel, nom, prénom)
console.log(AnnuaireDesStagiaires[1]['prenom']); // -- Récupère le prénom de Chloé (Chloé)
console.log(AnnuaireDesStagiaires[1].prenom); // -- Autre manière


// -- Tableau complexe

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts); // -- Affiche tout le tableau
console.log(Contacts[0].coordonnees.tel.port); // -- Affiche le portable de [0] (Hugo)
console.log(Contacts[1].coordonnees.tel.port); // -- Affiche le portable de [1] (Rodrigue)



/*--------------------------------------------------------------------
|                      AJOUTER UN ELEMENT                             |
----------------------------------------------------------------------*/

var Couleurs = [ "Rouge", "Jaune", "Vert"];

/*
Si je souhaite ajouter un élément dans mon tableau je fais appel à la fonction
push() qui me renvoie le nombre d'éléments de mon tableau que je peux récuperer
facultativement dans une variable.
*/

console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(NombreElementsDeMonTableau);

/*
NB : La fonction unshift() permet d'ajouter un ou plusieurs éléments
en début de tableau (.push l'ajoute en dernier)
*/


/*--------------------------------------------------------------------
|             RECUPERER ET SORTIR DE DERNIER ELEMENT                 |
----------------------------------------------------------------------*/

var monDernierElement = Couleur.pop();
console.log(monDernierElement);
console.log(Couleurs);

/*
La fonction .pop() me permet de supprimer le dernier élément de mon tableau
et d'en récuperer la valeur.

La même chose est possible avec le premier élément en utilisant la 
fonction shift()

NB : La fonction splice() vous permet de faire sortir un ou plusieurs
éléments de notre tableau.
*/
