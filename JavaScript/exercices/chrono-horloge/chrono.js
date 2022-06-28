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

function appear (){
    div.style.display = "flex"
}

btn.addEventListener("click", appear);

input.addEventListener("input",(e)=>{
    span.textContent =parsInt(e.target.value);
    console.log(span.textContent);
})

let t = span.innerHTML
console.log(t);
function timer(e) {
    
    t--
    span.textContent = t
    setInterval(timer,1000)
}

start.addEventListener("click", timer)
console.log(start);

let time = new Date();
console.log(time);