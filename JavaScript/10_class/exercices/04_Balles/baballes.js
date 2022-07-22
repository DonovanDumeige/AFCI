"use strict"

/**
 * ----------------------- EXO 4 -------------------------------
 * Faite une page avec un canvas, à chaque clique sur le canvas, 
 * une boule de taille, de vitesse et de couleur aléatoire apparaîtra 
 * et rebondira 
 */
 "use strict"

 import EasyDom from "./EasyDom.js";
 const e = new EasyDom();
 export default class ball extends EasyDom{
    x;
    y;
    color;
    w;
    h;
     constructor(){
         super();
         this.p = 2*Math.PI
         const canvas = e.tag('canvas')
         const ctx = canvas.getContext("2d")
         console.log(this)
         return canvas;
     }
     randomizer(){
        this.x = Math.floor(Math.random()*innerWidth);
        this.y = Math.floor(Math.random()*innerHeight);
        this.w, this.y = Math.floor(Math.random)
     }
 }
