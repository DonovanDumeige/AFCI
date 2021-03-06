// Un commentaire sur une seule ligne.
/*
Un commentaire qui peut être
multiligne.
*/
//? indiquer à JavaScript de ne pas corriger par lui-même les erreurs
//? dont il comprendre le sens. La moindre erreur sera signalée.
"use strict";

//? console.log permet d'afficher des informations depuis la console
//? comme des messages, des informations
console.log("Coucou depuis un fichier JS !");


//* ------------------------ Déclaration des variables ------------------------
// let est la manière la plus classique de déclarer une variable.
let banane;
console.log("banane :", banane);
//! Les variables sont sensibles à la casse (attention aux majuscules, minuscules)

//le mot clé "var" crée des variables avec une plus grande portée.
var pomme;

/*
Le mot clé "const" permet la déclaration de constante, une variable dont la 
valeur ne peut pas changer. 
On doit définir (donner une valeur) à une constante lorsqu'elle est déclarée
*/
const framboise = 5;
// framboise = 3; cela retourne une erreur car on ne peut pas changer la valeur d'une constante.

// je peux déclarer plusieurs variables en les séparant d'une virgule.
let a,b,c;

// Ce n'est pas obligatoire de mettre le point virgule à la fin de chaque déclaration.
//! Il ne faut cependant pas oublier les saut de lignes 

// var a; retourne une erreur car la variable a déjà été déclarée.

// on peut également choisir de définir les variables lors de leur déclaration.
var d,e=4, f=1;

/* 
Les noms des variables peuvent contenir des lettres, des chiffres, 
des _ ou des $.
Cependant, elles ne peuvent pas commencer par un chiffre. 
*/

//* --------------------------- La portée des variables -----------------------

//* La « portée » d’une variable désigne l’espace du script dans laquelle elle va être accessible.
let gLet =1;
var gVar=1;
// un block = tout ce qui est entre les accolades.
{
    let hLet=2;
    var hVar=3;
    console.log(gLet, gVar,hLet, hVar);
}

console.log(gLet, gVar, /*hLet,*/ hVar);
/* 
hlet n'est pas déclaré, car un let déclaré dans un block
n'est accessible que dans ce block.
*/
// var par contre est accessible peu importe où il se trouve.
// const suit les mêmes règles que let.
{
    let gLet=5;
    var gVar=5;
        /*
    Redéclarer une variable ne retournera pas d'erreur si
    cela est fait dans un block.
     */
    console.log("Dans le block :", gLet, gVar);
}
/*
Les valeurs sont à 5 dans le block et à 1 hors du block, c'est une variable différente
mais à 5 pour le var, car c'est bien la même variable.
*/
console.log("Hors du block :", gLet, gVar);

//----------------------------- TYPES des variables --------------------
let num =5,
    str="Coucou",
    bol=true,
    arr = [],
    obj= {},
    und;

// La fonction typeof() permet de vérifier le type d'une variable.
// JavaScript a 5 types principaux
// number
    console.log("num",typeof(num));
// string = chaine de caractères
    console.log("str",typeof(str));
//boolean
    console.log("bol",typeof(bol));
//object
    console.log("arr",typeof(arr)); // tableaux
    console.log("obj",typeof(obj)); // objets
//? Les tableaux et objets fonctionnent différemment mais sont du même type.
//undefined
    console.log("und",typeof(und));

    bol=42;

//* -------------------------- CHAINE DE CARACTERES -----------------------
let s1="Coucou", s2='Coucou', s3=`Coucou`;
// Pour définir un string, on utilisera au choix "", '' ou ``
// "" ou '' n'ont aucune différence dans leur utilisation
s1="L'apostrophe ne pause pas de problème ici";
s2='L\'apostrophe ne pause pas de problème ici';// \ permet de ne pas prendre en compte '
s1="Le grand ordinateur a dit \"42\"";
s1='Le grand ordinateur a dit "42"';
/* 
Selon si on a besoin d'appostrophe ou de guillet on devra utiliser \
ou utiliser l'autre caractère pour définir notre string
*/
s1="Karl";
// En JS, le symbole de la concaténation est +
s2 ='Bonjour '+ s1 + ' Comment vas-tu ?';
console.log(s2);
// Mais on peut aussi obtenir ce même résultat avec de l'interpolation
s3= `Bonjour ${s1} Comment vas-tu ?`;
// L'interpolationne peut s'utiliser qu'avec `` et le symbole ${}
console.log(s3);
/* s1="Je ne peux pas
sauter à la ligne, avec des guillemets ou des apostrophes" */
s3 = `Je peux sauter 
à la ligne.`
console.log(s3);

//* ------------------------- LES NOMBRES ------------------
console.log(999999999999999999999999);
//JavaScriptperd en précision sur de grand nombres.
console.log(0.2+0.1);
// Il peut aussi avoir des résultats étrange avec certains nombres à virgule.
console.log(
    5+5,
    5-5,
    5*5,
    5/5,
    5%2,
    5**5
);
// % Le modulo, retournera le reste d'une division
// ** la puissance, 
console.log(
    5 + "5",
    5 - "3",
    5 + "Banane",
    5 - "Banane"
);

/* 
JS si il doit additioner un string avec un nombre, fera une concaténation.
Si il doit soustraire un nombre et un string, il testera si le string contient
un nombre, si ce n'est pas le cas il répondra NaN = Not a Number.
*/
console.log(typeof(NaN));
// isNan() permet de vérifier si le paramètre n'est pas un nombre.
console.log(isNaN(5-"chaussette"));
console.log(isNaN(5-"1"));

//Infinity représente le nombre maximum utilisable en JS
console.log(Infinity, -Infinity);

let n=0;
n=n+5;
n +=5;
n -=2;
n *=3;
n /=4;


console.log(n);
// variable++ (ou ++variable) incrémente la variable de 1
// variable --(ou --variable) décrémente de 1
n++; // incrémentation n augmente de 1
n--; // décrémentation n baisse de 1
++n
--n
console.log(n++); // affiche 6
console.log(n); // affiche 7
console.log(++n); // affiche 8
console.log(n); // affiche 8
/*
Si le ++ ou -- est placé après la variable, on donnera la valeur de la 
variable avant de l'augmenter/baisser
En les mettant avant, on augmentera/baissera puis on donnera le résultat.
*/

n=13;
// .toString() transforme un nombre en string,par défaut en utilisant la base de 10.
// Mais on peut lui donner en paramètre sur quelle base faire la conversion.
console.log(n.toString(16));

let s="ff";
// parseInt() fonctionne dans le sens inverse en changeant un string en nombre.
// le premier paramètre est le string à changer et le second la base.
console.log(parseInt(s,16));

//* ----------------------------- TABLEAUX / ARRAY --------------------------
let a1 = [5, "truc", true], a2 = new Array(5, "truc", true);
console.log(a1,a2);
/* 
Pour afficher un élément d'untableau, il faut appeler la variable
lui accoler des crochetrs et donner l'index (position) de l'élément
à afficher
*/
//! l'indexation commence à 0;
console.log(a1[1]);
// .length permet de connaitre la taille du tableau.
console.log(a1.length);
// permet de récupérer le dernier élément du tableau.
// il faudra indiquer -1 car .length retourne une valeur non comprise par le tableau
// ici .length retourne 3 mais l'indexation du tableau s'arrête à 2.
console.log(a1[a1.length-1]);

/*
Cette façon de faire ne copie pas le tableau mais seulement
l'adresse à laquelle se trouve le tableau dans notre ordinateur
*/
let a4=a1;

console.log(a4);
a4.push("Super tableau!");
// En modifier un, modifie les deux.
console.log (a1,a4);
// En utilisant la syntaxe de décomposition (spread operator)
// le tableau est copié élément par élément dans un nouveau tableau
let a5 = [...a1];
a5.push("Super clone !")
//ici mes deux tableaux sont différents
console.log(a1,a5);
// le spread operator décompose mon tableau en différents éléments séparé d'une virgule
console.log(...a5);
// j'ajoute les valeurs de mon tableau a5 dans un autre tableau.
// j'insère les éléments de a5 entre les éléments a7.
let a7 = ["Pizza", ...a5, "Pomme", "Banane"];
console.log(a7);

let a8 = ["Pizza", a5, "Pomme", "Banane"];
// Sans le spread operator, on se retrouve avec un tableau multidimensionnel
console.log(a8);
// Ici je sélectionne mon élément à l'index 1 qui est un autre tableau
// puis l'élément à la position 5 de ce second tableau
console.log(a8[1][5]);
let a9=[[[[[["Coucou"]]]]]];
// On peut avoir autant de tableau que l'on souhaite les uns dans les autres.
console.log(a9[0][0][0][0][0][0]);


//* ------------------------ LES OBJETS ------------------------
let o1 = {nom : "dupont", age : 45,  loisir:["bowling","mahjong"]};
/* 
Un objet JavaScript ressemble à un tableau, mais utilise des {} au lieu des []
L'autre différence principale sera l'utilisation de mots pour indexer les valeurs
au lieu des chiffres.
*/
console.log(o1);
/* Pour sélectionner une propriété de mon objet, je peux appeler mon objet suivi
d'un point puis du nom de ma propriété
*/
console.log(o1.nom);
// Ou alors l'appeler comme je sélectionner un élément de mon tableau.
console.log(o1["age"]);
console.log(o1["loisir"][0], o1.loisir[0]);

let o2 = {vegetal: {légume: {haricot: {couleur:"vert"}}}};

console.log(o2.vegetal.légume.haricot.couleur);

// là aussi on ne copie pas l'objet mais seulement son adresse
let o3 = o1;
console.log(o1);
// donc en lui ajoutant une nouvelle valeur
o3.signe="balance"
// on vient aussi changer l'original
console.log(o3, o1);

// avec le spread operator, on décompose notre objet dans un nouvel objet
let o4 = {...o1};
console.log(o4);
// en changeant sa valeur, mes deux objets sont bien différents
o4.signe="scorpion";
console.log(o4,o1);

// Je transforme un tableau en objet
console.log({...a1});
//console.log([...o1]); ne fonctionne pas dans le sens inverse.

o4.yeux="vert";
// fusionne deux objets, les propriétés différentes sont ajoutées, mais si une propriété
// est en commun, alors ce sera la valeur du dernier objet qui sera gardé.
let o5={...o4, ...o1};
console.log(o5);

//* ------------------------- BOOLEAN -------------------------
let b1 = true, b2 = false;
// un booléen ne peut avoir que deux valeurs : true ou false;
console.log("b1: ",b1,"b2: ",b2);

//Mais on peut en faire apparaitre de plein de façon :
console.log("1 < 2", 1<2);
console.log("1 > 2", 1>2);
console.log("1 >= 2", 1>=2);
console.log("1 <= 2", 1<=2);
console.log("1 == '1'", 1=='1');
console.log("1 === '1'", 1==='1');
console.log("1 != '1'", 1!='1');
console.log("1 !== '1'", 1!=='1');
console.log("!b1", !b1, "!b2", !b2);