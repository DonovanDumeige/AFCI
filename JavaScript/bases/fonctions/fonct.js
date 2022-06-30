"use strict"
/*
Pour déclarer une fonction,
j'utilise le mot clé "function" suivi de parenthèses
qui accueilleront les possibles arguments.
Ensuite des accolades qui contiendront le fonctionnement de ma fonction
*/

function salut(){
    console.log("Bonjour tout le monde");
}

/* 
Pour appeler une fonction, il suffit de taper son nom suivi de parenthèses
*/
salut();
// Il existe d'autres façons de déclarer une fonction.
const salut2 = function salut() {
    /* 
    On peut ranger une fonction dans une variable, son nom sera alors
    celui de la variable, on ne met pas de nom après le mot function.
    */
    console.log("Salut tout le monde");
}
salut2();
// Ici on utilise une fonction flêchée

const salut3 = ()=> {
    console.log("Coucou tout le monde");
}
salut3();
// Je peux aussi avoir des fonctions rangées dans des objets
const s = {
    salut: ()=> console.log("Salutations tout le monde")
};
s.salut();
// On peut aussi ranger des fonctions dans un tableau, même si c'est peu utilisé

let arr = [function(){console.log("test")}]
arr[0]()

function bonsoir(nom1){
    if(nom1 == undefined){
        // Afficher un message d'erreur dans la console
        console.error("Donne moi un fichu argument !")
    }
    console.log("Bonsoir "+nom1);
}
/* JS accepte d'appeler une fonction qui attend des arguments, même sans
lui en donner. Les arguments seront alors undefined
*/
bonsoir();
// La fonction attendant un argument, on se doit de lui en donner un.
bonsoir("agent 41");
// Chaque nouvel argument doit être séparé d'une virgule.
/* 
Si on donne plus d'arguments que demandé, alors JS va juste
ignorer les arguments supplémentaires.
*/
bonsoir("agent 007","Le Chiffre");

function bonneNuit(nom1, nom2){
    /*
    bonus console.log : ajouter %c devant le premier argument et du css

     */
    console.log("%cBonne nuit "+nom1+" et "+nom2, "color:lightcoral; font-size:4rem;");
}
/* 
Si une fonction attend plusieurs arguments, alors lors de l'appel, il faudra lui donner 
plusieurs arguments séparés d'une virgule.
La première valeur donnée ira dans le premier argument, la seconde dans le second etc. 
*/
bonneNuit("Michel","Augustin");

function goodBye (nom1, nom2="les gueux"){
    /* 
    Il est possible de donner des valeurs par défaut à nos paramètres
    dans ce cas, si on lui donne une valeur, alors il prendra cette valeur,
    mais si on ne lui donne rien, alors il prendra sa valeur par défaut.
    */
    console.log("Good bye "+nom1+" et "+nom2);
}
// Affiche Kévin et les gueux
goodBye("Kevin");
//Affiche Kevin et Alain
goodBye("Kevin", "Alain");

function goodMorning(...noms){
    /*
    Le rest operator (...argument) permet de ranger tous les arguments donnés dans
    un tableau
    */
   // toString transforme un tableau en string en séparant les valeurs par des virgules
    console.log("Good morning "+noms.toString(" "));
    //join fera de même en séparant les valeurs par le string donné en arguments
    console.log("Good morning "+noms.join(" et "));
}
goodMorning("Antoine", "Daniel", "Baghera", "Horty");

function goodEvening(nom1,nom2,...noms){
    console.log("Good Evening "+nom1+", "+nom2+" et "+ noms.toString());
}
goodEvening("Pierre", "Paul", "Jacques", "Karl")
//--------------------------------- Retour sur forEach -------------------------
let pr = ["Alice", "Ariel", "Mulan", "Belle"];
/* 
Certaines fonctions, comme forEach, prennent en argument une autre fonction.
Par exemple forEach appelle la fonction donnée en argument, pour chaque élément 
du tableau
*/
pr.forEach(el=>console.log(el)); // => fonction flechée
pr.forEach(bonsoir);
/*
On appelle cela une fonction callback
Cela peut être une fonction déclaré précédemment, comme une fonction directement 
écrite entre les parenthèses de forEach. On parle alors de fonction anonyme.
*/
pr.forEach(function (princesse) {
    console.log("Bienvenue "+princesse);
})

//todo Quelques variantes d'écriture 

// On peut réduire une fonction anonyme à une fonction flechée
pr.forEach((princesse)=>{
    console.log("Bienvenue "+princesse);
})

//si on a un seul argument, alors on peut même retirer les parenthèses
pr.forEach(princesse=>{
    console.log("Bienvenue "+princesse);
})

// si on a une seule instruction dans notre fonction, on peut retirer les accolades
pr.forEach(princesse=>console.log("Bienvenue "+princesse));

function compliment(salutation, nom){
    // Ici ma fonction compliment prend en premier argument une fonction.
    // on utilise le premier argument comme une fonction.
    salutation(nom+" le magnifique");
}
//! Attention, quand on donne une fonction en callback, on lui donne juste le nom
//! pas de parenthèses
compliment(bonsoir, "Dio");
compliment(nom=>console.log("Guttentag "+nom), "Hanz");

function insulte(nom){
    if(nom==undefined){
        console.error("Donne moi un nom !");
        // On peut ne rien donner à retourner pour simplement mettre fin à la fonction.
        return;
    }
    // le mot clé return met fin à la fonction et renvoi ce qui lui est donné
    return nom+" le gros bat";
    // Cela ne s'affiche logiquement pas. Rien ne peut venir après un return, qui arrête la fonction.
    console.log("COUCOU TOUT LE MONDE !");
}
// si j'appelle la fonction sans console.log, je ne verrai rien
console.log(insulte("Ramsay"));
/* Par contre, je peux la donner à un console.log ou a une variable
pour récupérer l'information
*/
let z = insulte("Geoffrey");
console.log(z);
//si le return est vide, alors on obtiendra un undefined
console.log(insulte());
//notre fonction bonsoir ne retourne aucune information, donc elle retournera undefined
console.log(bonsoir("Bill"));