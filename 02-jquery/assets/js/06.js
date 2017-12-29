// -- Initialisation de jQuery
$(() => {
    // -- Les flemmards.js
    function l(e){console.log(e)};

    // -- Je souhaite sélectionner toutes mes divs
    l($("div"));

    // -- Je souhaite sélectionner mon menu
    l($("nav"));

    // -- Je souhaite connaitre tous les éléments descendant direct (enfants) qui sont dans le menu...
    l($("nav").children());

    // -- Je souhaite parmi ces enfants uniquements les éléments <ul>
    l($("nav").children("ul"));

    // -- Je souhaite récuperer tous les éléments <li> de mon élément <ul>
    l($("nav").children("ul").find("li"));

    // -- Je souhaite récuperer uniquement le 2e élément <li> de mon élément <ul>
    l($("nav").children("ul").find("li").eq(1));

    // -- Je veux connaitre le voisin immediat de mon menu
    l($("nav").next());
    l($("nav").next().next()); // -- Le voisin du voisin
    l($("nav").prev()); // -- le voisin d'avant

    // -- Je veux connaitre le parent direct de mon menu
    l($("nav").parent());

    // -- Je veux connaitre LES parents de mon menu
    l($("nav").parents());

});