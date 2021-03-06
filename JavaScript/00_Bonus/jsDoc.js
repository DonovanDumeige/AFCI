"use strict"

/* 
js DOC est un langage de balisage servant à commenter son code javascript
Il se présente par des commentaires avant une fonction et permettent en étant lu
par VScode ou autre IDE le gérant, d'avoir des rappels sur l'utilité d'une fonction.
*/
/** 
* Cette fonction affiche un message en console pour dire bonjour à 
* l'utilisateur en paramètre.
* @param {string} prenom
*/
function bonjour(prenom){
console.log("Bonjour "+prenom);
}

bonjour("Pierre");


/**
 * Dit bonjour avec le prénom et l'âge
 * @param {string} prenom
 * @param {string|number} age
 * */
function bonjour2(prenom, age){
    console.log('Bonjour je suis '+prenom+" et j'ai "+age+" ans")
}

bonjour2("Marie", 28)

/**
 * Affiche l'heure apres lui avoir donné la date
 * @param {Date} date
 */

function heure(date){
    console.log(`Il est ${date.getHours()} heure`)
}
heure(new Date);

/**
 * Une fonction qui se plaint
 * @deprecated // déprécie une fonction. Utile en cas de màj et maintenance de site.
 * @author Donovan
 * @version 0.1
 */
function old(){
console.log("je suis vieux");
}
old()

// voir https://fr.wikipedia.org/wiki/JSDoc pour plus de tags.