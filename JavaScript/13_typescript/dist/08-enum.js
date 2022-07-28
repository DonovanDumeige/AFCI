"use strict";
function hasard(arg) {
    /*
    Le type unknown indique que l'on ne connait pas le type de notre argument.
    Mais à la différence de any qui acceptera n'importe quel traitement sur notre
    argument, le type unknown va bloquer tout ce qui aurait une chance de ne pas
    fonctionner.
    Par exemple ici, .toString() ne fonctionnera pas si notre arg est un
    objet.
    */
    //arg.toString();
    if (typeof arg === "number") {
        // Une fois sûr que c'est un nombre, là il fonctionnera.
        arg.toString();
    }
}
const a = "bonjour"; // vu qu'il ne peut pas changer a est de type littéral "bonjour"
let a1 = "bonjour"; // vu qu'il varie a1 est de type "string"
/*
a étant une constante, il ne pourra pas varier, TS lui donne sa valeur comme
type litteral, alors que a1 étant une variable en let, il pourra prendre d'autres valeurs :
le type string lui est plus adapté.

Dans le cas d'un objet en constante, les types de propriétés sont de type variable (ici string)
Si je ne peux pas changer le contenant, je peux changer le contenu.
*/
const obj = { truc: "banane", machin: "camion" };
/*
le mot clé as me permet de renommer ou change le type.
Ici, j'indique que le type de truc se nomme "fruit"
et avec le mot clé const, j'indique que machin est une proprieté constante.
machin prendra donc sa propre valeur commme type litteral.
*/
const obj1 = { truc: "banane", machin: "camion" };
/*
En mettant les as const à la fin, il placera automatiquement toutes les propriétés
de mon objet en constante (utilisant leur valeur comme type littéral)
et en plus de cela, ajoutera le readonly.
*/
const obj2 = { truc: "banane", machin: "camion" };
// je peux aussi utiliser as const sur un tableau.
const ar1 = [3, 5, 1];
//------------------------------------------ Tuple ------------------------
//ar2 est un tableau pouvant contenir que des nombres et des strings.
const ar2 = [4, "truc", 45];
//ar3 DOIT contenir UN string suivi d'UN nombre;
const ar3 = ["truc", 34];
const ar4 = ["chaussette", true];
const ar5 = ["tongue", true];
function fusion(tab1, tab2) {
    /*
    Notre fonction fusion prend deux arguments qui seront des tableaux inconnus.
    Et elle devra retourner un élément qui sera la fusion des types des deux tableaux.
    */
    return [...tab1, ...tab2];
}
// En faisant simplement cici, notre nouveau tableau sera de type any[]
// function fusion (tab1:any[], tab2:any[]){
//      return [...tab1, ...tab2];
// }
const ar6 = fusion(ar4, ar5);
const ar6bis = [...ar4, ...ar5];
const maurice = {
    legume: "choux de bruxelles",
    fruit: 0 /* Fruits.banane */
};
console.log(maurice.fruit);
