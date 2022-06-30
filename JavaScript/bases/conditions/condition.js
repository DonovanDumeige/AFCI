"use strict";
/*
Math.random() retourne une valeur comprise entre O et 1
*20 pour le multiplier par 20 (on obtient un nombre entier (sans virgule))
*/
let x = Math.floor(Math.random()*20);
if (x<10){
    // On commence avec un if pour vérifier une condition
    console.log(x + " est plus petit que 10");
}
else if(x>10){
    // si le if est faux, on peut mettre autant de else if pour
    // vérifier autant de conditions supplémentaires
    console.log(x + " est plus grand que 10");
}
else{
    // Et on peut accessoirement terminer par un else pour gérer tous les cas
    // qui ne correspondent pas aux conditions précédentes.
    console.log("Il vaut 10");
}

// Une ternaire est une condition résumée en une ligne, utile dans le cas où on a
// peu de conditions et peu de réponses possibles.
// condition ? true:false;
let message = x<=10 ? x+" est plus petit ou égal à 10" : x+ " est plus grand que 10";
console.log("message: ",message);
// Attention de ne pas aller trop loin avec les ternaires pour rester visible ici :
// condition ? true : condition ? true:false;
let m2 = x<10 ? x+ " est plus petit que 10" : x>10? x + " est plus grand que 10" : "Il vaut 10";
console.log("m2: ", m2);

//* --------------------------- SWITCH ------------------------

let ville = prompt("De quelle ville venez-vous ?");
console.log(ville);
// switch comparer ce qui est mis entre parenthèses et sélectionne le cas qui correspond.
// .toLowerCase() transforme toutes les lettres d'un string en minuscules.
switch(ville.toLowerCase()){
    case "paris":
    case "londres":
    case "tokyo":
        //si je met plusiers cas les uns après les autres,
        // ils effectueront la même action
        console.log("De la capitale donc");
        break;
        // break indique où doit s'arrêter le cas
    case "lille":
        console.log("BIIIIIEEEEEEERRRRRRRRE");
        break;
    case "roubaix":
        console.log("Ha, l'ancienne capitale du textile")
        break;
    case "armentières" :
        console.log("Une ville pauvre mais fière");
        break;
    default: 
    //default permet de gérer ce que doit faire switch si aucun cas ne correspond.
        console.log("Ptdr, c'est quoi ta ville là ?")      
}