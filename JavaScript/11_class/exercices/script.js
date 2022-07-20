"use strict"

/**
 * ----------------------- EXO 1 -------------------------------------
 * Créer une classe facilitant l'usage du DOM.
 */
import e from "./EasyDom.js";
const easy = new e();

const span = easy.select("span");
const div = easy.select("div");
easy.tag("div", {class:"truc bidule machin", id: "chaussettes"})
//console.log(div);
console.log(span)
easy.event(span, "click", (e)=>{console.log(e);})
easy.event(div, "click", (e)=>{console.log(e);})

/* 
const div = easy.tag("div", {class:"truc bidule machin"}, id: "chaussettes")
console.log(div);
const span = easy.select("span");
console.log(span)
easy.event(span, "click", (e)=>{console.log(e);})
easy.event(div, "click", (e)=>{console.log(e);})
*/
/**
 * ----------------------- EXO 2 -------------------------------------
 * Adapter le code du carousel en class.
 */
/**
 * ----------------------- EXO 3 -----------------------------------
 * Faire une version du carousel qui hérite de EasyDom et l'utilise.
 */
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
