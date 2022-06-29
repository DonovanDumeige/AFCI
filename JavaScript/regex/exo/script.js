/**
 * 1.Le champ nom d'utilisateur doit tourner au rouge si 
 * il contient autre chose que des lettres, - ou _;
 * 2.Le champ téléphone doit passer au rouge si le ce qui est entré
 * ne correspond pas à un numéro de téléphone.
 * 3.Le champ email doit passer au rouge si ce qui est entré ne 
 * correspond pas à un email.
 * 4.Ajouter une barre de progression qui change de couleur
 * et se rempli à chaque fois que l'utilisateur sécurise 
 * un peu plus sont mdp :
 *      -lettre minuscule.
 *      -lettre majuscule.
 *      -chiffre.
 *      -caractère spécial.
 *      -au moins 8 caractère.
 * 5. le champ mdp bis doit tourner au rouge si il ne correspond 
 * pas au champ mdp.
 * (le changement au rouge peut être personalisé autrement,
 * l'important est de montrer à l'utilisateur qu'il se trompe)
 */

"use strict"
const user = document.querySelector('#user');
const tel = document.querySelector('#telephone');
const mail = document.querySelector('#email');
const password = document.querySelector('#pass');
const passBis = document.querySelector('#passBis');

/* 
1.Le champ nom d'utilisateur doit tourner au rouge si 
il contient autre chose que des lettres, - ou _; 
 */

/* let n = /^[a-z-_]+$/
console.log(n.test("ddumeige93")); */

user.addEventListener("keyup", (e)=>{
    check();
});

tel.addEventListener("change", (e)=>{
    check()
});
function check(e) {
    let r
    switch(e.target.id){
        case "user":
            r=/^[a-z-_]+$/;
            break;
        case "telephone":
            r = /^0\d[0-9]{8}$|^\+33\d{9}$|^0\d([ .]?\d{2}){4}$|^\+33\s\d([ .]?\d{2}){4}$/;
    }
}
