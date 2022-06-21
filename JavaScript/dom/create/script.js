"use strict";
// ----------------- DOM --------------------
// = Document Object Model
const h = document.createElement("header");
/* 
Je fais appel à la méthode (fonction) createElement
de l'object document.
Celle ci prendra le nom d'une balise html en argument. 
*/

console.log(h);
/* On obtient un objet "balise header" qui contient énormément de 
propriétés et méthodes.
Celles ci sont accessibles de la même façon que n'importe quel objet js */

const m = document.createElement("main");
const f = document.createElement("footer");

h.innerHTML = "<h1> Super site en JS </h1>";
//Sans utiliser createElement, on a modifié le HTML de notre header avec innerHTML
console.log(h);

f.innerHTML = "<ul><li>MENU 1</li><li>MENU 2</li><li>MENU 3</li></ul>"
console.log(f);

for(let i=0; i<5; i++){
    const p = document.createElement("p");
    // alt + z permet d'afficher le contenu sur plusieurs lignes sans faire de réel retour à la ligne.
    // on lui ajoute notre texte avec textContent
    p.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum architecto recusandae dolores explicabo amet fugiat dignissimos iusto tenetur, reprehenderit iure dolor veritatis sed eum blanditiis nesciunt laudantium labore, voluptatibus optio."
    m.appendChild(p);
}
console.log(m);
console.log(document.body);
if(document.body){
    document.body.append(h,m,f);
}