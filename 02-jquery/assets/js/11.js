/**
 * Validate email function with regualr expression
 * 
 * https://paulund.co.uk/regular-expression-to-validate-email-address
 * If email isn't valid then return false
 * 
 * @param email
 * @return Boolean
 */
function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

function validateTel(tel){
	var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
	var valid = telReg.test(tel);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

// -- Initialisation de jQuery

$(function(){

    // -- Ecouter à quel moment est soumis le formulaire
    $('#contact').on('submit', function(e) {

        // -- Neutraliser la redirection
        e.preventDefault();

        // -- supprimer les différentes erreurs
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();

        // -- Déclarer les variables à vérifier
        var nom     = $('#nom');
        var prenom  = $('#prenom');
        var email   = $('#email');
        var tel     = $('#tel');

        // -- Vérification de chaque champs

            // -- 1. Vérification du nom
            if(nom.val().length === 0) {
                nom.parent().addClass('has-error');
                $('<p class="text-danger">N\'oubliez pas de remplir votre nom trou du cul</p>' ).appendTo(nom.parent());
            } else {
                nom.parent().addClass('has-success');
            }

            // -- 1. Vérification du prénom
            if(prenom.val().length === 0) {
                prenom.parent().addClass('has-error');
                $('<p class="text-danger">N\'oubliez pas de remplir votre prénom putaiiin</p>' ).appendTo(prenom.parent());
            } else {
                prenom.parent().addClass('has-success');
            }

            // -- 1. Vérification de l'email
            if(!validateEmail(email.val())) {
                email.parent().addClass('has-error');
                $('<p class="text-danger">Adresse email non valide......</p>' ).appendTo(email.parent());
            } else {
                email.parent().addClass('has-success');
            }

            // -- 1. Vérification du téléphone
            if(!validateTel(tel.val())) {
                tel.parent().addClass('has-error');
                $('<p class="text-danger">Numéro de telephone non  valide</p>' ).appendTo(tel.parent());
            } else {
                tel.parent().addClass('has-success');
            }

            // -- Je vérifie les erreurs pour mon envoi de formulaire
            if($('#contact').find('.has-error').length === 0) {

                $('#contact').replaceWith(`<div class="alert alert-success">Merci connard.</div>`)
            } else {
                $('#contact').prepend(`<div class="alrt alert-danger">T'as pas bien rempli ce p***in de formulaire.</div>`);
            }

    });

});