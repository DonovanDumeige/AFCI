"use strict"

const form = document.querySelector('form');

form.addEventListener("submit", saveData);

function saveData(e) {
        // annule les évènements par défaut d'un objet (submit, checkbox...)
    // cela permet d'éviter le rechargement de la page.
    e.preventDefault(); 

    //Je transfère les donénes de mon formulaire à l'objet FormData
    const data = new FormData (form);
    //Je déclare un objet vide
    let user = {};
    //Je boucle sur mon formData pour obtenir toutes les valeurs et l'indexation.
    data.forEach((value, name)=>{
        // J'ajoute ces valeurs en tant que propriété
        user[name]=value;
    })
    //J'obtiens un objet contenant toutes les valeurs de mon formulaire.
    showUser(user);
    const strUser = JSON.stringify(user);
    localStorage.setItem("user", strUser);
}

function showUser(u) {
    const h1 = document.querySelector('h1');
    h1.textContent = `Je suis ${u.prenom}, ${u.age} ans`;
}

const userString = localStorage.getItem("user");
if (userString) {
    console.log(userString);
    const user = JSON.parse(userString);
    console.log(user);
    showUser(user)
}