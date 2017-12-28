/*$('form').submit(function(event){
    event.preventDefault();
    $('form').hide('slow');
    var valeur = $('#nomcomplet').val();
    $('body').html("<p>Coucou !</p>" + valeur);
});*/

   

 // -- Execution à la soumission du formulaire
$('form').submit(function(event){
     // -- Annule l'action par defaut du submit
    event.preventDefault();
    $(this).replaceWith('<p>Coucou ' + $('#nomcomplet').val() + ' !</p>');
});