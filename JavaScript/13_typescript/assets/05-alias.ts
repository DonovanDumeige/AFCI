"use strict";
/* 
    C'est bien connu, les devs n'aime pas se répéter. TS l'a bien compris et permet de créer 
    nos propres types ou collection de type.
    -------------------- ALIAS --------------------
*/
type Fruit = {nom: string, couleur: string};
type Age = string | number;
type Person = {nom: string, age: Age}
type ArrFruit = Fruit[];
// Name prend le type de la propriété nom de Fruit (ici string).
type Name = Fruit["nom"];
// Full n'éccepte comme valeur que les clefs de Person donc soit "age" soit "nom".
type Full = keyof Person;

let b: Fruit = {nom: "Banane", couleur: "Verte"};
// let b: Fruit = {nom: "Banane", color: "Verte"}; Erreur car color != couleur
let p: Person = {nom: "Maurice", age: 54};
// let p: Person = {nom: "Maurice", age: true}; Erreur
let bs: ArrFruit = [b, {nom: "Fraise", couleur: "blanche"}]
let f: Full = "age";
// let f: Full = "Truc"; Erreur car ce n'est ni "age" ni "nom".

const machin = {a: true, b: "truc", chose: ["test"]};
// typeof construit un type correspondant à notre variable.
type Item = typeof machin;

// -------------------- GENERICS --------------------
function useless(arg: any): any{
    return arg
}
// La fonction indique qu'elle retourne "any" donc peu importe ce qui est rendu machine sera de type "any".
const machine = useless("chausette");

function useful<Type1>(arg:Type1): Type1{
    return arg;
}
const machine2 = useful("Coucou");
/* 
    machine2 est de type "Coucou" car il comprend qu'il doit retenir le type du premier argument 
    dans le generic "Type1" et qu'il doit retourner ce même type.
    Mais plutôt que la valeur littérale, je préfère avoir le type plus classique, 
    je peux alors utiliser un generic juste avant l'appel de la fonction.
*/
const machine3 = useful<string>("Coucou");

function lastof<TypeArr>(arg: TypeArr[]): TypeArr|undefined{
    return arg.at(-1);
}
/* 
    TS comprend qu'il doit récupérer le type du tableau, et retourner un 
    élément qui sera de ce même type.
*/
const last = lastof([34, 23, 12]);
const last2 = lastof(["34", "23", "12"]);
const last3 = lastof(["34", 23, "12", true]);

// On indique que la fonction accepte n'importe quel type tant qu'il a une propriété length.
function logSize<Type3 extends {length: number}>(arg: Type3): Type3{
    console.log(arg.length);
    return arg
}
logSize("chausette");
logSize([]);
// logSize(45); 45 n'a pas de propriété length donc c'est une erreur.