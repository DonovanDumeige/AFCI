"use strict";

/* 
Les REGEX ou expression régulière, permettent la recherche dans une chaine de caractères
la présence de caractères en particulier
*/
// Une regex comment par un / et fini par un / ou un flag(caractère supplémentaire)

// recherche la présence de "ou" dans les mots suivants :
const r1 = /ou/;
console.log(r1, r1.test("Bonjour"), r1.test("Salut"));

//recherche la présence de "o" ou de "u" dans les mots suivants :
const r2 = /[ou]/;
console.log(r2, r2.test("Bonjour"), r2.test("Salut"));

const r3 = /^ou/;
//vérifie que cela commence par "ou"
console.log(r3, r3.test("Bonjour"), r3.test("outre"));

const r4 = /ou$/;
//vérifie que cela finit par "ou"
console.log(r4, r4.test("Bonjour"), r4.test("mou"));

const r5 = /ou|oi/;
//recherche la présence de 'ou' ou 'oi' dans les mots suivants
console.log(r5, r5.test("Bonjour"), r5.test("Bonsoir"));

const r6 = /[a-z]/;
//vérifie que cela contient des lettres de a à z
console.log(r6, r6.test("Bonjour"), r6.test("0698512100"));

const r7 = /[^a-z]/;
//vérifie que cela contient pas des lettres de a à z
console.log(r7, r7.test("bonjour"), r7.test("0698512100"));

const r8 = /ou?/;
//vérifie que les caractères précédent apparaissent 0 fois ou 1 fois
// mais au moins un doit apparaitre.
console.log(r8, r8.test("bonjour"), r8.test("objet"), r8.test("pizza"));

const r9 = /ou+/;
//vérifie que les caractères apparaissent une fois ou plus.
console.log(r9, r9.test("bonjour"), r9.test("objet"), r9.test("pizza"));

const r10 = /ou*/;
//vérifie que les caractères précédents apparaissent une 0 fois ou plus
//mais au moins un doit apparaitre
console.log(r10, r10.test("bonjour"), r10.test("objet"), r10.test("pizza"));

const r11 = /ou{2}/;
//vérifie que le caractère "u" apparait 2 fois.
console.log(r11, r11.test("bonjour"), r11.test("bonjouur"), r11.test("bonjouuuur"));

const r12 = /(ou){2}/;
//vérifie que le caractère "ou" apparait 2 fois.
console.log(r12, r12.test("bonjour"), r12.test("bonjouour"), r12.test("bonjouuuur"));

const r13 = /u{2,4}/;
//vérifie que le caractère "u" apparait entre 2 et 4 fois.
console.log(r13, r13.test("bonjouur"), r13.test("bonjouuur"), r13.test("bonjouuuuur"));

const r14 = /u{2,}/;
//vérifie que le caractère "u" apparait entre 2 et plus de fois
console.log(r14, r14.test("bonjour"), r14.test("bonjouur"), r14.test("bonjouur"));

const r15 = /\^/;
//vérifie que le caractère "^" apparaisse.
// \ permet d'échaper un caractère utilisé dans les regex (= qui a un sens dans les regex)
console.log(r15, r15.test("^^"), r15.test("bonjouur"));

const r16 = /\s/;
//vérifie que la présence d'espace.
// \ permet aussi de donner un rôle à un caractère qui n'en a normalement pas.
console.log(r16, r16.test("Coucou tout le monde"), r16.test("bonjouur"));

const r17 = /\d/;
// Vérifique que la présence de chiffres. c'est égal à l'utilisation de [0-9]
console.log(r17, r17.test("Coucou 8 fois"), r17.test("bonjouur"));


// ---------------------------------- match -------------------------------------
const phrase ="J'aime la pizza, les cannelés et les okonomiyaki";

/* match me retourne un tableau correspondant aux éléments trouvé par ma regex
dans ma chaine de caractères */
console.log(phrase.match(/pizza/));

//Par défaut, ma regex s'arrête au premier élément retrouvé
console.log(phrase.match(/les/));

// mais en lui rajoutant le flag "g", elle cherchera tous les éléments qui correspondent.
//les flags s'ajoutent après la fermeture de la regex/
console.log(phrase.match(/les/g));

const phrase2 = "Vive les regex et vive javascript !";

// Par défaut notre regex est sensible à la casse. 
console.log(phrase2.match(/vive/g));

// Avec le flag i, la regex va ignorer la casse.
console.log(phrase2.match(/vive/gi));

// --------------------------------------------- replace ----------------------------------

/* 
replace retourne le string en remplaçant l'élément en premier paramètre par 
celui en second paramètre
*/
// Il peut être utilisé avec un string
console.log(phrase.replace("pizza", "salade")); 

//comme avec une regex
console.log(phrase.replace(/pizza/, "salade"));

/* 
L'avantage de la regex c'est que l'on pourra lui faire remplacer plusieurs éléments
et lui dire que cela importe peu si il y a des majuscules ou non.
 */
console.log(phrase2.replace(/salade|cannelés|okonomiyaki/gi, "*********"));
console.log(phrase2.replace(/regex|javascript/gi, "*********")); 

// $& permet de ne pas remplacer le mot recherché mais plutôt d'ajouter du contenu à sa suite.
console.log(phrase2.replace(/javascript/gi, "$& et CSS")); 
console.log(phrase2.replace(/regex/gi, "'$&' (c'est faux)")); 

// ------------------- flag bonus -----------------------
const phrase3 = `1er : Maurice
2ème : Paul
3ème : Charlie`;

/* Ici même si il doit retourner tous les résultats, on lui indique
un string qui commence par un chiffre, donc seul le 1 est pris en compte.
*/
console.log(phrase3.match(/^\d/g));
/*
Avec le flag "m" pour multiple, il va prendre en compte que les sauts à la ligne
sont comptés comme de nouvelles phrases.
*/
console.log(phrase3.match(/^\d/gm));

//Cela fonctionne aussi avec "$" pour fin de string
console.log(phrase3.match(/[a-z]$/gm));

// \w recherche des lettres

console.log(phrase3.match(/(\w+)$/gm));

//! Toute lettre accentuée nest pas compris dans [a-z]
console.log(/^[a-z]+$/.test("paul"));
console.log(/^[a-z]+$/.test("élodie"));
// pour accepter des accents, il va falloir les écrire un à un.
console.log(/^[a-zé]+$/.test("élodie"));

// "." correspond à n'importe quel caractère.
console.log(phrase.match(/pizza.+cannelé/));
// sauf pour les sauts à la ligne.
// le flag "s" permet de prendre en compte les sauts à la ligne.
console.log(phrase3.match(/1.+3/s));