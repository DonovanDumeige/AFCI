"use strict"

// définition des variables principales

let wordToGuess = "canard",
    index = wordToGuess.length,
    currentWord = [...wordToGuess],
    emptyWord = [],
    turn,
    message = {
        win: "Vous avez gagné, bravo !",
        lose: "Vous avez perdu...",
        guessed: "Vous avez déjà joué cette lettre"
    },
    spanmess = document.createElement('span');
document.querySelector('.guess-area .word').append(spanmess);
const word = document.querySelector('.guess-area ul');
const buttons = document.querySelector('.buttons');
// -----------------------------------------------------------------


// Création de li en fonction de la longueur du mot


function createLetters() {
    for (let i = 0; i < wordToGuess.length; i++) {
        let li = document.createElement('li');
        li.classList.add('letter');
        word.append(li);
    }
}
function createLetters() {
    
}

// création d'un clavier
for (let a = 0; a < 26; a++) {
    let p = document.createElement('p');
    p.textContent = (a + 10).toString(36);
    p.classList.add('alpha');
    p.style.cursor = "pointer";
    buttons.append(p);
    p.addEventListener("click", recupValue)
}

//() => recupValue((a+10).toString(36)) = soluce de zak mais je la comprends pas...
// me dit que "ça va permettre d'envoyer la valeur du p direct sans passer event."

// récupère la valeur au clic d'une "touche" du clavier
function recupValue(letter) {
    // convertissement de la valeur dans la boucle for.
    let answer = letter.target.innerHTML
    console.log(answer);
}

//détermine les scénarios de fin de game
function game(win) {
    if (win) {
        spanmess.textContent = message.win;
        console.log(message.win);
    } else {
        spanmess.textContent = message.lose;
        console.log(message.lose);
    }
    spanmess.style.display = "block";
}

//moyen alternatif de créer un espace vide par lettre, selon la longueur du mot
/* for (let i = 0; i < wordToGuess.length; i++) {

    let li = document.createElement('li');
    li.classList.add('letter');
    word.append(li);
}
 */