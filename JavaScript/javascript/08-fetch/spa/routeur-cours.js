"use strict";
/**
 * à partir du code suivant,
 * faire que lorsque que l'on clique sur un lien de la navigation
 * le changement de page ne se fasse pas, 
 * que l'adresse de la page change,
 * que l'on charge des données différentes dans le main.
 * Si l'adresse ne se trouve pas dans nos routes, afficher la page 404
 */
const main = document.querySelector('main');
// Je fais la liste de mes routes avec en clef la route voulu
// et en valeur la route réelle.
const routes = {
    "/":"pages/home.html",
    // "/index.html": "pages/home.html"
};
function loadPage(){
    // Je récupère le chemin de la page.
    const path = window.location.pathname;
    // Je récupère le chemin qui correspond dans ma liste.
    const route = routes[path];
    // Je fetch ma route
    fetch(route).then(resp =>{
        if(resp.ok){
            // Je récupère les données textuelles
            resp.text().then(data=>{
                // je les affiches dans mon html.
                main.innerHTML = data;
            })
        }
    })
}
console.log(window.history);
window.history.pushState({},"","/")
loadPage();