"use strict"

/*
Faire une requête sur le lien donné ci-dessous
Analyser l'objet JSON obtenu et afficher toutes les informations
qui nous sont rendus.
*/

const url2 = "https://api.thedogapi.com/v1/images/search";

fetch(url2).then(test);

function test(responseText) {
    if(responseText.ok){
        responseText.json()
        .then(result)
        .catch(error=>console.log(error))
    }
}

function result(data) {
    console.log(data[0].url);
    document.body.innerHTML = `<img src=${data[0].url} width=${data[0].width} height=${data[0].height} id=${data[0].id}>`
}