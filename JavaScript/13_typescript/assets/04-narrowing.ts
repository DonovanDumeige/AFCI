"use strict"
/* 
Narrow signifie étroit, narrowing rétrécissement
Le narrowing c'est le fait de diminuer les possibilités de type.
*/

function birthday(age: string|number) {
    console.log(age);
    //age++ ne fonctionnera pas car age n'est pas strictement un nombre
    if(typeof age === "number"){
        age ++;
    } else {
        age = parseInt(age)+1;
    }
    //return age; Erreur car retourne un nombre.
    return age+" ans";
};

function chaussette(droite:string|boolean, gauche: string|number) {
    console.log(droite, gauche);
    if(droite === gauche){
    //Ici seul le type string reste car il est le seul en commun aux deux.
    console.log(droite, gauche)
    }
};

function planning(date : Date|String, days: string[]|number){
    //console.log(date.getDate()); Erreur car possiblement un string.
    if (date instanceof Date) {
        // Ici date est forcément de la classe Date.
        console.log(date.getDate());
    }
    // console.log (days+1); peut être un tableau
    if(!Array.isArray(days)){
        console.log(days+1);  
    }
}
document.addEventListener("keypress", clavier);
function clavier(e: KeyboardEvent|HTMLElement) {
    if("truc" in e){
        console.log(e);
        // Le type never indique que selon typescript, il ne peut y avoir aucun type
        // qui correspond à cette variable. (sans provoquer d'erreur)
    }
}

// Avec un boolean en retour, TS n'arrive pas à savoir à quoi correspond le boolean.
// function isDate(a: any): boolean{
    function isDate(a: any): a is Date{
        // En lui indiquant a is Date, TS comprend que le boolean indique si a est une Date ou non.
        return a instanceof Date;
    }
    function check(a: Date|HTMLElement){
        if(isDate(a)){
            console.log(a.getDate());
        }
    }