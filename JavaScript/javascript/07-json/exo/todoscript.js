"use strict";
/**
 * 1. Créer une todo list. à chaque appui sur le bouton ajout,
 * créer un nouvel élément dans la liste.
 * cet élément doit contenir la valeur de l'input et une croix.
 * On en profitera pour vider l'input.
 * 2. le clique sur un élément de la liste lui ajoutera une classe qui aura pour 
 * effet de barrer l'élément.
 * 3. le clique sur la croix supprimera l'élément concerné.
 * 4. sauvegarder la liste en localstorage.
 * 5. afficher la liste sauvegardé au chargement de la page.
 * 6. éditer la liste lorsque l'on coche ou supprime un élément.
 */
const ulTodo = document.querySelector('#list');
const liTodo = document.querySelectorAll('li');
const btnTodo = document.querySelector('.addBtn');
const inputTodo = document.querySelector('#addTodo');
let listInfo = {};

liTodo.forEach(addClose);
btnTodo.addEventListener("pointerdown", addLi);

function addClose(li) {
    const span = document.createElement("span");
    span.textContent = "\u00D7";
    span.classList.add("close");
    li.append(span);
    span.addEventListener("pointerdown", closeLi)
    li.addEventListener("pointerdown", checkLi)
}

function closeLi(e) {
    e.stopPropagation();
    let li = e.target.parentElement;
    delete listInfo[li.dataset.time];
    localStorage.setItem("todoList", JSON.stringify(listInfo));
    li.remove();
}

function checkLi(e) {
    let li = e.target;
    li.classList.toggle('checked');
    listInfo[li.dataset.time].checked = li.classList.contains("checked");
    localStorage.setItem("todoList", JSON.stringify(listInfo));
}

function addLi() {
    if (inputTodo.value === '') {
        alert("Ne laisse pas ce champ vide !");
    } else {
        const li = document.createElement("li");
        li.textContent = inputTodo.value;
        li.dataset.time = Date.now();
        ulTodo.append(li);
        addClose(li);
        console.log(listInfo);
        listInfo[li.dataset.time] = {value: inputTodo.value, checked: false};
        localStorage.setItem("todoList", JSON.stringify(listInfo));
        inputTodo.value = "";
    }
}
function firstLoad(){
    listInfo = JSON.parse(localStorage.getItem("todoList"))??{};
    for(let id in listInfo){
        const el = listInfo[id];
        const li = document.createElement("li");
        li.textContent = el.value;
        li.dataset.time = id;
        li.classList.toggle("checked",el.checked);
        ulTodo.append(li);
        addClose(li);
    }
}
firstLoad();