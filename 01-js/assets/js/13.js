/*--------------------------------------------------------------------
|                    LES EVENEMENTS                                   |
----------------------------------------------------------------------*/

/* Les evênements vont me permettre de déclencher une fonction, c'est à dire :
 une série d'instructions suite à une action de mon utilisateur.

 OBJECTIF : Être en mesure de capturer ces évènements afin d'executer une fonction.

 Les évènements : MOUSE (souris)

    Click       : Au clic sur un élement
    mouseenter  : la souris passe au dessus de la zone qu'occuppe un élément
    mouseleave  : la souris sors de cette zone

Les évènements  : KEYBOARD (Clavier)

    keydown     : Une touche du clavier est enfoncée
    keyup       : Une touche du clavier a été relachée

Les évènements  : WINDOW (fenêtre)

    scroll      : Défilement de la fenêtre
    resize      : Redimensionnement de la fenêtre

Les évènements  : FORM (Formulaire)

    change      : pour les élément <input>, <select> et <textarea>
    submit      : à l'envoi (soumission) du formulaire
    input       : pour capter la saisie d'un utilisateur sur un champ <input>



---------------------- LES ECOUTEURS D'EVENEMENTS ---------------------------

    Pour attacher un évènement à un élément, ou autrement dit, pour déclencher un
    écouteur d'évenement qui se chargera de déclencher une fonction, je vais
    utiliser la syntaxe suivante :

    ---------------------------------------- */

var p = document.getElementById("MonParagraphe");

    // -- Je souhaite que mon paragraphe soit rouge au clic de la souris

    // -- Je défini une fonction chargée d'executer cette action
    function changeColorToRed() {
        p.style.color = "red";
    }

    p.addEventListener("click", changeColorToRed);


// ------------- EXERCICE ------------------

var input = document.createElement('input');

input.type = "text";
input.id = "unique";

document.body.appendChild(input);

var input = document.getElementById("unique");

function getInputElement(){
    console.log(input);
}

input.addEventListener("input", getInputElement);

// -------------- CORRECTION --------------

// -- Création du champ input
var input = document.createElement('input');

// Attribution d'un attribut
input.setAttribute("type","text");
input.setAttribute("placeholder","écris un truc !");

// -- Attribution d'un ID
input.id = "MonInput";

// -- Ajout de l'élément dans ma page
document.body.appendChild(input);

// ---------------------

function voirLaSaisieDeMonInput() {
    alert(input.value);
}


input.addEventListener("change", voirLaSaisieDeMonInput);