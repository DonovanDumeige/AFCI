"use strict"

const copyright = document.querySelector('footer span');
const mainTime = document.querySelector('main time');
const mainBtn = document.querySelector('main button');

// Crée un objet date qui contient la date et l'heure du moment de sa création
let date = new Date();
console.log(date);
// getFullYear nous rend l'année
copyright.textContent  = date.getFullYear();
// toLocaleTimeString nous rend l'heure, les minutes et les secondes en un string.
mainTime.textContent =  date.toLocaleTimeString();

function timer(){
    const dateTimer = new Date();
    mainTime.textContent =  dateTimer.toLocaleTimeString();
}
/* 
setInterval relance une fonction donnée en première paramètre, au rythme donné
en second paramètre (en milliseconde = ms) 
 */
/* setInterval(timer, 1000); */

let idInterval = setInterval(timer, 1000);

function stop() {
    clearInterval(idInterval);
    
}
mainBtn.addEventListener("click", stop);

/* setTimeout effectue la fonction donnée en premier argument au bout du
temps donné en second argument(en ms);
*/
let idTimeout =setTimeout(()=>console.log("Coucou en retard !"), 3000);

/*
Comme avec l'intervalle, on peut récupérer l'identifiant du timeout et l'arrêter
avant son execution
 */
clearTimeout(idTimeout);

const progress = document.querySelector('.progress');
let w =0;
function load(){
    if (w === 100) {
        return;
    } else{
        w++;
        progress.style.width= w+"%";
        setTimeout(load, 200)
    }
}
load();