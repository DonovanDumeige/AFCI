"use strict"

const btn = document.querySelector('#chrono');
const div = document.createElement('div');
const main = document.querySelector('main');
let input = document.createElement('input');
let start = document.createElement('button');
let span = document.createElement ('span');
let span2 = 0
let reset = document.createElement ('button');

// Création des éléments en JS
input.setAttribute("type", "time")
div.classList.add('container')
div.append(input, start, span, reset)
start.style.width= "75px"
start.style.height= "20px"
start.textContent = "Start"
reset.style.width= "75px"
reset.style.height= "20px"
reset.textContent = "Reset"
main.append(div)
div.style.display = "none"

// Rappel de ce que je dois faire
// 1. Indiquer un temps dans mon input
// 2. Afficher ce temps
// 3. Faire arriver ce temps à 0
// Le bouton start démarre le timer
// Le bouton reset réinitialise ce timer


// Faire apparaitre/disparaitre le bloc du minuteur
function appear (){
    if (div.style.display == 'flex') {
        div.style.display = 'none'
    } else{
        div.style.display = "flex"
    }
    
}

btn.addEventListener("click", appear);

// Récupère la valeur de input mais je ne sais pas l'exploiter


function recup (e){
    span.textContent = input.value;
}

input.addEventListener("input",()=>{
    span.textContent =input.value;
    let t = input.value.split(':')
    let s = t[1];
    let m = t[0];
    function timer() {
        s--
        if (s<0){
            s=59
            m--
        }
        span.textContent =  `${m} : 0${s}`
}
})

start.addEventListener("click", timer) 
setInterval(timer,1000)
