"use strict"


/** ----------------------- EXO 2 -------------------------------------
 * Adapter le code du carousel en class.
 */

 import c from "./carousel-v3.js"
 const carousel = new c(["./img/fond1.jpg","./img/fond2.jpg","./img/fond4.jpg", "./img/fond5.jpg"]);
 document.body.append(carousel.container);
 carousel.init();
 
/**
 * ----------------------- EXO 3 -----------------------------------
 * Faire une version du carousel qui hérite de EasyDom et l'utilise.
 */

import ca from"./carousel-extends.js"
const carousel2 = new ca(["./img/fond4.jpg", "./img/fond5.jpg"])
document.body.append(carousel2.container)
carousel2.init();

/**
 * ----------------------- EXO 5 -----------------------------------
 * Créer une calculatrice sous la forme d'une classe.
 */
