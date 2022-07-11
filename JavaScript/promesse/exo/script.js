"use strict"

/* 
1. Lire la document de la fonction sort() de javascript et permettre
à celle-ci de trier convenablement notre tableau.
2. Faire une fonction de "tri" qui va retourner une promesse. Cette fonction
devra trier notre tableau. Puis si tout s'est bien passé, lancé le .then()
Mais si deux éléments du tableau sont de type différent, lance le .catch()
3.  */
let a = [5, 12, 8]
let b = [7, "27", 9]
// indiquer une fonction de comparaison permet de corriger le soucis de .sort à trier selon une chaine de caractère.
/* a.sort((a,b)=>{
    console.log(a,b);
    return a-b;
})
console.log(a) */


function tri(tab) {
    return new Promise((resolve, reject) => {
            tab.sort((a,b)=>{
                if(typeof(a) !== typeof(b)){
                    reject("Tous les éléments du tableau ne sont pas de même type");
                }
                return a-b;
            });
            resolve("Le tableau a été correctement trié");
    });
};

tri(a).then(message=>console.log(message))
.then(error=>console.log(error));
tri(b).then(message=>console.log(message))
.catch(error=>console.log(error));
console.log(a);
console.log(b);