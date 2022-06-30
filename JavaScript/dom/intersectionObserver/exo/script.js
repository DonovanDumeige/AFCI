"use strict"
/*
1. Rendre tous les paragraphes du main, invisible
2. Ajouter une observation sur chaque paragraphe.
3. Lorsque l'élément est au moins à moitié visible dans le viewport
le rendre visible.
4. Désactiver la détection fois l'action terminée.
*/

const ps = document.querySelectorAll('main p');
const visible = new IntersectionObserver(setVisible,{threshold:0.5})

ps.forEach(p=>{
    p.style.display="none";
    visible.observe(p)
})

/* 
Autre possibilité
for (let i = 0; i != ps.length-1;i++){
    ps[i].style.opacity="0";    
} */




function setVisible(entries){
    let entry=entries[0]
    console.log(entry);
    if(entry.isVisible){
        window.addEventListener("scroll", indicatorAnimation)
    } else{
        window.removeEventListener("scroll", indicatorAnimation) 
        // retirer l'évènement quand l'élément n'est plus visible permet d'alléger le site
    }
} 

function indicatorAnimation(){
    ps[i].style.opacity="1"}

