"use strict"

/*
 * 1. Créer une todo list. A chaque appui sur le bouton ajout, créer un nouvel élément dans la liste
 * Cet élément doit contenir la valeur de l'input et une croix
 * On en profitera pour vider l'input.
 * 2. Le clic sur un élément de la liste lui ajoutera une classe qui aura pour effet de barrer l'élément.
 * 3. Le clic sur la croix supprimera l'élément concerné.
 * 4  sauvegarder le ficher en localstorage.
 * 5. afficher la liste sauvegardé au chargement de la page.
 * 6. éditer la liste lorsque l'on coche ou supprime un élément.
 */

let todo = document.querySelector('#todo');
const add = document.querySelector('#add');