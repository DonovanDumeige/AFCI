"use strict";

const h1 = document.querySelector('#mainTitle');
console.log(h1);
// ------------------------------------- L'attribut style' --------------------------------------------------
/* 
Nos éléments HTML possèdent une propriété style qui permet de modifier leur css.
Ce css ajouté par le JS deviendra du css inline (dans la balise de l'élément).
Pour sélectionner une propriété css, il suffit de faire suivre le .style par le nom de la
propriété css.
! ATTENTION, les propriétés css s'écrivent avec "-" sont remplacées par une version
! camelcase : background-color devient backgroundColor
*/
h1.style.backgroundColor = "goldenrod";
h1.style.fontStyle = "italic";
h1.style.fontSize = "3rem";

//Si on se trompe sur le nom de la propriété, aucune erreur n'est envoyée.
h1.style.couleur = "white"; // mais évidemment, ça ne fonctionne pas.
 // de même si la valeur est fausse.
h1.style.color = "rbaa(255,255,255,.8)";

// ------------------------------------- Les classes = .classList --------------------------------------------------

//l'attribut classList contient un tableau représentant toutes les classes de mon élément.
console.log(h1.classList);

//.add() permet d'ajouter une classe
h1.classList.add("banane");

// .remove() permet de retirer une classe 
h1.classList.remove("banane");

//.toggle() permet d'activer ou de désactiver la classe
h1.classList.toggle("banane");

// .contains() permet de vérifier si une classe est active ou non sur un sélecteur
// retourne true si l'élément possède la classe, sinon false.
console.log(h1.classList.contains("banane"));
// utiliser .toggle une nouvelle a désactivé la classe banane
h1.classList.toggle("banane");

//--------------------------------------------- Les autres attributs ----------------------------------------------

console.log(h1.id);
//h1.id = h1.id+"2";
h1.id +="2"

console.log(h1.getAttribute("id"));
const a = document.querySelector('footer ul li a');
console.log(a);
// setAttribute permet d'ajouter ou de modifier un attribut de notre élément html.
// le premier paramètre est le nom de l'attribut. Le second est sa valeur.
a.setAttribute("target", "_blank");
// getAttribute permet de récupérer la valeur d'un attribut donné en paramètre.
console.log(a.getAttribute("href"));
/* 
Cela dit, pour la majorité des attributs, ils sont tout simplement modifiables
ou récupérables en appelant directement leurs noms.
*/
console.log(a.href, a.target);

// On peut sélectionner, modifier ou créer des data-attribute, via .dataset
// On récupère sa valeur initiale avec .dataset.nomDuDataAttribute
// par exemple, je veux récupérer data-truc, je devrais taper .dataset.truc
console.log(a.dataset.color);
a.dataset.color = " ça ne marche pas avec les couleurs !"
// Modifier un élément qui n'existe pas le créera simplement.
a.dataset.bidule = " Coucou,je ne sers à rien !"