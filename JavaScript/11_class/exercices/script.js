"use strict"

/**
 * ----------------------- EXO 1 -------------------------------------
 * Créer une classe facilitant l'usage du DOM.
 */
// Voir correction

/** ----------------------- EXO 2 -------------------------------------
 * Adapter le code du carousel en class.
 */


/**
 * ----------------------- EXO 3 -----------------------------------
 * Faire une version du carousel qui hérite de EasyDom et l'utilise.
 */


import c from "./carousel-extends.js"
const carousel = new c(["./img/fond1.jpg","./img/fond2.jpg","./img/fond4.jpg", "./img/fond5.jpg"]);
document.body.append(carousel.container);
carousel.init();




/**
 * ----------------------- EXO 4 -------------------------------
 * Faite une page avec un canvas, à chaque clique sur le canvas, 
 * une boule de taille, de vitesse et de couleur aléatoire apparaîtra 
 * et rebondira 
 */
/**
 * ----------------------- EXO 5 -----------------------------------
 * Créer une calculatrice sous la forme d'une classe.
 */
