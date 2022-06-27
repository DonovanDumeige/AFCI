'use strict'
let guess, player, ia,
    btn = document.querySelectorAll('.guessarea button'),
    textIa = document.querySelector('.ia'),
    textPlayer = document.querySelector('.player'),
    playeresult = 0,
    iaresult = 0;
const 
    shifumi = ["Pierre", "Feuille", "Ciseaux"],
    result = document.querySelector('.result');
/* const btn2 = document.querySelector('.guessarea .btn2');
const btn3 = document.querySelector('.guessarea .btn3'); */

/* Etape 1 : créer l'aléatoire */
function aleatoire(){
    /* J'ai créé une variable qui choisit aléatoirement un valeur
    selon la longueur de mon tableau shifumi */
    let rand = Math.floor(Math.random()*shifumi.length);
    /* j'ai ensuite distribué cette variable dans ma variable ia. */
    ia = shifumi[rand];
}

/* la fonction qui permet de commencer le jeu
ne contient que ma fonction aléatoire */
function start() {
    aleatoire();
}

function end(win) {
    if(win){
        playeresult++;
    } else{
        iaresult++;
    }
    // J'affiche les choix et le score en cas de victoire/défaite.
    textPlayer.textContent = `Joueur : ${player} `
    textIa.textContent = `IA : ${ia}`
    result.textContent = `Joueur : ${playeresult} - IA : ${iaresult}`
}

// c'est parce que j'ai mis le paramètre Bravo que j'ai pu ensuite récupérer la valeur 
// du bouton cliqué.
function game(bravo) {
    start();
    player = bravo.target.textContent;
    // obligé de comparer les valeurs sinon cela ne fonctionne pas
    if ((player == "Pierre" && ia =="Ciseaux") || (player =="Feuille" && ia == "Pierre") || (player == "Ciseaux" && ia == "Feuille")) {
        end(true)
    } else if( player == ia){
        /* 
        j'indique quoi faire en cas d'égalité car je ne pouvais pas le prendre en compte
        dans ma fonction win qui repose sur des booléens. */
        textPlayer.textContent = `Joueur : ${player} `
        textIa.textContent = `IA : ${ia}`
        result.textContent = `Egalité ! Joueur : ${playeresult} - IA : ${iaresult}`
    }else {
        end(false)
    }
    console.log(player, ia);
} 

btn.forEach(function(e){
    e.addEventListener("click", game);
})


/*
Une correction possible à : https://codepen.io/phillux700/pen/xXqpeP
*/
// longue version pour que le cas où player et ia ont la même version
/* (player == "Pierre" && ia =="Pierre") || (player =="Feuille" && ia == "Feuille") || (player == "Ciseaux" && ia == "Ciseaux") */
