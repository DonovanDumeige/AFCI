"use strict"

// ------------------------------ EXO 1 ---------------------------
/* 
Faire que lors de la sélection d'une couleur dans le div 2
le texte du bouton change de couleur,
et lors de l'appui sur le bouton
le background de la div change de couleur
*/

const div2 = document.querySelector('.div2');
const input2 = div2.querySelector('input');
const btn2 = div2.querySelector('button');

input2.addEventListener("input", (c)=>{
    btn2.style.color=c.target.value;
})
function color() {
    div2.style.backgroundColor = input2.value;
}
btn2.addEventListener("click", color);


// ---------------------------- EXO 2 ---------------------------
/*
Lors du clic sur le bouton de la div 3,
faire apparaître une modale (soit déjà créé en html), soit que l'on crée en JS
Cette modale doit contenir un élément permettant de la faire disparaitre.
*/

const div3 = document.querySelector('.div3');
const btn3 = div3.querySelector('button');

const d = document.createElement("div")
const sp = document.createElement("span")
sp.textContent = "x"
d.append(sp);

console.log(d)
btn3.addEventListener("click", (cr)=>{
    div3.append(d);
    d.style.display = "block";
})
sp.addEventListener("click", (cr)=>{
        d.style.display = "none";
})


//---------------------------- EXO 3 -----------------------------
/*
Faites que tous li dans la nav douyble de taille lors que l'on clique dessus, 
puis retounent à leurs tailles d'origine si on clique à nouveau dessus.
*/

const lis = document.querySelectorAll('nav ul li');
console.log(typeof(lis), lis);

lis.forEach(function(e){
    e.addEventListener("click",function(changes){
        if(changes.target.style.transform == "scale(2)"){
            changes.target.style.transform = "scale(1)"
        }else{
            changes.target.style.transform = "scale(2)"
        }
    });
});

// --------------------- EXO 4 --------------------
/*
Utilise les évènements 'mouseover' et 'mousemove' pour faire
que lorsque l'on passe sur le span du footer, il commence à suivre la souris
et cela jusqu'à ce que l'on clique, il retournera alors à sa position d'origine.
*/

const sp2 = document.querySelector('.endOfFile');

sp2.addEventListener("mouseenter", followOn)
function followOn(e) {
    sp.style.position="absolute"
    document.body.addEventListener("mousemove", follow)
}
function follow(e) {
    sp.style.top=e.clientY+"px";
    sp.style.left= e.clientX+"px"   
}
document.body.addEventListener("click", followoff);
function followoff() {
    sp.style.position="initial"
    document.body.removeEventListener("mousemove", follow)
}