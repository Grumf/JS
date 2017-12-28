/*--------------------------------------------------------------------
|                            LE DOM                                   |
|   Le Dom est une interface de developpement en JavaScript pour html |
|   Grace au DOM je vais être en mesure d'acceder / modifier mon html |
|                                                                     |
|   L'objet "document" : c'est le point d'entré de mon contenu html ! |
|                                                                     |
|    Chaque page chargée dans mon navigateur a un objet "document".   |
----------------------------------------------------------------------*/

// -- Comment-puis faire pour récuperer les différentes informations de ma page HTML ?

/*--------------------------------------------------------------------
|                document.getElementById                              |
|                                                                     |
|   document.getElementById() : C'est une fonction qui va             |
|   permettre de récuperer un élément HTML à partir de son            |
|   identifiant unique : ID                                           |
|                                                                     |
----------------------------------------------------------------------*/

var contenu = document.getElementById('bonjour');
console.log(bonjour);

/*--------------------------------------------------------------------
|               document.getElementByClassName                        |
|                                                                     |
|   document.getElementByClassName() : C'est une fonction qui va      |
|   permettre de récuperer un ou plusieurs éléments HTML              |
|   à partir de leur classe                                           |
|                                                                     |
----------------------------------------------------------------------*/

var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// -- Me renvoi un tableau JS avec mes éléments HTML, ou encore autrement dit une "Collection" d'éléments html


/*--------------------------------------------------------------------
|               document.getElementByTagName                        |
|                                                                     |
|   document.getElementByTagName() : C'est une fonction qui va      |
|   permettre de récuperer un ou plusieurs éléments HTML              |
|   à partir de leur *Nom de balise*                                          |
|                                                                     |
----------------------------------------------------------------------*/

var span = document.getElementsByTagName("span");
console.log(span);