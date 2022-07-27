"use strict";
/*
Le plus gros apport de typescript, c'est le typage.
Comme dans de nombreux langages tel que Java par exemple, il va nous
falloir indiquer de quel type sont nos variables, argument...
*/
const mot = "Bonjour";
const chiffre = 45;
const bool = true;
const nu = null;
//On peut aussi indiquer ce que doit contenir nos tableaux
const arr1 = ["truc, bidule"];
/*
Si une variable, ou un tableau (ou autre) doit contenir plusieurs types,
alors on a le mot clé "any".
Mais on évitera au maximum de l'utiliser. Typescript perd de son intérêt si on peut utiliser
n'importe quel ype comme en JS vanilla
*/
let truc = 5;
truc = "bidule";
const arr2 = [4, true, "bonjour"];
/*
Pour définir un objet, ce sera un peu plus verbeux.
La définition de l'objet indique ici qu'il doit contenir une propriété
"prenom" qui vea avoir une valeur de type string. Grâce à '?' il peut ou non contenir
une propriété age qui devra être un nombre.
Il ne devra pas contenir d'autres propriétés
*/
const person = { prenom: "maurice" };
//si le nombre de propriété de notre objet est variable, on peut faire cela :
const person2 = {
    prenom: "Paul",
    nom: "Dupont",
    age: "54"
};
// Chaque autre propriété sera un string contenant un string.
/*
Nos variables peuvent parfois contenir des objets créés à partir
de classes ou de fonctions, cela fonctionnera de la façon suivante :
*/
const today = new Date();
const salut = function () { };
/* En parlant de fonction on peut aussi typer les arguments et les valeurs de retour
le mot clé void indique que notre fonction ne retourne rien. */
function clickMoi(e) {
    console.log("Merci de cliquer sur", e.target);
}
document.addEventListener("pointerdown", clickMoi);
const compte = (nom) => { return nom.length; };
//le premier est une erreur, le second n'en est pas une.
//compte(54)
compte("truc");
function tri(arg) {
    //return arg.sort();
    return [...arg].sort();
}
/* La plupart du temps, indiquer le type n'est pas obligatoire, il permet
juste une relecture plus facile, comprendre directement ce que contient une variable.
Si on ne met pas de type, typescript tentera de devenir par lui-même.

Ici il refuse de mettre "bonjour dans x car la première valeur de x est un nombre.
Il indiquera que x doit toujours être de type nombre.*/
let x = 5;
// x = "bonjour";
/*
Mais parfois, il reste important d'indiquer le type de notre variable car Typescript peut se tromper.
*/
//const btn1 = document.querySelector('#compte') as HTMLButtonElement;
//btn1.style.color = "red";
/*
Cette première façon dira à TS que notre querySelector retourne un HTMLButtonElement
au lieu de simple Element
! Attention, par défaut typescript sait que querySelector peut être null.
! Mais cette façon de faire lui retire cette possibilité
const btn1 = <HTMLButtonElement>document.querySelector('#compte')

Cette dernier façon lui indiquera que le querySelector sera soit HTMLButtonElement,
soit null plutôt que de réécrire totalement les retours possibles.
const btn1 = document.querySelector<HTMLButtonElement>('#compte');
*/
const btn1 = document.querySelector('#compte');
if (btn1) {
    btn1.style.color = "red";
}
/*
Parfois une variable peut avoir un ou plusieurs types différents.
Dans ce cas on utilisera l'union type.
*/
let y = 5;
y = "salut";
y = true;
