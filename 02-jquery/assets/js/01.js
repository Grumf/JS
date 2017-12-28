/*_______________________________________________________*\
            LA DISPONIBILITE DU DOM

A partir du moment ou mon DOM, c'est à dire l'ensemble de l'arborescence
de ma page est complêtement chargé; je peux commencer à uutiliser jQuery

Je vais mettre l'ensemble de mon code dans une fonction, cette fonction,
cette fonction sera appelé AUTOMATIQUEMENT par jQuery lorsque le DOM sera
entièrement defini

3 façon de faire : 
_______________________________________________________*/

jQuery(document).ready(function() {
    // -- Ici, le DOM est entierement chargé, je peux proceder à mon code JS.
});

// -- 2ème possibilité
$(document).ready(function() {
    // -- Ici, le DOM est entierement chargé, je peux proceder à mon code JS.
});

// -- 3ème possibilité
$(function() {
    // -- Ici, le DOM est entierement chargé, je peux proceder à mon code JS.
    alert("J'ai 254 ans !");

    document.getElementById('TexteEnJquery').innerHTML = "<strong>Mon texte</strong>";

    // -- En jQuery, les selecteurs sont les même qu'en CSS :
    $('#TexteEnJquery').html("Mon Texte en JQ");

});
