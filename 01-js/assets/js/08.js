/*--------------------------------------------------------------------
|                       LES CONDITIONS                                |
----------------------------------------------------------------------*/

/* var MajoriteLegaleFR = 18;

if(14 >= MajoriteLegaleFR){
    alert("Bienvenue !");
}

else{
    alert('Google');
} */

/* var ilFAutQueTuAies = 18;

function whatAreYouDoing(){

    var Age = parseInt( prompt("Quel âge as-tu?", "<saisir son âge>"))

    if( Age >= ilFAutQueTuAies ){
        alert("Bienvenue.");
    }

    else{
        alert("T'es trop jeune. Barre toi.");
        document.location.href="http://google.com";
    }
}

whatAreYouDoing() */

/* var MajoriteLegaleFR = 18;

function verifierAge(age) {
    if(age>= MajoriteLegaleFR ) {
        return true;
    }

    else{
        return false;
    }
}

// 3 -- Je demande à mon utilisateur son âge
var age = prompt("Bonjour, quel âge avez-vous ?", "<Saisissez votre âge>")

// 4 -- Vérification de l'âge de l'utilisateur
if(verifierAge(age)){

    // 4a -- J'affiche un message de bienvenu
    alert("Bienvenue sur www.doublefist.org");

    // 4b -- J'effectue une redirection
    }
else {
    document.location.href="http://google.com";
    }



verifierAge() */


/*--------------------------------------------------------------------
|             LES OPERATEURS DE COMPARAISON                          |
|                                                                    |
|    L'operateur de comparaison "==" signifie : "Egal à"             |
|    Il permet de vérifier que 2 variables sont identiques.          |  
|                                                                    |
|    L'opérateur de comparaison "===" signifie "Strictement Egal à"  |
|    Il va comparer la valeur et le type de donnée.                  |
|                                                                    |
|    L'opérateur de comparaison "!=" signifie :"Différent de"        |
|                                                                    |
|    L'opérateur de comparaison "!==" signifie :"Stricctement        |
|    Différent de"                                                   |
----------------------------------------------------------------------*/

// -- BASE DE DONNEES

var email, mdp;

email = "wf3h1-media.fr";
mdp = "wf3";


  /* let AuthEmail = prompt("Entrez votre email :");
  let AuthMdp = prompt("Entrez votre mot de passe :");

  if(AuthEmail===email&&AuthMdp===mdp ){
    alert("Bienvenue.");
  }
  else{
    alert("FAUX! Dégage")
  } */

  /*

  // 1 -- Demander son Email à l'utilisateur
  var emailUser = prompt("Bonjour, quel est votre email ?","Saisissez votre email");

  // 2 -- Je vérifie si l'email saisi (emailUser) correspond à celui en BDD (email)
    if( emailUser == email ){
        // 2a -- Tout est ok, je continu avec le mdp
        var mdpUser = prompt("votre mot de passe ?","Saisissez votre mot de passe");

        // 2a2 -- Vérification du mdp
        if(mdpUser === mdp){
            alert("Bienvenu");
        }

        else{
            alert("DEGAGES !");
        }

    } else{
        // 2b -- Les emails ne correspondent pas...
        alert("Attention !! Ton email ne correspond pas. DEGAGES");
    }

    // ! \\ TRES PEU RECOMMANDE CAR PEU SECURISE. IL NE FAUT JAMAIS PRECISER SI
    C'EST LE MDP OU L'EMAIL QUI EST MAUVAIS

    */

    function monUtilisateurEstCorrect(emailUser, mdpUser){
        if(emailUser===email && mdpUser===mdp){
            return true;
        } else {
            return false;
        }
    }

var emailUser = prompt("Bonjour, quel est votre email ?","Saisissez votre email");
var mdpUser = prompt("votre mot de passe ?","Saisissez votre mot de passe");

if(monUtilisateurEstCorrect(emailUser, mdpUser)){
    alert("Bienvenue !")
} else {
    alert("DEGAGES !")
}



/*--------------------------------------------------------------------
|                    LES OPERATEURS LOGIQUES                         |
|                                                                    |
|            ------ L'Opérateur ET && ou AND ------                  |
|    Si la combinaison emailUser et email correspond ET la           |
|    combinaison mdpUser et mdp correspond.                          |
|                                                                    |
|    --> Dans cette condition, les 2 doivent OBLIGATOIREMENT         |
|    correspondre pour être validée.                                 |
|    Ex. if(emailUser == email && mdpUser == mdp) {..}               |
|                                                                    |
|            ------ L'Opérateur OU : || ou OR ------                 |
|    Si la combinaison emailUser et email correspond ET/OU           |
|    la combinaison mdpUser et mdp correspond.                       |
|                                                                    |
|    --> Dans cette condition, au mois un des deux doit correspondre |
|    pour être validé.                                               |
|    Ex. if(emailUser == email || mdpUser == mdp) {..}               |
|                                                                    |
|         ------ L'opérateur " ! " ou NOT ------                     |
|                                                                    |
|   L'opérateur " ! " signifie le CONTRAIRE DE... ou NOT             |
|                                                                    |
|    var monUtilisateurEstApprouve = true;                           |
|    if(!monUtilisateurEstApprouve) => Mon utilisateur n'est pas     |
|    approuvé.                                                       |
|                                                                    |
|    Reviens à écrire if(monUtilisateurEstApprouve==false) {...}     |
|                                                                    | 
|                                                                    |
----------------------------------------------------------------------*/