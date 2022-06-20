"use strict";
//--------------------------------- EXO 5.1 ------------------------------
/* écrire un algorithme qui demande à l'utilisateur un nombre compris 
entre 1 et 3 jusqu'à ce que la réponse convienne. */

//décommenter pour afficher
/*
let nbre = prompt("donnez moi un chiffre entre 1 et 3.")
while((nbre<1)||(nbre>3)){
    console.log("ce n'est pas ce que j'ai demandé");
    let nbre= prompt("donnez moi un chiffre entre 1 et 3")
    }
console.log("merci !");
*/

// ----------------------------- Correction
// Décommenter pour afficher
/*
do {
    x = prompt("Donne moi un chiffre entre 1 et 3.")
} while (x<1 || x>3);
*/

// ------------------------------ EXO 5.2 -----------------------------------
/*
Ecrire un aglo qui demande un nombre compris entre 10 et 20, jusqu'à ce que la réponse convienne
Afficher "plus grand" si > 20
Afficher "plus petit" si > 10
*/

// Décommenter pour afficher
/*
let x = prompt("Donne moi un chiffre entre 10 et 20");
while (x<10 || x>20) {
    if (x<10) {
        console.log("Plus grand !");      
    } else{
        console.log("Plus petit !");
    }
    x = prompt("Donne moi un chiffre entre 10 et 20");
}    
console.log("Merci !");
*/

//----------------------------------- Correction ---------------------------
//Décommenter pour afficher
/*
let y,m = "Donne moi un chiffre entre 10 et 20"
do{
    y=prompt(m);
    m = y<10? "Plus grand !" : "Plus petit !";
} while (y<10 || y>20);
*/

//--------------------------------- EXO 5.3 --------------------------------
// Demander un nombre à l'utilisateur
// Afficher les dix nombres suivant

/*
let i= parseInt(prompt("Donnez moi un chiffre"));
for (i=i+1; i<y+10; i++){
    console.log(i);
}
*/

// --------------------------------- Correction ----------------------
/*
let z = parseInt(prompt("Donne moi un nombre et je te répondrais les dix suivants"));
for(let i = z+0; i<=z+10; i++){
    console.log(i);
}
*/
// ----------------------------------------- EXO 5.4 ---------------------------------

/*
let z =parseInt(prompt("Donne moi un chiffre"));
for(let i = 1;  i<=10; i++){
    console.log(`${z} * ${i} = ${z*i}`);
}
*/

// ----------------------------------- EXO 5.6 ------------------------------
//* Demander un nombre
//* Calculer la factorielle de ce nombre
//* Le 5.5 demande la même chose mais avec des additions plutôt que des multiplications

let z =parseInt(prompt("Donne moi un chiffre"));
let f = 1;


for (let i = 1; i<=z; i++){
    f *= i;
    console.log(`${i} * ${f} = ${f}`)
}
console.log(`La factoriel de ${z} vaut ${f}`);
