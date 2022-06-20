"use strict"
/*
Pour déclarer une fonction,
j'utilise le mot clé "function" suivi de parenthèses
qui accueilleront les possibles arguments.
Ensuite des accolades qui contiendront le fonctionnement de ma fonction
*/

function salut(){
    console.log("Bonjour tout le monde");
}

/* 
Pour appeler une fonction, il suffit de taper son nom suivi de parenthèses
*/
salut();
// Il existe d'autres façons de déclarer une fonction.
const salut2 = function salut() {
    /* 
    On peut ranger une fonction dans une variable, son nom sera alors
    celui de la variable, on ne met pas de nom après le mot function.
    */
    console.log("Salut tout le monde");
}
salut2();
// Ici on utilise une fonction flêchée

const salut3 = ()=> {
    console.log("Coucou tout le monde");
}
salut3()
// Je peux aussi avoir des fonctions rangées dans des objets
const s = {
    salut: ()=> console.log("Salutations tout le monde")
};
s.salut();
// On peut aussi ranger des fonctions dans un tableau, même si c'est peu utilisé
