/*--------------------------------------------------------------------
|                       LES BOUCLES                                   |
----------------------------------------------------------------------*/

// -- La boucle FOR

// -- Pour i = 1 ; tant que i <= strictement inférieur ou égal à 10 ; alors j'incrémente i de 1.
for(let i = 1 ; i <= 10 ; i++) {
    document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');
}

document.write('<hr>');

var j = 1;
while(j <= 10) {
    document.write('<p>Instruction executée :' + j + '</p>');

    j++;
}

// ------------- EXERCICE -------------------

var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo'];

for(let i = 0; i < 7; i++) {
    document.write(Prenoms[i]);
}

console.log('- - -');
console.log(Prenoms);

for(let i = 0 ; i < Prenoms.length ; i++){
    console.log(Prenoms[i]);
}

console.log ('- - -');
var j = 0;
while(j < Prenoms.length) {
    console.log(Prenom[j]);
    j++;
}

console.log('- - -');
// -- Même exercice avec la boucle forEach
// -- ATTENTION A LA PERFORMANCE

Prenoms.forEach(affichePrenoms);

function affichePrenoms(prenom, indice) {
    console.log(prenom);
}