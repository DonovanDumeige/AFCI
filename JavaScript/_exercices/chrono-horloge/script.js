"use strict"
const btns = document.querySelectorAll('header button');
btns.forEach(b=>b.addEventListener("pointerdown", reset))