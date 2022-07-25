"use strict"


/* 
Le texte doit être caché par défaut
puis donner l'impression de sortir de la barre au milieu,
puis disparaitre, changer le texte, faire réapparaitre la barre uniquement
puis enfin refaire le slide depuis les barres avec le nouveau texte.
*/

//? Ce sont les overflow sur #animate et span qui gèrent la disparition des éléments.

const div = document.querySelector('#animate');
const span = document.querySelector("#animate:first-child span")
const span2 = document.querySelector('span:last-of-type')


function animation(){
    const keyframes = [{textIndent:0}]

    const options = {
        duration:2500,
        fill:"forwards"
    }
    span.animate(keyframes, options)
    span2.animate(keyframes, options)
}
animation();


