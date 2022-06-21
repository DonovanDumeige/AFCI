/*
Créer une modale en JS qui va venir se placer devant le reste
de la page et centré dans celle-ci.
Cette modale devra contenir un titre, un paragraphe et deux boutons
cela en étant un minimum stylisé en css
*/

"use strict"

const s = document.createElement("section");
const h2 = document.createElement("h2");
h2.textContent= "Pop-up, coucou !";
const p = document.createElement("p");
p.textContent= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusantium ipsa ut possimus placeat voluptate illo at, facilis praesentium laboriosam minus, reprehenderit ratione autem aliquam iusto esse suscipit in delectus?";
console.log(s);
s.append(h2,p);
for (let i=2; i<4; i++){
    const button = document.createElement ("button");
    button.textContent="Cliquez moi !";
    s.appendChild(button)
}

document.body.appendChild(s);