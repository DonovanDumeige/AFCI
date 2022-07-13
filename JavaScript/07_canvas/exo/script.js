"use strict";
/**
 * EXERCICE :
 * Déclarer une variable painting à false.
 * déclarer une fonction "start position" qui prend un argument.
 *      passe painting à true, et appelle une fonction draw en 
 *      lui donnant son argument.
 * déclarer une fonction  "finished position" qui passe painting à 
 *      false puis fait un beginpath();
 * déclarer une fonction "draw" qui prend un argument.
 *      si painting est faux alors on met fin à la fonction
 *      sinon on donne une largeur de trait de 10,
 *      on donne une couleur noir,
 *      on met un linecap à round.
 *      on fait un lineTo sur la position x et y de la souris
 *          que l'on aura récupéré de notre argument.
 *      on fait un stroke 
 *      On fait un begin path
 *      On fait un moveTo à la position x et y de la souris.
 * Ajoutons 3 évènements sur notre canvas,
 *      mousedown on appelle startPosition
 *      mouseup on appelle finishedPosition
 *      mousemove on appelle draw
 * ------------- BONUS -----------------
 * Permettre de changer la couleur,
 * Permettre de changer la taille,
 * Permettre le retour en arrière (annuler)
 * Permettre le retour en avant (refaire)
 * Permettre de sauvegarder :
 *      L'utilisation de .toDataURL("image/png") pourra s'avérer utile
 * Permettre le chargement d'une image,
 *      L'utilisation de new FileReader() et de readAsDataURL pourra s'avérer utile.
 */

let painting = false,
    //optionnelle
    color = "black",
    size = 10,
    undoList = [],
    lastAction = [],
    redoList = [];

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");
const btnColor = document.createElement('input')
const btnSize = document.createElement('input')
btnColor.setAttribute("type", "color")
btnSize.setAttribute("type", "number")
document.body.append(btnColor, btnSize)

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function startPos(a) {
    painting = true;
    draw(a);
}

function finishPos(a) {
    painting = false;
    ctx.beginPath();
}

function draw(a) {
    options()
    if (!painting) {
        return;
    } else {
        console.log(ctx.strokeStyle);
        ctx.lineCap = "round"
        ctx.lineTo(a.clientX, a.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(a.clientX, a.clientY);
    }
}

canvas.addEventListener("mousedown", startPos)
canvas.addEventListener("mouseup", finishPos)
canvas.addEventListener("mousemove", draw)



function options() {
    btnSize.addEventListener('input', e => {
        ctx.lineWidth = e.target.value
    })
    
    // changer la couleur
    btnColor.addEventListener('input', e => {
        ctx.strokeStyle = e.target.value;
    })
}