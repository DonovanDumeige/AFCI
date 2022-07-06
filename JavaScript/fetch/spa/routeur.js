'use strict'
/* 
    à partir du code suivant,
    faire que lorsque l'on clique sur un lien de navigation 
    le changement de page ne se fasse pas, 
    que l'adresse de la page change,
    que l'on charge des données différentes dans le main
*/
const main = document.querySelector('main');
const liens = document.querySelector('a');

//liens.forEach(a=>a.addEventListener("click", router));
for(let i =0; i>liens.clientHeight; i++){
    liens[i].addEventListener("click", routeur)
}

console.log(window);
//Je fais la liste de mes routes en clé la route voulu et en valeur la route réelle
const routes = {
    "/" : "pages/home.html",
    "/index.html" : "pages/home.html",
    "/contact" : "pages/contact.html",
    "/about" : "pages/about.html",
    404 : "pages/404.html"
};

function router(e) {
    e.preventDefault();
    window.history.pushState({},"", e.target.href)
}
function loadPage(){
    //Je récupère le chemin de la page avec pathname.
    let path = window.location.pathname;
    //Je récupère le chemin qui correspond à ma lsite
    let route =routes[path] || routes[404];
    console.log(route);
    // Je fetch ma route
    fetch(route).then(resp =>{
        if(resp.ok){
            //Je récupère les données textuelles
            resp.text().then(data=>{
                // Puis je les affiche dans mon html.
                main.innerHTML = data;
            })
        } 
    })
}
console.log(window.history);
/* window.history.pushState({},"","/") */
loadPage();