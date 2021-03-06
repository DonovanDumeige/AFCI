"use strict"

/*
---------------------------------------- EXPORT --------------------------------------
On peut importer avec un script de type module les fonctions ou objet d'un autre script.
Pour cela il faut que ce script à importer comporte le mot clef "export"
devant la déclaration de fonction.

On peut expoter autant d'élément que l'on souhaite, mais un seul l'un d'entre peut 
profiter "export default"
cf. carousel.js et index.html du dossier module

---------------------------------------- IMPORT --------------------------------------
Par défaut, l'import ne peut se trouver que dans un bloc le plus haut.
C'est à dire pas dans une fonction, une condition, une boucle ou autre.
! Cela ne veut pas dire qu'il doit se trouver tout en haut du ficher, comme "use strict"
! Juste au niveau principal du fichier

Sans default dans le fichier, il suffit d'utiliser le mot clé import suivi
d'une accolade et à l'intérieur les fonctions que l'on veut importer, séparées de virgules
puis le mot clef from et en string le chemin vers le fichier.
            import{init, create2} from "./carousel.js";

Si un mot clé default a été utilisé, avant les accolades, on peut donner un nom (peu importe lequel)
il sera utilisé pour importer la fonction par défaut.
On peut aussi renommer les fonctions exporté avec le mot clé "as"
*/
//import start, {create2} from "./carousel.js";

const images = ["./img/fond1.jpg", "./img/fond2.jpg", "./img/fond3.jpg"]
/*
const carousel = create2(images)
document.body.append(carousel)
start(); 
*/
/* 
Pour faire un import sans être au top level du script (dans une condition, une boucle
un évènement ou autre), on utilisera pas le mot clé import mais la fonction import() qui retournera une 
promesse un peu comme fetch.
*/
window.addEventListener("click",addCarousel)
async function addCarousel() {
    const slides = await import("./carousel.js")
    const carousel = slides.create2(images)
    document.body.append(carousel);
    slides.default();
    window.removeEventListener("click", addCarousel)
}




// variante d'écriture
/* 
import start, {create2 as c} from "./carousel.js";
const images = ["./img/fond1.jpg", "./img/fond2.jpg", "./img/fond3.jpg"]
const carousel = c(images)
document.body.append(carousel)
start();
 */


// On peut ranger tous nos export dans une variable.
/* 
import * as slides from "./carousel.js";
const images = ["./img/fond1.jpg", "./img/fond2.jpg", "./img/fond3.jpg"]
const carousel = slides.create(images)
document.body.append(carousel)
slides.default();
 */

