"use strict";
import h from "./Human.js"

/* Je crée une nouvelle instance de ma classe Human (renommée h par l'import*/
const human1 = new h("Maurice", "Dupont",65);
console.log(human1);

/* 
Une méthode ou propriété static ne peut être appelée que sur la classe elle-même et non sur les objets
instanciés de la classe.
*/
console.log(Date.now());
console.log(h.categorie);
h.description();
console.log(human1.fullName);
human1.salutations();
// Ces exemples ne fonctionnent pas :
//let date = new Date();
//console.log(date.now())
//console.log(human1.categorie)

// Je ne peux pas accéder à une propriété privée
// console.log(human1.#nom);

const human2 = new h("Marie", "Chatelain",34)
human2.salutations();

// ---------------------------- Héritage ----------------------
import d from "./Dev.js"

const developpeur = new d("Kevin", "Duchesse", 27, "Javascript");
console.log(developpeur);
developpeur.salutations();
developpeur.anniversaire();

