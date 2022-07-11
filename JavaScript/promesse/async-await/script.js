"use strict"
/* 
EXO : 
Faire un console log du tableau tab.json trié par notre fonction
de tri.
*/

// On commence par fetch les données du json
fetch("tab.json").then(r=>{
    if (r.ok){
        r.json().then(data=>{
            tri(data).then(resultat=>console.log(resultat))
.then(error=>console.log(error))
.catch(err=> console.error(err));
console.log(data)
        });
    }
});

//tri les données
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
}



/* Quand on utilises les promesses, on peut vite se retrouver dans ce qu' on appelle
les callback hell.
Ces enfers des callbacks, représente ces fois où l'on a des callbacks, dans des callbacks, dans des callbacks et
ainsi de suite.
Si cela ne change pas le fonctionnement du code, cela peut rendre sa visibilité difficile.

C'est pour cela que JS implémente les mots clefs "async" et "await"
"async" se place devant la déclaration d'une fonction qui aura pour rôle de gérer des promesses.
"await" se place devant l'appel d'une fonction retournant dans une promesse. Il indique que le code
doit attendre le résultat de la promesse.
!await ne peut être utilisé que dans une fonction "async"
*/

async function exemple(){
    let data;
    let resp = await fetch("tab.json");
    if(resp.ok){
        try{
            data = await resp.json();
            let message = await tri(data)
            console.log(message);
        }
        catch(err){
            console.error(err)
        }
        finally{
            console.log(data);
        }
        
    } 
}
exemple();