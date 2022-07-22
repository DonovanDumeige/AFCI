"use strict"

import h from "./Human.js"

/*
Le mot clé extends permet de faire hériter toutes les propriétés et méthodes de la classe
qui suit.
Je ne peux hériter que d'une classe à la fois, mais une classe qui a hérité peut être hérité par une nouvelle classe
et ainsi de suite.
*/
export default class Dev extends h{
    constructor(prenom, nom, age, tech){
        /* La méthode super appelle le constructeur du parent, afin de
        lui donner les informations requises. 
        Même si le constructeur du parent ne recquiert aucun paramètres, il est important
        d'appeler super() pour que toutes les fonctionnalités soit bien accessibles. */
        super(prenom, nom, age)
        this.technologie =  tech;
        // Les propriétés privées ne sont pas héritées
        // console.log(this.#age);
    }
    set technologie(t){

        //this.tech = Array.isArray(t)? t: [t];
        if(Array.isArray(t)){
            this.tech = t;
        } else {
            this.tech = [t]
        }
    }
    /*  Il est possible de réécrire une méthode d'un parent */
    salutations(){
        console.log(`Bonjour, je suis ${this.fullName} et j'ai ${this.age} et je maitrise ${this.tech.join(" ,")}`)
    }
}