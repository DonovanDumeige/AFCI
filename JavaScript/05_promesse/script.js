"use strict"
/* 
Par défaut, toute programmation en Javascript est dite "synchrone"
c'est à dire que tout le fonctionnement de la page et de JS s'arrête tant
que le code n'a pas terminé de s'éxécuter.
*/


/* for (let i = 0; i < 1000000000; i++) {
    if (i === 999999999) {
        console.log("Synchrone :"+i);
    }
    
}
console.log("Bonjour Synchrone"); */

/* 
Mais JS peut gérer de la programmation asynchrone. C'est à dire qu'il peut continuer 
d'éxécuter du code pendant qu'une autre partie du code continue à travailler.
On a pu voir cela avec Fetch.
*/


/* fetch("test.json").then(res=>{
    for (let i = 0; i < 1000000000; i++) {
        if (i === 999999999) {
            console.log("Asynchrone :"+i);
        }
        
    }
})
console.log('Coucou Asynchrone');
 */
/* 

Une fonction retourne soit quelque chose(un chiffre, un string, un tableau), soit rien du tout
(dans ce cas, elle retournera en fait "undefined").
Il s'avère que Fetch retourne bien quelque chose, une promesse.
*/

let request = fetch("test.json");
console.log(request);

/* 
Dans cet objet "promise", on a trois méthodes principales :
.then() qui va prendre une fonction callback qui sera appelée une fois
la promesse tenue (réussite)
.catch() qui va prendre une fonction callback qui sera appelée une fois
la promesse rejetée (échec)
.finally() qui va prendre une fonction callback qui sera appelée une fois
la promesse traitée(réussite ou échec)
*/

// Avec Fetch, then récupère la réponse de la requête
request.then(res=>console.log("then :"+res));
// Catch récupère l'erreur de la requête
request.catch(err=>console.log("error :"+err));
// Finally ne récupère rien, j'aurais donc dû uttiliser ()=> plutôt que variable=>
request.finally(test=>console.log("test : "+test));

/* 
Il est possible de résoudre plusieurs promesses en même temps.
Pour cela on fera appel à la méthode .all() de l'objet Promise à laquelle on donnera
un tableau de toutes les promesses que l'on souhaite résoudre.
Une fois toute résolue, le then() se lancera en donnant en paramètre un tableau 
des résultats.
*/

let r1 = fetch("test.json");
let r2 = fetch("test2.json");

Promise.all([r1,r2]).then(res=>{
    console.log(res);
    // je boucle sur mon tableau de réponse
    res.forEach(r=>{
        // et je traite chaque réponse comme je le ferais
        // sur un Fetch classique.
        if(r.ok){
            /* Bien sûr cet exemple fonctionne car mes deux fichiers ont la même structure.
            En cas de fichier avec une structure différente, il faudra adapter le code. */
            r.json().then(data=>console.log(data.prop))
        }
    })
});

/* On trouvera aussi les méthides "Promise.race()" et "Promise.any()" qui prendront
elles aussi un tableau de promesse.
Mais au contraire de .all(), elles ne rendront que la première promesse à s'éxécuter.
La différence entre les deux se fait au niveau du catch :
.race() lancera le catch si la plus rapide des promesses retourne une erreur.
.any() lancera le catch si toutes les promesses retournent une erreur. */
/* 
Lorsque l'on crée une promesse, elle prend une fonction callback avec 2 arguments.
Ces deux arguments représentent respectivement la fonction callback qui sera donnée à then
et celle donnée à catch.
*/
let random = new Promise((resolve, reject)=>{
    let r = Math.floor(Math.random()*10);
    if (r<5) {
        resolve("Bravo r est plus petit que 5 !")
    } else{
        reject("Désolé, r est plus grand que 5 !")
    }
});
random.then(res=>console.log("then : "+res))
.catch(err=>console.log("error : "+err))
.finally(()=>console.log("finally : ", "Mon random est terminé"))