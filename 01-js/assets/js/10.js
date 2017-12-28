/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [
   {
    Nom : "LIEGEARD",
    Prenom : "Hugo",
    Notes : {
        Francais : 12,
        Mathematiques : 19,
        Physique : 4,
        Histoire : 10,
        Sport : 13,
        SVT : 5 
        }
    },
    {
    Nom : "CHIRAQ",
    Prenom : "Jacques",
    Notes : {
        Francais : 13,
        Mathematiques : 8,
        Physique : 10,
        Histoire : 14,
        Sport : 18,
        SVT : 7
        }
    },
   { 
    Nom : "JEDUSOR",
    Prenom : "Tom",
    Notes : {
        Francais : 19,
        Mathematiques : 17,
        Physique : 18,
        Histoire : 12,
        Sport : 13,
        Potion : 18,
        SVT : 16
        }
    },
   { 
    Nom : "POPPINS",
    Prenom : "Mary",
    Notes : {
        Francais : 16,
        Mathematiques : 10,
        Physique : 8,
        Histoire : 10,
        Sport : 11,
        SVT : 15 
        }
    },
   { 
    Nom : "BACHELOT",
    Prenom : "Roseline",
    Notes : {
        Francais : 8,
        Mathematiques : 10,
        Physique : 16,
        Histoire : 4,
        Sport : 10,
        SVT : 13
        }
    }
]

/*for(let i = 0; i < 7; i++) {
    document.write(PremierTrimestre[i].Notes[i]);
}*/

// -- LesFlemmards.js

function w(CeciEstUnParametreDeMaFonction){
    document.write(CeciEstUnParametreDeMaFonction);
};

function l(e) {
    console.log(e);
};

l(PremierTrimestre);

// -- Je souhaite afficher  la liste de mes étudiants
w("<ol>");
for(let i=0 ; i < PremierTrimestre.length ; i++) {

    // -- On récupère l'objet étudiant de l'itération
    let Etudiant = PremierTrimestre[i];

    // -- Aperçu dans la console
    l(Etudiant);

    var NombreDeMatiere = 0, SommeDesNotes = 0; // -- Remise à 0 à chaque etudiant

    // -- Afficher le prénom et le nom d'un étudiant
   w("<li>");
     w("<hr>"+Etudiant.Prenom + " " + Etudiant.Nom);
        w("<ul>");
            for(let matiere in Etudiant.Notes)
                {
                    l(matiere);
                    l(Etudiant.Notes[matiere])

                    NombreDeMatiere++;
                    SommeDesNotes += Etudiant.Notes[matiere];

                    w("<li>");
                        w( matiere + " : " + Etudiant.Notes[matiere]);
                    w("</li>");
                }
                
            w("<li>");
            w("<strong>Moyenne Générale : </strong>" + (SommeDesNotes / NombreDeMatiere).toFixed(2));
            w("</li>");

        w("</ul>");
    w("</li>");
}
w("</ol>");
