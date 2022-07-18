"use strict"

/* 
La programmation orientée objet (POO) consiste à développer toute notre 
logique et nos fonctions à l'intérieur d'objets. La plupart des langages
gérant l'orienté objet demandent de passer par des classes et des constructeurs
que nous verrons par la suite. 
Mais JS gère la création d'objet manuellement. Ce qui va nous permettre de voir
pas à pas comment cela fonctionne.h
*/
// ! Dans un objet ne pas oublier de séparer les propriétés par des virgules.
const Person = {
    name:{
        prenom: "Maurice",
        nom: "DUPONT"
    },
    age : 54,
    /* 
    Dans un objet, on ne parlera pas de variables et de fonctions, mais de
    propriétés et de méthodes.
    */
    salutation : function(){
        /* 
        Avec l'utilisation du mot clé this, je fais appel à l'objet lui-même
        et donc j'ai accès à ses propriétés et méthodes.
        */
        console.log(`Bonjour ! Je m'appelle ${this.fullName}, j'ai ${this.age} ans`);
    },
    anniversaire : function(){
        this.age++
        this.salutation();
    },
    /* 
    Les setters servent à paramétrer une propriété de notre objet,
    en le modifiant légèrement avant de le sauvegarder.
    Leur syntaxe est à mi-chemin entre la propriété et la méthode.
    Leur déclaration se fait avec le mot clé 'set', suivi d'un
    nom et de parenthèse pour prendre un argument. (On retrouve
    pas les habituels ":").
    Pour leur appel, c'est le même que pour une propriété.
    Ex : objet.nom = "truc".
    */
    set nom(n){
        this.name.nom =  n.toUpperCase();
    },
    set prenom(p){
        this.name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    },
    set Age(a){
        this.age = parseInt(a)
    },
    /*  
    Le getter utilise la même syntaxe que le setter, mais a le rôle
    inverse ; Il permet de récupérer une ou plusieurs propriétés 
    quelques peu modifiées.
    */
    get fullName(){
        return this.name.prenom+" "+this.name.nom;
    }
};

/* 
Notre second objet a les mêmes propriétés et méthodes mais avec
des valeurs différentes.
*/
export const Person2 = {
    name:{
        prenom: "Charlie",
        nom: "Lebrun"
    },
    age : 41,
    /* 
    Dans un objet, on ne parlera pas de variables et de fonctions, mais de
    propriétés et de méthodes.
    */
    salutation : function(){
        /* 
        Avec l'utilisation du mot clé this, je fais appel à l'objet lui-même
        et donc j'ai accès à ses propriétés et méthodes.
        */
        console.log(`Bonjour ! Je m'appelle ${this.fullName}, j'ai ${this.age} ans`);
    },
    anniversaire : function(){
        this.age++
        this.salutation();
    },
    /* 
    Les setters servent à paramétrer une propriété de notre objet,
    en le modifiant légèrement avant de le sauvegarder.
    Leur syntaxe est à mi-chemin entre la propriété et la méthode.
    Leur déclaration se fait avec le mot clé 'set', suivi d'un
    nom et de parenthèse pour prendre un argument. (On retrouve
    pas les habituels ":").
    Pour leur appel, c'est le même que pour une propriété.
    Ex : objet.nom = "truc".
    */
    set nom(n){
        this.name.nom =  n.toUpperCase();
    },
    set prenom(p){
        this.name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    },
    set Age(a){
        this.age = parseInt(a)
    },
    /*  
    Le getter utilise la même syntaxe que le setter, mais a le rôle
    inverse ; Il permet de récupérer une ou plusieurs propriétés 
    quelques peu modifiées.
    */
    get fullName(){
        return this.name.prenom+" "+this.name.nom;
    }
};


export default Person;