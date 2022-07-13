"use strict"
/** 
 *  Avant d'utiliser fetch, voyons l'ancienne version de
 * faire avec xmlhttprequest 
 */ 

const url = "./hero.json";
// Je crée un nouvel objet XMLHttpRequest
const xmlhttp = new XMLHttpRequest();
// Je donne une fonction qui sera appelée à chaque chargement de notre requête.
xmlhttp.onreadystatechange = handleRequest;
function handleRequest() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
        let success,data;
        /* 
        try{}catch(err){}
        n'est pas lié aux requêtes http, il peut être utilisé n'importe où en JS.
        Il va tenter d'éxecuter le code dans le "try", et si il y a une erreur, il donnera les 
        informations de l'erreur à catch (dans l'argument placé entre parenthèses) et exécutera 
        le code des accolades catch. 
        Cela permet de ne pas faire planter le code si il y a une erreur, et de produire son
        propre message d'erreur. */
        try{
            data = JSON.parse(xmlhttp.responseText);
            success = true;
        }catch(error){
            console.log(error.message+ " DANS -> "+xmlhttp.responseText);
            success = false;
        }
        if(success){
            console.log(data);
            document.body.innerHTML = `<h1>${data.members[1].name}</h1>`
        }
        console.log(xmlhttp);
    }
}
/* 
On ouvre la requête, on lui indique quelle type de requête lancer
en premier paramètre. 
En second, on lui donne l'adresse du fichier ou
site auquel on souhaite accéder.
En troisième, si la reu^qete doit être asynchrone ou non.
        Une requête asynchrone se fera pendant que JS peut éxécuter d'autres choses
        alors que en non-asynchrone, JS bloquera son éxécution jusqu'à la fin de
        la requête.
 */
xmlhttp.open("GET",url, true);
// On envoie la requête
xmlhttp.send();

fetch(url).then(handleFetch);

function handleFetch(responseText){
    // La propriété ok est un boolean indiquant si cele s'est bien passé ou non.
    if(responseText.ok){
        // si le parse fonctionne, il lancera le callback de then
        // sinon ce sera le callback de catch.
        responseText.json()
        .then(showResult)
        .catch(error=>console.log(error))
    }else{
        console.log(responseText.statusText);
    }
}

function showResult(data){
    document.body.innerHTML += `<h2>${data.homeTown}</h2>`
}