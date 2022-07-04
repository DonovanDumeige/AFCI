"use strict";

const dark = document.querySelector("#darkTheme");
const lis = document.querySelectorAll('.navbar li');
let r,g,b;

dark.addEventListener("input", changeTheme2);


/* function changeTheme(){
    // Si notre checkbox est cochée, on ajoute le thème dark, sinon on lui retire.
    document.body.classList.toggle("dark", dark.checked);
}
changeTheme(); */

function changeTheme2() {   
    if(dark.checked){
        localStorage.setItem("theme", "dark")
        document.documentElement.style.setProperty("--fond", "#333");
        document.documentElement.style.setProperty("--text", "antiquewhite");


    } else{
        localStorage.setItem("theme","light")
        document.documentElement.style.setProperty("--fond", "antiquewhite");
        document.documentElement.style.setProperty("--text", "#333");
    } 
    // Appliquer la couleur aléatoire sur les variables créées dans :root en CSS
/*     document.documentElement.style.setProperty('--fond', randColor());
    document.documentElement.style.setProperty('--text', randColor()); */
}
// changeTheme2();

function loadTheme(){
    let theme = localStorage.getItem("theme");
    console.log(theme);
    if(theme === "dark"){
        dark.checked = true;
        document.documentElement.style.setProperty("--fond", "#333");
        document.documentElement.style.setProperty("--text", "antiquewhite");
    }else{
        document.documentElement.style.setProperty("--fond", "antiquewhite");
        document.documentElement.style.setProperty("--text", "#333");
    }
}
loadTheme();
// Créer une couleur aléatoire
/* function randColor(){
    let rgb = [];
    for (let i = 0; i<3; i++){
        let c = Math.floor(Math.random()*256);
        rgb.push(c);
    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
} */

// --------------------------------------- Local et session storage --------------------------
/*
session et local storage permettent de sauvegarder des informations dans le navigateur de l'utilisateur
localStorage sauvegarde des informations en local qui ne peuvent être supprimées que manuellement
sessionStorage stocke des informations tant que la page, session est ouverte. 
Quand on quitte le navigateur les informations sont perdues 
Ceux ci sont accessibles uniquement depuis le site qui l'utilise (normalement)
! ATTENTION localStorage ne fonctionne peu ou pas si on se contente d'ouvrir le fichier
! il faudra utiliser un serveur local;
* les deux utilisent les mêmes fonctions(méthodes) et propriétés.
*/
/* 
setItem permet de sauvegarder ou modifier une information.
Le premier paramètre est son index (son nom) et le second sa valeur.
Toutes les informations seront stockées sous forme de string.
*/
sessionStorage.setItem("bonjour","Bonjour tout le monde") 
localStorage.setItem("salutations","Bonjour tout le monde !")

// Pour récupérer une information, on utilisera .getItem() en lui donnant en paramètre
// l'index que l'on veut récupérer
console.log(localStorage.getItem("salutations"));

// Pour en supprimer un, il suffit de lui donner son index en paramètre de removeItem
localStorage.removeItem("salutations");

//.clear videra tout le stockage
//localStorage.clear();

console.log(sessionStorage.key(1));

for(let i=0; i<sessionStorage.length;i++){
    let index = sessionStorage.key(i)
    console.log(index, "->", sessionStorage.getItem(index))
}