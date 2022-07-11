"use strict";

const btnOpa = document.querySelector('#opacity'),
title = document.querySelectorAll("main span");
btnOpa.addEventListener("pointerdown", show);

function show(){
    for(let i = 0; i<title.length; i++){
        setTimeout(()=>title[i].style.opacity = "1",400*(1+i));
    }
}
