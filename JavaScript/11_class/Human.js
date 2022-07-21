"use strict";
/* 
Une classe est un modèle (un plan) qui servira à la construction d'un objet.
Lorsque que l'on voudra créer un nouvel objet à partir d'une classe, on appellera le nom 
de la classe précédée du mot clé "new".
Certaines classes sont déjà intégrées à JS :
new Date(), new FormData(), et autres.
Evidemment on peut créer les notres.
? Quelques conventions de développeurs concernants les classes :
?   Une classe par fichier.
?   Le nom de la classe commence par une majuscule.
?   Le nom du fichier est le même que celui de la classe.
*/
export default class Human {
    /* 
    Lorsque l'on déclare des propriétés dans une classe, il n'y a pas besoin de mot clé
    let, var, const.
    */

    #name ={}; // Il s'agit d'une propriété privée. On l'indique par la présence du # avant la propriété.
    #age;
    /* 
    Une propriété static n'est accessible uniquement lorsque la classe n'est pas instanciée.(démarrée dans un autre objet)
    */
    static categorie = "Mammifère"
    /**
     * 
     * @param {string} prenom 
     * @param {string} nom 
     * @param {string|number} age 
     */
    constructor(prenom, nom, age) { 
    //todo pour rappel le constructeur est la première fonction qui sera appelé lorsqu'à l'import
    //todo on fait variable = new constructor();
    /* 
    Les propriétés peuvent être déclarées mais n'ont pas besoin de l'être au préalable.
    Exception faite des propîétés privées qui doivent être déclarées avant.
    Une propriété privée est une propriété qui n'est acessibles qu'à l'intérieur de notre objet. 
    */  
        this.#prenom = prenom;
        this.#nom = nom;
        this.#age = age;
        this.createdAt = new Date();
    }
    // Pareillement aux propriétés, pas besoin de mot clé function pour déclarer des méthodes.
    static description(){
        console.log("Un humain a généralement, une tête, un buste, deux bras et deux jambes");
    }

    /* 
    Là aussi, on pourra retrouver les getters et les setters.
    Et là aussi, ils peuvent être privés.
    */

    set #prenom(p){
        this.#name.prenom = p[0].toUpperCase()+ p.slice(1).toLowerCase();
    }
    set #nom(n){
        this.#name.nom = n.toUpperCase();
    }
    get fullName(){
        /* 
        Mes proprités nom et prenom étant privées, je n'y ai pas accès en dehors de la classe.
        Mais je peux y accéder via ce getter qui est public.
        */
        return this.#name.prenom+" "+this.#name.nom;
    }

    set #setAge(a){
        this.#age = parseInt(a);
    }
    get age(){
        return this.#age+" ans"
    }
    salutations(){
        console.log(`Bonjour, je suis ${this.fullName} et j'ai ${this.age}`);
    }

    anniversaire(){
        this.#age++
        this.salutations();
    }
}