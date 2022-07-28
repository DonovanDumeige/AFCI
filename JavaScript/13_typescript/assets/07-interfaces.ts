"use strict"

/* 
Les interfaces sont à la jonction entre les types et les classes abstraites.
A la différence des classes abstraites, l'interface ne contiendra que des 
déclarations, pas de définition.
A la différence des types, l'interface sera réservée aux objets et pourra être
redéfinie(fusionnée)
*/

type Chaussette = string;
 
//Impossible de redéclarer mon type. 

//type Chaussette = number;

interface Point{
    x:number;
    y:number;
    get():number
}

// Pas d'erreur, les deux ont fusionnés
interface Point{
    z:number;
}

//document.banane

/* 
L'élément document n'est pas réellement modifié, ici banane sera undefined.
Mais pour vsCode, cela devient tout à fait normal de touver une propriété 
banane dans document. et selon lui, elle sera de type string.
*/

interface Document{
    banane:string;
}
document.banane;

/* 
Pour être valide, une classe qui implémente une interface devra bien posséder
toutes les propriétés et méthodes déclarées dans l'interface.
*/
class Point3D implements Point{
    x=0;
    y=0;
    z=0;
    get(){return this.x}
}
/* 
On limite l'accès à la fonction show à des objets respectant l'interface Point.
Ainsi Point3D est un argument valide.
*/
function show(p: Point){}
show(new Point3D);

/* 
Comme les types, les interfaces ne sont pas compilées.
*/