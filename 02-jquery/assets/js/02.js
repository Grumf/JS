/*--------------------------------------------------------------------
|                    LES SELECTEURS JQUERY                            |
----------------------------------------------------------------------*/

// -- Format : $('selecteur')
// -- En jQuery, tous les selecteurs CSS sont disponibles...

$(function(){
    // -- DOM READY !!
    function l(e){
        console.log(e);
    }

    // -- Selecteur des balises SPAN

        // -- Version JS
        l(document.getElementsByTagName('span'));

        // -- Version jQuery
        l($('span'));

    // -- Selectionner mon menu

        // -- Version JS
        l(document.getElementsById('menu'));

        // -- Version jQuery
        l($('#menu'));

    // -- Sélectionner une Classe

        // -- JS
        l(document.getElementsByClassName('MaClass'));

        // -- jQuery
        l($('.MaClass'));
});
