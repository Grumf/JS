/*--------------------------------------------------------------------
|                  LA MANIPULATION DES CONTENUS                       |
----------------------------------------------------------------------*/

function l(e) {
    console.log(e);
}

// -- Je souhaie récuperer mon lien ; comment proceder ?
var google = document.getElementById('google');
l(google);

// -- Maintenant, je souhaite acceder aux informations de ce lien...

    // -- A : Le lien vers lequel pointe la balise
    l(google.href)

    // -- B : L'ID de la balise
    l(google.id);

    // -- C : La classe de la balise
    l(google.className);

    // -- D : Le texte de la balise
    l(google.textContent);

/*
Modifier le contenu de mon lien :
Comme une variable classique, je vais simplement venir affecter une nouvelle valeur
*/

google.textContent = "Ta mère vend des chaises !";

/*--------------------------------------------------------------------
|               AJOUTER UN ELEMENT DANS MA PAGE                       |
----------------------------------------------------------------------*/

/*
Nous allons utiliser 2 méthodes :

1.La fonction document.createElement() va permettre de générer un nouvel élément dans le DOM ; que je pourrais par la suite modifier avec les méthodes que nous venons de voir.
PS : Ce nouvel élément est placé en mémoire.

*/

// -- Définition de l'élément
var span = document.createElement('span');

// -- Si je souhaite lui donner un ID
span.id = "MonSpan";

// -- Si je souhaite lui attribuer du contenu...
span.textContent = "Mon beau texte en JS !";

// -- Comment ajouter l'élément dans la page ?
// -- La fonction appendChild() va permettre de rajouter un enfant à un élément du DOM.
google.appendChild(span);

// -------- EXERCICE ------------

// -- Création de la balise h1
var h1 = document.createElement('h1');

// -- Création de la balise a
var a = document.createElement('a');

// -- Titre de mon article
h1.id = "titre";
a.textContent = "On s'éclate !!";

// -- Je veux donner un lien à mon lien
a.href = "#";

// -- appendChild()

    // -- Je mets mon lien a dans mon h1
    h1.appendChild(a);

    // -- Je met mon h1 dans ma page, dans mon body
    document.body.appendChild(h1);

// -- Correction du BONUS

    // -- Je veux que mon lien soit de couleur rouge
    a.style.color = "red";

    // -- Non souligné
    a.style.textDecoration ="none";