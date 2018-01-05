$(function() {

    // -- Tableau de Membres
    var membres = [
      {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
      {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
      {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
      {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
    ];

    // -- Initialisation des variables...

    function reinitialisationDuFormulaire() {
        form.get(0).reset();
    }

    // -- Récuperation de différents éléments
    var form = $('#registerForm');
    var bienvenue = $('#Bienvenue');
    var pseudo = $('#pseudo');
    var age = $('#age');
    var email = $('#email');
    var mdp = $('#mdp');
    var submit = $('#submit');
    var pseudoError = $('.pseudoError');
    var ageError = $('.ageError');

    // -- Etapes 1 & 3

    // -- Verification du pseudo
    pseudo.on('input', function(e) {

        // console.log(pseudo.val());
        // -- a. Parcourir mon tableau de membre.
        for(let i = 0 ; i < membres.length ; i++) {

         // -- b. Si la saisie de mon utilisateur correspont à un pseudo dans mon tableau de membre, alors ma condition s'applique
        if (pseudo.val() === membres[i].pseudo) {

        // -- c. J'ai trouvé une correspondance, je vais afficher un message d'erreur :
        pseudoError.fadeIn();

        // -- Je désactive le boutton
        submit.prop('disabled', true);

        // -- je stop la boucle
        break;

        }
        else {

            // -- On cache l'erreur et on réactive le boutton
            pseudoError.fadeOut();
            submit.removeAttr('disabled');
            
        }

    }

    });

    // -- ETAPE 2

    age.on('change', function(e){
        if(age.val() < 18) {
            ageError.fadeIn();
            submit.attr('disabled', true);
        }
        else {
            ageError.fadeOut();
            submit.removeAttr('disabled');
        }
    });

    // -- ETAPE 4

    form.on('submit', function(e){

        event.preventDefault();

        let contact = {
            pseudo   : pseudo.val(),
            age      : age.val(),
            email    : email.val(),
            mdp      : mdp.val(),
        };
        
        membres.push(contact);

        console.log(membres);

        reinitialisationDuFormulaire()

        $(`<p>Merci ${contact.pseudo} ! tu fais maintenant parti de notre secte !! Voici les autres membres :</p>
            `).appendTo($('body'));

        var ul = $('<ul>');

        for( let o = 0; o < membres.length ; o++){
            $(`
            <li>${membres[o].pseudo} : ${membres[o].age} ans.</li>
            `).appendTo(ul);}

        ul.appendTo($('body'));
    });
    



});
