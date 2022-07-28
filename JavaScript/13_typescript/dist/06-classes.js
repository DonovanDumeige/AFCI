"use strict";
class Truc {
    /*
    Attention les accesseurs en TS ne seront pas
    Et un private TS ne peut être private JS
    On utilisera soit "private" soit "#"
    */
    prenom = "Maurice";
    nom = "Dupont";
    age = 78;
    constructor() {
        // Ils sont tous accessible dans ma classe.
        this.prenom;
        this.nom;
        this.age;
    }
}
;
const t = new Truc();
t.prenom;
//Une fois ma classe instanciée, je n'ai accès qu'aux propriétés public
//t.nom;
//t.age;
class Machin extends Truc {
    constructor() {
        super();
        this.prenom;
        this.nom;
        //Une fois héritée, j'ai accès aux propriétés public et protected, mais pas private;
        //this.age;
    }
    faireUnTruc() {
        /*
        Il est possible d'indiquer un type différent pour this, en le typant entre les
        parenthèses de la fonction, comme pour un argument classique.
        */
        console.log(this);
    }
}
// J'indique avec le généric, que ma classe va recevoir dans son constructor
// un argument dont elle devra retenir le type;
class Collection {
    items;
    // En indiquant à mon constructor qu'elle recoit un argument avec un accesseur
    // (private, protected, public), la compilation en js intègrera automatiquement
    // cet argument en tant que propriété de mon objet
    constructor(items) {
        this.items = items;
    }
    addOne(arg) {
        this.items.push(arg);
        return this;
    }
    addMore(arg) {
        this.items.push(...arg);
        return this;
    }
}
// c1 sauvegarde que le type qui lui est donné (nombre).
// il n'acceptera alors que des nombres pour ses méthodes addOne et addMore
const c1 = new Collection([2, 1, 5, 4]);
c1.addOne(3);
//c1.addOne("truc")
/*
Petite astruce de POO (non liée à TS)
En faisant retourner "this" aux méthodes qui n'ont rien à retourner,
il est possible de faire du chainage de méthode.
Notre objet étant retourné à chaque fois, on peut appeler à nouveau une de
ses méthodes.
*/
c1.addOne(34).addOne(32).addMore([23, 21, 90]);
class Triangle {
    c1 = 4;
    c2 = 8;
    c3 = 12;
}
class Rectangle {
    c1 = 17;
    c2 = 32;
}
function getC1(arg) {
    return arg.c1;
}
getC1(new Triangle);
/*
Pas d'erreur ici alors que je donne un triangle à une fonction qui demande un rectangle
TS ne compare pas le nom des classes, mais les propriété qu'elles possèdent.
Quand je lui dit de n'accepter qu'un Rectangle, elle attend un objet avec les propriétés
c1 et c2.
Je lui donne un Triangle qui a ces deux propriétés, c'est donc valide.
*/
class Polygone {
    sides = {};
    CountSide() {
        return this.sides.length;
    }
}
/*
Une classe abstraite existe pour servir de modèles à d'autres classes.
Il est impossible d'instancier une classe abstraite.
Ici on fait hériter notre Class Carre de la class Polygone.
Carre ne retournera une erreur tant qu'il ne correspondra pas à ce que demande Polygone.
Polygone a une méthode abstraite, c'est-à-dire une méthode qui est déclaré mais non défini.
Il faudra le définier dans ses héritiers (ici Carre) pour que ceux ci soient valides.
*/
class Carre extends Polygone {
    constructor(c) {
        super();
        this.sides.c = c;
    }
    surface() {
        return this.sides.c * this.sides.c;
    }
}
const square = new Carre(5);
console.log(square.surface());
console.log(square.CountSide());
