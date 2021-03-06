/*
-------------------- étape 0 -----------------
Faire un jolie html et css pour notre jeu 
(soyez imaginatif, vous n'êtes pas obligé de suivre mon design)
-------------------- étape 1 -----------------
faire un jeu de plus ou moins.
générer un nombre aléatoire entre 1 et 100.
Afficher un message indiquant les règles du jeu.
(optionnelle : la logique du jeu de base peut être fait dans la console avec un prompt)
-----------------étape 1.5 ----------------
le joueur peut rentrer un nombre dans l'input.
en appuyant sur entrée (event keydown)
ou en cliquant sur le bouton
on va changer le texte de la page pour indiquer si le joueur a donné un 
nombre inferieur, superrieur ou si il a gagné.
------------------- étape 2 -----------------------
Afficher un message d'erreur si le joueur met autre chose que des nombres
dans l'input.
de même si le joueur rentre une valeur inferieur à 1 ou supperieur à 100.
------------------- étape 3 -----------------------
On doit pouvoir limiter le nombre d'essai du joueur à 7 par exemple.
Si au bout du 7ème tour le joueur ne trouve pas, on va lui révéler 
le nombre et indiquer un message de défaite.
------------------- étape 4 -------------------------
lorsque la partie est terminé, on va désactiver le bouton et l'input
(tester l'attribut disabled sur ces éléments à true ou false)
------------------- étape 5 ---------------------------
Lorsque le joueur termine de jouer, (défaite ou victoire)
On va faire apparaître un bouton lui permettant de recommencer.
il faudra un nouveau nombre et réactiver notre bouton et input.
------------------- étape 6 ----------------------------
faire que la révélation du nombre et du bouton se fasse avec 
une carte qui se retourne.
*/

// Ma solution avec les fonctions en s'aidant de l'exemple de Nolwenn

//let nb = parseInt(prompt("Donnez moi un chiffre entre 0 et 100"))
let guess, turn;
const 
    text = document.querySelector('.text p'),
    card = document.querySelector('.card'),
    recto = card.querySelector('.recto'),
    verso = document.querySelector('.verso'),
    input = document.querySelector('#guessarea'),
    btn = document.querySelector('.guess .button');
    answer = recto.querySelector('span'),
    restart = document.querySelector('.restart');
console.log(recto);
function start() {
    turn = 7;
    guess = Math.floor(Math.random() * 100);
    text.textContent = `Donnez moi un nombre entre 0 et 100, vous avez ${turn} essais`;
    card.classList.remove("reveal");
    input.disabled = false;
    btn.disabled = false;
}

function endOfGame(win) {
    if(win){
        text.textContent = `Bravo vous avez gagné !
        Vous avez réussi en ${7-turn} tours`
    } else{
        text.textContent = 'Désolé vous avez perdu...'
    }
    answer.textContent = guess;
    card.classList.add('reveal')
    input.disabled = true;
    btn.disabled = true;
}

function check(){
    let nb = parseInt(input.value);
    console.log(nb);
    if (isNaN(nb)) {
        text.textContent = 'Veuillez entre un nombre'
        return; // rappel : return met fin à la fonction 
    }
    if (nb<0 || nb>100) {
        text.textContent= 'Veuillez donner un nombre entre 0 et 100';
        return;
    }
    turn--;
    if(nb === guess){
        endOfGame(true);
    } else if(turn === 1){
        endOfGame(false);
    } else if (nb > guess) {
        text.textContent = "Plus petit !";
    } else{
        text.textContent = "Plus grand !";
    }
    input.value = " ";
}

start();

restart.addEventListener("click", start);
btn.addEventListener("click", check);
input.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){ check()}
});


//Ma solution initiale 
/* input.addEventListener('keydown', e => {
    input.textContent = number;
    console.log(typeof(input.value));
    if (e.keyCode == 13) {
        if (e.target.value > guess) {
            console.log('Plus petit !');
            text.textContent = "Plus petit !";
        } else {
            console.log('Plus grand !');
            text.textContent = "Plus grand !";
        };
        turn = --turn;
        console.log("Encore " + turn + " tours");
        if (e.target.value == guess) {
            console.log("Bravo vous avez gagné !")
            console.log(`Vous avez réussi en ${7-turn} `)
            text.textContent = `Bravo vous avez gagné !
                Vous avez réussi en ${7-turn}`
        };

        if (turn == 0) {
            console.log("Désolé vous avez perdu...")
            console.log(`La réponsé était ${guess}`);
            text.textContent = `Désolé vous avez perdu...
                La réponse était ${guess}`
            input.setAttribute("disabled","disabled");
            
        };
    };
}); */
