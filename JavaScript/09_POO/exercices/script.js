"use strict"

/* 
EX 0 : Utiliser l'import export pour importer les exercices ici
et les lancer dans ce fichier
EX 1 : voir le fichier plusOuMoins-v2.js
EX 2 : voir le fichier paint-v2.js
*/

import g from "./plusOuMoins-v2.js"
const game = g.create();
document.body.append(game)
g.start();
console.log(g.guess);
console.log(g.turn);

import d from "./paint-v2.js"
const drawing = d.create();
document.body.append(drawing);
d.init();