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
/*
let z =parseInt(prompt("Donne moi un chiffre"));
let f = 1;


for (let i = 1; i<=z; i++){
    f *= i;
    console.log(`${i} * ${f} = ${f}`)
}
console.log(`La factoriel de ${z} vaut ${f}`);
*/

// Exercice 5.7
//*Demander 5 nombres à l'utilisateur
//* Lui dire ensuite quel était le plus grand parmi ces 20 nombres

/*
let max = 0,
    pos = 0;
for(let i=1; i<=5;i++){
    let nb=parseInt(prompt("Donnez moi un nombre"));
    if ((i==1 || nb>max)) {
        max = nb;
        pos = i
    }
}
console.log(`La valeur maximale est ${max}`);
console.log(`Il se trouve à la position ${pos}`);
*/

//Exercice 5.8
//* Réécrire le précédent mais cette fois ci on ne connait pas 
//* d'avance combien l'utilisateur souhaite saisir de nombres
//* saisie s'arrête lorsque l'utilisateur entre un zéro
/*
let max = 0,
    pos = 0;
for(let i=1; i != 0;i++){
    let nb=parseInt(prompt("Donnez moi un nombre"));
    if ((i==1 || nb>max)) {
        max = nb;
        pos = i
    } else if (nb === 0) {
        break;
    }
}
console.log(`La valeur maximale est ${max}`);
console.log(`Il se trouve à la position ${pos}`);
*/

// Correction : variante
let max =0;
let pos =0;
let i=1;
do{
    nb = parseInt(prompt("Donne moi un nombre !"))
    if((i==1 || max<nb)){
        max =nb;
        pos =i
    }
    i++
}while(nb != 0)
console.log(`Le nombre le plus grand est ${max}, il a été donné à la position n°${pos}`);

//Exercice 5.9
//* Lire la suite des prix (en euros entiers et terminée par zéro) des achats d'un client
//* Calculer somme qu'il doit
//* Lire somme qu'il paye
//* Simuler la remise de la monnaie en affichant les textes
//* "10 euros", "5 euros", "1 euro" autant de fois qu'il y a de coupures de chaque sorte à rendre

let somme = 0;
let prix = [12,25,40,36,65];
console.log(typeof(prix), prix)
for(let i = 0; i<=4; i++){
    somme = somme + prix[i];
}
console.log(`Vous nous devez ${somme} euros`);

function euro1(){
    
}
