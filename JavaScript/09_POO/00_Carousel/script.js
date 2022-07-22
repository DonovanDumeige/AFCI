"use strict"

import c from "./carousel-v2.js";
const carousel = c.create(["./img/fond1.jpg","./img/fond2.jpg","./img/fond3.jpg"]);
document.body.append(carousel)
c.init();

/* 
Mais avec cette solution, ik est difficile de générer un second carousel.
Les deux vont entrer en conflit l'un avec l'autre.
Ce qui va nous ammener à la suite, les classes 
*/ 
// const carousel2 = c.create(["./img/fond4.jpg","./img/fond5.jpg"])
//document.body.append(carousel2)
//c.init();