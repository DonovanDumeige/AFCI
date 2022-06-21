"use strict";
// Sélectionne des éléments par leurs noms de balise.
const li = document.getElementsByTagName("li");
//retourne un objet contant tous les éléments trouvés
console.log(li);
li[0].textContent="Marbre";

//Sélectionne des éléments par un nom de classe.
const p = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
// Même si on  a qu'un seul élément, on aura un objet contenant cet élément
console.log(p,p1);
//p1.textContent ne fonctionne pas, il faudra bien faire p1[0].textContent

// Sélectionne directmeent l'élément qui possède cet id
const h1 = document.getElementById("mainTitle");
// Ici pas de HTMLCollection, il n'y a qu'un élément, on obtient directement celui-ci.
console.log(h1);

/* 
Les querySelector prennent en argument n'importe quel sélecteur CSS.
Il rendra le premier élément qui correspond à ce sélecteur
*/
const p2 = document.querySelector("main > p:nth-of-type(2)");

// Les deux suivants rendront le même élément que le précédent.
//const p2 = document.querySelector(".marche2")
//const p2 = document.querySelector(" main p.marche2.step")

//Celui ci rendra le premier p
//const p2 = document.querySelector(".step")

console.log(p2);

/*
Fonctionne comme le querySelector mais rend un objet "NodeList" 
contenant tous les éléments correspondants.
*/
const li2 = document.querySelectorAll ("footer li");
//!  Attention certaines fonctions qui pourraient marcher sur NodeList pourraient ne pas fonctionner sur HTMLCollection
console.log(li2);

// ------------------- EXO 1 ------------------------
//Déplacer la modale dans le body

const mod = document.querySelector("aside div");
document.body.append(mod);

//--------------------- EXO 2 -----------------------
// modifier le texte des 3 li du footer, si possible avec une boucle
const lis = document.querySelectorAll("footer li");
lis.forEach(textChange)

function textChange(el){
    el.textContent= "JS ne me fait pas peur";
}
//-------------------- EXO 3 -------------------------
// Remplacer le texte des paragraphes pair

const pair = document.querySelectorAll("main p:nth-child(even)");
pair[0].textContent = "Je suis un paragraphe modifié"
pair[1].textContent = "Je suis un paragraphe modifié"

/*
pair.forEach(pChange)

function pChange(pc) {
    pc.textContent = "Je suis un paragraphe modifié"
}
*/

/*
const paras = document.querySelectorAll(".step")
for (let i=0;paras.lenght; i++){
    if (i%2 !=0)
    textChance(paras2[i])
}
*/
