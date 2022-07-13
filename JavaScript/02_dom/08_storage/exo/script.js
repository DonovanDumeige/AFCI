/* 
* 1.Ajouter un bouton de sélection qui permettra de choisir entre 3 thèmes.
* 2.Appliquer ce thème grâce à Javascript (pas besoin de faire un thème très compliqué)
* 3.Faire en sorte que le choix de l'utilisateur soit toujours appliqué quand il change de page.
*/

"use strict";
const dark = document.querySelector("#darkTheme");
const bdx = document.querySelector ('#Theme2')
const org = document.querySelector ('#Theme3')
const lis = document.querySelectorAll('.navbar li');
console.log(bdx)
console.log(org);
dark.addEventListener("input", changeTheme);
bdx.addEventListener("input", changeTheme);
org.addEventListener("input", changeTheme); 


//* Seconde manière de faire
//* J'ai préféré regrouper mes évènements dans une seule fonction 
//* plutôt que d'en faire une par couleur comme à l'initial (voir ci-dessous)


function changeTheme() {   
    if(dark.checked){
        localStorage.setItem("theme", "dark")
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "aliceblue";
    } else if(bdx.checked){
        localStorage.setItem("theme", "bordeaux")
        document.body.style.backgroundColor =  "#9f003f";
        document.body.style.color = "lightgrey"; 
    } else if(org.checked){
        localStorage.setItem("theme", "orange")
        document.body.style.backgroundColor = "#b93b04";
        document.body.style.color = "lightskyblue" 
    }
    else{
        localStorage.setItem("theme", "light")
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"; 
}
    } 


    function load() {
        let theme = localStorage.getItem("theme");
        console.log(theme)
        if(theme === "dark"){
            dark.checked = true;
            document.body.style.backgroundColor = "#333";
            document.body.style.color = "aliceblue";
        } else if (theme === "bordeaux"){
            bdx.checked = true;
            document.body.style.backgroundColor =  "#9f003f";
            document.body.style.color = "lightgrey";
        } else if (theme === "orange"){
            org.checked = true;
            document.body.style.backgroundColor = "#b93b04";
            document.body.style.color = "lightskyblue"; 

        } else{
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    }
    load();
/* 















//* Première manière de faire
/* function changeTheme2() {
    if(bdx.checked){
        document.body.style.backgroundColor =  "#9f003f";
        document.body.style.color = "lightgrey";
    } else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}
changeTheme2();

function changeTheme3() {
    if(org.checked){
        console.log(org.checked);
        document.body.style.backgroundColor = "#b93b04";
        document.body.style.color = "lightblue"
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } 
}
changeTheme3();
 */
