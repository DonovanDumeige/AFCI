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
console.log(currentWord);

// Création de li en fonction de la longueur du mot

for (let a = 0; a < 26; a++) {
    let p = document.createElement('p');
    p.textContent = (a + 10).toString(36);
    p.classList.add('alpha');
    p.style.cursor = "pointer";
    buttons.append(p);
    p.addEventListener("click", recupValue)
}

function start() {
    turn = 7;
    for (let i = 0; i < wordToGuess.length; i++) {
        let li = document.createElement('li');
        li.classList.add('letter');
        li.textContent = "_"
        word.append(li);
    }
}

// création d'un clavier


//() => recupValue((a+10).toString(36)) = soluce de zak mais je la comprends pas...
// me dit que "ça va permettre d'envoyer la valeur du p direct sans passer event."

// récupère la valeur au clic d'une "touche" du clavier
function recupValue(letter) {
    // convertissement de la valeur dans la boucle for.
    let answer = letter.target.innerHTML
    //console.log(wordToGuess.indexOf(answer));
    // Je rappelle ma variable li avec d'autres paramètres
    const li = document.querySelectorAll('.word li');
    // Avec indexOf je récupère la place d'une lettre dans mon mot à deviner.
    // Si elle est contenue, retourne la pos dans l'index sinon -1.
    if (!emptyWord.includes(answer)) {
        let pos = wordToGuess.indexOf(answer);
        //la boucle while permet de gérer les valeurs apparaissant plusieurs fois
        while (pos != -1 && emptyWord.length != wordToGuess.length) {
            li[pos].textContent = answer;
            // redistribue la valeur de pos en faisant avancer sa position de 1
            pos = wordToGuess.indexOf(answer, pos + 1);
            // permet de récupérer les valeurs dans un tableau
            //console.log(emptyWord);
            emptyWord.push(answer)
        }
        turn--
            console.log(turn);
            if (turn <= 0) {
                game(false)
            } else if(turn>0 && emptyWord.length != wordToGuess.length){
                emptyWord.push(answer)
            } else{
                game(true)
            }
    }

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

start();
//moyen alternatif de créer un espace vide par lettre, selon la longueur du mot
/* for (let i = 0; i < wordToGuess.length; i++) {

    let li = document.createElement('li');
    li.classList.add('letter');
    word.append(li);
}
 */