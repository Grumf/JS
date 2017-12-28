/*--------------------------------------------------------------------
|                 CHAINAGE DE METHODE AVEC JQUERY                     |
----------------------------------------------------------------------*/

$(function() {

    // -- Je souhaite cacher toutes les div de la page HTML
    console.log($('div'));

    $('div').hide('slow', function(){
        // -- une fois que la méthode hide() est terminée, mon alerte peux s'executer.
        alert('Fin du hide');
        // -- NB : La fonction s'executera pour l'ensemble des éléments du sélecteur

        $('div').css('background','yellow');
        $('div').css('color','blue');

        // -- Je fais réapparaitre mes div
        $('div').show('slow');

    }); // Fin de la fonction anonyme

    $('p').hide(1000).css('color', 'blue').css('font-size','20px').delay(2000).show(500);

    $('p').hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500);

});