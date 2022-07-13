"use strict";
const btns = document.querySelectorAll('header button');
btns.forEach(b=>b.addEventListener("pointerdown", reset));
function reset(){
    if(timeout){
        clearTimeout(timeout);
    }
    if(interval){
        clearInterval(interval);
    }
}